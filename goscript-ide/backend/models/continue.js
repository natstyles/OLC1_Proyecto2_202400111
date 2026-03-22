const Node = require('./astNode');

class Continue extends Node {
    constructor(linea, columna) {
        super(linea, columna);
    }

    interpretar(arbol, tabla) {
        return this;
    }
}

module.exports = Continue;