function contar() {
    var numInicial =document.getElementById('numeroInicio').valueAsNumber;
    var numFinal = document.getElementById('numeroFinal').valueAsNumber;
    var numPassos = document.getElementById('numPassos').valueAsNumber;
    var resultado = document.getElementById('res');
    
    // Resolução 1 com "while" e "funções"

    var cont = numInicial;
    resultado.innerHTML = `Contando: `;

    function somar(){
        while (cont <= numFinal) {
            resultado.innerHTML += `${cont} &#128073`
            cont += numPassos;
        }
        resultado.innerHTML +='&#127937';
    }

    function subtrair(){
        var cont = numInicial
        while (cont >= numFinal) {
            resultado.innerHTML += `${cont} &#128073`
            cont -= numPassos;
        }
        resultado.innerHTML +='&#127937';
    }

    if (numInicial == 0 || numFinal == 0) {
        resultado.innerHTML = 'Impossível contar!'    
    } else if (numInicial < numFinal){
        if (numPassos == 0){
            window.alert('[Erro!] O número de passos vai ser considerado 1.')
            numPassos++
            somar();
        } else {
            somar();
        }
    
    } else if (numInicial > numFinal) {
        if (numPassos == 0){
            window.alert('[Erro!] O número de passos vai ser considerado 1.')
            numPassos++
            subtrair();
        } else {
            subtrair();
        }
    }
}
/*
    //resolução 2: com "for"

    if (numInicial == 0 || numFinal == 0 ) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        if (numPassos <= 0) {
            window.alert('Número de passos inválidos, considerando o valor como \"1\".');
            numPassos = 1
        }
        resultado.innerHTML = 'Contando: '

        if (numInicial < numFinal) {

            for (let c = numInicial; c <= numFinal; c += numPassos) {
                resultado.innerHTML += ` ${c}&#128073 ` 
            }

        } else {

            for (let c = numInicial; c >= numFinal; c -= numPassos) {
                resultado.innerHTML += ` ${c}&#128073`
            }

        } 
        resultado.innerHTML += ` &#127937`
    }
} 
*/