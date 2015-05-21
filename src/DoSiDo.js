var doSiDo = function(dancerOne, dancerTwo) {
  t = 0;
  // t += .05;
  var radius = 35;
  var centerTop = (dancerOne.top + dancerTwo.top)/2;
  var centerLeft = (dancerOne.left + dancerTwo.left)/2;

  var top1 = centerTop.toString();
  var left1 = (centerLeft - radius).toString();
  var left2 = (centerLeft + radius).toString();

  dancerOne.$node.animate({top: top1, left: left1}, 2000);
  dancerTwo.$node.animate({top: top1, left: left2}, 2000);

  var move = function() {
    t += 0.005;

    // var changeRadius = function() {
    //   var randomIncrement = (Math.random() > 0.5);
    //   if(randomIncrement) {
    //     radius += 1;
    //   } else {
    //     radius -= 1;
    //   }
    // }

    // changeRadius();


    var newLeftOne = (Math.floor(centerLeft + radius*Math.cos(t + 1.57))).toString();
    var newTopOne = (Math.floor(centerTop + radius*Math.sin(t + 1.57))).toString();

    var newLeftTwo = (Math.floor(centerLeft + radius*Math.cos(-t))).toString();
    var newTopTwo = (Math.floor(centerTop + radius*Math.sin(-t))).toString();

    dancerOne.$node.animate({top: newTopOne, left: newLeftOne}, 1, function() {
      move()});
    dancerTwo.$node.animate({top: newTopTwo, left: newLeftTwo}, 1, function() {
      move()});

    //move();
  }

  move();

};
