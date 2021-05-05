import Popular from '../components/catlist/popular';
import Mostpopular from '../components/catlist/mostpopular';

const Home = () => {
  return <>
    <div className="content_pops">
      <Mostpopular/>
      <Popular />
    </div>
  </>
}

export default Home;
