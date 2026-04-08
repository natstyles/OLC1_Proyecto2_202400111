const Node = require('./astNode');

class Continue extends Node {
    constructor(linea, columna) {
        super(linea, columna);
    }

    interpretar(arbol, tabla) {
        return this; 
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        return `${miId} [label="Continue"];\n${padre} -> ${miId};\n`;
    }
}

module.exports = Continue;