import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from 'react-bootstrap'
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Container className='py-3'>     
            <Routes>
              <Route path='/' element={<HomeScreen/>} />
              <Route path='/product/:id' element={<ProductScreen/>} />
            </Routes>   
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
