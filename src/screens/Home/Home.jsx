import Navbar from '../../components/Navbar/Navbar';

import './Home.css'

import HomeImg from '../../assets/fork-kid1.jpg'
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
      <div className='Home'>
        <Navbar />
        <div className='home-container'>
          <div className='home-image-container'>
            <img src={HomeImg} alt="main kid fork" />
          </div>
          <div className='home-description-container'>
            <h1>Air Fork One</h1>
            <h3>
              Découvrez la première fourchette avion qui vous mettra sur un nuage lors des repas
            </h3>
            <NavLink to='/description-product'><button>Découvrir</button></NavLink>
          </div>
        </div>
      </div>
    );
}
 
export default Home;