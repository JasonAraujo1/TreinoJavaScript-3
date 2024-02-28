function contar(){

    var inicio = document.getElementById('inputInicio')
    
    var fim = document.getElementById('inputFim')
    
    var passo = document.getElementById('inputPasso')
    
    var res = document.getElementById('res')
    
    
    
    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('Por favor, preencha os campos corretamente.')//condição para caso de erro
        res.innerHTML = ' contagem...'

        
    }
    else{

        var i = Number(inicio.value)
        var f = Number(fim.value)
        var p = Number(passo.value)

        if(p <= 0){
            window.alert('PASSO inválido...Considerando passo = 1')
            p = 1
            }
            
            else if(inicio.value.length >= 6 || fim.value.length >= 6){
                window.alert('[ERROR] Número grande demais! màximo 5 caracteres')
                p = 0
                f = 0
                i = 0
            }

            while(i < f){//contagem  crescente
                i += p //significa i = i + passo
                res.innerHTML += `${i} \u{23E9}`
            }

            while(i > f){//contagem  regressiva
                i -= p
                res.innerHTML += `${i} \u{23E9}`
            }

        /*Se usasse o if ficaria assim:
        if(i < f){ //contagem  crescente
            for(let(ou var) c = i; c <= f; c += p){
                res.innerHtml += `${c} \u{23E9}`
            }
        } else{ //contagem  regressiva
            for(let(ou var) c = i; c >= f; c -= p){
                res.innerHtml += `${c} \u{23E9}`
            }

        }
        */

      
    }
    

res.innerHTML += '\u{1F3C1}'; // Adiciona emoji de bandeira de chegada ao fim do código

}