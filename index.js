const button = document.querySelector('div#toggle');
const html = document.querySelector('html')

const getStyle = (element, style) => 
    window
    .getComputedStyle(element)
    .getPropertyValue(style)

const initialColors = {
    bg: getStyle(html, '--bg')
}
const darkMode = {
    bg: "#292c35"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()

const changedColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key])    
    )
}
button.addEventListener('click', ({target}) => {
    if (button.className != 'positionButton') {
        button.classList.add('positionButton')
        html.classList.add('dark')
        html.classList.remove('light')
        changedColors(darkMode)
    } else {
        button.classList.remove('positionButton')
        html.classList.add('light')
        html.classList.remove('dark')
        changedColors(initialColors)
    }
    localStorage.setItem('color-mode', target)
    console.log(target)
})
const checkboxColorMode = JSON.parse(localStorage.getItem('color-mode'))
console.log(checkboxColorMode)
if (checkboxColorMode) {
    html.className = checkboxColorMode
    changedColors(darkMode)
}