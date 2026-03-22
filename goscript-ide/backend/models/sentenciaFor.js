const Node = require('./astNode');
const Entorno = require('./entorno');
const Break = require('./break');
const Continue = require('./continue');
const { TIPO_DATO } = require('./tipo');
const Excepcion = require('./excepcion');

class SentenciaFor extends Node {
    constructor(inicializacion, condicion, actualizacion, instrucciones, linea, columna) {
        super(linea, columna);
        this.inicializacion = inicializacion;
        this.condicion = condicion;
        this.actualizacion = actualizacion;
        this.instrucciones = instrucciones;
    }

    interpretar(arbol, tabla) {
        const entornoFor = new Entorno(tabla);

        if (this.inicializacion) {
            this.inicializacion.interpretar(arbol, entornoFor);
        }

        let cond = this.condicion.interpretar(arbol, entornoFor);

        if (cond.tipo === TIPO_DATO.NULL) return null;

        if (cond.tipo !== TIPO_DATO.BOOL) {
            arbol.errores.push(new Excepcion("Semántico", `La condición del 'for' debe ser booleana, se encontró ${cond.tipo}.`, this.linea, this.columna));
            return null;
        }

        while (cond.valor === true) {
            const entornoBloque = new Entorno(entornoFor);
            let continuar = false;
            
            for (let instr of this.instrucciones) {
                const resultado = instr.interpretar(arbol, entornoBloque);
                
                if (resultado instanceof Break) {
                    return null;
                }
                if (resultado instanceof Continue) {
                    continuar = true;
                    break;
                }
                if (resultado) {
                    return resultado;
                }
            }
            
            if (this.actualizacion) {
                this.actualizacion.interpretar(arbol, entornoFor);
            }
            
            cond = this.condicion.interpretar(arbol, entornoFor);
            
            if (cond.tipo !== TIPO_DATO.BOOL) {
                arbol.errores.push(new Excepcion("Semántico", `La condición del 'for' debe ser booleana, se encontró ${cond.tipo}.`, this.linea, this.columna));
                break;
            }
        }
        
        return null;
    }
}

module.exports = SentenciaFor;