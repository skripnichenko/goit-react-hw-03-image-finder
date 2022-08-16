import axios from 'axios';

export const getImages = async (searchedValue = '', page = 1) => {
    return await axios.get(`https://pixabay.com/api/?q=${searchedValue}&page=${page}&key=28843000-997a7736ac02a37994c6fbbd0&image_type=photo&orientation=horizontal&per_page=12`).then(({ data }) => {
        return data.hits.map(el => ({
            id: el.id,
            largeImageURL: el.largeImageURL,
            webformatURL: el.webformatURL
        }))
    })
}