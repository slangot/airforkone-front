import axios from 'axios';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

import './AdminOrders.css'

const AdminOrders = () => {

  const [orders, setOrders] = useState([])

  useEffect(() => {
    const getOrders = async () => {
      const dataOrders = await axios.get('http://localhost:3000/cart').then(
      res => {setOrders(res.data)}
      )}
    getOrders()
    
  }, [])

  return (
    <div className='AdminOrders'>
      <NavLink to='/'><button className='return-btn'>Retour</button></NavLink>
      <h1>Gestion des commandes</h1>
      {orders && orders.map(e => (
        <ul className='orderList'>
          <li>N° commande : {e.id}</li>
          <li>Produit : {e.product}</li>
          <li>Quantité Bleu : {e.qtyBlue}</li>
          <li>Quantité Noir : {e.qtyBlack}</li>
          <li>Quantité Rouge : {e.qtyRed}</li>
          <li>Prix total : {e.totalPrice}€</li>
          <li>Status : {e.status === 0 ? 'Non traité' : 'Traité'}</li>
        </ul>))}
    </div>
    );
}
 
export default AdminOrders;