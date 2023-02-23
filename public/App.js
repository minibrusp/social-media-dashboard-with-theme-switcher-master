import { numberAnimationZero, numberAnimationZeroComma, numberAnimationZeroUp} from './animations.js'

let checkbox = document.querySelector('#theme-checkbox')
let socialsFollowers = document.querySelectorAll('header strong')
let totalFollowers = document.querySelector('.total-followers')
let valuesToday = document.querySelectorAll('.value-today')
let overviewMainValues = document.querySelectorAll('#overview strong')
let overviewValuesToday = document.querySelectorAll('#overview .overview-today')
let themeLabel = document.querySelector('#theme-label')

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        checkbox.checked = true
        return
      } 
    document.documentElement.classList.remove('dark')
    checkbox.checked = false
})

checkbox.addEventListener('click', () => {
    checkboxValue()
})

themeLabel.addEventListener('keyup', event => {
    if(event.key === ' ' || event.key === 'Enter') {
        event.preventDefault()
        checkbox.checked ? checkbox.checked = false : checkbox.checked = true
        checkboxValue()
    }
})
themeLabel.addEventListener('keydown', event => {
    if(event.key === ' ') {
        event.preventDefault()
    }
})



socialsFollowers.forEach(socialFollowers => {
    numberAnimationZero(socialFollowers)
})

valuesToday.forEach(value => {
    numberAnimationZeroUp(value)
})

numberAnimationZeroComma(totalFollowers)

overviewMainValues.forEach(value => {
    numberAnimationZero(value)
})


overviewValuesToday.forEach(value => {
    numberAnimationZeroUp(value)
})


function checkboxValue() {
    if(checkbox.checked === true) {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
        return
    } 
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
}
