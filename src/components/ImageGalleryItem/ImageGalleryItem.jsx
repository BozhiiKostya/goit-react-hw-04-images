import { ShowModal } from '../Modal/Modal';
import { Component } from 'react';

export class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => this.setState({ isModalOpen: true });

  closeModal = () => this.setState({ isModalOpen: false });

  render() {
    const {
      image: { largeImageURL, webformatURL, tags },
    } = this.props;

    return (
      <>
        <img
          onClick={this.openModal}
          className="ImageGalleryItem-image"
          src={webformatURL}
          alt=""
        />

        <ShowModal
          isOpen={this.state.isModalOpen}
          closeModal={this.closeModal}
          src={largeImageURL}
          tags={tags}
        />
      </>
    );
  }
}
