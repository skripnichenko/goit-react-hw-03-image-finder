import React, { Component } from 'react';
import styles from './ImageGalleryItem.module.css';
import PropTypes from "prop-types";

export class ImageGalleryItem extends Component {

  static defaultProps = {
    setOpenImage: () => {},
    webformatURL: '',
    largeImageURL: '',
  };

  static propTypes = {
    setOpenImage: PropTypes.func,
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string
  };

  render() {
    const {webformatURL, largeImageURL, setOpenImage} = this.props;

      return <li onClick={() => setOpenImage(largeImageURL)} className={styles.imageGalleryItem}>
          <img src={webformatURL ? webformatURL : ''} alt="" className={styles.imageGalleryItemImage} />
      </li>
  }
}

export default ImageGalleryItem