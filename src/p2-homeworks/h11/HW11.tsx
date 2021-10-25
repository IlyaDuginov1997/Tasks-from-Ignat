import React, {useState} from 'react';
import Slider, {Range} from 'rc-slider';
import 'rc-slider/assets/index.css';
import styles from './HW11.module.css';


function HW11() {
    const [value1, setValue1] = useState(20);
    const [value2, setValue2] = useState(80);

    const onChangeSliderValue = (value: number) => {
        const valueMin = Math.min(Number(value), value2);
        setValue1(valueMin);
        console.log(value);
    };

    const onChangeRangeValue = (values: number[]) => {
        setValue1(values[0]);
        setValue2(values[1]);
    };


    return (
        <div>
            <hr/>

            <div className={styles.mainContainer}>

                homeworks 11
                <span>{value1}</span>
                <Slider
                    onChange={onChangeSliderValue}
                    min={0}
                    max={100}
                    value={value1}
                />

                <span>{value1}</span>
                <Range
                    min={0}
                    max={100}
                    onChange={onChangeRangeValue}
                    value={[value1, value2]}
                    allowCross={false}/>
                <span>{value2}</span>


                <hr/>
                {/*для личного творчества, могу проверить*/}
                {/*<AlternativeSuperRange/>*/}
                {/*<AlternativeSuperDoubleRange/>*/}
            </div>
            <hr/>

        </div>

    );
}

export default HW11;