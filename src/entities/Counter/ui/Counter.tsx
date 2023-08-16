import { CustomButton } from '@/shared/ui/CustomButton'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'

export const Counter = () => {
    const dispatch = useDispatch()
    const counterValue = useSelector(getCounterValue)

    const inc = () => {
        dispatch(counterActions.increment())
    }
    const dec = () => {
        dispatch(counterActions.decrement())
    }
    return (
        <div>
            <h1
                data-testid = 'value-title'
            >{counterValue}</h1>
            <CustomButton data-testid = 'increment-btn' onClick={inc}>Increment</CustomButton>
            <CustomButton data-testid = 'decrement-btn' onClick={dec}>Decrement</CustomButton>
        </div>
    )
}
