import { Component } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { fetchImages } from 'api';
import { Layout } from './Layout';
import toast, { Toaster } from 'react-hot-toast';
import '../styles.css';

const per_page = 12;

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    totalPages: 1,
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      try {
        this.setState({ loading: true });
        const searchQuery = query.slice(query.indexOf('/') + 1);
        const getImages = await fetchImages(searchQuery, page);
        const { hits, total } = getImages;
        const totalPages = Math.ceil(total / per_page);

        if (!hits.length) {
          toast.error('Sorry,nothing found!', {
            duration: 2000,
          });
        } else {
          this.setState(prevState => ({
            images: page > 1 ? [...prevState.images, ...hits] : hits,
            totalPages,
          }));

          if (page === totalPages) {
            toast.success('That`s all images!');
          }
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  changeQuery = newQuery => {
    if (newQuery !== '') {
      this.setState({
        query: `${Date.now()}/${newQuery}`,
        images: [],
        page: 1,
        totalPages: 1,
      });
    }
  };

  addMoreImages = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  render() {
    const { images, loading, page, totalPages } = this.state;
    return (
      <Layout>
        <Searchbar onSubmit={this.changeQuery} />
        {images.length > 0 && <ImageGallery images={images} />}

        {page < totalPages && images.length > 0 && (
          <Button handleClick={this.addMoreImages} />
        )}
        <Toaster />
        {loading && <Loader />}
      </Layout>
    );
  }
}
