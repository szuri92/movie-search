import React from 'react'
import { Provider } from 'react-redux'
import './App.css'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"

import Search from './components/Search'
import MovieList from './components/MovieList'
import MovieDetail from './components/MovieDetail'

import store from './store/createStore'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/detail/:id">
            <MovieDetail/>
          </Route>
          <Route path="/">
            <div className="App">
              <Search/>
              <MovieList/>
            </div>
          </Route>
        </Switch>
      </Router>
    </Provider>
  )
}

export default App
