import React, { Component } from 'react';
import styles from './ImageGallery.module.css';
import ImageGalleryItem from './ImageGalleryItem/ImageGalleryItem';
import PropTypes from "prop-types";
import Modal from 'components/common/Modal/Modal';

export class ImageGallery extends Component {
  state = {
    imageToOpen: ''
  }

  static defaultProps = {
    images: [],
  };

  static propTypes = {
    images: PropTypes.arrayOf(PropTypes.object),
  };

  setOpenImage = (largeImageURL) => {
    this.setState({ imageToOpen: largeImageURL })
  }

  removeImageToOpen = () => {
    this.setState({ imageToOpen: '' })
  }

  render() {
    const { imageToOpen } = this.state;
    const { images } = this.props;

    return (
      <>
      {!!imageToOpen && <Modal removeImageToOpen={this.removeImageToOpen}>
        <img src={imageToOpen} alt=''/>
      </Modal>}
        <ul className={styles.imageGallery}>
          {images.length ? images.map(el => {
            return <ImageGalleryItem key={el.id} largeImageURL={el.largeImageURL} webformatURL={el.webformatURL} setOpenImage={this.setOpenImage} />
          }) : <></>}
        </ul>
      </>
    )
  }
}

export default ImageGallery
