var svg = document.getElementById("board");
var clear = document.getElementById("clear");

var start = true;
var radius = 15;
var startX = 0;
var startY = 0;

var draw = function(e){
    var x = e.offsetX;
    var y = e.offsetY;
    console.log(x);
    console.log(y);
    if (start == true){
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx",x);
	c.setAttribute("cy",y);
	c.setAttribute("r",radius);
	c.setAttribute("fill","lightsteelblue");
	svg.appendChild(c);
	startX = x;
	startY = y;
	start = false;
    }
    else {
	var c = document.createElementNS("http://www.w3.org/2000/svg", "circle");
	c.setAttribute("cx",x);
	c.setAttribute("cy",y);
	c.setAttribute("r",radius);
	c.setAttribute("fill","lightsteelblue");
	var l = document.createElementNS("http://www.w3.org/2000/svg", "line");
	l.setAttribute("x1",startX);
	l.setAttribute("y1",startY);
	l.setAttribute("x2",x);
	l.setAttribute("y2",y);
	l.setAttribute("stroke","lightsteelblue");
	svg.appendChild(c);
	svg.appendChild(l);
	startX = x;
	startY = y;
    }
}

var erase = function(e){
    while (svg.hasChildNodes()){
	svg.removeChild(svg.firstChild);
    }
    start = true;
};

svg.addEventListener("click", draw);
clear.addEventListener("click", erase);
