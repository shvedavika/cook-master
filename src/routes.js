import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from "./containers/HomePage/HomePage";
import AboutUsPage from "./containers/AboutUsPage/AboutUsPage";
import EventsPage from "./containers/EventsPage/EventsPage";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import MenuPage from "./containers/MenuPage/MenuPage";
import BookTablePage from "./containers/BookTable/BookTablePage";

export default (
  <>
    <Header/>
    <Route exact path="/" component={HomePage}/>
    <Route exact path="/about-us" component={AboutUsPage}/>
    <Route exact path="/events" component={EventsPage}/>
    <Route exact path="/menu" component={MenuPage}/>
    <Route exact path="/book-table" component={BookTablePage}/>
    <Footer/>
  </>
);
