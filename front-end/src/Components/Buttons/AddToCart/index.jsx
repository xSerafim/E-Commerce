import PropTypes from 'prop-types';
import React, { useState } from 'react';
import useLocalStorage from '../../../Hooks';

export default function AddToCartBtn({ color, size, items, adId }) {
  const [err, setErr] = useState('');
  const [click, setClick] = useState(false);
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

    setClick(true);

    setTimeout(() => {
      setClick(false);
    }, 2000);

    return setErr('');
  };

  return (
    <div className="add-to-cart">
      {click && <p id="added-to-cart">Produto adicionado ao carrinho</p>}
      {err && <p id="error-message">{err}</p>}
      <button onClick={handleClick} type="button">
        Adicionar ao Carrinho
      </button>
    </div>
  );
}

AddToCartBtn.propTypes = {
  color: PropTypes.string,
}.required;
