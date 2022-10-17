import React from 'react';
import CategoriesMenu from '../components/CategoriesMenu';
import Hero from '../components/Hero';
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <CategoriesMenu />
    </div>
  )
}
