var personagens = new Array;

//Método do objeto Array para gerar html dos checkboxes de armas
Array.prototype.listar = function(i) {
	for (var i = this.length - 1; i >= 0; i--) {
		document.write(this[i]);
	};
}


var Personagem = function (nome, nivel, classe, xp, raca, armas) {
	this.nome = nome;
	this.nivel = nivel;
	this.classe = classe;
	this.xp = xp; // TODO: Criar uma funçãozinha para mudar o nível conforme xp
	if (xp >= 2000) {
		 this.nivel = Math.floor(xp / 2000) + 1;
	}
	this.raca = raca;
	this.armas = armas;
	this.equipamentos;

	this.prototype.subatributos = new Subatributos;

		this.testeDePersonagem = function(modificador) {
		var a = modificador;
		var resultado = Math.floor(Math.random() * 20 + 1);
		if (a === undefined || a === null || a === NaN) {
			a = 0;
		}

		if (resultado + a >= 15 || resultado === 20) {
			return true;
		}

		else {
			return false;
		}
	};

	this.tdp = this.testeDePersonagem();
};

var Subatributos = function () {
	//TODO Pensar em como vão funcionar os MODIFICADORES (para movimento, pv, ca, ataque, etc)
	this.movimento = this.raca.movimento - this.armadura.modificador;
	//Função que pega a raca e joga no movimento
	this.pv = this.classe.pv * this.nivel;
	this.ca = 10 + Math.floor(this.nivel / 4) + this.armadura.ca;
	this.ataque = this.classe.ataque + Math.floor((nivel / 2));

}



//meuPersonagem = new Personagem('oioi', 1, 0, 3300, 1, [adaga, espadaCurta]);
//console.log(meuPersonagem);

