const Node = require('./astNode');
const Entorno = require('./entorno');
const Break = require('./break');
const Continue = require('./continue');
const Return = require('./return');

class Bloque extends Node {
    constructor(instrucciones, linea, columna) {
        super(linea, columna);
        this.instrucciones = instrucciones;
    }

    interpretar(arbol, tabla) {
        //Un bloque independiente crea su propio entorno local
        const nuevoEntorno = new Entorno(tabla, "Bloque");
        
        for (let instr of this.instrucciones) {
            if (!instr) continue;
            const res = instr.interpretar(arbol, nuevoEntorno);
            
            //Si hay sentencias de transferencia, se propagan hacia arriba
            if (res instanceof Break || res instanceof Continue || res instanceof Return) {
                return res;
            }
        }
        return null;
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let dot = `${miId} [label="Bloque Independiente"];\n`;
        dot += `${padre} -> ${miId};\n`;
        
        for (let instr of this.instrucciones) {
            if (instr && typeof instr.getAST === 'function') {
                dot += instr.getAST(miId, contador);
            }
        }
        return dot;
    }
}

module.exports = Bloque;