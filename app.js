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
    }
}

function sortearAmigo() {
    if(amigos.length == 0) {
        alert("Nao foi possivel fazer o sorteio. Voce nao inseriu nenhum amigo na lista ainda.");
        return;
    }

    let amigoEscolhido = parseInt(Math.random() * amigos.length);

    let lista = document.getElementById('resultado');
    lista.innerHTML = '<p>O amigo sorteado é: ' + amigos[amigoEscolhido] + '</p>'; 
}