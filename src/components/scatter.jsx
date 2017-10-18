"use strict";

import {
  default as React,
  Component
} from 'react';

import * as PropTypes from 'prop-types';

import D3Shape from 'd3-shape'
import {series} from '../utils/series';

export default class Scatter extends Component {
  constructor (props) {
    super(props);
  }

  static defaultProps = {
    defaultSymbol: 'circle',
    defaultSymbolSize: 10,
    scatterClassName: 'react-d3-basic__scatter'
  }

  _mkScatter(dataset) {
    const {
      scatterClassName,
      defaultSymbol,
      defaultSymbolSize,
      brushSymbol,
      xScaleSet,
      yScaleSet
    } = this.props;

    // for building symbols in brush, set to circle and size to 4
    if(brushSymbol) {
      symbol = 'circle';
      symbolSize = 4
    }

    return (
      <g>
        {
          dataset.map((dot) => {
            var symbol = dot.symbol? dot.symbol: defaultSymbol;
            var symbolSize = dot.symbolSize? dot.symbolSize: defaultSymbolSize;

            return dot.data.map((d) => {
              var symbolFunc = D3Shape.symbol()
                .size(symbolSize * symbolSize)
                .type(
                  () => {
                    console.log(symbol)

                    if(symbol === 'circle') {
                      return D3Shape.symbolCircle
                    }else if(symbol === 'cross') {
                      return D3Shape.symbolCross
                    }else if(symbol === 'diamond') {
                      return D3Shape.symbolDiamond
                    }else if(symbol === 'square') {
                      return D3Shape.symbolSquare
                    }else if(symbol === 'star') {
                      return D3Shape.symbolStar
                    }else if(symbol === 'triangle') {
                      return D3Shape.symbolTriangle
                    }else if(symbol === 'wye') {
                      return D3Shape.symbolWye
                    }else {
                      console.error('Symbol is not support ' + symbol + '.')
                    }
                  }
                )

              return (
                <path
                  className='react-d3-basic__scatter__path'
                  fill={d.color}
                  transform={"translate(" + xScaleSet(d.x) + "," + yScaleSet(d.y) + ")"}
                  d={symbolFunc()}
                  style={dot.style}
                  />
              )
            })
          })
        }
      </g>
    )
  }

  render() {
    var d = series(this.props);
    var scatter = this._mkScatter(d);

    return (
      <g>
        {scatter}
      </g>
    )
  }
}
