import React from "react";
import s from "./HW12.module.css";
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {changeThemeC, ThemeType} from './bll/themeReducer';

const themes = ['dark', 'red', 'some'];

function HW12() {
    const theme = useSelector<AppStoreType, ThemeType>(state => state.themeReducer.theme)
    const dispatch = useDispatch()

    const changeThemeCallback = (theme: ThemeType) => {
        dispatch(changeThemeC(theme))
    }

    return (
        <div className={s[theme]}>
            <hr/>
            <span className={s[theme + '-text']}>
                homeworks 12
            </span>

            <SuperSelect
                onChangeOption={changeThemeCallback}
                options={themes}/>

            {/*should work (должно работать)*/}
            {/*SuperSelect or SuperRadio*/}

            <hr/>
        </div>
    );
}

export default HW12;
