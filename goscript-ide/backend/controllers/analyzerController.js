const parser = require('../analyzer/analizador');

exports.execute = (req, res) => {
    const { codigo } = req.body;
    try {
        //llamar al parser de Jison generado
        const resultado = parser.parse(codigo); 
        res.json({ 
            consola: "Ejecución exitosa", 
            ast: resultado, 
            errores: [] 
        });
    } catch (err) {
        res.json({ 
            consola: "Error en el análisis", 
            errores: [err.message] 
        });
    }
};