import React from 'react';
import { useState, createContext, SetStateAction } from 'react';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Product } from './components/Product';
import { Slider } from './components/Slider';

interface IContext {
  products: number;
  setProducts: React.Dispatch<SetStateAction<number>>;
}

export const CartContext = createContext<IContext>({
  products: 0,
  setProducts: () => {}
});

function App() {
  const [products, setProducts] = useState<number>(0);

  return (
    <CartContext.Provider value={{ products, setProducts }}>
      <Header />
      <Product>
        <Slider />
        <Content />
      </Product>
    </CartContext.Provider>
  );
}

export default App;
