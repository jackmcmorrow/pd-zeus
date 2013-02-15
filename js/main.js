var personagens = new Array;

var Personagem = function (nome, nivel, xp, classe, raca, armas) {
	this.nome = nome;
	this.xp = xp; // TODO: Criar uma funçãozinha para mudar o nível conforme classe e xp
	this.nivel = nivel;
	this.classe = classe;
	this.raca = raca;
	this.armas = armas;
};

meuPersonagem = new Personagem('oioi', 1, 0, 0, [adaga, espadaCurta]);
console.log(meuPersonagem);

//Método do objeto Array para gerar html dos checkboxes de armas
Array.prototype.listarArmas = function(i) {
	for (var i = armas.length - 1; i >= 0; i--) {
		document.write(armas[i]);
	};
}