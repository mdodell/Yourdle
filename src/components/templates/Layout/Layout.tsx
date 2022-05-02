import { useState } from 'react';

import { AppShell, Navbar, useMantineTheme, Text } from '@mantine/core';

import Header from '@organisms/Header';

interface LayoutProps {
	children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
	const theme = useMantineTheme();
	const [opened, setOpened] = useState(false);
	return (
		<AppShell
			styles={{
				main: {
					background:
						theme.colorScheme === 'dark'
							? theme.colors.dark[8]
							: theme.colors.gray[0],
					transition: 'padding-left 500ms ease',
				},
			}}
			navbarOffsetBreakpoint='sm'
			fixed
			header={<Header opened={opened} setOpened={setOpened} />}
			navbar={
				<Navbar
					width={{
						sm: opened ? 300 : 0,
						lg: opened ? 400 : 0,
					}}
					hiddenBreakpoint='sm'
					hidden={!opened}
					sx={{
						overflow: 'hidden',
						transition: 'width 500ms ease, min-width 500ms ease',
					}}
				>
					<Text p='md' sx={{ whiteSpace: 'nowrap' }}>
						Application navbar
					</Text>
				</Navbar>
			}
		>
			{children}
		</AppShell>
	);
}

export default Layout;
