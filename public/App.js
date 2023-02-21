import { numberAnimationZero, numberAnimationZeroComma, numberAnimationZeroUp} from './animations.js'

let checkbox = document.querySelector('#theme-checkbox')
let socialsFollowers = document.querySelectorAll('header strong')
let totalFollowers = document.querySelector('.total-followers')
let valuesToday = document.querySelectorAll('.value-today')
let overviewMainValues = document.querySelectorAll('#overview strong')
let overviewValuesToday = document.querySelectorAll('#overview .overview-today')

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
    
    if(checkbox.checked === true) {
        document.documentElement.classList.add('dark')
        localStorage.theme = 'dark'
        return
    } 
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
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
