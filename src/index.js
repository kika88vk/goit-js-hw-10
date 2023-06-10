import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";
import SlimSelect from 'slim-select';
import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const selectEl = document.querySelector('.breed-select');
const infoBox = document.querySelector('.cat-info');



fetchCatByBreed("abys").then(data => console.log(data))
    .catch(() => { Notiflix.Notify.failure(`❌ Oops! Something went wrong! Try reloading the page!`) });

const selectInput = new SlimSelect({
    select: selectEl,
    settings: {
        contentLocation: infoBox,
    },

})

function getNameCats(id, name) {

}

const catsID = fetchBreeds().then(datas => {
    const cat = datas.map(data =>
        `<option value="${data.id}">${data.name}</option>`).join("");
    selectEl.insertAdjacentHTML("afterbegin", cat);
}).catch(() => { Notiflix.Notify.failure(`❌ Oops! Something went wrong! Try reloading the page!`) })



