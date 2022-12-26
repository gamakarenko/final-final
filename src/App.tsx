import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FAQPage from './pages/FAQPage';
import {MainPage} from './pages/MainPage';
import { MyTransfersPage } from './pages/MyTransfersPage';
import OrderPage from './pages/OrderPage';
import SharePage from './pages/SharePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/order' element={<OrderPage/>}/>
        <Route path='/share' element={<SharePage/>}/>
        <Route path='/transfers' element={<MyTransfersPage/>}/>
        <Route path='/faq' element={<FAQPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
