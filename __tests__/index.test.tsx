import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import { WithMST } from './before';

describe('Home', () => {
  it('renders a heading', () => {
    render(<WithMST child={Home} />);

    const heading = screen.getByRole('heading', {
      name: 'My Photos',
    });

    expect(heading).toBeInTheDocument();
  });
});
