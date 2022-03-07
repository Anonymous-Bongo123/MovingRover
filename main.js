canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
rover = "rover.png";
rover_height = 100;
rover_width = 90;
rover_x = 100;
rover_y = 100;
background = "mars.jpg";
function add() {
    rover_imgTag = new Image();
    rover_imgTag.onload = uploadrover;
    rover_imgTag.src = rover;
    background_imgTag = new Image();
    background_imgTag.onload = uploadbackground();
    background_imgTag.src = background;
}
function uploadrover() {
    ctx.drawImage(rover_imgTag, rover_x, rover_y, rover_width, rover_height);

}
function uploadbackground() {
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);

}
window.addEventListener("keydown", my_keydown);
function my_keydown(e) {
    keyPressed = e.keyCode;
    if (keyPressed = "37") {
       left();
    }
    if (keyPressed = "38") {
        up();
    }
    if (keyPressed = "39") {
        right();
    }
    if (keyPressed = "40") {
        down();
    }
}

function up() {
    if (rover_y >=0) {
        rover_y = rover_y - 10;
        uploadbackground();
        uploadrover();
    }
    

}
function down() {
    if (rover_y <=800) {
        rover_y = rover_y + 10;
        uploadbackground();
        uploadrover();
    }
}
function left() {
    if (rover_x >=0) {
        rover_x = rover_x - 10;
        uploadbackground();
        uploadrover();
    }
}
function right() {
    if (rover_x <=600) {
        rover_x = rover_x + 10;
        uploadbackground();
        uploadrover();
    }
}

