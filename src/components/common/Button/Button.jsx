import React from 'react';
import propTypes from "prop-types";
import styles from './Button.module.css';

const Button = ({ loadMore = () => { } }) => {
  return (
    <div onClick={loadMore} className={styles.button}>Load More</div>
  )
}

Button.propTypes = {
  loadMore: propTypes.func.isRequired
};

export default Button
