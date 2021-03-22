let font;
let lines;
let txt;

let y = 0;

function preload() {
  lines = loadStrings('project-1.txt');
 font= loadFont('AvenirNextLTPro-Demi.otf')
}

function setup() {
  createCanvas(1280, 720, WEBGL);
  txt = join(lines, '\n');
  y = height / 2;
}

function draw() {
  background(0);
  

  fill(238, 213, 75);
  textFont(font);
  textSize(width * 0.04);
  textAlign(CENTER);
  rotateX(PI / 5);
  let w = width * 0.6;
  text(txt, -w / 2, y, w, height * 10);

  y -=1;
}