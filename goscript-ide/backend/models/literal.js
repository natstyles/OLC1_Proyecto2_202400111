const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');

class Literal extends Node {
    constructor(tipo, valor, linea, columna) {
        super(linea, columna);
        this.tipo = tipo;
        
        if (this.tipo === TIPO_DATO.INT) {
            this.valor = parseInt(valor, 10);
        } else if (this.tipo === TIPO_DATO.FLOAT) {
            this.valor = parseFloat(valor);
        } else if (this.tipo === TIPO_DATO.BOOL) {
            this.valor = (valor === 'true' || valor === true);
        } else {
            this.valor = valor;
        }
    }

    interpretar(arbol, tabla) {
        return { tipo: this.tipo, valor: this.valor };
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let dot = `${miId} [label="Literal\\n${this.valor}"];\n`;
        dot += `${padre} -> ${miId};\n`;
        return dot;
    }
}

module.exports = Literal;