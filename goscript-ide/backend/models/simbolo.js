class Simbolo {
    constructor(tipo, id, valor, linea, columna, ambito = "Global") {
        this.tipo = tipo;
        this.id = id;
        this.valor = valor;
        this.linea = linea;
        this.columna = columna;
        this.ambito = ambito;
    }
}

module.exports = Simbolo;