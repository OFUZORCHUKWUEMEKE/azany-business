import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App';
import reportWebVitals from './reportWebVitals';
import SignUp from './Auth/SignUp';
import EmailVerification from './Auth/EmailVerification';
import BusinessVerification from './Auth/BuisnessVerification';
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/emailVerification' element={<EmailVerification/>} />
        <Route path='/businessVerification' element={<BusinessVerification/>} />
        <Route path='/faq' element= {<Faq/>} />
        <Route path='/contact' element= {<Contact/>} />
        <Route path='/blog' element= {<Blog/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
