export type ThemeType = 'dark' | 'red' | 'some'

export type ThemeReducerType = {
    theme: ThemeType
}

const initState: ThemeReducerType = {
    theme: 'dark',
};

export const themeReducer = (state: ThemeReducerType = initState, action: ReturnType<typeof changeThemeC>): ThemeReducerType => { // fix any
    switch (action.type) {
        case 'CHANGE-THEME': {
            return {
                ...state,
                theme: action.theme,
            };
        }
        default:
            return state;
    }
};

export const changeThemeC = (theme: ThemeType) => {
    return {
        type: 'CHANGE-THEME',
        theme,
    } as const;
};