const Node = require('./astNode');
const Entorno = require('./entorno');
const { TIPO_DATO } = require('./tipo');

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

        if (cond.tipo !== TIPO_DATO.BOOL) {
            console.error("Error: La condición del for debe ser booleana.");
            return null;
        }

        while (cond.valor === true) {
            const entornoBloque = new Entorno(entornoFor);
            
            for (let instr of this.instrucciones) {
                const resultado = instr.interpretar(arbol, entornoBloque);
            }
            
            if (this.actualizacion) {
                this.actualizacion.interpretar(arbol, entornoFor);
            }
            
            cond = this.condicion.interpretar(arbol, entornoFor);
            
            if (cond.tipo !== TIPO_DATO.BOOL) {
                console.error("Error: La condición del for debe ser booleana.");
                break;
            }
        }
        
        return null;
    }
}

module.exports = SentenciaFor;