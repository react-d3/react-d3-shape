"use strict";

var React = require('react');
var MultiLineBrushChart = require('../../src').MultiLineBrushChart;
var generalChartData = require('dsv?delimiter=\t!./data/temp.tsv');

var chartSeries = [
		{
			field: 'New York',
			name: 'New York Temp',
			color: '#ff7f0e'
		},
		{
			field: 'San Francisco',
			name: 'San Francisco Temp',
			color: '#2ca02c'
		},
		{
			field: 'Austin',
			name: 'Austin Temp',
			color: '#7777ff'
		}
	],
	interpolate = 'monotone',
	x = function(d) {
		var parseDate = d3.time.format("%Y%m%d").parse;
		return parseDate(d.date);
	},
	xScale = 'time';
chartSeries.reverse();


module.exports = React.createClass({
	getInitialState: function() {
		return {
			width: 1400,
			height: 400,
			series: chartSeries,
			sliderChartWidth: 1400,
			sliderChartHeight:130,
			generalChartData: generalChartData,
			sliderChartData: generalChartData
		}
	},
	onClick: function() {
		this.setState({
			width: this.state.width === 600? 400: 600,
			height: this.state.width === 600? 600: 400,
			series: this.state.width === 600? [{
				field: 'Austin',
				name: 'Austin Temp',
				color: '#7777ff'
			}]: chartSeries
		})
	},
	setNewDomain: function(axis, val) {
		console.log("Axis : " + axis + " Value : " + val);
		// you can render data or filter existing data or whatever based on brush values
	},
	setNewDomainForSlider: function(axis, val) {
		console.log("Axis : " + axis + " Value : " + val);
		// you can render data or filter existing data or whatever based on brush values
	},

	render: function() {
		return (
			<div>
			<button onClick={this.onClick}>toggle</button>
			<MultiLineBrushChart
				width= {this.state.sliderChartWidth}
				height= {this.state.sliderChartHeight}
				data= {this.state.generalChartData}
				chartSeries= {this.state.series}
				xScale={xScale}
				x= {x}
				isBrushable={true}
				showLegend={false}
				setNewDomain={this.setNewDomainForSlider}
				keepBrushOn={true}
				brushStyle={{"fill": "#DDD", "fill-opacity": ".75", "shape-rendering": "crispEdges"}}
				yGridStyleClassName={"yGridStyleCls"}
				chartClassName={"lineChartStyleCls"}
				yAxisClassName={"timeSliderYAxis"}
			/>
			<MultiLineBrushChart
				width= {this.state.width}
				height= {this.state.height}
				data= {this.state.sliderChartData}
				chartSeries= {this.state.series}
				xScale={xScale}
				x= {x}
				isBrushable={false}
				setNewDomain={this.setNewDomain}
				keepBrushOn={false}
				brushStyle={{"fill": "#DDD", "fill-opacity": ".75", "shape-rendering": "crispEdges"}}
				noDataTitleText={"No Data"}
				/>
			</div>
		)
	}
})
