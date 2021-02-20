const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let idx = 0

let interval = setInterval(run, 1000)

function run(){
    idx++
    changeImage()
}

function changeImage(){
    // resets it to first image if we reach the end
    if(idx > img.length-1){
        idx = 0
    } else if (idx <0){
        // resets it to last if we reach the beginning, hence a circle array as they point ot each other
        idx = image.length-1
    }

    imgs.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval(){
    clearInterval(interval)
    interval = setInterval(run, 2000)
}

leftBtn.addEventListener('click', ()=>{
    idx--
    changeImage()
    resetInterval()
    console.log(idx)
})

rightBtn.addEventListener('click', ()=>{
    idx++
    changeImage()
    resetInterval()
})