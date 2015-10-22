describe('triangle', function() {
  it("is not a triangle if the sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side", function() {
    expect(triangle(2, 6, 9)).to.equal("this is not a triangle");
  });

  it("is a equilateral triangle if all sides are equal", function() {
    expect(triangle(2,2,2)).to.equal("this is a equilateral triangle");
  });

  it("is a isosceles triangle if exactly two sides are equal", function() {
    expect(triangle(2,2,3)).to.equal("this is a isosceles triangle");
  });

  it("is a scalene triangle if no sides are equal", function() {
    expect(triangle(2,3,4)).to.equal("this is a scalene triangle");
  });

});
