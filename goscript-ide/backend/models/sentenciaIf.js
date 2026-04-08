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

        if (!cond || cond.tipo === 'NULL') return null;

        if (cond.tipo !== TIPO_DATO.BOOL) {
            arbol.errores.push(new Excepcion("Semántico", `La condición del 'if' debe ser booleana, se encontró ${cond.tipo}.`, this.linea, this.columna));
            return null;
        }

        const esSalto = (res) => res && res.constructor && ['Break', 'Continue', 'Return'].includes(res.constructor.name);

        if (cond.valor === true) {
            const nuevoEntorno = new Entorno(tabla, "If");
            for (let instr of this.instruccionesIf) {
                if (!instr) continue;
                const res = instr.interpretar(arbol, nuevoEntorno);
                if (esSalto(res)) return res;
            }
        } else if (this.instruccionesElse) {
            if (this.instruccionesElse.constructor.name === 'SentenciaIf') {
                const res = this.instruccionesElse.interpretar(arbol, tabla);
                if (esSalto(res)) return res;
            } else {
                const nuevoEntorno = new Entorno(tabla, "Else");
                for (let instr of this.instruccionesElse) {
                    if (!instr) continue;
                    const res = instr.interpretar(arbol, nuevoEntorno);
                    if (esSalto(res)) return res;
                }
            }
        }
        return null;
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let dot = `${miId} [label="Sentencia If"];\n`;
        dot += `${padre} -> ${miId};\n`;

        if (this.condicion && typeof this.condicion.getAST === 'function') {
            let condId = `n${contador.c++}`;
            dot += `${condId} [label="Condición"];\n`;
            dot += `${miId} -> ${condId};\n`;
            dot += this.condicion.getAST(condId, contador);
        }

        if (this.instruccionesIf && this.instruccionesIf.length > 0) {
            let ifId = `n${contador.c++}`;
            dot += `${ifId} [label="Instrucciones If"];\n`;
            dot += `${miId} -> ${ifId};\n`;
            for (let instr of this.instruccionesIf) {
                if (instr && typeof instr.getAST === 'function') {
                    dot += instr.getAST(ifId, contador);
                }
            }
        }

        if (this.instruccionesElse) {
            let elseId = `n${contador.c++}`;
            if (this.instruccionesElse.constructor && this.instruccionesElse.constructor.name === 'SentenciaIf') {
                dot += `${elseId} [label="Else If"];\n`;
                dot += `${miId} -> ${elseId};\n`;
                dot += this.instruccionesElse.getAST(elseId, contador);
            } else if (Array.isArray(this.instruccionesElse) && this.instruccionesElse.length > 0) {
                dot += `${elseId} [label="Instrucciones Else"];\n`;
                dot += `${miId} -> ${elseId};\n`;
                for (let instr of this.instruccionesElse) {
                    if (instr && typeof instr.getAST === 'function') {
                        dot += instr.getAST(elseId, contador);
                    }
                }
            }
        }

        return dot;
    }
}

module.exports = SentenciaIf;