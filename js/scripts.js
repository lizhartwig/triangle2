var triangle = function(A, B, C) {
  if ((A + B <= C)) {
    return("this is not a triangle");
  } else if ((A === B && B === C)) {
    return("this is a equilateral triangle");
  } else if (( A === B || B === C || A === C)) {
    return("this is a isosceles triangle");
  } else if (( A != B && B != C && A != C)) {
    return("this is a scalene triangle");
  }


};

$(document).ready(function(){
  $("form#triangle").submit(function(event){
    var A = parseInt($("input#A").val());
    var B = parseInt($("input#B").val());
    var C = parseInt($("input#C").val());
    var result = triangle(A, B, C);

    $("#output").append("<p>" + result + "</p>");
    
  event.preventDefault();
});

});