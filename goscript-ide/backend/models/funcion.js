const Node = require('./astNode');
const Simbolo = require('./simbolo');
const { TIPO_DATO } = require('./tipo');

class Funcion extends Node {
    constructor(id, parametros, tipoDato, instrucciones, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.parametros = parametros; 
        this.tipoDato = tipoDato; 
        this.instrucciones = instrucciones;
    }

    interpretar(arbol, tabla) {
        const simbolo = new Simbolo(TIPO_DATO.FUNCION, this.id, this, this.linea, this.columna);
        tabla.guardar(this.id, simbolo);
        return null;
    }
}

module.exports = Funcion;