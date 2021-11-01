import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import BuyProduct from './screens/BuyProduct/BuyProduct';
import Cart from './screens/Cart/Cart';
import DescriptionProduct from './screens/DescriptionProduct/DescriptionProduct';
import Home from './screens/Home/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/description-product' exact>
          <DescriptionProduct />
        </Route>
        <Route path='/buy-product' exact>
          <BuyProduct />
        </Route>
        <Route path='/cart' exact>
          <Cart />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
