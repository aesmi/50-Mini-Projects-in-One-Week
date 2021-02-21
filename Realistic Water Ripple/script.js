var app;
let load = 0
let int = setInterval(blurring, 15)
const textEl = document.createElement("div");
document.body.appendChild(textEl);
textEl.setAttribute("class", ".loading-text");
textEl.innerHTML=("0%");

function initPixi() {
  // create pixi application instance, pass in options from out window object props
  app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  // append our app view into our DOMTree
  document.body.appendChild(app.view);
  // import image
  var image = new PIXI.Sprite.from("animegirl.jpeg");
  // set our image props to match our window props
  [image.width,image.height]=[window.innerWidth,window.innerHeight];
  // add onto our view stage
  app.stage.addChild(image);
  // import images as sprite
  displacementSprite = new PIXI.Sprite.from("cloud.jpg");
  // add displacement filter
  displacementFilter = new PIXI.filters.DisplacementFilter(displacementSprite);
  // repeat when wrapping
  displacementSprite.texture.baseTexture.wrapMode = PIXI.WRAP_MODES.REPEAT;
  // add to stage
  app.stage.addChild(displacementSprite);
  // set our filter array
  app.stage.filters = [displacementFilter];
  // set our transformation propertie
  app.renderer.view.style.transform = "scale(1.02)";
  displacementSprite.scale.x = 4;
  displacementSprite.scale.y = 4;
  animate();
}
function animate() {
  displacementSprite.x += 10;
  displacementSprite.y += 4;
  requestAnimationFrame(animate);
}

initPixi();


const loadText = document.querySelector('.loading-text')
const bg = document.getElementsByTagName('canvas')[0]
console.log(document.getElementsByTagName('canvas'))
console.log(document.getElementsByTagName('canvas')[0])

function blurring() {
  load++

  if (load > 99) {
    clearInterval(int)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}