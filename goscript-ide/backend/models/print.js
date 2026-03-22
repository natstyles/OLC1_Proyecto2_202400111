const Node = require('./astNode');

class Print extends Node {
    constructor(expresiones, linea, columna) {
        super(linea, columna);
        this.expresiones = expresiones;
    }

    interpretar(arbol, tabla) {
        let salida = "";
        for (let i = 0; i < this.expresiones.length; i++) {
            let resultado = this.expresiones[i].interpretar(arbol, tabla);
            if (resultado !== null && resultado !== undefined) {
                if (typeof resultado.valor === 'object' && resultado.valor instanceof Map) {
                    let obj = {};
                    resultado.valor.forEach((value, key) => { obj[key] = value.valor; });
                    salida += JSON.stringify(obj);
                } else if (Array.isArray(resultado.valor)) {
                    let arr = resultado.valor.map(v => v.valor);
                    salida += JSON.stringify(arr);
                } else {
                    salida += resultado.valor;
                }
            } else {
                salida += "nil";
            }
            
            if (i < this.expresiones.length - 1) {
                salida += " ";
            }
        }
        arbol.actualizarConsola(salida + "\n");
        return null;
    }
}

module.exports = Print;