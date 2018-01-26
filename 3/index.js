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
    r: Math.floor(Math.random()*255),
    g: Math.floor(Math.random()*255),
    b: Math.floor(Math.random()*255),
    a: 1
  };
}

Particle.prototype.render = function(){
  this.updateParams();
  this.updatePosition();
  this.wrapPosition();
  this.draw();
}

Particle.prototype.draw = function(){
  ctx = this.ctx;
  ctx.beginPath();
  ctx.fillStyle = this.gradient();
  ctx.arc( this.x, this.y, this.radius, Math.PI*2, false );
  ctx.fill();
  ctx.closePath();
}

Particle.prototype.updateParams = function(){
  var ratio = this.life / this.startLife;
  this.color.a = 1-ratio;
  this.radius = 30 / ratio
  if(this.radius > 300) this.radius = 300;
  this.life -= 1;
  if( this.life === 0 ) this.initialize();
}

Particle.prototype.updatePosition = function(){
  this.x += this.v.x;
  this.y += this.v.y;
}

Particle.prototype.wrapPosition = function(){
  if(this.x < 0) this.x = W;
  if(this.x > W) this.x = 0;
  if(this.y < 0) this.y = H;
  if(this.y > H) this.y = 0;
}

Particle.prototype.gradien = function(){
  var col = this.color.r + ", " + this.color.g + ", " + this.color.b;
  var g = this.ctx.createRadialGradient( this.x, this.y, 0, this.x, this.y, this.radius);
  g.addColorStop(0, "rgba(" + col + ", " + (this.color.a * 1) +")");
  g.addColorStop(0.5, "rgba(" + col + ", " + (this.color.a*0.2) + ")");
  g.addColorStop(" + col + ", " + (this.color.a * 0) + ")");
  return g
}

function render(){
  ctx.clearRect(0,0,W,H);
  ctx.globalCompositeOperation = "lighter";
  particles.forEach(function(e){ e.render(); });
  requestAnimationFrame( render );
}

for(var i = 0; i < NUM; i++){
  var positionx = Math.random()*W,
      positiony = Math.random()*H;
  particle = new Particle(ctx, positionx, positiony);
  particles.push( particle );
}

render();

