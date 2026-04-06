const Node = require('./astNode');
const Simbolo = require('./simbolo');
const { TIPO_DATO } = require('./tipo');
const Excepcion = require('./excepcion');

class Declaracion extends Node {
    constructor(tipoDato, id, expresion, linea, columna) {
        super(linea, columna);
        this.tipoDato = tipoDato;
        this.id = id;
        this.expresion = expresion;
    }

    interpretar(arbol, tabla) {
        if (tabla.existeLocal && tabla.existeLocal(this.id)) {
            arbol.errores.push(new Excepcion("Semántico", `La variable '${this.id}' ya existe en este bloque.`, this.linea, this.columna));
            return null;
        }

        let valorFinal = null;
        let tipoFinal = this.tipoDato;

        if (this.expresion) {
            let val = this.expresion.interpretar(arbol, tabla);
            
            if (!val || val.tipo === TIPO_DATO.NULL) {
                return null; 
            }

            if (this.tipoDato && this.tipoDato !== val.tipo) {
                arbol.errores.push(new Excepcion("Semántico", `No se puede asignar un valor de tipo ${val.tipo} a la variable '${this.id}' de tipo ${this.tipoDato}.`, this.linea, this.columna));
                return null;
            }
            
            valorFinal = val.valor;
            if (!this.tipoDato) {
                tipoFinal = val.tipo;
            }
        } else {
            if (this.tipoDato === TIPO_DATO.INT || this.tipoDato === TIPO_DATO.FLOAT) valorFinal = 0;
            else if (this.tipoDato === TIPO_DATO.STRING) valorFinal = "";
            else if (this.tipoDato === TIPO_DATO.BOOL) valorFinal = false;
        }

        const nuevoSimbolo = new Simbolo(tipoFinal, this.id, valorFinal, this.linea, this.columna);
        
        if (tabla.tabla) {
            tabla.tabla.set(this.id, nuevoSimbolo);
        } else {
            tabla.guardar(this.id, nuevoSimbolo);
        }
        
        return null;
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        
        let dot = `${miId} [label="Declaración\\n'${this.id}'"];\n`;
        
        dot += `${padre} -> ${miId};\n`;

        if (this.tipoDato) {
            let idTipo = `n${contador.c++}`;
            dot += `${idTipo} [label="Tipo: ${this.tipoDato}"];\n`;
            dot += `${miId} -> ${idTipo};\n`;
        }

        if (this.expresion && typeof this.expresion.getAST === 'function') {
            dot += this.expresion.getAST(miId, contador);
        }

        return dot;
    }
}

module.exports = Declaracion;