"use strict"

import {
	default as React,
	Component
} from 'react';

import * as PropTypes from 'prop-types';

import {
	default as ReactDOM
} from 'react-dom';


/*
	Renders svg rectangle for given width and height
*/
export default class Rect extends Component {
	constructor(props) {
		super(props);
	}

	static propTypes = {
		height: PropTypes.number.isRequired,
		width: PropTypes.number.isRequired,
		margins: PropTypes.object.isRequired,
		styleClassName: PropTypes.string.isRequired
	}

	componentDidMount() {
		this.drawRectangle()
	}

	componentDidUpdate () {
		// rectangle width needs to be updated upon window re-sizing
		if (this.rectangle)
			this.rectangle.attr("width", this.props.width - this.props.margins.left - this.props.margins.right)
	}

	drawRectangle() {
		const {
			width,
			height,
			margins,
			styleClassName
			} = this.props;

		this.rectangle = d3.select(ReactDOM.findDOMNode(this.refs.Rect)).append("rect")
			.attr("x", 0)
			.attr("y", -5)
			.attr("width", width - margins.left - margins.right)
			.attr("height", height - margins.bottom - margins.top + 3)
			.attr("class", styleClassName);


		return this.rectangle
	}

	render(){
		return <g ref = "Rect" className = "rectangle" > < / g >
	}
}