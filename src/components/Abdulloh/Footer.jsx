import React from 'react'
import './Footer.css'
import logo2 from '../../assets/logo2.png'

const Footer = () => {
    return (
        <>
        <footer>
        <div className="footer-container">
                <img src={logo2} alt="" />   
   <div className="footer-text-block">
            <p>Ремонт бытовой техники в Алматы.</p>
            <p>Обслуживание по Европейским стандартам качества</p>
          </div>
        </div>

        <div className="footer-copyright">
          <p>Все права защищены, Алматы 2019</p>
        </div>
        </footer>
        </>
    )
}

export default Footer