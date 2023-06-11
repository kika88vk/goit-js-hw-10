import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";
// import SlimSelect from 'slim-select';
import { fetchBreeds } from './cat-api';
import { fetchCatByBreed } from './cat-api';

const selectEl = document.querySelector('.breed-select');
const infoBox = document.querySelector('.cat-info');
const loader = document.querySelector('.loader');


getNameCats();


selectEl.addEventListener("change", onSelectBreed);

function onSelectBreed() {
    infoBox.innerHTML = "";
    infoBox.style.display = "none";
    const breedID = selectEl.value;
    loader.style.display = "block";

    fetchCatByBreed(breedID).then(cats => {
        const catEl = cats.map(cat =>
            `<img src="${cat.url}" alt="cat">
            <h1 class="breed-name">${cat.breeds[0].name}</h1>
            <p class="descripyion">${cat.breeds[0].description}</p>
            <p class="temperament"><span class="bold-temperament">Temperament: </span> ${cat.breeds[0].temperament}</p>
            `).join("");
        infoBox.style.display = "block";
        infoBox.innerHTML += catEl;;
    }).catch(() => { Notiflix.Notify.failure(`❌ Oops! Something went wrong! Try reloading the page!`) })
        .finally(() => { loader.style.display = "none" });

}


// const selectInput = new SlimSelect({
//     select: selectEl,
//     settings: {
//         contentLocation: infoBox,
//     },

// })

function getNameCats() {
    selectEl.style.display = "none";
    loader.style.display = "block";

    fetchBreeds().then(datas => {
        const cat = datas.map(data =>
            `<option value="${data.id}">${data.name}</option>`).join("");
        selectEl.style.display = "block";
        selectEl.insertAdjacentHTML("afterbegin", cat);
    }).catch(() => { Notiflix.Notify.failure(`❌ Oops! Something went wrong! Try reloading the page!`) })
        .finally(() => { loader.style.display = "none" });
}





