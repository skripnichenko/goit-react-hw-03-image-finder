import React from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from "prop-types";


const ImageGalleryItem = ({ setOpenImage, webformatURL = '', largeImageURL = '' }) => {

  return <li onClick={() => setOpenImage(largeImageURL)} className={styles.imageGalleryItem}>
    <img src={webformatURL ? webformatURL : ''} alt="" className={styles.imageGalleryItemImage} />
  </li>
}

ImageGalleryItem.propTypes = {
  setOpenImage: PropTypes.func.isRequired,
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired
};

export default ImageGalleryItem