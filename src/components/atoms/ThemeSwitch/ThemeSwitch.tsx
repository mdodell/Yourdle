import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { Moon, Sun } from 'tabler-icons-react';

function ThemeSwitch() {
	const { colorScheme, toggleColorScheme } = useMantineColorScheme();

	const light = colorScheme === 'light';

	return (
		<ActionIcon
			variant='default'
			size='lg'
			radius='sm'
			onClick={() => toggleColorScheme()}
		>
			{light ? <Sun /> : <Moon />}
		</ActionIcon>
	);
}

export default ThemeSwitch;
