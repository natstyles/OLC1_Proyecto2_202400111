const Node = require('./astNode');

class Break extends Node {
    constructor(linea, columna) {
        super(linea, columna);
    }

    interpretar(arbol, tabla) {
        return this; 
    }
}

module.exports = Break;