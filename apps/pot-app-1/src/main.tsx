import React from 'react'
import ReactDOM from 'react-dom/client'
import { reactBridge } from '@garfish/bridge-react-v18';
import App from './App'
import './index.css'

if (!window.__GARFISH__) {
  ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}

export const provider = reactBridge({
  el: '#root',
  rootComponent: App,
  errorBoundary: (e: any) => <div>Error</div>,
});

if (window.__GARFISH__ && typeof __GARFISH_EXPORTS__ !== 'undefined') {
  // eslint-disable-next-line no-undef
  __GARFISH_EXPORTS__.provider = provider;
}
