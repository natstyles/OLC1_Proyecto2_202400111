const Node = require('./astNode');
const Simbolo = require('./simbolo');
const { TIPO_DATO } = require('./tipo');

class Declaracion extends Node {
    constructor(tipoDato, id, expresion, linea, columna) {
        super(linea, columna);
        this.tipoDato = tipoDato;
        this.id = id;
        this.expresion = expresion;
    }

    interpretar(arbol, tabla) {
        let valorFinal = null;
        let tipoFinal = this.tipoDato;

        if (this.expresion) {
            let val = this.expresion.interpretar(arbol, tabla);
            valorFinal = val.valor;
            if (!this.tipoDato) {
                tipoFinal = val.tipo;
            }
        } else {
            if (this.tipoDato === TIPO_DATO.INT || this.tipoDato === TIPO_DATO.FLOAT) valorFinal = 0;
            else if (this.tipoDato === TIPO_DATO.STRING) valorFinal = "";
            else if (this.tipoDato === TIPO_DATO.BOOL) valorFinal = false;
        }

        const nuevoSimbolo = new Simbolo(tipoFinal, this.id, valorFinal, this.linea, this.columna);
        tabla.guardar(this.id, nuevoSimbolo);
        return null;
    }
}

module.exports = Declaracion;