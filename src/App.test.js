import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CI/CD Pipeline heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Advanced CI\/CD Pipeline/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders deployment successful message', () => {
  render(<App />);
  const successElement = screen.getByText(/Deployment Successful/i);
  expect(successElement).toBeInTheDocument();
});
