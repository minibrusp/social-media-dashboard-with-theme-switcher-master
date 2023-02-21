export const numberAnimationZero = (elem) => {
    gsap.from(elem, {
       textContent: 0,
       duration: 1,
       ease: Power1.easeIn,
       snap: { textContent: 1 },
       stagger: 1,
       delay: .5,
    })
 }

 export const numberAnimationZeroComma = (elem) => {
    gsap.from(elem, {
       textContent: 0,
       duration: 1,
       ease: Power1.easeIn,
       snap: { textContent: 1 },
       stagger: 1,
       delay: .5,
       onComplete: () => {
        let result = parseInt(elem.textContent).toLocaleString()
        elem.textContent = result
       }
    })
 }

 export const numberAnimationZeroUp = (elem) => {
    let valueIcon = elem.parentElement.parentElement
    let valueColor = valueIcon.querySelector('span')
    let img = valueIcon.querySelector('img')
    gsap.from(elem, {
       textContent: 0,
       duration: 1,
       ease: Power1.easeIn,
       snap: { textContent: 1 },
       stagger: 1,
       delay: .5,
       onComplete: () => {
        img.style.opacity = 1
        valueColor.classList.remove('value-normal')
       }
    })
 }