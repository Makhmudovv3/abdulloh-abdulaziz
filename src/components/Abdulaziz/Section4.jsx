import React from 'react';
import './Section4.css';
import a7 from "../../assets/a7.png";
import a8 from "../../assets/a8.png";
import a9 from "../../assets/a9.png";

const Section4 = () => {
    return (
        <section className="section4-wrapper">
            <div className="section4-container">
                <div className="section4-blue-bg"></div>

                <div className="section4-inner">
                    <div className="section4-content">
                        <h2 className="section4-title">
                            Заказать бесплатный выезд мастера за 30 мин!
                        </h2>
                        <p className="section4-description">
                            Выезд мастера и диагностика бесплатно, при условии ремонта.
                            Мы следим за качеством обслуживания. К вам приедет мастер с опытом
                            работы не менее пяти лет. У нас быстро, от 30 минут выезд мастера.
                        </p>
                        <button className="section4-button">Заказать звонок</button>
                    </div>

                    <div className="section4-images">
                        <img src={a7} alt="Master" className="img-master" />
                        <img src={a8} alt="Dishwasher" className="img-dishwasher" />
                        <img src={a9} alt="Washer" className="img-washer" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Section4;