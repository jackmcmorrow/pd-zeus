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
	html =			'<input type="checkbox" id="pArmas' + i + '" value="'+ this.valor + '">';
	html +=			'<label class="checkbox" for="pArmas'+ i +'">' + this.nome + '</label>';
	html +=			'<p class="help-block">';
	html +=			'Dano '+ this.dano + '<br />';
	html +=			'Iniciativa +'+ this.init + '<br />';
	if (this.usarEscudo === false) {
		html +=		'Não pode usar escudos';
	}
	html +=			'</p>'
}

//Instanciando objetos e jogando num JSON
	var lista = {};

	var adaga = new Arma('adaga', 'Adaga', 						'1d4', 8, true);
	lista += JSON.stringify(adaga);
	var bordao = new Arma('bordao', 'Bordão ou Cajado', 		'1d4', 7, false);
	lista += JSON.stringify(bordao);
	var arcoCurto = new Arma('arcoCurto', 'Arco Curto', 		'1d6', 3, false);
	lista += JSON.stringify(arcoCurto);
	var espadaCurta = new Arma('espadaCurta', 'Espada curta', 	'1d6', 7, true);
	lista += JSON.stringify(espadaCurta);
	var espadaLonga = new Arma('espadaLonga', 'Espada longa', 	'1d8', 5, true);
	lista += JSON.stringify(espadaLonga);
	var maca = new Arma('maca', 'Maça', 						'1d8', 3, true);
	lista += JSON.stringify(maca);
	var machado = new Arma('machado', 'Machado', 				'1d8', 3, true);
	lista += JSON.stringify(machado);
	var montante = new Arma('montante', 'Montante', 			'1d10', 1, true);
	lista += JSON.stringify(montante);
	
	console.log(lista);
	listaDeArmas = JSON.parse(lista);
	console.log(listaDeArmas);

function listarArmas() {
	listaDeArmas = JSON.parse(lista);
	for (i=0; i <= 5; i++) {
		html =			'<input type="checkbox" id="pArmas' + i + '" value="'+ listaDeArmas + '">';
		html +=			'<label class="checkbox" for="pArmas'+ i +'">' + this.nome + '</label>';
		html +=			'<p class="help-block">';
		html +=			'Dano '+ this.dano + '<br />';
		html +=			'Iniciativa +'+ this.init + '<br />';
		if (this.usarEscudo === false) {
			html +=		'Não pode usar escudos';
		}
		html +=			'</p>'
		console.log(html);
	}
	
}

// Usar um FOR para printar as armas