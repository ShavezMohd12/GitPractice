import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';

test('should fail because text does not exist', () => {
  render(<App />);
  expect(screen.getByText('Welcome to React')).toBeInTheDocument();
});