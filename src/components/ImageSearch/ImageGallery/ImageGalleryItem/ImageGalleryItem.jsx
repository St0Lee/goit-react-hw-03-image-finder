import styles from './image-gallery-item.module.css';

const ImageGalleryItem = ({ showModal, id, webformatURL, tags }) => {
  return (
    <li
      key={id}
      onClick={() => showModal({ webformatURL, tags })}
      className={styles.item}
    >
      <img src={webformatURL} alt={tags} className={styles.image} />
    </li>
  );
};

export default ImageGalleryItem;