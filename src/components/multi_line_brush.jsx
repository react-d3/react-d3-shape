"use strict";

import {
	default as React,
	Component
} from 'react';

import * as PropTypes from 'prop-types';

import {
	Xgrid,
	Ygrid,
	Xaxis,
	Yaxis,
	Legend
} from 'react-d3-core';

import Line from './line';
import Chart from '../chart';
import BlankChart from './blank_chart';
import Area from './area';
import Brush from './brush';

import Rect from '../utils/rectangle';

import CommonProps from '../commonProps';

/**
    Component that renders multi-line + area chart if there is a data or else blank chart.
    Also provides brush (depending on isBrushable value), styling for chart (using svg Rectangle)
**/

export default class MultiLineBrushChart extends Component {
	constructor(props) {
		super(props);
	}

	static defaultProps = {
		showScatter: false,
		isBrushable: false,
		...CommonProps
	}

	static propTypes = {
		width: PropTypes.number.isRequired,
		height: PropTypes.number.isRequired,
		margins: PropTypes.object.isRequired,
		data: PropTypes.array.isRequired,
		chartSeries: PropTypes.array.isRequired
	}

	render() {
		// if there is no data render Blank chart
		if (!(this.props.data && this.props.data.length > 0))
			return (<BlankChart
				{...this.props}
			/>)

		const {
			width,
			height,
			margins,
			data,
			chartSeries,
			showXGrid,
			showYGrid,
			showLegend,
			categoricalColors,
			isBrushable,
			chartClassName // user can provide css classname to change chart's background, stroke, etc Note: this is implemented via svg rectangle element
			} = this.props;

		var xgrid, ygrid;

		/*
		 Create a separate chartSeries object based on area value and pass it to respective chart components.
		 Note: chartSeries is an array of objects.
		 */
		var chartSeriesType = chartSeries.map((d, i)=> {
			var series = [];
			if (d.area) {
				series.push(d);
				// area chart
				return <Area chartSeries={series} key={i} />
			} else {
				series.push(d);
				// simple line chart
				return <Line chartSeries={series} key={i}/>
			}
		})

		if(showXGrid) xgrid = <Xgrid {...this.props}/>
		if(showYGrid) ygrid = <Ygrid {...this.props}/>

		return (<div>
			<Chart
				{...this.props}
				width= {width}
				height= {height}
				margins={margins}
				data= {data}
				chartSeries= {chartSeries}>
				{chartClassName ? <Rect {...this.props} styleClassName={chartClassName}/> : null}
				{isBrushable?<Brush {...this.props}/> : null}
				{chartSeriesType}
				<Xaxis {...this.props}/>
				<Yaxis {...this.props}/>
				{xgrid}
				{ygrid}
			</Chart>
			{showLegend?
				<Legend
				{...this.props}
				width= {width}
				margins= {margins}
				chartSeries= {chartSeries}
				categoricalColors= {categoricalColors}/>
				: null
			}
		</div>)
	}
}
