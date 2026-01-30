import React from 'react';
import "./Section5.css";
import a10 from "../../assets/a10.png"; 
import a11 from "../../assets/a9.png";  
import a12 from "../../assets/a11.png"; 

const Section5 = () => {
    return (
        <section className='section5-container'>
            <h2>Сервис <span>INDESIT</span> предлагает лучшие цены</h2>

            <div className='card-container'>
                <div className='card card-white'>
                    <h3>Ремонт микроволновки</h3>
                    <p className="desc">Замена слюды, магнетрона, восстановление кнопок и др</p>
                    <p className="price">ОТ 2500 ₸.</p>
                </div>

                <div className='card card-white'>
                    <h3>Ремонт пылесоса</h3>
                    <p className="desc">Замена или восстановление шланга, схемы управления, двигателя и пр.</p>
                    <p className="price">ОТ 4000 ₸.</p>
                </div>

                <div className='card card-white'>
                    <h3>Ремонт аудиотехники</h3>
                    <p className="desc">Колонки, домашние кинотеатры, музыкальные центры и др. виды.</p>
                    <p className="price">ОТ 4500 ₸.</p>
                </div>

                <div className='card card-white'>
                    <h3>Ремонт микроволновки</h3>
                    <p className="desc">Замена слюды, магнетроna, восстановление кнопок и др</p>
                    <p className="price">ОТ 2500 ₸.</p>
                </div>

                <div className='card card-white'>
                    <h3>Ремонт микроволновки</h3>
                    <p className="desc">Замена слюды, магнетрона, восстановление кнопок и др</p>
                    <p className="price">ОТ 2500 ₸.</p>
                </div>

                <div className='card card-red'>
                    <div className="card-content">
                        <h3>Выезд мастера</h3>
                        <p className="desc">В удобное для Вас время. На дом или в офис!</p>
                        <p className="free">БЕСПЛАТНО</p>
                    </div>
                    <img src={a10} alt="" className="bottom-img" />
                </div>

                <div className='card card-dark-blue'>
                    <div className="card-content">
                        <h3>Диагностика</h3>
                        <p className="desc">С использованием современного оборудования</p>
                        <p className="free">БЕСПЛАТНО</p>
                    </div>
                    <img src={a11} alt="" className="bottom-img" />
                </div>

                <div className='card card-navy'>
                    <div className="card-content">
                        <h3>Расширенная гарантия</h3>
                        <p className="desc">На все запчасти и выполненные услуги</p>
                        <p className="free">БЕСПЛАТНО</p>
                    </div>
                    <img src={a12} alt="" className="bottom-img" />
                </div>
            </div>
        </section>
    );
};

export default Section5;