import React from 'react';
import './App.css';
import { ProductCard } from './component/product-card/product-card';

function App() {
  return (
    <div className="App">
      <header className="App-header">

      </header>
      <main className='App-main'>
        <ProductCard 
          title="Кофемашина"
          origin="Италия"
          price={34900} // 349.00 ₽
          currency="RUB"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCf6vxvbIdi0clJLYjoFHFjPDCqeYFytNxAH8hrt1TjnxFzsUCURw0-gp4L10M8bHUF40&usqp=CAU"/>
      </main>
    </div>
  );
}

export default App;
