import React from 'react';
import styles from './Searchbar.module.css';
import PropTypes from "prop-types";

const Searchbar = ({ onSubmit }) => {

  return (
    <header className={styles.searchbar}>
      <form onSubmit={onSubmit} className={styles.searchForm}>
        <button type="submit" className={styles.searchFormButton}>
          <span className={styles.searchFormButtonLabel}>Search</span>
        </button>

        <input
          className={styles.searchFormInput}
          name='searchFormInput'
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  )
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar