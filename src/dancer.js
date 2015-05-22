// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  this.whichWay = false;
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;

  this.styleSettings = {
      top: this.top,
      left: this.left
    };

  this.$node = $('<span class="dancer"></span>');
  //debugger;
  this.step();

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition();
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  // if(!dancing) {
  //   if(this.whichWay) {
  //     this.$node.animate({left: this.left + 30}, this.timeBetweenSteps);
  //     this.whichWay = false;
  //   }
  //   if(!this.whichWay) {
  //     this.$node.animate({left: this.left - 30}, this.timeBetweenSteps);
  //     this.whichWay = true;
  //   }
  // }
  var that = this;
  setTimeout(function() {
    that.step();
  }, this.timeBetweenSteps);
};

Dancer.prototype.setPosition = function(){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  this.$node.css(this.styleSettings);
};






