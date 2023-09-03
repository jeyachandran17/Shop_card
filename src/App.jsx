import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { display } from '@mui/system';

export default function App(){
  let source = [
    {
    "type":"Fancy Product",
    "price":"$40.00 - $80.00",
    },
    
        {
            "type":"Special Item",
            "stars":"⭐⭐⭐⭐⭐",
            "unprice":"$20.00",
            "price":"$18.00",
            "sale":"sale"
        },
    
        {
            "type": "Sale Item",
            "unprice":"$50.00",
            "price":"$25.00",
            "sale":"sale"
        },
    
        {
            "type":"Popular Item",
            "stars":"⭐⭐⭐⭐⭐",
            "price":"$40.00"
        },
    
            {
              "type": "Sale Item",
              "unprice":"$50.00",
            "price":"$25.00",
            "sale":"sale"
        },
    
            {
            "type":"Fancy Product",
            "price":"$120.00 - $280.00"
        },
            {
            "type":"Special Item",
            "stars":"⭐⭐⭐⭐⭐",
            "unprice":"$20.00",
            "price":"$20.00 $18.00",
            "sale":"sale"
        },
    
        {
            "type":"Popular Item",
            "stars":"⭐⭐⭐⭐⭐",
            "price":"$40.00"
        }
    
    ]

    const [ count, setcount] = useState(0);

  return(
    <div className="App">
      <div className="nevigation">
        <NevBar count={count} />
      </div>
      <div className="titleCard">
        <Title />
      </div>
      <div className="shopCard">
        {source.map((value) => (<AddCard data={value} count={ count} setcount={setcount} />))}
      </div>
    </div>
  );
}


function AddCard({ data, count, setcount }) {

  const [addCard, removeCard] = useState(true)

  const card_type = addCard ? 'Add Card' : 'Remove Card';
  let addcartCount = addCard ? count+1 : count-1

  return(
    <div className="addCard">
      <div className="card-img">
        <span className='sale'>{data.sale}</span>
      </div>
      <div className="card-priceTag">
        <p>{data.type}</p>
        <p>{data.stars}</p>
        <p><span className='unprice'>{data.unprice} </span>{data.price}</p>
      </div>
      <div className="card-btn">
        <button className='add-btn' onClick={(event) => { removeCard(!addCard); setcount(addcartCount);}}>{ card_type}</button>
      </div>
    </div>
  );
}

function NevBar({count}){
  const [show, setshow] = useState(true)
  
  const Option = {
    display: show ?"block": "none",
  }

  return(
    <div className="nevigationBar">
      <div className="nevContainer_1">
        <p className='logo'>Start Boostrap</p>
        <button className='nev-btn1'>Home</button>
        <button className='nev-btn1'>About</button>
        {/* <button className='nev-btn2' onClick={() => setshow(!show)} >Shop <ArrowDropDownIcon /></button>  */}
        <select style={Option} className='nev-btn2'>
          <option>shop</option><br />
          <option>All Product</option><br/> 
          <option>Popular Item</option><br/>  
          <option>New Arrivals</option>
        </select>
      </div>
      <div className="nevContainer_2">
        <p className='count_btn'>🛒Card <p className='count'>{count}</p></p>
      </div>
    </div>
  );
}


function Title(){
  return(
    <div className="title-container">
      <h1 className='title-txt1'>shop in style</h1>
      <h5 className='title-txt2'>with this shop homepage template</h5>
    </div>
  );
}
