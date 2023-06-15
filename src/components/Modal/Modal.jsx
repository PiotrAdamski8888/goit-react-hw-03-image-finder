import React from 'react';
import PropTypes from 'prop-types';

import css from './Modal.module.css';
export const Modal = ({ image, onClose }) => {
  return (
    <div className={css.Overlay} onClick={onClose}>
      <div className={css.Modal}>
        <img src={image.largeImageURL} alt={image.id} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  image: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
  onClose: PropTypes.func.isRequired,
};
