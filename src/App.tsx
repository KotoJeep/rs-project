import './App.scss';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import MainPage from './pages/MainPage/MainPage';
import AboutUs from './pages/AboutUs/AboutUs';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="about-us" element={<AboutUs />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
