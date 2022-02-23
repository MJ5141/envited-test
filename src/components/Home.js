import React from 'react';
import productleft from '../assets/productleft.png';
import productmiddle from '../assets/productmiddle.png';
import productright from '../assets/productright.png';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="container">
      <h1 className="main">Facebook events <br></br>without Facebook.</h1>
      <h3 className="info">Easily host and share events with your <br></br>friends across any social media.</h3>
      <Link className="nxt-btn" to="/create">🎉 Create my next event</Link>
      <div className="products">
          <img className="side-img" src={productleft} />
         <img className="middle-img" src={productmiddle} />
         <img className="side-img" src={productright} /> 
       </div>  
    </div>
  )
}

export default Home
