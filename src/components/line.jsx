"use strict";

import {
  default as React,
  PropTypes,
  Component,
} from 'react';

import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';
import CommonProps from '../commonProps';
import {series} from '../utils/series';

export default class Line extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = Object.assign(CommonProps, {
    interpolate: null,
    lineClassName: 'react-d3-basic__line'
  })

  _mkLine(dom) {
    const {
      lineClassName
    } = this.props;

    var dataset = series(this.props);

    // make line
    var line = d3.select(dom);
    var that = this;

    line.selectAll('.line')
      .data(dataset)
    .enter().append('path')
      .style("stroke", (d) => {return d.color})
      .style("fill", 'none')
      .attr("class", `${lineClassName} line`)
      .attr("d", (d) => {return that._setAxes(d.data)})
      .each(function(d) {
        var dom = d3.select(this)
        if(d.style) {
          for(var key in d.style) {
            dom.style(key, d.style[key]);
          }
        }
      })

    return line;
  }

  _setAxes (data) {
    const {
      xScaleSet,
      yScaleSet,
      interpolate
    } = this.props;

    var line =  d3.svg.line()
      .interpolate(interpolate)
      .x((d) => { return xScaleSet(d.x) })
      .y((d) => { return yScaleSet(d.y) })

    return line.call(this, data);
  }

  render() {
    var linePath = ReactFauxDOM.createElement('g');
    var line = this._mkLine(linePath);

    return line.node().toReact();
  }
}
