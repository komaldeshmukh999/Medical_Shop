import React from 'react'
import {useContext} from "react"
import context from "../context/context"
export default function CartModal() {
const{cart,setCart,totalPrice,setTotalQuantity,setmedicineList,handleDecrement,handleIncrement}=useContext(context)
//Calculating totalprice
// const totalPrice=cart.reduce((sum,medicine)=>{return parseInt(sum)+(parseInt(medicine.price)*parseInt(medicine.quantity))},0)
function handleGenerateBill(){
setCart([])
setTotalQuantity(0)
setmedicineList([])
}

//it will render the cart items.
return(
   <div className="shadow">
      <div className='container'>
   {cart.length!==0 && <div>
      <table>
         <thead>
            <td>Name</td>
            <td>Description</td>
            <td>Price</td>
            <td>Quantity</td>
         </thead>
    <tbody>
    {cart.map((medicine)=>{
    return <tr>
      <td>{medicine.name}</td>
      <td>{medicine.description}</td>
      <td>{medicine.price}</td>
      <td>
         <button className="cartButton" onClick={()=>handleIncrement(medicine.id)}>+</button>
         {medicine.quantity}
         <button className="cartButton" onClick={()=>handleDecrement(medicine.id)}>-</button>
      </td>
     </tr>
    })}
    </tbody>
    <tfoot>
      <tr>
         <td></td>
         <td></td>
         <td colSpan={2}>Total:{totalPrice}</td>
      </tr>
    </tfoot>
    </table>
    
    <button onClick={handleGenerateBill}>GenerateBill</button>
     </div>}
   </div>  
   </div>
   
)
}
 
