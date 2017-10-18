"use strict";

import {
  default as React,
  Component
} from 'react';

import * as PropTypes from 'prop-types';

import D3Shape from 'd3-shape'
import CommonProps from '../commonProps';
import {series} from '../utils/series';

export default class Area extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    areaClassName: 'react-d3-basic__area',
    ...CommonProps
  }

  _mkArea() {
    const {
      areaClassName,
      areaOpacity
    } = this.props;

    var dataset = series(this.props);
    var that = this;

    return (
      <g>
        {
          dataset.map((area, i) => {
            return (
              <path
                className={`${areaClassName} area`}
                fill={area.color}
                d={that._setAxes(area.data)}
                style={area.style}
                key={i}
                />
            )
          })
        }
      </g>
    );
  }

  _setAxes (data) {
    const {
      height,
      margins,
      xScaleSet,
      yScaleSet
    } = this.props;

    var area = D3Shape.area()
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
    var area = this._mkArea();

    return (
      <g>
        {area}
      </g>
    )
  }
}
