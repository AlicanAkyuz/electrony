import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import App from './components/app';
import About from './components/about';
import OurTeam from './components/ourteam';
import Contact from './contact/containers/contact';
import Token from './components/token';
import Steps from './user_selection/containers/steps';
import Playlist from './playlist/containers/playlist';

const Index = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/ourteam" component={OurTeam} />
        <Route path="/contact" component={Contact} />
        <Route path="/token" component={Token} />
        <Route path="/steps" component={Steps} />
        <Route path="/playlist" component={Playlist} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<Index></Index>, document.getElementById('root'));
