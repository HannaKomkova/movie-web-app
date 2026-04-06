import ButtonStyle from './Button.module.scss'
import {Link} from 'react-router-dom'
import ButtonPlayIcon from '../../../assets/PlayIcon.svg'

function Button(){
    return ( 
        <div className={ButtonStyle['button']}>
            <div className={ButtonStyle['button-play-icon']}>
                <img src={ButtonPlayIcon} alt='play icon'/>
            </div>
            <Link to='/'> Start Watching Now</Link>
        </div>
    )
}

export default Button;