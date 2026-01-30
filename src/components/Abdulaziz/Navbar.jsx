import React from 'react'
import logo from "../../assets/logo.png"
import "./Navbar.css"
import { RiMapPin2Fill } from "react-icons/ri";
import { IoChevronDown } from "react-icons/io5";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoIosCall } from "react-icons/io";


const Navbar = () => {
    return (
        <div className='navbar-container'>
            <div className='navbar-img'>
                <img src={logo} alt="" />
            </div>
            <div className='navbar-text'>
                <div className='navbar-country'>
                    <RiMapPin2Fill className='gps' />
                    <a href="">Ваш город: <span>Алматы</span>  <IoChevronDown className='down' /> </a>
                </div>
                <div className='navbar-time'>
                    <div className='time-icon'>
                        <MdOutlineAccessTime className='time' />
                    </div>
                    <div className='navbar-work'>
                        <p>Время работы:</p>
                        <b>с 9:30 до 18:00 Пн-Пт</b>
                    </div>
                </div>
                <div className='navbar-call'>
                    <div className='call-icon'>
                        <IoIosCall className='icon-call' />
                    </div>
                    <div className='call'>
                        <p>+7(863) 203 60 48</p>
                        <p>+7(863) 203 70 33</p>
                    </div>
                </div>
            </div>
            <button>Заказать звонок </button>

        </div>
    )
}

export default Navbar