import React from 'react';
import { Button, createStyles, Group, Header, Title, Burger, Drawer, Divider, rem, ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';
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
        fontWeight: 500,
        fontSize: theme.fontSizes.md,

        [theme.fn.smallerThan('sm')]: {
            height: rem(42),
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        }
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
    const { classes } = useStyles();
    const [opened, { toggle, close }] = useDisclosure(false);
    const { colorScheme, toggleColorScheme } = useMantineColorScheme();
    const dark = colorScheme === 'dark';
  return (
    <Header height={60} px='md'>
        <Group position='apart' sx={{ height: '100%' }}>
            <Title>OpenGroups</Title>
            <Group sx={{ height: '100%' }} spacing={0} className={classes.hiddenMobile}>
                <a href='/' className={classes.link}>Home</a>
                <a href='/' className={classes.link}>Concerts</a>
                <a href='/page1' className={classes.link}>Page1</a>
            </Group>

            <Group position='center' px='md' className={classes.hiddenMobile}>
                <Button variant='default'>Login</Button>
                <Button>Signup</Button>
            </Group>
            <Burger opened={opened} onClick={toggle} className={classes.hiddenDesktop} />
            <ActionIcon 
                variant='outline' 
                color={dark ? 'yellow' : 'blue'}
                onClick={() => toggleColorScheme()}
                title='Toggle color scheme'
            >
                {dark ? <IconSun size='1.1rem' /> : <IconMoonStars size='1.1rem' />}
            </ActionIcon>
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
