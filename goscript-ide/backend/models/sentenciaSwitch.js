const Node = require('./astNode');
const Entorno = require('./entorno');
const Break = require('./break');

class SentenciaSwitch extends Node {
    constructor(expresion, casos, linea, columna) {
        super(linea, columna);
        this.expresion = expresion;
        this.casos = casos;
    }

    interpretar(arbol, tabla) {
        const exprSwitch = this.expresion.interpretar(arbol, tabla);
        
        for (let i = 0; i < this.casos.length; i++) {
            let caso = this.casos[i];
            
            if (caso.expresion) {
                let exprCaso = caso.expresion.interpretar(arbol, tabla);
                if (exprSwitch.valor == exprCaso.valor) {
                    const nuevoEntorno = new Entorno(tabla, "Case");
                    for (let instr of caso.instrucciones) {
                        const res = instr.interpretar(arbol, nuevoEntorno);
                        if (res instanceof Break) return null;
                        if (res) return res;
                    }
                    return null; 
                }
            }
        }

        for (let i = 0; i < this.casos.length; i++) {
            let caso = this.casos[i];
            if (!caso.expresion) {
                const nuevoEntorno = new Entorno(tabla, "Default");
                for (let instr of caso.instrucciones) {
                    const res = instr.interpretar(arbol, nuevoEntorno);
                    if (res instanceof Break) return null;
                    if (res) return res;
                }
                return null;
            }
        }

        return null;
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        
        let dot = `${miId} [label="Sentencia Switch"];\n`;
        dot += `${padre} -> ${miId};\n`;

        if (this.expresion && typeof this.expresion.getAST === 'function') {
            let exprId = `n${contador.c++}`;
            dot += `${exprId} [label="Expresión"];\n`;
            dot += `${miId} -> ${exprId};\n`;
            dot += this.expresion.getAST(exprId, contador);
        }

        if (this.casos && this.casos.length > 0) {
            let casosId = `n${contador.c++}`;
            dot += `${casosId} [label="Casos"];\n`;
            dot += `${miId} -> ${casosId};\n`;

            for (let caso of this.casos) {
                if (caso && typeof caso.getAST === 'function') {
                    dot += caso.getAST(casosId, contador);
                }
            }
        }

        return dot;
    }
}

module.exports = SentenciaSwitch;