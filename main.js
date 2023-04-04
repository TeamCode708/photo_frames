//loading the images
function preload() {
    img_down = loadImage('flower_down.png');
    img_up = loadImage('flower_up.png');
    img_left = loadImage('flower_left.png');
    img_right = loadImage('flower_right.png');
    loadImage('1.png');
    loadImage('2.png');
    loadImage('3.png');
    loadImage('4.png');
}
//setting up the canvas
function setup() {
    canvas = createCanvas(700, 500);
    canvas.position(280, 1100);
    background(255, 255, 255);
    video = createCapture(VIDEO);
    video.hide();
}
function draw() {
    image(video, 200, 150, 300, 200);
}
//saving the snap
function take_snapshot() {
    save('photo_frame.png');
}
//retro frame
function create_retro() {
    fill(0, 0, 0);
    rect(0, 0, 700, 10);
    rect(0, 100, 700, 10);
    rect(0, 0, 8, 100);
    rect(150, 0, 8, 100);
    rect(300, 0, 8, 100);
    rect(450, 0, 8, 100);
    rect(600, 0, 8, 100);
    rect(0, 490, 700, 10);
    rect(0, 390, 700, 10);
    rect(692, 400, 8, 100);
    rect(542, 400, 8, 100);
    rect(392, 400, 8, 100);
    rect(242, 400, 8, 100);
    rect(92, 400, 8, 100);
}
//overlapping borders
function create_overlap() {
    fill(0, 0, 0);
    rect(150, 20, 8, 440);
    rect(550, 50, 8, 430);
    rect(120, 70, 490, 8);
    rect(90, 430, 490, 8);
}
//polaroid frame
function create_polaroid() {
    fill(0, 0, 0);
    stroke(0, 0, 0);
    rect(0, 0, 700, 30);
    rect(0, 0, 30, 500);
    rect(670, 0, 30, 500);
    rect(0, 420, 700, 80);
}
//circle frame
function create_circle() {
    image(img_down, 230, 380, 250, 150);
    image(img_up, 230, -35, 250, 150);
    image(img_left, 60, 120, 150, 250);
    image(img_right, 490, 120, 150, 250);
    fill(255, 0, 0, 0);
    stroke(0, 0, 0);
    circle (350, 250, 360);
}
