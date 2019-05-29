const API = 'https://api.tvmaze.com/shows';
const element = document.getElementById('tvshows');

function getData(urlApi) {
  fetch(urlApi, {
    mode: 'no-cors'
  })
    .then((response) => response.json())
    .then(function (data) {
      let output = data.slice(0, 16).map(function (show) {
        return `
          <article class="show-card">
            <img src="${show.image.medium}" alt="Imagen">
            <h2>${show.name}</h2>
          </article>
        `
      }).join('');
      element.innerHTML = output;
    })
    .catch(function (error) {
      console.log(error);
    });
};

getData(API);