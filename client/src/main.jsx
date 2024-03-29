import React, { createContext } from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './app/App.jsx'
import Store from './app/store/store.js'
import CoinsData from './app/coinsData/coinsData.js'

const store = new Store();
const coinsArray = new CoinsData();


export const Context = createContext({
    coinsArray,
    store,
});

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Context.Provider value={{store}}>
             <App />
        </Context.Provider>
    </BrowserRouter>
)
