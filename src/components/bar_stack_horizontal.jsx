"use strict";

import {
  default as React,
  Component,
} from 'react';

import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';
import {series} from '../utils/series';

export default class BarStackHorizontal extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    onMouseOver: (d) => {},
    onMouseOut: (d) => {},
    barClassName: 'react-d3-basic__bar_stack_horizontal'
  }

  _mkBarStack(dom) {
    const {
      height,
      margins,
      barClassName,
      xScaleSet,
      yScaleSet,
      onMouseOver,
      onMouseOut
    } = this.props;

    var dataset = series(this.props, true);
    const _setStack = this._setStack();

    // make areas
    var chart = d3.select(dom)
      .attr("class", "g")

    var domain = xScaleSet.domain();
    var zeroBase;

    if (domain[0] * domain[1] < 0) {
      zeroBase = xScaleSet(0);
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] >= 0)){
      zeroBase = xScaleSet.range()[0];
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] < 0)){
      zeroBase = xScaleSet.range()[1];
    }

    var barGroup = chart.selectAll("g")
      .data(_setStack(dataset))
    .enter().append("g")
      .attr("class", "barGroup")
      .style("fill", (d) => {return d.color;})
      .attr("style", (d) => {
        var s = '';
        if(d.style) {
          for(var key in d.style) {
            s += key + ':' + d.style[key] + ';';
          }
        }
        return s;
      })

    barGroup.selectAll("rect")
      .data((d) => {return d.data;})
    .enter().append("rect")
      .attr("class", `${barClassName} bar`)
      .attr("height", yScaleSet.rangeBand())
      .attr("y", (d) => { return yScaleSet(d.y)? yScaleSet(d.y): -10000 })
      .attr("x", (d, i) => { return xScaleSet(d.x0); })
      .attr("width", (d, i) => { return Math.abs(xScaleSet(d.x) - xScaleSet(0));})
      .on("mouseover", onMouseOver)
      .on("mouseout", onMouseOut)

    return chart;
  }

  _setStack () {
    const{
      chartSeries
    } = this.props;

    var buildOut = function(len) {
      // baseline for positive and negative bars respectively.
      var currentXOffsets = [];
      var currentXIndex = 0;
      return function(d, x0, x){

        if(currentXIndex++ % len === 0){
          currentXOffsets = [0, 0];
        }

        if(x >= 0) {
          d.x0 = currentXOffsets[1];
          d.x = x;
          currentXOffsets[1] += x;
        } else {
          d.x0 = currentXOffsets[0] + x;
          d.x = -x;
          currentXOffsets[0] += x;
        }
      }
    }
    return d3.layout.stack()
      .values((d) => { return d.data; })
      .y((d) => {return d.x;})
      .out(buildOut(chartSeries.length));

  }

  render() {
    var barChart = ReactFauxDOM.createElement('g');
    var bar = this._mkBarStack(barChart);

    return bar.node().toReact();
  }
}
