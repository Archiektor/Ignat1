import {CommonResponseType, instance} from './api';

export const requestApi = {
    addPost: async (isChecked: boolean): Promise<CommonResponseType> => {
        const {data} = await instance.post(``, {success: isChecked});
        return data;
    }
}