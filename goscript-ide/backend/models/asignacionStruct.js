const Node = require('./astNode');

class AsignacionStruct extends Node {
    constructor(idVariable, atributo, expresion, linea, columna) {
        super(linea, columna);
        this.idVariable = idVariable;
        this.atributo = atributo;
        this.expresion = expresion;
    }

    interpretar(arbol, tabla) {
        let variable = tabla.obtener(this.idVariable);
        if (!variable || variable.tipo !== 'STRUCT') {
            console.error(`Error: Variable ${this.idVariable} no existe o no es struct.`);
            return null;
        }

        let nuevoValor = this.expresion.interpretar(arbol, tabla);
        variable.valor.set(this.atributo, nuevoValor);

        return null;
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let dot = `${miId} [label="Asignación Struct\\n${this.idVariable}.${this.atributo}"];\n`;
        dot += `${padre} -> ${miId};\n`;

        if (this.expresion && typeof this.expresion.getAST === 'function') {
            dot += this.expresion.getAST(miId, contador);
        }

        return dot;
    }
}

module.exports = AsignacionStruct;