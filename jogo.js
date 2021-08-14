

var altura = 0 
var largura = 0
var	vidas = 1
var tempo = 15
var parabens = 1








var criaMosquitoTempo = 1500

var nivel = window.location.search
nivel = nivel.replace('?', '')

if (nivel === 'normal') {
	//1500
	criaMosquitoTempo = 1500
} else if(nivel === 'dificil') {
	//1000
	criaMosquitoTempo = 1000
} else if (nivel === 'impossivel') {
	//750
	criaMosquitoTempo = 750
}


// Recuperando tamanho da tela do jogo conforme é alterada

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(altura, largura)
}


ajustaTamanhoPalcoJogo()


// Criando Cronometro
	

var cronometro = setInterval(function() {

	tempo -= 1

	if(tempo < 0 && parabens === 1) {
		
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'parabens.html'


	} if(tempo < 0 && parabens === 2) {
		
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'parabens2.html'

	}if(tempo < 0 && parabens === 3) {
		
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'parabens3.html'

	}if(tempo < 0 && parabens === 4) {
		
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href = 'vitoria.html'
	} else {
		document.getElementById('cronometro').innerHTML = tempo

	}

}, 1000)





// Criando posição Randomica

function posicaoRandomica() {

	// Remover mosquito anterior (caso exista)
	if(document.getElementById('mosquito')) {
		document.getElementById('mosquito').remove()


		if (vidas > 3) {

			window.location.href = 'fim_de_jogo.html'

		} else {

			document.getElementById('v' + vidas).src='imagens/coracao_vazio.png'

		vidas++
		}
	}

	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	// Criando o elemento html

	var mosquito = document.createElement('img')
	mosquito.src ='imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function() {
		this.remove()
	}

	document.body.appendChild(mosquito)


}

// Criando tamanhos de mosquito aleatorio

function tamanhoAleatorio() {
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe) {

		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}

}


// Criand lado do mosquito aleatorio

function ladoAleatorio() {
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe) {

		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}







// Criando Fases

/*
	function fases() {



	    var fase = window.location.search

	    if (fase === 'fase1') {

	    	var fase1 = document.createElement('img')
	   		 fase1.src = 'imagens/1.png'

	    } else if (fase === 'fase2') {

	    	var fase2 = document.createElement('img')
	    	fase2.src = 'imagens/2.png'

	    } else if (fase === 'fase3') {

	    	var fase3 = document.createElement('img')
	    	fase3.src = 'imagens/3.png'

	    } else  if (fase === 'fase4') {
	    	var fase4 = document.createElement('img')
	    fase4.src = 'imagens/4.png'
	    }

	}

	*/
