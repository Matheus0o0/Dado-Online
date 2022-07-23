const botaoAnimar = document.getElementById("animar");
const caixa = document.querySelector(".bola");

botaoAnimar.addEventListener("click", ()=> {    
caixa.style.animation = "";
setTimeout(() => caixa.style.animation = "mover 1.3s 2 linear", 10);
});


let numeroSorteado = 0
let imgDado = document.querySelector('#imgDado')
let btnSortear = document.querySelector('#animar')
let sorteado = document.querySelector('#sorteado')
let dadoRolando = document.querySelector('#dadoRolando')

function getRandomInt(min, max) {
    min = Math.ceil(min)  
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

animar.addEventListener('click', function() {

    dadoRolando.play()


    setTimeout(function() {

        numeroSorteado = getRandomInt(1,20)

        
        console.log(numeroSorteado)
       
        sorteado.textContent = numeroSorteado
        
    }, 1750)

})

if (!localStorage.nomeDoSeuCookies) {
    document.querySelector(".box-cookies").classList.remove('hide');
}

const acceptCookies = () => {
    document.querySelector(".box-cookies").classList.add('hide');
    localStorage.setItem("nomeDoSeuCookies", "accept");
};

const btnCookies = document.querySelector(".btn-cookies");

btnCookies.addEventListener('click', acceptCookies);
