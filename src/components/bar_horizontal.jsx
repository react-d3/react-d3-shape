"use strict";

import {
  default as React,
  Component,
} from 'react';

import { series } from '../utils/series';

export default class BarHorizontal extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    onMouseOver: (d) => {},
    onMouseOut: (d) => {},
    barClassName: 'react-d3-basic__bar_horizontal'
  }

  triggerOver(data, e) {
    this.props.onMouseOver(e, data)
  }

  triggerOut(data, e) {
    this.props.onMouseOut(e, data)
  }


  _mkBar(dom) {
    const {
      height,
      margins,
      barClassName,
      xScaleSet,
      yScaleSet
    } = this.props;

    const that = this
    var dataset = series(this.props, true)[0];
    var domain = xScaleSet.domain();
    var zeroBase;

    if (domain[0] * domain[1] < 0) {
      zeroBase = xScaleSet(0);
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] >= 0)) {
      zeroBase = xScaleSet.range()[0];
    } else if (((domain[0] * domain[1]) >= 0) && (domain[0] < 0)) {
      zeroBase = xScaleSet.range()[1];
    }

    return (
      <g>
        {
          dataset.data.map((bar, i) => {
            return (
              <rect
                className= {`${barClassName} bar`}
                y= {yScaleSet(bar.y) || yScaleSet(bar.y) === 0? yScaleSet(bar.y) : -10000}
                x= {bar.x > 0 ? zeroBase: (zeroBase - Math.abs(zeroBase - xScaleSet(bar.x)))}
                height= {yScaleSet.bandwidth()}
                width= {bar.x < domain[0] ? 0: Math.abs(zeroBase - xScaleSet(bar.x))}
                fill= {bar._style.color? bar._style.color: dataset.color}
                style= {Object.assign({}, dataset.style, bar._style)}
                onMouseOut={that.triggerOut.bind(this, bar)}
                onMouseOver={that.triggerOver.bind(this, bar)}
                key={i}
                />
            )
          })
        }
      </g>
    )
  }

  render() {
    var bar = this._mkBar();

    return (
      <g>
        {bar}
      </g>
    )
  }
}
