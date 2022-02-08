import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Enquires from "./components/Enquires";
import Header from "./components/Header";



ReactDOM.render(

    <BrowserRouter>
        <Routes>
            <Route index element={<App />}/>
            <Route path="/AboutUs" element={<AboutUs />} />
            <Route path="/Enquires" element={<Enquires />} />
        </Routes>
    </BrowserRouter>,

  document.getElementById('root')
);

