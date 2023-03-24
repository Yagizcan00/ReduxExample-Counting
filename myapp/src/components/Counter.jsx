import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { increment, decrement, incrementByAmount } from "../redux/counter/counterSlice"

export default function Counter() {

    const [amount, setAmount] = useState(3)

    const counterValue = useSelector(state => state.counter.value)
    const dispatch = useDispatch()

    return (
        <div>
            <h1> {counterValue} </h1>

            <button onClick={() => dispatch(decrement())}>Decrease</button>
            <button onClick={() => dispatch(increment())}>Increase</button>

            <br />
            <br />

            <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
            <button onClick={() => dispatch(incrementByAmount(amount))}>Increase</button>
        </div>
    )
}