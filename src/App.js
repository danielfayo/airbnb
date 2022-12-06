import React from 'react';
import  Navbar  from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import StarImage from './assets/Star.svg'
import bikeImg from './assets/bike.jpg'
import data from './data';
import './App.css';


function App() {
  const mod =  data.map(element => {
    return <Card
    image={bikeImg}
    starImg={StarImage}
    ratingValue={element.stats.rating} 
    country={` (${element.stats.reviewCount}) • ${element.location}`} 
    heading={element.title}
    price= {element.price}
    status={element.openSpots}
    location={element.location}
    />
  })

  return (
    <div>
      <Navbar/>
      <Hero/>
      <section className='cards'>
        {mod}
      </section>
    </div>
  );
}

export default App;
