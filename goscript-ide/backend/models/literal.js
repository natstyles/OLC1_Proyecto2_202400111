class Literal {
    constructor(tipo, valor, linea, columna) {
        this.tipo = tipo;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
    }

    interpretar(arbol, tabla) {
        return { tipo: this.tipo, valor: this.valor };
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        //limpiamos comillas dobles
        let valorLimpio = String(this.valor).replace(/"/g, '\\"');
        
        let dot = `${miId} [label="Literal\\n'${valorLimpio}'"];\n`;
        dot += `${padre} -> ${miId};\n`;
        return dot;
    }
}
module.exports = Literal;