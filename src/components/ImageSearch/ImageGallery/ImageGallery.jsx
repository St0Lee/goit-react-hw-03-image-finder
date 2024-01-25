import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';

import styles from "./image-gallery.module.css"

const ImageGallery = ({showModal, items}) => {
    const elements = items.map(({ id, webformatURL, tags}) => (
    <ImageGalleryItem
        key={id}
        showModal={showModal}
        id={id}
        webformatURL={webformatURL}
        tags={tags}
      />
      ));

    return (
        (<ul className={styles.list}>
            {elements}
        </ul>)
    )
}

export default ImageGallery;
