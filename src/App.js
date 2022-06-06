// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SearchArea from './components/SearchArea';
import {Switch, Route} from 'react-router-dom'
import Home from './pages/home';
import Menu from './pages/menu';
import About from './pages/about';

function App() {
  return (
    <>
      <Navbar />
      {/* <SearchArea/> */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/menu" component={Menu} />
      </Switch>
      {/* <About /> */}
      {/* <Menu /> */}
      <Footer />
    </>
  );
}

export default App;

// export default App;
