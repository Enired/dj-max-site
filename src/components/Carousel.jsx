import React, { useState } from 'react';

function Carousel(props) {
  const [currentItem, setCurrentItem] = useState(0);
  const [items, setItems] = useState(props.items)

  function handleNext() {
    setCurrentItem(currentItem === items.length - 1 ? 0 : currentItem + 1);
  }

  function handlePrev() {
    setCurrentItem(currentItem === 0 ? items.length - 1 : currentItem - 1);
  }

  function handleRemove(index) {
    const newItems = [...items];
    newItems.splice(index, 1);
    setCurrentItem(currentItem === items.length - 1 ? 0 : currentItem);
    setItems(newItems)
  }

  return (
    <div className="carousel" style={{ 'max-width': '50%' }}>
      <div className="carousel-item">
        {items[currentItem]}
      </div>
      <button onClick={() => handleRemove(currentItem)}>Remove</button>
      <button style={{ width: '50%' }} onClick={handlePrev}>Prev</button>
      <button style={{ width: '50%' }} onClick={handleNext}>Next</button>
    </div>
  );
}

export default Carousel;