"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactD3Core = require('react-d3-core');

var _chart = require('../chart');

var _chart2 = _interopRequireDefault(_chart);

var _straightLine = require('../utils/straightLine');

var _straightLine2 = _interopRequireDefault(_straightLine);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
	Renders blank chart.
	User can provide any text to be diplayed on blank chart.
*/

var BlankChart = function (_Component) {
	_inherits(BlankChart, _Component);

	function BlankChart(props) {
		_classCallCheck(this, BlankChart);

		return _possibleConstructorReturn(this, (BlankChart.__proto__ || Object.getPrototypeOf(BlankChart)).call(this, props));
	}

	_createClass(BlankChart, [{
		key: 'renderNoDataTitle',
		value: function renderNoDataTitle(x, y, textValue) {
			return _react2.default.createElement(
				'g',
				null,
				_react2.default.createElement(
					'text',
					{ className: 'chartNoData', x: x, y: y },
					textValue
				)
			);
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    width = _props.width,
			    height = _props.height,
			    margins = _props.margins,
			    showXGrid = _props.showXGrid,
			    showYGrid = _props.showYGrid,
			    xDomain = _props.xDomain,
			    noDataTitleText = _props.noDataTitleText,
			    yTicks = _props.yTicks;


			var xgrid, ygrid, textXMargin, textYMargin;

			if (showXGrid) xgrid = _react2.default.createElement(_reactD3Core.Xgrid, this.props);
			if (showYGrid) ygrid = _react2.default.createElement(_reactD3Core.Ygrid, this.props);
			textXMargin = width / 2 - margins.right;
			textYMargin = height / 2 - margins.bottom;

			return _react2.default.createElement(
				_chart2.default,
				_extends({ width: width, height: height }, this.props),
				_react2.default.createElement(_straightLine2.default, _extends({ x1: 0 - 20, y1: 0, x2: width - margins.right, y2: 0 }, this.props)),
				xgrid,
				ygrid,
				_react2.default.createElement(_reactD3Core.Xaxis, this.props),
				_react2.default.createElement(_reactD3Core.Yaxis, this.props),
				_react2.default.createElement(_straightLine2.default, _extends({ x1: 0 - 20, y1: height - margins.top - margins.bottom, x2: width - 100, y2: height - margins.top - margins.bottom }, this.props)),
				noDataTitleText ? this.renderNoDataTitle(textXMargin, textYMargin, noDataTitleText) : null
			);
		}
	}]);

	return BlankChart;
}(_react.Component);

BlankChart.defaultProps = {
	showXGrid: true,
	showYGrid: false,
	xDomain: [0, 10], // its always good to pass xDomain values for x-axis in case if ther is no data the scale will still have valid values or else it will be default.
	yDomain: [0],
	yTicks: [0],
	noDataTitleText: ""
};
exports.default = BlankChart;