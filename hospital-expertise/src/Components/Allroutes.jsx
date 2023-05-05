import React from 'react'
import {Routes,Route} from "react-router-dom"
import Medicines from '../Pages/Medicines'
import Finddoctor from '../Pages/Finddoctor'
import Home from '../Pages/Home'

export default function Allroutes() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
        <Route path="/medicine"  element={<Medicines/>}/>
        <Route path='/finddoctor' element={<Finddoctor/>}/>
    </Routes>
  )
}
