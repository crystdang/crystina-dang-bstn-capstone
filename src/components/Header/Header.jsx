import './Header.scss';
import LogoMicro from '../../assets/logos/logo-zero-micro.svg';
import { Link } from 'react-router-dom';

function Header({
  handleCheat
}) {
  return (
    <div className="header">
      <div className="header__main" >
        <Link to='/'>
          <img className="header__logo" src={LogoMicro} />
        </Link>
        <Link to='/future'>
          <h3 className="header__future">
            Future
          </h3>
        </Link>
          <h3 
            className="header__cheat"
            onClick={handleCheat}>
            Cheat Sheet
          </h3>
      </div>
    </div>
  )
}

export default Header;