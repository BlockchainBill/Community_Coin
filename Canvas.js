//Canvas Settings
var canvas = document.getElementById("mycanvas");
let context = canvas.getContext("2d");

var windowHeight = window.innerHeight;
var windowWidth = window.innerWidth;

canvas.height = windowHeight;
canvas.width = windowWidth;

class Circle {
    constructor(xpos, ypos, radius, color) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
    }
    draw(context)  {
        context.beginPath();
        context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();
    }
}

let all_circles = [];

let createCircle = function(circle) {
    circle.draw(context);
}

for ( var numbers = 0; numbers <6; numbers++ ) {
    let random_x = Math.random() * windowWidth;
    let random_y = Math.random() * windowHeight;

    let my_circle = new Circle(random_x, random_y, 50, "black");
    all_circles.push(my_circle);
    createCircle(all_circles[numbers]);
}