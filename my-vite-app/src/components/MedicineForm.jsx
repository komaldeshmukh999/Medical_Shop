import React from 'react'
import { useState ,useContext} from "react"
import context from "../context/context"
import MedicineDetailCart from './MedicineDetailCart'
export default function MedicineForm() {
    let initialValue = {name: "", description: "", price: 0,id:""}

    //medicineData is used to save the medicine detail in the form of object.
    const [medicineData, setMedicineData] = useState(initialValue)
    const {setmedicineList}=useContext(context)

    // when we submit the form id is generated for every medicine object.
    function submitHandler(event) {
        event.preventDefault()
        setmedicineList((previousList)=>{
          return [...previousList,{...medicineData, id:Date.now()}]
        })
}

//using single handleChange function to handle all the field.
    function handleChange(event) {
        let name = event.target.name
        let value = event.target.value
        let newObj = { 
            // name: medicineData.name, 
            // description: medicineData.description,
            // price: medicineData.price ,
            ...medicineData,
            [name]:value
           }
        setMedicineData(newObj)
        
    }
//created form to save medicine Detail(name,price,description)
    return (
        <div className='container'>
            <form onSubmit={submitHandler}>
                 <label>Medicine Name</label>
                 <input type="text" name="name" onChange={handleChange} value={medicineData.name}/>
                <label>Description</label>
                <input type="text" onChange={handleChange} name="description" value={medicineData.description} />
                <label>Price</label>
                <input type="number" onChange={handleChange} name="price" value={medicineData.price} />
                <button type="submit">Add Medicine</button>
            </form>

        </div>
    )
}
