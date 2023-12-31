function setup(){

    canvas = createCanvas(600 , 500);
    canvas.position(650 , 200);
    
    video = createCapture(VIDEO);
    video.hide();
    
    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);
    }
    
    function modelLoaded(){
    console.log('poseNet is initialized');
    }

function preload(){

    song = loadSound("music.mp3");  
    }
    
    function draw(){
    
    image(video , 0 , 0 , 600 , 500);
    
    }