// 1. Corrigido: Faltava passar o seletor do botão (ex: '#meuBotao' ou 'button')
const botao = document.querySelector("#btnBuscar"); 
const resultado = document.querySelector("#resultado");

function buscaCotacao() {
    fetch("https://economia.awesomeapi.com.br/json/last/USD-BRL")
    .then(function (resposta) {
        return resposta.json();
    })
    .then(function (dados) {
        let valorDolar = Number(dados.USDBRL.bid);
        
        // 2. Corrigido: Faltavam as chaves {} para envolver os objetos de configuração do toLocaleString
        let valorFormato = valorDolar.toLocaleString('pt-BR', {
            style: "currency", 
            currency: "BRL"
        });

        // 3. Corrigido: Colocado dentro do escopo do .then, onde 'valorFormato' realmente existe
        resultado.textContent = valorFormato; 
    })
    .catch(function (erro) {
        console.error("Erro ao buscar a cotação:", erro);
        resultado.textContent = "Erro ao carregar.";
    });
}

// 4. Simplificado: Você pode passar a função direto, sem precisar criar uma arrow function extra
botao.addEventListener("click", buscaCotacao);