import logo from './logo.svg';
import './App.css';

import MainContent from "./components/MainContent"
import Footer from "./components/Footer"
import News from "./routes/News"
import Music from "./routes/Music"
import Tour from "./routes/Tour"
import Photos from "./routes/Photos"
import Video from "./routes/Video"
import Shop from "./routes/Shop"
import Album from "./routes/Album"

import 'bootstrap/dist/css/bootstrap.css'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={"/"} component={MainContent} />
        <Route exact path={"/news"} component={News} />
        <Route exact path={"/music"} component={Music} />
        <Route exact path={"/tour"} component={Tour} />
        <Route exact path={"/photos"} component={Photos} />
        <Route exact path={"/video"} component={Video} />
        <Route exact path={"/shop"} component={Shop} />
        <Route exact paht={"/album"} component={Album} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
