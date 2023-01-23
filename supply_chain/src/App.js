import logo from './logo.svg';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import TransactionHistory from './components/TransactionHistory';
import ProductManagement from './components/ProductManagemen';
import SupplyChainAnalytics from './components/SupplyChainAnalytics';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>

        <Routes>
        <Route path='/' element={<Dashboard/>}/>
        <Route path='/history' element={<TransactionHistory/>}/>
        <Route path='/magement' element={<ProductManagement />}/>
        <Route path='/analytics' element={<SupplyChainAnalytics />}/>
      </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
