class Arbol {
    constructor(instrucciones) {
        //AST DE JISON
        this.instrucciones = instrucciones;
        this.consola = "";
        this.errores = [];
        this.tablaGlobal = null;
    }

    actualizarConsola(texto) {
        this.consola += texto;
    }

    getConsola() {
        return this.consola;
    }
}

module.exports = Arbol;