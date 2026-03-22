const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');

class Arreglo extends Node {
    constructor(elementos, linea, columna) {
        super(linea, columna);
        this.elementos = elementos; 
    }

    interpretar(arbol, tabla) {
        let valores = [];
        for (let i = 0; i < this.elementos.length; i++) {
            let val = this.elementos[i].interpretar(arbol, tabla);
            valores.push(val);
        }
        return { tipo: TIPO_DATO.ARREGLO, valor: valores };
    }
}

module.exports = Arreglo;