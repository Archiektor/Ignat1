import axios from 'axios';

export type CommonResponseType = {
    errorText: string,
    info: string,
    yourBody: {
        success: boolean,
    },
    yourQuery: Object,
}

export const instance = axios.create({
    baseURL: `https://neko-cafe-back.herokuapp.com/auth/test`,
})