import React from 'react'
import ReactDOM from 'react-dom/client'
import Garfish from 'garfish'
import App from './App'
import 'antd/dist/antd.css'
import './index.css'

import routes from './routes'

Garfish.run({
  basename: '/pay-ops',
  domGetter: '#sub-app',
  apps: routes,
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
