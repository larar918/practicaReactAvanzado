import  { combineReducers, createStore } from 'redux';
import { devToolsEnhancer } from '@redux-devtools/extension';
import * as actionCreators from './actions'
import * as reducers from './reducers'

export default function configureStore(preloadedState){
    const store = createStore(
        combineReducers(reducers),
        preloadedState,
        devToolsEnhancer({ actionCreators }), // Uso de las devtools
    )
    return store;
}