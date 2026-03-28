const Node = require('./astNode');
const Simbolo = require('./simbolo');

class DefinicionStruct extends Node {
    constructor(id, atributos, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.atributos = atributos; 
    }

    interpretar(arbol, tabla) {
        const simbolo = new Simbolo('STRUCT_DEF', this.id, this.atributos, this.linea, this.columna);
        tabla.guardar(this.id, simbolo);
        return null;
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let dot = `${miId} [label="Definición Struct\\n${this.id}"];\n`;
        dot += `${padre} -> ${miId};\n`;

        if (this.atributos && this.atributos.length > 0) {
            let attrId = `n${contador.c++}`;
            dot += `${attrId} [label="Atributos"];\n`;
            dot += `${miId} -> ${attrId};\n`;
            for (let attr of this.atributos) {
                let aId = `n${contador.c++}`;
                dot += `${aId} [label="${attr.id}: ${attr.tipo}"];\n`;
                dot += `${attrId} -> ${aId};\n`;
            }
        }
        return dot;
    }
}

module.exports = DefinicionStruct;