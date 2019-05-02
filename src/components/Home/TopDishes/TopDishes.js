import React from 'react';
import './TopDishes.scss';
import dish1 from './assets/dish1.jpg';
import dish2 from './assets/dish2.jpg';
import dish3 from './assets/dish3.jpg';
import dish4 from './assets/dish4.jpg';

export default function TopDishes() {
  return (
    <section className="top-dishes__container">
      <h2>Top Dishes</h2>
      <section className="top-dishes__dishes">
        <article className="top-dish">
          <img className="top-dish__image" src={dish1} alt="dish"/>
          <h3 className="top-dish__header">Roast lamb with mint sauce</h3>
          <p className="top-dish__summary">
            Marinated with garlic, olive oil, salt, and pepper a few hours beforehand.
          </p>
        </article>
        <article className="top-dish">
          <img className="top-dish__image" src={dish2} alt="dish"/>
          <h3 className="top-dish__header">Cauliflower salad</h3>
          <p className="top-dish__summary">
            Great combined with steamed fish and sweet white wine.
          </p>
        </article>
        <article className="top-dish">
          <img className="top-dish__image"  src={dish3} alt="dish"/>
          <h3 className="top-dish__header">Pasta</h3>
          <p className="top-dish__summary">
            A little bit spicy with a hint of garlic and a deeply tomatoes.
          </p>
        </article>
        <article className="top-dish">
          <img className="top-dish__image" src={dish4} alt="dish"/>
          <h3 className="top-dish__header">Pink pomelo salad</h3>
          <p className="top-dish__summary">
            A seasonal treat with asian inspirations. You’ll love the rich layers of various flavors and textures.
          </p>
        </article>
      </section>
    </section>
  )
}
