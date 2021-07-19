
function setup(){
    canvas = createCanvas(500,500)
    canvas.position(700,150)
    video = createCapture(VIDEO)
    video.size(650,600)
    poseNet= ml5.poseNet(video, modelLoaded)
    poseNet.on ("pose", got_poses)
}

function modelLoaded(){
    console.log("model is loaded ")
}

function got_poses(results){
    if (results.length>0){
    console.log(results)}
}

function draw(){
background("#C0C0C0")
}