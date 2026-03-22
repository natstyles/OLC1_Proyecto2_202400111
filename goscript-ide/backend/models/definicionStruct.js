const Node = require('./astNode');
const Simbolo = require('./simbolo');

class DefinicionStruct extends Node {
    constructor(id, atributos, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.atributos = atributos; 
    }

    interpretar(arbol, tabla) {
        const simbolo = new Simbolo('STRUCT_DEF', this.id, this.atributos, this.linea, this.columna);
        tabla.guardar(this.id, simbolo);
        return null;
    }
}

module.exports = DefinicionStruct;