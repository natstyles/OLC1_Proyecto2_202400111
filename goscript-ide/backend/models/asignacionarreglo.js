const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');
const Excepcion = require('./excepcion');

class AsignacionArreglo extends Node {
    constructor(id, indices, expresion, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.indices = indices;
        this.expresion = expresion;
    }

    interpretar(arbol, tabla) {
        let simbolo = tabla.obtener(this.id);
        if (!simbolo) {
            arbol.errores.push(new Excepcion("Semántico", `Arreglo '${this.id}' no encontrado.`, this.linea, this.columna));
            return null;
        }

        let elementoActual = { tipo: simbolo.tipo, valor: simbolo.valor };

        for (let i = 0; i < this.indices.length - 1; i++) {
            let indexExpr = this.indices[i].interpretar(arbol, tabla);
            let idx = indexExpr.valor;
            elementoActual = elementoActual.valor[idx];
        }

        let lastIdxExpr = this.indices[this.indices.length - 1].interpretar(arbol, tabla);
        let lastIdx = lastIdxExpr.valor;

        let newValue = this.expresion.interpretar(arbol, tabla);
        
        if (elementoActual.valor[lastIdx]) {
            elementoActual.valor[lastIdx] = newValue;
        }

        return null;
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let dot = `${miId} [label="Asignación Arreglo\\n'${this.id}'"];\n`;
        dot += `${padre} -> ${miId};\n`;

        for (let idx of this.indices) {
            if (idx && typeof idx.getAST === 'function') {
                dot += idx.getAST(miId, contador);
            }
        }

        if (this.expresion && typeof this.expresion.getAST === 'function') {
            let exprId = `n${contador.c++}`;
            dot += `${exprId} [label="Nuevo Valor"];\n`;
            dot += `${miId} -> ${exprId};\n`;
            dot += this.expresion.getAST(exprId, contador);
        }

        return dot;
    }
}

module.exports = AsignacionArreglo;