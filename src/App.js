import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CustomHeader from './components/CustomHeader';
import Page1 from './pages/Page1';

function App() {
  return (
    <div className='app'>
      <BrowserRouter>
        <CustomHeader />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/page1' element={<Page1 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
