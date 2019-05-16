import React, { useEffect } from 'react';
import {connect} from "react-redux";
import './Menu.scss';
import MenuCategory from "./MenuCategory/MenuCategory";
import menuFooterImage from './assets/menu-footer.jpg';
import {loadMenu} from "../../reducers/menuReducer";

function Menu(props) {
  const {loadMenu, menu} = props;

  useEffect(() => {
    loadMenu();
  }, []);
  
  return(
    <>
      <h2 className="menu-header">Menu</h2>
      <article className="menu">
        {menu.map(categoryGroup => <MenuCategory key={categoryGroup.id} category={categoryGroup}/>)}
        <img className="menu__image" src={menuFooterImage} alt="How we serve dishes"/>
      </article>
    </>
  )
}
export default connect(
  state => ({
    menu: state.menu.menu,
  }),
  {
    loadMenu,
  }
)(Menu);
