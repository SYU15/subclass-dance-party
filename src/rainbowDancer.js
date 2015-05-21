var RainbowDancer = function(top, left, timeBetweenSteps){
  this.color = ["#00FFCC", "#3300FF", "#9900FF", "#FFFF33"];//random color, array of hex values
  Dancer.call(this, top, left, timeBetweenSteps);
  //console.log(this.color);
};

RainbowDancer.prototype = Object.create(Dancer.prototype);
RainbowDancer.prototype.constructor = RainbowDancer;
RainbowDancer.prototype.oldStep = Dancer.prototype.step;
RainbowDancer.prototype.step = function(){
  this.oldStep();
  //console.log(this);
  var newColor = this.color[Math.floor(Math.random()*this.color.length)];
  console.log(newColor);
//jquery function, changes css color at every step call
  this.$node.css({border:"10px solid "+ newColor});
};
