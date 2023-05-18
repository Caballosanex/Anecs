/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   script.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: alexsanc <alexsanc@student.42barcel>       +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/05/18 14:33:04 by alexsanc          #+#    #+#             */
/*   Updated: 2023/05/18 14:33:31 by alexsanc         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

function changeColor() {
	const color = '#' + Math.floor(Math.random() * 16777215).toString(16);
	document.body.style.transition = 'background-color 0.5s ease-in-out';
	document.body.style.backgroundColor = color;
}

function rand() {
	return Math.floor(Math.random() * 10);
}

function setText(id, text) {
	document.getElementById(id).innerHTML = text;
}

function quack() {
	const audio = new Audio('media/quack.mp3');
	audio.play();
}

function crunch() {
	const audio = new Audio('media/crack.mp3');
	audio.play();
}

function invocaou() {
	const ou = document.createElement("img");
	ou.src = "media/ou.png";
	ou.style.width = "70px";
	ou.style.height = "70px";
	ou.style.position = "absolute";
	ou.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
	ou.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
	document.body.appendChild(ou);
	ou.addEventListener("click", function () {
		invocaPatito();
		crunch();
		document.body.removeChild(ou);
	});
}

function invocaPatito() {
	const patito = document.createElement("img");
	patito.src = "https://c.tenor.com/fOjhwb3eEqIAAAAi/quack-duck-high-res.gif";
	patito.style.width = "50px";
	patito.style.height = "50px";
	patito.style.position = "absolute";
	patito.style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
	patito.style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
	document.body.appendChild(patito);
	patito.onclick = quack;
	patitoCounter += 1;
}

let timer = 0;
let patitoCounter = 0;
let backgroundMusic = new Audio('media/background.mp3');
let audioPlaying = false;
let audioButton;
let playBar;

function toggleBackgroundMusic() {
	if (audioPlaying) {
		backgroundMusic.pause();
		audioPlaying = false;
		audioButton.innerText = "AUDIO OFF";
		clearInterval(playBarInterval);
	} else {
		backgroundMusic.currentTime = parseFloat(localStorage.getItem('audioPosition')) || 0;
		backgroundMusic.loop = true;

		const playPromise = backgroundMusic.play();

		if (playPromise) {
			playPromise
				.then(() => {
					audioPlaying = true;
					audioButton.innerText = "AUDIO ON";
					startPlayBar();
				})
				.catch((error) => {
					console.error("Failed to start background music:", error);
				});
		}
	}
}

function startPlayBar() {
	playBarInterval = setInterval(function () {
		const duration = backgroundMusic.duration;
		const currentTime = backgroundMusic.currentTime;
		const progressBarWidth = (currentTime / duration) * 100;
		playBar.style.width = progressBarWidth + '%';
	}, 100);
}

function updateAudioPosition() {
	const position = backgroundMusic.currentTime;
	localStorage.setItem('audioPosition', position);
}

function beginGame() {
	const beginButton = document.getElementById("beginButton");
	beginButton.style.display = "none";

	audioButton = document.createElement("button");
	audioButton.id = "audioButton";
	audioButton.innerText = "AUDIO OFF";
	audioButton.style.padding = "10px 20px";
	audioButton.style.fontSize = "1.2em";
	audioButton.style.backgroundColor = "#0011ff";
	audioButton.style.color = "rgb(0, 170, 255)";
	audioButton.style.border = "none";
	audioButton.style.borderRadius = "5px";
	audioButton.style.boxShadow = "0 1px 1px rgba(0, 0, 0, 0.2)";
	audioButton.style.position = "fixed";
	audioButton.style.bottom = "20px";
	audioButton.style.right = "20px";
	audioButton.style.cursor = "pointer";
	audioButton.onclick = toggleBackgroundMusic;
	document.body.appendChild(audioButton);

	playBar = document.getElementById("playBar");

	document.addEventListener("DOMContentLoaded", function () {
		timer = setInterval(function () {
			timer++;
			const minutes = Math.floor(timer / 60);
			const seconds = timer % 60;
			const text = `Timer: ${minutes < 10 ? "0" + minutes : minutes}:${seconds < 10 ? "0" + seconds : seconds}`;
			setText("timer", text);
		}, 1000);

		setInterval(function () {
			changeColor();
			invocaPatito();
			let text = `Patitos: ${patitoCounter}`;
			if (patitoCounter == 69) {
				text = `Patitos: ${patitoCounter} - Nice`;
			}
			setText("title", text);
			setText("counter", text);
			const patitos = document.getElementsByTagName("img");
			for (let i = 0; i < patitos.length; i++) {
				patitos[i].style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
				patitos[i].style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
			}
			if (rand() == 2) {
				invocaou();
				const ou = document.getElementsByTagName("img");
				for (let i = 0; i < ou.length; i++) {
					ou[i].style.left = Math.floor(Math.random() * window.innerWidth) + 'px';
					ou[i].style.top = Math.floor(Math.random() * window.innerHeight) + 'px';
				}
			}
		}, 1250);
	});

	backgroundMusic.addEventListener('timeupdate', updateAudioPosition);
}