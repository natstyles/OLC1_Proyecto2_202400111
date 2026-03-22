const parser = require('../analyzer/analizador');
const Arbol = require('../models/arbol');
const Entorno = require('../models/entorno');

exports.execute = (req, res) => {
    const { codigo } = req.body;

    try {
        const instrucciones = parser.parse(codigo);
        const ast = new Arbol(instrucciones);
        const tablaGlobal = new Entorno(null);
        ast.tablaGlobal = tablaGlobal;

        for (let instruccion of ast.instrucciones) {
            if (instruccion) {
                try {
                    instruccion.interpretar(ast, tablaGlobal);
                } catch (e) {
                    ast.errores.push({
                        descripcion: e.message,
                        linea: instruccion.linea || 0,
                        columna: instruccion.columna || 0,
                        tipo: 'Semántico'
                    });
                }
            }
        }

        let listaSimbolos = [];
        ast.tablaGlobal.tabla.forEach((simbolo, id) => {
            listaSimbolos.push({
                id: id,
                tipoSimbolo: simbolo.tipo === 'FUNCION' ? 'Función' : 'Variable',
                tipoDato: simbolo.tipo,
                ambito: 'Global',
                linea: simbolo.linea,
                columna: simbolo.columna
            });
        });

        res.json({
            consola: ast.getConsola(),
            errores: ast.errores,
            simbolos: listaSimbolos,
            ast: ast.instrucciones 
        });

    } catch (error) {
        res.json({
            consola: "Error en el análisis.",
            errores: [{ descripcion: error.message, linea: 0, columna: 0, tipo: 'Sintáctico/Léxico' }],
            simbolos: [],
            ast: null
        });
    }
};