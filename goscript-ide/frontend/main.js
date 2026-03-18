const editorTextArea = document.getElementById('editor');
const consolaTextArea = document.getElementById('consola');
const btnEjecutar = document.getElementById('btnEjecutar');

const editor = CodeMirror.fromTextArea(editorTextArea, {
    lineNumbers: true, //linea actual 
    mode: "javascript",
    theme: "default"
});

btnEjecutar.addEventListener('click', async () => {
    const codigo = editor.getValue();
    
    const response = await fetch('/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ codigo })
    });
    
    const data = await response.json();
    consolaTextArea.value = data.consola; //resultado de la consola
});