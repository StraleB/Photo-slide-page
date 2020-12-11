import About from './components/about/About'
import Contact from './components/contact/Contact';
import Nav from './components/nav/Nav'
import Portfolio from './components/portfolio/Portfolio';
import MainSlider from './components/mainslider/MainSlider.jsx'
import './main.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Nav/>
    <Switch>
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/" component={MainSlider}/>
    </Switch>
    </div>
    </Router>
  );
}

export default App;
