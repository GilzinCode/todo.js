//-------------Elementos------------------------------------------
const btnNovaLista = document.getElementById("btnNovaLista")
const cardNovaLista = document.getElementById("cardNovaLista")
const formNovaLista = document.getElementById("novaLista")

const listas = []
//--------------funções-------------------------------------------
btnNovaLista.addEventListener("click", function(){
    cardNovaLista.style.display = "block"
})

formNovaLista.addEventListener("submit", function(event){
    //O evento submit indica o Enter e o do click
    event.preventDefault()
    const inputTitulo = document.querySelector("input[name='tituloLista']")
    if(inputTitulo.value != ""){
        const novaLista = {
            id: listas.length + 1,
            titulo: inputTitulo.value
        }
        listas.push(novaLista)
        console.log(listas)

        inputTitulo.value = ""
    }
    else{
        alert("Escreve alguma coisa nessa desgraça")
    }
})
formNovaLista.addEventListener("reset", function(event){
    event.preventDefault()
    cardNovaLista.style.display = "none"
})



