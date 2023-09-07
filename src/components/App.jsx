import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { fetchImages } from 'api';
import { Layout } from './Layout';
import toast, { Toaster } from 'react-hot-toast';
import '../styles.css';
import { useEffect, useState } from 'react';

const per_page = 12;

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPages, setTotalPages] = useState('');

  useEffect(() => {
    const getImages = async () => {
      if (query === '') {
        return;
      }
      try {
        setLoading(true);
        const searchQuery = query.slice(query.indexOf('/') + 1);
        const getImages = await fetchImages(searchQuery, page);
        const { hits, total } = getImages;
        const newTotalPages = Math.ceil(total / per_page);

        if (!hits.length) {
          toast.error('Sorry,nothing found!', {
            duration: 2000,
          });
        } else {
          setImages(prevState => (page > 1 ? [...prevState, ...hits] : hits));
          setTotalPages(newTotalPages);
        }
        if (page === newTotalPages) {
          toast.success('That`s all images!');
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getImages();
  }, [query, page]);

  const changeQuery = newQuery => {
    if (newQuery !== '') {
      setQuery(`${Date.now()}/${newQuery}`);
      setImages([]);
      setPage(1);
      setTotalPages(1);
    }
  };

  const addMoreImages = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <Layout>
      <Searchbar onSubmit={changeQuery} />
      {images.length > 0 && <ImageGallery images={images} />}

      {page < totalPages && images.length > 0 && (
        <Button handleClick={addMoreImages} />
      )}
      <Toaster />
      {loading && <Loader />}
    </Layout>
  );
};
