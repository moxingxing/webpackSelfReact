import React, {Component} from 'react'
import {Route, Redirect} from 'react-router-dom'
import Page1 from './page1.js'
import Page2 from './page2.js'
class Home extends React.Component{
    constructor (props) {
        super(props)
    }
      linkTo (url) {
        this.props.history.push(`${url}`)
    }
    render () {
        const {url} = this.props.match
        return (
          <div>
            <p>页面列表</p>
            <ul className="nav">
              <li onClick={() => this.linkTo(`${url}` + '/page1')}>页面1</li>
              <li onClick={() => this.linkTo(`${url}` + '/page2')}>页面2</li>
            </ul>
            <div>{`${url}`}</div>
            <Route path={`${url}/page1`} component={Page1} />
            <Route path={`${url}/page2`} component={Page2} />
          </div>
        )
    }
}
export default Home
