function changeColor() {
    color = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = color;
}

function rand() {
    return Math.floor(Math.random() * 10);
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
    ou.style.left = Math.floor(Math.random() * (window.innerWidth)) + 'px';
    ou.style.top = Math.floor(Math.random() * (window.innerHeight)) + 'px';
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
    patito.style.left = Math.floor(Math.random() * (window.innerWidth)) + 'px';
    patito.style.top = Math.floor(Math.random() * (window.innerHeight)) + 'px';
    document.body.appendChild(patito);
    patito.onclick = quack;
    patitoCounter += 1;
    
}
let patitoCounter = 0;
    document.addEventListener("DOMContentLoaded", function () {
        changeColor();
        invocaPatito();
        setInterval(function () {
            changeColor();
            invocaPatito();
            document.getElementById("title").innerHTML = `Patitos: ${patitoCounter}`;
            document.getElementById("counter").innerHTML = `Patitos: ${patitoCounter}`;
            let patitos = document.getElementsByTagName("img");
            for (let i = 0; i < patitos.length; i++) {
                patitos[i].style.left = Math.floor(Math.random() * (window.innerWidth)) + 'px';
                patitos[i].style.top = Math.floor(Math.random() * (window.innerHeight)) + 'px';
            }
            if (rand() == 2) {
                invocaou();
                let ou = document.getElementsByTagName("img");
                for (let i = 0; i < ous.length; i++) {
                    ou[i].style.left = Math.floor(Math.random() * (window.innerWidth)) + 'px';
                    ou[i].style.top = Math.floor(Math.random() * (window.innerHeight)) + 'px';
                }
            }
        }, 1250)
    });