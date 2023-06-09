import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.6.min.css";
import SlimSelect from 'slim-select';

const selectEl = document.querySelector('.breed-select');

new SlimSelect({
    select: selectEl,
})
