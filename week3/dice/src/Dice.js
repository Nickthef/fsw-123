import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiceOne, faDiceTwo, faDiceThree, faDiceFour, faDiceFive, faDiceSix } from '@fortawesome/free-solid-svg-icons'

const die1 = <FontAwesomeIcon icon={faDiceOne} />
const die2 = <FontAwesomeIcon icon={faDiceTwo} />
const die3 = <FontAwesomeIcon icon={faDiceThree} />
const die4 = <FontAwesomeIcon icon={faDiceFour} />
const die5 = <FontAwesomeIcon icon={faDiceFive} />
const die6 = <FontAwesomeIcon icon={faDiceSix} />

function Dice({number}) {
    console.log(number)
    return <div>
        {number}

        {
            number === 1?
                die1:
            number === 2?
                die2:
            number === 3?
                die3:
            number === 4?
                die4:
            number === 5?
                die5:
            number === 6?
                die6:
            number 
        }
         
    </div>
}

export default Dice;