import SuperCheckbox from '../h4/common/c3-SuperCheckbox/SuperCheckbox';
import SuperButton from '../h4/common/c2-SuperButton/SuperButton';
import {useDispatch, useSelector} from 'react-redux';
import {AppStoreType} from '../h10/bll/store';
import {isCheckedAC, isCheckedTC} from './bll/checkBoxReducer';

function HW13() {
    // bll-layer in h10/bll

    const isChecked = useSelector<AppStoreType, boolean>(state => state.checkBoxReducer.isChecked);
    const dispatch = useDispatch();

    console.log(isChecked);

    const postCheckboxValue = () => {
        dispatch(isCheckedTC(isChecked))
    }

    const changeCheckBoxValue = (valueIsCheked: boolean) => {
        dispatch(isCheckedAC(valueIsCheked))
    }

    return (
        <div>
            <SuperButton onClick={postCheckboxValue}>
                Click
            </SuperButton>
            <SuperCheckbox
                onChangeChecked={changeCheckBoxValue}
                checked={isChecked}
            />
        </div>
    );
}

export default HW13;
