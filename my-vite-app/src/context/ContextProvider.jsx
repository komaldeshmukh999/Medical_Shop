import context from "./context";
import { useState } from "react";
import React from 'react'

// provider=>collect props
export default function ContextProvider(props) {

const [medicineList,setmedicineList]=useState([])//contain all detail of medicine
 const[cart,setCart]=useState([])//contain all detail of cart items.

 const [totalquantity,setTotalQuantity]=useState(0)
 const[totalPrice,setTotalPrice]=useState(0)


//addToCart function is used to updating quantity of medicine in cart by comparing id.
 function addToCart(newMedicine){
  const id=newMedicine.id
  let flag=true
 const updatedCart= cart.map((medicine)=>{
   if(medicine.id==id){
    //line 15 will update quantity
      medicine.quantity=parseInt(medicine.quantity)+parseInt(newMedicine.quantity)
      setTotalQuantity((prev)=>{
        return parseInt(prev)+parseInt(newMedicine.quantity)
       })
       setTotalPrice((prev)=>{
        return parseInt(prev)+parseInt(newMedicine.quantity)*parseInt(newMedicine.price)
       })
      flag=false
      return medicine
    }
    return medicine
  })
  
  //if flag is true means no id is matched add new medicine to cart
  if(flag)
  {
   setCart(previous=>[...previous,newMedicine])
   setTotalQuantity((prev)=>{
    return parseInt(prev)+parseInt(newMedicine.quantity)
   })
   setTotalPrice((prev)=>{
    return parseInt(prev)+parseInt(newMedicine.quantity)*parseInt(newMedicine.price)
   })
  }
  //if flag is false means id is matched update quantity with addTocart function and add updated cart
  else{
  setCart(updatedCart)
  }

 }
 //for increment of quantity
 function handleIncrement(id){
  let updatedcartforIncrement=cart.map((medicine)=>{
    if(medicine.id===id)
    {
      setTotalPrice((prev)=>{return parseInt(prev)+parseInt(medicine.price)})
      return {...medicine,quantity:parseInt(medicine.quantity)+1}
    }
    return medicine;

 })
 setCart(updatedcartforIncrement)
 }

  // For decrement of quantity
  function handleDecrement(id){
    let updatedcartfordecrement=cart.map((medicine)=>{
       if(medicine.id===id)
       {
       setTotalPrice((prev)=>{return parseInt(prev)-parseInt(medicine.price)})
        return {...medicine,quantity:parseInt(medicine.quantity)-1}
       }
       return medicine;
    })
    setCart(updatedcartfordecrement)
 }

 
 return <context.Provider value={{medicineList,setmedicineList,cart,addToCart,setCart,totalquantity,setTotalQuantity,totalPrice,setTotalPrice,handleDecrement,handleIncrement}}>
     {props.children}
  </context.Provider>
}
