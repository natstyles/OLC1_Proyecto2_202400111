const Node = require('./astNode');

class Return extends Node {
    constructor(expresion, linea, columna) {
        super(linea, columna);
        this.expresion = expresion;
        this.valorRetorno = null;
    }

    interpretar(arbol, tabla) {
        if (this.expresion) {
            this.valorRetorno = this.expresion.interpretar(arbol, tabla);
        }
        return this;
    }
}

module.exports = Return;