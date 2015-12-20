"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Chart = require('../../lib').Chart;
var Bar = require('../../lib').Bar;
var Xaxis = require('react-d3-core').Xaxis;
var Yaxis = require('react-d3-core').Yaxis;
var Xgrid = require('react-d3-core').Xgrid;
var Ygrid = require('react-d3-core').Ygrid;

(function() {
  var generalChartData = require('dsv?delimiter=\t!./data/letter.tsv')

  var chartSeries = [
      {
        field: 'frequency',
        name: 'Frequency',
        style: {
          'fill-opacity': .5
        }
      }
    ],
    x = function(d) {
      return d.letter;
    },
    xScale = 'ordinal',
    y = function(d) {
      return +d;
    },
    yTicks = [10, "%"],
    onMouseOver = function(d, i) {
      console.log(d, i);
    },
    onMouseOut = function(d, i) {
      console.log(d, i);
    }

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
                'fill-opacity': .8
              }
            }
          ]: chartSeries
      })
    },
    render: function() {

      var xgrid, ygrid;

      return (
        <div>
          <button onClick={this.onClick}>toggle</button>
          <Chart
            width= {this.state.width}
            height= {this.state.height}
            data= {generalChartData}
            chartSeries = {this.state.series}
            x= {x}
            xScale= {xScale}
            y= {y}
            yTicks= {yTicks}
            >
            <Bar
              chartSeries = {this.state.series}
              onMouseOver= {onMouseOver}
              onMouseOut= {onMouseOut}
            />
            {xgrid}
            {ygrid}
            <Xaxis/>
            <Yaxis/>
          </Chart>
        </div>
      )
    }
  })

  ReactDOM.render(
    <Container/>
  , document.getElementById('data_bar')
  )
})()
