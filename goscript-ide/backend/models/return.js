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

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        
        let dot = `${miId} [label="Return"];\n`;
        dot += `${padre} -> ${miId};\n`;

        if (this.expresion && typeof this.expresion.getAST === 'function') {
            dot += this.expresion.getAST(miId, contador);
        }

        return dot;
    }
}

module.exports = Return;