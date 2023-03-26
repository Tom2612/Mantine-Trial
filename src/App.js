import React from 'react';
import CustomNavbar from './components/CustomNavbar';
import { AppShell, Navbar } from "@mantine/core";
import CustomForm from './components/CustomForm';
import CustomHeader from './components/CustomHeader';

function App() {
  return (
    <AppShell
      navbar={
        <Navbar
          width={{base : 300}}
          height='100vh'
        >
          <CustomNavbar />
        </Navbar>
      }
    >
      <CustomHeader />
      <CustomForm />
    </AppShell>
  );
}

export default App;
