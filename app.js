
function realizarOperacion(operacion) {
    let textArea = document.getElementById('miTextarea').value.toLowerCase();
    let resultado = '';

    if (operacion === 'encriptar') {
        resultado = encriptar(textArea);
        document.getElementById('miTextarea').value ="";
    } else if (operacion === 'desencriptar') {
        resultado = desencriptar(textArea);
        document.getElementById('miTextarea').value ="";
    }
    let resultadotext = document.getElementById('resultadotext');
    resultadotext.innerHTML = resultado;
    
    let button = document.createElement("button");
    button.textContent = "copiar texto";
    button.onclick = copiarTexto;
    document.getElementById('resultadotext').appendChild(button);
    button.classList.add("boton-Copiar");
}
function encriptar(miTextarea) {
    return miTextarea.replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

function desencriptar(miTextarea) {
    return miTextarea.replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}
function copiarTexto() {
    let resultadoCopy = document.getElementById('resultadotext');
    let range = document.createRange();
    range.selectNode(resultadoCopy);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
    alert('Texto copiado');
}
