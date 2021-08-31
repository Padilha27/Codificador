var cesario = document.getElementById('cesarCode');
cesario.addEventListener('click', () => {
    if (cesario.value == 'cesar') {
        opcoes1.style.display = 'flex';
        incremento.style.display = 'initial';
    } else if (cesario.value == 'base') {
        opcoes2.style.display = 'flex';
    }
})
function codificarCesar() {
    var str = document.getElementById("areaTexto").value
    var num = document.getElementById("incremento").value
    cifraCesar(str, num);
}
function decodificarCesar() {
    var str = document.getElementById("respostaCesar").innerHTML
    var num = document.getElementById("incremento").value
    num = num * -1
    cifraCesar(str, num);
}
function cifraCesar(str, num) {
    num = num % 26;
    var minuscula = str.toLowerCase();
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var novaStr = '';

    for (var i = 0; i < minuscula.length; i++) {
        var letraInicial = minuscula[i];
        if (letraInicial === ' ') {
            novaStr += letraInicial;
            continue;
        }
        var indiceInicial = alfabeto.indexOf(letraInicial);
        var novoIndice = indiceInicial + num;
        if (novoIndice > 25) {
            novoIndice = novoIndice - 26;
        } else if (novoIndice < 0) {
            novoIndice = novoIndice + 26
        } else { }

        if (str[i] === str[i].toUpperCase()) {
            novaStr += alfabeto[novoIndice].toUpperCase();
        } else {
            novaStr += alfabeto[novoIndice];
        }
    }
    if (document.getElementById('respostaCesar') == null) {
        var cifraSelect = document.querySelector('form');
        var textoCod = document.createElement('h3');
        textoCod.id = 'respostaCesar'
        cifraSelect.appendChild(textoCod);
        textoCod.textContent = novaStr;
    } else if (document.getElementById('respostaCesar') != null && document.getElementById('decodificadoCesar') != null) {
    } else if (document.getElementById('respostaCesar') != null && num <= 0 ) {
        var cifraSelect = document.querySelector('form');
        var textoCod = document.createElement('h3');
        textoCod.id = 'decodificadoCesar'
        cifraSelect.append(textoCod);
        textoCod.textContent = novaStr;
    }
    
    return novaStr
}
function codificarBase() {
    if (document.getElementById('respostaBase') == null) {
    var str = document.getElementById("areaTexto").value
    var cifraSelect = document.querySelector('form');
    var textoCod = document.createElement('h3');
    textoCod.id = 'respostaBase'
    cifraSelect.appendChild(textoCod);
    textoCod.textContent = btoa(str);
    }
}
function decodificarBase() {
    if (document.getElementById('decodificaBase') == null) {
    var str = document.getElementById("respostaBase").innerHTML
    var cifraSelect = document.querySelector('form');
    var textoCod = document.createElement('h3');
    textoCod.id = 'decodificaBase'
    cifraSelect.appendChild(textoCod);
    textoCod.textContent = atob(str);
    }
}