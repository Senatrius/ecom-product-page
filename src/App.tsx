import { useState } from 'react';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { Product } from './components/Product';
import { Slider } from './components/Slider';

function App() {
  const [products, setProducts] = useState<number>(2);
  return (
    <>
      <Header products={products} />
      <Product>
        <Slider />
        <Content />
      </Product>
    </>
  );
}

export default App;
