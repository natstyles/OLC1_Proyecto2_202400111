const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');
const Excepcion = require('./excepcion');

class Acceso extends Node {
    constructor(id, linea, columna) {
        super(linea, columna);
        this.id = id;
    }

    interpretar(arbol, tabla) {
        let simbolo = tabla.obtener(this.id);
        
        if (simbolo === null) {
            arbol.errores.push(new Excepcion("Semántico", `Variable '${this.id}' no encontrada.`, this.linea, this.columna));
            return { tipo: TIPO_DATO.NULL, valor: null };
        }
        
        return { tipo: simbolo.tipo, valor: simbolo.valor };
    }
}

module.exports = Acceso;