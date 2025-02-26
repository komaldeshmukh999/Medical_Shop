import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ContextProvider from './context/ContextProvider'
import MedicineForm from './components/MedicineForm'
import MedicineDetailCart from './components/MedicineDetailCart'
import Header from './components/Header'
function App() {
  return (
    <ContextProvider>
      <div >
      <Header/>
      <header>
        <MedicineForm />
      </header>
      <MedicineDetailCart />
      </div>
      
    </ContextProvider>
  )
}

export default App
