import React, { Component } from 'react';
import './App.css';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Country from './Containers/Country/Country.js';
import MovieBlog from './Containers/MovieBlog/MovieBlog.js';
import Blog from './Containers/Blog/Blog.js';
import Game from './Containers/Game/Game.js';
import Layout from './Layout.js'

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <Layout>
              <Switch>
                  <Route path="/game" component={Game}/>
                  <Route path="/blog" component={Blog}/>
                  <Route path="/movie" component={MovieBlog}/>
                  <Route path="/" exact component={Country}/>
              </Switch>
            </Layout>
        </BrowserRouter>

    );
  }
}

export default App;
