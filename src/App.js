import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'
import RegisterRoute from './components/RegisterRoute'
import HomePage from './components/HomePage'

import NotFoundRoute from './components/NotFoundRoute'

import RegisterRouteContext from './Context/RegisterRouteContext'

import './App.css'

// These are the lists used in the application. You can move them to any component needed.

// Replace your code here
class App extends Component {
  state = {
    name: '',
    topic: 'Arts and Culture',
    isRegistered: false,
    showError: false,
  }

  changeName = name => {
    this.setState({name})
  }

  changeTopic = topic => {
    this.setState({topic})
  }

  registerName = () => {
    this.setState({isRegistered: true})
  }

  updateError = () => {
    this.setState({showError: true})
  }

  render() {
    const {name, topic, isRegistered, showError} = this.state
    return (
      <RegisterRouteContext.Provider
        value={{
          name,
          topic,
          isRegistered,
          showError,
          changeName: this.changeName,
          changeTopic: this.changeTopic,
          registerName: this.registerName,
          updateError: this.updateError,
        }}
      >
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/register" component={RegisterRoute} />
          <NotFoundRoute />
        </Switch>
      </RegisterRouteContext.Provider>
    )
  }
}

export default App
