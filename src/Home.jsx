import React from 'react';
import Hero from "./components/Hero";
import Homesec2 from "./components/Homesec2";
import NavBar from './components/NavBar';
import Homesec3 from './components/Homesec3';
import Homesec4 from './components/Homesec4';
import Homesec5 from './components/Homesec5';
import Contact from './components/contact';
import Footer from './components/footer';

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
      <Hero />
      <Homesec2 />
      <Homesec3 />
      <Homesec4 />
      <Homesec5 />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
