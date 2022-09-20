
import Intro from './components/Intro';
import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingpage.css"
import Trending from "./components/Trending"
import Superhero from './components/Superhero';

function App() {
  return (
    <div>
      {/*intro section */}
      <div className="myBG ">
      <NavigationBar/>
      <Intro/>
    </div>
    {/*intro section */}


    <div className="trending">
    <Trending/>
    </div>
    
  <div className="superhero">
    <Superhero/>
  </div>

  </div>

  );
}
export default App;
