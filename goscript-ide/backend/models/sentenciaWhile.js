const Node = require('./astNode');
const Entorno = require('./entorno');
const Break = require('./break');
const Continue = require('./continue');
const { TIPO_DATO } = require('./tipo');
const Excepcion = require('./excepcion');

class SentenciaWhile extends Node {
    constructor(condicion, instrucciones, linea, columna) {
        super(linea, columna);
        this.condicion = condicion;
        this.instrucciones = instrucciones;
    }

    interpretar(arbol, tabla) {
        let cond = this.condicion.interpretar(arbol, tabla);

        if (cond.tipo === TIPO_DATO.NULL) return null;

        if (cond.tipo !== TIPO_DATO.BOOL) {
            arbol.errores.push(new Excepcion("Semántico", `La condición del 'while' debe ser booleana, se encontró ${cond.tipo}.`, this.linea, this.columna));
            return null;
        }

        while (cond.valor === true) {
            const nuevoEntorno = new Entorno(tabla, "While");
            
            for (let instr of this.instrucciones) {
                const resultado = instr.interpretar(arbol, nuevoEntorno);
                
                if (resultado instanceof Break) {
                    return null;
                }
                if (resultado instanceof Continue) {
                    break;
                }
                if (resultado) {
                    return resultado; 
                }
            }
            
            cond = this.condicion.interpretar(arbol, tabla);
            
            if (cond.tipo !== TIPO_DATO.BOOL) {
                arbol.errores.push(new Excepcion("Semántico", `La condición del 'while' debe ser booleana, se encontró ${cond.tipo}.`, this.linea, this.columna));
                break;
            }
        }
        
        return null;
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        
        let dot = `${miId} [label="Sentencia While"];\n`;
        dot += `${padre} -> ${miId};\n`;

        if (this.condicion && typeof this.condicion.getAST === 'function') {
            let condId = `n${contador.c++}`;
            dot += `${condId} [label="Condición"];\n`;
            dot += `${miId} -> ${condId};\n`;
            dot += this.condicion.getAST(condId, contador);
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

module.exports = SentenciaWhile;