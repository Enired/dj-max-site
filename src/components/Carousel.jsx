import React, { useState } from 'react';

function Carousel({ items }) {
  const [currentItem, setCurrentItem] = useState(0);

  function handleNext() {
    setCurrentItem(currentItem === items.length - 1 ? 0 : currentItem + 1);
  }

  function handlePrev() {
    setCurrentItem(currentItem === 0 ? items.length - 1 : currentItem - 1);
  }

  return (
    <div className="carousel" style={{'max-width' : '50%'}}>
      <div className="carousel-item">
        {items[currentItem]}
      </div>
      <button style={{width: '50%'}} onClick={handlePrev}>Prev</button>
      <button style={{width: '50%'}} onClick={handleNext}>Next</button>
    </div>
  );
}

export default Carousel;