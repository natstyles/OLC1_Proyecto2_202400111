const Node = require('./astNode');
const Entorno = require('./entorno');
const Return = require('./return');
const Simbolo = require('./simbolo');
const { TIPO_DATO } = require('./tipo');

class Llamada extends Node {
    constructor(id, parametros, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.parametros = parametros;
    }

    interpretar(arbol, tabla) {
        let funcSimbolo = tabla.obtener(this.id);
        
        if (!funcSimbolo || funcSimbolo.tipo !== TIPO_DATO.FUNCION) {
            console.error(`Error: Función ${this.id} no definida.`);
            return { tipo: TIPO_DATO.NULL, valor: null };
        }

        let funcion = funcSimbolo.valor;
        let entornoLocal = new Entorno(tabla, "Función " + this.id);

        if (this.parametros.length !== funcion.parametros.length) {
            console.error(`Error: Cantidad de parámetros incorrecta en llamada a ${this.id}.`);
            return { tipo: TIPO_DATO.NULL, valor: null };
        }

        for (let i = 0; i < this.parametros.length; i++) {
            let valorParam = this.parametros[i].interpretar(arbol, tabla);
            let paramDecl = funcion.parametros[i];
            
            if (valorParam.tipo !== paramDecl.tipo) {
                console.error(`Error: Tipo de parámetro incorrecto en ${paramDecl.id}.`);
                return { tipo: TIPO_DATO.NULL, valor: null };
            }
            
            let nuevoSimbolo = new Simbolo(paramDecl.tipo, paramDecl.id, valorParam.valor, this.linea, this.columna);
            entornoLocal.guardar(paramDecl.id, nuevoSimbolo);
        }

        for (let instr of funcion.instrucciones) {
            let resultado = instr.interpretar(arbol, entornoLocal);
            if (resultado instanceof Return) {
                if (resultado.valorRetorno) {
                    if (resultado.valorRetorno.tipo !== funcion.tipoDato) {
                        console.error(`Error: Tipo de retorno incorrecto en función ${this.id}.`);
                    }
                    return resultado.valorRetorno;
                } else {
                    return { tipo: TIPO_DATO.VOID, valor: null };
                }
            }
        }

        return { tipo: TIPO_DATO.VOID, valor: null };
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        
        let dot = `${miId} [label="Llamada\\n'${this.id}'"];\n`;
        dot += `${padre} -> ${miId};\n`;

        if (this.parametros && this.parametros.length > 0) {
            let paramsId = `n${contador.c++}`;
            dot += `${paramsId} [label="Argumentos"];\n`;
            dot += `${miId} -> ${paramsId};\n`;

            for (let param of this.parametros) {
                if (param && typeof param.getAST === 'function') {
                    dot += param.getAST(paramsId, contador);
                }
            }
        }

        return dot;
    }
}

module.exports = Llamada;