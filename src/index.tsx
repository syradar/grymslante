import React, { Suspense, useEffect } from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GlobalStyles } from 'twin.macro';

import { i18n } from '@lingui/core';
import { I18nProvider } from '@lingui/react';
import { defaultLocale, dynamicActivate } from './i18n';

const Grymslante = () => {
  useEffect(() => {
    // With this method we dynamically load the catalogs
    dynamicActivate(defaultLocale);
  }, []);

  return (
    <React.StrictMode>
      <GlobalStyles />
      <I18nProvider i18n={i18n}>
        <App />
      </I18nProvider>
      {/* <Suspense fallback={<div>Loading...</div>}>
      </Suspense> */}
    </React.StrictMode>
  );
};

render(<Grymslante />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
