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
}