let input = document.getElementById("input-principal")
let botao = document.getElementById("botao-adicionar")
let listaCompleta = document.getElementById("tarefas")

let arrayDeTarefas = []

function cliqueiNoBotao() {
    arrayDeTarefas.push(input.value)
    mostrarNaTela()
}

function mostrarNaTela() {
    let novaLista = ""

    arrayDeTarefas.forEach(tarefa => {
        novaLista = novaLista + `
            <li>
                <p>${tarefa}</p>
            </li>
        `
    })

    listaCompleta.innerHTML = novaLista

}

botao.addEventListener("click", cliqueiNoBotao)