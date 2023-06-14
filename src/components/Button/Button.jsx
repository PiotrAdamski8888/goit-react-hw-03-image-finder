import React from 'react';
import css from './Button.modules.css';
export const Button = ({ onClick }) => {
  return (
    <button className={css.Button} onClick={onClick}>
      Load more
    </button>
  );
};
