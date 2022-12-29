import PropTypes from 'prop-types';
import { useState } from 'react';

export const CounterApp = ({ value }) => {

    const  [count,setCount] = useState(value);

    const onClick = () => setCount(count + 1);
    const handleSubstract = () => setCount(count -1);
    const handleReset = () => setCount(value);

    return (
        <>
            <h4>CounterApp</h4>
            <h5>{count}</h5>
            <button onClick={ onClick}>+</button>
            <button onClick={ handleSubstract}>-</button>
            <button onClick={ handleReset}>Reset</button>
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 2022,

}
