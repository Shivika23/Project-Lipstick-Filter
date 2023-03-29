
function preload() {
lips= loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
}

nose_x=""
nose_y=""

function setup() {
    canvas = createCanvas(600, 500)
    canvas.center()

    camera = createCapture(VIDEO)
    camera.size(350, 320)
    camera.hide()

    posenet = ml5.poseNet(camera,modelLoaded)
    posenet.on('pose',gotResults)
}

function gotResults(results) {
    if (results.length>0) {
     console.log(results)
     nose_x=results[0].pose.nose.x+100
     nose_y=results[0].pose.nose.y+130;
    }
}

function modelLoaded() {
    console.log("poseNet is working")
}

function draw() {
    image(camera, 50, 50, 500, 400)
    image(lips,nose_x,nose_y,70,30)
    fill("gold")
    circle(25, 30, 35)
    circle(25, 75, 35)
    circle(25, 120, 35)
    circle(25, 165, 35)
    circle(25, 210, 35)
    circle(25, 255, 35)
    circle(25, 300, 35)
    circle(25, 345, 35)
    circle(25, 390, 35)
    circle(25, 435, 35)
    circle(28, 477, 35)
    //2
    circle(70, 28, 35)
    circle(115, 28, 35)
    circle(160, 28, 35)
    circle(205, 28, 35)
    circle(250, 28, 35)
    circle(295, 28, 35)
    circle(340, 28, 35)
    circle(385, 28, 35)
    circle(430, 28, 35)
    circle(475, 28, 35)
    circle(520, 28, 35)
    //3
    circle(70, 475, 35)
    circle(115, 475, 35)
    circle(160, 475, 35)
    circle(205, 475, 35)
    circle(250, 475, 35)
    circle(295, 475, 35)
    circle(340, 475, 35)
    circle(385, 475, 35)
    circle(430, 475, 35)
    circle(475, 475, 35)
    circle(520, 475, 35)
    //4
    circle(570, 30, 35)
    circle(575, 75, 35)
    circle(575, 120, 35)
    circle(575, 165, 35)
    circle(575, 210, 35)
    circle(575, 255, 35)
    circle(575, 300, 35)
    circle(575, 345, 35)
    circle(575, 390, 35)
    circle(575, 435, 35)
    circle(567, 475, 35)
}

function snap() {
    save("lipstick.png")
}