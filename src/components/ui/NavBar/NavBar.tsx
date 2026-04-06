import NavBarStyles from './NavBar.module.scss';
import { Link } from 'react-router-dom';

function NavBar(){
    return (
        <div className={NavBarStyles['navigation']}>
            <Link to='/'>Home</Link>
            <Link to=''>Movies & Shows</Link>
            <Link to=''>Support</Link>
            <Link to=''>Subscriptions</Link>
        </div>
    )
}

export default NavBar