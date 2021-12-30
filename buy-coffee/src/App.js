import './App.css';
import Landing from './screens/Landing';
import Login from './screens/Login';
import Signup from './screens/Signup';
import PrivateRoute from './screens/ProtectedPage';
import { BrowserRouter, Route  } from "react-router-dom";
import React from 'react';

function App() {
  return (
    <BrowserRouter>
      <Route path="/" element={<Landing />} />
      <PrivateRoute path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </BrowserRouter>
  );
}

export default App;
