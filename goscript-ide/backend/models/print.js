const Node = require('./astNode');

class Print extends Node {
    constructor(expresiones, linea, columna) {
        super(linea, columna);
        this.expresiones = expresiones;//lista de expresiones
    }

    interpretar(arbol, tabla) {
        let salida = "";
        this.expresiones.forEach((exp, index) => {
            const valor = exp.interpretar(arbol, tabla);
            salida += valor + (index < this.expresiones.length - 1 ? " " : "");
        });
        arbol.actualizarConsola(salida + "\n");
        return null;
    }
}

module.exports = Print;