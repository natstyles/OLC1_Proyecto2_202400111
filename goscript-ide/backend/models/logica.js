const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');

class Logica extends Node {
    constructor(izq, operacion, der, linea, columna) {
        super(linea, columna);
        this.izq = izq;
        this.operacion = operacion;
        this.der = der;
    }

    interpretar(arbol, tabla) {
        const izq = this.izq ? this.izq.interpretar(arbol, tabla) : null;
        const der = this.der.interpretar(arbol, tabla);

        let resultado = false;

        switch (this.operacion) {
            case '&&': resultado = Boolean(izq.valor) && Boolean(der.valor); break;
            case '||': resultado = Boolean(izq.valor) || Boolean(der.valor); break;
            case '!':  resultado = !Boolean(der.valor); break;
        }

        return { tipo: TIPO_DATO.BOOL, valor: resultado };
    }
}

module.exports = Logica;