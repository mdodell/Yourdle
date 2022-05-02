import Header from '@organisms/Header';
import { render, fireEvent } from '@utils/tests/wrapperUtils';

describe('Header', () => {
	it('should call setOpened', () => {
		const setOpenedSpy = jest.fn();
		const opened = false;

		const { getByTestId } = render(
			<Header opened={opened} setOpened={setOpenedSpy} />
		);

		const button = getByTestId('burger');

		fireEvent.click(button);

		expect(setOpenedSpy).toBeCalledWith(!opened);
	});
});
