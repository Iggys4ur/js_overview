

// function myFirstFunc(){
//  console.log('function has been called')
// }


let namesList = ['Jim', 'Bob', 'Pam', 'Hector', 'Nate', 'Christine', 'Emma', 'Adam']

function printNames(listOfNames) {

    for(nameFromList in listOfNames){
        console.log('Index: ' + nameFromList + '\n   Name: ' + listOfNames[nameFromList])
    }
}

printNames(namesList);