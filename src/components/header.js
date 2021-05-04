import Logo from '../images/logo.png';
import {FiSettings} from 'react-icons/fi';
import {BiSearch} from 'react-icons/bi';

const Header = () => {
  return <>
    <header>
      <div className="h_start_sec">
        <img className="logo" src={Logo} alt=""/>
        <form className="search_form">
          <input className="search_input" name="search" placeholder="search..." autoComplete="off"/>
          <button><BiSearch className="search_img" /></button>
        </form>
      </div>
      <button className="btn_setting">
        <FiSettings className="setting_img"/>
      </button>
    </header>
  </>
}

export default Header;
