
/* variables are assigned by calling
        var <variable-name> = <assigned value>
*/

// Javascript works with / contains a set of different value types
// strings are wrapped as 'String' value type
// numbers are wrapped as 'Number' value type

var userInitials = 'ESD' // String
var firstName = 'Eli';
var lastName = 'Davenport'
var age = 28 // Number
var isADev = true; // Boolean
var un = undefined; // undefined is a value type that JS will give you when there is no declared or assigned value
var n = null; // null value
var notANumber = NaN; // Not a Number value type is provided when JS attempts to process a mathematical equation and the result is not a valid number

age ++;  // increment by 1 operator
age += 1;  // increment by X operator
age = age + 1;  // reassign variable to incrementing equation

age --; // decrement by 1 operator
age -= 1; // decrement by X operator
age = age - 1 // reassign variable to decrementing equation

age *= 1; // mulitplicative operator (var = var * X)
age /= 1; // division operator (var = var / X)

age + 10; // addition operator
age - 10; // subtraction operator

// Javascript is also capable of string concatenation
var fullName = firstName + ' ' + lastName //

// Javascript holds multiple values in an 'array'
var names = ['John', 'Ann' ,'Bob', 'Frank', 'Jane', 'Jimmy', 'Billy', 'Julie']

// writing to the console is done via console.log

console.log(names[names.length]);

// numbers are written without quotes
console.log(typeof 3)

// strings are written inside quotes
console.log(typeof '3')

console.log(userInitials); // using a variable inside your code is called a reference

// Javascript is capable of basic math (and more)
console.log(5 + 5)

