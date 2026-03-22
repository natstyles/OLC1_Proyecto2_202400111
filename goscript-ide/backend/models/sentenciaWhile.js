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
            const nuevoEntorno = new Entorno(tabla);
            
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
}

module.exports = SentenciaWhile;