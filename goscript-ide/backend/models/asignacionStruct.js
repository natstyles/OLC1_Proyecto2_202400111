const Node = require('./astNode');

class AsignacionStruct extends Node {
    constructor(listaAccesos, expresion, linea, columna) {
        super(linea, columna);
        this.listaAccesos = listaAccesos;
        this.expresion = expresion;
    }

    interpretar(arbol, tabla) {
        let variable = tabla.obtener(this.listaAccesos[0]);
        if (!variable) return null;

        let val = this.expresion.interpretar(arbol, tabla);
        if (!val || val.tipo === 'NULL') return null;

        let actual = variable.valor;
        
        // Navegamos hasta el objeto padre de la propiedad a modificar
        for (let i = 1; i < this.listaAccesos.length - 1; i++) {
            if (actual instanceof Map && actual.has(this.listaAccesos[i])) {
                actual = actual.get(this.listaAccesos[i]).valor;
            } else {
                return null;
            }
        }
        
        // Modificamos la última propiedad
        let ultimoAtributo = this.listaAccesos[this.listaAccesos.length - 1];
        if (actual instanceof Map) {
            actual.set(ultimoAtributo, { tipo: val.tipo, valor: val.valor });
        }
        
        return null;
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let label = this.listaAccesos.join('.');
        let dot = `${miId} [label="Asignación Struct\\n${label}"];\n`;
        dot += `${padre} -> ${miId};\n`;
        if (this.expresion && typeof this.expresion.getAST === 'function') {
            dot += this.expresion.getAST(miId, contador);
        }
        return dot;
    }
}

module.exports = AsignacionStruct;