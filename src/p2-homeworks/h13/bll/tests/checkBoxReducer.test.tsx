import {checkBoxReducer, CheckBoxStateType, isCheckedAC} from '../checkBoxReducer';

let initialState: CheckBoxStateType;

beforeEach(() => {
    initialState = {
        isChecked: false,
    };
});

test('checkbox status should be changed', () => {
    const newState = checkBoxReducer(initialState, isCheckedAC(true));

    expect(initialState.isChecked).toBe(false);
    expect(newState.isChecked).toBe(true);
});

