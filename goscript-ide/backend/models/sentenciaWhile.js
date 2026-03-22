const Node = require('./astNode');
const Entorno = require('./entorno');
const Break = require('./break');
const Continue = require('./continue');
const { TIPO_DATO } = require('./tipo');

class SentenciaWhile extends Node {
    constructor(condicion, instrucciones, linea, columna) {
        super(linea, columna);
        this.condicion = condicion;
        this.instrucciones = instrucciones;
    }

    interpretar(arbol, tabla) {
        let cond = this.condicion.interpretar(arbol, tabla);

        if (cond.tipo !== TIPO_DATO.BOOL) {
            console.error("Error: La condición del while debe ser booleana.");
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
            }
            
            cond = this.condicion.interpretar(arbol, tabla);
            
            if (cond.tipo !== TIPO_DATO.BOOL) {
                console.error("Error: La condición del while debe ser booleana.");
                break;
            }
        }
        
        return null;
    }
}

module.exports = SentenciaWhile;