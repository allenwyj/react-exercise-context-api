import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import { CartProvider } from './providers/cart/cart.provider';

import './index.css';
import App from './App';

// Wrapping all components inside the CartProvider,
// so the context of the provider can be accessed by the wrapped components.
ReactDOM.render(
  <CartProvider>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </CartProvider>,
  document.getElementById('root')
);
