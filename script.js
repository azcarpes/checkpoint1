let nomePokemonInput = document.getElementById("nome");
let numeroPokemonInput = document.getElementById("numero");
let poderPokemonInput = document.getElementById("poder");
let tipo = document.getElementById("listaTipos");
let tipo2 = document.getElementById("listaTipos2");
let fotoInput = document.getElementById("imagem");
let conteudo = document.getElementById("conteudo");
let botaoEnviar = document.getElementById("enviar");
let botaoLimpar = document.getElementById("limpar");
let validacaoBotao = document.getElementById("validacaoBotao")


botaoEnviar.onclick = () => {
	if (
		nomePokemonInput.value == "" ||
		numeroPokemonInput.value == "" ||
		poderPokemonInput.value == "" ||
		fotoInput.value == "" ||
		tipo.value == "" ||
		tipo2.value == ""
	) {
		validacaoBotao.innerText = "Campos obrigatórios não preenchidos";
		validacaoBotao.style.color = "#E92323";
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
	tipo2.value = "";

	conteudo.parentNode.removeChild(conteudo);
};

nomePokemonInput.addEventListener("blur", function () {
	let nomeValidacao = document.getElementById("nomeValidacao");

	if (nomePokemonInput.value != "") {
		nomeValidacao.innerText = "";
		nomePokemonInput.style.backgroundColor = "#ffff";
		botaoEnviar.removeAttribute("disabled");

	} else {
		nomeValidacao.style.color = "#E92323";
		nomeValidacao.innerText = "Campo é obrigatório";
		nomePokemonInput.style.backgroundColor = "#DB7979BE";
		botaoEnviar.setAttribute("disabled", true)
	}
});

numeroPokemonInput.addEventListener("blur", function () {
	let numeroValidacao = document.getElementById("numeroValidacao");

	if (numeroPokemonInput.value != "") {

		numeroValidacao.innerText = "";
		numeroPokemonInput.style.backgroundColor = "#ffff";
		botaoEnviar.removeAttribute("disabled");
	} else {

		numeroValidacao.style.color = "#E92323";
		numeroValidacao.innerText = "Campo é obrigatório";
		numeroPokemonInput.style.backgroundColor = "#DB7979BE";
		botaoEnviar.setAttribute("disabled", true);
	}
});

poderPokemonInput.addEventListener("blur", function () {
	let poderValidacao = document.getElementById("poderValidacao");

	if (poderPokemonInput.value != "") {

		poderValidacao.innerText = "";
		poderPokemonInput.style.backgroundColor = "#ffff";
		botaoEnviar.removeAttribute("disabled");

	} else {

		poderValidacao.style.color = "#E92323";
		poderValidacao.innerText = "Campo é obrigatório";
		poderPokemonInput.style.backgroundColor = "#DB7979BE";
		botaoEnviar.setAttribute("disabled", true);
	}
});

fotoInput.addEventListener("blur", function () {
	let imagemValidacao = document.getElementById("imagemValidacao");

	if (fotoInput.value != "") {

		imagemValidacao.innerText = "";
		fotoInput.style.backgroundColor = "#ffff";
		botaoEnviar.removeAttribute("disabled");

	} else {

		imagemValidacao.style.color = "#E92323";
		imagemValidacao.innerText = "Campo é obrigatório";
		fotoInput.style.backgroundColor = "#DB7979BE";
		botaoEnviar.setAttribute("disabled", true);
	}
});