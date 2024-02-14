function hideElement(elementById) {
    const element = document.getElementById(elementById)
    element.classList.add('hidden')
}
function showElement(elementById) {
    const element = document.getElementById(elementById)
    element.classList.remove('hidden')
}
function getAlfa() {
    const alfa = 'abcdefghijklmnopqrstuvwxyz'
    const alfaArr = alfa.split('')
    const random = Math.random() * 25
    const index = Math.round(random)
    const getText = alfaArr[index]
    return getText
    console.log(getText);
}
function setBg(elementById) {
    const element = document.getElementById(elementById)
    element.classList.add('bg-yellow-400')

}