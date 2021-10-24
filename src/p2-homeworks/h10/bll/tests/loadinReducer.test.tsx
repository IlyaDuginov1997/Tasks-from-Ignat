import {loadingAC, loadingReducer, StateType} from '../loadingReducer';

let initialState: StateType;

beforeEach(() => {
    initialState = {
        isLoading: false,
    };
});

test('loading status should be true', () => {
    const newState = loadingReducer(initialState, loadingAC(true));

    expect(initialState.isLoading).toBe(false);
    expect(newState.isLoading).toBe(true);
});

