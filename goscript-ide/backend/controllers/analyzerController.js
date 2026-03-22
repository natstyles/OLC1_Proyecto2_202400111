const parser = require('../analyzer/analizador');
const Arbol = require('../models/arbol');
const Entorno = require('../models/entorno');

exports.execute = (req, res) => {
    const { codigo } = req.body;

    try {
        parser.yy.errores = []; 
        const instrucciones = parser.parse(codigo);
        const arbol = new Arbol(instrucciones);
        
        arbol.errores = parser.yy.errores; 
        
        const tablaGlobal = new Entorno(null);
        arbol.tablaGlobal = tablaGlobal;

        for (let instruccion of instrucciones) {
            if (instruccion && instruccion.constructor.name === 'Funcion') {
                instruccion.interpretar(arbol, tablaGlobal);
            }
        }

        for (let instruccion of instrucciones) {
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
            simbolos: simbolos
        });

    } catch (error) {
        res.json({
            consola: "Error en el análisis.\n",
            errores: parser.yy.errores.length > 0 ? parser.yy.errores : [{ tipo: "Error Fatal", descripcion: error.message, linea: 0, columna: 0 }],
            simbolos: []
        });
    }
};