"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _d = require('d3');

var _d2 = _interopRequireDefault(_d);

var _series = require('../utils/series');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BarStackHorizontal = function (_Component) {
  _inherits(BarStackHorizontal, _Component);

  function BarStackHorizontal(props) {
    _classCallCheck(this, BarStackHorizontal);

    return _possibleConstructorReturn(this, (BarStackHorizontal.__proto__ || Object.getPrototypeOf(BarStackHorizontal)).call(this, props));
  }

  _createClass(BarStackHorizontal, [{
    key: 'triggerOver',
    value: function triggerOver(data, e) {
      this.props.onMouseOver(e, data);
    }
  }, {
    key: 'triggerOut',
    value: function triggerOut(data, e) {
      this.props.onMouseOut(e, data);
    }
  }, {
    key: '_mkBarStack',
    value: function _mkBarStack(dom) {
      var _this2 = this;

      var _props = this.props,
          height = _props.height,
          margins = _props.margins,
          barClassName = _props.barClassName,
          xScaleSet = _props.xScaleSet,
          yScaleSet = _props.yScaleSet,
          barWidth = _props.barWidth;


      var that = this;
      var dataset = (0, _series.series)(this.props, true);
      var _setStack = this._setStack();

      // make areas
      var chart = _d2.default.select(dom).attr("class", "g");

      var domain = xScaleSet.domain();
      var zeroBase;
      var barBandWidth;

      if (domain[0] * domain[1] < 0) {
        zeroBase = xScaleSet(0);
      } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
        zeroBase = xScaleSet.range()[0];
      } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
        zeroBase = xScaleSet.range()[1];
      }

      // user defined barwidth
      if (barWidth) {
        barBandWidth = barWidth;
      } else {
        barBandWidth = yScaleSet.bandwidth();
      }

      return _react2.default.createElement(
        'g',
        null,
        _setStack(dataset).map(function (barGroup, i) {
          return _react2.default.createElement(
            'g',
            {
              className: 'barGroup',
              fill: barGroup.color,
              style: barGroup.style,
              key: i
            },
            barGroup.data.map(function (bar, j) {
              return _react2.default.createElement('rect', {
                className: barClassName + ' bar',
                height: barBandWidth,
                y: yScaleSet(bar.y) || yScaleSet(bar.y) === 0 ? yScaleSet(bar.y) : -10000,
                x: xScaleSet(bar.x0),
                width: Math.abs(xScaleSet(bar.x) - xScaleSet(0)),
                onMouseOut: that.triggerOut.bind(_this2, bar),
                onMouseOver: that.triggerOver.bind(_this2, bar),
                key: j
              });
            })
          );
        })
      );
    }
  }, {
    key: '_setStack',
    value: function _setStack() {
      var chartSeries = this.props.chartSeries;


      var buildOut = function buildOut(len) {
        // baseline for positive and negative bars respectively.
        var currentXOffsets = [];
        var currentXIndex = 0;
        return function (d, x0, x) {

          if (currentXIndex++ % len === 0) {
            currentXOffsets = [0, 0];
          }

          if (x >= 0) {
            d.x0 = currentXOffsets[1];
            d.x = x;
            currentXOffsets[1] += x;
          } else {
            d.x0 = currentXOffsets[0] + x;
            d.x = -x;
            currentXOffsets[0] += x;
          }
        };
      };
      return _d2.default.layout.stack().values(function (d) {
        return d.data;
      }).y(function (d) {
        return d.x;
      }).out(buildOut(chartSeries.length));
    }
  }, {
    key: 'render',
    value: function render() {
      var bar = this._mkBarStack();

      return _react2.default.createElement(
        'g',
        null,
        bar
      );
    }
  }]);

  return BarStackHorizontal;
}(_react.Component);

BarStackHorizontal.defaultProps = {
  onMouseOver: function onMouseOver(d) {},
  onMouseOut: function onMouseOut(d) {},
  barClassName: 'react-d3-basic__bar_stack_horizontal'
};
exports.default = BarStackHorizontal;