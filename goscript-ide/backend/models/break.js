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
        return `${miId} [label="Break"];\n${padre} -> ${miId};\n`;
    }
}

module.exports = Break;