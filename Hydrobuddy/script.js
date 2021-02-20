const smallCups = document.querySelectorAll('.cup-small')
const listers = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

updateBigCup()

smallCups.forEach((cup,idx)=>{
    cup.addEventListener('click', ()=>highlightCups(idx))
})

function highlightCups(idx){
    if (idx===7 && smallCups[idx].classList.contains("full")) idx--

}