import React from 'react';
import css from './Modal.modules.css';
export const Modal = ({ image, onClose }) => {
  return (
    <div className={css.Overlay} onClick={onClose}>
      <div className={css.Modal}>
        <img src={image.largeImageURL} alt={image.id} />
      </div>
    </div>
  );
};
