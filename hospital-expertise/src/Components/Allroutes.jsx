import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Medicinecard } from '../Pages/Medicines.jsx';
import Finddoctor from '../Pages/Finddoctor';


import { Appoiment } from '../Pages/Appoiment'
import Lobby from '../Callingapp/Lobby'
import MainRoom from '../Callingapp/MainRoom.jsx'
import { MyHome } from '../Pages/MyHome'
import { Heading } from '@chakra-ui/layout'
import SelectedDoctor from '../Pages/SelectedDoctor.jsx'
import PaymentComponent from '../Pages/PaymentPage.jsx'
import Medicineproducts from '../Pages/Medicineproducts.jsx'
import CartPage from '../Pages/Cartpage.jsx'
import ContactPage from '../Pages/ContactPage.jsx';
import { Admin } from '../Pages/Admin.jsx';

// import MainRoom from '../Callingapp/MainRoom'

export default function Allroutes() {

  return (
    <Routes>
    <Route path='/' element={<MyHome/>}/>
        <Route path="/medicine"  element={<Medicinecard/>}/>
        <Route path='/finddoctor' element={<Finddoctor/>}/>
        <Route path='/appointment' element={<Appoiment/>}/>
        <Route path='/calling' element={<Lobby/>}/>
        <Route path='/payment' element={<PaymentComponent/>}/>
        <Route path='/product' element={<Medicineproducts/>}/>
        <Route path='/cart' element={<CartPage/>}/>
        <Route path='/room/:roomId' element={<MainRoom/>}/>
        <Route path='/finddoctor/selectdoctor/:id' element={<SelectedDoctor/>}/>
        <Route path='/undercunstuction' element={<Heading>Page is under Cunstrustion</Heading>}/>
        <Route path='*' element={<Heading>Page Not Found 404</Heading>} />
       <Route path='/contact' element={<ContactPage />} />
			<Route path='/admin' element={<Admin />} />
        
        
    </Routes>
  )

}
