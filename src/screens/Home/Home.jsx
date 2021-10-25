import Navbar from '../../components/Navbar/Navbar';

import './Home.css'

import HomeImg from '../../assets/fork-kid1.jpg'

const Home = () => {
  return (
      <div className='Home'>
        <Navbar />
        <div className='home-container'>
          <div className='home-image-container'>
            <img src={HomeImg} alt="main kid fork" />
          </div>
          <div className='home-description-container'>
            <h1><span className='home-description-title-orange'>A</span>ir <span className='home-description-title-orange'>F</span>ork <span className='home-description-title-orange'>One</span></h1>
            <h3>
              Découvrez la première fourchette avion qui vous mettra sur un nuage lors des repas
            </h3>
            <button>Découvrir</button>
          </div>
        </div>
      </div>
    );
}
 
export default Home;