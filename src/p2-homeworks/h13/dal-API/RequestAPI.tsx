import React from 'react';
import axios from 'axios';

export type postCheckboxValue = {
    errorText: string
    info: string
    yourBody:
        { success: boolean }
    success: boolean
    yourQuery: {}
}

const instance = axios.create({
    baseURL: 'https://neko-cafe-back.herokuapp.com/',
});

export const tasksFromIgnatAPI = {
    postCheckboxValue(isChecked: boolean) {
        return instance.post<postCheckboxValue>('auth/test', {success: isChecked})
            .then(res => {
                return res.data;
            })
            .catch(error => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message
                );
            })
            .finally(() => console.log('Hey'));
    }
};

