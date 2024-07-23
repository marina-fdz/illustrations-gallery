import '../styles/App.scss';

import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Footer from './Footer';
import Header from './Header';
import Gallery from './Gallery';
import Contact from './Contact';
import NotFound from './NotFound';

import data from '../services/data.json';

function App() {
  const [allProducts, setAllProducts] = useState(data);
  const [search, setSearch] = useState({
    name: '', type: ''
  });

  function getCathegories(){
    const cathegories = allProducts.map((product) => product.type)
    const uniqueCathegories = new Set (cathegories)
    const uniqueArray = [...uniqueCathegories]
    return uniqueArray
  }

  const searchedProducts = allProducts.filter((product) => {
    return product.name.toLowerCase().includes(search.name.toLowerCase());
  }).filter((product) => search.type ? product.type === search.type : true);

  const searchValidation = searchedProducts.length === 0 ? 'No results found' : <>{search.type}</>;


  return (
    <>
    <Header search={search} setSearch={setSearch} types={getCathegories()}/>
    <Routes>
      <Route path="/" element={<Gallery data={searchedProducts} searchValidation={searchValidation}/>}/>
      <Route path="/contact" element={<Contact/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
    <Footer/>
    </>
  );
}

export default App;