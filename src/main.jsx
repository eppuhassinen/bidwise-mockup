import { BrowserRouter as Router } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import './index.css'
import App from './App.jsx'

import store from './store'

createRoot(document.getElementById('root')).render(
  <Router future={{ v7_relativeSplatPath: true, v7_startTransition: true, }}>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)
