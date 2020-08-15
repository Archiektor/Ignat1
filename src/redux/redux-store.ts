import {createStore, combineReducers} from 'redux';
import {juniorReducer} from './junior-reducer';
import {rangeReducer} from './range-reducer';
import {juniorAdvancedReducer} from './juniorAdvanced-reducer';

const rootReducer = combineReducers({
    junior: juniorReducer,
    range: rangeReducer,
    juniorAdvanced: juniorAdvancedReducer,
})

export const store = createStore(rootReducer);

export type AppRootStateType =  ReturnType<typeof rootReducer>;

// @ts-ignore
window.store = store;