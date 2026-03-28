const Node = require('./astNode');
const Entorno = require('./entorno');
const Break = require('./break');
const Continue = require('./continue');
const { TIPO_DATO } = require('./tipo');
const Excepcion = require('./excepcion');

class SentenciaFor extends Node {
    constructor(inicializacion, condicion, actualizacion, instrucciones, linea, columna) {
        super(linea, columna);
        this.inicializacion = inicializacion;
        this.condicion = condicion;
        this.actualizacion = actualizacion;
        this.instrucciones = instrucciones;
    }

    interpretar(arbol, tabla) {
        const entornoFor = new Entorno(tabla);

        if (this.inicializacion) {
            this.inicializacion.interpretar(arbol, entornoFor);
        }

        let cond = this.condicion.interpretar(arbol, entornoFor);

        if (cond.tipo === TIPO_DATO.NULL) return null;

        if (cond.tipo !== TIPO_DATO.BOOL) {
            arbol.errores.push(new Excepcion("Semántico", `La condición del 'for' debe ser booleana, se encontró ${cond.tipo}.`, this.linea, this.columna));
            return null;
        }

        while (cond.valor === true) {
            const entornoBloque = new Entorno(entornoFor);
            let continuar = false;
            
            for (let instr of this.instrucciones) {
                const resultado = instr.interpretar(arbol, entornoBloque);
                
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
            
            if (this.actualizacion) {
                this.actualizacion.interpretar(arbol, entornoFor);
            }
            
            cond = this.condicion.interpretar(arbol, entornoFor);
            
            if (cond.tipo !== TIPO_DATO.BOOL) {
                arbol.errores.push(new Excepcion("Semántico", `La condición del 'for' debe ser booleana, se encontró ${cond.tipo}.`, this.linea, this.columna));
                break;
            }
        }
        
        return null;
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        
        let dot = `${miId} [label="Sentencia For"];\n`;
        dot += `${padre} -> ${miId};\n`;

        if (this.inicializacion && typeof this.inicializacion.getAST === 'function') {
            let initId = `n${contador.c++}`;
            dot += `${initId} [label="Inicialización"];\n`;
            dot += `${miId} -> ${initId};\n`;
            dot += this.inicializacion.getAST(initId, contador);
        }

        if (this.condicion && typeof this.condicion.getAST === 'function') {
            let condId = `n${contador.c++}`;
            dot += `${condId} [label="Condición"];\n`;
            dot += `${miId} -> ${condId};\n`;
            dot += this.condicion.getAST(condId, contador);
        }

        if (this.actualizacion && typeof this.actualizacion.getAST === 'function') {
            let actId = `n${contador.c++}`;
            dot += `${actId} [label="Actualización"];\n`;
            dot += `${miId} -> ${actId};\n`;
            dot += this.actualizacion.getAST(actId, contador);
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

module.exports = SentenciaFor;