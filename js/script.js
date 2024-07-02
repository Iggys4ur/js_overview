const charSelect = document.querySelector('#char-select');
const searchBtn = document.querySelector('#search-btn');


function getCharacters() {
    const baseUrl = 'https://swapi.dev/api';
    const option = charSelect.value;
    const url = `${baseUrl}/${option}`;

    console.log(option);

    fetch(url)
        .then(function (resObj) {
            // Parsing the JSON data from the response body
            return resObj.json();
        })
        .then(function (data) {
            const outputDiv = document.querySelector('.output');

            data.results.forEach(function (char) {
                outputDiv.insertAdjacentHTML('beforeend', `
          <div>
            <h3>${char.name}</h3>
            <p>Birth Year: ${char.birth_year}</p>
          </div>
        `);
            })
        })
}

function init() {
    charSelect.addEventListener('click', getCharacters);
}

init();