import {UserType} from '../HW8';

export type AllReducerType = ReturnType<typeof SortUpAC>
    | ReturnType<typeof SortDownAC>
    | ReturnType<typeof Sort18Age>
    | ReturnType<typeof SortByNameAC>

const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
];

export const homeWorkReducerTest = (state: UserType[] = initialPeople, action: AllReducerType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'SORT-UP': {
            if (action.payload === 'up') {
                const newState = [...state];
                return newState.sort((a, b) => {
                    return b.age - a.age;
                });
            } else {
                return state;
            }
        }
        case 'SORT-DOWN': {
            if (action.payload === 'down') {
                const newState = [...state];
                return newState.sort((a, b) => {
                    return a.age - b.age;
                });
            } else {
                return state
            }
        }
        case 'SORT-18': {
            return state.filter(p => p.age >= 18);
        }
        case 'SORT-BY-NAME': {
            if (action.payload === 'name') {
                const newState = [...state];
                return newState.sort((a, b) => a.name > b.name ? 1 : -1)
            } else {
                return state
            }
        }
        default:
            return state;
    }
};

export const SortUpAC = (payload: string) => {
    return {
        type: 'SORT-UP',
        payload,
    } as const;
};

export const SortDownAC = (payload: string) => {
    return {
        type: 'SORT-DOWN',
        payload
    } as const;
};

export const Sort18Age = (payload: number) => {
    return {
        type: 'SORT-18',
        payload
    } as const;
};

export const SortByNameAC = (payload: string) => {
    return {
        type: 'SORT-BY-NAME',
        payload
    } as const;
};