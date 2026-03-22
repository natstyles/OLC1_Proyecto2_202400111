const Node = require('./astNode');

class Literal extends Node {
    constructor(tipo, valor, linea, columna) {
        super(linea, columna);
        this.tipo = tipo;
        this.valor = valor;
    }

    interpretar(arbol, tabla) {
        return {
            tipo: this.tipo,
            valor: this.valor
        };
    }
}

module.exports = Literal;