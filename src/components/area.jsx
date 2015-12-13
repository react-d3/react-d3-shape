"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';
import CommonProps from '../commonProps';
import {series} from '../utils/series';

export default class Area extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = Object.assign(CommonProps, {
    interpolate: null,
    areaClassName: 'react-d3-basic__area'
  })

  _mkArea(dom) {
    const {
      areaClassName,
      areaOpacity
    } = this.props;

    var dataset = series(this.props);

    // make area
    var area = d3.select(dom);
    var that = this;

    area.selectAll('.area')
      .data(dataset)
    .enter().append('path')
      .attr("class", `${areaClassName} area`)
      .style("fill", (d) => {return d.color})
      .attr("d", (d) => {return that._setAxes(d.data)})
      .each(function(d) {
        var dom = d3.select(this);
        if(d.style) {
          for(var key in d.style) {
            dom.style(key, d.style[key]);
          }
        }
      })

    return area;
  }

  _setAxes (data) {
    const {
      height,
      margins,
      xScaleSet,
      yScaleSet,
      interpolate
    } = this.props;

    var area = d3.svg.area()
      .interpolate(interpolate)
      .x((d) => { return xScaleSet(d.x) })
      .y0((d) => {
        var domain = yScaleSet.domain();

        if (domain[0] * domain[1] < 0) {
          return yScaleSet(0);
        } else if (((domain[0] * domain[1]) >= 0) && (domain[0] >= 0)){
          return yScaleSet.range()[0];
        } else if (((domain[0] * domain[1]) >= 0) && (domain[0] < 0)){
          return yScaleSet.range()[1];
        }
      })
      .y1((d) => { return yScaleSet(d.y) });

    return area.call(this, data)
  }

  render() {
    var areaPath = ReactFauxDOM.createElement('g');
    var area = this._mkArea(areaPath);

    return area.node().toReact();
  }
}
