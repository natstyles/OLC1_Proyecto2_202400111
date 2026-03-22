const Node = require('./astNode');
const Entorno = require('./entorno');
const { TIPO_DATO } = require('./tipo');

class SentenciaIf extends Node {
    constructor(condicion, instruccionesIf, instruccionesElse, linea, columna) {
        super(linea, columna);
        this.condicion = condicion;
        this.instruccionesIf = instruccionesIf;
        this.instruccionesElse = instruccionesElse; 
    }

    interpretar(arbol, tabla) {
        const cond = this.condicion.interpretar(arbol, tabla);

        if (cond.tipo !== TIPO_DATO.BOOL) {
            console.error("Error: La condición del if debe ser booleana.");
            return null;
        }

        if (cond.valor === true) {
            const nuevoEntorno = new Entorno(tabla);
            for (let instr of this.instruccionesIf) {
                instr.interpretar(arbol, nuevoEntorno);
            }
        } else if (this.instruccionesElse != null) {
            const nuevoEntorno = new Entorno(tabla);
            if (this.instruccionesElse instanceof SentenciaIf) {
                this.instruccionesElse.interpretar(arbol, nuevoEntorno);
            } else {
                for (let instr of this.instruccionesElse) {
                    instr.interpretar(arbol, nuevoEntorno);
                }
            }
        }
        return null;
    }
}

module.exports = SentenciaIf;