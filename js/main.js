var personagens = new Array;

var Personagem = function (nome, nivel, classe, xp, raca, armas) {
	this.nome = nome;
	this.nivel = nivel;
	this.classe = classe;
	this.xp = xp; // TODO: Criar uma funçãozinha para mudar o nível conforme xp
	if (xp >= 2000) {
		 this.nivel = Math.floor(xp / 2000) + 1;
		 console.log(Math.floor(xp / 2000))
	}
	this.raca = raca;
	this.armas = armas;
	this.equipamentos;
};

var Subatributos = function (movimento, pv, ca, ataque, tdp) {
	this.movimento = movimento;
	//Função que pega a raca e joga no movimento
	this.pv = pv;
	this.ca = ca;
	this.ataque = ataque;
	this.tdp = tdp;
}

meuPersonagem = new Personagem('oioi', 1, 0, 3300, 1, [adaga, espadaCurta]);
console.log(meuPersonagem);

//Método do objeto Array para gerar html dos checkboxes de armas
Array.prototype.listarArmas = function(i) {
	for (var i = armas.length - 1; i >= 0; i--) {
		document.write(armas[i]);
	};
}