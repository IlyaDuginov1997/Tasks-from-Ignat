const initState: StateType = {
    isLoading: false,
};

export type StateType = {
    isLoading: boolean
}

export type LoadingReducerType = ReturnType<typeof loadingAC>

export const loadingReducer = (state: StateType = initState, action: LoadingReducerType): StateType => {
    switch (action.type) {
        case 'LOADING': {
            return {...state, isLoading: action.status}
        }
        default:
            return state;
    }
};

export const loadingAC = (status: boolean) => {
    return {
        type: 'LOADING',
        status
    } as const;
};