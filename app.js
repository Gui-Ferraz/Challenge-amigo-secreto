//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let name = document.querySelector('input').value;

    if(name == '') {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(name);
    campo = document.querySelector('input');
    campo.value = '';

    adicionarLista();
}

function adicionarLista() {
    let lista = document.querySelector('ul');
    lista.innerHTML = "";

    for(let i = 0; i < amigos.length; ++i) {
        let novoAmigo = document.createElement('li');   // Cria um <li>
        novoAmigo.textContent = amigos[i];              // Define o texto do item
        lista.appendChild(novoAmigo);                   // Insere o <li> em <ul>
        console.log(i);
    }
}