import React from 'react';
import { Navbar, Button, Flex } from '@mantine/core';

export default function CustomNavbar() {
  return (
     <Flex
            direction='column'
            spacing='lg'
            grow
            sx={{ margin: 'auto 0 auto 0'}}
          >
            <Navbar.Section><Button variant='subtle' fullWidth>Home</Button></Navbar.Section>
            <Navbar.Section><Button variant='subtle' fullWidth>Login</Button></Navbar.Section>
            <Navbar.Section><Button variant='subtle' fullWidth>Signup</Button></Navbar.Section>
          </Flex>
  )
}
