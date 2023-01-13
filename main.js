function preload()
{
 clownNose = loadImage("clownnose.png");
}

function setup()
{
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if (results.length > 0)
    {
        console.log(results);
        console.log("nose_x = " + results[0].pose.nose.x);
        console.log("nose_y = " + results[0].pose.nose.y);
        nose_x=results[0].pose.nose.x;
        nose_y=results[0].pose.nose.y;
    }
}


function draw()
{
    image(video, 0, 0, 300, 300);
    image(clownNose,nose_x,nose_y,30,30);
}

function takeSnapshot()
{
    save('Clown_Image_haha_so_funni_lel_u_still_reading_this_?_haha_lel_goofy.png');
}

function modelLoaded() 
{
    console.log('Posenet Successfully Initialised!')
}

