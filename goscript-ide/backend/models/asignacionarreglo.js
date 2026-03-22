const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');

class AsignacionArreglo extends Node {
    constructor(id, indice, expresion, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.indice = indice;
        this.expresion = expresion;
    }

    interpretar(arbol, tabla) {
        let simbolo = tabla.obtener(this.id);
        
        if (simbolo === null) {
            console.error(`Error: Arreglo ${this.id} no existe.`);
            return null;
        }

        let idx = this.indice.interpretar(arbol, tabla);
        if (idx.tipo !== TIPO_DATO.INT) {
            console.error("Error: El índice debe ser de tipo entero.");
            return null;
        }

        let arreglo = simbolo.valor;
        if (idx.valor < 0 || idx.valor >= arreglo.length) {
            console.error("Error: Índice fuera de los límites del arreglo.");
            return null;
        }

        let nuevoValor = this.expresion.interpretar(arbol, tabla);
        arreglo[idx.valor] = nuevoValor;

        tabla.guardar(this.id, simbolo);
        
        return null;
    }
}

module.exports = AsignacionArreglo;