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
        const nodoIzq = this.izq.interpretar(arbol, tabla);
        const nodoDer = this.der.interpretar(arbol, tabla);

        //SUMA
        if (this.operacion === '+') {
            return this.sumar(nodoIzq, nodoDer);
        }
    }

    //REGLAS DE CONVERSIÓN DE DATOS
    sumar(izq, der) {
        //int + int = int
        if (izq.tipo === TIPO_DATO.INT && der.tipo === TIPO_DATO.INT) {
            return { tipo: TIPO_DATO.INT, valor: Number(izq.valor) + Number(der.valor) };
        }
        // Regla: float64 + int = float64 [cite: 415]
        if (izq.tipo === TIPO_DATO.FLOAT && der.tipo === TIPO_DATO.INT) {
            return { tipo: TIPO_DATO.FLOAT, valor: parseFloat(izq.valor) + Number(der.valor) };
        }
        // Regla: string + cualquier cosa = string (Concatenación) [cite: 415]
        if (izq.tipo === TIPO_DATO.STRING || der.tipo === TIPO_DATO.STRING) {
            return { tipo: TIPO_DATO.STRING, valor: String(izq.valor) + String(der.valor) };
        }
        
        // Si no coincide con las tablas del enunciado, es un error léxico/sintáctico (según tu tutor) [cite: 446]
        return { tipo: TIPO_DATO.NULL, valor: null };
    }
}

module.exports = Aritmetica;