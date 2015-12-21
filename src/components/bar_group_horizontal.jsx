"use strict";

import {
  default as React,
  Component,
} from 'react';

import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';
import {series} from '../utils/series';

export default class BarGroupHorizontal extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    onMouseOver: (d) => {},
    onMouseOut: (d) => {},
    barClassName: 'react-d3-basic__bar_group_horizontal'
  }

  _mkBarGroup(dom) {
    const {
      height,
      margins,
      barClassName,
      xScaleSet,
      yScaleSet,
      onMouseOut,
      onMouseOver
    } = this.props;

    var dataset = series(this.props, true);
    var y1 = d3.scale.ordinal();

    // mapping x1, inner x axis
    y1.domain(dataset.map((d) => { return d.field}))
      .rangeRoundBands([0, yScaleSet.rangeBand()]);

    var domain = xScaleSet.domain();
    var zeroBase;

    if (domain[0] * domain[1] < 0) {
      zeroBase = xScaleSet(0);
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] >= 0)){
      zeroBase = xScaleSet.range()[0];
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] < 0)){
      zeroBase = xScaleSet.range()[1];
    }

    // make areas
    var chart = d3.select(dom)

    chart.selectAll('.bargroup')
      .data(dataset)
    .enter().append('g')
      .attr("class", "bargroup")
      .each(function(dt, i) {
        var dom = d3.select(this)
          .selectAll("rect")
          .data(dt.data)
        .enter().append("rect")
          .attr("class", `${barClassName} bar`)
          .attr("height", y1.rangeBand())
          .attr("y", function(d) { return yScaleSet(d.y)? (yScaleSet(d.y) + y1.rangeBand() * i) : -10000})
          .attr("x", function(d) { return d.x > 0 ? zeroBase: (zeroBase - Math.abs(zeroBase - xScaleSet(d.x))) })
          .attr("width", function(d) { return d.x < domain[0] ? 0: Math.abs(zeroBase - xScaleSet(d.x)) })
          .style("fill", function(d) { return dt.color; })
          .on("mouseover", onMouseOver)
          .on("mouseout", onMouseOut)

        if(dt.style) {
          for(var key in dt.style) {
            dom.style(key, dt.style[key]);
          }
        }
      })

    return chart;
  }

  render() {
    var barChart = ReactFauxDOM.createElement('g');
    var bar = this._mkBarGroup(barChart);

    return bar.node().toReact();
  }
}
