const charSelect = document.querySelector('#char-select');

function getCharacters() {
  const baseUrl = 'https://swapi.dev/api';
  const url = baseUrl + '/people';
  const val = this.value;

  console.log(val);

  fetch(url)
    .then(function (resObj) {
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
  charSelect.addEventListener('change', getCharacters);
}

init();