import Dice from './Dice';
import { useState } from 'react';

// for (var i = 0; i < 1000; i++) {
//     console.log(Math.floor(Math.random() * 6 + 1)) 
//     }
    

function RollDice() {

    const [die1, setDie1] = useState(Math.floor(Math.random() * 6 + 1));
    const [die2, setDie2] = useState(Math.floor(Math.random() * 6 + 1));

    return <div>

        <Dice number={die1}/>
        <Dice number={die2}/>

        <button onClick={function () {
            setDie1(Math.floor(Math.random() * 6 + 1));
            setDie2(Math.floor(Math.random() * 6 + 1));
        }}>Roll Dice!</button>
    </div>
}

export default RollDice;