const Node = require('./astNode');
const Excepcion = require('./excepcion');

class Asignacion extends Node {
    constructor(id, expresion, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.expresion = expresion;
    }

    interpretar(arbol, tabla) {
        let simbolo = tabla.obtener(this.id);
        
        if (simbolo === null) {
            arbol.errores.push(new Excepcion("Semántico", `Variable '${this.id}' no existe.`, this.linea, this.columna));
            return null;
        }

        let nuevoValor = this.expresion.interpretar(arbol, tabla);
        
        if (nuevoValor.tipo === 'NIL') {
            return null; 
        }

        if (simbolo.tipo !== nuevoValor.tipo) {
            arbol.errores.push(new Excepcion("Semántico", `No se puede asignar un valor de tipo ${nuevoValor.tipo} a la variable '${this.id}' de tipo ${simbolo.tipo}.`, this.linea, this.columna));
            return null;
        }

        simbolo.valor = nuevoValor.valor;
        tabla.guardar(this.id, simbolo);
        
        return null;
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        
        let dot = `${miId} [label="Asignación\\n'${this.id}'"];\n`;
        
        dot += `${padre} -> ${miId};\n`;

        //llamada recursiva a la operacion asignada
        if (this.expresion && typeof this.expresion.getAST === 'function') {
            dot += this.expresion.getAST(miId, contador);
        }

        return dot;
    }
}

module.exports = Asignacion;