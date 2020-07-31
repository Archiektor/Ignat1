import {createStore, combineReducers} from 'redux';
import {juniorReducer} from './junior-reducer';

const rootReducer = combineReducers({
    junior: juniorReducer,
})

export const store = createStore(rootReducer);

export type AppRootStateType =  ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;