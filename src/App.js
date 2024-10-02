import './App.css';
import NavBar from './components/Navbar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import ProductsPage from './components/ProductsPage';
import HomeFR from './components/HomeFR';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <div className='content'>
        <Switch>
          <Route exact path='/the-game-hub'>
            <Home/>
          </Route>  
          <Route path='/the-game-hub/HomeFR'>
            <HomeFR/>
          </Route>
          <Route path='/the-game-hub/Contact'>
            <Contact/>
          </Route>
          <Route path='/the-game-hub/About'>
            <About/>
          </Route>
          <Route path='/the-game-hub/Product'>
            <ProductsPage/>
          </Route>       
      </Switch>
      </div>
    </div>
    </Router>

  );
}

export default App;
