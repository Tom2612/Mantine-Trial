import React, { useState } from 'react';
import { Container, TextInput, PasswordInput, Button, Loader, Title, Paper } from '@mantine/core';

export default function CustomForm() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading((prev) => !prev);
  }

  return (
    <Container size='xs'>
      <Paper shadow='sm' p='md' withBorder>
        <Title mb='md'>Log in</Title>
        <TextInput
          placeholder='email'
          label='Email'
          withAsterisk
          mb='md'
        ></TextInput>
        <PasswordInput
          placeholder='password'
          label='Password'
          withAsterisk
          mb='md'
        ></PasswordInput>
        <Button leftIcon={loading && <Loader size='sm' />} loading={loading} onClick={handleClick}>Log in</Button>
      </Paper>
    </Container>
    
  )
}
