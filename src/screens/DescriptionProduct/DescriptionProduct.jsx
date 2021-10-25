import Navbar from "../../components/Navbar/Navbar";

import DescriptionImg1 from '../../assets/fork1-wbg.png'
import DescriptionImg2 from '../../assets/fork2-wbg.png'
import DescriptionImg3 from '../../assets/fork4-wbg.png'

import './DescriptionProduct.css'

const DescriptionProduct = () => {
  return (
    <div className='DescriptionProduct'>
      <Navbar />
        <div className='description-product-container-one'>
          <div className='description-product-image-container'>
            <img src={DescriptionImg2} alt="first description fork" />
          </div>
          <div className='description-product-info-container'>
            <h1><span className='description-product-info-orange'>A</span>ir <span className='home-description-title-orange'>F</span>ork <span className='home-description-title-orange'>One</span></h1>
            <h3>
              Découvrez la première fourchette avion qui vous mettra sur un nuage lors des repas
            </h3>
            <button className='description-product-button'>Acheter</button>
          </div>
        </div>
        <div className='description-product-container-two'>
          <div className='description-product-info-container'>
            <h1><span className='description-product-info-orange'>A</span>ir <span className='home-description-title-orange'>F</span>ork <span className='home-description-title-orange'>One</span></h1>
            <h3>
              Découvrez la première fourchette avion qui vous mettra sur un nuage lors des repas
            </h3>
            <button className='description-product-button'>Acheter</button>
          </div>
          <div className='description-product-image-container'>
            <img src={DescriptionImg3} alt="first description fork" />
          </div>
        </div>
    </div>
    );
}
 
export default DescriptionProduct;