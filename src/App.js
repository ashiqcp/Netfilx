import './App.css';
import Banner from './Components/Banner/Banner';
import NavBar from './Components/NavBar/NavBar';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,romanceMovies} from '../src/constants/urls'
import About from './Container/About';
import Prof from './Container/Prof';
import { useState } from 'react';
import { BrowserRouter as Rounter,Route,Link } from 'react-router-dom';
function App() {
    const [state, setstate] = useState()
  return (  
    <div>
      
      <NavBar/>
      <Banner/>
      
      <Rounter>
        {/* <Link to='/about'>About</Link> */}
        <Route component={About} path='/about' />
        <Route component={Prof} path='/prof' />
      </Rounter>
      <RowPost title='Netflix Originals' url={originals}/>
      <RowPost title='Action Movies' url={action} isSmall/>
      <RowPost title='Romance Movies' url={romanceMovies} isSmall/>
    </div>
  );
}

export default App;
