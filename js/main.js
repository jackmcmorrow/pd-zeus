var Personagem = function (nome, nivel, classe, raca, armas) {
	this.nome = nome;
	this.nivel = nivel;
	this.classe = classe;
	this.raca = raca;
	this.armas = armas;
};

meuPersonagem = new Personagem('oioi', 1, 0, 0, [adaga]);
console.log(meuPersonagem.armas);