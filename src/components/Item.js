import React , {useState} from 'react'
import avtar from "../images/avtar.jpg"
import { Link } from 'react-router-dom';

export default function Item({key ,item , setitem , settotal}) {
    console.log(key);
    const [Quantity, setQuantity] = useState("");
    const clicked =()=>{
        console.log(Quantity);
        setQuantity("");
        let quant = parseInt(Quantity);
        let extra = quant%item.number;
        var extracharge = parseInt((extra*4) - (extra*4*3)/100);
        var ans = (Quantity-extra)*4;
        ans = parseInt(ans - (ans*5)/100);
        var total = ans+extracharge;
        settotal(total);
        setitem(item.id);
        console.log(total);
    }
    return (
        <div className='Item'>
            <h3 className='item-name'>{item.name}</h3>
            <img className='item-image' src={avtar} alt="Item"></img>
            <h4 className='packet-quant'>Item in packet : {item.number}</h4>
            <input value={Quantity} className='user-input' placeholder='Enter Quantity' onChange={(e)=>{
                setQuantity(e.target.value)
            }}></input>
            <Link to={{pathname:`/bill/${Quantity}`}}>
                <button className='order-btn' onClick={clicked}>Order</button>
            </Link>
        </div>
    )
}

