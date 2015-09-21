function PizzaOrder(pizzaSize, pizzaToppings, quantity) {
    debugger;
    this.pizzaSize = pizzaSize,
    this.pizzaToppings = [],
    this.quantity = []
};

function PizzaToppings(mushroom, onion, black_olives, sausage, pepperoni) {
    mushroom: 1,
    onion: 1,
    black_olives: 1,
    sausage: 1.5,
    pepperoni: 1.5
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

        var inputtedPizzaSize = $("input#new-size").val();
        var inputtedQuantity = $("input#quantity").val();
        var mushroom = $("input[name='mushroom']:checked").val();
        var onion = $("input[name='onion']:checked").val();
        var black_olives = $("input[name='black_olives']:checked").val();
        var sausage = $("input[name='sausage']:checked").val();
        var pepperoni = $("input[name='pepperoni']:checked").val();

        var newPizzaOrder = new PizzaOrder(inputtedPizzaSize, inputtedPizzaToppings, inputtedQuantity);
        var inputtedPizzaToppings = $("input[name='onions']:checked").val();
    });
    $("ul#show-pizza").append("<li><span class='order'" + newPizzaOrder.pizzaToppings() + "</span></li>");

    $(".order").last().show(function() {
        $("#show-pizza").fadeIn(500);

        $("#show-order h2").text(newPizzaOrder.pizzaSize);
        $("#pizza-size").text(newPizzaOrder.pizzaSize);
        $("#pizza-toppings").text(newPizzaOrder.pizzaToppings);
        $("#quantity").text(newPizzaOrder.quantity);
    })
});
