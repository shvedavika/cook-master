import React from 'react';
import Container from "../../components/Container/Container";
import Promo from "../../components/Home/Promo/Promo";
import TopDishes from "../../components/Home/TopDishes/TopDishes";
import HomeAboutUs from "../../components/Home/HomeAboutUs/HomeAboutUs";

export default function HomePage() {
  return (
    <>
      <Container>
        <Promo/>
        <TopDishes/>
      </Container>
      <HomeAboutUs/>
    </>
  )
}
