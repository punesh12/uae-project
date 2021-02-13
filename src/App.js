import logo from './logo.svg';
import './App.css';
import { Route, Switch } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Blog from './Components/Blog';
import About from './Components/About';
import Home from './Components/Home';
import Contact from './Components/Contact';
import CourseDetails from './Components/CourseDetails';
import CertificateDetails from './Components/CertificateDetails';
import CreateBlog from './CreateBlog';



function App() {
  return (
    <div className="App">

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/blog" component={Blog} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/courseDetails" component={CourseDetails} />
        <Route path="/certificateDetails" component={CertificateDetails} />
        <Route path="/create-blog" component={CreateBlog} />
        

      </Switch>
    </div>
  );  
}

export default App;
