import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Ourstore from "./pages/Ourstore";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Wishlist from "./pages/Wishlist";
import ForgetPass from "./pages/ForgetPass";
import ResetPassword from "./pages/ResetPassword";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsAndCond from "./pages/TermsAndCond";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import SingleProduct from "./pages/SingleProduct";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path='signup' element={<Signup />} />
        <Route path='login' element={<Login />} />
        <Route path='store' element={<Ourstore />} />
        <Route path='store/product/:id' element={<SingleProduct />} />
        <Route path='contact' element={<Contact/>} />
        <Route path='wishlist' element={<Wishlist/>} />
        <Route path='forgetpass' element={<ForgetPass/>} />
        <Route path='ResetPassword' element={<ResetPassword/>} />
        <Route path='Privacy-policy' element={<PrivacyPolicy/>} />
        <Route path='Refund-policy' element={<RefundPolicy/>} />
        <Route path='Shipping-policy' element={<ShippingPolicy/>} />
        <Route path='terms-and-conditions' element={<TermsAndCond/>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
