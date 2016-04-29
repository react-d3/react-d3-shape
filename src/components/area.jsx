"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import D3Shape from 'd3-shape'
import CommonProps from '../commonProps';
import {series} from '../utils/series';
import {getTranslateXAmount} from '../utils/alignment';

export default class Area extends Component {
  constructor (props) {
    super(props);
  }

  static propTypes = {
    pointAlign: PropTypes.oneOf(['left', 'center', 'right'])
  };

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
          dataset.map((area) => {
            return (
              <path
                className={`${areaClassName} area`}
                fill={area.color}
                d={that._setAxes(area.data)}
                style={area.style}
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

    const translateXAmount = getTranslateXAmount(
      this.props.pointAlign,
      this.props.xScaleSet.bandwidth()
    );
    const style = {
      transform: `translateX(${translateXAmount}px)`
    };

    return (
      <g style={style}>
        {area}
      </g>
    )
  }
}
