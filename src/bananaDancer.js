var BananaDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div class="gif"><iframe src="http://giphy.com/embed/PqRbPcAt1cnHG" width="80" height="53" frameBorder="0" style="max-width: 100%" class="giphy-embed" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>');
  this.$node.css({top: this.top, left: this.left});
}

BananaDancer.prototype = Object.create(Dancer.prototype);
BananaDancer.prototype.constructor = BananaDancer;
