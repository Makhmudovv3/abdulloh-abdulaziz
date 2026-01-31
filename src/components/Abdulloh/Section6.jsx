import React from 'react';
import './Section6.css';

const stepsData = [
  { id: 1, title: 'Консультация', text: 'Персональный менеджер ответит на все ваши вопросы...', icon: <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path> },
  { id: 2, title: 'Доставка', text: 'Курьер приедет в течении 1 часа или мы можем принять...', icon: <circle cx="7" cy="17" r="2"></circle> }, // Soddalashtirilgan misol
  { id: 3, title: 'Диагностика', text: 'Осуществим диагностику за счет компании, даже если...', icon: <circle cx="11" cy="11" r="8"></circle> },
  { id: 4, title: 'Согласование', text: 'Персональный менеджер согласует с вами сроки и стоимость...', icon: <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect> },
  { id: 5, title: 'Выдача', text: 'Бесплатно доставим устройство к вам домой или вы можете...', icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path> },
  { id: 6, title: 'Оплата', text: 'Оплата производится после ремонта и проверки устройства...', icon: <rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect> }
];

const Section6 = () => {
  return (
    <div className="wrapper">
      <h2 className="title">Схема работы</h2>
      <main className="grid-wrapper">
        {stepsData.map((item) => (
          <article key={item.id} className="card">
            <header className="card-header">
              <span>{item.id} ШАГ</span>
            </header>
            <div className="card-body">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#3b9ed8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="card-icon">
                {item.icon}
              </svg>
              <div className="card-info">
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
            </div>
          </article>
        ))}
      </main>
    </div>
  );
};

export default Section6;