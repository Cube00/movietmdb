import {AiOutlineLogin} from 'react-icons/ai';
import {AiOutlineHeart} from 'react-icons/ai';
import {BiSearch} from 'react-icons/bi';
import {BiHelpCircle} from 'react-icons/bi';
import {BsBookmark} from 'react-icons/bs';
import {FiSettings} from 'react-icons/fi';
import {MdLocalMovies} from 'react-icons/md';
import {MdMovieFilter} from 'react-icons/md';
import {MdWatchLater} from 'react-icons/md';
import {RiSlideshow2Line} from 'react-icons/ri';
import {RiLiveLine} from 'react-icons/ri';

const LeftMenu = () => {
  return <>
    <div className="left_menu">
      <div className="user_profile">
        <div className="user_image">
          <img src="https://i.imgur.com/qJyqEiC.jpg" alt=""/>
        </div>
        <h2>User Name</h2>
        <h3>Set Your Name</h3>
        <button className="set_name_btn">
          <AiOutlineLogin className="log_img"/>
          Set Name
        </button>
      </div>
      <div className="mini_cats">
        <ul>
          <li><BiSearch className="ic_list"/> Browse</li>
          <li><MdLocalMovies className="ic_list"/> Movies</li>
          <li><RiSlideshow2Line className="ic_list"/> TV shows</li>
          <li><MdMovieFilter className="ic_list"/> Anime</li>
        </ul>
      </div>
      <div className="mini_cats">
        <ul>
          <li><AiOutlineHeart className="ic_list"/> Liked</li>
          <li><BsBookmark className="ic_list"/> Bookmark</li>
          <li><MdWatchLater className="ic_list"/> Watch Later</li>
          <li><RiLiveLine className="ic_list"/> Live</li>
        </ul>
      </div>
      <div className="mini_cats">
        <ul>
          <li><FiSettings className="ic_list"/> Settings</li>
          <li><BiHelpCircle className="ic_list"/> Help & Report</li>
        </ul>
      </div>
    </div>
  </>
}

export default LeftMenu;
