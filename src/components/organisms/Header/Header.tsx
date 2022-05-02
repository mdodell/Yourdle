import { Dispatch, SetStateAction } from 'react';

import {
	useMantineTheme,
	Header as MantineHeader,
	Burger,
	Text,
	Avatar,
	Group,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';

import ThemeSwitch from '@atoms/ThemeSwitch';

interface HeaderProps {
	opened: boolean;
	setOpened: Dispatch<SetStateAction<boolean>>;
}

function Header({ opened, setOpened }: HeaderProps) {
	const theme = useMantineTheme();

	const { t } = useTranslation('common');

	return (
		<MantineHeader height={70} p='md'>
			<Group grow>
				<Burger
					data-testid='burger'
					opened={opened}
					onClick={() => setOpened(!opened)}
					size='sm'
					color={theme.colors.gray[6]}
				/>
				<Text
					variant='gradient'
					gradient={{
						from: 'indigo',
						to: 'cyan',
						deg: 90,
					}}
					size='xl'
					weight='bolder'
					align='center'
				>
					{t('yourdle')}
				</Text>
				<Group position='right'>
					<Avatar color='blue' radius='xl' size='md'>
						MD
					</Avatar>
					<ThemeSwitch />
				</Group>
			</Group>
		</MantineHeader>
	);
}

export default Header;
