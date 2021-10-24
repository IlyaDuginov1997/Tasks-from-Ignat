import React, {useState} from 'react';
import {homeWorkReducerTest, Sort18Age, SortByNameAC, SortDownAC, SortUpAC} from './bll/homeWorkReducer';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import styles from './HW8.module.css';

export type UserType = {
    _id: number
    name: string
    age: number
}

const initialPeople: UserType[] = [
    {_id: 0, name: 'Кот', age: 3},
    {_id: 1, name: 'Александр', age: 66},
    {_id: 2, name: 'Коля', age: 16},
    {_id: 3, name: 'Виктор', age: 44},
    {_id: 4, name: 'Дмитрий', age: 40},
    {_id: 5, name: 'Ирина', age: 55},
];

function HW8() {
    const [people, setPeople] = useState<UserType[]>(initialPeople);

    const finalPeople = people.map((p: UserType) => (
        <div key={p._id} className={styles.peopleContainer}>
            <div>
                {p.name}
            </div>
            <div>
                {p.age}
            </div>
        </div>
    ));

    const sortUp = () => setPeople(homeWorkReducerTest(initialPeople, SortUpAC('up')));
    const sortDown = () => setPeople(homeWorkReducerTest(initialPeople, SortDownAC('down')));
    const sortAge18 = () => setPeople(homeWorkReducerTest(initialPeople, Sort18Age(18)));
    const sortByName = () => setPeople(homeWorkReducerTest(initialPeople, SortByNameAC('name')));

    return (
        <div>
            <hr/>
            homeworks 8
            <div className={styles.mainContainer}>

                <div className={styles.peoplesContainer}>
                    {finalPeople}
                </div>

                <div className={styles.buttonContainer}>
                    <div><SuperButton onClick={sortUp}>sort up</SuperButton></div>
                    <div><SuperButton onClick={sortDown}>sort down</SuperButton></div>
                    <div><SuperButton onClick={sortAge18}>check 18</SuperButton></div>
                    <div><SuperButton onClick={sortByName}>sort by name</SuperButton></div>
                </div>
            </div>
            <hr/>
        </div>

    );
}

export default HW8;
