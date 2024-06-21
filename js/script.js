const str = 'some string';
const num = 10;
const bool = true;
const arr = ['John', 'Bob', 'Steve']

const data = {

    name: 'Eli',
    age: 28,
    info: {
        location: 'NJ',
        hobbies: [
            {
                name: 'Coding',
                frequency: 2
            },
            {
                name: 'Video Games',
                frequency: 2
            },
            {
                name: 'Watching Movies',
                frequency: 1
            }
        ]
    }
}

for (i=0; i < data.info.hobbies.length; i++){
    console.log('The hobby of: "' + data.info.hobbies[i].name + '" is done at a frequency of: "' + data.info.hobbies[i].frequency + '"')
}

const filtered = data.info.hobbies.filter(function (obj) {
    if (obj.frequency > 1){
        return true;
    }
}
)

console.log(filtered)