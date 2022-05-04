import PropTypes from 'prop-types';
import React from 'react';
import useLocalStorage from '../../../Hooks';

import './style.css';

export default function DeleteItemBtn({ item }) {
  const [setValue] = useLocalStorage();
  return (
    <div className="trash">
      <button
        type="button"
        className="delete-button"
        onClick={() => setValue([item], false, true)}
      >
        <i className="fa-solid fa-trash-can" />
      </button>
    </div>
  );
}

DeleteItemBtn.propTypes = {
  item: PropTypes.string,
}.required;
