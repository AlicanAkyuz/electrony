import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import App from './pages/app';
import About from './pages/about';
import Contact from './contact/containers/contact';
import Select from './user_selection/containers/select_details';
import Playlist from './playlist/containers/playlist';

const Index = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/select_details" component={Select} />
        <Route path="/playlist" component={Playlist} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<Index></Index>, document.getElementById('root'));
