
// Target the h1 element by the ID
const output = document.getElementById('key-output');

function keyPressed(eventObj) {

    console.log(eventObj.key);

    console.log(eventObj);

    // Print the last key pressed
    output.innerText = 'Pressed: ' + eventObj.key;

    if (eventObj.keyCode === 13) {
        console.log(eventObj.key);
        console.log('You have pressed the enter key')
    }

}

document.addEventListener('keydown', keyPressed)