const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');
const Excepcion = require('./excepcion');

class Declaracion extends Node {
    constructor(tipo, id, valor, linea, columna) {
        super(linea, columna);
        this.tipo = tipo;
        this.id = id;
        this.valor = valor;
    }

    interpretar(arbol, tabla) {
        let valorFinal = null;
        let tipoFinal = this.tipo;

        if (this.valor) {
            let val = this.valor.interpretar(arbol, tabla);
            if (!val || val.tipo === 'NULL') {
                arbol.errores.push(new Excepcion("Semántico", "Error al evaluar la declaración.", this.linea, this.columna));
                return null;
            }

            //inferencia de tipo
            if (this.tipo === null) {
                tipoFinal = val.tipo;
            }

            //validación de tipos y casteo implícito int -> float64
            if (tipoFinal !== val.tipo) {
                if (tipoFinal === TIPO_DATO.FLOAT && val.tipo === TIPO_DATO.INT) {
                    valorFinal = val.valor; // Se permite el casteo implícito
                } else {
                    arbol.errores.push(new Excepcion("Semántico", `No se puede asignar un valor de tipo ${val.tipo} a la variable '${this.id}' de tipo ${tipoFinal}.`, this.linea, this.columna));
                    return null;
                }
            } else {
                valorFinal = val.valor;
            }
        } else {
            //valores por defecto estrictos según el manual de GoScript
            if (tipoFinal === TIPO_DATO.INT) valorFinal = 0;
            else if (tipoFinal === TIPO_DATO.FLOAT) valorFinal = 0.0;
            else if (tipoFinal === TIPO_DATO.STRING) valorFinal = "";
            else if (tipoFinal === TIPO_DATO.BOOL) valorFinal = false;
            else if (tipoFinal === TIPO_DATO.RUNE) valorFinal = 0;
            else valorFinal = null; //NIL
        }

        // CORRECCIÓN: Uso del método 'guardar' y estructura de símbolo adaptada a tu entorno.js
        let simbolo = { tipo: tipoFinal, valor: valorFinal, linea: this.linea, columna: this.columna };
        let insertado = tabla.guardar(this.id, simbolo);
        
        if (!insertado) {
            arbol.errores.push(new Excepcion("Semántico", `La variable '${this.id}' ya existe en este ámbito.`, this.linea, this.columna));
        }
        return null;
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let dot = `${miId} [label="Declaración\\n${this.id}"];\n`;
        dot += `${padre} -> ${miId};\n`;
        if (this.valor && typeof this.valor.getAST === 'function') {
            dot += this.valor.getAST(miId, contador);
        }
        return dot;
    }
}

module.exports = Declaracion;