const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');

class Arreglo extends Node {
    constructor(elementos, linea, columna) {
        super(linea, columna);
        this.elementos = elementos; 
    }

    interpretar(arbol, tabla) {
        let valores = [];
        for (let i = 0; i < this.elementos.length; i++) {
            let val = this.elementos[i].interpretar(arbol, tabla);
            valores.push(val);
        }
        return { tipo: TIPO_DATO.ARREGLO, valor: valores };
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let dot = `${miId} [label="Arreglo"];\n`;
        dot += `${padre} -> ${miId};\n`;

        if (this.elementos && this.elementos.length > 0) {
            let elemsId = `n${contador.c++}`;
            dot += `${elemsId} [label="Elementos"];\n`;
            dot += `${miId} -> ${elemsId};\n`;
            for (let el of this.elementos) {
                if (el && typeof el.getAST === 'function') {
                    dot += el.getAST(elemsId, contador);
                }
            }
        }
        return dot;
    }
}

module.exports = Arreglo;