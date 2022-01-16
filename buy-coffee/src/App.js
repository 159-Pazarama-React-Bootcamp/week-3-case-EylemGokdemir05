import './App.css';
import Landing from './screens/Landing';
import Login from './screens/Login';
import Signup from './screens/Signup';
import PrivateRoute from './screens/ProtectedPage';
import { Routes, Route  } from "react-router-dom";
import React from 'react';
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./configs/firebaseConfig";
import Home from './screens/Home';

function App() {
  initializeApp(firebaseConfig);
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/login" element={<Login>
        <PrivateRoute />
      </Login>} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
