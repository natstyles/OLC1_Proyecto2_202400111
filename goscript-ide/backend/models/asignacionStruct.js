const Node = require('./astNode');

class AsignacionStruct extends Node {
    constructor(id, atributo, expresion, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.atributo = atributo;
        this.expresion = expresion;
    }

    interpretar(arbol, tabla) {
        let variable = tabla.obtener(this.id);
        if (!variable) return null;

        let val = this.expresion.interpretar(arbol, tabla);
        if (!val) return null;

        let mapaStruct = variable.valor;
        if (mapaStruct instanceof Map) {
            mapaStruct.set(this.atributo, { tipo: val.tipo, valor: val.valor });
        }
        
        return null;
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let dot = `${miId} [label="Asignación Struct\\n${this.id}.${this.atributo}"];\n`;
        dot += `${padre} -> ${miId};\n`;
        if (this.expresion && typeof this.expresion.getAST === 'function') {
            dot += this.expresion.getAST(miId, contador);
        }
        return dot;
    }
}

module.exports = AsignacionStruct;