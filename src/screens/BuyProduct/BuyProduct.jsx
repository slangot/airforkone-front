import { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";

import { BsCartPlus } from 'react-icons/bs'

import Swal from "sweetalert2";

import './BuyProduct.css' 

import BuyImg1 from '../../assets/fork1-wbg.png'
import BuyImg2 from '../../assets/fork2-wbg.png'
import BuyImg3 from '../../assets/fork3-wbg.png'
import BuyImg4 from '../../assets/fork4-wbg.png'
import BuyImg5 from '../../assets/fork-kid1.jpg'
import ProductCard from "../../components/ProductCard/ProductCard";

const BuyProduct = () => {

  const images = [BuyImg1, BuyImg2, BuyImg3, BuyImg4, BuyImg5]

  const [currentPhoto, setCurrentPhoto] = useState(BuyImg1)
  const [currentQuantity, setCurrentQuantity] = useState(1)
  const [currentColor, setCurrentColor] = useState()

  const handleAddingToCart = () => {
    if(!currentColor) {
      Swal.fire({
        title: 'Vous devez sélectionner une couleur',
        icon: 'error',
        confirmButtonText: 'Ok'
    })
  } else {
    const incomingPurchase = {
      name: 'Air Fork One',
      quantity: currentQuantity,
      color: currentColor,
      price: Number.parseFloat(currentQuantity * 49.99).toFixed(2)
    }
    if(localStorage.getItem('waiting_order')) {
      let waitingOrder = JSON.parse(localStorage['waiting_order'])
      const ordersList = []

      waitingOrder.map(e => ordersList.push(e))
      ordersList.push(incomingPurchase)
      localStorage['waiting_order'] = JSON.stringify(ordersList)

    } else {
      const ordersList = [incomingPurchase]
      localStorage['waiting_order'] = JSON.stringify(ordersList)
    }
    
    Swal.fire({
      title: 'Bien ajouté',
      html: 'Votre produit a bien été ajouté à votre panier',
      icon: 'success',
      showCloseButton: true,
      showCancelButton: true,
      confirmButtonColor: 'orange',
      cancelButtonColor: 'silver',
      cancelButtonText: 'Retour au produit',
      confirmButtonText: 'Voir mon panier'
    }).then(() => window.location = 'http://localhost:3000/cart')

  }
  
  }

  return (
    <div className='BuyProduct'>
      <Navbar />
      <div className='buy-product-container'>
        <div className='buy-product-image-container'>
          <div className='buy-product-main-image'>
            <img src={currentPhoto} alt='main product' />
          </div>
          <div className='buy-product-mini-container'>
            {images.map((i, index) => <ProductCard key={index} url={i} setImage={setCurrentPhoto} />)}
          </div>
        </div>
        <div className='buy-product-option-container'>
          <h3>Air Fork One</h3>
          <div className='buy-product-quantity'>
            <label for='quantity'>Quantité : 
              <input type='number' min='1' id='quantity' value={currentQuantity} onChange={(e) => setCurrentQuantity(e.target.value)} />
            </label>
          </div>
          <div className='buy-product-radio-color' onChange={e => setCurrentColor(e.target.value)}>
            Couleur : 
            <div className='buy-product-color-container'>
              <label className='buy-product-color-label'>
                <input type='radio' value='black' name='color' />
                <span className='radio-color radio-color-black'></span>
              </label>
            </div>
            <div className='buy-product-color-container'>
              <label className='buy-product-color-label'>
                <input type='radio' value='bleu' name='color' />
                <span className='radio-color radio-color-blue'></span>
              </label>
            </div>
            <div className='buy-product-color-container'>
              <label className='buy-product-color-label'>
                <input type='radio' value='rouge' name='color' />
                <span className='radio-color radio-color-red'></span>
              </label>
            </div>
          </div>
          
          <div className='buy-product-description'>
            Pack comprenant:<br />
            <ul>
              <li>1x Air fork one en nano polynéide plastique</li>
              <li>1x Emballage en matière moderne</li>
              <li>1x Un guide très détaillé d'utilisation complexe</li>
            </ul>
          </div>
          <div className='buy-product-price'>
            <h4><span className='previous-price'>{Number.parseFloat(currentQuantity * 69.99).toFixed(2)+ '€'}</span>{Number.parseFloat(currentQuantity * 49.99).toFixed(2) + '€'}</h4>
            <button onClick={handleAddingToCart}><BsCartPlus />&nbsp;&nbsp; Ajouter au panier</button>
          </div>
        </div>
        
      </div>
    </div>
  );
}
 
export default BuyProduct;