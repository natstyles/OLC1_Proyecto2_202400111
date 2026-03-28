const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');
const Excepcion = require('./excepcion');

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

        if ((this.izq && nodoIzq.tipo === TIPO_DATO.NULL) || nodoDer.tipo === TIPO_DATO.NULL) {
            return { tipo: TIPO_DATO.NULL, valor: null };
        }

        switch (this.operacion) {
            case '+': return this.sumar(nodoIzq, nodoDer, arbol);
            case '-': return this.restar(nodoIzq, nodoDer, arbol);
            case '*': return this.multiplicar(nodoIzq, nodoDer, arbol);
            case '/': return this.dividir(nodoIzq, nodoDer, arbol);
            case '%': return this.modulo(nodoIzq, nodoDer, arbol);
            default: return { tipo: TIPO_DATO.NULL, valor: null };
        }
    }

    sumar(izq, der, arbol) {
        if (izq.tipo === TIPO_DATO.INT && der.tipo === TIPO_DATO.INT) 
            return { tipo: TIPO_DATO.INT, valor: Number(izq.valor) + Number(der.valor) };
        if (izq.tipo === TIPO_DATO.FLOAT || der.tipo === TIPO_DATO.FLOAT) 
            return { tipo: TIPO_DATO.FLOAT, valor: parseFloat(izq.valor) + parseFloat(der.valor) };
        if (izq.tipo === TIPO_DATO.STRING || der.tipo === TIPO_DATO.STRING) 
            return { tipo: TIPO_DATO.STRING, valor: String(izq.valor) + String(der.valor) };
        
        arbol.errores.push(new Excepcion("Semántico", `Suma no válida entre ${izq.tipo} y ${der.tipo}`, this.linea, this.columna));
        return { tipo: TIPO_DATO.NULL, valor: null };
    }

    restar(izq, der, arbol) {
        if (!izq) {
            if (der.tipo === TIPO_DATO.INT) return { tipo: TIPO_DATO.INT, valor: -Number(der.valor) };
            if (der.tipo === TIPO_DATO.FLOAT) return { tipo: TIPO_DATO.FLOAT, valor: -parseFloat(der.valor) };
            arbol.errores.push(new Excepcion("Semántico", `Negación unaria no válida para ${der.tipo}`, this.linea, this.columna));
            return { tipo: TIPO_DATO.NULL, valor: null };
        }
        
        if (izq.tipo === TIPO_DATO.INT && der.tipo === TIPO_DATO.INT) 
            return { tipo: TIPO_DATO.INT, valor: Number(izq.valor) - Number(der.valor) };
        if (izq.tipo === TIPO_DATO.FLOAT || der.tipo === TIPO_DATO.FLOAT) 
            return { tipo: TIPO_DATO.FLOAT, valor: parseFloat(izq.valor) - parseFloat(der.valor) };
        
        arbol.errores.push(new Excepcion("Semántico", `Resta no válida entre ${izq.tipo} y ${der.tipo}`, this.linea, this.columna));
        return { tipo: TIPO_DATO.NULL, valor: null };
    }

    multiplicar(izq, der, arbol) {
        if (izq.tipo === TIPO_DATO.INT && der.tipo === TIPO_DATO.INT) 
            return { tipo: TIPO_DATO.INT, valor: Number(izq.valor) * Number(der.valor) };
        if (izq.tipo === TIPO_DATO.FLOAT || der.tipo === TIPO_DATO.FLOAT) 
            return { tipo: TIPO_DATO.FLOAT, valor: parseFloat(izq.valor) * parseFloat(der.valor) };
        
        arbol.errores.push(new Excepcion("Semántico", `Multiplicación no válida entre ${izq.tipo} y ${der.tipo}`, this.linea, this.columna));
        return { tipo: TIPO_DATO.NULL, valor: null };
    }

    dividir(izq, der, arbol) {
        if (Number(der.valor) === 0) {
            arbol.errores.push(new Excepcion("Semántico", "División entre cero no permitida.", this.linea, this.columna));
            return { tipo: TIPO_DATO.NULL, valor: null };
        }
        if (izq.tipo === TIPO_DATO.INT && der.tipo === TIPO_DATO.INT) 
            return { tipo: TIPO_DATO.INT, valor: Math.trunc(Number(izq.valor) / Number(der.valor)) };
        if (izq.tipo === TIPO_DATO.FLOAT || der.tipo === TIPO_DATO.FLOAT)
            return { tipo: TIPO_DATO.FLOAT, valor: parseFloat(izq.valor) / parseFloat(der.valor) };

        arbol.errores.push(new Excepcion("Semántico", `División no válida entre ${izq.tipo} y ${der.tipo}`, this.linea, this.columna));
        return { tipo: TIPO_DATO.NULL, valor: null };
    }

    modulo(izq, der, arbol) {
        if (izq.tipo === TIPO_DATO.INT && der.tipo === TIPO_DATO.INT) {
            if (Number(der.valor) === 0) {
                arbol.errores.push(new Excepcion("Semántico", "Módulo entre cero no permitido.", this.linea, this.columna));
                return { tipo: TIPO_DATO.NULL, valor: null };
            }
            return { tipo: TIPO_DATO.INT, valor: Number(izq.valor) % Number(der.valor) };
        }
        
        arbol.errores.push(new Excepcion("Semántico", `Módulo no válido entre ${izq.tipo} y ${der.tipo}. Ambos deben ser enteros.`, this.linea, this.columna));
        return { tipo: TIPO_DATO.NULL, valor: null };
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        
        let dot = `${miId} [label="Aritmética\\n'${this.operacion}'"];\n`;
        
        dot += `${padre} -> ${miId};\n`;

        //si hay operando izquierdo, llamada recursiva al AST
        if (this.izq && typeof this.izq.getAST === 'function') {
            dot += this.izq.getAST(miId, contador);
        }

        // llamada recursiva al operando derecho
        if (this.der && typeof this.der.getAST === 'function') {
            dot += this.der.getAST(miId, contador);
        }

        return dot;
    }
}

module.exports = Aritmetica;