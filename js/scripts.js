//back end logic
function Triangle(side1, side2, side3) {
  this.sideA = side1;
  this.sideB = side2;
  this.sideC = side3;
}





//front end logic

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
      var sideOne = $('input#side1').val();
      var sideTwo = $('input#side2').val();
      var sideThree = $('input#side3').val();


  });
});
