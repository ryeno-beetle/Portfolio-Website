import { StrictMode } from 'react'
import reactDOM from 'react-dom/client'
import '../node_modules/normalize.css/normalize.css'
import './index.css'
import './assets/fonts/fonts.css'
import App from './App.jsx'

const root = reactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
