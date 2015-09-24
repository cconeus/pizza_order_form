function PizzaOrder(pizzaSize, pizzaToppings, quantity) {
  // debugger;
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.quantity = quantity;
};

function PizzaToppings(mushroom, onion, black_olives, sausage, pepperoni) {

}

$(document).ready(function() {
  $("#add-pizza").click(function() {
    $("#new-pizza").append( '<div class="form-group">' +
    '<label for="pizza-size">Select a size:</label>' +
    '<select class="newSize">' +
    '<option value="Medium">Medium</option>' +
    '<option value="Large">Large</option>' +
    '<option value="Family">Family</option>' +
    '</select>' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="pizza-toppings">Select your toppings:</label><br>' +
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

  $("form#new-pizza").submit(function(event) {
    event.preventDefault();

    var inputtedPizzaSize = $("select#newSize").val();
    console.log(inputtedPizzaSize);
    var inputtedQuantity = parseInt($("select#quantity").val());
    console.log(inputtedQuantity);
//     var mushroom = $("input[name='mushroom']:checked").val();
//     var onion = $("input#onion").val();
// //example of check validation
//         if ($('#onion').is(':checked')){
//         alert('YAY!');
//     };
//     var black_olives = $("input[name='black_olives']:checked").val();
//     var sausage = $("input[name='sausage']:checked").val();
//     var pepperoni = $("input[name='pepperoni']:checked").val();

    var newPizzaOrder = new PizzaOrder(inputtedPizzaSize, "Pepperoni", inputtedQuantity);
    var newPizzaToppings = new PizzaToppings(mushroom, onion, black_olives, sausage, pepperoni);
    // $(".order").last().show(function() {
    // $("#show-pizza").fadeIn(500);

    $("#pizza-size").text(newPizzaOrder.pizzaSize);
    $("#pizza-toppings").text(newPizzaOrder.pizzaToppings);
          console.log("Quantity is " + newPizzaOrder.quantity);
    $("#final-amount").text(newPizzaOrder.quantity);
    // })
  });
  // $("ul#show-pizza").append("<li><span class='order'" + newPizzaOrder.pizzaToppings() + "</span></li>");

});
