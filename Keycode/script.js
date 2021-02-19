const insert = document.getElementById('insert');

// add eventListener to whole window object
window.addEventListener('keydown', (e)=>{
    // insert into DOM Tree
    insert.innerHTML = `
    <div class="key">
    ${e.key === '' ? 'Space' : e.key}
    <small>event.key</small>
    </div>
    <div class="key">
    ${e.keyCode}
    <small>event.keyCode</small>
    </div>
    <div class="key>
        ${e.code}
    </div>
    `
})

