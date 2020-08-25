import {CommonResponseType, instance} from './api';

export const a = 1;

export const requestApi = {
    addPost: async (isChecked: boolean): Promise<CommonResponseType> => {
        try {
            const {data} = await instance.post(``, {success: isChecked});
            return data;
        } catch (e) {
            throw new Error(e);
        }
    }
}