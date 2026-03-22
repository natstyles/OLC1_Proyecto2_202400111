const Node = require('./astNode');

class Asignacion extends Node {
    constructor(id, expresion, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.expresion = expresion;
    }

    interpretar(arbol, tabla) {
        let simbolo = tabla.obtener(this.id);
        
        if (simbolo === null) {
            console.error(`Error: Variable ${this.id} no existe.`);
            return null;
        }

        let nuevoValor = this.expresion.interpretar(arbol, tabla);
        
        if (simbolo.tipo !== nuevoValor.tipo) {
            console.error(`Error: No se puede asignar un valor de tipo ${nuevoValor.tipo} a la variable ${this.id} de tipo ${simbolo.tipo}.`);
            return null;
        }

        simbolo.valor = nuevoValor.valor;
        tabla.guardar(this.id, simbolo);
        
        return null;
    }
}

module.exports = Asignacion;