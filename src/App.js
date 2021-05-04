import Home from './pages/home';
import Header from './components/header';
import LeftMenu from './components/leftmenu';

function App() {
  return <>
    <div className="body_content">
      <LeftMenu />
      <div className="main_content">
        <Header />
        <Home />
      </div>
    </div>
  </>
}

export default App;
