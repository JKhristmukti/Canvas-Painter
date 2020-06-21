var database,position;
var dot;
var drawing = [];

function setup(){
    createCanvas(500,500);
    database = firebase.database();
    dot = createSprite(2000,2000,10,10);
    dot.shapeColor = "black";
    var dotPosition = database.ref('dot/position');
    dotPosition.on("value", readPosition, showError);
}

function draw(){
    background("white");
    
    drawSprites();
}

function mouseDragged() {
    var dot = createSprite(mouseX,mouseY,10,10);
    drawing.push(dot);

    writePosition(dot.x,dot.y);
}

function mousePressed() {
    var dot = createSprite(mouseX,mouseY,10,10);
    drawing.push(dot);

    writePosition(dot.x,dot.y);
}

function writePosition(x,y){
    database.ref('dot/position').set({
        'x': position.x = x,
        'y': position.y = y
    })
}

function readPosition(data){
    position = data.val();
    dot.x = position.x;
    dot.y = position.y;
}

function showError() {
    console.log("Error in code");
}