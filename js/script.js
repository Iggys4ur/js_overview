function keyPressed(eventObj) {
    console.log(eventObj.key);

    if (eventObj.keyCode === 13) {
        console.log(eventObj.key);
        console.log('You have pressed the enter key')
    }
}

document.addEventListener('keydown', keyPressed)