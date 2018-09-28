import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from './../componens/Login.js'
import Home from './../componens/Home.js'
import Page1 from './../componens/Page1.js'
import Page2 from './../componens/Page2.js'

const SliderComponent = () => (
    <Switch>
      <Route exact path='/' component={Login} />
      <Route path="/home" component={Home}/>
      <Route path="/page1" component={Page1}/>
      <Route path="/page2" component={Page2}/>
    </Switch>
)
export default SliderComponent
