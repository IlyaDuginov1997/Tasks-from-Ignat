import React from 'react';
import {homeWorkReducerTest, Sort18Age, SortByNameAC, SortDownAC, SortUpAC} from '../homeWorkReducer';
import {UserType} from '../../HW8';

let initialState: UserType[];

beforeEach(() => {
    initialState = [
        {_id: 0, name: 'Кот', age: 3},
        {_id: 1, name: 'Александр', age: 66},
        {_id: 2, name: 'Коля', age: 16},
        {_id: 3, name: 'Виктор', age: 44},
        {_id: 4, name: 'Дмитрий', age: 40},
        {_id: 5, name: 'Ирина', age: 55},
    ];
});

test('sort name up', () => {
    const newState = homeWorkReducerTest(initialState, SortUpAC('up'));

    expect(newState.length).toBe(6);
    expect(newState[0].age).toBe(66);
    expect(newState[5].age).toBe(3);
});


test('sort name down', () => {
    const newState = homeWorkReducerTest(initialState, SortDownAC('down'));

    expect(newState.length).toBe(6);
    expect(newState[0].age).toBe(3);
    expect(newState[5].age).toBe(66);
});


test('check age 18', () => {
    const newState = homeWorkReducerTest(initialState, Sort18Age(18));

    expect(newState.length).toBe(4);
    expect(newState[0].age).toBe(66);
    expect(newState[3].age).toBe(55);
});

test('check by name', () => {
    const newState = homeWorkReducerTest(initialState, SortByNameAC('name'));

    expect(newState.length).toBe(6);
    expect(newState[0].name).toBe('Александр');
    expect(newState[5].name).toBe('Кот');
});



