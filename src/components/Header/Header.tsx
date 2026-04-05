import HeaderStyle from './Header.module.scss'
import GlobalStyle from '../../styles/index.module.scss'
import Logo from '../../assets/Logo.svg'
import SearchIcon from '../../assets/Search-icon.svg'
import NotificationIcon from '../../assets/Notification-Icon.svg'
import BurgerActionIcon from '../../assets/burger-action.svg'
import NavBar from '../ui/NavBar/NavBar'


function Header(){
    return (
            <header>
                <div className={GlobalStyle['container']}>
                    <div className={HeaderStyle['header-wrapper']}>
                        <div className={HeaderStyle['header-wrapper-logo']}>
                            <img src={Logo}/>
                        </div>
                        <NavBar/>
                        <div className={HeaderStyle['header-wrapper-actions']}>
                            <div className={HeaderStyle['header-wrapper-actions-icon']}>
                                <img src={SearchIcon}/>
                            </div>
                            <div className={HeaderStyle['header-wrapper-actions-icon']}>
                                <img src={NotificationIcon}/>
                            </div>
                        </div>
                        <div className={HeaderStyle['header-wrapper-burger-actions']}>
                            <img src={BurgerActionIcon}/>
                        </div>
                    </div>
                </div>
            </header>
    )
}

export default Header;