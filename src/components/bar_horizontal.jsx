"use strict";

import {
  default as React,
  Component,
} from 'react';

import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';
import {series} from '../utils/series';

export default class BarHorizontal extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    interpolate: null,
    onMouseOver: (d) => {},
    onMouseOut: (d) => {},
    barClassName: 'react-d3-basic__bar_horizontal'
  }

  _mkBar(dom) {
    const {
      height,
      margins,
      barClassName,
      xScaleSet,
      yScaleSet,
      onMouseOut,
      onMouseOver
    } = this.props;

    var dataset = series(this.props, true)[0];

    // make areas
    var bar = d3.select(dom)

    var domain = xScaleSet.domain();
    var zeroBase;

    if (domain[0] * domain[1] < 0) {
      zeroBase = xScaleSet(0);
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] >= 0)){
      zeroBase = xScaleSet.range()[0];
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] < 0)){
      zeroBase = xScaleSet.range()[1];
    }

    bar.selectAll(".bar")
      .data(dataset.data)
    .enter().append("rect")
      .attr("class", `${barClassName} bar`)
      .attr("y", (d) => { return yScaleSet(d.y)? yScaleSet(d.y) : -10000 })
      .attr("height", yScaleSet.rangeBand())
      .attr("x", (d) => { return d.x > 0 ? zeroBase: (zeroBase - Math.abs(zeroBase - xScaleSet(d.x)))})
      .attr("width", (d) => { return d.x < domain[0] ? 0: Math.abs(zeroBase - xScaleSet(d.x))})
      .style("fill", (d) => { return d._style.color? d._style.color: dataset.color })
      .each(function(d) {
        var dom = d3.select(this)
        if(d._style) {
          for(var key in d._style) {
            dom.style(key, d._style[key]);
          }
        }
      })
      .on("mouseover", onMouseOver)
      .on("mouseout", onMouseOut)

    if(dataset.style) {
      for(var key in dataset.style) {
        bar.style(key, dataset.style[key]);
      }
    }

    return bar;
  }

  render() {
    var barChart = ReactFauxDOM.createElement('g');
    var bar = this._mkBar(barChart);

    return bar.node().toReact();
  }
}
