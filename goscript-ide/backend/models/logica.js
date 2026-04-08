const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');
const Excepcion = require('./excepcion');

class Logica extends Node {
    constructor(izq, operacion, der, linea, columna) {
        super(linea, columna);
        this.izq = izq;
        this.operacion = operacion;
        this.der = der;
    }

    interpretar(arbol, tabla) {
        const izq = this.izq ? this.izq.interpretar(arbol, tabla) : null;
        const der = this.der ? this.der.interpretar(arbol, tabla) : null;

        // 1. Manejo de la operación unaria NOT (!)
        if (this.operacion === '!') {
            if (!der || der.tipo === 'NULL') return { tipo: 'NULL', valor: null };

            if (der.tipo !== TIPO_DATO.BOOL) {
                arbol.errores.push(new Excepcion("Semántico", `Operación lógica '!' requiere un operando booleano, se encontró ${der.tipo}.`, this.linea, this.columna));
                return { tipo: 'NULL', valor: null };
            }
            return { tipo: TIPO_DATO.BOOL, valor: !Boolean(der.valor) };
        }

        // 2. Manejo de operaciones binarias AND (&&) y OR (||)
        
        // Verificación de seguridad para evitar errores de lectura nula
        if (!izq || !der || izq.tipo === 'NULL' || der.tipo === 'NULL') {
            return { tipo: 'NULL', valor: null };
        }

        if (izq.tipo !== TIPO_DATO.BOOL || der.tipo !== TIPO_DATO.BOOL) {
            arbol.errores.push(new Excepcion("Semántico", `Operación lógica '${this.operacion}' requiere operandos booleanos, se encontró ${izq.tipo} y ${der.tipo}.`, this.linea, this.columna));
            return { tipo: 'NULL', valor: null };
        }

        let resultado = false;
        if (this.operacion === '&&') {
            resultado = Boolean(izq.valor) && Boolean(der.valor);
        } else if (this.operacion === '||') {
            resultado = Boolean(izq.valor) || Boolean(der.valor);
        }

        return { tipo: TIPO_DATO.BOOL, valor: resultado };
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        
        let dot = `${miId} [label="Lógica\\n'${this.operacion}'"];\n`;
        
        dot += `${padre} -> ${miId};\n`;

        //getast si hay operando izq
        if (this.izq && typeof this.izq.getAST === 'function') {
            dot += this.izq.getAST(miId, contador);
        }

        //operando derecho
        if (this.der && typeof this.der.getAST === 'function') {
            dot += this.der.getAST(miId, contador);
        }

        return dot;
    }
}

module.exports = Logica;