import React from 'react';
import './Section8.css';

import user1 from '../../assets/user1.jpg';
import user2 from '../../assets/user2.jpg';
import user3 from '../../assets/user3.jpg';

const reviews = [
  {
    id: 1,
    name: 'Константин',
    img: 'user1', 
    text: 'С сайтом и сервисом этой компании всё просто отлично! Качество товара соответствует заявленному. Буду и впредь пользоваться товарами с этого сайта, и смело могу рекомендовать его людям.'
  },
  {
    id: 2,
    name: 'Алина',
    img: 'user2', 
    text: 'Хочу выразить благодарность компании за качественно выполненную работу по ремонту стиральной машины! Все было качественно и оперативно: от принятия заявки диспетчером до работы мастера!'
  },
  {
    id: 3,
    name: 'Дмитрий',
    img: 'user3', 
    text: 'Благодарны за качественное и профессиональное обслуживание, быстро откликнулись. Мастер Сергей приехал в назначенное время, сделал все хорошо'
  }
];

const Section8 = () => {
  return (
    <section className="reviews-section">
      <h2 className="reviews-main-title">Отзывы</h2>
      <div className="reviews-grid">
        {reviews.map((item) => (
          <div key={item.id} className="review-card">
            <div className="user-img-wrapper">
              <img src={user2}alt={user1} className="user-avatar" />
                            <img src={user2}alt={user2} className="user-avatar" />
              <img src={user3}alt={user3} className="user-avatar" />

            </div>
            <div className="review-body">
              <span className="quote-icon left">«</span>
              <h3 className="user-name">{item.name}</h3>
              <p className="review-text">{item.text}</p>
              <span className="quote-icon right">»</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section8;