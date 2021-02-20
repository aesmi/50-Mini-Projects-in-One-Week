const container = document.getElementById('container')
const colors = ['#FFADAD', '#FFD6A5', '#FDFFB6', '#CAFFBF', '#9BF6FF', '#A0C4FF', '#BDB2FF', '#FFC6FF', '#FFFFFC']
const SQUARES = 500;

for(let i = 0; i < SQUARES; i++) {
    const square = document.createElement('div')
    square.classList.add('square')
    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseout', () => removeColor(square))
    container.appendChild(square)
}

function setColor(element){
    const color = `${getRandomColor()}`
    // assign color to prop
    element.style.background = color
    // add in more props!
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element){
    element.style.background = `rgba(0,0,0,1)`;
    element.style.boxShadow = `0 0 2px #000`;
}
function getRandomColor(){
    return colors[Math.floor(Math.random() * colors.length)];
}