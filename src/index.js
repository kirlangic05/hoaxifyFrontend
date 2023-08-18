import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap-override.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import UserSignupPage from './pages/UserSignupPage';
import LoginPage from './pages/LoginPage';
import './i18n';
import LanguageSelection from './components/LanguageSelection';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
    <LoginPage />
    <LanguageSelection />

    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
