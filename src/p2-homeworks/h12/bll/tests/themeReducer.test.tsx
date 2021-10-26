import {changeThemeC, themeReducer, ThemeReducerType} from '../themeReducer';

let initialState: ThemeReducerType;

beforeEach(() => {
    initialState = {
        theme: 'dark',
    };
});

test('theme should be changed', () => {
    const newState = themeReducer(initialState, changeThemeC('some'));

    expect(initialState.theme).toBe('dark');
    expect(newState.theme).toBe('some');
});

