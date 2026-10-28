import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

if (typeof window !== 'undefined' && window.trustedTypes && window.trustedTypes.createPolicy) {
  try {
    if (!window.trustedTypes.defaultPolicy) {
      window.trustedTypes.createPolicy('default', {
        createHTML: (string) => string,
        createScriptURL: (string) => string,
        createScript: (string) => string,
      });
    }
  } catch (_) {
    // Default policy already exists
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
