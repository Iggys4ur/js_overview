const gatherBtn = document.querySelector('#gather-btn');

// When the page loads, show a button the user can click
// When the button is clicked, show a prompt for first name, last name, and age
// Store the 3 values to an object
// Print the data object values to the browser window

function gatherInfo() {
    let firstName, lastName, age;
    let ask = true;

    while (ask){

        
        if(!firstName || typeof firstName !== 'string'){
            firstName = prompt('Enter your first name')
            continue;
        }

        if(!lastName || typeof lastName !== 'string'){
            lastName = prompt("Enter your Last name:");
            continue;
        }

        if(!age || typeof age !== 'number'){
            console.log(typeof age);
            age = prompt("Enter your Age:");
            continue;
        }

        ask = false;
        console.log('Name: ' + firstName + ' ' + lastName + '\n' + 'Age: ' + age)
    }

}

gatherBtn.addEventListener('click', gatherInfo);

