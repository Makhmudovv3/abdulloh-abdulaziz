import React from 'react';
import './Section7.css';

import master from '../../assets/master.png';
import washer from '../../assets/washer.png';
import stove from '../../assets/stove.jpg';

const Section7 = () => {
  return (
    <section className="discount-section">
      <div className="discount-container">
        
        <div className="discount-content">
          <h2 className="discount-title">
            Получите скидку 15% прямо сейчас!
          </h2>
          <p className="discount-text">
            Вы выбираете LG, а мы в знак благодарности дарим Вам 
            скидку 15% на все виды ремонтных работ в нашем центре!
          </p>
          <button className="discount-btn">
            Получить скидку 15%
          </button>
        </div>

        <div className="discount-images">
          <img src={washer} alt="Washer" className="img-appliance washer" />
          <img src={master} alt="Master" className="img-master" />
          <img src={stove} alt="Stove" className="img-appliance stove" />
        </div>
      </div>

      <div className="decor-circle circle-top"></div>
      <div className="decor-circle circle-bottom"></div>
    </section>
  );
};

export default Section7;