const editorTextArea = document.getElementById('editor');
const consolaTextArea = document.getElementById('consola');
const btnEjecutar = document.getElementById('btnEjecutar');
const btnAbrir = document.getElementById('btnAbrir');
const btnGuardar = document.getElementById('btnGuardar');
const btnGuardarComo = document.getElementById('btnGuardarComo');
const btnNuevaPestana = document.getElementById('btnNuevaPestana');
const tabsContainer = document.getElementById('tabs');

let archivos = [];
let archivoActualIndex = -1;
let contadorNuevos = 0;

const editor = CodeMirror.fromTextArea(editorTextArea, {
    lineNumbers: true,
    mode: "javascript",
    theme: "default"
});

editor.on('change', () => {
    if (archivoActualIndex !== -1 && archivos[archivoActualIndex]) {
        let archivo = archivos[archivoActualIndex];
        if (archivo.contenido !== editor.getValue()) {
            archivo.contenido = editor.getValue();
            if (!archivo.modificado) {
                archivo.modificado = true;
                renderizarPestanas();
            }
        }
    }
});

function renderizarPestanas() {
    tabsContainer.innerHTML = '';
    
    archivos.forEach((archivo, index) => {
        const tabElement = document.createElement('span');
        tabElement.classList.add('tab');
        if (index === archivoActualIndex) tabElement.classList.add('active');
        
        const textoNombre = document.createElement('span');
        textoNombre.textContent = archivo.nombre + (archivo.modificado ? ' *' : '');
        textoNombre.onclick = () => cambiarPestana(index);
        tabElement.appendChild(textoNombre);
        
        const btnCerrar = document.createElement('span');
        btnCerrar.textContent = '✖';
        btnCerrar.classList.add('close-btn');
        btnCerrar.onclick = (e) => {
            e.stopPropagation();
            cerrarPestana(index);
        };
        tabElement.appendChild(btnCerrar);
        
        tabsContainer.appendChild(tabElement);
    });

    if (archivoActualIndex !== -1 && archivos.length > 0) {
        if (editor.getValue() !== archivos[archivoActualIndex].contenido) {
            editor.setValue(archivos[archivoActualIndex].contenido);
        }
    } else {
        editor.setValue('');
    }
}

function crearPestana(nombre, contenido = '', esNuevo = true) {
    archivos.push({ nombre, contenido, modificado: false, esNuevo });
    archivoActualIndex = archivos.length - 1;
    renderizarPestanas();
}

function cambiarPestana(index) {
    archivoActualIndex = index;
    renderizarPestanas();
}

function cerrarPestana(index) {
    if (archivos[index].modificado) {
        const confirmar = confirm(`El archivo "${archivos[index].nombre}" no está guardado. ¿Seguro que deseas cerrarlo?`);
        if (!confirmar) return;
    }

    archivos.splice(index, 1);
    
    if (archivos.length === 0) {
        archivoActualIndex = -1;
    } else if (archivoActualIndex === index) {
        archivoActualIndex = index > 0 ? index - 1 : 0;
    } else if (archivoActualIndex > index) {
        archivoActualIndex--;
    }
    
    renderizarPestanas();
}

function descargarArchivo(archivo) {
    archivo.modificado = false;
    renderizarPestanas();
    
    const blob = new Blob([archivo.contenido], { type: 'text/plain' });
    const enlace = document.createElement('a');
    
    enlace.href = URL.createObjectURL(blob);
    enlace.download = archivo.nombre;
    enlace.click();
    
    URL.revokeObjectURL(enlace.href);
}

function ejecutarGuardarComo(archivo) {
    let nuevoNombre = prompt("Guardar como:", archivo.nombre);
    
    if (nuevoNombre === null || nuevoNombre.trim() === "") return;
    
    if (!nuevoNombre.endsWith('.gst')) {
        nuevoNombre += '.gst';
    }
    
    archivo.nombre = nuevoNombre;
    archivo.esNuevo = false;
    descargarArchivo(archivo);
}

btnNuevaPestana.addEventListener('click', () => {
    contadorNuevos++;
    crearPestana(`Nuevo ${contadorNuevos}`, '', true);
});

btnAbrir.addEventListener('change', (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        crearPestana(file.name, e.target.result, false);
    };
    reader.readAsText(file);
    event.target.value = ''; 
});

btnGuardar.addEventListener('click', () => {
    if (archivoActualIndex === -1) return;
    let archivoActual = archivos[archivoActualIndex];
    
    if (archivoActual.esNuevo) {
        ejecutarGuardarComo(archivoActual);
    } else {
        descargarArchivo(archivoActual);
    }
});

btnGuardarComo.addEventListener('click', () => {
    if (archivoActualIndex === -1) return;
    ejecutarGuardarComo(archivos[archivoActualIndex]);
});

btnEjecutar.addEventListener('click', async () => {
    if (archivoActualIndex === -1) return;
    
    const codigo = archivos[archivoActualIndex].contenido;
    
    const response = await fetch('http://localhost:3000/api/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ codigo })
    });
    
    const data = await response.json();
    consolaTextArea.value = data.consola;
});

contadorNuevos++;
crearPestana(`Nuevo ${contadorNuevos}`, '', true);