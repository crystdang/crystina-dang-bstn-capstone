import './Header.scss';
import Logo from '../../assets/logos/logo-zero.svg';

function Header() {
  return (
    <div className="header">
      <div className="header__main" >
        <img className="header__logo" src={Logo} />
      </div>
    </div>
  )
}

export default Header;