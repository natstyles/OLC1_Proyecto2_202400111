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
        let coincidencia = false;

        for (let i = 0; i < this.casos.length; i++) {
            let caso = this.casos[i];
            
            if (caso.expresion) {
                let exprCaso = caso.expresion.interpretar(arbol, tabla);
                if (coincidencia || exprSwitch.valor == exprCaso.valor) {
                    coincidencia = true;
                    const nuevoEntorno = new Entorno(tabla);
                    for (let instr of caso.instrucciones) {
                        const res = instr.interpretar(arbol, nuevoEntorno);
                        if (res instanceof Break) return null;
                    }
                }
            } else {
                if (coincidencia) {
                    const nuevoEntorno = new Entorno(tabla);
                    for (let instr of caso.instrucciones) {
                        const res = instr.interpretar(arbol, nuevoEntorno);
                        if (res instanceof Break) return null;
                    }
                }
            }
        }

        if (!coincidencia) {
            for (let caso of this.casos) {
                if (!caso.expresion) {
                    const nuevoEntorno = new Entorno(tabla);
                    for (let instr of caso.instrucciones) {
                        const res = instr.interpretar(arbol, nuevoEntorno);
                        if (res instanceof Break) return null;
                    }
                }
            }
        }

        return null;
    }
}

module.exports = SentenciaSwitch;