import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useLocalStorage from '../../../Hooks';

export default function AddToCartBtn({ color, size, items, adId }) {
  const [err, setErr] = useState('');
  const [setValue] = useLocalStorage();

  const findItem = () =>
    items
      .filter((item) => item.color === color)
      .filter((item) => item.size === size);

  const handleClick = () => {
    if (size.includes('Selecione')) return setErr('Selecione um tamanho');
    if (!color) return setErr('Selecione uma cor');
    const itemWithAdId = findItem();
    itemWithAdId[0].adId = adId;
    setValue(itemWithAdId);
    return setErr('');
  };

  return (
    <div className="add-to-cart">
      <button onClick={handleClick} type="button">
        Adicionar ao Carrinho
      </button>
      {err && <p>{err}</p>}
    </div>
  );
}

AddToCartBtn.propTypes = {
  color: PropTypes.string,
}.required;
