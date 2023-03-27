import React, { useState } from 'react';
import { Container, TextInput, PasswordInput, Button, Loader, Title, Paper, Flex } from '@mantine/core';
import { useForm } from '@mantine/form';

export default function CustomForm() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const form = useForm({
    initialValues: {
      email: '',
      password: ''
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  const handleClick = () => {
    form.reset();
    setLoading((prev) => !prev);
    setError((prev) => !prev);
  }

  return (
    <Container size='xs' mt='lg'>
      <Paper shadow='sm' p='md' withBorder>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Title mb='md'>Log in</Title>
          <TextInput
            placeholder='email'
            label='Email'
            withAsterisk
            mb='md'
            error={error}
            {...form.getInputProps('email')}
          ></TextInput>
          <PasswordInput
            placeholder='password'
            label='Password'
            withAsterisk
            mb='md'
            {...form.getInputProps('password')}
          ></PasswordInput>
          <Button leftIcon={loading && <Loader size='sm' />} loading={loading} type='submit' onClick={handleClick}>Log in</Button>
        </form>
      </Paper>
    </Container>
  )
}
