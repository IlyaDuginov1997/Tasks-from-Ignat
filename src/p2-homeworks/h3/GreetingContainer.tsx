import React, {ChangeEvent, useState} from 'react';
import Greeting from './Greeting';
import {UserType} from './HW3';


type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('');
    const [error, setError] = useState<string | null>(null);

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (!!e.currentTarget.value) {
            setName(e.currentTarget.value);
            setError(null);
        } else {
            setError('Please, enter correct name');
        }
    };
    const addUser = () => {
        if (name) {
            alert(`Hello ${name}!`);
            addUserCallback(name)
            setError(null);
            setName('');
        } else {
            setError('Some troubles');
        }
    };
    const totalUsers = users.length;

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    );
};

export default GreetingContainer;
