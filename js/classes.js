var classes = new Array;

//Criando classe de objeto
function pClasse(valor, nome, dv, mdano, habilidades, desc, html) {
	this.valor = valor;
	this.nome = nome;
	this.dv = dv; //Número de faces do dado de vida
	this.desc = desc;
	this.modificadorDano = mdano;
	this.restricoes = function(armas, armaduras) {
		this.armas = armas;
		this.armaduras = armaduras;
	};
	this.habilidades = habilidades;

	html = 'Classe(' + this.valor + '): ' + this.nome + '/DV d' + toString(this.dv);
	html += '/Habilidades de classe ' + this.habilidades;
	this.html = html;

	classes.push(html);
}

var harmas = new pClasse(
	'harmas', 
	'Homem de Armas', 
	10, 
	1, 
	'Recebem +1 de dano quando acertam seus golpes.'
	);

console.log(classes);