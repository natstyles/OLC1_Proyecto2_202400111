const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');

class Aritmetica extends Node {
    constructor(izq, operacion, der, linea, columna) {
        super(linea, columna);
        this.izq = izq;
        this.operacion = operacion;
        this.der = der;
    }

    interpretar(arbol, tabla) {
        const nodoIzq = this.izq ? this.izq.interpretar(arbol, tabla) : null;
        const nodoDer = this.der.interpretar(arbol, tabla);

        switch (this.operacion) {
            case '+': return this.sumar(nodoIzq, nodoDer);
            case '-': return this.restar(nodoIzq, nodoDer); //maneja binaria y unaria
            case '*': return this.multiplicar(nodoIzq, nodoDer);
            case '/': return this.dividir(nodoIzq, nodoDer);
            case '%': return this.modulo(nodoIzq, nodoDer);
            default: return { tipo: TIPO_DATO.NULL, valor: null };
        }
    }

    sumar(izq, der) {
        if (izq.tipo === TIPO_DATO.INT && der.tipo === TIPO_DATO.INT) 
            return { tipo: TIPO_DATO.INT, valor: Number(izq.valor) + Number(der.valor) };
        if (izq.tipo === TIPO_DATO.FLOAT || der.tipo === TIPO_DATO.FLOAT) 
            return { tipo: TIPO_DATO.FLOAT, valor: parseFloat(izq.valor) + parseFloat(der.valor) };
        if (izq.tipo === TIPO_DATO.STRING || der.tipo === TIPO_DATO.STRING) 
            return { tipo: TIPO_DATO.STRING, valor: String(izq.valor) + String(der.valor) };
        return { tipo: TIPO_DATO.NULL, valor: null };
    }

    restar(izq, der) {
        //negación -expresion
        if (!izq) {
            if (der.tipo === TIPO_DATO.INT) return { tipo: TIPO_DATO.INT, valor: -Number(der.valor) };
            if (der.tipo === TIPO_DATO.FLOAT) return { tipo: TIPO_DATO.FLOAT, valor: -parseFloat(der.valor) };
        }
        //Resta bin
        if (izq.tipo === TIPO_DATO.INT && der.tipo === TIPO_DATO.INT) 
            return { tipo: TIPO_DATO.INT, valor: Number(izq.valor) - Number(der.valor) };
        if (izq.tipo === TIPO_DATO.FLOAT || der.tipo === TIPO_DATO.FLOAT) 
            return { tipo: TIPO_DATO.FLOAT, valor: parseFloat(izq.valor) - parseFloat(der.valor) };
        return { tipo: TIPO_DATO.NULL, valor: null };
    }

    multiplicar(izq, der) {
        if (izq.tipo === TIPO_DATO.INT && der.tipo === TIPO_DATO.INT) 
            return { tipo: TIPO_DATO.INT, valor: Number(izq.valor) * Number(der.valor) };
        if (izq.tipo === TIPO_DATO.FLOAT || der.tipo === TIPO_DATO.FLOAT) 
            return { tipo: TIPO_DATO.FLOAT, valor: parseFloat(izq.valor) * parseFloat(der.valor) };
        return { tipo: TIPO_DATO.NULL, valor: null };
    }

    dividir(izq, der) {
        if (Number(der.valor) === 0) {
            console.error("Error: División entre cero");
            return { tipo: TIPO_DATO.NULL, valor: null };
        }
        if (izq.tipo === TIPO_DATO.INT && der.tipo === TIPO_DATO.INT) 
            return { tipo: TIPO_DATO.INT, valor: Math.trunc(Number(izq.valor) / Number(der.valor)) };
        return { tipo: TIPO_DATO.FLOAT, valor: parseFloat(izq.valor) / parseFloat(der.valor) };
    }

    modulo(izq, der) {
        if (izq.tipo === TIPO_DATO.INT && der.tipo === TIPO_DATO.INT) {
            if (Number(der.valor) === 0) return { tipo: TIPO_DATO.NULL, valor: null };
            return { tipo: TIPO_DATO.INT, valor: Number(izq.valor) % Number(der.valor) };
        }
        return { tipo: TIPO_DATO.NULL, valor: null };
    }
}

module.exports = Aritmetica;