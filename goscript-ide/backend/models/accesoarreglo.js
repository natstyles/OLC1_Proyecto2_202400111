const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');
const Excepcion = require('./excepcion');

class AccesoArreglo extends Node {
    constructor(id, indices, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.indices = indices;
    }

    interpretar(arbol, tabla) {
        let simbolo = tabla.obtener(this.id);
        if (!simbolo) {
            arbol.errores.push(new Excepcion("Semántico", `Arreglo '${this.id}' no encontrado.`, this.linea, this.columna));
            return { tipo: TIPO_DATO.NULL, valor: null };
        }

        let elementoActual = { tipo: simbolo.tipo, valor: simbolo.valor };

        for (let i = 0; i < this.indices.length; i++) {
            let indexExpr = this.indices[i].interpretar(arbol, tabla);
            
            if (indexExpr.tipo !== TIPO_DATO.INT) {
                arbol.errores.push(new Excepcion("Semántico", "El índice debe ser de tipo entero.", this.linea, this.columna));
                return { tipo: TIPO_DATO.NULL, valor: null };
            }
            
            let idx = indexExpr.valor;
            
            if (!Array.isArray(elementoActual.valor)) {
                arbol.errores.push(new Excepcion("Semántico", "Acceso a índice en un tipo que no es arreglo.", this.linea, this.columna));
                return { tipo: TIPO_DATO.NULL, valor: null };
            }
            
            if (idx < 0 || idx >= elementoActual.valor.length) {
                arbol.errores.push(new Excepcion("Semántico", `Índice ${idx} fuera de límites.`, this.linea, this.columna));
                return { tipo: TIPO_DATO.NULL, valor: null };
            }
            
            elementoActual = elementoActual.valor[idx];
        }
        
        return elementoActual;
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let dot = `${miId} [label="Acceso Arreglo\\n'${this.id}'"];\n`;
        dot += `${padre} -> ${miId};\n`;

        for (let idx of this.indices) {
            if (idx && typeof idx.getAST === 'function') {
                dot += idx.getAST(miId, contador);
            }
        }

        return dot;
    }
}

module.exports = AccesoArreglo;