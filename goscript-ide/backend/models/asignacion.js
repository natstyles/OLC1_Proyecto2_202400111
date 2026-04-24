const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');
const Excepcion = require('./excepcion');

class Asignacion extends Node {
    constructor(id, expresion, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.expresion = expresion;
    }

    interpretar(arbol, tabla) {
        let val = this.expresion.interpretar(arbol, tabla);
        if (!val || val.tipo === 'NULL') return null;

        //uso del método 'obtener' de tu entorno.js
        let variable = tabla.obtener(this.id);
        if (!variable) {
            arbol.errores.push(new Excepcion("Semántico", `Variable '${this.id}' no encontrada.`, this.linea, this.columna));
            return null;
        }

        //validación de tipos y casteo implícito
        if (variable.tipo !== val.tipo) {
            if (variable.tipo === TIPO_DATO.FLOAT && val.tipo === TIPO_DATO.INT) {
                variable.valor = val.valor; //e permite asignar enteros a flotantes
            } else {
                arbol.errores.push(new Excepcion("Semántico", `No se puede asignar un valor de tipo ${val.tipo} a la variable '${this.id}' de tipo ${variable.tipo}.`, this.linea, this.columna));
                return null;
            }
        } else {
            variable.valor = val.valor;
        }
        return null;
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let dot = `${miId} [label="Asignación\\n${this.id}"];\n`;
        dot += `${padre} -> ${miId};\n`;
        if (this.expresion && typeof this.expresion.getAST === 'function') {
            dot += this.expresion.getAST(miId, contador);
        }
        return dot;
    }
}

module.exports = Asignacion;