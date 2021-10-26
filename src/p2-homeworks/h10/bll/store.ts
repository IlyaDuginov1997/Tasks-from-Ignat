import {loadingReducer} from './loadingReducer'
import {applyMiddleware, combineReducers, createStore} from 'redux';
import {themeReducer} from '../../h12/bll/themeReducer';
import {checkBoxReducer} from '../../h13/bll/checkBoxReducer';
import thunkMiddleware from 'redux-thunk';


const reducers = combineReducers({
    isLoading: loadingReducer,
    themeReducer,
    checkBoxReducer,
})

export const store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store // for dev
