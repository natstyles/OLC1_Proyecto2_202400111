const Node = require('./astNode');

class AccesoStruct extends Node {
    constructor(listaAccesos, linea, columna) {
        super(linea, columna);
        this.listaAccesos = listaAccesos;
    }

    interpretar(arbol, tabla) {
        let variable = tabla.obtener(this.listaAccesos[0]);
        if (!variable) return { tipo: 'NULL', valor: null };

        let actual = variable.valor;
        
        //Navegamos por cada propiedad hasta la última
        for (let i = 1; i < this.listaAccesos.length; i++) {
            if (actual instanceof Map && actual.has(this.listaAccesos[i])) {
                let prop = actual.get(this.listaAccesos[i]);
                if (i === this.listaAccesos.length - 1) {
                    return prop; //Retornamos el valor final
                }
                actual = prop.valor; //Entramos más profundo
            } else {
                return { tipo: 'NULL', valor: null };
            }
        }
        return { tipo: 'NULL', valor: null };
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let label = this.listaAccesos.join('.');
        let dot = `${miId} [label="Acceso Struct\\n${label}"];\n`;
        dot += `${padre} -> ${miId};\n`;
        return dot;
    }
}

module.exports = AccesoStruct;