const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');

class Relacional extends Node {
    constructor(izq, operacion, der, linea, columna) {
        super(linea, columna);
        this.izq = izq;
        this.operacion = operacion;
        this.der = der;
    }

    interpretar(arbol, tabla) {
        const izq = this.izq.interpretar(arbol, tabla);
        const der = this.der.interpretar(arbol, tabla);

        let resultado = false;

        switch (this.operacion) {
            case '==': resultado = izq.valor == der.valor; break;
            case '!=': resultado = izq.valor != der.valor; break;
            case '<':  resultado = Number(izq.valor) < Number(der.valor); break;
            case '<=': resultado = Number(izq.valor) <= Number(der.valor); break;
            case '>':  resultado = Number(izq.valor) > Number(der.valor); break;
            case '>=': resultado = Number(izq.valor) >= Number(der.valor); break;
        }

        return { tipo: TIPO_DATO.BOOL, valor: resultado };
    }
}

module.exports = Relacional;