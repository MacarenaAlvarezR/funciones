
const ele = document.getElementById("ele1");
ele.style.backgroundColor = 'green';
ele.style.color = 'white'

function pintar(texto, color = 'green') {
    texto.style.backgroundColor = color;
    texto.style.color = 'black'
}

ele.addEventListener("click", function (event) {
    pintar(event.target, 'yellow');
});
