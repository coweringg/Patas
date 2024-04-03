var audioActual = null;
var videoActual = null;

function sumaNumeros(num1, num2) {
    return num1 + num2;
}

function sumar() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var resultado = sumaNumeros(num1, num2);
    document.getElementById("resultado").textContent = "El resultado de la suma es: " + resultado;
}

function reproducir() {
    var numero = document.getElementById("numero").value;
    
    if (audioActual) {
        audioActual.pause();
        audioActual.currentTime = 0;
    }
    
    if (videoActual) {
        videoActual.pause();
        videoActual.currentTime = 0;
    }

    var audio = new Audio(numero + ".mp3");
    audio.play();
    audioActual = audio;

    var video = document.getElementById("videoFondo");
    video.src = numero + ".mp4";
    video.play();
    videoActual = video;
}

