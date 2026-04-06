const Node = require('./astNode');

class InstanciaStruct extends Node {
    constructor(id, valores, linea, columna) {
        super(linea, columna);
        this.id = id; 
        this.valores = valores; 
    }

    interpretar(arbol, tabla) {
        let valoresStruct = new Map();

        for (let val of this.valores) {
            let valorAtributo = val.expresion.interpretar(arbol, tabla);
            if (!valorAtributo) continue;
            
            valoresStruct.set(val.id, { tipo: valorAtributo.tipo, valor: valorAtributo.valor });
        }

        return { tipo: 'STRUCT', valor: valoresStruct };
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let dot = `${miId} [label="Instancia Struct"];\n`;
        dot += `${padre} -> ${miId};\n`;

        for (let val of this.valores) {
            let atrId = `n${contador.c++}`;
            dot += `${atrId} [label="${val.id}"];\n`;
            dot += `${miId} -> ${atrId};\n`;
            if (val.expresion && typeof val.expresion.getAST === 'function') {
                dot += val.expresion.getAST(atrId, contador);
            }
        }
        return dot;
    }
}

module.exports = InstanciaStruct;