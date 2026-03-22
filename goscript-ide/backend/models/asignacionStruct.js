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
}

module.exports = AsignacionStruct;