import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, browserHistory, IndexRedirect} from 'react-router'
import Container from './container'

import AreaStack from './src/area_stack'
import Bar from './src/bar'
import BarGroup from './src/bar_group'
import BarGroupHorizontal from './src/bar_group_horizontal'
import BarHorizontal from './src/bar_horizontal'
import BarStack from './src/bar_stack'
import BarStackHorizontal from './src/bar_stack_horizontal'
import Donut from './src/donut'
import Line from './src/line'
import Pie from './src/pie'
import MultiLineBrushChart from './src/multi_line_brush'
import Scatter from './src/scatter'

// Declarative route configuration (could also load this config lazily
// instead, all you really need is a single root route, you don't need to
// colocate the entire config).
        

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/example" component={Container}>
      <IndexRedirect to="area_stack"/>
    	<Route path="bar" component={Bar}/>
      <Route path="area_stack" component={AreaStack}/>
      <Route path="bar_group" component={BarGroup}/>
      <Route path="bar_group_horizontal" component={BarGroupHorizontal}/>
      <Route path="bar_horizontal" component={BarHorizontal}/>
      <Route path="bar_stack" component={BarStack}/>
      <Route path="bar_stack_horizontal" component={BarStackHorizontal}/>
      <Route path="donut" component={Donut}/>
      <Route path="line" component={Line}/>
      <Route path="pie" component={Pie}/>
      <Route path="multi_line_brush" component={MultiLineBrushChart}/>
      <Route path="scatter" component={Scatter}/>
    </Route>
  </Router>
), document.getElementById('root'))