let nome = document.getElementById('txtNome')
let altura = document.getElementById('txtAlt')
let peso = document.getElementById('txtPeso')
let res = document.getElementById('res')

function verificar(){

    if(nome.value.length == 0 || altura.value.length == 0 || peso.value.length == 0){
        window.alert('[ERRO] informações invalidas')
    }else{
        let n = String(nome.value)
        let alt = Number(altura.value)
        let p = Number(peso.value) 
        let imc = p / (alt * alt)

        if (imc < 16) {
            res.innerHTML = `NOME: ${n} <br> PESO: ${p} quilos <br> ALTURA: ${alt} <br>
            Índice de massa corporal: ${imc.toFixed(2)}.  Baixo peso,  muito grave `
        } else if(imc < 18.50) {
            res.innerHTML = `NOME: ${n} <br> PESO: ${p} quilos <br> ALTURA: ${alt} <br>
            Índice de massa corporal: ${imc.toFixed(2)}.  Baixo peso`  
        } else if(imc < 24.99){
            res.innerHTML = `NOME: ${n} <br> PESO: ${p} quilos <br> ALTURA: ${alt} <br>
            Índice de massa corporal: ${imc.toFixed(2)}.  Peso normal `
        } else if(imc < 29.99) {
            res.innerHTML = `NOME: ${n} <br> PESO: ${p} quilos <br> ALTURA: ${alt} <br>
            Índice de massa corporal: ${imc.toFixed(2)}.  Sobrepeso `
        } else if(imc < 34.99) {
            res.innerHTML = `NOME: ${n} <br> PESO: ${p} quilos <br> ALTURA: ${alt} <br>
            Índice de massa corporal: ${imc.toFixed(2)}.  Obesidade, nivel I `
        } else if(imc < 39.99){
            res.innerHTML = `NOME: ${n} <br> PESO: ${p} quilos <br> ALTURA: ${alt} <br>
            Índice de massa corporal: ${imc.toFixed(2)}.  Obesidade, nivel II `
        } else {
            res.innerHTML = `NOME: ${n} <br> PESO: ${p} quilos <br> ALTURA: ${alt} <br>
            Índice de massa corporal: ${imc.toFixed(2)}.  Obesidade, nivel III `
        }

    }

}

function limpar() {
    res.innerHTML = `NOME:  <br> PESO: <br> ALTURA: <br>
            Índice de massa corporal:  `
}