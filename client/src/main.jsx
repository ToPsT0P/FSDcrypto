import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App.jsx'
import Store from './app/store/store.js'


const store = new Store();

export const Context = createContext({
    store,
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Context.Provider value={{store}}>
             <App />
        </Context.Provider>
    </BrowserRouter>
)
