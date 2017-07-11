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



/** draw arc function **/
function drawArc(ctx, centerX, centerY, radius, startAngle, endAngle){
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.stroke();
}

/*
ctx: reference to the drawing context
centerX: the X coordinate of the circle center
centerY: the Y coordinate of the circle center
radius: the X coordinate of the line end point
startAngle: the start angle in radians where the portion of the circle starts
endAngle: the end angle in radians where the portion of the circle ends
*/

/** pie slice function **/

function drawPieSlice(ctx,centerX, centerY, radius, startAngle, endAngle, color ){
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(centerX,centerY);
    ctx.arc(centerX, centerY, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fill();
}
/*
ctx: reference to the drawing context
centerX: the X coordinate of the circle center
centerY: the Y coordinate of the circle center
radius: the X coordinate of the line end point
startAngle: the start angle in radians where the portion of the circle starts
endAngle: the end angle in radians where the portion of the circle ends
color: the color used to fill the slice
*/


/*** calling the drawing functions **/
drawLine(_ctx,100,100,200,200);
drawArc(_ctx, 150,150,150, 0, Math.PI/3);
drawPieSlice(_ctx, 150,150,150, Math.PI/2, Math.PI/2 + Math.PI/4, '#ff0000');

/** pie data model**/

var myVinyls = {
    "Classical music": 10,
    "Alternative rock": 14,
    "Pop": 2,
    "Jazz": 12
};
/*** eating the pie ;) */
var Piechart = function(options){
    this.options = options;
    this.canvas = options.canvas;
    this.ctx = this.canvas.getContext("2d");
    this.colors = options.colors;

    this.draw = function(){
        var total_value = 0;
        var color_index = 0;
        for (var categ in this.options.data){
            var val = this.options.data[categ];
            total_value += val;
        }

        var start_angle = 0;
        for (categ in this.options.data){
            val = this.options.data[categ];
            var slice_angle = 2 * Math.PI * val / total_value;

            drawPieSlice(
                this.ctx,
                this.canvas.width/2,
                this.canvas.height/2,
                Math.min(this.canvas.width/2,this.canvas.height/2),
                start_angle,
                start_angle+slice_angle,
                this.colors[color_index%this.colors.length]
            );

            start_angle += slice_angle;
            color_index++;
        }

    }
}
var myPiechart = new Piechart(
    {
        canvas:myCanvas,
        data:myVinyls,
        colors:["#fde23e","#f16e23", "#57d9ff","#937e88"]
    }
);
myPiechart.draw();
