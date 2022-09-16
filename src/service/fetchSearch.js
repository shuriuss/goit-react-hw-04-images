import axios from 'axios';

const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = '29337192-6d69f3453e5b53e32a13fad69';
const PER_PAGE = 12;

export const fetchSearch = async (search, page) => {
 
  try {
    const URL = `${BASE_URL}?q=${search}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`;
    const r = await axios.get(URL);
    console.log(r);
    return r.data;
  } catch (error) {
    console.error('Error:', error.message);
  }
};


