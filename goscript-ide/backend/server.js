const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend'))); 

app.post('/api/execute', (req, res) => {
    const codigo = req.body.codigo;
    
    const resultadoConsola = "Análisis iniciado...\n" + codigo; 

    res.json({ 
        consola: resultadoConsola, 
        ast: {}, 
        errores: [] 
    });
});

app.listen(PORT, () => {
    console.log(`GoScript corriendo en http://localhost:${PORT}`);
});