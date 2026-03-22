const Node = require('./astNode');

class Caso extends Node {
    constructor(expresion, instrucciones, linea, columna) {
        super(linea, columna);
        this.expresion = expresion; 
        this.instrucciones = instrucciones;
    }

    interpretar(arbol, tabla) {
        return this;
    }
}

module.exports = Caso;