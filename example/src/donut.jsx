"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var ChartPie = require('../../src').ChartPie;
var Pie = require('../../src').Pie;

var generalChartData = require('dsv?delimiter=,!./data/age_pie.csv')

var value = function(d) {
    return +d.population;
  },
  name = function(d) {
    return d.age;
  },
  chartSeries = [
    {
      "field": "<5",
      "name": "less than 5"
    },
    {
      "field": "5-13",
      "name": "5 to 13"
    },
    {
      "field": "14-17",
      "name": "14 to 17"
    },
    {
      "field": "18-24",
      "name": "18 to 24",
      style: {
        "fillOpacity": .5
      }
    },
    {
      "field": "25-44",
      "name": "25 to 44"
    },
    {
      "field": "45-64",
      "name": "45 to 64"
    }
  ];

module.exports = React.createClass({

  render: function() {
    return (
      <ChartPie
        chartSeries= {chartSeries}
        >
        <Pie
          innerRadius={150}
          data= {generalChartData}
          chartSeries= {chartSeries}
          value = {value}
          name = {name}
        />
      </ChartPie>
    )
  }

})