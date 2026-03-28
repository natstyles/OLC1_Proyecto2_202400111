const Node = require('./astNode');

class Caso extends Node {
    constructor(expresion, instrucciones, linea, columna) {
        super(linea, columna);
        this.expresion = expresion;
        this.instrucciones = instrucciones;
    }

    interpretar(arbol, tabla) {
        //interpretación en sentencia switch
        return null;
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        
        let labelCaso = this.expresion ? "Case" : "Default";
        let dot = `${miId} [label="${labelCaso}"];\n`;
        dot += `${padre} -> ${miId};\n`;

        if (this.expresion && typeof this.expresion.getAST === 'function') {
            dot += this.expresion.getAST(miId, contador);
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

module.exports = Caso;