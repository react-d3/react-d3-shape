import React, { Component } from 'react'
import {Nav, NavItem} from 'react-bootstrap'

export default class ContainerExample extends Component {
	constructor(props) {
		super(props)
	}

	render() {

		const route = this.props.routes[1].path || 'area_stack'

		return (
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
				  <div className="container">
				    <div className="navbar-header">
				      <a className="navbar-brand" href="/example">
				        React-d3 shape
				      </a>
				    </div>
				  </div>
				</nav>
				<div style={{marginTop: '50px', padding: '30px'}}>
					<Nav bsStyle="pills" justified activeKey={route}>
	          <NavItem eventKey="area_stack" href="/example/area_stack">Area Stack</NavItem>
	          <NavItem eventKey="bar" href="/example/bar">Bar</NavItem>
	          <NavItem eventKey="bar_group" href="/example/bar_group">Bar Group</NavItem>
	          <NavItem eventKey="bar_group_horizontal" href="/example/bar_group_horizontal">Bar Group Horizontal</NavItem>
	          <NavItem eventKey="bar_horizontal" href="/example/bar_horizontal">Bar Horizontal</NavItem>
	          <NavItem eventKey="bar_stack" href="/example/bar_stack">Bar Stack</NavItem>
	          <NavItem eventKey="bar_stack_horizontal" href="/example/bar_stack_horizontal">Bar Stack Horizontal</NavItem>
	          <NavItem eventKey="donut" href="/example/donut">Donut</NavItem>
	          <NavItem eventKey="line" href="/example/line">Line</NavItem>
	          <NavItem eventKey="pie" href="/example/pie">Pie</NavItem>
	          <NavItem eventKey="scatter" href="/example/scatter">Scatter</NavItem>
	          <NavItem eventKey="multi_line_brush" href="/example/multi_line_brush">Brush Chart</NavItem>
	        </Nav>
	      </div>
				{this.props.children}
			</div>
		)
	}
}