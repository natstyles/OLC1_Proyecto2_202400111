const Node = require('./astNode');

class Break extends Node {
    constructor(linea, columna) {
        super(linea, columna);
    }

    interpretar(arbol, tabla) {
        return this; 
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let dot = `${miId} [label="Break"];\n`;
        dot += `${padre} -> ${miId};\n`;
        return dot;
    }
}

module.exports = Break;