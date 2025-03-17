let tarefas = []
function adicionarTarefa(){
    // pega o elemento inputTarefa e coloca o valor na variavel inputTarefa
    let inputTarefa = document.getElementById("inputTarefa").value.trim()
    let mensagem =  document.getElementById("mensagem")
    // Abre um condicional para que não passe valores vazios
    if(inputTarefa !== ''){
        tarefas.push(inputTarefa)
        renderizarTarefa()
        inputTarefa.value = ''
    }
    // o se não, caso a execução acima não seja confirmada, aparece uma mensagem
    else{
        mensagem.innerHTML = '<span style="color: red;">Adicione um valor válido no campo acima</span>';
    }
}
function renderizarTarefa(){
    // pega o elemeento listaTarefas e relaciona ao listaTarefas
    let listaTarefas = document.getElementById("listaTarefas")
    listaTarefas.innerHTML = ''
    // pega a lista de tarefas adicionadas e coloque em loop ate o índice ser maior ou igual ao valor da lista
    for (let i = 0; i < tarefas.length; i++){
    // cria os elementos novatarefa(sendo ListItens)
    let novatarefa = document.createElement("li")
    // coloca o inputTarefa acima, dentro do novaTarefa(listItem)
    novatarefa.textContent = tarefas[i]
    let removerBotao = document.createElement("button")
    removerBotao.className = 'remover'
    removerBotao.innerText = 'remover'
    removerBotao.onclick = () => removerTarefa(i)
    let editarBotao = document.createElement("button")
    editarBotao.className = 'editar'
    editarBotao.innerText = 'editar'
    editarBotao.onclick = () => editarTarefa(i)
    // relaciona o a novaTarefa como filho do pai(ListaTarefas)
    novatarefa.appendChild(removerBotao)
    novatarefa.appendChild(editarBotao)
    listaTarefas.appendChild(novatarefa)
    // cria a variável que mostra a mensagem após a confirmação
    mensagem.innerHTML = '<span style="color: green;">Item Adicionado!</span>';
    // relaciona a o id do html e relaciona a varial acima, colocando o texto nela
    // limpa a tela após o término da operação
    }
}
function removerTarefa(i){
    tarefas.splice(i, 1)
    renderizarTarefa()
}
function editarTarefa(i){
    let botaoEditado = prompt("Edite o seu item")
    if(botaoEditado.trim() !==''){
        tarefas[i] = botaoEditado
        renderizarTarefa()
    }
}
function limparLista(){
    tarefas.length = 0
    renderizarTarefa()
        const mensagem = document.getElementById("mensagem")
        mensagem.textContent ="Itens limpados com sucesso"
}
