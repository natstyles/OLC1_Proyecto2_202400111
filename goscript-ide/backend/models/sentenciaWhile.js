const Node = require('./astNode');
const Entorno = require('./entorno');
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
                //BREA Y CONTINUE
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