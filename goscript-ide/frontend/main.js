const editorTextArea = document.getElementById('editor');
const consolaTextArea = document.getElementById('consola');
const btnEjecutar = document.getElementById('btnEjecutar');
const btnAbrir = document.getElementById('btnAbrir');
const btnGuardar = document.getElementById('btnGuardar');

const editor = CodeMirror.fromTextArea(editorTextArea, {
    lineNumbers: true,
    mode: "javascript",
    theme: "default"
});

btnAbrir.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        editor.setValue(e.target.result);
    };
    reader.readAsText(file);
});

btnGuardar.addEventListener('click', () => {
    const codigo = editor.getValue();
    const blob = new Blob([codigo], { type: 'text/plain' });
    const enlace = document.createElement('a');
    
    enlace.href = URL.createObjectURL(blob);
    enlace.download = 'codigo.gst';
    enlace.click();
    
    URL.revokeObjectURL(enlace.href);
});

btnEjecutar.addEventListener('click', async () => {
    const codigo = editor.getValue();
    
    const response = await fetch('http://localhost:3000/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ codigo })
    });
    
    const data = await response.json();
    consolaTextArea.value = data.consola;
});