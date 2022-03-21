let nomePokemonInput = document.getElementById("nome");
let numeroPokemonInput = document.getElementById("numero");
let poderPokemonInput = document.getElementById("poder");
let fotoInput = document.getElementById("imagem");
let botaoEnviar = document.getElementById("enviar");
let conteudo = document.getElementById("conteudo");
let botaoLimpar = document.getElementById("limpar");



botaoEnviar.onclick = () => {
    if (nomePokemonInput.value == "" || numeroPokemonInput.value == "" || poderPokemonInput.value == "" || fotoInput.value == "") {
        return;
    }

    
    let card = document.createElement("div")
    card.setAttribute("id", "card")
    conteudo.appendChild(card);

    let h1 = document.createElement("h1")
    h1.innerText = nomePokemonInput.value;
    card.appendChild(h1);

    let h2 = document.createElement("h2")
    h2.innerText = `Número: ${numeroPokemonInput.value}`;
    card.appendChild(h2);

    let h22 = document.createElement("h2")
    h22.innerText = `Poder: ${poderPokemonInput.value}` ;
    card.appendChild(h22);

    let imagem = document.createElement("img")
    imagem.setAttribute("src", fotoInput.value)
    card.appendChild(imagem);
    
}

botaoLimpar.onclick = () => {

    nomePokemonInput.value = "";
    numeroPokemonInput.value = "";
    poderPokemonInput.value = "";
    fotoInput.value = "";   
}