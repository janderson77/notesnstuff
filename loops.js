// For loops

var todos = [ 'stuff', 'stuff', 'stuff', 'stuff', 'stuff', 'stuff' ];

for (var i = 0; i < todos.length; i++) {
	// for starts a for loop.
	// var i=0 starts the counter for the loop at 0
	// i < todos.length means "count the items in the todos array, not the character length, just how many items and as long as the counter is less than the total of the array's length, run the loop"
	// i++ means that the variable "i" will increment up by one each time the loop is run so that it isn't an infinite loop

	console.log(todos[i] + '!');
	// This will log all of the items in the todos array into the console. The concatenation will add an exclamation mark at the end of them, but this does not change the actual value in the array.
	// You can actually change it with the following code:

	todos[i] = todos[i] + '!';
	// to actually see it in the console:
	console.log(todos[i]);
}

// The While Loop

var counterOne = 0;
while (counterOne < 10) {
	console.log(counterOne);
	counterOne++;
}
// This will literally just run the code in the curly braces WHILE counterOne remains below 10, but as soon as it hits 10 it will stop and the code will not run again.
// Key point: it will check the condition first, and then run the code

// The do while loop

var counterTwo = 10;
do {
	console.log(counterTwo);
	counterTwo--;
} while (counterTwo > 0);

// This does the same thing as a while loop, but will run the code at least once before checking the condition.

// forEach: the preferred for loop

todos.forEach(function(todo, i) {
	console.log(todo, i);
});

// The forEach method essentially removes the need for the (var i = 0; i < todos.length; i++) stuff that is super confusing. It will literally run the code in the curly braces FOR EACH item in the array.
// The two arguments are as follows: The first argument (todo) will pull the content of the array, or all of the "stuff" in the quotes.
// The second argument will pull the index number of the array item, such as 0, 1, 2, etc.
// You can just put i as the only argument and it will return the contents of the array, not the index number. Example below

// todos.forEach(function(i) {
//     console.log(i);
// })

// You can also use a word, such as "todo" and it will have the same effect.

// You can have an identical effect that is less confusing looking, or may make this make a little more sense. You can create a function outside of the forEach loop and just call it in the loop.
// For example:

function logTodos(todo, i) {
	console.log(todo, i);
}

todos.forEach(logTodos);

// The benefit of this is that the function logTodos can be used elsewhere, whereas the function inside the forEach loop is restricted to that loop.
