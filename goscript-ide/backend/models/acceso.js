const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');

class Acceso extends Node {
    constructor(id, linea, columna) {
        super(linea, columna);
        this.id = id;
    }

    interpretar(arbol, tabla) {
        let simbolo = tabla.obtener(this.id);
        if (simbolo === null) {
            console.error(`Error: Variable ${this.id} no encontrada.`);
            return { tipo: TIPO_DATO.NULL, valor: null };
        }
        return { tipo: simbolo.tipo, valor: simbolo.valor };
    }
}

module.exports = Acceso;