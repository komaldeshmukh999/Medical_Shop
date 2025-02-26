import { createContext } from "react";
const context=createContext(
    {medicineList:[],setmedicineList:()=>{},//for readability...
     totalquantity:"",
     totalPrice:"",
}
)
export default context