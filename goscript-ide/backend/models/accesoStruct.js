const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');

class AccesoStruct extends Node {
    constructor(idVariable, atributo, linea, columna) {
        super(linea, columna);
        this.idVariable = idVariable;
        this.atributo = atributo;
    }

    interpretar(arbol, tabla) {
        let variable = tabla.obtener(this.idVariable);
        if (!variable || variable.tipo !== TIPO_DATO.STRUCT) {
            console.error(`Error: Variable ${this.idVariable} no existe o no es un struct.`);
            return { tipo: TIPO_DATO.NULL, valor: null };
        }

        let valorAtributo = variable.valor.get(this.atributo);
        if (!valorAtributo) {
            console.error(`Error: Atributo ${this.atributo} no inicializado en ${this.idVariable}.`);
            return { tipo: TIPO_DATO.NULL, valor: null };
        }

        return valorAtributo;
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let dot = `${miId} [label="Acceso Struct\\n${this.idVariable}.${this.atributo}"];\n`;
        dot += `${padre} -> ${miId};\n`;
        return dot;
    }
}

module.exports = AccesoStruct;