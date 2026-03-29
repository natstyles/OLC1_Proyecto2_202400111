const Node = require('./astNode');
const Aritmetica = require('./aritmetica');
const Acceso = require('./acceso');
const Asignacion = require('./asignacion');

class AsignacionCompuesta extends Node {
    constructor(id, expresion, operador, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.expresion = expresion;
        this.operador = operador;
    }

    interpretar(arbol, tabla) {
        //nodo acceso
        const acceso = new Acceso(this.id, this.linea, this.columna);
        
        //creación nodo aritmetico
        const operacion = new Aritmetica(acceso, this.operador, this.expresion, this.linea, this.columna);
        
        //creación nodo asignación
        const asignacion = new Asignacion(this.id, operacion, this.linea, this.columna);
        
        //ejecución asignación
        return asignacion.interpretar(arbol, tabla);
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        
        let dot = `${miId} [label="Asignación Compuesta\\n'${this.operador}='"];\n`;
        dot += `${padre} -> ${miId};\n`;

        let idNodo = `n${contador.c++}`;
        dot += `${idNodo} [label="Acceso\\n'${this.id}'"];\n`;
        dot += `${miId} -> ${idNodo};\n`;

        if (this.expresion && typeof this.expresion.getAST === 'function') {
            dot += this.expresion.getAST(miId, contador);
        }

        return dot;
    }
}

module.exports = AsignacionCompuesta;