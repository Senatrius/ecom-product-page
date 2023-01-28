import { Content } from './components/Content';
import { Header } from './components/Header';
import { Product } from './components/Product';
import { Slider } from './components/Slider';

function App() {
  return (
    <>
      <Header />
      <Product>
        <Slider />
        <Content />
      </Product>
    </>
  );
}

export default App;
