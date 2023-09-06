import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

export const ImageGallery = ({ images }) => {
  return (
    <ul className="ImageGallery">
      {images.map(image => {
        return (
          <li key={image.id} className="ImageGalleryItem">
            <ImageGalleryItem image={image} />
          </li>
        );
      })}
    </ul>
  );
};
