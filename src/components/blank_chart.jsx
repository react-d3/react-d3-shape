"use strict";

var React = require('react');
var Component = require('react').Component;
var Chart = require('../../src').Chart;
var Xgrid = require('react-d3-core').Xgrid;
var Ygrid = require('react-d3-core').Ygrid;
var Xaxis = require('react-d3-core').Xaxis;
var Yaxis = require('react-d3-core').Yaxis;

import StraightLine from '../utils/straightLine';

/*
	Renders blank chart.
	User can provide any text to be diplayed on blank chart.
*/

export default class BlankChart extends Component {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		showXGrid: true,
		showYGrid: false,
		xDomain: [0,10], // its always good to pass xDomain values for x-axis in case if ther is no data the scale will still have valid values or else it will be default.
		yDomain: [0],
		yTicks: [0],
		noDataTitleText: ""
	}

	renderNoDataTitle (x,y,textValue) {
		return  (<g><text className = "chartNoData" x = {x} y = {y}>{textValue}</text></g>)
	}

	render() {
		const {
			width,
			height,
			margins,
			showXGrid,
			showYGrid,
			xDomain,
			noDataTitleText,
			yTicks // do not display Y ticks for blank chart
			} = this.props;

		var xgrid, ygrid, textXMargin, textYMargin;

		if(showXGrid) xgrid = <Xgrid {...this.props}/>
		if(showYGrid) ygrid = <Ygrid {...this.props}/>
		textXMargin = width/2 - margins.right
		textYMargin = height/2 - margins.bottom

		return ( <Chart width = {width} height = {height} {...this.props}>
			<StraightLine x1={0 - 20} y1={0} x2={width - margins.right } y2={0} {...this.props}/>
			{xgrid}
			{ygrid}
			<Xaxis {...this.props}/>
			<Yaxis {...this.props}/>
			<StraightLine x1={0 - 20} y1={height - margins.top - margins.bottom} x2={width - 100} y2={height - margins.top - margins.bottom} {...this.props}/>
			{noDataTitleText ? this.renderNoDataTitle(textXMargin,textYMargin,noDataTitleText) : null}
		</Chart>)
	}
}

