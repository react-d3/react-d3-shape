"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('../../src').Chart;
var BarHorizontal = require('../../src').BarHorizontal;
var Xaxis = require('react-d3-core').Xaxis;
var Yaxis = require('react-d3-core').Yaxis;


var generalChartData = require('dsv?delimiter=\t!./data/letter.tsv')

var chartSeries = [
    {
      field: 'frequency',
      name: 'Frequency',
      style: {
        'fillOpacity': .5
      }
    }
  ],
  y = function(d) {
    return d.letter;
  },
  yScale = 'ordinal',
  x = function(d) {
    return +d;
  },
  // xDomain = [0, .13],
  xTicks = [10, "%"],
  onMouseOver = function(d, i) {
    console.log(d, i);
  },
  onMouseOut = function(d, i) {
    console.log(d, i);
  }

generalChartData.map(function(d, i) {
  if(i % 2 === 0) {
    d._style = {
      "color": "red",
      "fillOpacity": .8
    }
  }else {
    d._style = {
      "color": "blue",
      "fillOpacity": .2
    }
  }
  return d;
})

var Container = React.createClass({
  getInitialState: function() {
    return {
      width: 600,
      height: 500,
      series: chartSeries
    }
  },
  onClick: function() {
    this.setState({
      width: this.state.width === 600? 500: 600,
      height: this.state.width === 600? 600: 500,
      series: this.state.width === 600? [
          {
            field: 'frequency',
            name: 'Frequency',
            style: {
              'fill': 'red',
              'fillOpacity': .8
            }
          }
        ]: chartSeries
    })
  },
  render: function() {

    return (
      <div>
        <button onClick={this.onClick}>toggle</button>
        <Chart
          horizontal= {true}
          width= {this.state.width}
          height= {this.state.height}
          data= {generalChartData}
          chartSeries = {this.state.series}
          y= {y}
          yScale= {yScale}
          x= {x}
          xTicks= {xTicks}
          >
          <BarHorizontal
            chartSeries = {this.state.series}
          />
          <Xaxis/>
          <Yaxis/>
        </Chart>
      </div>
    )
  }
})

module.exports = Container