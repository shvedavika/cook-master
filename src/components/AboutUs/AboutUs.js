import React from 'react';
import './AboutUs.scss';
import restaurantImage1 from './assets/about1.jpg';
import restaurantImage2 from './assets/about2.jpg';
import restaurantImage3 from './assets/about3.jpg';
import restaurantImage4 from './assets/about4.jpg';
import restaurantImage5 from './assets/about5.jpg';
import restaurantImage6 from './assets/about6.jpg';

export default function AboutUs() {
  return (
    <section className="about-us">
      <p className="about-us__text">
        Our restaurant is a modern place with own unique menu offering gastronomic and designer’s dishes and an
        impressive cocktail card.<br/>
        Just after opening, the restaurant appeared on the pages of London’s “Wall Paper” that appreciated the original
        interior design. It is no wonder that every detail has been designed to surprise guests harmoniously matching
        with a unified stylish concept. The main idea lies in innovation, uniqueness, and atmosphere.
      </p>
      <p className="about-us__text">
        One of the best chefs in Ukraine rules the kitchen. According to his opinion, the restaurant menu is indirectly
        related to the traditional Ukraine cuisine. All the dishes – designer’s and gastronomic – created on the
        principle of interesting and complex combinations of ingredients. The menu is updated on monthly basis for the
        visitors to enjoy seasonal products served in a very non-standard way. Creative serving is a highlight of the
        restaurant. So, do not be surprised if your dish is served in the dry ice smoke or cooked right at you!
        Many meat and fish dishes are cooked in Big Green Egg ovens that bring incredible juicy products with an
        appetizing smoke flavor.
      </p>
      <p className="about-us__text">
        We propose a comfortable area with modern gadgets and games is arranged for children where professional
        animators make real holidays for small visitors. At the same time, their parents are able to calmly and
        leisurely enjoy food and chat with friends.<br/>
      </p>
      <p className="about-us__text">
        Our restaurant is a trendy place, which, due to its special atmosphere, creative serving, originality in
        details, and stunningly delicious dishes, attracts interesting people becoming a MUST HAVE place of the city.
        Here you can meet as the stars of show business and politicians, as well as representatives of advertising
        agencies or office staff, large families and young couples, gourmets and those for whom going out to a
        restaurant is an event.
      </p>
      <article className="about-us__gallery-container">
        <h2>Gallery</h2>
        <section className="about-us-gallery">
          <figure className="about-us-gallery__item about-us-gallery__item--1">
            <img className="about-us-gallery__image" src={restaurantImage1}
              alt="restaurant"/>
          </figure>
          <figure className="about-us-gallery__item about-us-gallery__item--2">
            <img className="about-us-gallery__image" src={restaurantImage2}
              alt="restaurant"/>
          </figure>
          <figure className="about-us-gallery__item about-us-gallery__item--3">
            <img className="about-us-gallery__image" src={restaurantImage3}
              alt="restaurant"/>
          </figure>
          <figure className="about-us-gallery__item about-us-gallery__item--4">
            <img className="about-us-gallery__image" src={restaurantImage4}
              alt="restaurant"/>
          </figure>
          <figure className="about-us-gallery__item about-us-gallery__item--5">
            <img className="about-us-gallery__image" src={restaurantImage5}
              alt="restaurant"/>
          </figure>
          <figure className="about-us-gallery__item about-us-gallery__item--6">
            <img className="about-us-gallery__image" src={restaurantImage6}
              alt="restaurant"/>
          </figure>
        </section>
      </article>
    </section>
  )
}
