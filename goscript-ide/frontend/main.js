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

//codemirror
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

//logic pestaña
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

//inicializar la primera pestaña
contadorNuevos++;
crearPestana(`Nuevo ${contadorNuevos}`, '', true);

//logic reports
function verReporte(tipo) {
    document.querySelectorAll('.report-tab').forEach(btn => btn.classList.remove('active'));
    document.querySelectorAll('.report-content').forEach(cont => cont.classList.remove('active'));

    const botones = document.querySelectorAll('.report-tab');
    if(tipo === 'consola') botones[0].classList.add('active');
    if(tipo === 'errores') botones[1].classList.add('active');
    if(tipo === 'simbolos') botones[2].classList.add('active');
    if(tipo === 'ast') botones[3].classList.add('active');

    document.getElementById(`cont-${tipo}`).classList.add('active');
}

//AST ZOOM
let scale = 1;
let isDragging = false;
let startX, startY;
let translateX = 0, translateY = 0;
const canvasAst = document.getElementById("canvas-ast");
const astContentWrapper = document.getElementById("ast-content-wrapper");

function aplicarTransformacion() {
    astContentWrapper.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
}

function resetearZoomPan() {
    scale = 1;
    translateX = 0;
    translateY = 0;
    aplicarTransformacion();
}

canvasAst.addEventListener('wheel', function(e) {
    e.preventDefault(); 
    const zoomSensitivity = 0.1;
    const delta = e.deltaY > 0 ? -zoomSensitivity : zoomSensitivity;
    scale += delta;
    scale = Math.max(0.1, Math.min(scale, 5)); 
    aplicarTransformacion();
});

canvasAst.addEventListener('mousedown', function(e) {
    isDragging = true;
    startX = e.clientX - translateX;
    startY = e.clientY - translateY;
    canvasAst.style.cursor = 'grabbing';
});

canvasAst.addEventListener('mousemove', function(e) {
    if (!isDragging) return;
    e.preventDefault();
    translateX = e.clientX - startX;
    translateY = e.clientY - startY;
    aplicarTransformacion();
});

canvasAst.addEventListener('mouseup', function() {
    isDragging = false;
    canvasAst.style.cursor = 'grab';
});

canvasAst.addEventListener('mouseleave', function() {
    isDragging = false;
    canvasAst.style.cursor = 'grab';
});

//logic exec.
document.getElementById('btnEjecutar').addEventListener('click', async () => {
    const codigo = editor.getValue();
    
    try {
        const response = await fetch('http://localhost:3000/api/execute', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ codigo })
        });
        
        const data = await response.json();
        
        //escribir en consola
        document.getElementById('consola').value = data.consola || "";
        
        //llenar tabla de errores
        const tbodyErrores = document.querySelector('#tabla-errores tbody');
        tbodyErrores.innerHTML = '';
        if (data.errores && data.errores.length > 0) {
            data.errores.forEach((err, index) => {
                tbodyErrores.innerHTML += `<tr>
                    <td>${index + 1}</td>
                    <td>${err.descripcion || err.message}</td>
                    <td>${err.linea}</td>
                    <td>${err.columna}</td>
                    <td>${err.tipo || 'Sintáctico/Léxico'}</td>
                </tr>`;
            });
        }
        
        //llenar tabla simbolos
        const tbodySimbolos = document.querySelector('#tabla-simbolos tbody');
        tbodySimbolos.innerHTML = '';
        if (data.simbolos && data.simbolos.length > 0) {
            data.simbolos.forEach((simb) => {
                tbodySimbolos.innerHTML += `<tr>
                    <td>${simb.id}</td>
                    <td>${simb.tipoSimbolo}</td>
                    <td>${simb.tipoDato}</td>
                    <td>${simb.ambito}</td>
                    <td>${simb.linea}</td>
                    <td>${simb.columna}</td>
                </tr>`;
            });
        }

        //VIZ JS PARA RENDER
        if (data.ast && data.ast.trim() !== "") {
            resetearZoomPan(); 
            astContentWrapper.innerHTML = "<p style='color: #666;'>Generando árbol...</p>"; 
            
            var viz = new Viz();
            viz.renderSVGElement(data.ast)
            .then(function(element) {
                astContentWrapper.innerHTML = ""; 
                element.style.maxWidth = "none";
                element.style.height = "auto";
                astContentWrapper.appendChild(element);
            })
            .catch(error => {
                viz = new Viz(); 
                console.error("Error al renderizar el AST:", error);
                astContentWrapper.innerHTML = "<p style='color: red;'>Error al dibujar el árbol de sintaxis.</p>";
            });
        } else {
            astContentWrapper.innerHTML = "<p style='color: #666;'>No se generó el AST.</p>";
        }

        verReporte('consola');

    } catch (error) {
        console.error('Error de conexión:', error);
        document.getElementById('consola').value = "Error al conectar con el servidor backend.";
    }
});

//DESCARGAR AST
document.getElementById('btnDescargarAST').addEventListener('click', () => {
    const svg = document.querySelector('#ast-content-wrapper svg');
    
    if (!svg) {
        alert("¡Primero debes ejecutar el código para generar un AST válido!");
        return;
    }

    //obtenemos las dimensiones reales
    const width = parseInt(svg.getAttribute('width')) || svg.getBoundingClientRect().width;
    const height = parseInt(svg.getAttribute('height')) || svg.getBoundingClientRect().height;

    //clonamos el SVG y serializamos a string
    const serializer = new XMLSerializer();
    let svgString = serializer.serializeToString(svg);
    
    const svgBlob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = function() {
        const canvas = document.createElement("canvas");
        
        //multiplicamos por 2 para alta resolución
        canvas.width = width * 2;
        canvas.height = height * 2;
        const ctx = canvas.getContext("2d");
        
        //fondo blanco
        ctx.fillStyle = "white";
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.scale(2, 2);
        ctx.drawImage(img, 0, 0, width, height);

        //convertir y descargar
        const pngUrl = canvas.toDataURL("image/png");
        const a = document.createElement("a");
        a.href = pngUrl;
        a.download = "GoScript_AST.png";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        
        URL.revokeObjectURL(url); 
    };
    
    img.src = url;
});