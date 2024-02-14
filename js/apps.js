function play() {
    // const home = document.getElementById('home')
    // home.classList.add('hidden')

    //     const playGround = document.getElementById('play-ground')
    //     playGround.classList.remove('hidden')
    hideElement('home')
    showElement('play-ground')
    gameContinue()

}
function gameContinue() {
    const text = getAlfa();
    const upper = text.toUpperCase()

    const letter = document.getElementById('letter')
    letter.innerText = upper;
    setBg(text)
}
