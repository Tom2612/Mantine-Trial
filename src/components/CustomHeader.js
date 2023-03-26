import React from 'react';
import { Button, createStyles, Group, Header, Title, Burger, Drawer, Divider } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';

const useStyles = createStyles((theme) => ({
    link: {
        display: 'flex',
        alignItems: 'center',
        height: '100%',
        paddingLeft: theme.spacing.md,
        paddingRight: theme.spacing.md,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        fontWeight: 400,
        fontSize: theme.fontSizes.md,
    },
    hiddenMobile: {
        [theme.fn.smallerThan('sm')]: {
            display: 'none',
        },
    },
    hiddenDesktop: {
        [theme.fn.largerThan('sm')]: {
            display: 'none',
        },
    },
}))

export default function CustomHeader() {
    const { classes, theme } = useStyles();
    const [opened, { toggle, close }] = useDisclosure(false);
  return (
    <Header height={60} px='md'>
        <Group position='apart' sx={{ height: '100%' }}>
            <Title>OpenGroups</Title>
            <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                <a href='/' className={classes.link}>Home</a>
                <a href='/' className={classes.link}>Concerts</a>
            </Group>

            <Group position='center' px='md' className={classes.hiddenMobile}>
                <Button variant='default'>Login</Button>
                <Button>Signup</Button>
            </Group>
            <Burger opened={opened} onClick={toggle} className={classes.hiddenDesktop} />
        </Group>

        <Drawer opened={opened} onClose={close}>
            <Title>OpenGroups</Title>

            <Divider my='sm' />

            <a href='/' className={classes.link}>Home</a>
            <a href='/' className={classes.link}>Concerts</a>

            <Divider my='sm' />
            
            <Group position='center' grow pb='xl' px='md'>
                <Button variant='default'>Login</Button>
                <Button>Signup</Button>
            </Group>
        </Drawer>
    </Header>
  )
}
