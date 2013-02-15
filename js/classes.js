var classes = new Array;

//Criando classe de objeto
function Classe(valor, nome, dv, habilidades, html) {
	this.valor = valor;
	this.nome = nome;
	this.dv = dv;
	//this.restricoes = restricoes[];
	this.habilidades = habilidades;
	this.html = html;

	html = 'Classe(' + this.valor + '): ' + this.nome + '/DV ' + this.dv;
	html += '/Habilidades de classe ' + this.habilidades;

	classes.push(html);
}

var harmas = new Classe('harmas', 'Homem de Armas', 'd10', 'Recebem +1 de dano quando acertam seus golpes.');

console.log(classes);