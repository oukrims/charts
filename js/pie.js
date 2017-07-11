var myCanvas = document.getElementById("myCanvas");
myCanvas.width = 300;
myCanvas.height = 300;

var ctx = myCanvas.getContext("2d");

/** draw line function **/

function drawLine(ctx, startX, startY, endX, endY){
    ctx.beginPath();
    ctx.moveTo(startX,startY);
    ctx.lineTo(endX,endY);
    ctx.stroke();
}

/*
ctx: reference to the drawing context
startX: the X coordinate of the line starting point
startY: the Y coordinate of the line starting point
endX: the X coordinate of the line end point
endY: the Y coordinate of the line end point
*/
