const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');
const Excepcion = require('./excepcion');

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

        if (izq.tipo === TIPO_DATO.NULL || der.tipo === TIPO_DATO.NULL) {
            return { tipo: TIPO_DATO.NULL, valor: null };
        }

        if (['<', '<=', '>', '>='].includes(this.operacion)) {
            if (![TIPO_DATO.INT, TIPO_DATO.FLOAT].includes(izq.tipo) || ![TIPO_DATO.INT, TIPO_DATO.FLOAT].includes(der.tipo)) {
                arbol.errores.push(new Excepcion("Semántico", `Operación relacional '${this.operacion}' no válida entre ${izq.tipo} y ${der.tipo}.`, this.linea, this.columna));
                return { tipo: TIPO_DATO.NULL, valor: null };
            }
        }

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