
import React, { useState } from 'react';
import Product from './Product';
import './ProductsPage.css';

function ProductsPage() {
  const [products] = useState([
    { id: 1, name: 'Play Station 5', category: 'Console', price: 20, imageUrl: require('./images/ps5.jpeg') },
    { id: 2, name: 'Xbox Series S', category: 'Console', price: 30, imageUrl: require('./images/xbox.jpeg') },
    { id: 3, name: 'FIFA 23', category: 'Video Game', price: 30, imageUrl: require('./images/fifa23.jpeg') },
    { id: 4, name: 'NBA 2K23', category: 'Video Game', price: 30, imageUrl: require('./images/nba23.jpeg') },
    { id: 5, name: 'God of War : Ragnarök', category: 'Video Game', price: 30, imageUrl: require('./images/gowrag.jpeg') },
    { id: 6, name: 'Nintendo Switch OLED', category: 'Console', price: 30, imageUrl: require('./images/switcholed.jpeg') },
    { id: 7, name: 'Nintendo Switch', category: 'Console', price: 30, imageUrl: require('./images/switch.jpeg') },
    { id: 8, name: "Assassin's Creed : Valhalla", category: 'Video Game', price: 30, imageUrl: require('./images/acreed.jpeg') },
    { id: 9, name: 'Call of Duty : Modern Warfare II', category: 'Video Game', price: 30, imageUrl: require('./images/codmw.jpeg') },
    { id: 10, name: 'Grand Theft Auto V', category: 'Video Game', price: 30, imageUrl: require('./images/gta.jpeg') },
  ]);

  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCategoryChange = (event) => {
    const { value } = event.target;
    setSelectedCategories((prevSelected) =>
      prevSelected.includes(value) ? prevSelected.filter((category) => category !== value) : [...prevSelected, value]
    );
  };

  return (
  
  <div className='products'>
    <div className='faceted'>
      <div className='check'>
        <label>
          <input type="checkbox" value="Video Game" onChange={handleCategoryChange} checked={selectedCategories.includes('Video Game')} />
          Video Game
        </label>
      </div>
      <div className='check'>
        <label>
          <input type="checkbox" value="Console" onChange={handleCategoryChange} checked={selectedCategories.includes('Console')} />
          Console
        </label>
      </div>
      </div>

      <div className="products-list">
        {products
          .filter((product) => selectedCategories.length === 0 || selectedCategories.includes(product.category))
          .map((product) => (
            <div key={product.id} className="product-item">
              <Product name={product.name} category={product.category} price={product.price} imageUrl={product.imageUrl} />
            </div>
          ))}
      </div>
  </div>
  );
}

export default ProductsPage;
