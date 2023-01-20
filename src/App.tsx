import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AboutPage } from './pages/AboutPage/AboutPage';
import InfoPage from './pages/AboutPage/InfoPage';
import ReviewPage from './pages/AboutPage/ReviewPage';
import FAQPage from './pages/FAQPage';
import Form from './pages/for';
import { MainPage } from './pages/MainPage';
import { MyTransfersPage } from './pages/MyTransfersPage';
import AgeInfo from './pages/ordered/AgeInfoPage';
import CancelChangePage from './pages/ordered/CancelChange';
import DateTime from './pages/ordered/DateTime';
import FinalPage from './pages/ordered/FinalPage';
import { OrderedPage } from './pages/ordered/OrderedPage';
import SelectPage from './pages/ordered/SelectPage';
import OrderPage from './pages/OrderPage';
import SharePage from './pages/SharePage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/share" element={<SharePage />} />
        <Route path="/transfers" element={<MyTransfersPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/transfers/ordered" element={<OrderedPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/about/info" element={<InfoPage />} />
        <Route path="/about/review" element={<ReviewPage />} />
        <Route path="/transfers/ordered/:id" element={<CancelChangePage />} />
        <Route path="/transfers/ordered/:id/change" element={<SelectPage />} />
        <Route path="/transfers/ordered/:id/change/age" element={<AgeInfo />} />
        <Route path="/transfers/ordered/:id/change/date" element={<DateTime />} />
        <Route path="/transfers/ordered/:id/final" element={<FinalPage />} />
        <Route path="/kek" element={<Form />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
