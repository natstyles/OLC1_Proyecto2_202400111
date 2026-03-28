const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');

class AccesoArreglo extends Node {
    constructor(id, indice, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.indice = indice;
    }

    interpretar(arbol, tabla) {
        let simbolo = tabla.obtener(this.id);
        if (simbolo === null) {
            console.error(`Error: Arreglo ${this.id} no existe.`);
            return { tipo: TIPO_DATO.NULL, valor: null };
        }

        let idx = this.indice.interpretar(arbol, tabla);
        if (idx.tipo !== TIPO_DATO.INT) {
            console.error("Error: El índice debe ser de tipo entero.");
            return { tipo: TIPO_DATO.NULL, valor: null };
        }

        let arreglo = simbolo.valor;
        if (idx.valor < 0 || idx.valor >= arreglo.length) {
            console.error("Error: Índice fuera de los límites del arreglo.");
            return { tipo: TIPO_DATO.NULL, valor: null };
        }

        return arreglo[idx.valor];
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let dot = `${miId} [label="Acceso Arreglo\\n${this.id}"];\n`;
        dot += `${padre} -> ${miId};\n`;

        if (this.indice && typeof this.indice.getAST === 'function') {
            let idxId = `n${contador.c++}`;
            dot += `${idxId} [label="Índice"];\n`;
            dot += `${miId} -> ${idxId};\n`;
            dot += this.indice.getAST(idxId, contador);
        }

        return dot;
    }
}

module.exports = AccesoArreglo;