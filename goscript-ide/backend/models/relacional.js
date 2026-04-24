const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');
const Excepcion = require('./excepcion');

class Relacional extends Node {
    constructor(izq, operador, der, linea, columna) {
        super(linea, columna);
        this.izq = izq;
        this.operador = operador;
        this.der = der;
    }

interpretar(arbol, tabla) {
        let izq = this.izq.interpretar(arbol, tabla);
        let der = this.der.interpretar(arbol, tabla);

        if (!izq || !der) {
            return { tipo: 'NULL', valor: null };
        }

        //permitir comparación de igualdad con nulos (nil)
        if (this.operador === '==' || this.operador === '!=') {
            if (izq.tipo === 'NULL' || der.tipo === 'NULL' || izq.valor === null || der.valor === null) {
                let esIgual = (izq.valor === der.valor);
                if (this.operador === '==') return { tipo: TIPO_DATO.BOOL, valor: esIgual };
                if (this.operador === '!=') return { tipo: TIPO_DATO.BOOL, valor: !esIgual };
            }
        }

        //si hay un null en operaciones <, >, <=, >=, sigue devolviendo null
        if (izq.tipo === 'NULL' || der.tipo === 'NULL') {
            return { tipo: 'NULL', valor: null };
        }

        let valIzq = izq.valor;
        let valDer = der.valor;

        if (izq.tipo === TIPO_DATO.RUNE && typeof valIzq === 'string') valIzq = valIzq.charCodeAt(0);
        if (der.tipo === TIPO_DATO.RUNE && typeof valDer === 'string') valDer = valDer.charCodeAt(0);

        switch (this.operador) {
            case '<': return { tipo: TIPO_DATO.BOOL, valor: valIzq < valDer };
            case '>': return { tipo: TIPO_DATO.BOOL, valor: valIzq > valDer };
            case '<=': return { tipo: TIPO_DATO.BOOL, valor: valIzq <= valDer };
            case '>=': return { tipo: TIPO_DATO.BOOL, valor: valIzq >= valDer };
            case '==': return { tipo: TIPO_DATO.BOOL, valor: valIzq === valDer };
            case '!=': return { tipo: TIPO_DATO.BOOL, valor: valIzq !== valDer };
            default: return { tipo: 'NULL', valor: null };
        }
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let dot = `${miId} [label="Relacional\\n'${this.operador}'"];\n`;
        dot += `${padre} -> ${miId};\n`;

        if (this.izq && typeof this.izq.getAST === 'function') {
            dot += this.izq.getAST(miId, contador);
        }
        if (this.der && typeof this.der.getAST === 'function') {
            dot += this.der.getAST(miId, contador);
        }

        return dot;
    }
}

module.exports = Relacional;