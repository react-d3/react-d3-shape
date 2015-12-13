"use strict";

import {
  default as React,
  Component,
  PropTypes,
} from 'react';

import d3 from 'd3';
import ReactFauxDOM from 'react-faux-dom';
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

  _mkScatter(dom, dataset) {
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

    var dots = d3.select(dom);

    dots.selectAll('g')
      .data(dataset)
    .enter().append('g')
      .each(function(dot) {

        var symbol = dot.symbol? dot.symbol: defaultSymbol;
        var symbolSize = dot.symbolSize? dot.symbolSize: defaultSymbolSize;

        var dom = d3.select(this)
          .selectAll(`${scatterClassName}`)
          .data(dot.data)
        .enter().append('path')
          .attr('class', 'react-d3-basic__scatter__path')
          .style('fill', dot.color)
          .attr('transform', (d) => { return "translate(" + xScaleSet(d.x) + "," + yScaleSet(d.y) + ")"; })
          .attr('d', d3.svg.symbol().size((d) => { return symbolSize * symbolSize;}).type(symbol))

        // set style for dot
        if(dot.style) {
          for(var key in dot.style) {
            dom.style(key, dot.style[key]);
          }
        }
      })

    return dots;
  }

  render() {
    var d = series(this.props);

    var scatterPlot = ReactFauxDOM.createElement('g');
    var scatter = this._mkScatter(scatterPlot, d);

    return scatter.node().toReact();
  }
}
