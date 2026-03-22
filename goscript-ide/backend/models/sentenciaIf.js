const Node = require('./astNode');
const Entorno = require('./entorno');
const { TIPO_DATO } = require('./tipo');
const Excepcion = require('./excepcion');

class SentenciaIf extends Node {
    constructor(condicion, instruccionesIf, instruccionesElse, linea, columna) {
        super(linea, columna);
        this.condicion = condicion;
        this.instruccionesIf = instruccionesIf;
        this.instruccionesElse = instruccionesElse; 
    }

    interpretar(arbol, tabla) {
        const cond = this.condicion.interpretar(arbol, tabla);

        if (cond.tipo === TIPO_DATO.NULL) return null;

        if (cond.tipo !== TIPO_DATO.BOOL) {
            arbol.errores.push(new Excepcion("Semántico", `La condición del 'if' debe ser booleana, se encontró ${cond.tipo}.`, this.linea, this.columna));
            return null;
        }

        if (cond.valor === true) {
            const nuevoEntorno = new Entorno(tabla);
            for (let instr of this.instruccionesIf) {
                const res = instr.interpretar(arbol, nuevoEntorno);
                if (res) return res; 
            }
        } else if (this.instruccionesElse != null) {
            const nuevoEntorno = new Entorno(tabla);
            if (this.instruccionesElse instanceof SentenciaIf) {
                const res = this.instruccionesElse.interpretar(arbol, nuevoEntorno);
                if (res) return res;
            } else {
                for (let instr of this.instruccionesElse) {
                    const res = instr.interpretar(arbol, nuevoEntorno);
                    if (res) return res;
                }
            }
        }
        return null;
    }
}

module.exports = SentenciaIf;