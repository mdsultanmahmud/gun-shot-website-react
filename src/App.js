
import { useState } from 'react';
import './App.css';
import AllGun from './components/AllGun/AllGun';
import Navbar from './components/Navbar/Navbar';

function App() {
let [count, setCount] = useState(0)
let [prevPrice, setprevPrice] = useState(0)
let newPrice = 0
const addToCart = (price) => {
  count++
  newPrice = prevPrice + Number(price)
  setCount(count)
  setprevPrice(newPrice)
  localStorage.setItem('price', prevPrice)
  localStorage.setItem('cartItem', count)
}
  return (
    <div className="App">
      <Navbar count = {count} price={prevPrice}></Navbar>
      <h2 className='uppercase text-2xl my-4'>Welcome To our shot gun store</h2>
      <AllGun addToCart = {addToCart}></AllGun>
    </div>
  );
}


export default App;
