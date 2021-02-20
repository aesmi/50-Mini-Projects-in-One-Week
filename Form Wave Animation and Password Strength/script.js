const labels = document.querySelectorAll(".form-control label");
const password = document.getElementById('password');
const bg = document.getElementById('body');

labels.forEach((label) => {
  label.innerHTML = label.innerHTML
    .split("")
    .map(
      (letter, idx) =>
        `<span style="transition-delay:${idx * 50}ms">${letter}</span>`
    )
    .join("");
});

password.addEventListener('input', e=>{
  const input = e.target.value
  const length = input.length
  const blurValue = 20 - length*2
  bg.style.filter = `blur(${blurValue})px`
})
