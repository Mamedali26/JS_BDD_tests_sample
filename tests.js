describe("pow", function() {

    it("2 в степени 3, будет 8", function() {
      assert.equal(pow(2, 3), 8);
    });

    it("3 в степени 4, будет 81", function() {
        assert.equal(pow(3, 4), 81);
      });

    it("для отрицательных n возвращает NaN", function() {
        assert.isNaN(pow(2, 2.5));
    });
  
    it("для дробных n возвращает NaN", function() {
        assert.isNaN(pow(2, -5));
    });
});

describe("checkWholeNumber", function() {

    it("2 это целое число, true", function() {
        assert.equal(checkWholeNumber(2), true);
    });

    it("2.5 это целое число, false", function() {
        assert.equal(checkWholeNumber(2.5), false);
    });

});
