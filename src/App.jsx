import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      <Application />
    </div>
  )
}

function Application() {
  let source = [
    {
      "type": "Fancy Product",
      "price": "$40.00 - $80.00",
    },
    
    {
      "type": "Special Item",
      "stars": "⭐⭐⭐⭐⭐",
      "unprice": "$20.00",
      "price": "$18.00",
      "sale": "sale"
    },
    
    {
      "type": "Sale Item",
      "unprice": "$50.00",
      "price": "$25.00",
      "sale": "sale"
    },
    
    {
      "type": "Popular Item",
      "stars": "⭐⭐⭐⭐⭐",
      "price": "$40.00"
    },
    
    {
      "type": "Sale Item",
      "unprice": "$50.00",
      "price": "$25.00",
      "sale": "sale"
    },
    
    {
      "type": "Fancy Product",
      "price": "$120.00 - $280.00"
    },
    {
      "type": "Special Item",
      "stars": "⭐⭐⭐⭐⭐",
      "unprice": "$20.00",
      "price": "$20.00 $18.00",
      "sale": "sale"
    },
    
    {
      "type": "Popular Item",
      "stars": "⭐⭐⭐⭐⭐",
      "price": "$40.00"
    }
    
  ]

  let [count,setcount] = useState(0);
  
  return (
    <div className="container">
      <div className="navigation">
        <Navigation counting={count} setcount={setcount} />
      </div>
      <div className="title">
        <Title />
      </div>
      <div className="card">
        <Card source={source} setcount={setcount} counting={count} />
      </div>
    </div>
  );
}

function Navigation({ counting, setcount }) {
  return (
    <div className="nav-container">
      <p className='logo'>Start Boostrap</p>
      <button className='home'>Home</button>
      <button className='about'>About</button>
      <select name="" id="option-container">
        <option value="" defaultChecked>shop</option>
        <option value="all product">All Product</option>
        <option value="popular item">Popular Item</option>
        <option value="new arrivals">New Arrivals</option>
      </select>
      <div className='count-card'>
        <label>🛒Card</label>
        <label className='counting-part'>{ counting }</label>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="title-container">
      <h1>shop in style</h1>
      <h5>with this shop homepage template</h5>
    </div>
  );
}

function Card({source, setcount,counting}) {
    
  return (
    <div className="card-container">
      {source.map((value) => (<CardDetails source={ value } setcount={setcount} counting={counting} />))}
    </div>
  );
}

function CardDetails({source,counting,setcount}) {

  const [AddToCard,RemoveCard] = useState(true);
  let card_type = AddToCard ? "Add to Card" : "Remove Card";

  let cartcount = AddToCard ? counting+1 : counting-1;

  return (
    <div className="cardDetail-container">
      <div className="image-container">
        <span className='sale'>{ source.sale }</span>
      </div>
      <div className="contant-container">
        <div className='product-name'>
          <p>{ source.type }</p>
        </div>
        <div className='star-rating'>
          <p>{ source.stars }</p>
        </div>
        <div className='price'>
          <p className='unprice'>{ source.unprice }</p>
          <p className='final-price'>{ source.price }</p>
        </div>
      </div>
      <div className="button-container">
        <button className='add-button' onClick={(event) => { RemoveCard(!AddToCard); setcount(cartcount)}}>{ card_type }</button>
      </div>
    </div>
  );
}

export default App
