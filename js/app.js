$(document).ready(function() {
	
	fizzbuzz();
});

/* APPROACH TO SOLVE */
/* Prioritize the if statements that the first if statement
is the divisible by 3 AND divisible by 5. This is because 
if I started with just divisible by 3, it'll print for that and
then it'll also print AGAIN on top. For example, if my code has
check if it is divisible by 3, then if it is divisible by 5 and
finally divisible by both....the program when it reaches variable
equals 15, will have printed Fizz, Buzz AND FizzBuzz. This is
because the variable satisfied the order or priority of if
statements. I only want to print FizzBuzz when it hits 15. In
order to do this, I need to set the first condition it checks for,
which is the top priority, to check for if it is divisible by 3
and 5. Therefore, if it is not divisible by both, it'll simply
print only fizz or buzz..... When it reaches 15, since it first
checks for being divisible by both, itll print Fizzbuzz. It will
then skip the other conditions to check for due to the condition
having been met. */

/*ALSO CANNOT JUST PRINT THE NUMBER AFTER EVERY ITERATION
---> Need to set an if condition to check that the number
is not divisible by 3 or 5 so it can just print the number
value------> Probably the else statement */

function fizzbuzz() {
	for ( var i = 1; i < 101; i++) {
		//Prioritize if conditions to check for divisible by 3 AND 5
		if ( i % 3 === 0 && i % 5 === 0) {
			console.log("fizz buzz");
	}
		//Check if divisible by 3
		else if (i % 3 === 0) {
			console.log('fizz');	
		}
		//Check if divisble by 5
		else if (i % 5 === 0) {
			console.log('buzz');
		}
		//Finally, since the number is not div by 3 or 5, just print number
		else {
			console.log(i);	
		}
	}
}
/* you count from 1 to a given number (let’s say 100). For each
number if it’s not divisible by 3 or 5, you simply say the number.
If it’s divisible by 3, instead of the number you say “fizz”. If
it’s divisible by 5, you say “buzz”. And finally if it’s divisible
by both 3 and 5, you say “fizz buzz”. So, counting from 1 to 15,
you’d say: “1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz,
13, 14, fizz buzz”.*/