import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

import axios from "axios";
import Swal from "sweetalert2";

import Produit from "../../assets/fork2-wbg.png"

import './Cart.css'

const Cart = () => {


  let currentShoppingList = null
  let qtyBlue = 0
  let qtyBlack = 0
  let qtyRed = 0
  let totalPriceHT = 0
  let totalTVA = 0
  let totalPrice = 0

    if(localStorage.getItem('waiting_order')) {
      currentShoppingList = JSON.parse(localStorage['waiting_order'])
      currentShoppingList.map((e, index) =>
        {console.log(e.quantity)
          totalPriceHT += parseFloat(e.price)
          totalTVA = totalPriceHT * 0.2
          totalPrice = totalPriceHT + totalTVA
          if(e.color === 'blue') {
            qtyBlue += parseInt(e.quantity)
          }
           else if(e.color === 'black') {
            qtyBlack += parseInt(e.quantity)
          }
           else if(e.color === 'red') {
            qtyRed += parseInt(e.quantity)
          }
        })
    }

  const handleRemoveOrder = (e) => {
    console.log(e)
    currentShoppingList.splice(e, 1)
    localStorage['waiting_order'] = JSON.stringify(currentShoppingList)
    Swal.fire({
      title: 'Produit retiré de votre panier',
      icon: 'success',
      confirmButtonText: 'Ok'
  }).then(() => window.location = ('/cart'))
   
  }

  const handleValidOrder = () => {
    const addData = async () => {
      const resData = await axios.post('http://localhost:3000/cart', {
        product: 'Air Fork One',
        qtyBlack: parseInt(qtyBlack),
        qtyBlue: parseInt(qtyBlue),
        qtyRed: parseInt(qtyRed),
        totalPrice: parseInt(totalPrice)
      })
      Swal.fire({
        title: 'Panier validé',
        icon: 'success',
        confirmButtonText: 'Procéder au paiement'
      }).then(() => window.location = ('/cart'))
    }
    addData()
  }

  return (
    <div className='Cart'>
      <Navbar />
      <div className='cart-container'>

        <div className='cart-resume-container'>
          <h2>{currentShoppingList ? `Votre panier contient ${currentShoppingList.length} produit(s)`: `Votre panier est vide`}</h2>
        </div>

        <div className='cart-order-list-container'>
        {currentShoppingList ?
        <>
          {currentShoppingList.map((e, index) => 
            <div className='cart-element-container'>
              <div className='cart-element-image-container'>
                <img className='cart-element-image' src={Produit} alt='cart product' />
              </div>
              <div className='cart-element-info'>
                <p>{e.name}</p>
                <p>Couleur : {e.color}</p>
                <p>Quantité : {e.quantity}</p>
                <p>Prix : {e.price}€</p>
                <button className='cart-delete-btn' onClick={() => handleRemoveOrder(index)}>Supprimer</button>
              </div>
            </div>)}
          <div className='cart-total-container'>
            <div className='cart-total-info'>
              <p>Sous total : {totalPriceHT.toFixed(2)}€</p>
              <p>Livraison : GRATUITE</p>
            </div>

            <div className='cart-total-price'>
              <h4>Votre total : {(totalPriceHT + totalTVA).toFixed(2)}€</h4>
              <p>TVA de 20% ({(totalTVA).toFixed(2)}€) incluse</p>
            </div>

          </div>
          <button className='cart-btn cart-confirm-btn' onClick={handleValidOrder}>Valider la commande</button>
        </>
        : 
        
        <>
          <h3>Vide</h3>
          <NavLink to='buy-product'><button className='cart-btn cart-return-btn'>Retour au produit</button></NavLink>
        </>
        }

        </div>
        
      </div>

    </div>
    );
}
 
export default Cart;