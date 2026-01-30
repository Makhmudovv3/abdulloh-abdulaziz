import React from 'react'
import "./Section2.css"
import a2 from "../../assets/a2.png"
import a3 from "../../assets/a3.png"
import a4 from "../../assets/a4.png"
import a5 from "../../assets/a5.png"
import a6 from "../../assets/a6.png"

const Section2 = () => {
    return (
        <section className="services">
            <h2 className="services__title">Ремонт любых побутовой техники INDESIT</h2>

            <div className="services__container">
                <button className="arrow">‹</button>

                <div className="services__grid">
                    <div className="service-card service-card--large">
                        <div className="service-card__img-container">
                            <img src={a2} alt="Стиральные машины" />
                        </div>
                        <p>Ремонт стиральных машин</p>
                    </div>

                    <div className="services__subgrid">

                        <div className="service-card">
                            <img src={a3} alt="Вытяжки" />
                            <p>Вытяжки</p>
                        </div>

                        <div className="service-card">
                            <img src={a4} alt="Посудомойки" />
                            <p>Посудомойки</p>
                        </div>

                        <div className="service-card">
                            <img src={a5} alt="Пылесосы" />
                            <p>Пылесосы</p>
                        </div>

                        <div className="service-card2">
                            <img src={a6} alt="Варочные панели" />
                            <p>Варочные панели</p>
                        </div>

                    </div>
                </div>

                <button className="arrow">›</button>
            </div>
        </section>
    )
}

export default Section2