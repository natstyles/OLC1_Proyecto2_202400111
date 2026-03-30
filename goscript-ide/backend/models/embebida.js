const Node = require('./astNode');
const { TIPO_DATO } = require('./tipo');
const Excepcion = require('./excepcion');

class Embebida extends Node {
    constructor(funcion, argumento, linea, columna) {
        super(linea, columna);
        this.funcion = funcion; // 'atoi', 'parsefloat', 'typeof'
        this.argumento = argumento;
    }

    interpretar(arbol, tabla) {
        const arg = this.argumento.interpretar(arbol, tabla);
        if (!arg || arg.tipo === TIPO_DATO.NULL) return { tipo: TIPO_DATO.NULL, valor: null };

        if (this.funcion === 'atoi') {
            if (arg.tipo !== TIPO_DATO.STRING) {
                arbol.errores.push(new Excepcion("Semántico", "strconv.Atoi requiere un string.", this.linea, this.columna));
                return { tipo: TIPO_DATO.NULL, valor: null };
            }
            const num = Number(arg.valor);
            
            // Validamos que no sea decimal según el enunciado
            if (isNaN(num) || !Number.isInteger(num) || String(arg.valor).includes('.')) {
                arbol.errores.push(new Excepcion("Semántico", `strconv.Atoi generó un error al convertir '${arg.valor}'.`, this.linea, this.columna));
                return { tipo: TIPO_DATO.NULL, valor: null };
            }
            return { tipo: TIPO_DATO.INT, valor: parseInt(arg.valor, 10) };
        }

        if (this.funcion === 'parsefloat') {
            if (arg.tipo !== TIPO_DATO.STRING) {
                arbol.errores.push(new Excepcion("Semántico", "strconv.ParseFloat requiere un string.", this.linea, this.columna));
                return { tipo: TIPO_DATO.NULL, valor: null };
            }
            const num = parseFloat(arg.valor);
            if (isNaN(num)) {
                arbol.errores.push(new Excepcion("Semántico", `strconv.ParseFloat generó un error al convertir '${arg.valor}'.`, this.linea, this.columna));
                return { tipo: TIPO_DATO.NULL, valor: null };
            }
            return { tipo: TIPO_DATO.FLOAT, valor: num };
        }

        if (this.funcion === 'typeof') {
            let tipoStr = arg.tipo.toLowerCase();
            if (arg.tipo === TIPO_DATO.FLOAT) tipoStr = "float64";
            if (arg.tipo === TIPO_DATO.INT) tipoStr = "int";
            if (arg.tipo === TIPO_DATO.STRING) tipoStr = "string";
            if (arg.tipo === TIPO_DATO.BOOL) tipoStr = "bool";
            if (arg.tipo === TIPO_DATO.RUNE) tipoStr = "rune";
            if (arg.tipo === TIPO_DATO.ARREGLO) tipoStr = "[]"; 
            if (arg.tipo === TIPO_DATO.STRUCT) tipoStr = arg.structName || "struct"; 
            
            return { tipo: TIPO_DATO.STRING, valor: tipoStr };
        }
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let funcName = this.funcion === 'atoi' ? 'strconv.Atoi' : 
                       this.funcion === 'parsefloat' ? 'strconv.ParseFloat' : 'reflect.TypeOf';
        
        let dot = `${miId} [label="Función Embebida\\n'${funcName}'"];\n`;
        dot += `${padre} -> ${miId};\n`;

        if (this.argumento && typeof this.argumento.getAST === 'function') {
            let argId = `n${contador.c++}`;
            dot += `${argId} [label="Argumento"];\n`;
            dot += `${miId} -> ${argId};\n`;
            dot += this.argumento.getAST(argId, contador);
        }

        return dot;
    }
}

module.exports = Embebida;