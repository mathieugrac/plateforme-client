$(document).ready(function(){

  var myArray = $('.totalTime');
  var time = [];
  var estimate = document.getElementById('time-estimate').innerHTML;
  var ratio;

  $.each( myArray, function( obj ){

    var startTime = $(this).attr('start');
    startTime = startTime.split(':');
    startTime = (parseInt(startTime[0])*60) + parseInt(startTime[1]);

    var endTime = $(this).attr('finish');
    endTime = endTime.split(':');
    endTime = (parseInt(endTime[0])*60) + parseInt(endTime[1]);

    var totalTime = (endTime - startTime)/60;

    time.push(totalTime);

    totalTime = totalTime.toFixed(1).replace(".",",");

    this.innerHTML = totalTime + " h";
  }
  );

  var total = time.reduce(function(a, b) {
    return a + b;
  });
  total = total.toFixed(1).replace(".",",");

  
  myObj = document.getElementById('time-passed');
  myObj.innerHTML = total + "h";

  ratio = Math.round((parseInt(total)/parseInt(estimate))*100);

  $(".progression-bar-progress").width(ratio+"%");

});