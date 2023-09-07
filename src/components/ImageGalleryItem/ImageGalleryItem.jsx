import { ShowModal } from '../Modal/Modal';
import { useState } from 'react';

export const ImageGalleryItem = ({
  image: { largeImageURL, webformatURL, tags },
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <img
        onClick={openModal}
        className="ImageGalleryItem-image"
        src={webformatURL}
        alt=""
      />

      <ShowModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        src={largeImageURL}
        tags={tags}
      />
    </>
  );
};
