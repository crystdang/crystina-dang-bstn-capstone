import './Header.scss';
import LogoMicro from '../../assets/logos/logo-zero-micro.svg';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="header__main" >
        <img className="header__logo" src={LogoMicro} />
        <Link to='/future'>
          <h3 className="header__future">
            Future
          </h3>
        </Link>
      </div>
    </div>
  )
}

export default Header;