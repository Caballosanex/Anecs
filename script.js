/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   script.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: alexsanc <alexsanc@student.42barcel>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/10/17 22:26:32 by alexsanc          #+#    #+#             */
/*   Updated: 2022/10/17 22:26:32 by alexsanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function changeColor() {
	color = '#' + Math.floor(Math.random() * 16777215).toString(16);
	document.body.style.backgroundColor = color;
}

function rand() {
	return ~~ (Math.random() * 10);
}

function setText(id, text) {
    document.getElementById(id).innerHTML = text
}

function quack() {
	var audio = new Audio('media/quack.mp3');
	audio.play();
}

function crunch() {
	var audio = new Audio('media/crack.mp3');
	audio.play();
}

function invocaou() {
	let ou = document.createElement("img");
	ou.src = "media/ou.png";
	ou.style.width = "70px";
	ou.style.height = "70px";
	ou.style.position = "absolute";
	ou.style.left = ~~ (Math.random() * (window.innerWidth)) + 'px';
	ou.style.top = ~~ (Math.random() * (window.innerHeight)) + 'px';
	document.body.appendChild(ou);
	ou.addEventListener("click", function() {
		invocaPatito();
		crunch();
		document.body.removeChild(ou);
		}
	);
}

function invocaPatito() {
	let patito = document.createElement("img");
	patito.src = "https://c.tenor.com/fOjhwb3eEqIAAAAi/quack-duck-high-res.gif";
	patito.style.width = "50px";
	patito.style.heigh = "50px";
	patito.style.position = "absolute";
	patito.style.left = ~~ (Math.random() * (window.innerWidth)) + 'px';
	patito.style.top = ~~ (Math.random() * (window.innerHeight)) + 'px';
	document.body.appendChild(patito);
	patito.onclick = quack;
	patitoCounter += 1;
}

let timer = 0;
document.addEventListener("DOMContentLoaded", function () {
	timer = setInterval(function () {
		timer++;
		var minutes = ~~ (timer / 60);
		var seconds = timer % 60;
        var text = `Timer: ${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`
        //Alex si veus això pregunta'm sobre les dollar strings - Blai
        setText("timer", text)
	}, 1000);
});

let patitoCounter = 0;
document.addEventListener("DOMContentLoaded", function () {
	changeColor();
	invocaPatito();
	setInterval(function () {
		changeColor();
		invocaPatito();
        var text = `Patitos: ${patitoCounter}`
		if (patitoCounter == 69) {
            text = `Patitos: ${patitoCounter} - Nice`
		}
        setText("title", text)
        setText("counter", text)
		let patitos = document.getElementsByTagName("img");
		for (let i = 0; i < patitos.length; i++) {
			patitos[i].style.left = ~~ (Math.random() * (window.innerWidth)) + 'px';
			patitos[i].style.top = ~~ (Math.random() * (window.innerHeight)) + 'px';
		}
		if (rand() == 2) {
			invocaou();
			let ou = document.getElementsByTagName("img");
			for (let i = 0; i < ou.length; i++) {
				ou[i].style.left = ~~ (Math.random() * (window.innerWidth)) + 'px';
				ou[i].style.top = ~~ (Math.random() * (window.innerHeight)) + 'px';
			}
		}
	}, 1250)
});