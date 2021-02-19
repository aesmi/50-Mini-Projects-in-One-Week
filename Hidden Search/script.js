const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const input = document.querySelector('.input');

btn.addEventListener('click', ()=>{
    // toggles a class if its there
    search.classList.toggle('active')
    // focuses on the input Element
    input.focus()
})