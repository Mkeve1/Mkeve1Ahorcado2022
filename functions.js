// Draw Canvas
function drawCanvas() {
    ctx.canvas.width = 300;
    ctx.canvas.height = 180;
    ctx.scale(20, 20);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 7, 4, 1);
    ctx.fillRect(1, 0, 1, 8);
    ctx.fillRect(2, 0, 3, 1);
    ctx.fillRect(4, 1, 1, 1);
}

// Random Word
function selectRandomWord() {
    let word = words[Math.floor((Math.random() * words.length))];
    wordGameOver = word;
    selectedWord = word.split('');
}

// Add Word and draw
function drawWord() {
    let fragment = document.createDocumentFragment();
    
    selectedWord.forEach( letter => {
        const letterElement = document.createElement("SPAN");
        letterElement.innerHTML = letter.toUpperCase();
        letterElement.classList.add("letter");
        letterElement.classList.add("hidden");
        fragment.appendChild(letterElement);
    });

    wordContainer.appendChild(fragment);
}

// Event keyboard
function letterEvent(event) { 
    let newLetter = event.key.toUpperCase();

    if (newLetter.match(/^[a-zñ]$/i) && !usedLetter.includes(newLetter)) {
        letterInput(newLetter);
    }
}

// Decide if the word is correct or is mistakes
function letterInput(letter) {
    if (selectedWord.includes(letter)) {
        correctLetter(letter);
    }

    else {
        wrongLetter();
    }

    addLetter(letter);
    usedLetter.push(letter);
}

// Correct Election
function correctLetter(letter) {
    const { children } = wordContainer;
    for(let i = 0; i < children.length; i++) {
        if (children[i].innerHTML === letter && children[i].classList.contains("hidden")) {
            children[i].classList.remove("hidden");
            hits++;
        }
    }
    if (hits === selectedWord.length) endGame();
}

// Mistake Election
function wrongLetter() {
    addBodyPart(bodyParts[mistakes]);
    mistakes++;

    if (mistakes === bodyParts.length) endGame(); 
}

// Add body parts
function addBodyPart(bodyParts) {
    ctx.fillStyle = "#cccccc";
    ctx.fillRect(...bodyParts);
}

// Add letter and create 
function addLetter(letter) {
    let fragment = document.createDocumentFragment();
    const letterElement = document.createElement("SPAN");
    letterElement.innerHTML = letter.toUpperCase();
    fragment.appendChild(letterElement);
    usedLettersElement.appendChild(fragment);
}

// End Game
function endGame() {
    document.removeEventListener("keydown", letterEvent);
    startButton.style.display = "block";
    inputValue.removeAttribute("hidden");
    button.removeAttribute("hidden");
    gameOverDiv();
}

// Game Over
function gameOverDiv() {
    if (hits == selectedWord.length) {
        goClass.removeAttribute("hidden");
        goClass.innerHTML = "¡BUEN TRABAJO!, ADIVINASTE";
    }
    else {
        goClass.removeAttribute("hidden");
        goClass.innerHTML = `¡GAME OVER!, LA PALABRA ES.: ${wordGameOver}`;
    }
}

function addWord(){
    let value = inputValue.value.toUpperCase();
    if (value != "") {
        words.push(value);
        inputValue.value = "";
        console.log(words);
    }
}