import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Checkout_ from "./components/checkout/Checkout_page";
import { count } from "console";
import { totalmem } from "os";
import {Provider} from 'react-redux'
import store from './Redux/store'
import BuyNowPage from "./components/buynowpage";
import Product from "./components/Product";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
  <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<App />} />
      <Route path="checkout" element={<Checkout_/>} />
      <Route path="buy_now" element={<BuyNowPage/>} />
      <Route path="Product" element={<Product/>} />
      {/* <Route path="buy_now_page" element={<buy_now_page />} /> */}
    </Routes>
  </BrowserRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
