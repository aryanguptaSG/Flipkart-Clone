import React  from 'react'
import avtar from "../images/avtar.jpg"
import {
    useParams
  } from "react-router-dom";

export default function Bill({item,total}) {
    const { quant } = useParams()
    return (
        <div className='Bill'>
            <div className='item-bill'>
                <h3 className='item-name'>Item Name : {item.name}</h3>
                <img className='item-image' src={avtar} alt="Item"></img>
                <h4 className='packet-quant'>Total Items : {quant}</h4>
            </div>
            <div className='bill'>
                <h4 className='packet-quant'>Total amount : {total}</h4>
                
                <button className='order-btn'>Place Order</button>
            </div>
        </div>
    )
}
