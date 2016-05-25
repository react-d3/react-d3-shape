"use strict"

import {
	default as React,
	Component
} from 'react';

import {
	default as ReactDOM
} from 'react-dom';

/*
	Renders straightline with given x and y coordinates.
*/
export default class StraightLine extends Component {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		showXGrid: true,
		showYGrid: false,
	}

	componentDidMount() {
		this.getLine()
	}

	componentDidUpdate () {
		// line needs to be updated upon window re-sizing
		if (this.line)
			this.line.attr("width", this.props.width - this.props.margins.left - this.props.margins.right)
	}

	getLine() {
		const {
			x1,
			x2,
			y1,
			y2,
			width,
			height
		} = this.props;

		this.line = d3.select(ReactDOM.findDOMNode(this.refs.StLine)).append("line")
			.attr("x1", x1)
			.attr("y1", y1)
			.attr("x2", x2)
			.attr("y2", y2);

		return this.line
	}

	render(){
		return <g ref = "StLine" className = "straight-line" > < / g >
	}
}