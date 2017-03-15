//back end logic

function Triangle(a, b, c) {
  this.sideA = a;
  this.sideB = b;
  this.sideC = c;
}



//front end logic

$(document).ready(function() {
  $('form').submit(function(event) {
    event.preventDefault();
      var sideOne = $('input#side1').val();
      var sideTwo = $('input#side2').val();
      var sideThree = $('input#side3').val();

      var triangleTest = new Triangle(sideOne, sideTwo, sideThree);

      if (triangleTest.sideA + triangleTest.sideB <= triangleTest.sideC || triangleTest.sideB + triangleTest.sideC <= triangleTest.sideA) {
        $("#output").text("not a triangle.");
      }

      else if (triangleTest.sideA != triangleTest.sideB && triangleTest.sideA != triangleTest.sideC && triangleTest.sideB != triangleTest.sideC) {
        $("#output").text("Scalene!");
      }
      else if (triangleTest.sideA === triangleTest.sideB && triangleTest.sideB === triangleTest.sideC && triangleTest.sideC === triangleTest.sideA) {
        $('#output').text('equalateral!');
      }
      else if (triangleTest.sideA === triangleTest.sideB != triangleTest.sideC || triangleTest.sideA === triangleTest.sideC != triangleTest.sideB || triangleTest.sideB === triangleTest.sideC != triangleTest.sideA) {
        $("#output").text("Isosceles!");
      }

  });
});
