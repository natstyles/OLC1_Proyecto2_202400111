const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');
const Excepcion = require('./excepcion');

class NativasSlice extends Node {
    constructor(funcion, argumentos, linea, columna) {
        super(linea, columna);
        this.funcion = funcion;
        this.argumentos = argumentos; 
    }

    interpretar(arbol, tabla) {
        if (this.funcion === 'len') {
            if (this.argumentos.length !== 1) {
                arbol.errores.push(new Excepcion("Semántico", "La función len requiere exactamente 1 argumento.", this.linea, this.columna));
                return { tipo: TIPO_DATO.NULL, valor: null };
            }
            let arg = this.argumentos[0].interpretar(arbol, tabla);
            if (arg.tipo === TIPO_DATO.ARREGLO || arg.tipo === TIPO_DATO.STRING) {
                return { tipo: TIPO_DATO.INT, valor: arg.valor.length };
            } else {
                arbol.errores.push(new Excepcion("Semántico", "La función len solo acepta slices o strings.", this.linea, this.columna));
                return { tipo: TIPO_DATO.NULL, valor: null };
            }
        }

        if (this.funcion === 'append') {
            if (this.argumentos.length !== 2) {
                arbol.errores.push(new Excepcion("Semántico", "La función append requiere exactamente 2 argumentos.", this.linea, this.columna));
                return { tipo: TIPO_DATO.NULL, valor: null };
            }
            let arreglo = this.argumentos[0].interpretar(arbol, tabla);
            let valor = this.argumentos[1].interpretar(arbol, tabla);

            if (arreglo.tipo !== TIPO_DATO.ARREGLO) {
                arbol.errores.push(new Excepcion("Semántico", "El primer argumento de append debe ser un slice.", this.linea, this.columna));
                return { tipo: TIPO_DATO.NULL, valor: null };
            }
            
            arreglo.valor.push(valor);
            return { tipo: TIPO_DATO.ARREGLO, valor: arreglo.valor };
        }

        if (this.funcion === 'slices.index') {
            if (this.argumentos.length !== 2) {
                arbol.errores.push(new Excepcion("Semántico", "slices.Index requiere exactamente 2 argumentos.", this.linea, this.columna));
                return { tipo: TIPO_DATO.NULL, valor: null };
            }
            let arreglo = this.argumentos[0].interpretar(arbol, tabla);
            let valor = this.argumentos[1].interpretar(arbol, tabla);

            if (arreglo.tipo !== TIPO_DATO.ARREGLO) {
                arbol.errores.push(new Excepcion("Semántico", "El primer argumento de slices.Index debe ser un slice.", this.linea, this.columna));
                return { tipo: TIPO_DATO.NULL, valor: null };
            }

            let index = arreglo.valor.findIndex(el => el.valor === valor.valor && el.tipo === valor.tipo);
            return { tipo: TIPO_DATO.INT, valor: index };
        }

        if (this.funcion === 'strings.join') {
            if (this.argumentos.length !== 2) {
                arbol.errores.push(new Excepcion("Semántico", "strings.Join requiere exactamente 2 argumentos.", this.linea, this.columna));
                return { tipo: TIPO_DATO.NULL, valor: null };
            }
            let arreglo = this.argumentos[0].interpretar(arbol, tabla);
            let separador = this.argumentos[1].interpretar(arbol, tabla);

            if (arreglo.tipo !== TIPO_DATO.ARREGLO) {
                arbol.errores.push(new Excepcion("Semántico", "El primer argumento de strings.Join debe ser un slice.", this.linea, this.columna));
                return { tipo: TIPO_DATO.NULL, valor: null };
            }
            if (separador.tipo !== TIPO_DATO.STRING) {
                arbol.errores.push(new Excepcion("Semántico", "El segundo argumento de strings.Join debe ser un string.", this.linea, this.columna));
                return { tipo: TIPO_DATO.NULL, valor: null };
            }

            let arrayStrings = [];
            for (let el of arreglo.valor) {
                if (el.tipo !== TIPO_DATO.STRING) {
                    arbol.errores.push(new Excepcion("Semántico", "strings.Join solo acepta slices de tipo string.", this.linea, this.columna));
                    return { tipo: TIPO_DATO.NULL, valor: null };
                }
                arrayStrings.push(el.valor);
            }

            return { tipo: TIPO_DATO.STRING, valor: arrayStrings.join(separador.valor) };
        }

        return { tipo: TIPO_DATO.NULL, valor: null };
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let dot = `${miId} [label="Nativa Slice\\n'${this.funcion}'"];\n`;
        dot += `${padre} -> ${miId};\n`;

        if (this.argumentos) {
            for (let arg of this.argumentos) {
                if (arg && typeof arg.getAST === 'function') {
                    dot += arg.getAST(miId, contador);
                }
            }
        }
        return dot;
    }
}

module.exports = NativasSlice;