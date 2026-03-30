const Node = require('./astNode');
const Entorno = require('./entorno');
const Break = require('./break');
const Continue = require('./continue');
const Simbolo = require('./simbolo');
const { TIPO_DATO } = require('./tipo');
const Excepcion = require('./excepcion');

class SentenciaForRange extends Node {
    constructor(idIndice, idValor, expresion, instrucciones, linea, columna) {
        super(linea, columna);
        this.idIndice = idIndice;
        this.idValor = idValor;
        this.expresion = expresion;
        this.instrucciones = instrucciones;
    }

    interpretar(arbol, tabla) {
        const arreglo = this.expresion.interpretar(arbol, tabla);

        if (arreglo.tipo === TIPO_DATO.NULL) return null;

        if (arreglo.tipo !== TIPO_DATO.ARREGLO) {
            arbol.errores.push(new Excepcion("Semántico", "La sentencia 'for range' requiere un slice o arreglo.", this.linea, this.columna));
            return null;
        }

        for (let i = 0; i < arreglo.valor.length; i++) {
            //entorno local por iteracion
            const entornoFor = new Entorno(tabla, "For Range");

            //variable del indice
            const simIndice = new Simbolo(TIPO_DATO.INT, this.idIndice, i, this.linea, this.columna, "For Range");
            entornoFor.guardar(this.idIndice, simIndice);

            //variable valor
            const elemento = arreglo.valor[i];
            const simValor = new Simbolo(elemento.tipo, this.idValor, elemento.valor, this.linea, this.columna, "For Range");
            entornoFor.guardar(this.idValor, simValor);

            let continuar = false;
            for (let instr of this.instrucciones) {
                const resultado = instr.interpretar(arbol, entornoFor);

                if (resultado instanceof Break) {
                    return null; 
                }
                if (resultado instanceof Continue) {
                    continuar = true;
                    break; 
                }
                if (resultado) {
                    return resultado; 
                }
            }
        }

        return null;
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        
        let dot = `${miId} [label="For Range"];\n`;
        dot += `${padre} -> ${miId};\n`;

        let id1 = `n${contador.c++}`;
        dot += `${id1} [label="Índice\\n'${this.idIndice}'"];\n`;
        dot += `${miId} -> ${id1};\n`;

        let id2 = `n${contador.c++}`;
        dot += `${id2} [label="Valor\\n'${this.idValor}'"];\n`;
        dot += `${miId} -> ${id2};\n`;

        if (this.expresion && typeof this.expresion.getAST === 'function') {
            let exprId = `n${contador.c++}`;
            dot += `${exprId} [label="Slice"];\n`;
            dot += `${miId} -> ${exprId};\n`;
            dot += this.expresion.getAST(exprId, contador);
        }

        if (this.instrucciones && this.instrucciones.length > 0) {
            let instrId = `n${contador.c++}`;
            dot += `${instrId} [label="Instrucciones"];\n`;
            dot += `${miId} -> ${instrId};\n`;
            
            for (let instr of this.instrucciones) {
                if (instr && typeof instr.getAST === 'function') {
                    dot += instr.getAST(instrId, contador);
                }
            }
        }

        return dot;
    }
}

module.exports = SentenciaForRange;