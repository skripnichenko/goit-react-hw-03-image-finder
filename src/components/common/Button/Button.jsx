import React, { Component } from 'react';
import propTypes from "prop-types";
import styles from './Button.module.css';

export class Button extends Component {
  static defaultProps = {
    loadMore: () => {},
  };

  static propTypes = {
    loadMore: propTypes.func
  };

  render() {
    const { loadMore } = this.props
    return (
      <div onClick={loadMore} className={styles.button}>Load More</div>
    )
  }
}

export default Button
