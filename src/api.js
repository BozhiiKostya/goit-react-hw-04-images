const BASE_URL = 'https://pixabay.com/api/';
const KEY = '38117249-fdc11eda8e12f01d0107f1e44';

export const fetchImages = async (query, page) => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${query}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`An error occurred: ${error.message}`);
  }
};
