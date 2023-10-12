
import './App.css';
import Navbar from './components/navbar';
import Main from './components/main';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Products from './pages/products';
import Solutions from './pages/solutions';
import Pricing from './pages/pricing';
import Learn from './pages/learn';
import Contact from './pages/contact';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />


        <Routes>
          <Route path='/' element={<Main /> } />
          <Route path='/products' element={<Products /> } />
          <Route path='/solutions' element={<Solutions/> } />
          <Route path='/pricing' element={<Pricing />} />
          <Route path='/learn' element={<Learn />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </BrowserRouter>


    </div>
  );
}

export default App;
