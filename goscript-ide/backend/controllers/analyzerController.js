const parserModule = require('../analyzer/analizador');
const parser = parserModule.parser;
const Arbol = require('../models/arbol');
const Entorno = require('../models/entorno');
const Excepcion = require('../models/excepcion');

exports.execute = (req, res) => {
    const { codigo } = req.body;

    try {
        if (!parser.yy) {
            parser.yy = {};
        }

        parser.yy.errores = [];

        parser.yy.parseError = function (_errStr, hash) {
            let linea = hash && hash.loc ? hash.loc.first_line : 0;
            let columna = hash && hash.loc ? hash.loc.first_column : 0;
            let texto = hash && hash.text ? hash.text : "";

            if (!parser.yy.errores) {
                parser.yy.errores = [];
            }

            if (texto === ";") {
                return;
            }

            const descripcion = "Error de sintaxis en: '" + texto + "'";

            const yaExiste = parser.yy.errores.some(
                e =>
                    e.tipo === "Sintáctico" &&
                    e.descripcion === descripcion &&
                    e.linea === linea &&
                    e.columna === (columna + 1)
            );

            if (!yaExiste) {
                parser.yy.errores.push(
                    new Excepcion(
                        "Sintáctico",
                        descripcion,
                        linea,
                        columna + 1
                    )
                );
            }
        };

        let instrucciones = parser.parse(codigo);

        if (!Array.isArray(instrucciones)) {
            instrucciones = [];
        }

        const validInstrucciones = instrucciones.filter(inst => inst !== null);
        const arbol = new Arbol(validInstrucciones);

        arbol.errores = parser.yy.errores;

        const tablaGlobal = new Entorno(null);
        arbol.tablaGlobal = tablaGlobal;

        for (let instruccion of validInstrucciones) {
            if (instruccion && instruccion.constructor.name === 'Funcion') {
                instruccion.interpretar(arbol, tablaGlobal);
            }
        }

        for (let instruccion of validInstrucciones) {
            if (instruccion && instruccion.constructor.name !== 'Funcion') {
                instruccion.interpretar(arbol, tablaGlobal);
            }
        }

        const simbolos = [];
        tablaGlobal.tabla.forEach((simbolo, id) => {
            simbolos.push({
                id: id,
                tipoSimbolo: simbolo.tipo === 'FUNCION' ? 'Función' : 'Variable',
                tipoDato: simbolo.tipo,
                ambito: 'Global',
                linea: simbolo.linea,
                columna: simbolo.columna
            });
        });

        res.json({
            consola: arbol.getConsola(),
            errores: arbol.errores,
            simbolos: simbolos,
            ast: arbol.getAST() 
        });

    } catch (error) {
        console.error("ERROR REAL DEL BACKEND:");
        console.error(error);
        if (error && error.stack) {
            console.error(error.stack);
        }

        let erroresCapturados = parser.yy && parser.yy.errores && parser.yy.errores.length > 0
            ? parser.yy.errores
            : [new Excepcion("Fatal", String(error.message || error), 0, 0)];

        res.json({
            consola: "Error en el análisis.\n",
            errores: erroresCapturados,
            simbolos: [],
            ast: "" 
        });
    }
};