import React from 'react';
import {Provider} from 'react-redux';
import {combineReducers, createStore} from 'redux';
import {v1} from 'uuid';
import {juniorAdvancedReducer, ListItemOptionType} from '../redux/juniorAdvanced-reducer';
import {juniorReducer} from '../redux/junior-reducer';
import {rangeReducer} from '../redux/range-reducer';
import {AppRootStateType} from '../redux/redux-store';

const rootReducer = combineReducers({
    junior: juniorReducer,
    range: rangeReducer,
    juniorAdvanced: juniorAdvancedReducer,
})

const initialGlobalState = {
    juniorAdvanced: {
        value: 'choose theme',
        listOfOptions: [
            {value: 'choose theme', key: v1()},
            {value: 'white', key: v1()},
            {value: 'dark', key: v1()},
            {value: 'green', key: v1()},
        ] as Array<ListItemOptionType>
    }
};

export const storyBookStore = createStore(rootReducer, initialGlobalState as AppRootStateType);

export const ReduxStoreProviderDecorator = (storeFn: any) => {
    return (<Provider store={storyBookStore}>{storeFn()}</Provider>)
}