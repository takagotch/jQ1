window.requestAnimationFrame = 
	window.requestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	window.webkitRequestAnimationFrame ||
	window.msRequestAnimationFrame ||
	function(cb){setTimeout(cb, 17)};

var canvas = document.getElementById( "canvas" ),
	ctx = canvas.getContent( "2d" ),
	NUM = 100,
	LIFEMAX = 100,
	particles = [],
	W = 500,
	H = 500

canvas.width = W;
canvas.height = H;

function Particle(ctx, x, y){
  this.ctx = ctx;
  this.initialize(x, y);
}

Particle.prototype.initialize = function(x, y){
  this.x = x || 0;
  this.y = y || 0;
  this.radius = 250;
  this.startLife = Math.ceil( LIFEMAX * Math.random() );

  this.v = {
    x: Math.random()*10-5,
    y: Math.random()*10-5
  };

  this.color = {
    r: Math.floor(),
    g: Math.floor(),
    b: Math.floor(),
    a: 1
  };
}

Particle.prototype.render = function(){
  this.updateParams();



}

Particle.prototype.draw = function(){

}

Particle.prototype.updateParams = function(){

}

Particle.prototype.updatePosition = function(){

}

Particle.prototype.wrapPosition = function(){

}

Particle.prototype.gradien = function(){

}

function render(){

}

for(var i = 0; i < NUM; i++){

}

render();

