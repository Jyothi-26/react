import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import AboutPage from './About';
import Branch from './Branch';
import Activities from './Activities'
import {BrowserRouter, Routes, Route, Link, } from 'react-router-dom';
import './App.css';

function Display(){
    return(
        <div>
        <center>
            <h1>
                Government CPC polytechnic, Ashoka Road, Mysuru
            </h1>
            
        <BrowserRouter>
            <Link to="/home">Home</Link>---- <Link to="/about">About</Link>----<Link to="/branch">Branch</Link>----<Link to="/activities">Activities</Link> 
            
        <Routes>
            <Route exact path="/home" element={<Home />}/>
            <Route exact path="/about" element={<AboutPage />}/>
            <Route exact path="/branch" element={<Branch />}/>
            <Route exact path="/activities" element={<Activities />}/>
        </Routes>
        </BrowserRouter>
        </center>
        </div>
    )

}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Display />)
  

