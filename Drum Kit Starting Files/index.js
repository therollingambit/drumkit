let makeBeat = document.querySelectorAll('.drum')

makeBeat.forEach(btn => {
    btn.addEventListener('click', function(){
        let letter = this.textContent.toLowerCase()
        makeSound(letter)
        buttonAnimation(letter)
    })
})

document.addEventListener('keydown', e => {
    makeSound(e.key)
    buttonAnimation(e.key)
})

function makeSound(key){
    switch(key){
        case 'w':
            let beatW = new Audio('./sounds/tom-1.mp3')
            beatW.play()
            break
        case 'a':
            let beatA = new Audio('./sounds/tom-2.mp3')
            beatA.play()
            break
        case 's':
            let beatS = new Audio('./sounds/tom-3.mp3')
            beatS.play()
            break
        case 'd':
            let beatD = new Audio('./sounds/tom-4.mp3')
            beatD.play()
            break
        case 'j':
            let beatJ = new Audio('./sounds/snare.mp3')
            beatJ.play()
            break
        case 'k':
            let beatK = new Audio('./sounds/crash.mp3')
            beatK.play()
            break
        case 'l':
            let beatL = new Audio('./sounds/tom-2.mp3')
            beatL.play()
            break
        default:
           console.log(key)
    }
}

function buttonAnimation(currentKey){
    let activeButton = document.querySelector('.' + currentKey)
    activeButton.classList.add('pressed')

    setTimeout(() => {
        activeButton.classList.remove('pressed')
    }, 150);
}



