const buttonNext = document.querySelector('.btnNext')
const buttonBack = document.querySelector('.btnBack')

const photoes = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg']
let i = 0 

buttonNext.addEventListener('click', () => {
    i++
    if(i > photoes.length-1) {
        i = 0
    }
    document.querySelector('.photoes').src = photoes [i]
    
})

buttonBack.addEventListener('click', () => {
    i--
    if(i < 0) {
        i = photoes.length-1
    }
    document.querySelector('.photoes').src = photoes [i]
})