//1. Show me how to calculate the average price of all items. Please console.log the average.
// The output should be "The average price is $23.62"

var pricegrab = items.map(function(y, z){
	return y.price;
});

var total = pricegrab.reduce(function(y, z){
	return y + z;
});


//The toPrecision() method formats a number to a specified length.
var av = (total / pricegrab.length);
console.log(total / pricegrab.length);
console.log("Average price is $" + av.toPrecision(4));

// 2. Show me how find the item with a "GBP" curreny code and print its name and price. Please console.log the one you find.
// The output should be "1970s Schlitz Malt Liquor Glass Beer Pitcher costs £18"
 
var ccgrab = items.map(function(y,z){
  if(y.currency_code === "GBP") {
  console.log(y.title + "costs \u00A3" + y.price);
  }
});

// 3. Show me how to find which items are made of wood. Please console.log the ones you find.
var materials = Array();
	items.forEach(function (y) {
		materials = y.materials;
		materials.forEach(function (z) {
			if (z == 'wood') {
				console.log(y.title + 'is made of wood.');
			}			
		}
	)	
});