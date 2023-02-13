const source = [
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
            "type":"Sale Item",
            "price":"$50.00 $25.00",
            "sale":"sale"
        },

        {
            "type":"Popular Item",
            "stars":"⭐⭐⭐⭐⭐",
            "price":"$40.00"
        },

            {
            "type":"Sale Item",
            "price":"$50.00 $25.00",
            "sale":"sale"
        },

            {
            "type":"Fancy Product",
            "price":"$120.00 - $280.00"
        },
            {
            "type":"Special Item",
            "stars":"⭐⭐⭐⭐⭐",
            "price":"$20.00 $18.00",
            "sale":"sale"
        },

        {
            "type":"Popular Item",
            "stars":"⭐⭐⭐⭐⭐",
            "price":"$40.00"
        }

    ]

function Shop_card({data,cardCount}){
const [show, setshow] = useState(true);
const showCard = {
display: show ? 'block' : 'none',
};

return(
<div className="mainbox">
<div className="shop_card">
<div className="pic">
<span className='sale'>{data.sale}</span>
</div>
<div className='pricecant'>
<h3 className="heading">{data.type}</h3>
<p className="rating">{data.stars}</p>
<p className="price"><span>{data.unprice}</span>{data.price}</p>
</div>

        <div className="btn">
          <button onClick={cardCount} /*onClick={() => setshow(!show)}*/ style={showCard} className='view'>Add Cart</button>
        </div>
      </div>
    </div>

);
}

// function Nevibar(){
// return(
// <div className="nev_bar">
// <p className='logo'>Strat Boostrap</p>
// <p>Home</p>
// <p>About</p>
// <select name="shop" id="">
// <option value="">Shop</option>
// <option value="hello">hello</option>
// </select>
// <div className='card_count'>
// <p className='nev_icon'>Cart</p>
// <p className='count'>0</p>
// </div>
// </div>
// )
// }

// function Heading(){
// return(
// <div className="heading_page">
// <p className="first_head">Shop in style</p>
// <p className="second_head">With this shop homepage template</p>
// </div>
// );
// }
