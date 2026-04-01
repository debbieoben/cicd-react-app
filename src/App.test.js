import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

test('renders Advanced CI/CD Pipeline text', () => {
  render(<App />);
  const element = screen.getByText(/Advanced CI\/CD Pipeline/i);
  expect(element).toBeInTheDocument();
});

test('renders Deployment Successful text', () => {
  render(<App />);
  const element = screen.getByText(/Deployment Successful/i);
  expect(element).toBeInTheDocument();
});
