const Node = require('./astNode');

class Print extends Node {
    constructor(expresiones, linea, columna) {
        super(linea, columna);
        this.expresiones = expresiones;
    }

    interpretar(arbol, tabla) {
        let salida = [];

        for (let exp of this.expresiones) {
            let res = exp.interpretar(arbol, tabla);
            if (res) {
                salida.push(this.formatear(res));
            }
        }

        // Unimos los valores con un espacio (comportamiento estándar de fmt.Println)
        arbol.consola += salida.join(" ") + "\n";
        return null;
    }

    /**
     * Método recursivo para limpiar la salida de objetos internos,
     * arreglos (Slices) y mapas (Structs).
     */
    formatear(dato) {
        if (dato === null || dato === undefined) return "null";

        // 1. Si es nuestro objeto interno {tipo, valor}, extraemos el valor y seguimos limpiando
        if (typeof dato === 'object' && !Array.isArray(dato) && !(dato instanceof Map) && 'valor' in dato) {
            return this.formatear(dato.valor);
        }

        // 2. Si es un Arreglo (Slice o Matriz)
        if (Array.isArray(dato)) {
            let contenido = dato.map(item => this.formatear(item)).join(", ");
            return "[" + contenido + "]";
        }

        // 3. Si es un Mapa (Struct)
        if (dato instanceof Map) {
            let partes = [];
            dato.forEach((v, k) => {
                // Formato k: v (ej: nombre: Ana)
                partes.push(`${k}: ${this.formatear(v)}`);
            });
            return "{" + partes.join(", ") + "}";
        }

        // 4. Para tipos primitivos (int, float, string, bool)
        return String(dato);
    }

    getAST(padre, contador) {
        let miId = `n${contador.c++}`;
        let dot = `${miId} [label="Print"];\n`;
        dot += `${padre} -> ${miId};\n`;

        for (let exp of this.expresiones) {
            if (exp && typeof exp.getAST === 'function') {
                dot += exp.getAST(miId, contador);
            }
        }
        return dot;
    }
}

module.exports = Print;