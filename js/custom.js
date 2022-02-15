//alert("hello");
setInterval(setWatch, 1000)

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')


function setWatch() {
    const currenDate = new Date()
    const secondsRatio = currenDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currenDate.getMinutes()) / 60
    const hourRatio = (minutesRatio + currenDate.getHours()) / 12

    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hourRatio)
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setWatch()