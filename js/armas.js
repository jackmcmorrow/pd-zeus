//Criando classe Arma
function Arma(valor, nome, dano, init, usarEscudo) {
	this.valor = valor;
	this.nome = nome;
	this.dano = dano;
	this.init = init;
	this.usarEscudo = usarEscudo;
}

//Método da classe Arma para gerar html do checkbox
Arma.prototype.criarEscolha = function(i) {
	i = 0;
	html =			'<input type="checkbox" id="pArmas' + i + '" value="'+ this.valor'">';
	html +=			'<label class="checkbox" for="pArmas'+ i +'">' + this.nome + '</label>';
	html +=			'<p class="help-block">';
	html +=			'Dano '+ this.dano + '<br />';
	html +=			'Iniciativa +'+ this.init + '<br />';
	if (this.usarEscudo === false) {
		var html +=		'Não pode usar escudos';
	}

}

//Instanciando objetos
	var adaga = new Arma('adaga', 'Adaga', 						'1d4', 8, true);
	var bordao = new Arma('bordao', 'Bordão ou Cajado', 		'1d4', 7, false);
	var arcoCurto = new Arma('arcoCurto', 'Arco Curto', 		'1d6', 3, false);
	var espadaCurta = new Arma('espadaCurta', 'Espada curta', 	'1d6', 7, true);
	var espadaLonga = new Arma('espadaLonga', 'Espada longa', 	'1d8', 5, true);
	var maca = new Arma('maca', 'Maça', 						'1d8', 3, true);
	var machado = new Arma('machado', 'Machado', 				'1d8', 3, true);
	var montante = new Arma('montante', 'Montante', 			'1d10', 1, true);


console.log('Nova arma: '+ adaga.nome + ', ' + adaga.dano + ', ' + adaga.init + '. Pode usar escudo: ' + adaga.usarEscudo);

// Criar um array com estes objetos

// Usar um FOR para juntar as armas
