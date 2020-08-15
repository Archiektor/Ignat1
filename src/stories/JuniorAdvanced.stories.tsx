import React from 'react';
import {Meta} from '@storybook/react/types-6-0';
import {ReduxStoreProviderDecorator} from './ReduxStoreProviderDecorator';
import JuniorAdvanced from '../components/junior+/juniorAdvanced';

export default {
    title: 'JuniorAdvanced',
    component: JuniorAdvanced,
    decorators: [ReduxStoreProviderDecorator],
} as Meta;

export const JuniorAdvancedBaseExample = (props: any) => {
    /*    const value = useSelector<AppRootStateType, string>(state => state.juniorAdvanced.value);

        useEffect(() => {
            action('theme changed');
        }, [value])*/

    return (
        <JuniorAdvanced/>
    )
}