const Node = require('./astNode');

class AccesoStruct extends Node {
    constructor(id, atributo, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.atributo = atributo;
    }

    interpretar(arbol, tabla) {
        let variable = tabla.obtener(this.id);
        if (!variable) return { tipo: 'NULL', valor: null };

        let mapaStruct = variable.valor;
        
        if (mapaStruct instanceof Map && mapaStruct.has(this.atributo)) {
            return mapaStruct.get(this.atributo);
        }

        return { tipo: 'NULL', valor: null };
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let dot = `${miId} [label="Acceso Struct\\n${this.id}.${this.atributo}"];\n`;
        dot += `${padre} -> ${miId};\n`;
        return dot;
    }
}

module.exports = AccesoStruct;