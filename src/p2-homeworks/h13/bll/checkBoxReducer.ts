import {Dispatch} from 'redux';
import {tasksFromIgnatAPI} from '../dal-API/RequestAPI';

const initState: CheckBoxStateType = {
    isChecked: false,
};

export type CheckBoxStateType = {
    isChecked: boolean
}

export type CheckBoxReducerType = ReturnType<typeof isCheckedAC>

export const checkBoxReducer = (state: CheckBoxStateType = initState, action: CheckBoxReducerType): CheckBoxStateType => {
    switch (action.type) {
        case 'IS-CHECKED': {
            return {...state, isChecked: action.isChecked};
        }
        default:
            return state;
    }
};

export const isCheckedAC = (isChecked: boolean) => {
    return {
        type: 'IS-CHECKED',
        isChecked
    } as const;
};

export const isCheckedTC = (isChecked: boolean) => {
    return (dispatch: Dispatch) => {
        tasksFromIgnatAPI.postCheckboxValue(isChecked)
            .then(res => {
                console.log(res);
                dispatch(isCheckedAC(isChecked));
            })
            .catch(err => console.log(err));
    };
};