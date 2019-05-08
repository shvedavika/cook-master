import React from 'react';
import './MenuCategory.scss';
import PropTypes from "prop-types";
import Event from "../../Events/Event/Event";

export default function MenuCategory(props) {
  const {category} = props;
  const categoryData = [...category.items];
  return(
    <article className="menu-category">
      <h3 className="menu-category__header">{category.categoryName}</h3>
      {categoryData.map(item =>
        <article className="menu-item" key={item.id}>
          <p className="menu-item__name">{item.name}</p>
          <span className="menu-item__details">{item.gram} / ${item.price}</span>
        </article>
      )}
    </article>
  )
}

Event.propTypes = {
  category: PropTypes.object,
};

