import Navbar from "../../components/Navbar/Navbar";

import DescriptionImg1 from '../../assets/fork1-wbg.png'
import DescriptionImg2 from '../../assets/fork2-wbg.png'
import DescriptionImg3 from '../../assets/fork4-wbg.png'

import './DescriptionProduct.css'
import { NavLink } from "react-router-dom";

const DescriptionProduct = () => {
  return (
    <div className='DescriptionProduct'>
      <Navbar />
        <div className='description-product-container-one'>
          <div className='description-product-image-container'>
            <img src={DescriptionImg2} alt="first description fork" />
          </div>
          <div className='description-product-info-container'>
            <h2><span className='description-product-info-orange'>A</span>ir <span className='home-description-title-orange'>F</span>ork <span className='home-description-title-orange'>One</span></h2>
            <p>
              Les technologies les plus innovantes des domaines de l'aérospatial, de la gastronomie moléculaire et du design futuriste concentrées dans un même et unique produit.<br />
              Voilà ce qui caractérise Air Fork One.<br />
              L'essayer c'est l'adopter !
            </p>
            <NavLink to='/buy-product'><button className='description-product-button'>Acheter</button></NavLink>
          </div>
        </div>
        <div className='description-product-container-two'>
          <div className='description-product-info-container'>
            <h2><span className='description-product-info-orange'>A</span>ir <span className='home-description-title-orange'>F</span>ork <span className='home-description-title-orange'>One</span></h2>
            <p>
              Découvrez la première fourchette avion qui vous mettra sur un nuage lors des repas
            </p>
            <NavLink to='/buy-product'><button className='description-product-button'>Acheter</button></NavLink>
          </div>
          <div className='description-product-image-container'>
            <img src={DescriptionImg3} alt="first description fork" />
          </div>
        </div>
    </div>
    );
}
 
export default DescriptionProduct;