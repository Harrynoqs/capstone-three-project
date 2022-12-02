import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import NavBar from '../Components/navbar';

test('renders the NavBar correctly', () => {
  const { asFragment } = render(
    <NavBar />,
  );

  expect(asFragment()).toMatchSnapshot();
});
