import RecentlyMovies from '../components/catlist/recentlymovies';
import Mostpopular from '../components/catlist/mostpopular';
import Tvshows from '../components/catlist/tvshows';

const Home = () => {
  return <>
    <div className="content_pops">
      <Mostpopular/>
      <RecentlyMovies />
      <Tvshows />
    </div>
  </>
}

export default Home;
