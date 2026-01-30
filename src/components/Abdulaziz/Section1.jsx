import React from 'react'
import a1 from "../../assets/a1.png"
import "./Section1.css"

const Section1 = () => {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1>
                        Сервисный центр <br />
                        <span className="brand-name">INDESIT</span> в Алматы
                    </h1>
                    <p className="hero-text">Обходитесь без лишних затрат</p>

                    <button className="hero-btn">ВЫЗВАТЬ МАСТЕРА</button>

                    <p className="hero-note">
                        * Выезд и диагностика бесплатно <br /> при условии ремонта
                    </p>

                    <div className="hero-stats">
                        <div className="stat-container">
                            <span className="stat-number">0 ₸</span>
                            <span className="stat-text">диагностика</span>
                        </div>
                        <div className="stat-border"></div>
                        <div className="stat-container">
                            <span className="stat-number">1 день</span>
                            <span className="stat-text">ремонта</span>
                        </div>
                        <div className="stat-border"></div>
                        <div className="stat-container">
                            <span className="stat-number">3 года</span>
                            <span className="stat-text">гарантии</span>
                        </div>
                    </div>
                </div>

                <div className="hero-image">
                    <img src={a1} alt="Master with appliances" />
                </div>
            </div>
        </section>
    )
}

export default Section1