import React, { Component } from 'react';
import styles from './Modal.module.css';
import PropTypes from "prop-types";

export class Modal extends Component {
  static defaultProps = {
    removeImageToOpen: () => { }
  }

  static propTypes = {
    children: PropTypes.node,
    removeImageToOpen: PropTypes.func
  };

  componentDidMount() {
    window.addEventListener("keydown", this.closeModalByClick);
  }

  closeModalByClick = (e) => {
    if (e.code === "Escape") {
      this.props.removeImageToOpen();
    }
  };

  closeModal = (e) => {
    if (e.currentTarget.isEqualNode(e.target)) {
      this.props.removeImageToOpen();
    }
  };

  componentWillUnmount() {
    window.removeEventListener("keydown", this.closeModalByClick);
  }


  render() {
    const { children } = this.props;

    return (
        <div className={styles.overlay} onClick={this.closeModal}>
          <div className={styles.modal}>
            {children}
          </div>
        </div>
    )
  }
}

export default Modal