var firstName = 'Eli';
var lastName = 'Davenport'
var age = 28 
var names = ['John', 'Ann' ,'Bob', 'Frank', 'Jane', 'Jimmy', 'Billy', 'Julie']

// Comparison Operators return a boolean evaluation of the term
console.log(age > 30); // greater than
console.log(age < 30); // less than
console.log(age == 30); // equals
console.log(age == '28'); // double equals only checks value
console.log(age === '28'); // triple equals checks both value and type

console.log(age >= 25); // greater than or equal to
console.log(age <= 25); // less than or equal to

console.log(age != 27); // not equals checks only value
console.log(age !== 27); // not equals checks both value and type

// falsey values {0, '', null, NaN, undefined, false}

// Logical Operators return a value on either left or right of the operator
console.log(age || 27 || names || null || -5 || undefined); // returns the first 'truthy' value or last term
console.log(age && lastName && firstName && 0 && names); // returns the first 'falsey' value or last term
var oldEnough = (age >= 21)
// IF Conditionals trigger if the value passed is truthy

if (firstName && lastName){
    alert("Received your full name!");
}
else if (!firstName){
    alert("You must provide your first name!");
}
else if (!lastName){
    alert("You must provide your last name!");
}
else {
    alert("You must provide your full name!");
}

if(oldEnough) {
    console.log("Welcome!")
    alert('Welcome ' + firstName + '!')
}
else {
    console.log('Must be old enough to enter!')
    alert('No chance...... ' + firstName)
}