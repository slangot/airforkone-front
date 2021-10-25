import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
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
      </BrowserRouter>
    </div>
  );
}

export default App;
