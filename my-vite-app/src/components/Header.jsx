import React,{useState,useContext} from 'react'
import CartModal from './CartModal'
import context from '../context/context'
export default function Header() {
const[showCart,setShowCart]=useState(false) 
const{cart,totalquantity}=useContext(context)
// const totalquantity=cart.reduce((sum,medicine)=>{return parseInt(sum)+parseInt(medicine.quantity)},0)
// console.log(totalquantity)


return (
  <>
  <div className="nav">
  <h1>Admin Panel</h1>
  <button onClick={()=>{setShowCart(!showCart)}}>Cart{totalquantity}</button>
 </div>
   <div>
{showCart && <CartModal/>}
</div>
  
  </>
  
  )
}
