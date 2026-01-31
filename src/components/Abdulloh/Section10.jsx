import React from 'react';
import './Section10.css';
import karta from "../../assets/karta.png"

const Section10 = () => {
    return (

        <>
       <div className='container2'>
        <img src={karta} alt="" />
       </div>


       <div className="container3">
        <div className="contacts-card">
          <h1>Контакты</h1>
          
          <div className="info-group">
            <div className="info-row">
              <span className="icon-blue">📍</span>
              <p>Ваш город: <strong className="city-link">Алматы</strong> <span className="arrow">⌵</span></p>
            </div>

            <div className="info-row">
              <span className="icon-blue">🕒</span>
              <div>
                <p className="label-gray">Время работы:</p>
                <p className="text-bold">с 9:30 до 18:00 Пн-Пт</p>
              </div>
            </div>

            <div className="info-row">
              <span className="icon-blue">📞</span>
              <div className="phone-block">
                <p>+7(863) 203 60 48</p>
                <p>+7(863) 203 70 33</p>
              </div>
            </div>
          </div>

          <button className="cta-button">Заказать звонок</button>
        </div>
      </div>
        </>

    )
}

export default Section10