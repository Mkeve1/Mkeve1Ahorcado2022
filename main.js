// Words Array
let words = ["HAMBURGUESA", "PEPITO", "JUGADOR", "JUAN", "MARIA", "DANIEL", "AMIGO", "TECLADO", "CURSO", "PANTALLA", "JAVASCRIPT", "HTML", "CSS", "SILLA", "ALMOHADA", "AHORCADO", "PALABRAS", "ARMAS", "MARIONETA", "ZULIA", "MARACAIBO", "VENEZUELA", "COMIDA", "ESTADO", "CAMIONETA", "CAMISA", "DICCIONARIO", "ABECEDARIO", "CANVAS", "ETIQUETAS", "ELEMENTOS", "TRABAJO", "PARTICIPANTE", "QUESO", "BEBER", "AGUA", "CORTADA", "CEMENTERIO", "LISTA", "GUERRA"];

// Canvas
let startButton = document.querySelector(".startButton");
let canvas = document.querySelector(".canvas");
let ctx = canvas.getContext("2d");

// Select Div And Button
const usedLetters = document.querySelector(".usedLetters");
const wordContainer = document.querySelector(".wordContainer");
const usedLettersElement = document.querySelector(".usedLettersElement");
const goClass = document.querySelector(".gameOverDiv");
const inputValue = document.querySelector(".value");
const button = document.querySelector(".button");

// Things of Game
let selectedWord;
let usedLetter;
let hits;
let mistakes;
let wordGameOver;

// Body Parts
const bodyParts = [
    [4, 2, 1, 1],
    [4, 3, 1, 2],
    [3, 5, 1, 1],
    [5, 5, 1, 1],
    [3, 3, 1, 1],
    [5, 3, 1, 1]
];

// Start Game
function startGame() {
    usedLetter = [];
    hits = 0;
    mistakes = 0;
    wordContainer.innerHTML = "";
    goClass.innerHTMt = "";
    usedLettersElement.innerHTML = "";
    usedLettersElement.innerHTML = "LETTERS USED: ";
    startButton.style.display = "none";
    goClass.setAttribute("hidden", "");
    inputValue.setAttribute("hidden", "");
    button.setAttribute("hidden", "");

    drawCanvas();
    selectRandomWord();
    drawWord();

    document.addEventListener("keydown", letterEvent);
}

startButton.addEventListener("click", startGame);
button.addEventListener("click", addWord);
