import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import App from './components/App/App';
import { GlobalStyle } from './styles/global';
import { theme } from './styles/theme';

// Elemento raiz com verificação de tipo seguro
const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Failed to find the root element');

const root = ReactDOM.createRoot(rootElement);

// Componente de Error Boundary (opcional mas recomendado)
class ErrorBoundary extends React.Component<{children: React.ReactNode}, {hasError: boolean}> {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error('App crashed:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return <div style={{padding: '2rem', textAlign: 'center'}}>
        <h1>Algo deu errado</h1>
        <p>Recarregue a página ou tente novamente mais tarde</p>
      </div>;
    }
    return this.props.children;
  }
}

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ErrorBoundary>
        <GlobalStyle />
        <App />
      </ErrorBoundary>
    </ThemeProvider>
  </React.StrictMode>
);