import React, { useState } from 'react';
import { Flex, Grid } from '@mantine/core';
import { DateInput } from '@mantine/dates';

export default function CustomFormV() {
    const [value, setValue] = useState(null);
  return (
    <Grid grow justify='center' align='center'>
      <Grid.Col span={4}>
        <Flex justify='center'>
            <DateInput 
                minDate={new Date()}
                value={value}
                onChange={setValue}
                label='Date'
                placeholder='Set Date'
                // valueFormat='DD MM YYYY'
                allowDeselect
                radius='xl'
                withAsterisk
            />
        </Flex>
      </Grid.Col>
      <Grid.Col span={4}><Flex justify='center'>3</Flex></Grid.Col>
      <Grid.Col span={4}><Flex justify='center'>4</Flex></Grid.Col>
      <Grid.Col span={4}><Flex justify='center'>5</Flex></Grid.Col>
    </Grid>
  )
}
