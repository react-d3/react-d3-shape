"use strict";

import {
	default as React,
	Component
} from 'react';
import * as PropTypes from 'prop-types';

import CommonProps from '../commonProps';

import {
	scale
} from 'react-d3-core';

import {
	default as ReactDOM
} from 'react-dom';

/*
	Renders d3 brush and returns new x-axis values depending on brush movements.
    This allows brush events to be dealt with at the React level so that every chart can have an attached brush
*/
export default class Brush extends Component {

	constructor(props) {
		super(props);

		this.state = {
			xBrushScaleSet: this._mkXScale(props)
		}
	}

	static defaultProps = CommonProps

	_mkXScale(props) {
		const {
			xScale,
			xRange,
			xDomain,
			xRangeRoundBands,
		} = props;

		var newXScale = {
			scale: xScale,
			range: xRange,
			domain: xDomain,
			rangeRoundBands: xRangeRoundBands
		}

		return scale(newXScale);
	}

	componentWillReceiveProps(nextProps) {
		this.state = {
			xBrushScaleSet: this._mkXScale(nextProps)
		}
	}

	componentDidUpdate() {
		this._updateBrush()
	}

	componentDidMount() {
		this._updateBrush()
	}

	_updateBrush() {
		const {
			xBrushScaleSet,
			yBrushScaleSet
			} = this.state;

		const {
			height,
			margins,
			brushExtent, // used to set default brush drag area hightlighted
			keepBrushOn, // if true the brush will be visible after mouse release and user can move it left/right. If not after mouse release it will disappear
			onBrushDomainChange, // callback method to which brush will pass the axis and new xDomain values on brush
			brushStyle  // user defined brush style or else use default
		} = this.props;


		// create d3 svg bursh with xDaomin values
		var brush = d3.svg.brush()
			.x(xBrushScaleSet)

		// if user wants to keep brush area selected
		if (brushExtent)
			brush = brush.extent(brushExtent)

		brush = brush.on("brushend", () => {
				var newDomain = brush.empty() ? xBrushScaleSet.domain() : brush.extent();
			if (newDomain.length) {
				onBrushDomainChange("x", newDomain)
				if (!keepBrushOn)
					d3.select(ReactDOM.findDOMNode(this.refs.brushRect)).call(brush.clear());
			}
		});

		var brushDom = d3.select(ReactDOM.findDOMNode(this.refs.brushRect))
			.call(brush)
			.selectAll('rect')
			.attr("y", -4)
			.attr("height", height - margins.bottom - margins.top + 3)

		// apply user defined brush style if provided
		if(brushStyle) {
			for(var key in brushStyle) {
				brushDom.style(key, brushStyle[key]);
			}
		} else {
			brushDom.style('fill', '#DDD')
			.style('fill-opacity', .75)
			.style('shape-rendering', 'crispEdges')
		}
	}

	render() {
		return (<g ref="brushRect" className="react-d3-basic__brush__rect"></g>);
	}
}