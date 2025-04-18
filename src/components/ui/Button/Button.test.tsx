import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../../styles/theme';
import { Button } from './Button.styles';

describe('Button', () => {
  it('should render correctly', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Button>Test Button</Button>
      </ThemeProvider>
    );
    expect(container).toBeInTheDocument();
  });
});
