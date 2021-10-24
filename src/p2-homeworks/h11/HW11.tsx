import React, {useState} from 'react';
import Slider, { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './HW11.module.css'

function HW11() {
    const [value1, setValue1] = useState(0);
    const [value2, setValue2] = useState(100);

    return (
        <div className={styles.main}>
            <hr/>
            homeworks 11
            {/*<Slider min={0} max={100}/>*/}
            {/*<Range/>*/}
            {/*should work (должно работать)*/}
            {/*<div>*/}
            {/*    <span>{value1}</span>*/}
            {/*    <SuperRange*/}
            {/*        // сделать так чтоб value1 изменялось*/}
            {/*    />*/}
            {/*</div>*/}

            {/*<div>*/}
            {/*    <span>{value1}</span>*/}
            {/*    <SuperDoubleRange*/}
            {/*        // сделать так чтоб value1 и value2 изменялось*/}
            {/*    />*/}
            {/*    <span>{value2}</span>*/}
            {/*</div>*/}

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    );
}

export default HW11;
