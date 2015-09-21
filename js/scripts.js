function PizzaOrder(pizzaSize, pizzaToppings, quantity) {
    this.pizzaSize = pizzaSize,
    this.pizzaToppings = pizzaToppings,
    this.quantity = quantity
};

$(document).ready(function() {
    $("#add-pizza").click(function() {
   $("#new-pizza").append( '<div class="form-group">' +
       '<label for="pizzaSize">Select a size:</label>' +
       '<select class="newSize">' +
       '<option value="Medium">Medium</option>' +
       '<option value="Large">Large</option>' +
       '<option value="Family">Family</option>' +
       '</select>' +
       '</div>' +
       '<div class="form-group">' +
       '<label for="pizzaToppings">Select your toppings:</label><br>' +
       '<label><input type="checkbox" name="mushrooms" value="1" /> mushrooms</label>' +
       '<label><input type="checkbox" name="onions" value="1" /> onions</label>' +
       '<label><input type="checkbox" name="black_olives" value="1" /> black olives</label>' +
       '<label><input type="checkbox" name="sausage" value="1" /> sausage</label>' +
       '<label><input type="checkbox" name="pepperoni" value="1" /> pepperoni</label>' +
       '</div>' +
       '<div class="form-group">' +
        '<label for="pizza-size">Select qty:</label>' +
        '<select class="quantity">' +
         '<option value="1">1</option>' +
         '<option value="2">2</option>' +
         '<option value="3">3</option>' +
         '<option value="4">4</option>' +
         '<option value="5">5</option>' +
         '<option value="6">6</option>' +
         '<option value="7">7</option>' +
         '<option value="8">8</option>' +
         '<option value="9">9</option>' +
         '<option value="10">10</option>' +
         '</select>' +
         '</div>');
});
})
