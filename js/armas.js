//Definindo Variáveis que vou usar
var armas = new Array;

//Criando classe pArma
function pArma(valor, nome, dano, init, usarEscudo, html) {
	this.valor = valor;
	this.nome = nome;
	this.dano = dano;
	this.init = init;
	this.usarEscudo = usarEscudo;

	this.html = html;
	html =			'<div class="span6">' 
	html +=			'<input type="checkbox" id="pArmas' + this.valor + '" value="'+ this.valor + '">';
	html +=			'<label class="checkbox" for="pArmas'+ this.valor +'">' + this.nome + '</label>';
	html +=			'<p class="help-block">';
	html +=			'Dano '+ this.dano + '<br />';
	html +=			'Iniciativa +'+ this.init + '<br />';
	if (this.usarEscudo === false) {
		html +=		'Não pode usar escudos';
	}
	html +=			'</p></div>'

	armas.push(html);
}

//Instanciando objetos
	var adaga = new pArma('adaga', 'Adaga', 						'1d4', 8, true);
	var bordao = new pArma('bordao', 'Bordão ou Cajado', 		'1d4', 7, false);
	var arcoCurto = new pArma('arcoCurto', 'Arco Curto', 		'1d6', 3, false);
	var espadaCurta = new pArma('espadaCurta', 'Espada curta', 	'1d6', 7, true);
	var espadaLonga = new pArma('espadaLonga', 'Espada longa', 	'1d8', 5, true);
	var maca = new pArma('maca', 'Maça', 						'1d8', 3, true);
	var machado = new pArma('machado', 'Machado', 				'1d8', 3, true);
	var montante = new pArma('montante', 'Montante', 			'1d10', 1, true);

