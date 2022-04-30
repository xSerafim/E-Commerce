import PropTypes from 'prop-types';
import React from 'react';

export default function DeleteItemBtn({ id }) {
  return (
    <div className="trash">
      <button type="button" onClick={() => console.log(id)}>
        <i className="fa-solid fa-trash-can" />
      </button>
    </div>
  );
}

DeleteItemBtn.propTypes = {
  id: PropTypes.string,
}.required;
