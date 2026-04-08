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

        // Si alguna expresión falló, propagamos el null
        if (!izq || !der || izq.tipo === 'NULL' || der.tipo === 'NULL') {
            return { tipo: 'NULL', valor: null };
        }

        let valIzq = izq.valor;
        let valDer = der.valor;

        // Transformación clave: Convertir RUNE a su valor numérico ASCII
        if (izq.tipo === TIPO_DATO.RUNE && typeof valIzq === 'string') {
            valIzq = valIzq.charCodeAt(0);
        }
        if (der.tipo === TIPO_DATO.RUNE && typeof valDer === 'string') {
            valDer = valDer.charCodeAt(0);
        }

        // Ejecutar la comparación relacional
        switch (this.operador) {
            case '<':
                return { tipo: TIPO_DATO.BOOL, valor: valIzq < valDer };
            case '>':
                return { tipo: TIPO_DATO.BOOL, valor: valIzq > valDer };
            case '<=':
                return { tipo: TIPO_DATO.BOOL, valor: valIzq <= valDer };
            case '>=':
                return { tipo: TIPO_DATO.BOOL, valor: valIzq >= valDer };
            case '==':
                return { tipo: TIPO_DATO.BOOL, valor: valIzq === valDer };
            case '!=':
                return { tipo: TIPO_DATO.BOOL, valor: valIzq !== valDer };
            default:
                return { tipo: 'NULL', valor: null };
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