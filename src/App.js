import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import Home from './pages/Home';
import CustomHeader from './components/CustomHeader';
import Page1 from './pages/Page1';

function App() {
  const [colorScheme, setColorScheme] = useState('light');
  const toggleColorScheme = () => {
    setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');
  }
  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider 
        theme={
          {
            loader: 'bars',
            colorScheme
          }
        } withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
          <CustomHeader />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/page1' element={<Page1 />} />
          </Routes>
        </BrowserRouter>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
