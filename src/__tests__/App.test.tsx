import React from 'react'
import { cleanup, render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

afterEach(() => cleanup());

describe('testing routes', () => {
  test('testing initial page', () => {
    render(<MemoryRouter>
      <App />
    </MemoryRouter>);

    expect(screen.getByText(/A long time ago in a galaxy far, far away.../i)).toBeInTheDocument();

  });

  test('testing 404 page', () => {
    render(<MemoryRouter initialEntries={['/not-existing-page']}>
      <App />
    </MemoryRouter>);

    expect(screen.getByText(/These aren't the droids you're looking for/i)).toBeInTheDocument();

  });

  test('testing movie page', () => {
    render(<MemoryRouter initialEntries={['/movie/1']}>
      <App />
    </MemoryRouter>);

    expect(screen.getByTestId('movieContainer')).toBeInTheDocument();

  });
});