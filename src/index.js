import React from 'react'
import { render } from 'react-dom'
import { HashRouter, hashHistory} from 'react-router-dom'

import RouteMap from './rouder/index.js'
render(
    <HashRouter history={hashHistory}>
        <RouteMap />
    </HashRouter>,
    document.getElementById('app')
)