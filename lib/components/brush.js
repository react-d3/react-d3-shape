"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _commonProps = require('../commonProps');

var _commonProps2 = _interopRequireDefault(_commonProps);

var _reactD3Core = require('react-d3-core');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/*
	Renders d3 brush and returns new x-axis values depending on brush movements.
    This allows brush events to be dealt with at the React level so that every chart can have an attached brush
*/
var Brush = function (_Component) {
	_inherits(Brush, _Component);

	function Brush(props) {
		_classCallCheck(this, Brush);

		var _this = _possibleConstructorReturn(this, (Brush.__proto__ || Object.getPrototypeOf(Brush)).call(this, props));

		_this.state = {
			xBrushScaleSet: _this._mkXScale(props)
		};
		return _this;
	}

	_createClass(Brush, [{
		key: '_mkXScale',
		value: function _mkXScale(props) {
			var xScale = props.xScale,
			    xRange = props.xRange,
			    xDomain = props.xDomain,
			    xRangeRoundBands = props.xRangeRoundBands;


			var newXScale = {
				scale: xScale,
				range: xRange,
				domain: xDomain,
				rangeRoundBands: xRangeRoundBands
			};

			return (0, _reactD3Core.scale)(newXScale);
		}
	}, {
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(nextProps) {
			this.state = {
				xBrushScaleSet: this._mkXScale(nextProps)
			};
		}
	}, {
		key: 'componentDidUpdate',
		value: function componentDidUpdate() {
			this._updateBrush();
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			this._updateBrush();
		}
	}, {
		key: '_updateBrush',
		value: function _updateBrush() {
			var _this2 = this;

			var _state = this.state,
			    xBrushScaleSet = _state.xBrushScaleSet,
			    yBrushScaleSet = _state.yBrushScaleSet;
			var _props = this.props,
			    height = _props.height,
			    margins = _props.margins,
			    brushExtent = _props.brushExtent,
			    keepBrushOn = _props.keepBrushOn,
			    onBrushDomainChange = _props.onBrushDomainChange,
			    brushStyle = _props.brushStyle;

			// create d3 svg bursh with xDaomin values

			var brush = d3.svg.brush().x(xBrushScaleSet

			// if user wants to keep brush area selected
			);if (brushExtent) brush = brush.extent(brushExtent);

			brush = brush.on("brushend", function () {
				var newDomain = brush.empty() ? xBrushScaleSet.domain() : brush.extent();
				if (newDomain.length) {
					onBrushDomainChange("x", newDomain);
					if (!keepBrushOn) d3.select(_reactDom2.default.findDOMNode(_this2.refs.brushRect)).call(brush.clear());
				}
			});

			var brushDom = d3.select(_reactDom2.default.findDOMNode(this.refs.brushRect)).call(brush).selectAll('rect').attr("y", -4).attr("height", height - margins.bottom - margins.top + 3

			// apply user defined brush style if provided
			);if (brushStyle) {
				for (var key in brushStyle) {
					brushDom.style(key, brushStyle[key]);
				}
			} else {
				brushDom.style('fill', '#DDD').style('fill-opacity', .75).style('shape-rendering', 'crispEdges');
			}
		}
	}, {
		key: 'render',
		value: function render() {
			return _react2.default.createElement('g', { ref: 'brushRect', className: 'react-d3-basic__brush__rect' });
		}
	}]);

	return Brush;
}(_react.Component);

Brush.defaultProps = _commonProps2.default;
exports.default = Brush;