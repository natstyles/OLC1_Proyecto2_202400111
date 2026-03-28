const Node = require('./astNode');
const Simbolo = require('./simbolo');
const { TIPO_DATO } = require('./tipo');

class Funcion extends Node {
    constructor(id, parametros, tipoDato, instrucciones, linea, columna) {
        super(linea, columna);
        this.id = id;
        this.parametros = parametros; 
        this.tipoDato = tipoDato; 
        this.instrucciones = instrucciones;
    }

    interpretar(arbol, tabla) {
        const simbolo = new Simbolo(TIPO_DATO.FUNCION, this.id, this, this.linea, this.columna);
        tabla.guardar(this.id, simbolo);
        return null;
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        
        let dot = `${miId} [label="Función\\n'${this.id}'"];\n`;
        dot += `${padre} -> ${miId};\n`;

        if (this.tipoDato) {
            let tipoId = `n${contador.c++}`;
            dot += `${tipoId} [label="Retorno: '${this.tipoDato}'"];\n`;
            dot += `${miId} -> ${tipoId};\n`;
        }

        if (this.parametros && this.parametros.length > 0) {
            let paramsId = `n${contador.c++}`;
            dot += `${paramsId} [label="Parámetros"];\n`;
            dot += `${miId} -> ${paramsId};\n`;

            for (let param of this.parametros) {
                let pId = `n${contador.c++}`;
                dot += `${pId} [label="${param.id}: ${param.tipo}"];\n`;
                dot += `${paramsId} -> ${pId};\n`;
            }
        }

        if (this.instrucciones && this.instrucciones.length > 0) {
            let instrId = `n${contador.c++}`;
            dot += `${instrId} [label="Instrucciones"];\n`;
            dot += `${miId} -> ${instrId};\n`;

            for (let instr of this.instrucciones) {
                if (instr && typeof instr.getAST === 'function') {
                    dot += instr.getAST(instrId, contador);
                }
            }
        }

        return dot;
    }
}

module.exports = Funcion;