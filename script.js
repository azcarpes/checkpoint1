let nomePokemonInput = document.getElementById("nome");
let numeroPokemonInput = document.getElementById("numero");
let poderPokemonInput = document.getElementById("poder");
let fotoInput = document.getElementById("imagem");
let botaoEnviar = document.getElementById("enviar");
let conteudo = document.getElementById("conteudo");
let botaoLimpar = document.getElementById("limpar");
let tipo = document.getElementById("listaTipos");
let tipo2 = document.getElementById("listaTipos2");

botaoEnviar.onclick = () => {
    if (
        nomePokemonInput.value == "" ||
        numeroPokemonInput.value == "" ||
        poderPokemonInput.value == "" ||
        fotoInput.value == "" ||
        tipo.value == "" ||
        tipo2.value == ""
    ) {
        return;
    }

    let card = document.createElement("div");
    card.setAttribute("id", "card");
    conteudo.appendChild(card);

    let h1 = document.createElement("h1");
    h1.innerText = nomePokemonInput.value;
    card.appendChild(h1);

    let h2 = document.createElement("h2");
    h2.innerText = `Número: ${numeroPokemonInput.value}`;
    card.appendChild(h2);

    let h22 = document.createElement("h2");
    h22.innerText = `Poder: ${poderPokemonInput.value}`;
    card.appendChild(h22);

    let tipoPokemon = document.createElement("h2");
    tipoPokemon.innerText = `Este Pokemon é do tipo: ${tipo.value} e ${tipo2.value}`;
    card.appendChild(tipoPokemon);

    let imagem = document.createElement("img");
    imagem.setAttribute("src", fotoInput.value);
    card.appendChild(imagem);
};

botaoLimpar.onclick = () => {
    nomePokemonInput.value = "";
    numeroPokemonInput.value = "";
    poderPokemonInput.value = "";
    fotoInput.value = "";
    tipo.value = "";
};
