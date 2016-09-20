"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import d3 from 'd3';
import D3Shape from 'd3-shape'
import CommonProps from '../commonProps';
import {series} from '../utils/series';

export default class AreaStack extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    areaClass: 'react-d3-basics__area_stack',
    areaClassName: 'react-d3-basic__area_stack',
    ...CommonProps
  }

  _mkStack() {
    const {
      areaClassName
    } = this.props;

    var dataset = series(this.props);

    const _setStack = this._setStack();
    const _setAxes = this._setAxes();

    return (
      <g>
        {
          _setStack(dataset).map((area, key) => {
            return (
              <path
                className={`${areaClassName} area`}
                fill={area.color}
                d={_setAxes(area.data)}
                style={area.style}
                key={key}
                />
            )
          })
        }
      </g>
    );
  }

  _setStack () {
    const{
      chartSeries
    } = this.props;

    var buildOut = function(len) {
      // baseline for positive and negative bars respectively.
      var currentXOffsets = [];
      var currentXIndex = 0;
      return function(d, y0, y){

        if(currentXIndex++ % len === 0){
          currentXOffsets = [0, 0];
        }

        if(y >= 0) {
          d.y0 = currentXOffsets[1];
          d.y = y;
          currentXOffsets[1] += y;
        } else {
          d.y0 = currentXOffsets[0] + y;
          d.y = -y;
          currentXOffsets[0] += y;
        }

      }
    }
    return d3.layout.stack()
      .values((d) => { return d.data; })
      .out(buildOut(chartSeries.length));

  }

  _setAxes () {
    const {
      xScaleSet,
      yScaleSet
    } = this.props;

    return D3Shape.area()
      .x((d) => { return xScaleSet(d.x) })
      .y0((d) => { return yScaleSet(d.y0) })
      .y1((d) => { return yScaleSet(d.y0 + d.y) });
  }

  render() {
    var area = this._mkStack();

    return (
      <g>
        {area}
      </g>
    );
  }
}
