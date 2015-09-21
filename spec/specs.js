describe('PizzaOrder', function() {
  it("creates a new pizza order with the given specifications", function() {
    var testPizzaOrder = new PizzaOrder("medium", "1", "3");
    expect(testPizzaOrder.pizzaSize).to.equal("medium");
    expect(testPizzaOrder.pizzaToppings).to.equal("1");
    expect(testPizzaOrder.quantity).to.eql("3");
  });
});
