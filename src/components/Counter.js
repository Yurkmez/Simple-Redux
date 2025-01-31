import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import {
    increment,
    decrement,
    incrementByAmount,
    selectCount,
} from '../store/reducer/counterSlice';
import styles from './Counter.module.css';

function Counter() {
    const count = useSelector(selectCount);
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div>
            <h1>Counter</h1>
            <div className={styles.row}>
                <button
                    className={styles.button}
                    aria-label="Increase value by one"
                    onClick={() => dispatch(increment())}
                >
                    +
                </button>
                <span className={styles.value}>{count}</span>
                <button
                    className={styles.button}
                    aria-label="Decrease value by one"
                    onClick={() => dispatch(decrement())}
                >
                    -
                </button>
            </div>
            <div className={styles.row}>
                <input
                    className={styles.textbox}
                    aria-label="Set increment amount"
                    value={incrementAmount}
                    onChange={(e) => setIncrementAmount(e.target.value)}
                />
                <button
                    className={styles.button}
                    onClick={() =>
                        dispatch(
                            incrementByAmount(Number(incrementAmount) || 0)
                        )
                    }
                >
                    Add Amount
                </button>
                {/* <button
                    className={styles.asyncButton}
                    onClick={() =>
                        dispatch(incrementAsync(Number(incrementAmount) || 0))
                    }
                >
                    Add Async
                </button> */}
            </div>
        </div>
    );
}

export default Counter;
