import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from 'twin.macro';
import { I18nextProvider } from 'react-i18next';
import i18nReact from './i18n';

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <I18nextProvider i18n={i18nReact}>
      <Suspense fallback={'Loading...'}>
        <App />
      </Suspense>
    </I18nextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
