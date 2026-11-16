import { StrictMode } from 'react'
import reactDOM from 'react-dom/client'
import '../node_modules/normalize.css/normalize.css'
import './index.css'
import './assets/fonts/fonts.css'
import App from './App.jsx'

// import reactor7font from './assets/fonts/reactor7.ttf'

const root = reactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <StrictMode>
    {/* <style>
      {`
        @font-face {
          font-family: 'reactor7';
          src: local('reactor7'), url(${reactor7font}) format('truetype');
        }
      `}
    </style> */}
    <App />
  </StrictMode>
);
