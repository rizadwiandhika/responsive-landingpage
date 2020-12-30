// Navbar
const ulContainer = document.querySelector('nav .ul-container')
const nav = document.querySelector('nav')
const wrapper = document.body.firstElementChild
console.log(wrapper.lastElementChild.previousElementSibling.previousElementSibling)

nav.addEventListener('click', (e) => {
    console.log(e.target)
    if (e.target.className == 'hamburger' 
            || e.target.className == 'bar'
            || e.target.className == 'ul-side') {
        ulContainer.classList.toggle('slide')
        document.body.classList.toggle('slide')
        document.body.firstElementChild.classList.toggle('slide')
        nav.nextElementSibling.classList.toggle('slide')
        nav.nextElementSibling.nextElementSibling.nextElementSibling.classList.toggle('slide')
        wrapper.lastElementChild.previousElementSibling.classList.toggle('slide')
        wrapper.lastElementChild.previousElementSibling.previousElementSibling.classList.toggle('slide')
    }
})
// Akhir -  Navbar


// Jumbotron
const info = [
    {
        header : 'Explore the Forrest',
        paragraf : 'Things are getting amazing as you dive deeper into it.'
    },
    {
        header : 'Deers are Also Our Friends',
        paragraf : 'See the exoticness of deers in Africa'
    },
    {
        header : 'Dare to Climb',
        paragraf : 'Challange your fear in in Nepal'
    }
]

const jumbotron = document.querySelector('.jumbotron')
const changeBg = document.querySelector('.change-bg')
const points = document.querySelectorAll('.bg-point')
points[0].style.backgroundColor = '#fff'
let bgImgFile = 1
changeBg.addEventListener('click', (e) => {

    console.log(e)
    let beforeImgIndex = 0
    let afterImgIndex = 0
    if (e.target.className == 'next' || e.target.className == 'arrow-next') {
        jumbotron.style.filter = 'opacity(50%)'
        
        if (bgImgFile == 3) {
            beforeImgIndex = 2
            afterImgIndex = 0
        } else {
            beforeImgIndex = bgImgFile - 1
            afterImgIndex = bgImgFile
        }
        setTimeout(() => {
            if (bgImgFile == 3) bgImgFile = 0
            jumbotron.style.backgroundImage = `url(img/${++bgImgFile}.jpeg)`
            jumbotron.style.filter = 'opacity(100%)'
        }, 150)

    } else if (e.target.className == 'prev' || e.target.className == 'arrow-prev') {
        jumbotron.style.filter = 'opacity(50%)'

        if (bgImgFile == 1) {
            beforeImgIndex = 0
            afterImgIndex = 2
        } else {
            beforeImgIndex = bgImgFile - 1
            afterImgIndex = bgImgFile - 2
        }
        setTimeout(() => {
            if (bgImgFile == 1) bgImgFile = 4
            jumbotron.style.backgroundImage = `url(img/${--bgImgFile}.jpeg)`
            jumbotron.style.filter = 'opacity(100%)'
        }, 150)
    }

    points[beforeImgIndex].style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
    points[afterImgIndex].style.backgroundColor = '#fff'

    setTimeout(() => {
        jumbotron.firstElementChild.nextElementSibling.innerHTML = info[afterImgIndex].header
        jumbotron.firstElementChild.nextElementSibling.nextElementSibling.innerHTML = info[afterImgIndex].paragraf
    }, 150)
    
})
// Akhir -Jumbotron