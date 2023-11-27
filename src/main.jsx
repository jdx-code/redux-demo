import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import rootReducer from './services/reducers/index'

const store = createStore(rootReducer)
console.warn("store data", store)
//

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>    
  </React.StrictMode>,
)
