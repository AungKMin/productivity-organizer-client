import { AUTH } from '../constants/actionTypes';
import * as api from '../api';

export const signin = (formData, history) => async (dispatch) => { 
    try {
        const { data } = await api.signIn(formData);
        const action = {
            type: AUTH,
            data
        }
        dispatch(action);

        history.push('/');
    } catch (error) {
        console.log(error);
    }
};

export const signup = (formData, history) => async (dispatch) => { 
    try {
        const { data } = await api.signUp(formData);
        const action = {
            type: AUTH,
            data
        }
        dispatch(action);

        history.push('/');
    } catch (error) {
        console.log(error);
    }
};