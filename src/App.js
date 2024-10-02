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
          <Route path='/HomeFR'>
            <HomeFR/>
          </Route>
          <Route path='/Contact'>
            <Contact/>
          </Route>
          <Route path='/About'>
            <About/>
          </Route>
          <Route path='/Product'>
            <ProductsPage/>
          </Route>       
      </Switch>
      </div>
    </div>
    </Router>

  );
}

export default App;
