
export function fetchBreeds() {
    const options = {
        headers: {
            x_api_key: 'live_t61OFD1JL2gLGVATHVICdXA3FOIP1yxmLo3WhhrUSkhtPs7LfS5YePGf8Of7HDMC',
        },
    };
    const url = 'https://api.thecatapi.com/v1/breeds';

    return fetch(url, options).
        then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        });

};

export function fetchCatByBreed(breedId) {
    const x_api_key = "live_t61OFD1JL2gLGVATHVICdXA3FOIP1yxmLo3WhhrUSkhtPs7LfS5YePGf8Of7HDMC";
    const base_url = 'https://api.thecatapi.com/v1';
    return fetch(`${base_url}/images/search?key=${x_api_key}&breed_ids=${breedId}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(response.statusText);
            }
            return response.json()
        });
}