import { Redirect, Route, Switch } from 'react-router';
import './App.css';
import About from './Components/About';
import BookInfo from './Components/BookInfo';
import BooksList from './Components/BooksList';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Home from './Components/Home';
import NavBar from './Components/NavBar';



function App() {

  return (
    <div>

      <NavBar />
      
    <Switch>

      <Route exact path="/" component={Home}/>
      <Route exact path="/bookInfo/:id" component={BookInfo}/>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact} />


      <Redirect to="/" />
    </Switch>
        <Footer />
  
  
    </div>
  );
}

export default App;
