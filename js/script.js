const gatherBtn = document.querySelector('#gather-btn');

// When the page loads, show a button the user can click
// When the button is clicked, show a prompt for first name, last name, and age
// Store the 3 values to an object
// Print the data object values to the browser window

function gatherInfo() {
    let fullName, firstName, lastName, age;
    let ask = true;

    while (ask){

        
        if(!firstName || typeof firstName !== 'string'){ // Validates that firstName is assigned to a value that is a string
            firstName = prompt('Enter your first name')
            continue;
        }

        if(!lastName || typeof lastName !== 'string'){ // Validates that lastName is assigned to a value that is a string
            lastName = prompt("Enter your Last name:");
            continue;
        }

        fullName = firstName + ' ' + lastName; // once you 

        if(!age || isNaN(age)){ // Validates that age is assigned to a value that is a number 
            age = prompt("Enter your Age:");
            continue;
        }

        ask = false;
        console.log('Name: ' + fullName
             + '\n  First Name: ' + firstName
             + '\n  Last Name: ' + lastName
             + '\n  Age: ' + age)
        console.log('________________________')
    }

}

gatherBtn.addEventListener('click', gatherInfo);

