class Arbol {
    constructor(instrucciones) {
        this.instrucciones = instrucciones;
        this.consola = "";
        this.errores = [];
        this.tablaGlobal = null;
    }

    actualizarConsola(cadena) {
        this.consola += cadena;
    }

    getConsola() {
        return this.consola;
    }

    getAST() {
        console.log("\n=== DEBUG AST: INICIANDO GENERACIÓN ===");
        console.log("Total de instrucciones en el árbol:", this.instrucciones.length);

        let dot = "digraph AST {\n";
        dot += "node [shape=box, style=filled, color=lightblue];\n"; 
        dot += "n0 [label=\"Raíz\"];\n";
        
        let contador = { c: 1 }; 

        for (let i = 0; i < this.instrucciones.length; i++) {
            let instr = this.instrucciones[i];
            if (instr) {
                console.log(`[Instrucción ${i}] Procesando nodo: ${instr.constructor.name}`);
                
                if (typeof instr.getAST === 'function') {
                    dot += instr.getAST("n0", contador);
                } else {
                    console.log(`⚠️ ADVERTENCIA: El nodo ${instr.constructor.name} NO tiene el método getAST() implementado.`);
                }
            } else {
                console.log(`[Instrucción ${i}] Es un nodo nulo.`);
            }
        }
        dot += "}";

        console.log("=== DEBUG AST: CÓDIGO DOT GENERADO ===");
        console.log(dot);
        console.log("======================================\n");

        return dot;
    }
}

module.exports = Arbol;