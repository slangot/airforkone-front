import { NavLink } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";

import Produit from "../../assets/fork2-wbg.png"

import './Cart.css'

const Cart = () => {

  let currentShoppingList = null

  if(localStorage.getItem('waiting_order')) {
    currentShoppingList = JSON.parse(localStorage['waiting_order'])
  }

  /*

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
  */

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
          {currentShoppingList.map(e => 
            <div className='cart-element-container'>
              <div className='cart-element-image-container'>
                <img className='cart-element-image' src={Produit} alt='cart product' />
              </div>
              <div className='cart-element-info'>
                <p>{e.name}</p>
                <p>Couleur : {e.color}</p>
                <p>Quantité : {e.quantity}</p>
                <p>Prix : {e.price}€</p>
                <button className='cart-delete-btn'>Supprimer</button>
              </div>
            </div>)}
          <div className='cart-total-container'>
            <div className='cart-total-info'>

            </div>

            <div className='cart-total-price'>

            </div>

          </div>
          <button className='cart-confirm-btn'>Valider la commande</button>
        </>
        : 
        
        <>
          <h3>Vide</h3>
          <NavLink to='product'><button className='cart-return-btn'>Retour au produit</button></NavLink>
        </>
        }

        </div>
        
      </div>

    </div>
    );
}
 
export default Cart;