import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import reducers from './reducers/index'
import thunk from 'redux-thunk'
import App from './containers/app'
import logger from 'react-logger'

const middleware = applyMiddleware(thunk);

const store = createStore(reducers,middleware);

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);