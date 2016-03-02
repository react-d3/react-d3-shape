var ReactD3Shape =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _series = __webpack_require__(1);

	Object.defineProperty(exports, 'series', {
	  enumerable: true,
	  get: function get() {
	    return _series.series;
	  }
	});

	var _chart = __webpack_require__(3);

	Object.defineProperty(exports, 'Chart', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_chart).default;
	  }
	});

	var _chartpie = __webpack_require__(87);

	Object.defineProperty(exports, 'ChartPie', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_chartpie).default;
	  }
	});

	var _line = __webpack_require__(88);

	Object.defineProperty(exports, 'Line', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_line).default;
	  }
	});

	var _area = __webpack_require__(91);

	Object.defineProperty(exports, 'Area', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_area).default;
	  }
	});

	var _area_stack = __webpack_require__(92);

	Object.defineProperty(exports, 'AreaStack', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_area_stack).default;
	  }
	});

	var _bar = __webpack_require__(93);

	Object.defineProperty(exports, 'Bar', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_bar).default;
	  }
	});

	var _bar_horizontal = __webpack_require__(94);

	Object.defineProperty(exports, 'BarHorizontal', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_bar_horizontal).default;
	  }
	});

	var _bar_group = __webpack_require__(95);

	Object.defineProperty(exports, 'BarGroup', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_bar_group).default;
	  }
	});

	var _bar_group_horizontal = __webpack_require__(96);

	Object.defineProperty(exports, 'BarGroupHorizontal', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_bar_group_horizontal).default;
	  }
	});

	var _bar_stack = __webpack_require__(97);

	Object.defineProperty(exports, 'BarStack', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_bar_stack).default;
	  }
	});

	var _bar_stack_horizontal = __webpack_require__(98);

	Object.defineProperty(exports, 'BarStackHorizontal', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_bar_stack_horizontal).default;
	  }
	});

	var _pie = __webpack_require__(99);

	Object.defineProperty(exports, 'Pie', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_pie).default;
	  }
	});

	var _scatter = __webpack_require__(100);

	Object.defineProperty(exports, 'Scatter', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_scatter).default;
	  }
	});

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.series = series;

	var _d = __webpack_require__(2);

	var _d2 = _interopRequireDefault(_d);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function series(props, horizontal) {
	  var data = props.data;
	  var chartSeries = props.chartSeries;
	  var x = props.x;
	  var y = props.y;
	  var categoricalColors = props.categoricalColors;

	  categoricalColors = categoricalColors || _d2.default.scale.category10();

	  var chartSeriesData = chartSeries.map(function (f, i) {

	    // set a color if not set
	    f.color = f.color || categoricalColors(i);

	    // set name if not set
	    f.name = f.name || f.field;

	    // mapping throught data set x, y data
	    var mapping = data.map(function (d) {
	      if (!d._style) d._style = {};

	      if (!horizontal) {
	        return {
	          x: x(d),
	          y: y(d[f.field]),
	          color: f.color,
	          name: f.name,
	          field: f.field,
	          _style: d._style
	        };
	      } else {
	        return {
	          y: y(d),
	          x: x(d[f.field]),
	          color: f.color,
	          name: f.name,
	          field: f.field,
	          _style: d._style
	        };
	      }
	    });

	    return Object.assign(f, { data: mapping });
	  });

	  return chartSeriesData;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = d3;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(12);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(6);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(13);

	var _index6 = _interopRequireDefault(_index5);

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _class, _temp;

	var _reactD3Core = __webpack_require__(56);

	var _d = __webpack_require__(2);

	var _d2 = _interopRequireDefault(_d);

	var _commonProps = __webpack_require__(86);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _components = {
	  ChartSvg: {
	    displayName: 'ChartSvg'
	  }
	};

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: 'src/chart.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: 'src/chart.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var ChartSvg = _wrapComponent('ChartSvg')((_temp = _class = function (_Component) {
	  _inherits(ChartSvg, _Component);

	  function ChartSvg(props) {
	    _classCallCheck(this, ChartSvg);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ChartSvg).call(this, props));
	  }

	  _createClass(ChartSvg, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var horizontal = _props.horizontal;
	      var height = _props.height;
	      var width = _props.width;
	      var margins = _props.margins;
	      var xScale = _props.xScale;
	      var yScale = _props.yScale;
	      var xRange = _props.xRange;
	      var yRange = _props.yRange;
	      var xDomain = _props.xDomain;
	      var yDomain = _props.yDomain;
	      var xTicks = _props.xTicks;
	      var yTicks = _props.yTicks;
	      var xTickFormat = _props.xTickFormat;
	      var yTickFormat = _props.yTickFormat;
	      var xRangeRoundBands = _props.xRangeRoundBands;
	      var yRangeRoundBands = _props.yRangeRoundBands;
	      var stack = _props.stack;
	      var data = _props.data;
	      var svgClassName = _props.svgClassName;
	      var id = _props.id;
	      var x = _props.x;
	      var y = _props.y;

	      console.log(yScale);

	      var xRange = xRange || [0, width - margins.left - margins.right];
	      var yRange = yRange || [height - margins.top - margins.bottom, 0];
	      var xRangeRoundBands = xRangeRoundBands || { interval: [0, width - margins.left - margins.right], padding: .1 };
	      var yRangeRoundBands = yRangeRoundBands || { interval: [0, height - margins.top - margins.bottom], padding: .1 };
	      var xDomain = xDomain || (0, _reactD3Core.xDomainCount)(this.props, stack, horizontal);
	      var yDomain = yDomain || (0, _reactD3Core.yDomainCount)(this.props, stack, horizontal);

	      var newXScale = {
	        scale: xScale,
	        range: xRange,
	        domain: xDomain,
	        rangeRoundBands: xRangeRoundBands
	      };

	      var xScaleSet = (0, _reactD3Core.scale)(newXScale);

	      var newYScale = {
	        scale: yScale,
	        range: yRange,
	        domain: yDomain,
	        rangeRoundBands: yRangeRoundBands
	      };

	      var yScaleSet = (0, _reactD3Core.scale)(newYScale);

	      var children = _react3.default.Children.map(this.props.children, function (el) {
	        if (el) {
	          return _react3.default.cloneElement(el, {
	            height: height,
	            width: width,
	            margins: margins,
	            xScaleSet: xScaleSet,
	            yScaleSet: yScaleSet,
	            xDomain: xDomain,
	            yDomain: yDomain,
	            xRange: xRange,
	            yRange: yRange,
	            xRangeRoundBands: xRangeRoundBands,
	            yRangeRoundBands: yRangeRoundBands,
	            xScale: xScale,
	            yScale: yScale,
	            xTickFormat: xTickFormat,
	            yTickFormat: yTickFormat,
	            xTicks: xTicks,
	            yTicks: yTicks,
	            data: data,
	            x: x,
	            y: y
	          });
	        } else {
	          return null;
	        }
	      });

	      var t = 'translate(' + margins.left + ', ' + margins.top + ')';

	      return _react3.default.createElement('svg', {
	        height: height,
	        width: width,
	        className: svgClassName,
	        id: id,
	        ref: 'svgContainer'
	      }, _react3.default.createElement('g', {
	        transform: t
	      }, children));
	    }
	  }]);

	  return ChartSvg;
	}(_react2.Component), _class.defaultProps = Object.assign(_commonProps2.default, {
	  svgClassName: 'react-d3-core__container_svg'
	}), _class.propTypes = {
	  id: _react2.PropTypes.string,
	  width: _react2.PropTypes.number.isRequired,
	  height: _react2.PropTypes.number.isRequired,
	  margins: _react2.PropTypes.object.isRequired,
	  svgClassName: _react2.PropTypes.string.isRequired
	}, _temp));

	exports.default = ChartSvg;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	exports.__esModule = true;

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _styleJs = __webpack_require__(7);

	var _styleJs2 = _interopRequireDefault(_styleJs);

	var _errorStackParser = __webpack_require__(8);

	var _errorStackParser2 = _interopRequireDefault(_errorStackParser);

	var _objectAssign = __webpack_require__(10);

	var _objectAssign2 = _interopRequireDefault(_objectAssign);

	var _lib = __webpack_require__(11);

	var __$Getters__ = [];
	var __$Setters__ = [];
	var __$Resetters__ = [];

	function __GetDependency__(name) {
	  return __$Getters__[name]();
	}

	function __Rewire__(name, value) {
	  __$Setters__[name](value);
	}

	function __ResetDependency__(name) {
	  __$Resetters__[name]();
	}

	var __RewireAPI__ = {
	  '__GetDependency__': __GetDependency__,
	  '__get__': __GetDependency__,
	  '__Rewire__': __Rewire__,
	  '__set__': __Rewire__,
	  '__ResetDependency__': __ResetDependency__
	};
	var React = _react2['default'];
	var Component = _react.Component;
	var PropTypes = _react.PropTypes;

	__$Getters__['React'] = function () {
	  return React;
	};

	__$Setters__['React'] = function (value) {
	  React = value;
	};

	__$Resetters__['React'] = function () {
	  React = _react2['default'];
	};

	__$Getters__['Component'] = function () {
	  return Component;
	};

	__$Setters__['Component'] = function (value) {
	  Component = value;
	};

	__$Resetters__['Component'] = function () {
	  Component = _react.Component;
	};

	__$Getters__['PropTypes'] = function () {
	  return PropTypes;
	};

	__$Setters__['PropTypes'] = function (value) {
	  PropTypes = value;
	};

	__$Resetters__['PropTypes'] = function () {
	  PropTypes = _react.PropTypes;
	};

	var style = _styleJs2['default'];

	__$Getters__['style'] = function () {
	  return style;
	};

	__$Setters__['style'] = function (value) {
	  style = value;
	};

	__$Resetters__['style'] = function () {
	  style = _styleJs2['default'];
	};

	var ErrorStackParser = _errorStackParser2['default'];

	__$Getters__['ErrorStackParser'] = function () {
	  return ErrorStackParser;
	};

	__$Setters__['ErrorStackParser'] = function (value) {
	  ErrorStackParser = value;
	};

	__$Resetters__['ErrorStackParser'] = function () {
	  ErrorStackParser = _errorStackParser2['default'];
	};

	var assign = _objectAssign2['default'];

	__$Getters__['assign'] = function () {
	  return assign;
	};

	__$Setters__['assign'] = function (value) {
	  assign = value;
	};

	__$Resetters__['assign'] = function () {
	  assign = _objectAssign2['default'];
	};

	var isFilenameAbsolute = _lib.isFilenameAbsolute;
	var makeUrl = _lib.makeUrl;
	var makeLinkText = _lib.makeLinkText;

	__$Getters__['isFilenameAbsolute'] = function () {
	  return isFilenameAbsolute;
	};

	__$Setters__['isFilenameAbsolute'] = function (value) {
	  isFilenameAbsolute = value;
	};

	__$Resetters__['isFilenameAbsolute'] = function () {
	  isFilenameAbsolute = _lib.isFilenameAbsolute;
	};

	__$Getters__['makeUrl'] = function () {
	  return makeUrl;
	};

	__$Setters__['makeUrl'] = function (value) {
	  makeUrl = value;
	};

	__$Resetters__['makeUrl'] = function () {
	  makeUrl = _lib.makeUrl;
	};

	__$Getters__['makeLinkText'] = function () {
	  return makeLinkText;
	};

	__$Setters__['makeLinkText'] = function (value) {
	  makeLinkText = value;
	};

	__$Resetters__['makeLinkText'] = function () {
	  makeLinkText = _lib.makeLinkText;
	};

	var RedBox = (function (_Component) {
	  _inherits(RedBox, _Component);

	  function RedBox() {
	    _classCallCheck(this, RedBox);

	    _Component.apply(this, arguments);
	  }

	  RedBox.prototype.render = function render() {
	    var _props = this.props;
	    var error = _props.error;
	    var filename = _props.filename;
	    var editorScheme = _props.editorScheme;
	    var useLines = _props.useLines;
	    var useColumns = _props.useColumns;

	    var _assign = assign({}, style, this.props.style);

	    var redbox = _assign.redbox;
	    var message = _assign.message;
	    var stack = _assign.stack;
	    var frame = _assign.frame;
	    var file = _assign.file;
	    var linkToFile = _assign.linkToFile;

	    var frames = ErrorStackParser.parse(error).map(function (f, index) {
	      var text = undefined;
	      var url = undefined;

	      if (index === 0 && filename && !isFilenameAbsolute(f.fileName)) {
	        url = makeUrl(filename, editorScheme);
	        text = makeLinkText(filename);
	      } else {
	        var lines = useLines ? f.lineNumber : null;
	        var columns = useColumns ? f.columnNumber : null;
	        url = makeUrl(f.fileName, editorScheme, lines, columns);
	        text = makeLinkText(f.fileName, lines, columns);
	      }

	      return React.createElement(
	        'div',
	        { style: frame, key: index },
	        React.createElement(
	          'div',
	          null,
	          f.functionName
	        ),
	        React.createElement(
	          'div',
	          { style: file },
	          React.createElement(
	            'a',
	            { href: url, style: linkToFile },
	            text
	          )
	        )
	      );
	    });
	    return React.createElement(
	      'div',
	      { style: redbox },
	      React.createElement(
	        'div',
	        { style: message },
	        error.name,
	        ': ',
	        error.message
	      ),
	      React.createElement(
	        'div',
	        { style: stack },
	        frames
	      )
	    );
	  };

	  _createClass(RedBox, null, [{
	    key: 'propTypes',
	    value: {
	      error: PropTypes.instanceOf(Error).isRequired,
	      filename: PropTypes.string,
	      editorScheme: PropTypes.string,
	      useLines: PropTypes.bool,
	      useColumns: PropTypes.bool
	    },
	    enumerable: true
	  }, {
	    key: 'displayName',
	    value: 'RedBox',
	    enumerable: true
	  }, {
	    key: 'defaultProps',
	    value: {
	      useLines: true,
	      useColumns: true
	    },
	    enumerable: true
	  }]);

	  return RedBox;
	})(Component);

	var _defaultExport = RedBox;

	if (typeof _defaultExport === 'object' || typeof _defaultExport === 'function') {
	  Object.defineProperty(_defaultExport, '__Rewire__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__set__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__ResetDependency__', {
	    'value': __ResetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__GetDependency__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__get__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__RewireAPI__', {
	    'value': __RewireAPI__,
	    'enumberable': false
	  });
	}

	exports['default'] = _defaultExport;
	exports.__GetDependency__ = __GetDependency__;
	exports.__get__ = __GetDependency__;
	exports.__Rewire__ = __Rewire__;
	exports.__set__ = __Rewire__;
	exports.__ResetDependency__ = __ResetDependency__;
	exports.__RewireAPI__ = __RewireAPI__;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var __$Getters__ = [];
	var __$Setters__ = [];
	var __$Resetters__ = [];

	function __GetDependency__(name) {
	  return __$Getters__[name]();
	}

	function __Rewire__(name, value) {
	  __$Setters__[name](value);
	}

	function __ResetDependency__(name) {
	  __$Resetters__[name]();
	}

	var __RewireAPI__ = {
	  '__GetDependency__': __GetDependency__,
	  '__get__': __GetDependency__,
	  '__Rewire__': __Rewire__,
	  '__set__': __Rewire__,
	  '__ResetDependency__': __ResetDependency__
	};
	var _defaultExport = {
	  redbox: {
	    boxSizing: 'border-box',
	    fontFamily: 'sans-serif',
	    position: 'fixed',
	    padding: 10,
	    top: 0,
	    left: 0,
	    bottom: 0,
	    right: 0,
	    width: '100%',
	    background: 'rgb(204, 0, 0)',
	    color: 'white',
	    zIndex: 9999,
	    textAlign: 'left',
	    fontSize: '16px',
	    lineHeight: 1.2
	  },
	  message: {
	    fontWeight: 'bold'
	  },
	  stack: {
	    fontFamily: 'monospace',
	    marginTop: '2em'
	  },
	  frame: {
	    marginTop: '1em'
	  },
	  file: {
	    fontSize: '0.8em',
	    color: 'rgba(255, 255, 255, 0.7)'
	  },
	  linkToFile: {
	    textDecoration: 'none',
	    color: 'rgba(255, 255, 255, 0.7)'
	  }
	};

	if (typeof _defaultExport === 'object' || typeof _defaultExport === 'function') {
	  Object.defineProperty(_defaultExport, '__Rewire__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__set__', {
	    'value': __Rewire__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__ResetDependency__', {
	    'value': __ResetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__GetDependency__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__get__', {
	    'value': __GetDependency__,
	    'enumberable': false
	  });
	  Object.defineProperty(_defaultExport, '__RewireAPI__', {
	    'value': __RewireAPI__,
	    'enumberable': false
	  });
	}

	exports['default'] = _defaultExport;
	exports.__GetDependency__ = __GetDependency__;
	exports.__get__ = __GetDependency__;
	exports.__Rewire__ = __Rewire__;
	exports.__set__ = __Rewire__;
	exports.__ResetDependency__ = __ResetDependency__;
	exports.__RewireAPI__ = __RewireAPI__;
	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    'use strict';
	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

	    /* istanbul ignore next */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(9)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory(require('stackframe'));
	    } else {
	        root.ErrorStackParser = factory(root.StackFrame);
	    }
	}(this, function ErrorStackParser(StackFrame) {
	    'use strict';

	    var FIREFOX_SAFARI_STACK_REGEXP = /(^|@)\S+\:\d+/;
	    var CHROME_IE_STACK_REGEXP = /^\s*at .*(\S+\:\d+|\(native\))/m;
	    var SAFARI_NATIVE_CODE_REGEXP = /^(eval@)?(\[native code\])?$/;

	    function _map(array, fn, thisArg) {
	        if (typeof Array.prototype.map === 'function') {
	            return array.map(fn, thisArg);
	        } else {
	            var output = new Array(array.length);
	            for (var i = 0; i < array.length; i++) {
	                output[i] = fn.call(thisArg, array[i]);
	            }
	            return output;
	        }
	    }

	    function _filter(array, fn, thisArg) {
	        if (typeof Array.prototype.filter === 'function') {
	            return array.filter(fn, thisArg);
	        } else {
	            var output = [];
	            for (var i = 0; i < array.length; i++) {
	                if (fn.call(thisArg, array[i])) {
	                    output.push(array[i]);
	                }
	            }
	            return output;
	        }
	    }

	    return {
	        /**
	         * Given an Error object, extract the most information from it.
	         * @param error {Error}
	         * @return Array[StackFrame]
	         */
	        parse: function ErrorStackParser$$parse(error) {
	            if (typeof error.stacktrace !== 'undefined' || typeof error['opera#sourceloc'] !== 'undefined') {
	                return this.parseOpera(error);
	            } else if (error.stack && error.stack.match(CHROME_IE_STACK_REGEXP)) {
	                return this.parseV8OrIE(error);
	            } else if (error.stack) {
	                return this.parseFFOrSafari(error);
	            } else {
	                throw new Error('Cannot parse given Error object');
	            }
	        },

	        /**
	         * Separate line and column numbers from a URL-like string.
	         * @param urlLike String
	         * @return Array[String]
	         */
	        extractLocation: function ErrorStackParser$$extractLocation(urlLike) {
	            // Fail-fast but return locations like "(native)"
	            if (urlLike.indexOf(':') === -1) {
	                return [urlLike];
	            }

	            var locationParts = urlLike.replace(/[\(\)\s]/g, '').split(':');
	            var lastNumber = locationParts.pop();
	            var possibleNumber = locationParts[locationParts.length - 1];
	            if (!isNaN(parseFloat(possibleNumber)) && isFinite(possibleNumber)) {
	                var lineNumber = locationParts.pop();
	                return [locationParts.join(':'), lineNumber, lastNumber];
	            } else {
	                return [locationParts.join(':'), lastNumber, undefined];
	            }
	        },

	        parseV8OrIE: function ErrorStackParser$$parseV8OrIE(error) {
	            var filtered = _filter(error.stack.split('\n'), function (line) {
	                return !!line.match(CHROME_IE_STACK_REGEXP);
	            }, this);

	            return _map(filtered, function (line) {
	                if (line.indexOf('(eval ') > -1) {
	                    // Throw away eval information until we implement stacktrace.js/stackframe#8
	                    line = line.replace(/eval code/g, 'eval').replace(/(\(eval at [^\()]*)|(\)\,.*$)/g, '');
	                }
	                var tokens = line.replace(/^\s+/, '').replace(/\(eval code/g, '(').split(/\s+/).slice(1);
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionName = tokens.join(' ') || undefined;
	                var fileName = locationParts[0] === 'eval' ? undefined : locationParts[0];

	                return new StackFrame(functionName, undefined, fileName, locationParts[1], locationParts[2], line);
	            }, this);
	        },

	        parseFFOrSafari: function ErrorStackParser$$parseFFOrSafari(error) {
	            var filtered = _filter(error.stack.split('\n'), function (line) {
	                return !line.match(SAFARI_NATIVE_CODE_REGEXP);
	            }, this);

	            return _map(filtered, function (line) {
	                // Throw away eval information until we implement stacktrace.js/stackframe#8
	                if (line.indexOf(' > eval') > -1) {
	                    line = line.replace(/ line (\d+)(?: > eval line \d+)* > eval\:\d+\:\d+/g, ':$1');
	                }

	                if (line.indexOf('@') === -1 && line.indexOf(':') === -1) {
	                    // Safari eval frames only have function names and nothing else
	                    return new StackFrame(line);
	                } else {
	                    var tokens = line.split('@');
	                    var locationParts = this.extractLocation(tokens.pop());
	                    var functionName = tokens.shift() || undefined;
	                    return new StackFrame(functionName, undefined, locationParts[0], locationParts[1], locationParts[2], line);
	                }
	            }, this);
	        },

	        parseOpera: function ErrorStackParser$$parseOpera(e) {
	            if (!e.stacktrace || (e.message.indexOf('\n') > -1 &&
	                e.message.split('\n').length > e.stacktrace.split('\n').length)) {
	                return this.parseOpera9(e);
	            } else if (!e.stack) {
	                return this.parseOpera10(e);
	            } else {
	                return this.parseOpera11(e);
	            }
	        },

	        parseOpera9: function ErrorStackParser$$parseOpera9(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)/i;
	            var lines = e.message.split('\n');
	            var result = [];

	            for (var i = 2, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(new StackFrame(undefined, undefined, match[2], match[1], undefined, lines[i]));
	                }
	            }

	            return result;
	        },

	        parseOpera10: function ErrorStackParser$$parseOpera10(e) {
	            var lineRE = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
	            var lines = e.stacktrace.split('\n');
	            var result = [];

	            for (var i = 0, len = lines.length; i < len; i += 2) {
	                var match = lineRE.exec(lines[i]);
	                if (match) {
	                    result.push(new StackFrame(match[3] || undefined, undefined, match[2], match[1], undefined, lines[i]));
	                }
	            }

	            return result;
	        },

	        // Opera 10.65+ Error.stack very similar to FF/Safari
	        parseOpera11: function ErrorStackParser$$parseOpera11(error) {
	            var filtered = _filter(error.stack.split('\n'), function (line) {
	                return !!line.match(FIREFOX_SAFARI_STACK_REGEXP) &&
	                    !line.match(/^Error created at/);
	            }, this);

	            return _map(filtered, function (line) {
	                var tokens = line.split('@');
	                var locationParts = this.extractLocation(tokens.pop());
	                var functionCall = (tokens.shift() || '');
	                var functionName = functionCall
	                        .replace(/<anonymous function(: (\w+))?>/, '$2')
	                        .replace(/\([^\)]*\)/g, '') || undefined;
	                var argsRaw;
	                if (functionCall.match(/\(([^\)]*)\)/)) {
	                    argsRaw = functionCall.replace(/^[^\(]+\(([^\)]*)\)$/, '$1');
	                }
	                var args = (argsRaw === undefined || argsRaw === '[arguments not available]') ? undefined : argsRaw.split(',');
	                return new StackFrame(functionName, args, locationParts[0], locationParts[1], locationParts[2], line);
	            }, this);
	        }
	    };
	}));



/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (root, factory) {
	    'use strict';
	    // Universal Module Definition (UMD) to support AMD, CommonJS/Node.js, Rhino, and browsers.

	    /* istanbul ignore next */
	    if (true) {
	        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory), __WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ? (__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	    } else if (typeof exports === 'object') {
	        module.exports = factory();
	    } else {
	        root.StackFrame = factory();
	    }
	}(this, function () {
	    'use strict';
	    function _isNumber(n) {
	        return !isNaN(parseFloat(n)) && isFinite(n);
	    }

	    function StackFrame(functionName, args, fileName, lineNumber, columnNumber, source) {
	        if (functionName !== undefined) {
	            this.setFunctionName(functionName);
	        }
	        if (args !== undefined) {
	            this.setArgs(args);
	        }
	        if (fileName !== undefined) {
	            this.setFileName(fileName);
	        }
	        if (lineNumber !== undefined) {
	            this.setLineNumber(lineNumber);
	        }
	        if (columnNumber !== undefined) {
	            this.setColumnNumber(columnNumber);
	        }
	        if (source !== undefined) {
	            this.setSource(source);
	        }
	    }

	    StackFrame.prototype = {
	        getFunctionName: function () {
	            return this.functionName;
	        },
	        setFunctionName: function (v) {
	            this.functionName = String(v);
	        },

	        getArgs: function () {
	            return this.args;
	        },
	        setArgs: function (v) {
	            if (Object.prototype.toString.call(v) !== '[object Array]') {
	                throw new TypeError('Args must be an Array');
	            }
	            this.args = v;
	        },

	        // NOTE: Property name may be misleading as it includes the path,
	        // but it somewhat mirrors V8's JavaScriptStackTraceApi
	        // https://code.google.com/p/v8/wiki/JavaScriptStackTraceApi and Gecko's
	        // http://mxr.mozilla.org/mozilla-central/source/xpcom/base/nsIException.idl#14
	        getFileName: function () {
	            return this.fileName;
	        },
	        setFileName: function (v) {
	            this.fileName = String(v);
	        },

	        getLineNumber: function () {
	            return this.lineNumber;
	        },
	        setLineNumber: function (v) {
	            if (!_isNumber(v)) {
	                throw new TypeError('Line Number must be a Number');
	            }
	            this.lineNumber = Number(v);
	        },

	        getColumnNumber: function () {
	            return this.columnNumber;
	        },
	        setColumnNumber: function (v) {
	            if (!_isNumber(v)) {
	                throw new TypeError('Column Number must be a Number');
	            }
	            this.columnNumber = Number(v);
	        },

	        getSource: function () {
	            return this.source;
	        },
	        setSource: function (v) {
	            this.source = String(v);
	        },

	        toString: function() {
	            var functionName = this.getFunctionName() || '{anonymous}';
	            var args = '(' + (this.getArgs() || []).join(',') + ')';
	            var fileName = this.getFileName() ? ('@' + this.getFileName()) : '';
	            var lineNumber = _isNumber(this.getLineNumber()) ? (':' + this.getLineNumber()) : '';
	            var columnNumber = _isNumber(this.getColumnNumber()) ? (':' + this.getColumnNumber()) : '';
	            return functionName + args + fileName + lineNumber + columnNumber;
	        }
	    };

	    return StackFrame;
	}));


/***/ },
/* 10 */
/***/ function(module, exports) {

	/* eslint-disable no-unused-vars */
	'use strict';
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	var propIsEnumerable = Object.prototype.propertyIsEnumerable;

	function toObject(val) {
		if (val === null || val === undefined) {
			throw new TypeError('Object.assign cannot be called with null or undefined');
		}

		return Object(val);
	}

	module.exports = Object.assign || function (target, source) {
		var from;
		var to = toObject(target);
		var symbols;

		for (var s = 1; s < arguments.length; s++) {
			from = Object(arguments[s]);

			for (var key in from) {
				if (hasOwnProperty.call(from, key)) {
					to[key] = from[key];
				}
			}

			if (Object.getOwnPropertySymbols) {
				symbols = Object.getOwnPropertySymbols(from);
				for (var i = 0; i < symbols.length; i++) {
					if (propIsEnumerable.call(from, symbols[i])) {
						to[symbols[i]] = from[symbols[i]];
					}
				}
			}
		}

		return to;
	};


/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';

	exports.__esModule = true;
	var __$Getters__ = [];
	var __$Setters__ = [];
	var __$Resetters__ = [];

	function __GetDependency__(name) {
	  return __$Getters__[name]();
	}

	function __Rewire__(name, value) {
	  __$Setters__[name](value);
	}

	function __ResetDependency__(name) {
	  __$Resetters__[name]();
	}

	var __RewireAPI__ = {
	  '__GetDependency__': __GetDependency__,
	  '__get__': __GetDependency__,
	  '__Rewire__': __Rewire__,
	  '__set__': __Rewire__,
	  '__ResetDependency__': __ResetDependency__
	};
	var filenameWithoutLoaders = function filenameWithoutLoaders() {
	  var filename = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];

	  var index = filename.lastIndexOf('!');

	  return index < 0 ? filename : filename.substr(index + 1);
	};

	var _filenameWithoutLoaders = filenameWithoutLoaders;

	__$Getters__['filenameWithoutLoaders'] = function () {
	  return filenameWithoutLoaders;
	};

	__$Setters__['filenameWithoutLoaders'] = function (value) {
	  exports.filenameWithoutLoaders = filenameWithoutLoaders = value;
	};

	__$Resetters__['filenameWithoutLoaders'] = function () {
	  exports.filenameWithoutLoaders = filenameWithoutLoaders = _filenameWithoutLoaders;
	};

	exports.filenameWithoutLoaders = _filenameWithoutLoaders;
	var filenameHasLoaders = function filenameHasLoaders(filename) {
	  var actualFilename = filenameWithoutLoaders(filename);

	  return actualFilename !== filename;
	};

	var _filenameHasLoaders = filenameHasLoaders;

	__$Getters__['filenameHasLoaders'] = function () {
	  return filenameHasLoaders;
	};

	__$Setters__['filenameHasLoaders'] = function (value) {
	  exports.filenameHasLoaders = filenameHasLoaders = value;
	};

	__$Resetters__['filenameHasLoaders'] = function () {
	  exports.filenameHasLoaders = filenameHasLoaders = _filenameHasLoaders;
	};

	exports.filenameHasLoaders = _filenameHasLoaders;
	var filenameHasSchema = function filenameHasSchema(filename) {
	  return (/^[\w]+\:/.test(filename)
	  );
	};

	var _filenameHasSchema = filenameHasSchema;

	__$Getters__['filenameHasSchema'] = function () {
	  return filenameHasSchema;
	};

	__$Setters__['filenameHasSchema'] = function (value) {
	  exports.filenameHasSchema = filenameHasSchema = value;
	};

	__$Resetters__['filenameHasSchema'] = function () {
	  exports.filenameHasSchema = filenameHasSchema = _filenameHasSchema;
	};

	exports.filenameHasSchema = _filenameHasSchema;
	var isFilenameAbsolute = function isFilenameAbsolute(filename) {
	  var actualFilename = filenameWithoutLoaders(filename);

	  if (actualFilename.indexOf('/') === 0) {
	    return true;
	  }

	  return false;
	};

	var _isFilenameAbsolute = isFilenameAbsolute;

	__$Getters__['isFilenameAbsolute'] = function () {
	  return isFilenameAbsolute;
	};

	__$Setters__['isFilenameAbsolute'] = function (value) {
	  exports.isFilenameAbsolute = isFilenameAbsolute = value;
	};

	__$Resetters__['isFilenameAbsolute'] = function () {
	  exports.isFilenameAbsolute = isFilenameAbsolute = _isFilenameAbsolute;
	};

	exports.isFilenameAbsolute = _isFilenameAbsolute;
	var makeUrl = function makeUrl(filename, scheme, line, column) {
	  var actualFilename = filenameWithoutLoaders(filename);

	  if (filenameHasSchema(filename)) {
	    return actualFilename;
	  }

	  var url = 'file://' + actualFilename;

	  if (scheme) {
	    url = scheme + '://open?url=' + url;

	    if (line && actualFilename === filename) {
	      url = url + '&line=' + line;

	      if (column) {
	        url = url + '&column=' + column;
	      }
	    }
	  }

	  return url;
	};

	var _makeUrl = makeUrl;

	__$Getters__['makeUrl'] = function () {
	  return makeUrl;
	};

	__$Setters__['makeUrl'] = function (value) {
	  exports.makeUrl = makeUrl = value;
	};

	__$Resetters__['makeUrl'] = function () {
	  exports.makeUrl = makeUrl = _makeUrl;
	};

	exports.makeUrl = _makeUrl;
	var makeLinkText = function makeLinkText(filename, line, column) {
	  var text = filenameWithoutLoaders(filename);

	  if (line && text === filename) {
	    text = text + ':' + line;

	    if (column) {
	      text = text + ':' + column;
	    }
	  }

	  return text;
	};
	var _makeLinkText = makeLinkText;

	__$Getters__['makeLinkText'] = function () {
	  return makeLinkText;
	};

	__$Setters__['makeLinkText'] = function (value) {
	  exports.makeLinkText = makeLinkText = value;
	};

	__$Resetters__['makeLinkText'] = function () {
	  exports.makeLinkText = makeLinkText = _makeLinkText;
	};

	exports.makeLinkText = _makeLinkText;
	exports.__GetDependency__ = __GetDependency__;
	exports.__get__ = __GetDependency__;
	exports.__Rewire__ = __Rewire__;
	exports.__set__ = __Rewire__;
	exports.__ResetDependency__ = __ResetDependency__;
	exports.__RewireAPI__ = __RewireAPI__;
	exports['default'] = __RewireAPI__;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = catchErrors;
	function catchErrors(_ref) {
	  var filename = _ref.filename;
	  var components = _ref.components;
	  var imports = _ref.imports;

	  var _imports = _slicedToArray(imports, 3);

	  var React = _imports[0];
	  var ErrorReporter = _imports[1];
	  var reporterOptions = _imports[2];

	  if (!React || !React.Component) {
	    throw new Error('imports[0] for react-transform-catch-errors does not look like React.');
	  }
	  if (typeof ErrorReporter !== 'function') {
	    throw new Error('imports[1] for react-transform-catch-errors does not look like a React component.');
	  }

	  return function wrapToCatchErrors(ReactClass, componentId) {
	    var originalRender = ReactClass.prototype.render;

	    ReactClass.prototype.render = function tryRender() {
	      try {
	        return originalRender.apply(this, arguments);
	      } catch (err) {
	        setTimeout(function () {
	          if (typeof console.reportErrorsAsExceptions !== 'undefined') {
	            var prevReportErrorAsExceptions = console.reportErrorsAsExceptions;
	            // We're in React Native. Don't throw.
	            // Stop react-native from triggering its own error handler
	            console.reportErrorsAsExceptions = false;
	            // Log an error
	            console.error(err);
	            // Reactivate it so other errors are still handled
	            console.reportErrorsAsExceptions = prevReportErrorAsExceptions;
	          } else {
	            throw err;
	          }
	        });

	        return React.createElement(ErrorReporter, _extends({
	          error: err,
	          filename: filename
	        }, reporterOptions));
	      }
	    };

	    return ReactClass;
	  };
	}

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, '__esModule', {
	  value: true
	});

	var _slicedToArray = (function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i['return']) _i['return'](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError('Invalid attempt to destructure non-iterable instance'); } }; })();

	exports['default'] = proxyReactComponents;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _reactProxy = __webpack_require__(14);

	var _globalWindow = __webpack_require__(55);

	var _globalWindow2 = _interopRequireDefault(_globalWindow);

	var componentProxies = undefined;
	if (_globalWindow2['default'].__reactComponentProxies) {
	  componentProxies = _globalWindow2['default'].__reactComponentProxies;
	} else {
	  componentProxies = {};
	  Object.defineProperty(_globalWindow2['default'], '__reactComponentProxies', {
	    configurable: true,
	    enumerable: false,
	    writable: false,
	    value: componentProxies
	  });
	}

	function proxyReactComponents(_ref) {
	  var filename = _ref.filename;
	  var components = _ref.components;
	  var imports = _ref.imports;
	  var locals = _ref.locals;

	  var _imports = _slicedToArray(imports, 1);

	  var React = _imports[0];

	  var _locals = _slicedToArray(locals, 1);

	  var hot = _locals[0].hot;

	  if (!React.Component) {
	    throw new Error('imports[0] for react-transform-hmr does not look like React.');
	  }

	  if (!hot || typeof hot.accept !== 'function') {
	    throw new Error('locals[0] does not appear to be a `module` object with Hot Module ' + 'replacement API enabled. You should disable react-transform-hmr in ' + 'production by using `env` section in Babel configuration. See the ' + 'example in README: https://github.com/gaearon/react-transform-hmr');
	  }

	  if (Object.keys(components).some(function (key) {
	    return !components[key].isInFunction;
	  })) {
	    hot.accept(function (err) {
	      if (err) {
	        console.warn('[React Transform HMR] There was an error updating ' + filename + ':');
	        console.error(err);
	      }
	    });
	  }

	  var forceUpdate = (0, _reactProxy.getForceUpdate)(React);

	  return function wrapWithProxy(ReactClass, uniqueId) {
	    var _components$uniqueId = components[uniqueId];
	    var _components$uniqueId$isInFunction = _components$uniqueId.isInFunction;
	    var isInFunction = _components$uniqueId$isInFunction === undefined ? false : _components$uniqueId$isInFunction;
	    var _components$uniqueId$displayName = _components$uniqueId.displayName;
	    var displayName = _components$uniqueId$displayName === undefined ? uniqueId : _components$uniqueId$displayName;

	    if (isInFunction) {
	      return ReactClass;
	    }

	    var globalUniqueId = filename + '$' + uniqueId;
	    if (componentProxies[globalUniqueId]) {
	      (function () {
	        console.info('[React Transform HMR] Patching ' + displayName);
	        var instances = componentProxies[globalUniqueId].update(ReactClass);
	        setTimeout(function () {
	          return instances.forEach(forceUpdate);
	        });
	      })();
	    } else {
	      componentProxies[globalUniqueId] = (0, _reactProxy.createProxy)(ReactClass);
	    }

	    return componentProxies[globalUniqueId].get();
	  };
	}

	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.getForceUpdate = exports.createProxy = undefined;

	var _supportsProtoAssignment = __webpack_require__(15);

	var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);

	var _createClassProxy = __webpack_require__(16);

	var _createClassProxy2 = _interopRequireDefault(_createClassProxy);

	var _reactDeepForceUpdate = __webpack_require__(54);

	var _reactDeepForceUpdate2 = _interopRequireDefault(_reactDeepForceUpdate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	if (!(0, _supportsProtoAssignment2.default)()) {
	  console.warn('This JavaScript environment does not support __proto__. ' + 'This means that react-proxy is unable to proxy React components. ' + 'Features that rely on react-proxy, such as react-transform-hmr, ' + 'will not function as expected.');
	}

	exports.createProxy = _createClassProxy2.default;
	exports.getForceUpdate = _reactDeepForceUpdate2.default;

/***/ },
/* 15 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = supportsProtoAssignment;
	var x = {};
	var y = { supports: true };
	try {
	  x.__proto__ = y;
	} catch (err) {}

	function supportsProtoAssignment() {
	  return x.supports || false;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = proxyClass;
	exports.default = createClassProxy;

	var _createPrototypeProxy = __webpack_require__(17);

	var _createPrototypeProxy2 = _interopRequireDefault(_createPrototypeProxy);

	var _bindAutoBindMethods = __webpack_require__(52);

	var _bindAutoBindMethods2 = _interopRequireDefault(_bindAutoBindMethods);

	var _deleteUnknownAutoBindMethods = __webpack_require__(53);

	var _deleteUnknownAutoBindMethods2 = _interopRequireDefault(_deleteUnknownAutoBindMethods);

	var _supportsProtoAssignment = __webpack_require__(15);

	var _supportsProtoAssignment2 = _interopRequireDefault(_supportsProtoAssignment);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var RESERVED_STATICS = ['length', 'name', 'arguments', 'caller', 'prototype', 'toString'];

	function isEqualDescriptor(a, b) {
	  if (!a && !b) {
	    return true;
	  }
	  if (!a || !b) {
	    return false;
	  }
	  for (var key in a) {
	    if (a[key] !== b[key]) {
	      return false;
	    }
	  }
	  return true;
	}

	function proxyClass(InitialClass) {
	  // Prevent double wrapping.
	  // Given a proxy class, return the existing proxy managing it.
	  if (Object.prototype.hasOwnProperty.call(InitialClass, '__reactPatchProxy')) {
	    return InitialClass.__reactPatchProxy;
	  }

	  var prototypeProxy = (0, _createPrototypeProxy2.default)();
	  var CurrentClass = undefined;

	  var staticDescriptors = {};
	  function wasStaticModifiedByUser(key) {
	    // Compare the descriptor with the one we previously set ourselves.
	    var currentDescriptor = Object.getOwnPropertyDescriptor(ProxyClass, key);
	    return !isEqualDescriptor(staticDescriptors[key], currentDescriptor);
	  }

	  var ProxyClass = undefined;
	  try {
	    // Create a proxy constructor with matching name
	    ProxyClass = new Function('getCurrentClass', 'return function ' + (InitialClass.name || 'ProxyClass') + '() {\n        return getCurrentClass().apply(this, arguments);\n      }')(function () {
	      return CurrentClass;
	    });
	  } catch (err) {
	    // Some environments may forbid dynamic evaluation
	    ProxyClass = function () {
	      return CurrentClass.apply(this, arguments);
	    };
	  }

	  // Point proxy constructor to the proxy prototype
	  ProxyClass.prototype = prototypeProxy.get();

	  // Proxy toString() to the current constructor
	  ProxyClass.toString = function toString() {
	    return CurrentClass.toString();
	  };

	  function update(NextClass) {
	    if (typeof NextClass !== 'function') {
	      throw new Error('Expected a constructor.');
	    }

	    // Prevent proxy cycles
	    if (Object.prototype.hasOwnProperty.call(NextClass, '__reactPatchProxy')) {
	      return update(NextClass.__reactPatchProxy.__getCurrent());
	    }

	    // Save the next constructor so we call it
	    CurrentClass = NextClass;

	    // Update the prototype proxy with new methods
	    var mountedInstances = prototypeProxy.update(NextClass.prototype);

	    // Set up the constructor property so accessing the statics work
	    ProxyClass.prototype.constructor = ProxyClass;

	    // Set up the same prototype for inherited statics
	    ProxyClass.__proto__ = NextClass.__proto__;

	    // Copy static methods and properties
	    Object.getOwnPropertyNames(NextClass).forEach(function (key) {
	      if (RESERVED_STATICS.indexOf(key) > -1) {
	        return;
	      }

	      var staticDescriptor = _extends({}, Object.getOwnPropertyDescriptor(NextClass, key), {
	        configurable: true
	      });

	      // Copy static unless user has redefined it at runtime
	      if (!wasStaticModifiedByUser(key)) {
	        Object.defineProperty(ProxyClass, key, staticDescriptor);
	        staticDescriptors[key] = staticDescriptor;
	      }
	    });

	    // Remove old static methods and properties
	    Object.getOwnPropertyNames(ProxyClass).forEach(function (key) {
	      if (RESERVED_STATICS.indexOf(key) > -1) {
	        return;
	      }

	      // Skip statics that exist on the next class
	      if (NextClass.hasOwnProperty(key)) {
	        return;
	      }

	      // Skip non-configurable statics
	      var descriptor = Object.getOwnPropertyDescriptor(ProxyClass, key);
	      if (descriptor && !descriptor.configurable) {
	        return;
	      }

	      // Delete static unless user has redefined it at runtime
	      if (!wasStaticModifiedByUser(key)) {
	        delete ProxyClass[key];
	        delete staticDescriptors[key];
	      }
	    });

	    // Try to infer displayName
	    ProxyClass.displayName = NextClass.displayName || NextClass.name;

	    // We might have added new methods that need to be auto-bound
	    mountedInstances.forEach(_bindAutoBindMethods2.default);
	    mountedInstances.forEach(_deleteUnknownAutoBindMethods2.default);

	    // Let the user take care of redrawing
	    return mountedInstances;
	  };

	  function get() {
	    return ProxyClass;
	  }

	  function getCurrent() {
	    return CurrentClass;
	  }

	  update(InitialClass);

	  var proxy = { get: get, update: update };

	  Object.defineProperty(proxy, '__getCurrent', {
	    configurable: false,
	    writable: false,
	    enumerable: false,
	    value: getCurrent
	  });

	  Object.defineProperty(ProxyClass, '__reactPatchProxy', {
	    configurable: false,
	    writable: false,
	    enumerable: false,
	    value: proxy
	  });

	  return proxy;
	}

	function createFallback(Component) {
	  var CurrentComponent = Component;

	  return {
	    get: function get() {
	      return CurrentComponent;
	    },
	    update: function update(NextComponent) {
	      CurrentComponent = NextComponent;
	    }
	  };
	}

	function createClassProxy(Component) {
	  return Component.__proto__ && (0, _supportsProtoAssignment2.default)() ? proxyClass(Component) : createFallback(Component);
	}

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = createPrototypeProxy;

	var _assign = __webpack_require__(18);

	var _assign2 = _interopRequireDefault(_assign);

	var _difference = __webpack_require__(42);

	var _difference2 = _interopRequireDefault(_difference);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function createPrototypeProxy() {
	  var proxy = {};
	  var current = null;
	  var mountedInstances = [];

	  /**
	   * Creates a proxied toString() method pointing to the current version's toString().
	   */
	  function proxyToString(name) {
	    // Wrap to always call the current version
	    return function toString() {
	      if (typeof current[name] === 'function') {
	        return current[name].toString();
	      } else {
	        return '<method was deleted>';
	      }
	    };
	  }

	  /**
	   * Creates a proxied method that calls the current version, whenever available.
	   */
	  function proxyMethod(name) {
	    // Wrap to always call the current version
	    var proxiedMethod = function proxiedMethod() {
	      if (typeof current[name] === 'function') {
	        return current[name].apply(this, arguments);
	      }
	    };

	    // Copy properties of the original function, if any
	    (0, _assign2.default)(proxiedMethod, current[name]);
	    proxiedMethod.toString = proxyToString(name);

	    return proxiedMethod;
	  }

	  /**
	   * Augments the original componentDidMount with instance tracking.
	   */
	  function proxiedComponentDidMount() {
	    mountedInstances.push(this);
	    if (typeof current.componentDidMount === 'function') {
	      return current.componentDidMount.apply(this, arguments);
	    }
	  }
	  proxiedComponentDidMount.toString = proxyToString('componentDidMount');

	  /**
	   * Augments the original componentWillUnmount with instance tracking.
	   */
	  function proxiedComponentWillUnmount() {
	    var index = mountedInstances.indexOf(this);
	    // Unless we're in a weird environment without componentDidMount
	    if (index !== -1) {
	      mountedInstances.splice(index, 1);
	    }
	    if (typeof current.componentWillUnmount === 'function') {
	      return current.componentWillUnmount.apply(this, arguments);
	    }
	  }
	  proxiedComponentWillUnmount.toString = proxyToString('componentWillUnmount');

	  /**
	   * Defines a property on the proxy.
	   */
	  function defineProxyProperty(name, descriptor) {
	    Object.defineProperty(proxy, name, descriptor);
	  }

	  /**
	   * Defines a property, attempting to keep the original descriptor configuration.
	   */
	  function defineProxyPropertyWithValue(name, value) {
	    var _ref = Object.getOwnPropertyDescriptor(current, name) || {};

	    var _ref$enumerable = _ref.enumerable;
	    var enumerable = _ref$enumerable === undefined ? false : _ref$enumerable;
	    var _ref$writable = _ref.writable;
	    var writable = _ref$writable === undefined ? true : _ref$writable;

	    defineProxyProperty(name, {
	      configurable: true,
	      enumerable: enumerable,
	      writable: writable,
	      value: value
	    });
	  }

	  /**
	   * Creates an auto-bind map mimicking the original map, but directed at proxy.
	   */
	  function createAutoBindMap() {
	    if (!current.__reactAutoBindMap) {
	      return;
	    }

	    var __reactAutoBindMap = {};
	    for (var name in current.__reactAutoBindMap) {
	      if (typeof proxy[name] === 'function' && current.__reactAutoBindMap.hasOwnProperty(name)) {
	        __reactAutoBindMap[name] = proxy[name];
	      }
	    }

	    return __reactAutoBindMap;
	  }

	  /**
	   * Applies the updated prototype.
	   */
	  function update(next) {
	    // Save current source of truth
	    current = next;

	    // Find changed property names
	    var currentNames = Object.getOwnPropertyNames(current);
	    var previousName = Object.getOwnPropertyNames(proxy);
	    var removedNames = (0, _difference2.default)(previousName, currentNames);

	    // Remove properties and methods that are no longer there
	    removedNames.forEach(function (name) {
	      delete proxy[name];
	    });

	    // Copy every descriptor
	    currentNames.forEach(function (name) {
	      var descriptor = Object.getOwnPropertyDescriptor(current, name);
	      if (typeof descriptor.value === 'function') {
	        // Functions require additional wrapping so they can be bound later
	        defineProxyPropertyWithValue(name, proxyMethod(name));
	      } else {
	        // Other values can be copied directly
	        defineProxyProperty(name, descriptor);
	      }
	    });

	    // Track mounting and unmounting
	    defineProxyPropertyWithValue('componentDidMount', proxiedComponentDidMount);
	    defineProxyPropertyWithValue('componentWillUnmount', proxiedComponentWillUnmount);
	    defineProxyPropertyWithValue('__reactAutoBindMap', createAutoBindMap());

	    // Set up the prototype chain
	    proxy.__proto__ = next;

	    return mountedInstances;
	  }

	  /**
	   * Returns the up-to-date proxy prototype.
	   */
	  function get() {
	    return proxy;
	  }

	  return {
	    update: update,
	    get: get
	  };
	};

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var assignWith = __webpack_require__(19),
	    baseAssign = __webpack_require__(35),
	    createAssigner = __webpack_require__(37);

	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object. Subsequent sources overwrite property assignments of previous sources.
	 * If `customizer` is provided it's invoked to produce the assigned values.
	 * The `customizer` is bound to `thisArg` and invoked with five arguments:
	 * (objectValue, sourceValue, key, object, source).
	 *
	 * **Note:** This method mutates `object` and is based on
	 * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	 *
	 * @static
	 * @memberOf _
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	 * // => { 'user': 'fred', 'age': 40 }
	 *
	 * // using a customizer callback
	 * var defaults = _.partialRight(_.assign, function(value, other) {
	 *   return _.isUndefined(value) ? other : value;
	 * });
	 *
	 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var assign = createAssigner(function(object, source, customizer) {
	  return customizer
	    ? assignWith(object, source, customizer)
	    : baseAssign(object, source);
	});

	module.exports = assign;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(20);

	/**
	 * A specialized version of `_.assign` for customizing assigned values without
	 * support for argument juggling, multiple sources, and `this` binding `customizer`
	 * functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 */
	function assignWith(object, source, customizer) {
	  var index = -1,
	      props = keys(source),
	      length = props.length;

	  while (++index < length) {
	    var key = props[index],
	        value = object[key],
	        result = customizer(value, source[key], key, object, source);

	    if ((result === result ? (result !== value) : (value === value)) ||
	        (value === undefined && !(key in object))) {
	      object[key] = result;
	    }
	  }
	  return object;
	}

	module.exports = assignWith;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(21),
	    isArrayLike = __webpack_require__(26),
	    isObject = __webpack_require__(24),
	    shimKeys = __webpack_require__(30);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object != 'function' && isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};

	module.exports = keys;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(22);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(23),
	    isObjectLike = __webpack_require__(25);

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && reIsHostCtor.test(value);
	}

	module.exports = isNative;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	module.exports = isFunction;


/***/ },
/* 24 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 25 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(27),
	    isLength = __webpack_require__(29);

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	module.exports = isArrayLike;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(28);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 28 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 29 */
/***/ function(module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(31),
	    isArray = __webpack_require__(32),
	    isIndex = __webpack_require__(33),
	    isLength = __webpack_require__(29),
	    keysIn = __webpack_require__(34);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;

	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object));

	  var index = -1,
	      result = [];

	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = shimKeys;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(26),
	    isObjectLike = __webpack_require__(25);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}

	module.exports = isArguments;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(21),
	    isLength = __webpack_require__(29),
	    isObjectLike = __webpack_require__(25);

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	module.exports = isArray;


/***/ },
/* 33 */
/***/ function(module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(31),
	    isArray = __webpack_require__(32),
	    isIndex = __webpack_require__(33),
	    isLength = __webpack_require__(29),
	    isObject = __webpack_require__(24);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;
	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      isProto = typeof Ctor == 'function' && Ctor.prototype === object,
	      result = Array(length),
	      skipIndexes = length > 0;

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  for (var key in object) {
	    if (!(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(36),
	    keys = __webpack_require__(20);

	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return source == null
	    ? object
	    : baseCopy(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ },
/* 36 */
/***/ function(module, exports) {

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}

	module.exports = baseCopy;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(38),
	    isIterateeCall = __webpack_require__(40),
	    restParam = __webpack_require__(41);

	/**
	 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;

	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(39);

	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}

	module.exports = bindCallback;


/***/ },
/* 39 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(26),
	    isIndex = __webpack_require__(33),
	    isObject = __webpack_require__(24);

	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 41 */
/***/ function(module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);

	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}

	module.exports = restParam;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var baseDifference = __webpack_require__(43),
	    baseFlatten = __webpack_require__(50),
	    isArrayLike = __webpack_require__(26),
	    isObjectLike = __webpack_require__(25),
	    restParam = __webpack_require__(41);

	/**
	 * Creates an array of unique `array` values not included in the other
	 * provided arrays using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to inspect.
	 * @param {...Array} [values] The arrays of values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 * @example
	 *
	 * _.difference([1, 2, 3], [4, 2]);
	 * // => [1, 3]
	 */
	var difference = restParam(function(array, values) {
	  return (isObjectLike(array) && isArrayLike(array))
	    ? baseDifference(array, baseFlatten(values, false, true))
	    : [];
	});

	module.exports = difference;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var baseIndexOf = __webpack_require__(44),
	    cacheIndexOf = __webpack_require__(46),
	    createCache = __webpack_require__(47);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * The base implementation of `_.difference` which accepts a single array
	 * of values to exclude.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {Array} values The values to exclude.
	 * @returns {Array} Returns the new array of filtered values.
	 */
	function baseDifference(array, values) {
	  var length = array ? array.length : 0,
	      result = [];

	  if (!length) {
	    return result;
	  }
	  var index = -1,
	      indexOf = baseIndexOf,
	      isCommon = true,
	      cache = (isCommon && values.length >= LARGE_ARRAY_SIZE) ? createCache(values) : null,
	      valuesLength = values.length;

	  if (cache) {
	    indexOf = cacheIndexOf;
	    isCommon = false;
	    values = cache;
	  }
	  outer:
	  while (++index < length) {
	    var value = array[index];

	    if (isCommon && value === value) {
	      var valuesIndex = valuesLength;
	      while (valuesIndex--) {
	        if (values[valuesIndex] === value) {
	          continue outer;
	        }
	      }
	      result.push(value);
	    }
	    else if (indexOf(values, value, 0) < 0) {
	      result.push(value);
	    }
	  }
	  return result;
	}

	module.exports = baseDifference;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var indexOfNaN = __webpack_require__(45);

	/**
	 * The base implementation of `_.indexOf` without support for binary searches.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} value The value to search for.
	 * @param {number} fromIndex The index to search from.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function baseIndexOf(array, value, fromIndex) {
	  if (value !== value) {
	    return indexOfNaN(array, fromIndex);
	  }
	  var index = fromIndex - 1,
	      length = array.length;

	  while (++index < length) {
	    if (array[index] === value) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = baseIndexOf;


/***/ },
/* 45 */
/***/ function(module, exports) {

	/**
	 * Gets the index at which the first occurrence of `NaN` is found in `array`.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {number} fromIndex The index to search from.
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {number} Returns the index of the matched `NaN`, else `-1`.
	 */
	function indexOfNaN(array, fromIndex, fromRight) {
	  var length = array.length,
	      index = fromIndex + (fromRight ? 0 : -1);

	  while ((fromRight ? index-- : ++index < length)) {
	    var other = array[index];
	    if (other !== other) {
	      return index;
	    }
	  }
	  return -1;
	}

	module.exports = indexOfNaN;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24);

	/**
	 * Checks if `value` is in `cache` mimicking the return signature of
	 * `_.indexOf` by returning `0` if the value is found, else `-1`.
	 *
	 * @private
	 * @param {Object} cache The cache to search.
	 * @param {*} value The value to search for.
	 * @returns {number} Returns `0` if `value` is found, else `-1`.
	 */
	function cacheIndexOf(cache, value) {
	  var data = cache.data,
	      result = (typeof value == 'string' || isObject(value)) ? data.set.has(value) : data.hash[value];

	  return result ? 0 : -1;
	}

	module.exports = cacheIndexOf;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var SetCache = __webpack_require__(48),
	    getNative = __webpack_require__(21);

	/** Native method references. */
	var Set = getNative(global, 'Set');

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');

	/**
	 * Creates a `Set` cache object to optimize linear searches of large arrays.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 * @returns {null|Object} Returns the new cache object if `Set` is supported, else `null`.
	 */
	function createCache(values) {
	  return (nativeCreate && Set) ? new SetCache(values) : null;
	}

	module.exports = createCache;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var cachePush = __webpack_require__(49),
	    getNative = __webpack_require__(21);

	/** Native method references. */
	var Set = getNative(global, 'Set');

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeCreate = getNative(Object, 'create');

	/**
	 *
	 * Creates a cache object to store unique values.
	 *
	 * @private
	 * @param {Array} [values] The values to cache.
	 */
	function SetCache(values) {
	  var length = values ? values.length : 0;

	  this.data = { 'hash': nativeCreate(null), 'set': new Set };
	  while (length--) {
	    this.push(values[length]);
	  }
	}

	// Add functions to the `Set` cache.
	SetCache.prototype.push = cachePush;

	module.exports = SetCache;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(24);

	/**
	 * Adds `value` to the cache.
	 *
	 * @private
	 * @name push
	 * @memberOf SetCache
	 * @param {*} value The value to cache.
	 */
	function cachePush(value) {
	  var data = this.data;
	  if (typeof value == 'string' || isObject(value)) {
	    data.set.add(value);
	  } else {
	    data.hash[value] = true;
	  }
	}

	module.exports = cachePush;


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(51),
	    isArguments = __webpack_require__(31),
	    isArray = __webpack_require__(32),
	    isArrayLike = __webpack_require__(26),
	    isObjectLike = __webpack_require__(25);

	/**
	 * The base implementation of `_.flatten` with added support for restricting
	 * flattening and specifying the start index.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {boolean} [isDeep] Specify a deep flatten.
	 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, isDeep, isStrict, result) {
	  result || (result = []);

	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    var value = array[index];
	    if (isObjectLike(value) && isArrayLike(value) &&
	        (isStrict || isArray(value) || isArguments(value))) {
	      if (isDeep) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, isDeep, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 52 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = bindAutoBindMethods;
	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of React source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * Original:
	 * https://github.com/facebook/react/blob/6508b1ad273a6f371e8d90ae676e5390199461b4/src/isomorphic/classic/class/ReactClass.js#L650-L713
	 */

	function bindAutoBindMethod(component, method) {
	  var boundMethod = method.bind(component);

	  boundMethod.__reactBoundContext = component;
	  boundMethod.__reactBoundMethod = method;
	  boundMethod.__reactBoundArguments = null;

	  var componentName = component.constructor.displayName,
	      _bind = boundMethod.bind;

	  boundMethod.bind = function (newThis) {
	    var args = Array.prototype.slice.call(arguments, 1);
	    if (newThis !== component && newThis !== null) {
	      console.warn('bind(): React component methods may only be bound to the ' + 'component instance. See ' + componentName);
	    } else if (!args.length) {
	      console.warn('bind(): You are binding a component method to the component. ' + 'React does this for you automatically in a high-performance ' + 'way, so you can safely remove this call. See ' + componentName);
	      return boundMethod;
	    }

	    var reboundMethod = _bind.apply(boundMethod, arguments);
	    reboundMethod.__reactBoundContext = component;
	    reboundMethod.__reactBoundMethod = method;
	    reboundMethod.__reactBoundArguments = args;

	    return reboundMethod;
	  };

	  return boundMethod;
	}

	function bindAutoBindMethods(component) {
	  for (var autoBindKey in component.__reactAutoBindMap) {
	    if (!component.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
	      return;
	    }

	    // Tweak: skip methods that are already bound.
	    // This is to preserve method reference in case it is used
	    // as a subscription handler that needs to be detached later.
	    if (component.hasOwnProperty(autoBindKey) && component[autoBindKey].__reactBoundContext === component) {
	      continue;
	    }

	    var method = component.__reactAutoBindMap[autoBindKey];
	    component[autoBindKey] = bindAutoBindMethod(component, method);
	  }
	};

/***/ },
/* 53 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = deleteUnknownAutoBindMethods;
	function shouldDeleteClassicInstanceMethod(component, name) {
	  if (component.__reactAutoBindMap.hasOwnProperty(name)) {
	    // It's a known autobound function, keep it
	    return false;
	  }

	  if (component[name].__reactBoundArguments !== null) {
	    // It's a function bound to specific args, keep it
	    return false;
	  }

	  // It's a cached bound method for a function
	  // that was deleted by user, so we delete it from component.
	  return true;
	}

	function shouldDeleteModernInstanceMethod(component, name) {
	  var prototype = component.constructor.prototype;

	  var prototypeDescriptor = Object.getOwnPropertyDescriptor(prototype, name);

	  if (!prototypeDescriptor || !prototypeDescriptor.get) {
	    // This is definitely not an autobinding getter
	    return false;
	  }

	  if (prototypeDescriptor.get().length !== component[name].length) {
	    // The length doesn't match, bail out
	    return false;
	  }

	  // This seems like a method bound using an autobinding getter on the prototype
	  // Hopefully we won't run into too many false positives.
	  return true;
	}

	function shouldDeleteInstanceMethod(component, name) {
	  var descriptor = Object.getOwnPropertyDescriptor(component, name);
	  if (typeof descriptor.value !== 'function') {
	    // Not a function, or something fancy: bail out
	    return;
	  }

	  if (component.__reactAutoBindMap) {
	    // Classic
	    return shouldDeleteClassicInstanceMethod(component, name);
	  } else {
	    // Modern
	    return shouldDeleteModernInstanceMethod(component, name);
	  }
	}

	/**
	 * Deletes autobound methods from the instance.
	 *
	 * For classic React classes, we only delete the methods that no longer exist in map.
	 * This means the user actually deleted them in code.
	 *
	 * For modern classes, we delete methods that exist on prototype with the same length,
	 * and which have getters on prototype, but are normal values on the instance.
	 * This is usually an indication that an autobinding decorator is being used,
	 * and the getter will re-generate the memoized handler on next access.
	 */
	function deleteUnknownAutoBindMethods(component) {
	  var names = Object.getOwnPropertyNames(component);

	  names.forEach(function (name) {
	    if (shouldDeleteInstanceMethod(component, name)) {
	      delete component[name];
	    }
	  });
	}

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";

	exports.__esModule = true;
	exports["default"] = getForceUpdate;
	function traverseRenderedChildren(internalInstance, callback, argument) {
	  callback(internalInstance, argument);

	  if (internalInstance._renderedComponent) {
	    traverseRenderedChildren(internalInstance._renderedComponent, callback, argument);
	  } else {
	    for (var key in internalInstance._renderedChildren) {
	      if (internalInstance._renderedChildren.hasOwnProperty(key)) {
	        traverseRenderedChildren(internalInstance._renderedChildren[key], callback, argument);
	      }
	    }
	  }
	}

	function setPendingForceUpdate(internalInstance) {
	  if (internalInstance._pendingForceUpdate === false) {
	    internalInstance._pendingForceUpdate = true;
	  }
	}

	function forceUpdateIfPending(internalInstance, React) {
	  if (internalInstance._pendingForceUpdate === true) {
	    var publicInstance = internalInstance._instance;
	    React.Component.prototype.forceUpdate.call(publicInstance);
	  }
	}

	function getForceUpdate(React) {
	  return function (instance) {
	    var internalInstance = instance._reactInternalInstance;
	    traverseRenderedChildren(internalInstance, setPendingForceUpdate);
	    traverseRenderedChildren(internalInstance, forceUpdateIfPending, React);
	  };
	}

	module.exports = exports["default"];

/***/ },
/* 55 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {if (typeof window !== "undefined") {
	    module.exports = window;
	} else if (typeof global !== "undefined") {
	    module.exports = global;
	} else if (typeof self !== "undefined"){
	    module.exports = self;
	} else {
	    module.exports = {};
	}

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _svg = __webpack_require__(57);

	Object.defineProperty(exports, 'Svg', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_svg).default;
	  }
	});

	var _title = __webpack_require__(60);

	Object.defineProperty(exports, 'Title', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_title).default;
	  }
	});

	var _chartContainer = __webpack_require__(61);

	Object.defineProperty(exports, 'Chart', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_chartContainer).default;
	  }
	});

	var _axis = __webpack_require__(77);

	Object.defineProperty(exports, 'Axis', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_axis).default;
	  }
	});

	var _xaxis = __webpack_require__(78);

	Object.defineProperty(exports, 'Xaxis', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_xaxis).default;
	  }
	});

	var _yaxis = __webpack_require__(80);

	Object.defineProperty(exports, 'Yaxis', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_yaxis).default;
	  }
	});

	var _label = __webpack_require__(79);

	Object.defineProperty(exports, 'Label', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_label).default;
	  }
	});

	var _legend = __webpack_require__(62);

	Object.defineProperty(exports, 'Legend', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_legend).default;
	  }
	});

	var _grid = __webpack_require__(81);

	Object.defineProperty(exports, 'Grid', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_grid).default;
	  }
	});

	var _xgrid = __webpack_require__(82);

	Object.defineProperty(exports, 'Xgrid', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_xgrid).default;
	  }
	});

	var _ygrid = __webpack_require__(83);

	Object.defineProperty(exports, 'Ygrid', {
	  enumerable: true,
	  get: function get() {
	    return _interopRequireDefault(_ygrid).default;
	  }
	});

	var _scale = __webpack_require__(59);

	Object.defineProperty(exports, 'scale', {
	  enumerable: true,
	  get: function get() {
	    return _scale.scale;
	  }
	});

	var _xDomain = __webpack_require__(84);

	Object.defineProperty(exports, 'xDomainCount', {
	  enumerable: true,
	  get: function get() {
	    return _xDomain.xDomain;
	  }
	});

	var _yDomain = __webpack_require__(85);

	Object.defineProperty(exports, 'yDomainCount', {
	  enumerable: true,
	  get: function get() {
	    return _yDomain.yDomain;
	  }
	});

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _d = __webpack_require__(2);

	var _d2 = _interopRequireDefault(_d);

	var _commonProps = __webpack_require__(58);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var _scale = __webpack_require__(59);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChartSvg = function (_Component) {
	  _inherits(ChartSvg, _Component);

	  function ChartSvg(props) {
	    _classCallCheck(this, ChartSvg);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ChartSvg).call(this, props));
	  }

	  _createClass(ChartSvg, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var height = _props.height;
	      var width = _props.width;
	      var margins = _props.margins;
	      var svgClassName = _props.svgClassName;
	      var id = _props.id;
	      var children = _props.children;


	      var t = 'translate(' + margins.left + ', ' + margins.top + ')';

	      return _react2.default.createElement(
	        'svg',
	        {
	          height: height,
	          width: width,
	          className: svgClassName,
	          id: id,
	          ref: 'svgContainer'
	        },
	        _react2.default.createElement(
	          'g',
	          {
	            transform: t
	          },
	          children
	        )
	      );
	    }
	  }]);

	  return ChartSvg;
	}(_react.Component);

	ChartSvg.defaultProps = _extends({
	  svgClassName: 'react-d3-core__container_svg',
	  onZoom: function onZoom() {},
	  scaleExtent: [1, 10]
	}, _commonProps2.default);
	ChartSvg.propTypes = {
	  id: _react.PropTypes.string,
	  width: _react.PropTypes.number.isRequired,
	  height: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  svgClassName: _react.PropTypes.string.isRequired
	};
	exports.default = ChartSvg;

/***/ },
/* 58 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  width: 960,
	  height: 500,
	  margins: { top: 80, right: 100, bottom: 80, left: 100 }
	};

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.scale = scale;

	var _d = __webpack_require__(2);

	var _d2 = _interopRequireDefault(_d);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function scale(props) {
	  var type = props.type;
	  var scale = props.scale;


	  var func;

	  if (scale === 'linear') func = _d2.default.scale.linear();else if (scale === 'identity') func = _d2.default.scale.identity();else if (scale === 'sqrt') func = _d2.default.scale.sqrt();else if (scale === 'pow') func = _d2.default.scale.pow();else if (scale === 'log') func = _d2.default.scale.log();else if (scale === 'quantize') func = _d2.default.scale.quantize();else if (scale === 'quantile') func = _d2.default.scale.quantile();else if (scale === 'ordinal') func = _d2.default.scale.ordinal();else if (scale === 'time') func = _d2.default.time.scale();else new Error('Please check your axis scale setting. "' + scale + '" scale is invalid. ');

	  func = _mkScaleSettings(props, func);

	  return func;
	}

	function _mkScaleSettings(props, func) {
	  var type = props.type;
	  var range = props.range;
	  var domain = props.domain;
	  var scale = props.scale;
	  var rangeRoundBands = props.rangeRoundBands;


	  if (range) func.range(range);

	  if (domain) func.domain(domain);

	  if (scale === 'ordinal' && rangeRoundBands) {
	    var interval = rangeRoundBands.interval;
	    var padding = rangeRoundBands.padding;
	    var outerPadding = rangeRoundBands.outerPadding;


	    if (padding && outerPadding) func.rangeRoundBands(interval, padding, outerPadding);else if (padding) func.rangeRoundBands(interval, padding);else func.rangeRoundBands(interval);
	  }

	  return func;
	}

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _commonProps = __webpack_require__(58);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChartTitle = function (_Component) {
	  _inherits(ChartTitle, _Component);

	  function ChartTitle(props) {
	    _classCallCheck(this, ChartTitle);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ChartTitle).call(this, props));
	  }

	  _createClass(ChartTitle, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var titleClassName = _props.titleClassName;
	      var title = _props.title;
	      var width = _props.width;


	      var titleStyle = {
	        width: width,
	        textAlign: 'center',
	        fontSize: '2em',
	        paddingBottom: '1.3em'
	      };

	      return _react2.default.createElement(
	        'div',
	        {
	          style: titleStyle,
	          className: titleClassName
	        },
	        title
	      );
	    }
	  }]);

	  return ChartTitle;
	}(_react.Component);

	ChartTitle.defaultProps = _extends({
	  titleClassName: 'react-d3-core__container_title',
	  title: ''
	}, _commonProps2.default);
	ChartTitle.propTypes = {
	  width: _react.PropTypes.number.isRequired,
	  title: _react.PropTypes.string,
	  titleClassName: _react.PropTypes.string
	};
	exports.default = ChartTitle;

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _svg = __webpack_require__(57);

	var _svg2 = _interopRequireDefault(_svg);

	var _legend = __webpack_require__(62);

	var _legend2 = _interopRequireDefault(_legend);

	var _commonProps = __webpack_require__(58);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var ChartContainer = function (_Component) {
	  _inherits(ChartContainer, _Component);

	  function ChartContainer(props) {
	    _classCallCheck(this, ChartContainer);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ChartContainer).call(this, props));
	  }

	  _createClass(ChartContainer, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var chartSeries = _props.chartSeries;


	      var legend;

	      var divStyle = {
	        width: width
	      };

	      if (chartSeries) {
	        legend = _react2.default.createElement(_legend2.default, _extends({}, this.props, {
	          chartSeries: chartSeries
	        }));
	      }

	      return _react2.default.createElement(
	        'div',
	        { style: divStyle },
	        legend,
	        _react2.default.createElement(_svg2.default, this.props)
	      );
	    }
	  }]);

	  return ChartContainer;
	}(_react.Component);

	ChartContainer.defaultProps = _commonProps2.default;
	exports.default = ChartContainer;

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _d = __webpack_require__(2);

	var _d2 = _interopRequireDefault(_d);

	var _reactFauxDom = __webpack_require__(63);

	var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

	var _commonProps = __webpack_require__(58);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Legend = function (_Component) {
	  _inherits(Legend, _Component);

	  function Legend(props) {
	    _classCallCheck(this, Legend);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Legend).call(this, props));
	  }

	  _createClass(Legend, [{
	    key: '_radius',
	    value: function _radius(swatchShape) {
	      return swatchShape === 'circle' ? 18 : 0;
	    }
	  }, {
	    key: '_series',
	    value: function _series(props) {
	      var chartSeries = props.chartSeries;
	      var categoricalColors = props.categoricalColors;


	      var colors = categoricalColors || _d2.default.scale.category10();

	      return chartSeries.map(function (_ref, i) {
	        var name = _ref.name;
	        var color = _ref.color;
	        var field = _ref.field;
	        return {
	          color: color || colors(i),
	          name: name || field,
	          field: field
	        };
	      });
	    }
	  }, {
	    key: '_mkLegend',
	    value: function _mkLegend(dom) {
	      var _props = this.props;
	      var legendClassName = _props.legendClassName;
	      var backgroundColor = _props.backgroundColor;
	      var legendPosition = _props.legendPosition;
	      var legendOffset = _props.legendOffset;
	      var swatchShape = _props.swatchShape;
	      var chartSeries = _props.chartSeries;
	      var margins = _props.margins;
	      var width = _props.width;


	      var legendArea = _d2.default.select(dom);
	      var series = this._series(this.props);
	      var radius = this._radius(swatchShape);

	      // make legends
	      var legend = legendArea.selectAll('div').data(series).enter().append("div").attr("class", legendClassName + ' legend').style("height", 20).style("padding", 5).style("background-color", backgroundColor).style("display", "inline-block");

	      var rect = legend.append("div").style("width", 18).style("height", 18).style("border-radius", radius).style("background-color", function (d) {
	        return d.color;
	      }).style("float", legendPosition);

	      var text = legend.append("div").style("padding-left", 5).style("padding-right", 5).text(function (d) {
	        return d.name;
	      }).style("float", legendPosition);

	      return legendArea;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var legendClassName = _props2.legendClassName;
	      var width = _props2.width;
	      var height = _props2.height;


	      var legendGroup = _reactFauxDom2.default.createElement('div');
	      var legendClasses = legendClassName + ' legend';

	      legendGroup.setAttribute('class', legendClasses);
	      legendGroup.style.width = width;
	      legendGroup.style.textAlign = 'center';

	      return this._mkLegend(legendGroup).node().toReact();
	    }
	  }]);

	  return Legend;
	}(_react.Component);

	Legend.defaultProps = _extends({
	  backgroundColor: '#FFF',
	  legendHeight: 50,
	  legendPosition: 'left',
	  legendOffset: 90,
	  legendClassName: 'react-d3-core__legend',
	  swatchShape: 'square'
	}, _commonProps2.default);
	Legend.propTypes = {
	  backgroundColor: _react.PropTypes.string,
	  width: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  chartSeries: _react.PropTypes.array.isRequired,
	  legendOffset: _react.PropTypes.number.isRequired,
	  legendClassName: _react.PropTypes.string.isRequired,
	  legendPosition: _react.PropTypes.oneOf(['left', 'right']).isRequired,
	  swatchShape: _react.PropTypes.oneOf(['circle', 'square'])
	};
	exports.default = Legend;

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var Element = __webpack_require__(64)
	var Window = __webpack_require__(76)

	var ReactFauxDOM = {
	  Element: Element,
	  defaultView: Window,
	  createElement: function (nodeName) {
	    return new Element(nodeName)
	  },
	  createElementNS: function (namespace, nodeName) {
	    return this.createElement(nodeName)
	  },
	  compareDocumentPosition: function () {
	    // The selector engine tries to validate with this, but we don't care.
	    // 8 = DOCUMENT_POSITION_CONTAINS, so we say all nodes are in this document.
	    return 8
	  }
	}

	Element.prototype.ownerDocument = ReactFauxDOM

	module.exports = ReactFauxDOM


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var React = __webpack_require__(6)
	var styleAttr = __webpack_require__(65)
	var querySelectorAll = __webpack_require__(66)
	var camelCase = __webpack_require__(70)
	var isString = __webpack_require__(71)
	var isUndefined = __webpack_require__(72)
	var assign = __webpack_require__(73)
	var mapValues = __webpack_require__(74)
	var styleCamelCase = __webpack_require__(75)

	function Element (nodeName, parentNode) {
	  this.nodeName = nodeName
	  this.parentNode = parentNode
	  this.childNodes = []
	  this.eventListeners = {}
	  this.text = ''
	  var props = this.props = {
	    style: {
	      setProperty: function (name, value) {
	        props.style[styleCamelCase(name)] = value
	      },
	      getProperty: function (name) {
	        return props.style[styleCamelCase(name)]
	      },
	      removeProperty: function (name) {
	        delete props.style[styleCamelCase(name)]
	      }
	    }
	  }

	  this.style = props.style
	}

	Element.prototype.nodeType = 1

	// This was easy to do with Vim.
	// Just saying.
	Element.prototype.eventNameMappings = {
	  'blur': 'onBlur',
	  'change': 'onChange',
	  'click': 'onClick',
	  'contextmenu': 'onContextMenu',
	  'copy': 'onCopy',
	  'cut': 'onCut',
	  'doubleclick': 'onDoubleClick',
	  'drag': 'onDrag',
	  'dragend': 'onDragEnd',
	  'dragenter': 'onDragEnter',
	  'dragexit': 'onDragExit',
	  'dragleave': 'onDragLeave',
	  'dragover': 'onDragOver',
	  'dragstart': 'onDragStart',
	  'drop': 'onDrop',
	  'error': 'onError',
	  'focus': 'onFocus',
	  'input': 'onInput',
	  'keydown': 'onKeyDown',
	  'keypress': 'onKeyPress',
	  'keyup': 'onKeyUp',
	  'load': 'onLoad',
	  'mousedown': 'onMouseDown',
	  'mouseenter': 'onMouseEnter',
	  'mouseleave': 'onMouseLeave',
	  'mousemove': 'onMouseMove',
	  'mouseout': 'onMouseOut',
	  'mouseover': 'onMouseOver',
	  'mouseup': 'onMouseUp',
	  'paste': 'onPaste',
	  'scroll': 'onScroll',
	  'submit': 'onSubmit',
	  'touchcancel': 'onTouchCancel',
	  'touchend': 'onTouchEnd',
	  'touchmove': 'onTouchMove',
	  'touchstart': 'onTouchStart',
	  'wheel': 'onWheel'
	}

	Element.prototype.skipNameTransformationExpressions = [
	  /^data-/,
	  /^aria-/
	]

	Element.prototype.attributeNameMappings = {
	  'class': 'className'
	}

	Element.prototype.attributeToPropName = function (name) {
	  var skipTransformMatches = this.skipNameTransformationExpressions.map(function (expr) {
	    return expr.test(name)
	  })

	  if (skipTransformMatches.some(Boolean)) {
	    return name
	  } else {
	    return this.attributeNameMappings[name] || camelCase(name)
	  }
	}

	Element.prototype.setAttribute = function (name, value) {
	  if (name === 'style' && isString(value)) {
	    var styles = styleAttr.parse(value)

	    for (var key in styles) {
	      this.style.setProperty(key, styles[key])
	    }
	  } else {
	    this.props[this.attributeToPropName(name)] = value
	  }
	}

	Element.prototype.getAttribute = function (name) {
	  return this.props[this.attributeToPropName(name)]
	}

	Element.prototype.getAttributeNode = function (name) {
	  var value = this.getAttribute(name)

	  if (!isUndefined(value)) {
	    return {
	      value: value,
	      specified: true
	    }
	  }
	}

	Element.prototype.removeAttribute = function (name) {
	  delete this.props[this.attributeToPropName(name)]
	}

	Element.prototype.eventToPropName = function (name) {
	  return this.eventNameMappings[name] || name
	}

	Element.prototype.addEventListener = function (name, fn) {
	  var prop = this.eventToPropName(name)
	  this.eventListeners[prop] = this.eventListeners[prop] || []
	  this.eventListeners[prop].push(fn)
	}

	Element.prototype.removeEventListener = function (name, fn) {
	  var listeners = this.eventListeners[this.eventToPropName(name)]

	  if (listeners) {
	    var match = listeners.indexOf(fn)

	    if (match !== -1) {
	      listeners.splice(match, 1)
	    }
	  }
	}

	Element.prototype.appendChild = function (el) {
	  el.parentNode = this
	  this.childNodes.push(el)
	  return el
	}

	Element.prototype.insertBefore = function (el, before) {
	  var index = this.childNodes.indexOf(before)
	  el.parentNode = this

	  if (index !== -1) {
	    this.childNodes.splice(index, 0, el)
	  } else {
	    this.childNodes.push(el)
	  }

	  return el
	}

	Element.prototype.removeChild = function (child) {
	  var target = this.childNodes.indexOf(child)
	  this.childNodes.splice(target, 1)
	}

	Element.prototype.querySelector = function () {
	  return this.querySelectorAll.apply(this, arguments)[0] || null
	}

	Element.prototype.querySelectorAll = function (selector) {
	  if (!selector) {
	    throw new Error('Not enough arguments')
	  }

	  return querySelectorAll(selector, this)
	}

	Element.prototype.getElementsByTagName = function (nodeName) {
	  var children = this.children

	  if (children.length === 0) {
	    return []
	  } else {
	    var matches

	    if (nodeName !== '*') {
	      matches = children.filter(function (el) {
	        return el.nodeName === nodeName
	      })
	    } else {
	      matches = children
	    }

	    var childMatches = children.map(function (el) {
	      return el.getElementsByTagName(nodeName)
	    })

	    return matches.concat.apply(matches, childMatches)
	  }
	}

	Element.prototype.getElementById = function (id) {
	  var children = this.children

	  if (children.length === 0) {
	    return null
	  } else {
	    var match = children.filter(function (el) {
	      return el.getAttribute('id') === id
	    })[0]

	    if (match) {
	      return match
	    } else {
	      var childMatches = children.map(function (el) {
	        return el.getElementById(id)
	      })

	      return childMatches.filter(function (match) {
	        return match !== null
	      })[0] || null
	    }
	  }
	}

	Element.prototype.toReact = function (index) {
	  index = index || 0
	  var props = assign({}, this.props)
	  props.style = assign({}, props.style)

	  var originalElement = this

	  function uniqueKey () {
	    return 'faux-dom-' + index
	  }

	  if (isUndefined(props.key)) {
	    props.key = uniqueKey()
	  }

	  delete props.style.setProperty
	  delete props.style.getProperty
	  delete props.style.removeProperty

	  assign(props, mapValues(this.eventListeners, function (listeners) {
	    return function (syntheticEvent) {
	      var event

	      if (syntheticEvent) {
	        event = syntheticEvent.nativeEvent
	        event.syntheticEvent = syntheticEvent
	      }

	      mapValues(listeners, function (listener) {
	        listener.call(originalElement, event)
	      })
	    }
	  }))

	  return React.createElement(this.nodeName, props, this.text || this.children.map(function (el, i) {
	    if (el instanceof Element) {
	      return el.toReact(i)
	    } else {
	      return el
	    }
	  }))
	}

	Object.defineProperties(Element.prototype, {
	  nextSibling: {
	    get: function () {
	      var siblings = this.parentNode.children
	      var me = siblings.indexOf(this)
	      return siblings[me + 1]
	    }
	  },
	  previousSibling: {
	    get: function () {
	      var siblings = this.parentNode.children
	      var me = siblings.indexOf(this)
	      return siblings[me - 1]
	    }
	  },
	  innerHTML: {
	    get: function () {
	      return this.text
	    },
	    set: function (text) {
	      this.text = text
	    }
	  },
	  textContent: {
	    get: function () {
	      return this.text
	    },
	    set: function (text) {
	      this.text = text
	    }
	  },
	  children: {
	    get: function () {
	      // So far nodes created by this library are all of nodeType 1 (elements),
	      // but this could change in the future.
	      return this.childNodes.filter(function (el) {
	        if (!el.nodeType) {
	          // It's a React element, we always add it
	          return true
	        }

	        // It's a HTML node. We want to filter to have only nodes with type 1
	        return el.nodeType === 1
	      })
	    }
	  }
	})

	// These NS methods are called by things like D3 if it spots a namespace.
	// Like xlink:href. I don't care about namespaces, so these functions have NS aliases created.
	var namespaceMethods = [
	  'setAttribute',
	  'getAttribute',
	  'getAttributeNode',
	  'removeAttribute',
	  'getElementsByTagName',
	  'getElementById'
	]

	namespaceMethods.forEach(function (name) {
	  var fn = Element.prototype[name]
	  Element.prototype[name + 'NS'] = function () {
	    return fn.apply(this, Array.prototype.slice.call(arguments, 1))
	  }
	})

	module.exports = Element


/***/ },
/* 65 */
/***/ function(module, exports) {

	

	/*

	style-attr
	====

	Very simple parsing and stringifying of style attributes.

	`parse`
	----

	Convert a style attribute string to an object.

	*/
	function parse(raw) {
	  var trim = function (s) {
	    return s.trim();
	  };
	  var obj = {};

	  getKeyValueChunks(raw).map(trim).filter(Boolean).forEach(function (item) {
	    // split with `.indexOf` rather than `.split` because the value may also contain colons.
	    var pos = item.indexOf(':');
	    var key = item.substr(0, pos).trim();
	    var val = item.substr(pos + 1).trim();

	    obj[key] = val;
	  });

	  return obj;
	}

	/*

	`getKeyValueChunks`
	----

	Split a string into chunks matching `<key>: <value>`

	*/
	function getKeyValueChunks(raw) {
	  var chunks = [];
	  var offset = 0;
	  var sep = ';';
	  var hasUnclosedUrl = /url\([^\)]+$/;
	  var chunk = '';
	  var nextSplit;
	  while (offset < raw.length) {
	    nextSplit = raw.indexOf(sep, offset);
	    if (nextSplit === -1) {
	      nextSplit = raw.length;
	    }

	    chunk += raw.substring(offset, nextSplit);

	    // data URIs can contain semicolons, so make sure we get the whole thing
	    if (hasUnclosedUrl.test(chunk)) {
	      chunk += ';';
	      offset = nextSplit + 1;
	      continue;
	    }

	    chunks.push(chunk);
	    chunk = '';
	    offset = nextSplit + 1;
	  }

	  return chunks;
	}

	/*

	`stringify`
	----

	Convert an object into an attribute string

	*/
	function stringify(obj) {
	  return Object.keys(obj).map(function (key) {
	    return key + ':' + obj[key];
	  }).join(';');
	}

	/*

	`normalize`
	----

	Normalize an attribute string (eg. collapse duplicates)

	*/
	function normalize(str) {
	  return stringify(parse(str));
	}

	module.exports.parse = parse;
	module.exports.stringify = stringify;
	module.exports.normalize = normalize;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(67);

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @ignore
	 * css3 selector engine for ie6-8
	 * @author yiminghe@gmail.com
	 */

	var util = __webpack_require__(68);
	var parser = __webpack_require__(69);

	var EXPANDO_SELECTOR_KEY = '_ks_data_selector_id_',
	  caches = {},
	  isContextXML,
	  uuid = 0,
	  subMatchesCache = {},
	  getAttr = function (el, name) {
	    if (isContextXML) {
	      return util.getSimpleAttr(el, name);
	    } else {
	      return util.attr(el, name);
	    }
	  },
	  hasSingleClass = util.hasSingleClass,
	  isTag = util.isTag,
	  aNPlusB = /^(([+-]?(?:\d+)?)?n)?([+-]?\d+)?$/;

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	var unescape = /\\([\da-fA-F]{1,6}[\x20\t\r\n\f]?|.)/g,
	  unescapeFn = function (_, escaped) {
	    var high = '0x' + escaped - 0x10000;
	    // NaN means non-codepoint
	    return isNaN(high) ?
	      escaped :
	      // BMP codepoint
	      high < 0 ?
	        String.fromCharCode(high + 0x10000) :
	        // Supplemental Plane codepoint (surrogate pair)
	        String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
	  };

	var matchExpr;

	var pseudoFnExpr = {
	  'nth-child': function (el, param) {
	    var ab = getAb(param),
	      a = ab.a,
	      b = ab.b;
	    if (a === 0 && b === 0) {
	      return 0;
	    }
	    var index = 0,
	      parent = el.parentNode;
	    if (parent) {
	      var childNodes = parent.childNodes,
	        count = 0,
	        child,
	        ret,
	        len = childNodes.length;
	      for (; count < len; count++) {
	        child = childNodes[count];
	        if (child.nodeType === 1) {
	          index++;
	          ret = matchIndexByAb(index, a, b, child === el);
	          if (ret !== undefined) {
	            return ret;
	          }
	        }
	      }
	    }
	    return 0;
	  },
	  'nth-last-child': function (el, param) {
	    var ab = getAb(param),
	      a = ab.a,
	      b = ab.b;
	    if (a === 0 && b === 0) {
	      return 0;
	    }
	    var index = 0,
	      parent = el.parentNode;
	    if (parent) {
	      var childNodes = parent.childNodes,
	        len = childNodes.length,
	        count = len - 1,
	        child,
	        ret;
	      for (; count >= 0; count--) {
	        child = childNodes[count];
	        if (child.nodeType === 1) {
	          index++;
	          ret = matchIndexByAb(index, a, b, child === el);
	          if (ret !== undefined) {
	            return ret;
	          }
	        }
	      }
	    }
	    return 0;
	  },
	  'nth-of-type': function (el, param) {
	    var ab = getAb(param),
	      a = ab.a,
	      b = ab.b;
	    if (a === 0 && b === 0) {
	      return 0;
	    }
	    var index = 0,
	      parent = el.parentNode;
	    if (parent) {
	      var childNodes = parent.childNodes,
	        elType = el.tagName,
	        count = 0,
	        child,
	        ret,
	        len = childNodes.length;
	      for (; count < len; count++) {
	        child = childNodes[count];
	        if (child.tagName === elType) {
	          index++;
	          ret = matchIndexByAb(index, a, b, child === el);
	          if (ret !== undefined) {
	            return ret;
	          }
	        }
	      }
	    }
	    return 0;
	  },
	  'nth-last-of-type': function (el, param) {
	    var ab = getAb(param),
	      a = ab.a,
	      b = ab.b;
	    if (a === 0 && b === 0) {
	      return 0;
	    }
	    var index = 0,
	      parent = el.parentNode;
	    if (parent) {
	      var childNodes = parent.childNodes,
	        len = childNodes.length,
	        elType = el.tagName,
	        count = len - 1,
	        child,
	        ret;
	      for (; count >= 0; count--) {
	        child = childNodes[count];
	        if (child.tagName === elType) {
	          index++;
	          ret = matchIndexByAb(index, a, b, child === el);
	          if (ret !== undefined) {
	            return ret;
	          }
	        }
	      }
	    }
	    return 0;
	  },
	  lang: function (el, lang) {
	    var elLang;
	    lang = unEscape(lang.toLowerCase());
	    do {
	      if ((elLang = (isContextXML ?
	        el.getAttribute('xml:lang') || el.getAttribute('lang') :
	          el.lang))) {
	        elLang = elLang.toLowerCase();
	        return elLang === lang || elLang.indexOf(lang + '-') === 0;
	      }
	    } while ((el = el.parentNode) && el.nodeType === 1);
	    return false;
	  },
	  not: function (el, negationArg) {
	    return !matchExpr[negationArg.t](el, negationArg.value);
	  }
	};

	var pseudoIdentExpr = {
	  empty: function (el) {
	    var childNodes = el.childNodes,
	      index = 0,
	      len = childNodes.length - 1,
	      child,
	      nodeType;
	    for (; index < len; index++) {
	      child = childNodes[index];
	      nodeType = child.nodeType;
	      // only element nodes and content nodes
	      // (such as Dom [Dom-LEVEL-3-CORE] text nodes,
	      // CDATA nodes, and entity references
	      if (nodeType === 1 || nodeType === 3 || nodeType === 4 || nodeType === 5) {
	        return 0;
	      }
	    }
	    return 1;
	  },
	  root: function (el) {
	    if (el.nodeType === 9) {
	      return true;
	    }
	    return el.ownerDocument &&
	      el === el.ownerDocument.documentElement;
	  },
	  'first-child': function (el) {
	    return pseudoFnExpr['nth-child'](el, 1);
	  },
	  'last-child': function (el) {
	    return pseudoFnExpr['nth-last-child'](el, 1);
	  },
	  'first-of-type': function (el) {
	    return pseudoFnExpr['nth-of-type'](el, 1);
	  },
	  'last-of-type': function (el) {
	    return pseudoFnExpr['nth-last-of-type'](el, 1);
	  },
	  'only-child': function (el) {
	    return pseudoIdentExpr['first-child'](el) &&
	      pseudoIdentExpr['last-child'](el);
	  },
	  'only-of-type': function (el) {
	    return pseudoIdentExpr['first-of-type'](el) &&
	      pseudoIdentExpr['last-of-type'](el);
	  },
	  focus: function (el) {
	    var doc = el.ownerDocument;
	    return doc && el === doc.activeElement &&
	      (!doc.hasFocus || doc.hasFocus()) && !!(el.type || el.href || el.tabIndex >= 0);
	  },
	  target: function (el) {
	    var hash = location.hash;
	    return hash && hash.slice(1) === getAttr(el, 'id');
	  },
	  enabled: function (el) {
	    return !el.disabled;
	  },
	  disabled: function (el) {
	    return el.disabled;
	  },
	  checked: function (el) {
	    var nodeName = el.nodeName.toLowerCase();
	    return (nodeName === 'input' && el.checked) ||
	      (nodeName === 'option' && el.selected);
	  }
	};

	var attributeExpr = {
	  '~=': function (elValue, value) {
	    if (!value || value.indexOf(' ') > -1) {
	      return 0;
	    }
	    return (' ' + elValue + ' ').indexOf(' ' + value + ' ') !== -1;
	  },
	  '|=': function (elValue, value) {
	    return (' ' + elValue).indexOf(' ' + value + '-') !== -1;
	  },
	  '^=': function (elValue, value) {
	    return value && util.startsWith(elValue, value);
	  },
	  '$=': function (elValue, value) {
	    return value && util.endsWith(elValue, value);
	  },
	  '*=': function (elValue, value) {
	    return value && elValue.indexOf(value) !== -1;
	  },
	  '=': function (elValue, value) {
	    return elValue === value;
	  }
	};

	var relativeExpr = {
	  '>': {
	    dir: 'parentNode',
	    immediate: 1
	  },
	  ' ': {
	    dir: 'parentNode'
	  },
	  '+': {
	    dir: 'previousSibling',
	    immediate: 1
	  },
	  '~': {
	    dir: 'previousSibling'
	  }
	};

	matchExpr = {
	  tag: isTag,
	  cls: hasSingleClass,
	  id: function (el, value) {
	    return getAttr(el, 'id') === value;
	  },
	  attrib: function (el, value) {
	    var name = value.ident;
	    if (!isContextXML) {
	      name = name.toLowerCase();
	    }
	    var elValue = getAttr(el, name);
	    var match = value.match;
	    if (!match && elValue !== undefined) {
	      return 1;
	    } else if (match) {
	      if (elValue === undefined) {
	        return 0;
	      }
	      var matchFn = attributeExpr[match];
	      if (matchFn) {
	        return matchFn(elValue + '', value.value + '');
	      }
	    }
	    return 0;
	  },
	  pseudo: function (el, value) {
	    var fn, fnStr, ident;
	    if ((fnStr = value.fn)) {
	      if (!(fn = pseudoFnExpr[fnStr])) {
	        throw new SyntaxError('Syntax error: not support pseudo: ' + fnStr);
	      }
	      return fn(el, value.param);
	    }
	    if ((ident = value.ident)) {
	      if (!pseudoIdentExpr[ident]) {
	        throw new SyntaxError('Syntax error: not support pseudo: ' + ident);
	      }
	      return pseudoIdentExpr[ident](el);
	    }
	    return 0;
	  }
	};

	function unEscape(str) {
	  return str.replace(unescape, unescapeFn);
	}

	parser.lexer.yy = {
	  trim: util.trim,
	  unEscape: unEscape,
	  unEscapeStr: function (str) {
	    return this.unEscape(str.slice(1, -1));
	  }
	};

	function resetStatus() {
	  subMatchesCache = {};
	}

	function dir(el, direction) {
	  do {
	    el = el[direction];
	  } while (el && el.nodeType !== 1);
	  return el;
	}

	function getAb(param) {
	  var a = 0,
	    match,
	    b = 0;
	  if (typeof param === 'number') {
	    b = param;
	  } else if (param === 'odd') {
	    a = 2;
	    b = 1;
	  } else if (param === 'even') {
	    a = 2;
	    b = 0;
	  } else if ((match = param.replace(/\s/g, '').match(aNPlusB))) {
	    if (match[1]) {
	      a = parseInt(match[2], 10);
	      if (isNaN(a)) {
	        if (match[2] === '-') {
	          a = -1;
	        } else {
	          a = 1;
	        }
	      }
	    } else {
	      a = 0;
	    }
	    b = parseInt(match[3], 10) || 0;
	  }
	  return {
	    a: a,
	    b: b
	  };
	}

	function matchIndexByAb(index, a, b, eq) {
	  if (a === 0) {
	    if (index === b) {
	      return eq;
	    }
	  } else {
	    if ((index - b) / a >= 0 && (index - b) % a === 0 && eq) {
	      return 1;
	    }
	  }
	  return undefined;
	}

	function isXML(elem) {
	  var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	  return documentElement ? documentElement.nodeName.toLowerCase() !== 'html' : false;
	}

	function matches(str, seeds) {
	  return select(str, null, seeds);
	}

	function singleMatch(el, match) {
	  if (!match) {
	    return true;
	  }
	  if (!el) {
	    return false;
	  }

	  if (el.nodeType === 9) {
	    return false;
	  }

	  var matched = 1,
	    matchSuffix = match.suffix,
	    matchSuffixLen,
	    matchSuffixIndex;

	  if (match.t === 'tag') {
	    matched &= matchExpr.tag(el, match.value);
	  }

	  if (matched && matchSuffix) {
	    matchSuffixLen = matchSuffix.length;
	    matchSuffixIndex = 0;
	    for (; matched && matchSuffixIndex < matchSuffixLen; matchSuffixIndex++) {
	      var singleMatchSuffix = matchSuffix[matchSuffixIndex],
	        singleMatchSuffixType = singleMatchSuffix.t;
	      if (matchExpr[singleMatchSuffixType]) {
	        matched &= matchExpr[singleMatchSuffixType](el, singleMatchSuffix.value);
	      }
	    }
	  }

	  return matched;
	}

	// match by adjacent immediate single selector match
	function matchImmediate(el, match) {
	  var matched = 1,
	    startEl = el,
	    relativeOp,
	    startMatch = match;

	  do {
	    matched &= singleMatch(el, match);
	    if (matched) {
	      // advance
	      match = match && match.prev;
	      if (!match) {
	        return true;
	      }
	      relativeOp = relativeExpr[match.nextCombinator];
	      el = dir(el, relativeOp.dir);
	      if (!relativeOp.immediate) {
	        return {
	          // advance for non-immediate
	          el: el,
	          match: match
	        };
	      }
	    } else {
	      relativeOp = relativeExpr[match.nextCombinator];
	      if (relativeOp.immediate) {
	        // retreat but advance startEl
	        return {
	          el: dir(startEl, relativeExpr[startMatch.nextCombinator].dir),
	          match: startMatch
	        };
	      } else {
	        // advance (before immediate match + jump unmatched)
	        return {
	          el: el && dir(el, relativeOp.dir),
	          match: match
	        };
	      }
	    }
	  } while (el);

	  // only occur when match immediate
	  return {
	    el: dir(startEl, relativeExpr[startMatch.nextCombinator].dir),
	    match: startMatch
	  };
	}

	// find fixed part, fixed with seeds
	function findFixedMatchFromHead(el, head) {
	  var relativeOp,
	    cur = head;

	  do {
	    if (!singleMatch(el, cur)) {
	      return null;
	    }
	    cur = cur.prev;
	    if (!cur) {
	      return true;
	    }
	    relativeOp = relativeExpr[cur.nextCombinator];
	    el = dir(el, relativeOp.dir);
	  } while (el && relativeOp.immediate);
	  if (!el) {
	    return null;
	  }
	  return {
	    el: el,
	    match: cur
	  };
	}

	function genId(el) {
	  var selectorId;

	  if (isContextXML) {
	    if (!(selectorId = el.getAttribute(EXPANDO_SELECTOR_KEY))) {
	      el.setAttribute(EXPANDO_SELECTOR_KEY, selectorId = (+new Date() + '_' + (++uuid)));
	    }
	  } else {
	    if (!(selectorId = el[EXPANDO_SELECTOR_KEY])) {
	      selectorId = el[EXPANDO_SELECTOR_KEY] = (+new Date()) + '_' + (++uuid);
	    }
	  }

	  return selectorId;
	}

	function matchSub(el, match) {
	  var selectorId = genId(el),
	    matchKey;
	  matchKey = selectorId + '_' + (match.order || 0);
	  if (matchKey in subMatchesCache) {
	    return subMatchesCache[matchKey];
	  }
	  subMatchesCache[matchKey] = matchSubInternal(el, match);
	  return subMatchesCache[matchKey];
	}

	// recursive match by sub selector string from right to left
	// grouped by immediate selectors
	function matchSubInternal(el, match) {
	  var matchImmediateRet = matchImmediate(el, match);
	  if (matchImmediateRet === true) {
	    return true;
	  } else {
	    el = matchImmediateRet.el;
	    match = matchImmediateRet.match;
	    while (el) {
	      if (matchSub(el, match)) {
	        return true;
	      }
	      el = dir(el, relativeExpr[match.nextCombinator].dir);
	    }
	    return false;
	  }
	}

	function select(str, context, seeds) {
	  if (!caches[str]) {
	    caches[str] = parser.parse(str);
	  }

	  var selector = caches[str],
	    groupIndex = 0,
	    groupLen = selector.length,
	    contextDocument,
	    group,
	    ret = [];

	  if (seeds) {
	    context = context || seeds[0].ownerDocument;
	  }

	  contextDocument = context && context.ownerDocument || typeof document !== 'undefined' && document;

	  if (context && context.nodeType === 9 && !contextDocument) {
	    contextDocument = context;
	  }

	  context = context || contextDocument;

	  isContextXML = isXML(context);

	  for (; groupIndex < groupLen; groupIndex++) {
	    resetStatus();

	    group = selector[groupIndex];

	    var suffix = group.suffix,
	      suffixIndex,
	      suffixLen,
	      seedsIndex,
	      mySeeds = seeds,
	      seedsLen,
	      id = null;

	    if (!mySeeds) {
	      if (suffix && !isContextXML) {
	        suffixIndex = 0;
	        suffixLen = suffix.length;
	        for (; suffixIndex < suffixLen; suffixIndex++) {
	          var singleSuffix = suffix[suffixIndex];
	          if (singleSuffix.t === 'id') {
	            id = singleSuffix.value;
	            break;
	          }
	        }
	      }

	      if (id) {
	        // http://yiminghe.github.io/lab/playground/fragment-selector/selector.html
	        var doesNotHasById = !context.getElementById,
	          contextInDom = util.contains(contextDocument, context),
	          tmp = doesNotHasById ? (
	            contextInDom ?
	              contextDocument.getElementById(id) :
	              null
	          ) : context.getElementById(id);
	        // id bug
	        // https://github.com/kissyteam/kissy/issues/67
	        if (!tmp && doesNotHasById || tmp && getAttr(tmp, 'id') !== id) {
	          var tmps = util.getElementsByTagName('*', context),
	            tmpLen = tmps.length,
	            tmpI = 0;
	          for (; tmpI < tmpLen; tmpI++) {
	            tmp = tmps[tmpI];
	            if (getAttr(tmp, 'id') === id) {
	              mySeeds = [tmp];
	              break;
	            }
	          }
	          if (tmpI === tmpLen) {
	            mySeeds = [];
	          }
	        } else {
	          if (contextInDom && tmp && context !== contextDocument) {
	            tmp = util.contains(context, tmp) ? tmp : null;
	          }
	          mySeeds = tmp ? [tmp] : [];
	        }
	      } else {
	        mySeeds = util.getElementsByTagName(group.value || '*', context);
	      }
	    }

	    seedsIndex = 0;
	    seedsLen = mySeeds.length;

	    if (!seedsLen) {
	      continue;
	    }

	    for (; seedsIndex < seedsLen; seedsIndex++) {
	      var seed = mySeeds[seedsIndex];
	      var matchHead = findFixedMatchFromHead(seed, group);
	      if (matchHead === true) {
	        ret.push(seed);
	      } else if (matchHead) {
	        if (matchSub(matchHead.el, matchHead.match)) {
	          ret.push(seed);
	        }
	      }
	    }
	  }

	  if (groupLen > 1) {
	    ret = util.unique(ret);
	  }

	  return ret;
	}

	module.exports = select;

	select.parse = function (str) {
	  return parser.parse(str);
	};

	select.matches = matches;

	select.util = util;

	select.version = '@VERSION@';
	/**
	 * @ignore
	 * note 2013-03-28
	 *  - use recursive call to replace backtracking algorithm
	 *
	 * refer
	 *  - http://www.w3.org/TR/selectors/
	 *  - http://www.impressivewebs.com/browser-support-css3-selectors/
	 *  - http://blogs.msdn.com/ie/archive/2010/05/13/the-css-corner-css3-selectors.aspx
	 *  - http://sizzlejs.com/
	 */

/***/ },
/* 68 */
/***/ function(module, exports) {

	/**
	 * attr fix for old ie
	 * @author yiminghe@gmail.com
	 */
	var R_BOOLEAN = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
	  R_FOCUSABLE = /^(?:button|input|object|select|textarea)$/i,
	  R_CLICKABLE = /^a(?:rea)?$/i,
	  R_INVALID_CHAR = /:|^on/;

	var attrFix = {},
	  propFix,
	  attrHooks = {
	    // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	    tabindex: {
	      get: function (el) {
	        // elem.tabIndex doesn't always return the correct value when it hasn't been explicitly set
	        var attributeNode = el.getAttributeNode('tabindex');
	        return attributeNode && attributeNode.specified ?
	          parseInt(attributeNode.value, 10) :
	          R_FOCUSABLE.test(el.nodeName) ||
	          R_CLICKABLE.test(el.nodeName) && el.href ?
	            0 :
	            undefined;
	      }
	    }
	  },
	  boolHook = {
	    get: function (elem, name) {
	      // 转发到 prop 方法
	      return elem[propFix[name] || name] ?
	        // 根据 w3c attribute , true 时返回属性名字符串
	        name.toLowerCase() :
	        undefined;
	    }
	  },
	  attrNodeHook = {};

	attrHooks.style = {
	  get: function (el) {
	    return el.style.cssText;
	  }
	};

	propFix = {
	  hidefocus: 'hideFocus',
	  tabindex: 'tabIndex',
	  readonly: 'readOnly',
	  'for': 'htmlFor',
	  'class': 'className',
	  maxlength: 'maxLength',
	  cellspacing: 'cellSpacing',
	  cellpadding: 'cellPadding',
	  rowspan: 'rowSpan',
	  colspan: 'colSpan',
	  usemap: 'useMap',
	  frameborder: 'frameBorder',
	  contenteditable: 'contentEditable'
	};

	var ua = typeof navigator !== 'undefined' ? navigator.userAgent : '';
	var doc = typeof document !== 'undefined' ? document : {};

	function numberify(s) {
	  var c = 0;
	  // convert '1.2.3.4' to 1.234
	  return parseFloat(s.replace(/\./g, function () {
	    return (c++ === 0) ? '.' : '';
	  }));
	}

	function ieVersion() {
	  var m, v;
	  if ((m = ua.match(/MSIE ([^;]*)|Trident.*; rv(?:\s|:)?([0-9.]+)/)) &&
	    (v = (m[1] || m[2]))) {
	    return doc.documentMode || numberify(v);
	  }
	}

	function mix(s, t) {
	  for (var p in t) {
	    s[p] = t[p];
	  }
	}

	function each(arr, fn) {
	  var i = 0, l = arr.length;
	  for (; i < l; i++) {
	    if (fn(arr[i], i) === false) {
	      break;
	    }
	  }
	}
	var ie = ieVersion();

	if (ie && ie < 8) {
	  attrHooks.style.set = function (el, val) {
	    el.style.cssText = val;
	  };

	  // get attribute value from attribute node for ie
	  mix(attrNodeHook, {
	    get: function (elem, name) {
	      var ret = elem.getAttributeNode(name);
	      // Return undefined if attribute node specified by user
	      return ret && (
	        // fix #100
	      ret.specified || ret.nodeValue) ?
	        ret.nodeValue :
	        undefined;
	    }
	  });

	  // ie6,7 不区分 attribute 与 property
	  mix(attrFix, propFix);

	  // http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
	  attrHooks.tabIndex = attrHooks.tabindex;

	  // 不光是 href, src, 还有 rowspan 等非 mapping 属性，也需要用第 2 个参数来获取原始值
	  // 注意 colSpan rowSpan 已经由 propFix 转为大写
	  each(['href', 'src', 'width', 'height', 'colSpan', 'rowSpan'], function (name) {
	    attrHooks[name] = {
	      get: function (elem) {
	        var ret = elem.getAttribute(name, 2);
	        return ret === null ? undefined : ret;
	      }
	    };
	  });

	  attrHooks.placeholder = {
	    get: function (elem, name) {
	      return elem[name] || attrNodeHook.get(elem, name);
	    }
	  };
	}

	if (ie) {
	  var hrefFix = attrHooks.href = attrHooks.href || {};
	  hrefFix.set = function (el, val, name) {
	    var childNodes = el.childNodes,
	      b,
	      len = childNodes.length,
	      allText = len > 0;
	    for (len = len - 1; len >= 0; len--) {
	      if (childNodes[len].nodeType !== 3) {
	        allText = 0;
	      }
	    }
	    if (allText) {
	      b = el.ownerDocument.createElement('b');
	      b.style.display = 'none';
	      el.appendChild(b);
	    }
	    el.setAttribute(name, '' + val);
	    if (b) {
	      el.removeChild(b);
	    }
	  };
	}

	var RE_TRIM = /^[\s\xa0]+|[\s\xa0]+$/g,
	  trim = String.prototype.trim;
	var SPACE = ' ';

	var getElementsByTagName;
	getElementsByTagName = function (name, context) {
	  return context.getElementsByTagName(name);
	};

	if (doc.createElement) {
	  var div = doc.createElement('div');
	  div.appendChild(document.createComment(''));
	  if (div.getElementsByTagName('*').length) {
	    getElementsByTagName = function (name, context) {
	      var nodes = context.getElementsByTagName(name),
	        needsFilter = name === '*';
	      // <input id='length'>
	      if (needsFilter || typeof nodes.length !== 'number') {
	        var ret = [],
	          i = 0,
	          el;
	        while ((el = nodes[i++])) {
	          if (!needsFilter || el.nodeType === 1) {
	            ret.push(el);
	          }
	        }
	        return ret;
	      } else {
	        return nodes;
	      }
	    };
	  }
	}

	var compareNodeOrder = ('sourceIndex' in (doc && doc.documentElement || {})) ? function (a, b) {
	  return a.sourceIndex - b.sourceIndex;
	} : function (a, b) {
	  if (!a.compareDocumentPosition || !b.compareDocumentPosition) {
	    return a.compareDocumentPosition ? -1 : 1;
	  }
	  var bit = a.compareDocumentPosition(b) & 4;
	  return bit ? -1 : 1;
	};

	var util = module.exports = {
	  ie: ie,

	  unique: (function () {
	    var hasDuplicate,
	      baseHasDuplicate = true;

	    // Here we check if the JavaScript engine is using some sort of
	    // optimization where it does not always call our comparison
	    // function. If that is the case, discard the hasDuplicate value.
	    // Thus far that includes Google Chrome.
	    [0, 0].sort(function () {
	      baseHasDuplicate = false;
	      return 0;
	    });

	    function sortOrder(a, b) {
	      if (a === b) {
	        hasDuplicate = true;
	        return 0;
	      }

	      return compareNodeOrder(a, b);
	    }

	    // 排序去重
	    return function (elements) {
	      hasDuplicate = baseHasDuplicate;
	      elements.sort(sortOrder);

	      if (hasDuplicate) {
	        var i = 1, len = elements.length;
	        while (i < len) {
	          if (elements[i] === elements[i - 1]) {
	            elements.splice(i, 1);
	            --len;
	          } else {
	            i++;
	          }
	        }
	      }
	      return elements;
	    };
	  })(),

	  getElementsByTagName: getElementsByTagName,

	  getSimpleAttr: function (el, name) {
	    var ret = el && el.getAttributeNode(name);
	    if (ret && ret.specified) {
	      return 'value' in ret ? ret.value : ret.nodeValue;
	    }
	    return undefined;
	  },

	  contains: ie ? function (a, b) {
	    if (a.nodeType === 9) {
	      a = a.documentElement;
	    }
	    // !a.contains => a===document || text
	    // 注意原生 contains 判断时 a===b 也返回 true
	    b = b.parentNode;

	    if (a === b) {
	      return true;
	    }

	    // when b is document, a.contains(b) 不支持的接口 in ie
	    if (b && b.nodeType === 1) {
	      return a.contains && a.contains(b);
	    } else {
	      return false;
	    }
	  } : function (a, b) {
	    return !!(a.compareDocumentPosition(b) & 16);
	  },

	  isTag: function (el, value) {
	    return value === '*' || el.nodeName.toLowerCase() === value.toLowerCase();
	  },

	  hasSingleClass: function (el, cls) {
	    // consider xml
	    // https://github.com/kissyteam/kissy/issues/532
	    var className = el && util.getSimpleAttr(el, 'class');
	    return className && (className = className.replace(/[\r\t\n]/g, SPACE)) &&
	      (SPACE + className + SPACE).indexOf(SPACE + cls + SPACE) > -1;
	  },

	  startsWith: function (str, prefix) {
	    return str.lastIndexOf(prefix, 0) === 0;
	  },

	  endsWith: function (str, suffix) {
	    var ind = str.length - suffix.length;
	    return ind >= 0 && str.indexOf(suffix, ind) === ind;
	  },

	  trim: trim ?
	    function (str) {
	      return str == null ? '' : trim.call(str);
	    } :
	    function (str) {
	      return str == null ? '' : (str + '').replace(RE_TRIM, '');
	    },

	  attr: function (el, name) {
	    var attrNormalizer, ret;
	    // scrollLeft
	    name = name.toLowerCase();
	    // custom attrs
	    name = attrFix[name] || name;
	    if (R_BOOLEAN.test(name)) {
	      attrNormalizer = boolHook;
	    } else if (R_INVALID_CHAR.test(name)) {
	      // only old ie?
	      attrNormalizer = attrNodeHook;
	    } else {
	      attrNormalizer = attrHooks[name];
	    }
	    if (el && el.nodeType === 1) {
	      // browsers index elements by id/name on forms, give priority to attributes.
	      if (el.nodeName.toLowerCase() === 'form') {
	        attrNormalizer = attrNodeHook;
	      }
	      if (attrNormalizer && attrNormalizer.get) {
	        return attrNormalizer.get(el, name);
	      }
	      ret = el.getAttribute(name);
	      if (ret === '') {
	        var attrNode = el.getAttributeNode(name);
	        if (!attrNode || !attrNode.specified) {
	          return undefined;
	        }
	      }
	      // standard browser non-existing attribute return null
	      // ie<8 will return undefined , because it return property
	      // so norm to undefined
	      return ret === null ? undefined : ret;
	    }
	  }
	};

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	/*
	  Generated by kison.*/
	var parser = (function (undefined) {
	    /*jshint quotmark:false, loopfunc:true, indent:false, unused:false, asi:true, boss:true*/
	    /* Generated by kison */
	    var parser = {},
	        GrammarConst = {
	            'SHIFT_TYPE': 1,
	            'REDUCE_TYPE': 2,
	            'ACCEPT_TYPE': 0,
	            'TYPE_INDEX': 0,
	            'PRODUCTION_INDEX': 1,
	            'TO_INDEX': 2
	        };
	    /*jslint quotmark: false*/
	    function mix(to, from) {
	        for (var f in from) {
	            to[f] = from[f];
	        }
	    }

	    function isArray(obj) {
	        return '[object Array]' === Object.prototype.toString.call(obj);
	    }

	    function each(object, fn, context) {
	        if (object) {
	            var key,
	                val,
	                length,
	                i = 0;

	            context = context || null;

	            if (!isArray(object)) {
	                for (key in object) {
	                    // can not use hasOwnProperty
	                    if (fn.call(context, object[key], key, object) === false) {
	                        break;
	                    }
	                }
	            } else {
	                length = object.length;
	                for (val = object[0]; i < length; val = object[++i]) {
	                    if (fn.call(context, val, i, object) === false) {
	                        break;
	                    }
	                }
	            }
	        }
	    }

	    function inArray(item, arr) {
	        for (var i = 0, l = arr.length; i < l; i++) {
	            if (arr[i] === item) {
	                return true;
	            }
	        }
	        return false;
	    }
	    var Lexer = function Lexer(cfg) {

	        var self = this;

	        /*
	     lex rules.
	     @type {Object[]}
	     @example
	     [
	     {
	     regexp:'\\w+',
	     state:['xx'],
	     token:'c',
	     // this => lex
	     action:function(){}
	     }
	     ]
	     */
	        self.rules = [];

	        mix(self, cfg);

	        /*
	     Input languages
	     @type {String}
	     */

	        self.resetInput(self.input);
	    };
	    Lexer.prototype = {
	        'resetInput': function (input) {
	            mix(this, {
	                input: input,
	                matched: '',
	                stateStack: [Lexer.STATIC.INITIAL],
	                match: '',
	                text: '',
	                firstLine: 1,
	                lineNumber: 1,
	                lastLine: 1,
	                firstColumn: 1,
	                lastColumn: 1
	            });
	        },
	        'getCurrentRules': function () {
	            var self = this,
	                currentState = self.stateStack[self.stateStack.length - 1],
	                rules = [];
	            //#JSCOVERAGE_IF
	            if (self.mapState) {
	                currentState = self.mapState(currentState);
	            }
	            each(self.rules, function (r) {
	                var state = r.state || r[3];
	                if (!state) {
	                    if (currentState === Lexer.STATIC.INITIAL) {
	                        rules.push(r);
	                    }
	                } else if (inArray(currentState, state)) {
	                    rules.push(r);
	                }
	            });
	            return rules;
	        },
	        'pushState': function (state) {
	            this.stateStack.push(state);
	        },
	        'popState': function (num) {
	            num = num || 1;
	            var ret;
	            while (num--) {
	                ret = this.stateStack.pop();
	            }
	            return ret;
	        },
	        'showDebugInfo': function () {
	            var self = this,
	                DEBUG_CONTEXT_LIMIT = Lexer.STATIC.DEBUG_CONTEXT_LIMIT,
	                matched = self.matched,
	                match = self.match,
	                input = self.input;
	            matched = matched.slice(0, matched.length - match.length);
	            //#JSCOVERAGE_IF 0
	            var past = (matched.length > DEBUG_CONTEXT_LIMIT ? '...' : '') +
	                matched.slice(0 - DEBUG_CONTEXT_LIMIT).replace(/\n/, ' '),
	                next = match + input;
	            //#JSCOVERAGE_ENDIF
	            next = next.slice(0, DEBUG_CONTEXT_LIMIT) +
	                (next.length > DEBUG_CONTEXT_LIMIT ? '...' : '');
	            return past + next + '\n' + new Array(past.length + 1).join('-') + '^';
	        },
	        'mapSymbol': function mapSymbolForCodeGen(t) {
	            return this.symbolMap[t];
	        },
	        'mapReverseSymbol': function (rs) {
	            var self = this,
	                symbolMap = self.symbolMap,
	                i,
	                reverseSymbolMap = self.reverseSymbolMap;
	            if (!reverseSymbolMap && symbolMap) {
	                reverseSymbolMap = self.reverseSymbolMap = {};
	                for (i in symbolMap) {
	                    reverseSymbolMap[symbolMap[i]] = i;
	                }
	            }
	            //#JSCOVERAGE_IF
	            if (reverseSymbolMap) {
	                return reverseSymbolMap[rs];
	            } else {
	                return rs;
	            }
	        },
	        'lex': function () {
	            var self = this,
	                input = self.input,
	                i,
	                rule,
	                m,
	                ret,
	                lines,
	                rules = self.getCurrentRules();

	            self.match = self.text = '';

	            if (!input) {
	                return self.mapSymbol(Lexer.STATIC.END_TAG);
	            }

	            for (i = 0; i < rules.length; i++) {
	                rule = rules[i];
	                //#JSCOVERAGE_IF 0
	                var regexp = rule.regexp || rule[1],
	                    token = rule.token || rule[0],
	                    action = rule.action || rule[2] || undefined;
	                //#JSCOVERAGE_ENDIF
	                if ((m = input.match(regexp))) {
	                    lines = m[0].match(/\n.*/g);
	                    if (lines) {
	                        self.lineNumber += lines.length;
	                    }
	                    mix(self, {
	                        firstLine: self.lastLine,
	                        lastLine: self.lineNumber + 1,
	                        firstColumn: self.lastColumn,
	                        lastColumn: lines ?
	                            lines[lines.length - 1].length - 1 : self.lastColumn + m[0].length
	                    });
	                    var match;
	                    // for error report
	                    match = self.match = m[0];

	                    // all matches
	                    self.matches = m;
	                    // may change by user
	                    self.text = match;
	                    // matched content utils now
	                    self.matched += match;
	                    ret = action && action.call(self);
	                    if (ret === undefined) {
	                        ret = token;
	                    } else {
	                        ret = self.mapSymbol(ret);
	                    }
	                    input = input.slice(match.length);
	                    self.input = input;

	                    if (ret) {
	                        return ret;
	                    } else {
	                        // ignore
	                        return self.lex();
	                    }
	                }
	            }
	        }
	    };
	    Lexer.STATIC = {
	        'INITIAL': 'I',
	        'DEBUG_CONTEXT_LIMIT': 20,
	        'END_TAG': '$EOF'
	    };
	    var lexer = new Lexer({
	        'rules': [
	            ['b', /^\[(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['c', /^(?:[\t\r\n\f\x20]*)\]/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['d', /^(?:[\t\r\n\f\x20]*)~=(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['e', /^(?:[\t\r\n\f\x20]*)\|=(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['f', /^(?:[\t\r\n\f\x20]*)\^=(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['g', /^(?:[\t\r\n\f\x20]*)\$=(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['h', /^(?:[\t\r\n\f\x20]*)\*=(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['i', /^(?:[\t\r\n\f\x20]*)\=(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['j', /^(?:(?:[\w]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))*)\(/,
	                function () {
	                    this.text = this.yy.trim(this.text).slice(0, -1);
	                    this.pushState('fn');
	                }
	            ],
	            ['k', /^[^\)]*/,
	                function () {
	                    this.popState();
	                },
	                ['fn']
	            ],
	            ['l', /^(?:[\t\r\n\f\x20]*)\)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['m', /^:not\((?:[\t\r\n\f\x20]*)/i,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['n', /^(?:(?:[\w]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))*)/,
	                function () {
	                    this.text = this.yy.unEscape(this.text);
	                }
	            ],
	            ['o', /^"(\\"|[^"])*"/,
	                function () {
	                    this.text = this.yy.unEscapeStr(this.text);
	                }
	            ],
	            ['o', /^'(\\'|[^'])*'/,
	                function () {
	                    this.text = this.yy.unEscapeStr(this.text);
	                }
	            ],
	            ['p', /^#(?:(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))+)/,
	                function () {
	                    this.text = this.yy.unEscape(this.text.slice(1));
	                }
	            ],
	            ['q', /^\.(?:(?:[\w]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))(?:[\w\d-]|[^\x00-\xa0]|(?:\\[^\n\r\f0-9a-f]))*)/,
	                function () {
	                    this.text = this.yy.unEscape(this.text.slice(1));
	                }
	            ],
	            ['r', /^(?:[\t\r\n\f\x20]*),(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['s', /^::?/, 0],
	            ['t', /^(?:[\t\r\n\f\x20]*)\+(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['u', /^(?:[\t\r\n\f\x20]*)>(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['v', /^(?:[\t\r\n\f\x20]*)~(?:[\t\r\n\f\x20]*)/,
	                function () {
	                    this.text = this.yy.trim(this.text);
	                }
	            ],
	            ['w', /^\*/, 0],
	            ['x', /^(?:[\t\r\n\f\x20]+)/, 0],
	            ['y', /^./, 0]
	        ]
	    });
	    parser.lexer = lexer;
	    lexer.symbolMap = {
	        '$EOF': 'a',
	        'LEFT_BRACKET': 'b',
	        'RIGHT_BRACKET': 'c',
	        'INCLUDES': 'd',
	        'DASH_MATCH': 'e',
	        'PREFIX_MATCH': 'f',
	        'SUFFIX_MATCH': 'g',
	        'SUBSTRING_MATCH': 'h',
	        'ALL_MATCH': 'i',
	        'FUNCTION': 'j',
	        'PARAMETER': 'k',
	        'RIGHT_PARENTHESES': 'l',
	        'NOT': 'm',
	        'IDENT': 'n',
	        'STRING': 'o',
	        'HASH': 'p',
	        'CLASS': 'q',
	        'COMMA': 'r',
	        'COLON': 's',
	        'PLUS': 't',
	        'GREATER': 'u',
	        'TILDE': 'v',
	        'UNIVERSAL': 'w',
	        'S': 'x',
	        'INVALID': 'y',
	        '$START': 'z',
	        'selectors_group': 'aa',
	        'selector': 'ab',
	        'simple_selector_sequence': 'ac',
	        'combinator': 'ad',
	        'type_selector': 'ae',
	        'id_selector': 'af',
	        'class_selector': 'ag',
	        'attrib_match': 'ah',
	        'attrib': 'ai',
	        'attrib_val': 'aj',
	        'pseudo': 'ak',
	        'negation': 'al',
	        'negation_arg': 'am',
	        'suffix_selector': 'an',
	        'suffix_selectors': 'ao'
	    };
	    parser.productions = [
	        ['z', ['aa']],
	        ['aa', ['ab'],
	            function () {
	                return [this.$1];
	            }
	        ],
	        ['aa', ['aa', 'r', 'ab'],
	            function () {
	                this.$1.push(this.$3);
	            }
	        ],
	        ['ab', ['ac']],
	        ['ab', ['ab', 'ad', 'ac'],
	            function () {
	                // LinkedList

	                this.$1.nextCombinator = this.$3.prevCombinator = this.$2;
	                var order;
	                order = this.$1.order = this.$1.order || 0;
	                this.$3.order = order + 1;
	                this.$3.prev = this.$1;
	                this.$1.next = this.$3;
	                return this.$3;
	            }
	        ],
	        ['ad', ['t']],
	        ['ad', ['u']],
	        ['ad', ['v']],
	        ['ad', ['x'],
	            function () {
	                return ' ';
	            }
	        ],
	        ['ae', ['n'],
	            function () {
	                return {
	                    t: 'tag',
	                    value: this.$1
	                };
	            }
	        ],
	        ['ae', ['w'],
	            function () {
	                return {
	                    t: 'tag',
	                    value: this.$1
	                };
	            }
	        ],
	        ['af', ['p'],
	            function () {
	                return {
	                    t: 'id',
	                    value: this.$1
	                };
	            }
	        ],
	        ['ag', ['q'],
	            function () {
	                return {
	                    t: 'cls',
	                    value: this.$1
	                };
	            }
	        ],
	        ['ah', ['f']],
	        ['ah', ['g']],
	        ['ah', ['h']],
	        ['ah', ['i']],
	        ['ah', ['d']],
	        ['ah', ['e']],
	        ['ai', ['b', 'n', 'c'],
	            function () {
	                return {
	                    t: 'attrib',
	                    value: {
	                        ident: this.$2
	                    }
	                };
	            }
	        ],
	        ['aj', ['n']],
	        ['aj', ['o']],
	        ['ai', ['b', 'n', 'ah', 'aj', 'c'],
	            function () {
	                return {
	                    t: 'attrib',
	                    value: {
	                        ident: this.$2,
	                        match: this.$3,
	                        value: this.$4
	                    }
	                };
	            }
	        ],
	        ['ak', ['s', 'j', 'k', 'l'],
	            function () {
	                return {
	                    t: 'pseudo',
	                    value: {
	                        fn: this.$2.toLowerCase(),
	                        param: this.$3
	                    }
	                };
	            }
	        ],
	        ['ak', ['s', 'n'],
	            function () {
	                return {
	                    t: 'pseudo',
	                    value: {
	                        ident: this.$2.toLowerCase()
	                    }
	                };
	            }
	        ],
	        ['al', ['m', 'am', 'l'],
	            function () {
	                return {
	                    t: 'pseudo',
	                    value: {
	                        fn: 'not',
	                        param: this.$2
	                    }
	                };
	            }
	        ],
	        ['am', ['ae']],
	        ['am', ['af']],
	        ['am', ['ag']],
	        ['am', ['ai']],
	        ['am', ['ak']],
	        ['an', ['af']],
	        ['an', ['ag']],
	        ['an', ['ai']],
	        ['an', ['ak']],
	        ['an', ['al']],
	        ['ao', ['an'],
	            function () {
	                return [this.$1];
	            }
	        ],
	        ['ao', ['ao', 'an'],
	            function () {
	                this.$1.push(this.$2);
	            }
	        ],
	        ['ac', ['ae']],
	        ['ac', ['ao'],
	            function () {
	                return {
	                    suffix: this.$1
	                };
	            }
	        ],
	        ['ac', ['ae', 'ao'],
	            function () {
	                return {
	                    t: 'tag',
	                    value: this.$1.value,
	                    suffix: this.$2
	                };
	            }
	        ]
	    ];
	    parser.table = {
	        'gotos': {
	            '0': {
	                'aa': 8,
	                'ab': 9,
	                'ae': 10,
	                'af': 11,
	                'ag': 12,
	                'ai': 13,
	                'ak': 14,
	                'al': 15,
	                'an': 16,
	                'ao': 17,
	                'ac': 18
	            },
	            '2': {
	                'ae': 20,
	                'af': 21,
	                'ag': 22,
	                'ai': 23,
	                'ak': 24,
	                'am': 25
	            },
	            '9': {
	                'ad': 33
	            },
	            '10': {
	                'af': 11,
	                'ag': 12,
	                'ai': 13,
	                'ak': 14,
	                'al': 15,
	                'an': 16,
	                'ao': 34
	            },
	            '17': {
	                'af': 11,
	                'ag': 12,
	                'ai': 13,
	                'ak': 14,
	                'al': 15,
	                'an': 35
	            },
	            '19': {
	                'ah': 43
	            },
	            '28': {
	                'ab': 46,
	                'ae': 10,
	                'af': 11,
	                'ag': 12,
	                'ai': 13,
	                'ak': 14,
	                'al': 15,
	                'an': 16,
	                'ao': 17,
	                'ac': 18
	            },
	            '33': {
	                'ae': 10,
	                'af': 11,
	                'ag': 12,
	                'ai': 13,
	                'ak': 14,
	                'al': 15,
	                'an': 16,
	                'ao': 17,
	                'ac': 47
	            },
	            '34': {
	                'af': 11,
	                'ag': 12,
	                'ai': 13,
	                'ak': 14,
	                'al': 15,
	                'an': 35
	            },
	            '43': {
	                'aj': 50
	            },
	            '46': {
	                'ad': 33
	            }
	        },
	        'action': {
	            '0': {
	                'b': [1, undefined, 1],
	                'm': [1, undefined, 2],
	                'n': [1, undefined, 3],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6],
	                'w': [1, undefined, 7]
	            },
	            '1': {
	                'n': [1, undefined, 19]
	            },
	            '2': {
	                'b': [1, undefined, 1],
	                'n': [1, undefined, 3],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6],
	                'w': [1, undefined, 7]
	            },
	            '3': {
	                'a': [2, 9],
	                'r': [2, 9],
	                't': [2, 9],
	                'u': [2, 9],
	                'v': [2, 9],
	                'x': [2, 9],
	                'p': [2, 9],
	                'q': [2, 9],
	                'b': [2, 9],
	                's': [2, 9],
	                'm': [2, 9],
	                'l': [2, 9]
	            },
	            '4': {
	                'a': [2, 11],
	                'r': [2, 11],
	                't': [2, 11],
	                'u': [2, 11],
	                'v': [2, 11],
	                'x': [2, 11],
	                'p': [2, 11],
	                'q': [2, 11],
	                'b': [2, 11],
	                's': [2, 11],
	                'm': [2, 11],
	                'l': [2, 11]
	            },
	            '5': {
	                'a': [2, 12],
	                'r': [2, 12],
	                't': [2, 12],
	                'u': [2, 12],
	                'v': [2, 12],
	                'x': [2, 12],
	                'p': [2, 12],
	                'q': [2, 12],
	                'b': [2, 12],
	                's': [2, 12],
	                'm': [2, 12],
	                'l': [2, 12]
	            },
	            '6': {
	                'j': [1, undefined, 26],
	                'n': [1, undefined, 27]
	            },
	            '7': {
	                'a': [2, 10],
	                'r': [2, 10],
	                't': [2, 10],
	                'u': [2, 10],
	                'v': [2, 10],
	                'x': [2, 10],
	                'p': [2, 10],
	                'q': [2, 10],
	                'b': [2, 10],
	                's': [2, 10],
	                'm': [2, 10],
	                'l': [2, 10]
	            },
	            '8': {
	                'a': [0],
	                'r': [1, undefined, 28]
	            },
	            '9': {
	                'a': [2, 1],
	                'r': [2, 1],
	                't': [1, undefined, 29],
	                'u': [1, undefined, 30],
	                'v': [1, undefined, 31],
	                'x': [1, undefined, 32]
	            },
	            '10': {
	                'a': [2, 38],
	                'r': [2, 38],
	                't': [2, 38],
	                'u': [2, 38],
	                'v': [2, 38],
	                'x': [2, 38],
	                'b': [1, undefined, 1],
	                'm': [1, undefined, 2],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6]
	            },
	            '11': {
	                'a': [2, 31],
	                'r': [2, 31],
	                't': [2, 31],
	                'u': [2, 31],
	                'v': [2, 31],
	                'x': [2, 31],
	                'p': [2, 31],
	                'q': [2, 31],
	                'b': [2, 31],
	                's': [2, 31],
	                'm': [2, 31]
	            },
	            '12': {
	                'a': [2, 32],
	                'r': [2, 32],
	                't': [2, 32],
	                'u': [2, 32],
	                'v': [2, 32],
	                'x': [2, 32],
	                'p': [2, 32],
	                'q': [2, 32],
	                'b': [2, 32],
	                's': [2, 32],
	                'm': [2, 32]
	            },
	            '13': {
	                'a': [2, 33],
	                'r': [2, 33],
	                't': [2, 33],
	                'u': [2, 33],
	                'v': [2, 33],
	                'x': [2, 33],
	                'p': [2, 33],
	                'q': [2, 33],
	                'b': [2, 33],
	                's': [2, 33],
	                'm': [2, 33]
	            },
	            '14': {
	                'a': [2, 34],
	                'r': [2, 34],
	                't': [2, 34],
	                'u': [2, 34],
	                'v': [2, 34],
	                'x': [2, 34],
	                'p': [2, 34],
	                'q': [2, 34],
	                'b': [2, 34],
	                's': [2, 34],
	                'm': [2, 34]
	            },
	            '15': {
	                'a': [2, 35],
	                'r': [2, 35],
	                't': [2, 35],
	                'u': [2, 35],
	                'v': [2, 35],
	                'x': [2, 35],
	                'p': [2, 35],
	                'q': [2, 35],
	                'b': [2, 35],
	                's': [2, 35],
	                'm': [2, 35]
	            },
	            '16': {
	                'a': [2, 36],
	                'r': [2, 36],
	                't': [2, 36],
	                'u': [2, 36],
	                'v': [2, 36],
	                'x': [2, 36],
	                'p': [2, 36],
	                'q': [2, 36],
	                'b': [2, 36],
	                's': [2, 36],
	                'm': [2, 36]
	            },
	            '17': {
	                'a': [2, 39],
	                'r': [2, 39],
	                't': [2, 39],
	                'u': [2, 39],
	                'v': [2, 39],
	                'x': [2, 39],
	                'b': [1, undefined, 1],
	                'm': [1, undefined, 2],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6]
	            },
	            '18': {
	                'a': [2, 3],
	                'r': [2, 3],
	                't': [2, 3],
	                'u': [2, 3],
	                'v': [2, 3],
	                'x': [2, 3]
	            },
	            '19': {
	                'c': [1, undefined, 36],
	                'd': [1, undefined, 37],
	                'e': [1, undefined, 38],
	                'f': [1, undefined, 39],
	                'g': [1, undefined, 40],
	                'h': [1, undefined, 41],
	                'i': [1, undefined, 42]
	            },
	            '20': {
	                'l': [2, 26]
	            },
	            '21': {
	                'l': [2, 27]
	            },
	            '22': {
	                'l': [2, 28]
	            },
	            '23': {
	                'l': [2, 29]
	            },
	            '24': {
	                'l': [2, 30]
	            },
	            '25': {
	                'l': [1, undefined, 44]
	            },
	            '26': {
	                'k': [1, undefined, 45]
	            },
	            '27': {
	                'a': [2, 24],
	                'r': [2, 24],
	                't': [2, 24],
	                'u': [2, 24],
	                'v': [2, 24],
	                'x': [2, 24],
	                'p': [2, 24],
	                'q': [2, 24],
	                'b': [2, 24],
	                's': [2, 24],
	                'm': [2, 24],
	                'l': [2, 24]
	            },
	            '28': {
	                'b': [1, undefined, 1],
	                'm': [1, undefined, 2],
	                'n': [1, undefined, 3],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6],
	                'w': [1, undefined, 7]
	            },
	            '29': {
	                'n': [2, 5],
	                'w': [2, 5],
	                'p': [2, 5],
	                'q': [2, 5],
	                'b': [2, 5],
	                's': [2, 5],
	                'm': [2, 5]
	            },
	            '30': {
	                'n': [2, 6],
	                'w': [2, 6],
	                'p': [2, 6],
	                'q': [2, 6],
	                'b': [2, 6],
	                's': [2, 6],
	                'm': [2, 6]
	            },
	            '31': {
	                'n': [2, 7],
	                'w': [2, 7],
	                'p': [2, 7],
	                'q': [2, 7],
	                'b': [2, 7],
	                's': [2, 7],
	                'm': [2, 7]
	            },
	            '32': {
	                'n': [2, 8],
	                'w': [2, 8],
	                'p': [2, 8],
	                'q': [2, 8],
	                'b': [2, 8],
	                's': [2, 8],
	                'm': [2, 8]
	            },
	            '33': {
	                'b': [1, undefined, 1],
	                'm': [1, undefined, 2],
	                'n': [1, undefined, 3],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6],
	                'w': [1, undefined, 7]
	            },
	            '34': {
	                'a': [2, 40],
	                'r': [2, 40],
	                't': [2, 40],
	                'u': [2, 40],
	                'v': [2, 40],
	                'x': [2, 40],
	                'b': [1, undefined, 1],
	                'm': [1, undefined, 2],
	                'p': [1, undefined, 4],
	                'q': [1, undefined, 5],
	                's': [1, undefined, 6]
	            },
	            '35': {
	                'a': [2, 37],
	                'r': [2, 37],
	                't': [2, 37],
	                'u': [2, 37],
	                'v': [2, 37],
	                'x': [2, 37],
	                'p': [2, 37],
	                'q': [2, 37],
	                'b': [2, 37],
	                's': [2, 37],
	                'm': [2, 37]
	            },
	            '36': {
	                'a': [2, 19],
	                'r': [2, 19],
	                't': [2, 19],
	                'u': [2, 19],
	                'v': [2, 19],
	                'x': [2, 19],
	                'p': [2, 19],
	                'q': [2, 19],
	                'b': [2, 19],
	                's': [2, 19],
	                'm': [2, 19],
	                'l': [2, 19]
	            },
	            '37': {
	                'n': [2, 17],
	                'o': [2, 17]
	            },
	            '38': {
	                'n': [2, 18],
	                'o': [2, 18]
	            },
	            '39': {
	                'n': [2, 13],
	                'o': [2, 13]
	            },
	            '40': {
	                'n': [2, 14],
	                'o': [2, 14]
	            },
	            '41': {
	                'n': [2, 15],
	                'o': [2, 15]
	            },
	            '42': {
	                'n': [2, 16],
	                'o': [2, 16]
	            },
	            '43': {
	                'n': [1, undefined, 48],
	                'o': [1, undefined, 49]
	            },
	            '44': {
	                'a': [2, 25],
	                'r': [2, 25],
	                't': [2, 25],
	                'u': [2, 25],
	                'v': [2, 25],
	                'x': [2, 25],
	                'p': [2, 25],
	                'q': [2, 25],
	                'b': [2, 25],
	                's': [2, 25],
	                'm': [2, 25]
	            },
	            '45': {
	                'l': [1, undefined, 51]
	            },
	            '46': {
	                'a': [2, 2],
	                'r': [2, 2],
	                't': [1, undefined, 29],
	                'u': [1, undefined, 30],
	                'v': [1, undefined, 31],
	                'x': [1, undefined, 32]
	            },
	            '47': {
	                'a': [2, 4],
	                'r': [2, 4],
	                't': [2, 4],
	                'u': [2, 4],
	                'v': [2, 4],
	                'x': [2, 4]
	            },
	            '48': {
	                'c': [2, 20]
	            },
	            '49': {
	                'c': [2, 21]
	            },
	            '50': {
	                'c': [1, undefined, 52]
	            },
	            '51': {
	                'a': [2, 23],
	                'r': [2, 23],
	                't': [2, 23],
	                'u': [2, 23],
	                'v': [2, 23],
	                'x': [2, 23],
	                'p': [2, 23],
	                'q': [2, 23],
	                'b': [2, 23],
	                's': [2, 23],
	                'm': [2, 23],
	                'l': [2, 23]
	            },
	            '52': {
	                'a': [2, 22],
	                'r': [2, 22],
	                't': [2, 22],
	                'u': [2, 22],
	                'v': [2, 22],
	                'x': [2, 22],
	                'p': [2, 22],
	                'q': [2, 22],
	                'b': [2, 22],
	                's': [2, 22],
	                'm': [2, 22],
	                'l': [2, 22]
	            }
	        }
	    };
	    parser.parse = function parse(input, filename) {
	        var self = this,
	            lexer = self.lexer,
	            state,
	            symbol,
	            action,
	            table = self.table,
	            gotos = table.gotos,
	            tableAction = table.action,
	            productions = self.productions,
	            valueStack = [null],
	            // for debug info
	            prefix = filename ? ('in file: ' + filename + ' ') : '',
	            stack = [0];

	        lexer.resetInput(input);

	        while (1) {
	            // retrieve state number from top of stack
	            state = stack[stack.length - 1];

	            if (!symbol) {
	                symbol = lexer.lex();
	            }

	            if (symbol) {
	                // read action for current state and first input
	                action = tableAction[state] && tableAction[state][symbol];
	            } else {
	                action = null;
	            }

	            if (!action) {
	                var expected = [],
	                    error;
	                //#JSCOVERAGE_IF
	                if (tableAction[state]) {
	                    for (var symbolForState in tableAction[state]) {
	                        expected.push(self.lexer.mapReverseSymbol(symbolForState));
	                    }
	                }
	                error = prefix + 'syntax error at line ' + lexer.lineNumber +
	                    ':\n' + lexer.showDebugInfo() +
	                    '\n' + 'expect ' + expected.join(', ');
	                throw new Error(error);
	            }

	            switch (action[GrammarConst.TYPE_INDEX]) {
	            case GrammarConst.SHIFT_TYPE:
	                stack.push(symbol);

	                valueStack.push(lexer.text);

	                // push state
	                stack.push(action[GrammarConst.TO_INDEX]);

	                // allow to read more
	                symbol = null;

	                break;

	            case GrammarConst.REDUCE_TYPE:
	                var production = productions[action[GrammarConst.PRODUCTION_INDEX]],
	                    reducedSymbol = production.symbol || production[0],
	                    reducedAction = production.action || production[2],
	                    reducedRhs = production.rhs || production[1],
	                    len = reducedRhs.length,
	                    i = 0,
	                    ret,
	                    $$ = valueStack[valueStack.length - len]; // default to $$ = $1

	                ret = undefined;

	                self.$$ = $$;

	                for (; i < len; i++) {
	                    self['$' + (len - i)] = valueStack[valueStack.length - 1 - i];
	                }

	                if (reducedAction) {
	                    ret = reducedAction.call(self);
	                }

	                if (ret !== undefined) {
	                    $$ = ret;
	                } else {
	                    $$ = self.$$;
	                }

	                stack = stack.slice(0, -1 * len * 2);
	                valueStack = valueStack.slice(0, -1 * len);

	                stack.push(reducedSymbol);

	                valueStack.push($$);

	                var newState = gotos[stack[stack.length - 2]][stack[stack.length - 1]];

	                stack.push(newState);

	                break;

	            case GrammarConst.ACCEPT_TYPE:
	                return $$;
	            }
	        }
	    };
	    return parser;
	})();
	if (true) {
	    module.exports = parser;
	}

/***/ },
/* 70 */
/***/ function(module, exports) {

	var hyphenExpression = /\-+([a-z])/gi

	function upperCaseFirstMatch (match, c, offset) {
	  if (offset !== 0) {
	    return c.toUpperCase()
	  } else {
	    return c
	  }
	}

	function camelCase (str) {
	  var camelCased = str.replace(hyphenExpression, upperCaseFirstMatch)
	  hyphenExpression.lastIndex = 0
	  return camelCased
	}

	module.exports = camelCase


/***/ },
/* 71 */
/***/ function(module, exports) {

	function isString (value) {
	  return typeof value === 'string'
	}

	module.exports = isString


/***/ },
/* 72 */
/***/ function(module, exports) {

	function isUndefined (value) {
	  return typeof value === 'undefined'
	}

	module.exports = isUndefined


/***/ },
/* 73 */
/***/ function(module, exports) {

	function assign (dest) {
	  var args = arguments
	  var source

	  for (var i = 1; i < args.length; i++) {
	    source = args[i]

	    for (var key in source) {
	      dest[key] = source[key]
	    }
	  }

	  return dest
	}

	module.exports = assign


/***/ },
/* 74 */
/***/ function(module, exports) {

	function mapValues (source, fn) {
	  var destination = {}

	  for (var key in source) {
	    if (source.hasOwnProperty(key)) {
	      destination[key] = fn(source[key])
	    }
	  }

	  return destination
	}

	module.exports = mapValues


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var camelCase = __webpack_require__(70)

	function styleCamelCase (name) {
	  var camel = camelCase(name)

	  // Detect if the style property is already camelCased
	  // To not convert Webkit*, Moz* and O* to lowercase
	  if (camel.charAt(0).toUpperCase() === name.charAt(0)) {
	    return name.charAt(0) + camel.slice(1)
	  }

	  if (name.charAt(0) === '-') {
	    return camel.indexOf('ms') === 0 ? camel
	      : camel.charAt(0).toUpperCase() + camel.slice(1)
	  } else {
	    return camel
	  }
	}

	module.exports = styleCamelCase


/***/ },
/* 76 */
/***/ function(module, exports) {

	var Window = {
	  getComputedStyle: function (node) {
	    return {
	      getPropertyValue: node.style.getProperty
	    }
	  }
	}

	module.exports = Window


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _d = __webpack_require__(2);

	var _d2 = _interopRequireDefault(_d);

	var _reactFauxDom = __webpack_require__(63);

	var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

	var _scale = __webpack_require__(59);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Axis = function (_Component) {
	  _inherits(Axis, _Component);

	  function Axis(props) {
	    _classCallCheck(this, Axis);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Axis).call(this, props));
	  }

	  _createClass(Axis, [{
	    key: '_mkTickAxis',
	    value: function _mkTickAxis() {
	      var _props = this.props;
	      var type = _props.type;
	      var tickOrient = _props.tickOrient;
	      var tickFormat = _props.tickFormat;
	      var tickPadding = _props.tickPadding;
	      var innerTickSize = _props.innerTickSize;
	      var outerTickSize = _props.outerTickSize;
	      var ticks = _props.ticks;


	      var func = _d2.default.svg.axis();

	      func.scale(this._mkScale(this.props));

	      if (tickOrient) func.orient(tickOrient);

	      if (tickFormat) func.tickFormat(tickFormat);

	      if (tickPadding) func.tickPadding(tickPadding);

	      if (outerTickSize) func.outerTickSize(outerTickSize);

	      if (innerTickSize) func.innerTickSize(innerTickSize);

	      if (ticks) func.ticks.apply(null, ticks);

	      return func;
	    }
	  }, {
	    key: '_mkScale',
	    value: function _mkScale() {
	      var type = this.props.type;


	      var func = (0, _scale.scale)(this.props);

	      return func;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props2 = this.props;
	      var showAxis = _props2.showAxis;
	      var gridAxisClassName = _props2.gridAxisClassName;
	      var axisClassName = _props2.axisClassName;
	      var type = _props2.type;
	      var style = _props2.style;


	      var axisGroup = _reactFauxDom2.default.createElement('g');

	      if (type === 'x') var axisClasses = axisClassName + ' axis x';else if (type === 'y') var axisClasses = axisClassName + ' axis y';else if (type === 'gridx' || type === 'gridy') var axisClasses = gridAxisClassName + ' grid-axis';

	      axisGroup.setAttribute('class', axisClasses);

	      var axisDom = _d2.default.select(axisGroup);

	      axisDom.call(this._mkTickAxis());

	      if (!showAxis) {
	        axisDom.selectAll(".grid-axis .tick text").style("opacity", "0");

	        if (type === 'gridx' || type === 'gridy') {
	          // hide domain in grids
	          axisDom.selectAll(".grid-axis .domain").style("opacity", "0");
	        }
	      }

	      // basic styles
	      axisDom.selectAll('.axis path').style('fill', 'none').style('stroke', '#000').style('shape-rendering', 'crispEdges');

	      axisDom.selectAll('.axis line').style('fill', 'none').style('stroke', '#000').style('shape-rendering', 'crispEdges');

	      axisDom.selectAll('.grid-axis line').style('opacity', .2).style('fill', 'none').style('stroke', '#000').style('stroke-width', '1.5px');

	      axisDom.selectAll('.axis path').style('display', 'none');

	      var axisText = axisDom.selectAll('.axis text');

	      if (style) {
	        for (var key in style) {
	          axisText.style(key, style[key]);
	        }
	      }

	      return axisDom.node().toReact();
	    }
	  }]);

	  return Axis;
	}(_react.Component);

	Axis.defaultProps = {
	  range: null,
	  rangeRoundBands: null,
	  domain: null,
	  tickFormat: null,
	  tickOrient: null
	};
	Axis.PropTypes = {
	  showAxis: _react.PropTypes.bool,
	  type: _react.PropTypes.string,
	  orient: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
	  tickOrient: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right'])
	};
	exports.default = Axis;

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _axis = __webpack_require__(77);

	var _axis2 = _interopRequireDefault(_axis);

	var _label = __webpack_require__(79);

	var _label2 = _interopRequireDefault(_label);

	var _commonProps = __webpack_require__(58);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Xaxis = function (_Component) {
	  _inherits(Xaxis, _Component);

	  function Xaxis(props) {
	    _classCallCheck(this, Xaxis);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Xaxis).call(this, props));
	  }

	  _createClass(Xaxis, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var height = _props.height;
	      var width = _props.width;
	      var margins = _props.margins;
	      var showXAxis = _props.showXAxis;
	      var x = _props.x;
	      var xAxisClassName = _props.xAxisClassName;
	      var xDomain = _props.xDomain;
	      var xRange = _props.xRange;
	      var xRangeRoundBands = _props.xRangeRoundBands;
	      var xScale = _props.xScale;
	      var xOrient = _props.xOrient;
	      var xTickOrient = _props.xTickOrient;
	      var xTickPadding = _props.xTickPadding;
	      var xInnerTickSize = _props.xInnerTickSize;
	      var xOuterTickSize = _props.xOuterTickSize;
	      var xTickFormat = _props.xTickFormat;
	      var xTicks = _props.xTicks;
	      var xLabel = _props.xLabel;
	      var xLabelPosition = _props.xLabelPosition;
	      var labelOffset = _props.labelOffset;
	      var style = _props.style;


	      var t;
	      var axisLabel;

	      if (!xRange) {
	        xRange = [0, width - margins.left - margins.right];
	      }

	      if (xOrient === 'bottom') {
	        // x - bottom
	        t = 'translate(0, ' + (height - margins.bottom - margins.top) + ')';
	      } else if (xOrient === 'top') {
	        // x - top
	        t = 'translate(0, 0)';
	      }

	      if (xLabel) {
	        axisLabel = _react2.default.createElement(_label2.default, {
	          height: height,
	          width: width,
	          margins: margins,
	          labelTitle: xLabel,
	          labelPosition: xLabelPosition,
	          labelOffset: labelOffset,
	          rangeRoundBands: xRangeRoundBands
	        });
	      }

	      return _react2.default.createElement(
	        'g',
	        { transform: t },
	        _react2.default.createElement(_axis2.default, {
	          height: height,
	          width: width,
	          margins: margins,
	          showAxis: showXAxis,
	          axisClassName: xAxisClassName,
	          rangeRoundBands: xRangeRoundBands,
	          type: 'x',
	          proxy: x,
	          domain: xDomain,
	          range: xRange,
	          scale: xScale,
	          orient: xOrient,
	          tickOrient: xTickOrient,
	          tickFormat: xTickFormat,
	          tickPadding: xTickPadding,
	          innerTickSize: xInnerTickSize,
	          outerTickSize: xOuterTickSize,
	          ticks: xTicks,
	          style: style
	        }),
	        axisLabel
	      );
	    }
	  }]);

	  return Xaxis;
	}(_react.Component);

	Xaxis.defaultProps = _extends({
	  showXAxis: true,
	  xAxisClassName: 'react-d3-core__axis__xAxis',
	  xScale: 'linear',
	  xOrient: 'bottom',
	  xTickOrient: 'bottom',
	  xLabelPosition: 'bottom',
	  xTickPadding: 3,
	  xInnerTickSize: 6,
	  xOuterTickSize: 6
	}, _commonProps2.default);
	Xaxis.propTypes = {
	  height: _react.PropTypes.number.isRequired,
	  width: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  showXAxis: _react.PropTypes.bool,
	  x: _react.PropTypes.func,
	  xDomain: _react.PropTypes.array,
	  xRange: _react.PropTypes.array,
	  xScale: _react.PropTypes.string.isRequired,
	  xOrient: _react.PropTypes.oneOf(['top', 'bottom']),
	  xTickOrient: _react.PropTypes.oneOf(['top', 'bottom']),
	  xAxisClassName: _react.PropTypes.string,
	  xInnerTickSize: _react.PropTypes.number,
	  xOuterTickSize: _react.PropTypes.number,
	  xTickPadding: _react.PropTypes.number,
	  xTickFormat: _react.PropTypes.func,
	  xTicks: _react.PropTypes.array,
	  style: _react.PropTypes.object
	};
	exports.default = Xaxis;

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _d = __webpack_require__(2);

	var _d2 = _interopRequireDefault(_d);

	var _reactFauxDom = __webpack_require__(63);

	var _reactFauxDom2 = _interopRequireDefault(_reactFauxDom);

	var _commonProps = __webpack_require__(58);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Label = function (_Component) {
	  _inherits(Label, _Component);

	  function Label(props) {
	    _classCallCheck(this, Label);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Label).call(this, props));
	  }

	  _createClass(Label, [{
	    key: '_mkLabel',
	    value: function _mkLabel(dom) {
	      var _props = this.props;
	      var height = _props.height;
	      var width = _props.width;
	      var margins = _props.margins;
	      var labelOffset = _props.labelOffset;
	      var labelTitle = _props.labelTitle;
	      var labelPosition = _props.labelPosition;
	      var vTransform = _props.vTransform;
	      var hTransform = _props.hTransform;
	      var textAnchor = _props.textAnchor;


	      var labelDom = _d2.default.select(dom);
	      var fixWidth = width - margins.left - margins.right;
	      var fixHeight = height - margins.top - margins.bottom;

	      if (labelPosition === 'top') {

	        labelDom.attr('transform', hTransform).attr('y', -labelOffset).attr('x', fixWidth / 2).style('text-anchor', textAnchor).text(labelTitle);
	      } else if (labelPosition === 'bottom') {

	        labelDom.attr('transform', hTransform).attr('y', +labelOffset).attr('x', fixWidth / 2).style('text-anchor', textAnchor).text(labelTitle);
	      } else if (labelPosition === 'left') {

	        labelDom.attr('transform', vTransform).attr('y', -labelOffset).attr('x', -fixHeight / 2).style('text-anchor', textAnchor).text(labelTitle);
	      } else if (labelPosition === 'right') {

	        labelDom.attr('transform', vTransform).attr('y', +labelOffset).attr('x', -fixHeight / 2).style('text-anchor', textAnchor).text(labelTitle);
	      }

	      return labelDom;
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var labelClassName = this.props.labelClassName;


	      var labelText = _reactFauxDom2.default.createElement('text');
	      var labelClasses = labelClassName + ' label';
	      labelText.setAttribute('class', labelClasses);

	      var labelDom = this._mkLabel(labelText);

	      return labelDom.node().toReact();
	    }
	  }]);

	  return Label;
	}(_react.Component);

	Label.defaultProps = _extends({
	  hTransform: 'rotate(0)',
	  vTransform: 'rotate(270)',
	  labelTitle: 'label title',
	  labelPosition: 'bottom',
	  labelOffset: 40,
	  textAnchor: 'middle',
	  labelClassName: 'react-d3-core__label'
	}, _commonProps2.default);
	Label.propTypes = {
	  height: _react.PropTypes.number.isRequired,
	  width: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  hTransform: _react.PropTypes.string,
	  vTransform: _react.PropTypes.string,
	  labelTitle: _react.PropTypes.string,
	  labelPosition: _react.PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
	  labelOffset: _react.PropTypes.number,
	  textAnchor: _react.PropTypes.string,
	  labelClassName: _react.PropTypes.string
	};
	exports.default = Label;

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _axis = __webpack_require__(77);

	var _axis2 = _interopRequireDefault(_axis);

	var _label = __webpack_require__(79);

	var _label2 = _interopRequireDefault(_label);

	var _commonProps = __webpack_require__(58);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Yaxis = function (_Component) {
	  _inherits(Yaxis, _Component);

	  function Yaxis(props) {
	    _classCallCheck(this, Yaxis);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Yaxis).call(this, props));
	  }

	  _createClass(Yaxis, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var width = _props.width;
	      var height = _props.height;
	      var margins = _props.margins;
	      var y = _props.y;
	      var yAxisClassName = _props.yAxisClassName;
	      var yDomain = _props.yDomain;
	      var yRange = _props.yRange;
	      var yRangeRoundBands = _props.yRangeRoundBands;
	      var yScale = _props.yScale;
	      var yOrient = _props.yOrient;
	      var yTickOrient = _props.yTickOrient;
	      var yTickFormat = _props.yTickFormat;
	      var yTickPadding = _props.yTickPadding;
	      var yInnerTickSize = _props.yInnerTickSize;
	      var yOuterTickSize = _props.yOuterTickSize;
	      var yTicks = _props.yTicks;
	      var yLabel = _props.yLabel;
	      var yLabelPosition = _props.yLabelPosition;
	      var labelOffset = _props.labelOffset;
	      var showYAxis = _props.showYAxis;
	      var style = _props.style;


	      var t;
	      var axisLabel;

	      if (!yRange) {
	        yRange = [height - margins.top - margins.bottom, 0];
	      }

	      if (yOrient === 'right') {
	        // y - right
	        t = 'translate(' + (width - margins.right - margins.left) + ', 0)';
	      } else if (yOrient === 'left') {
	        // y - left
	        t = 'translate(0, 0)';
	      }

	      if (yLabel) {
	        axisLabel = _react2.default.createElement(_label2.default, {
	          height: height,
	          width: width,
	          margins: margins,
	          labelTitle: yLabel,
	          labelPosition: yLabelPosition,
	          labelOffset: labelOffset
	        });
	      }

	      return _react2.default.createElement(
	        'g',
	        { transform: t },
	        _react2.default.createElement(_axis2.default, {
	          height: height,
	          width: width,
	          margins: margins,
	          showAxis: showYAxis,
	          axisClassName: yAxisClassName,
	          rangeRoundBands: yRangeRoundBands,
	          type: 'y',
	          proxy: y,
	          domain: yDomain,
	          range: yRange,
	          scale: yScale,
	          orient: yOrient,
	          tickOrient: yTickOrient,
	          tickFormat: yTickFormat,
	          tickPadding: yTickPadding,
	          innerTickSize: yInnerTickSize,
	          outerTickSize: yOuterTickSize,
	          ticks: yTicks,
	          style: style
	        }),
	        axisLabel
	      );
	    }
	  }]);

	  return Yaxis;
	}(_react.Component);

	Yaxis.defaultProps = _extends({
	  showYAxis: true,
	  yAxisClassName: 'react-d3-core__axis__yAxis',
	  yScale: 'linear',
	  yOrient: 'left',
	  yTickOrient: 'left',
	  yLabelPosition: 'left',
	  yTickPadding: 3,
	  yInnerTickSize: 6,
	  yOuterTickSize: 6
	}, _commonProps2.default);
	Yaxis.propTypes = {
	  height: _react.PropTypes.number.isRequired,
	  width: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  showXAxis: _react.PropTypes.bool,
	  y: _react.PropTypes.func,
	  yDomain: _react.PropTypes.array,
	  yRange: _react.PropTypes.array,
	  yScale: _react.PropTypes.string.isRequired,
	  yOrient: _react.PropTypes.oneOf(['left', 'right']),
	  yTickOrient: _react.PropTypes.oneOf(['left', 'right']),
	  yAxisClassName: _react.PropTypes.string,
	  yInnerTickSize: _react.PropTypes.number,
	  yOuterTickSize: _react.PropTypes.number,
	  yTickPadding: _react.PropTypes.number,
	  yTickFormat: _react.PropTypes.func,
	  yTicks: _react.PropTypes.array,
	  style: _react.PropTypes.object
	};
	exports.default = Yaxis;

/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _axis = __webpack_require__(77);

	var _axis2 = _interopRequireDefault(_axis);

	var _commonProps = __webpack_require__(58);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var Grid = function (_Component) {
	  _inherits(Grid, _Component);

	  function Grid(props) {
	    _classCallCheck(this, Grid);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Grid).call(this, props));
	  }

	  _createClass(Grid, [{
	    key: 'render',
	    value: function render() {
	      var _props = this.props;
	      var height = _props.height;
	      var width = _props.width;
	      var margins = _props.margins;
	      var type = _props.type;
	      var gridAxisClassName = _props.gridAxisClassName;
	      var xRangeRoundBands = _props.xRangeRoundBands;
	      var x = _props.x;
	      var xDomain = _props.xDomain;
	      var xRange = _props.xRange;
	      var xScale = _props.xScale;
	      var yRangeRoundBands = _props.yRangeRoundBands;
	      var y = _props.y;
	      var yDomain = _props.yDomain;
	      var yRange = _props.yRange;
	      var yScale = _props.yScale;


	      var gridAxis;
	      var t;

	      if (!yRange) {
	        yRange = [height - margins.top - margins.bottom, 0];
	      }

	      if (!xRange) {
	        xRange = [0, width - margins.left - margins.right];
	      }

	      if (type === 'x') {
	        t = 'translate(0, ' + (height - margins.bottom - margins.top) + ')';
	        var tickSize = height - margins.top - margins.bottom;

	        // if grid axis don't pass customize ticks.
	        gridAxis = _react2.default.createElement(_axis2.default, {
	          height: height,
	          width: width,
	          margins: margins,
	          type: 'gridx',
	          showAxis: false,
	          gridAxisClassName: gridAxisClassName,
	          rangeRoundBands: xRangeRoundBands,
	          tickOrient: 'bottom',
	          orient: 'bottom',
	          outerTickSize: 0,
	          tickPadding: 10,
	          tickFormat: null,
	          innerTickSize: -tickSize,
	          proxy: x,
	          domain: xDomain,
	          range: xRange,
	          scale: xScale
	        });
	      } else if (type === 'y') {
	        t = 'translate(0, 0)';
	        var tickSize = width - margins.left - margins.right;

	        // if grid axis don't pass customize ticks.
	        gridAxis = _react2.default.createElement(_axis2.default, {
	          height: height,
	          width: width,
	          margins: margins,
	          type: 'gridy',
	          showAxis: false,
	          gridAxisClassName: gridAxisClassName,
	          rangeRoundBands: yRangeRoundBands,
	          tickOrient: 'left',
	          orient: 'left',
	          outerTickSize: 0,
	          tickPadding: 10,
	          innerTickSize: -tickSize,
	          tickFormat: null,
	          proxy: y,
	          scale: yScale,
	          domain: yDomain,
	          range: yRange
	        });
	      }

	      return _react2.default.createElement(
	        'g',
	        { transform: t },
	        gridAxis
	      );
	    }
	  }]);

	  return Grid;
	}(_react.Component);

	Grid.defaultProps = _extends({
	  type: 'x',
	  gridAxisClassName: 'react-d3-core__grid_axis'
	}, _commonProps2.default);
	Grid.propTypes = {
	  height: _react.PropTypes.number.isRequired,
	  width: _react.PropTypes.number.isRequired,
	  margins: _react.PropTypes.object.isRequired,
	  type: _react.PropTypes.oneOf(['x', 'y']).isRequired,
	  gridAxisClassName: _react.PropTypes.string,
	  x: _react.PropTypes.func,
	  xDomain: _react.PropTypes.array,
	  xRange: _react.PropTypes.array,
	  xScale: _react.PropTypes.oneOf(['linear', 'identity', 'sqrt', 'pow', 'log', 'quantize', 'quantile', 'ordinal', 'time']).isRequired,
	  xRangeRoundBands: _react.PropTypes.object,
	  y: _react.PropTypes.func,
	  yDomain: _react.PropTypes.array,
	  yRange: _react.PropTypes.array,
	  yScale: _react.PropTypes.oneOf(['linear', 'identity', 'sqrt', 'pow', 'log', 'quantize', 'quantile', 'ordinal', 'time']).isRequired,
	  yRangeRoundBands: _react.PropTypes.object
	};
	exports.default = Grid;

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _grid = __webpack_require__(81);

	var _grid2 = _interopRequireDefault(_grid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var XGrid = function (_Component) {
	  _inherits(XGrid, _Component);

	  function XGrid(props) {
	    _classCallCheck(this, XGrid);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(XGrid).call(this, props));
	  }

	  _createClass(XGrid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_grid2.default, _extends({}, this.props, {
	        type: 'x'
	      }));
	    }
	  }]);

	  return XGrid;
	}(_react.Component);

	exports.default = XGrid;

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(6);

	var _react2 = _interopRequireDefault(_react);

	var _grid = __webpack_require__(81);

	var _grid2 = _interopRequireDefault(_grid);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var YGrid = function (_Component) {
	  _inherits(YGrid, _Component);

	  function YGrid(props) {
	    _classCallCheck(this, YGrid);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(YGrid).call(this, props));
	  }

	  _createClass(YGrid, [{
	    key: 'render',
	    value: function render() {
	      return _react2.default.createElement(_grid2.default, _extends({}, this.props, {
	        type: 'y'
	      }));
	    }
	  }]);

	  return YGrid;
	}(_react.Component);

	exports.default = YGrid;

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.xDomain = xDomain;

	var _d = __webpack_require__(2);

	var _d2 = _interopRequireDefault(_d);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function xDomain(props, stack, horizonal) {
	  var data = props.data;
	  var chartSeries = props.chartSeries;
	  var x = props.x;
	  var xScale = props.xScale;
	  var xDomain = props.xDomain;


	  if (xDomain) return xDomain;

	  if (!horizonal) {
	    if (xScale === 'ordinal') {
	      return data.map(function (d) {
	        return x(d);
	      });
	    } else {
	      return _d2.default.extent(data, function (d) {
	        return x(d);
	      });
	    }
	  } else {
	    if (stack) {
	      // stack
	      var max = 0;
	      var min = 0;

	      data.forEach(function (d) {
	        var totalTop = 0;
	        var totalBottom = 0;

	        chartSeries.forEach(function (sd) {
	          var field = sd.field;

	          if (d[field] > 0) {
	            totalTop += x(d[field]);
	          } else if (d[field] < 0) {
	            totalBottom += x(d[field]);
	          }
	        });

	        if (totalTop > max) max = totalTop;
	        if (totalBottom < min) min = totalBottom;
	      });

	      return [min, max];
	    } else {
	      // not stack, single
	      var domainArr = chartSeries.map(function (d) {
	        var field = d.field;
	        var extent = _d2.default.extent(data, function (dt) {
	          return x(dt[field]);
	        });

	        return extent;
	      });

	      return _d2.default.extent([].concat.apply([], domainArr));
	    }
	  }
	}

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.yDomain = yDomain;

	var _d = __webpack_require__(2);

	var _d2 = _interopRequireDefault(_d);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function yDomain(props, stack, horizonal) {
	  var data = props.data;
	  var chartSeries = props.chartSeries;
	  var y = props.y;
	  var yDomain = props.yDomain;
	  var yScale = props.yScale;


	  if (yDomain) return yDomain;

	  if (!horizonal) {
	    if (stack) {
	      // stack
	      var max = 0;
	      var min = 0;

	      data.forEach(function (d) {
	        var totalTop = 0;
	        var totalBottom = 0;

	        chartSeries.forEach(function (sd) {
	          var field = sd.field;

	          if (d[field] > 0) {
	            totalTop += y(d[field]);
	          } else if (d[field] < 0) {
	            totalBottom += y(d[field]);
	          }
	        });

	        if (totalTop > max) max = totalTop;
	        if (totalBottom < min) min = totalBottom;
	      });

	      return [min, max];
	    } else {
	      // not stack, single
	      var domainArr = chartSeries.map(function (d) {
	        var field = d.field;
	        var extent = _d2.default.extent(data, function (dt) {
	          return y(dt[field]);
	        });

	        return extent;
	      });

	      return _d2.default.extent([].concat.apply([], domainArr));
	    }
	  } else {
	    if (yScale === 'ordinal') {
	      return data.map(function (d) {
	        return y(d);
	      });
	    } else {
	      return _d2.default.extent(data, function (d) {
	        return y(d);
	      });
	    }
	  }
	}

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.pieProps = undefined;

	var _d = __webpack_require__(2);

	var _d2 = _interopRequireDefault(_d);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	var width = 960;
	var height = 500;
	var margins = { top: 80, right: 100, bottom: 80, left: 100 };

	exports.default = {
	  width: width,
	  height: height,
	  margins: margins,
	  y: function y(d) {
	    return +d;
	  },
	  xScale: 'linear',
	  yScale: 'linear',
	  showXGrid: true,
	  showYGrid: true
	};
	var pieProps = exports.pieProps = {
	  width: width,
	  height: height,
	  margins: margins,
	  innerRadius: 0,
	  categoricalColors: _d2.default.scale.category10(),
	  pieSort: _d2.default.descending
	};

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(12);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(6);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(13);

	var _index6 = _interopRequireDefault(_index5);

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _class, _temp;

	var _reactD3Core = __webpack_require__(56);

	var _commonProps = __webpack_require__(86);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _components = {
	  ChartSvg: {
	    displayName: 'ChartSvg'
	  }
	};

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: 'src/chartpie.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: 'src/chartpie.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var ChartSvg = _wrapComponent('ChartSvg')((_temp = _class = function (_Component) {
	  _inherits(ChartSvg, _Component);

	  function ChartSvg(props) {
	    _classCallCheck(this, ChartSvg);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(ChartSvg).call(this, props));
	  }

	  _createClass(ChartSvg, [{
	    key: 'render',
	    value: function render() {
	      var _this2 = this;

	      var _props = this.props;
	      var height = _props.height;
	      var width = _props.width;
	      var margins = _props.margins;
	      var data = _props.data;
	      var svgClassName = _props.svgClassName;
	      var id = _props.id;
	      var name = _props.name;
	      var value = _props.value;

	      var children = _react3.default.Children.map(this.props.children, function (el) {
	        if (el) return _react3.default.cloneElement(el, _this2.props);else return null;
	      });

	      var t = 'translate(' + margins.left + ', ' + margins.top + ')';

	      return _react3.default.createElement('svg', {
	        height: height,
	        width: width,
	        className: svgClassName,
	        id: id,
	        ref: 'svgContainer'
	      }, _react3.default.createElement('g', {
	        transform: t
	      }, children));
	    }
	  }]);

	  return ChartSvg;
	}(_react2.Component), _class.defaultProps = _extends({
	  svgClassName: 'react-d3-core__container_svg'
	}, _commonProps2.default), _class.propTypes = {
	  id: _react2.PropTypes.string,
	  width: _react2.PropTypes.number.isRequired,
	  height: _react2.PropTypes.number.isRequired,
	  margins: _react2.PropTypes.object.isRequired,
	  svgClassName: _react2.PropTypes.string.isRequired
	}, _temp));

	exports.default = ChartSvg;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(12);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(6);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(13);

	var _index6 = _interopRequireDefault(_index5);

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _class, _temp;

	var _d3Shape = __webpack_require__(89);

	var _d3Shape2 = _interopRequireDefault(_d3Shape);

	var _commonProps = __webpack_require__(86);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var _series = __webpack_require__(1);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _components = {
	  Line: {
	    displayName: 'Line'
	  }
	};

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: 'src/components/line.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: 'src/components/line.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var Line = _wrapComponent('Line')((_temp = _class = function (_Component) {
	  _inherits(Line, _Component);

	  function Line(props) {
	    _classCallCheck(this, Line);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Line).call(this, props));
	  }

	  _createClass(Line, [{
	    key: '_mkLine',
	    value: function _mkLine(dom) {
	      var lineClassName = this.props.lineClassName;

	      var dataset = (0, _series.series)(this.props);
	      var that = this;

	      return _react3.default.createElement('g', null, dataset.map(function (line) {
	        return _react3.default.createElement('path', {
	          stroke: line.color,
	          fill: 'none',
	          className: lineClassName + ' line',
	          d: that._setAxes(line.data),
	          style: line.style });
	      }));
	    }
	  }, {
	    key: '_setAxes',
	    value: function _setAxes(data) {
	      var _props = this.props;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;

	      var line = _d3Shape2.default.line().x(function (d) {
	        return xScaleSet(d.x);
	      }).y(function (d) {
	        return yScaleSet(d.y);
	      });

	      return line.call(this, data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var line = this._mkLine();

	      return _react3.default.createElement('g', null, line);
	    }
	  }]);

	  return Line;
	}(_react2.Component), _class.defaultProps = _extends({
	  interpolate: null,
	  lineClassName: 'react-d3-basic__line'
	}, _commonProps2.default), _temp));

	exports.default = Line;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports, __webpack_require__(90)) :
	  typeof define === 'function' && define.amd ? define(['exports', 'd3-path'], factory) :
	  (factory((global.d3_shape = {}),global.d3_path));
	}(this, function (exports,d3Path) { 'use strict';

	  function constant(x) {
	    return function constant() {
	      return x;
	    };
	  }

	  var epsilon = 1e-12;
	  var pi = Math.PI;
	  var halfPi = pi / 2;
	  var tau = 2 * pi;

	  function arcInnerRadius(d) {
	    return d.innerRadius;
	  }

	  function arcOuterRadius(d) {
	    return d.outerRadius;
	  }

	  function arcStartAngle(d) {
	    return d.startAngle;
	  }

	  function arcEndAngle(d) {
	    return d.endAngle;
	  }

	  function arcPadAngle(d) {
	    return d && d.padAngle; // Note: optional!
	  }

	  function asin(x) {
	    return x >= 1 ? halfPi : x <= -1 ? -halfPi : Math.asin(x);
	  }

	  function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
	    var x10 = x1 - x0, y10 = y1 - y0,
	        x32 = x3 - x2, y32 = y3 - y2,
	        t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / (y32 * x10 - x32 * y10);
	    return [x0 + t * x10, y0 + t * y10];
	  }

	  // Compute perpendicular offset line of length rc.
	  // http://mathworld.wolfram.com/Circle-LineIntersection.html
	  function cornerTangents(x0, y0, x1, y1, r1, rc, cw) {
	    var x01 = x0 - x1,
	        y01 = y0 - y1,
	        lo = (cw ? rc : -rc) / Math.sqrt(x01 * x01 + y01 * y01),
	        ox = lo * y01,
	        oy = -lo * x01,
	        x11 = x0 + ox,
	        y11 = y0 + oy,
	        x10 = x1 + ox,
	        y10 = y1 + oy,
	        x00 = (x11 + x10) / 2,
	        y00 = (y11 + y10) / 2,
	        dx = x10 - x11,
	        dy = y10 - y11,
	        d2 = dx * dx + dy * dy,
	        r = r1 - rc,
	        D = x11 * y10 - x10 * y11,
	        d = (dy < 0 ? -1 : 1) * Math.sqrt(Math.max(0, r * r * d2 - D * D)),
	        cx0 = (D * dy - dx * d) / d2,
	        cy0 = (-D * dx - dy * d) / d2,
	        cx1 = (D * dy + dx * d) / d2,
	        cy1 = (-D * dx + dy * d) / d2,
	        dx0 = cx0 - x00,
	        dy0 = cy0 - y00,
	        dx1 = cx1 - x00,
	        dy1 = cy1 - y00;

	    // Pick the closer of the two intersection points.
	    // TODO Is there a faster way to determine which intersection to use?
	    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) cx0 = cx1, cy0 = cy1;

	    return {
	      cx: cx0,
	      cy: cy0,
	      x01: -ox,
	      y01: -oy,
	      x11: cx0 * (r1 / r - 1),
	      y11: cy0 * (r1 / r - 1)
	    };
	  }

	  function arc() {
	    var innerRadius = arcInnerRadius,
	        outerRadius = arcOuterRadius,
	        cornerRadius = constant(0),
	        padRadius = null,
	        startAngle = arcStartAngle,
	        endAngle = arcEndAngle,
	        padAngle = arcPadAngle,
	        context = null;

	    function arc() {
	      var buffer,
	          r,
	          r0 = +innerRadius.apply(this, arguments),
	          r1 = +outerRadius.apply(this, arguments),
	          a0 = startAngle.apply(this, arguments) - halfPi,
	          a1 = endAngle.apply(this, arguments) - halfPi,
	          da = Math.abs(a1 - a0),
	          cw = a1 > a0;

	      if (!context) context = buffer = d3Path.path();

	      // Ensure that the outer radius is always larger than the inner radius.
	      if (r1 < r0) r = r1, r1 = r0, r0 = r;

	      // Is it a point?
	      if (!(r1 > epsilon)) context.moveTo(0, 0);

	      // Or is it a circle or annulus?
	      else if (da > tau - epsilon) {
	        context.moveTo(r1 * Math.cos(a0), r1 * Math.sin(a0));
	        context.arc(0, 0, r1, a0, a1, !cw);
	        if (r0 > epsilon) {
	          context.moveTo(r0 * Math.cos(a1), r0 * Math.sin(a1));
	          context.arc(0, 0, r0, a1, a0, cw);
	        }
	      }

	      // Or is it a circular or annular sector?
	      else {
	        var a01 = a0,
	            a11 = a1,
	            a00 = a0,
	            a10 = a1,
	            da0 = da,
	            da1 = da,
	            ap = padAngle.apply(this, arguments) / 2,
	            rp = (ap > epsilon) && (padRadius ? +padRadius.apply(this, arguments) : Math.sqrt(r0 * r0 + r1 * r1)),
	            rc = Math.min(Math.abs(r1 - r0) / 2, +cornerRadius.apply(this, arguments)),
	            rc0 = rc,
	            rc1 = rc,
	            t0,
	            t1;

	        // Apply padding? Note that since r1 ≥ r0, da1 ≥ da0.
	        if (rp > epsilon) {
	          var p0 = asin(rp / r0 * Math.sin(ap)),
	              p1 = asin(rp / r1 * Math.sin(ap));
	          if ((da0 -= p0 * 2) > epsilon) p0 *= (cw ? 1 : -1), a00 += p0, a10 -= p0;
	          else da0 = 0, a00 = a10 = (a0 + a1) / 2;
	          if ((da1 -= p1 * 2) > epsilon) p1 *= (cw ? 1 : -1), a01 += p1, a11 -= p1;
	          else da1 = 0, a01 = a11 = (a0 + a1) / 2;
	        }

	        var x01 = r1 * Math.cos(a01),
	            y01 = r1 * Math.sin(a01),
	            x10 = r0 * Math.cos(a10),
	            y10 = r0 * Math.sin(a10);

	        // Apply rounded corners?
	        if (rc > epsilon) {
	          var x11 = r1 * Math.cos(a11),
	              y11 = r1 * Math.sin(a11),
	              x00 = r0 * Math.cos(a00),
	              y00 = r0 * Math.sin(a00);

	          // Restrict the corner radius according to the sector angle.
	          if (da < pi) {
	            var oc = da0 > epsilon ? intersect(x01, y01, x00, y00, x11, y11, x10, y10) : [x10, y10],
	                ax = x01 - oc[0],
	                ay = y01 - oc[1],
	                bx = x11 - oc[0],
	                by = y11 - oc[1],
	                kc = 1 / Math.sin(Math.acos((ax * bx + ay * by) / (Math.sqrt(ax * ax + ay * ay) * Math.sqrt(bx * bx + by * by))) / 2),
	                lc = Math.sqrt(oc[0] * oc[0] + oc[1] * oc[1]);
	            rc0 = Math.min(rc, (r0 - lc) / (kc - 1));
	            rc1 = Math.min(rc, (r1 - lc) / (kc + 1));
	          }
	        }

	        // Is the sector collapsed to a line?
	        if (!(da1 > epsilon)) context.moveTo(x01, y01);

	        // Does the sector’s outer ring have rounded corners?
	        else if (rc1 > epsilon) {
	          t0 = cornerTangents(x00, y00, x01, y01, r1, rc1, cw);
	          t1 = cornerTangents(x11, y11, x10, y10, r1, rc1, cw);

	          context.moveTo(t0.cx + t0.x01, t0.cy + t0.y01);

	          // Have the corners merged?
	          if (rc1 < rc) context.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw);

	          // Otherwise, draw the two corners and the ring.
	          else {
	            context.arc(t0.cx, t0.cy, rc1, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw);
	            context.arc(0, 0, r1, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), !cw);
	            context.arc(t1.cx, t1.cy, rc1, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw);
	          }
	        }

	        // Or is the outer ring just a circular arc?
	        else context.moveTo(x01, y01), context.arc(0, 0, r1, a01, a11, !cw);

	        // Is there no inner ring, and it’s a circular sector?
	        // Or perhaps it’s an annular sector collapsed due to padding?
	        if (!(r0 > epsilon) || !(da0 > epsilon)) context.lineTo(x10, y10);

	        // Does the sector’s inner ring (or point) have rounded corners?
	        else if (rc0 > epsilon) {
	          t0 = cornerTangents(x10, y10, x11, y11, r0, -rc0, cw);
	          t1 = cornerTangents(x01, y01, x00, y00, r0, -rc0, cw);

	          context.lineTo(t0.cx + t0.x01, t0.cy + t0.y01);

	          // Have the corners merged?
	          if (rc0 < rc) context.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t1.y01, t1.x01), !cw);

	          // Otherwise, draw the two corners and the ring.
	          else {
	            context.arc(t0.cx, t0.cy, rc0, Math.atan2(t0.y01, t0.x01), Math.atan2(t0.y11, t0.x11), !cw);
	            context.arc(0, 0, r0, Math.atan2(t0.cy + t0.y11, t0.cx + t0.x11), Math.atan2(t1.cy + t1.y11, t1.cx + t1.x11), cw);
	            context.arc(t1.cx, t1.cy, rc0, Math.atan2(t1.y11, t1.x11), Math.atan2(t1.y01, t1.x01), !cw);
	          }
	        }

	        // Or is the inner ring just a circular arc?
	        else context.arc(0, 0, r0, a10, a00, cw);
	      }

	      context.closePath();

	      if (buffer) return context = null, buffer + "" || null;
	    }

	    arc.centroid = function() {
	      var r = (+innerRadius.apply(this, arguments) + +outerRadius.apply(this, arguments)) / 2,
	          a = (+startAngle.apply(this, arguments) + +endAngle.apply(this, arguments)) / 2 - pi / 2;
	      return [Math.cos(a) * r, Math.sin(a) * r];
	    };

	    arc.innerRadius = function(_) {
	      return arguments.length ? (innerRadius = typeof _ === "function" ? _ : constant(+_), arc) : innerRadius;
	    };

	    arc.outerRadius = function(_) {
	      return arguments.length ? (outerRadius = typeof _ === "function" ? _ : constant(+_), arc) : outerRadius;
	    };

	    arc.cornerRadius = function(_) {
	      return arguments.length ? (cornerRadius = typeof _ === "function" ? _ : constant(+_), arc) : cornerRadius;
	    };

	    arc.padRadius = function(_) {
	      return arguments.length ? (padRadius = _ == null ? null : typeof _ === "function" ? _ : constant(+_), arc) : padRadius;
	    };

	    arc.startAngle = function(_) {
	      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), arc) : startAngle;
	    };

	    arc.endAngle = function(_) {
	      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), arc) : endAngle;
	    };

	    arc.padAngle = function(_) {
	      return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), arc) : padAngle;
	    };

	    arc.context = function(_) {
	      return arguments.length ? ((context = _ == null ? null : _), arc) : context;
	    };

	    return arc;
	  }

	  var slice = Array.prototype.slice;

	  function bind(curve, args) {
	    if (args.length < 2) return curve;
	    args = slice.call(args);
	    args[0] = null;
	    return function(context) {
	      args[0] = context;
	      return curve.apply(null, args);
	    };
	  }

	  function Linear(context) {
	    this._context = context;
	  }

	  Linear.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; // proceed
	        default: this._context.lineTo(x, y); break;
	      }
	    }
	  };

	  function curveLinear(context) {
	    return new Linear(context);
	  }

	  function x(p) {
	    return p[0];
	  }

	  function y(p) {
	    return p[1];
	  }

	  function area() {
	    var x0 = x,
	        x1 = null,
	        y0 = constant(0),
	        y1 = y,
	        defined = constant(true),
	        context = null,
	        curve = curveLinear,
	        output = null;

	    function area(data) {
	      var i,
	          j,
	          k,
	          n = data.length,
	          d,
	          defined0 = false,
	          buffer,
	          x0z = new Array(n),
	          y0z = new Array(n);

	      if (!context) output = curve(buffer = d3Path.path());

	      for (i = 0; i <= n; ++i) {
	        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
	          if (defined0 = !defined0) {
	            j = i;
	            output.areaStart();
	            output.lineStart();
	          } else {
	            output.lineEnd();
	            output.lineStart();
	            for (k = i - 1; k >= j; --k) {
	              output.point(x0z[k], y0z[k]);
	            }
	            output.lineEnd();
	            output.areaEnd();
	          }
	        }
	        if (defined0) {
	          x0z[i] = +x0(d, i, data), y0z[i] = +y0(d, i, data);
	          output.point(x1 ? +x1(d, i, data) : x0z[i], y1 ? +y1(d, i, data) : y0z[i]);
	        }
	      }

	      if (buffer) return output = null, buffer + "" || null;
	    }

	    area.x = function(_) {
	      return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), x1 = null, area) : x0;
	    };

	    area.x0 = function(_) {
	      return arguments.length ? (x0 = typeof _ === "function" ? _ : constant(+_), area) : x0;
	    };

	    area.x1 = function(_) {
	      return arguments.length ? (x1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : x1;
	    };

	    area.y = function(_) {
	      return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), y1 = null, area) : y0;
	    };

	    area.y0 = function(_) {
	      return arguments.length ? (y0 = typeof _ === "function" ? _ : constant(+_), area) : y0;
	    };

	    area.y1 = function(_) {
	      return arguments.length ? (y1 = _ == null ? null : typeof _ === "function" ? _ : constant(+_), area) : y1;
	    };

	    area.defined = function(_) {
	      return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), area) : defined;
	    };

	    area.curve = function(_) {
	      return arguments.length ? (curve = bind(_, arguments), context != null && (output = curve(context)), area) : curve;
	    };

	    area.context = function(_) {
	      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), area) : context;
	    };

	    return area;
	  }

	  function line() {
	    var x$$ = x,
	        y$$ = y,
	        defined = constant(true),
	        context = null,
	        curve = curveLinear,
	        output = null;

	    function line(data) {
	      var i,
	          n = data.length,
	          d,
	          defined0 = false,
	          buffer;

	      if (!context) output = curve(buffer = d3Path.path());

	      for (i = 0; i <= n; ++i) {
	        if (!(i < n && defined(d = data[i], i, data)) === defined0) {
	          if (defined0 = !defined0) output.lineStart();
	          else output.lineEnd();
	        }
	        if (defined0) output.point(+x$$(d, i, data), +y$$(d, i, data));
	      }

	      if (buffer) return output = null, buffer + "" || null;
	    }

	    line.x = function(_) {
	      return arguments.length ? (x$$ = typeof _ === "function" ? _ : constant(+_), line) : x$$;
	    };

	    line.y = function(_) {
	      return arguments.length ? (y$$ = typeof _ === "function" ? _ : constant(+_), line) : y$$;
	    };

	    line.defined = function(_) {
	      return arguments.length ? (defined = typeof _ === "function" ? _ : constant(!!_), line) : defined;
	    };

	    line.curve = function(_) {
	      return arguments.length ? (curve = bind(_, arguments), context != null && (output = curve(context)), line) : curve;
	    };

	    line.context = function(_) {
	      return arguments.length ? (_ == null ? context = output = null : output = curve(context = _), line) : context;
	    };

	    return line;
	  }

	  function descending$1(a, b) {
	    return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
	  }

	  function identity(d) {
	    return d;
	  }

	  function pie() {
	    var value = identity,
	        sortValues = descending$1,
	        sort = null,
	        startAngle = constant(0),
	        endAngle = constant(tau),
	        padAngle = constant(0);

	    function pie(data) {
	      var i,
	          n = data.length,
	          j,
	          k,
	          sum = 0,
	          index = new Array(n),
	          arcs = new Array(n),
	          a0 = +startAngle.apply(this, arguments),
	          da = Math.min(tau, Math.max(-tau, endAngle.apply(this, arguments) - a0)),
	          a1,
	          p = Math.min(Math.abs(da) / n, padAngle.apply(this, arguments)),
	          pa = p * (da < 0 ? -1 : 1),
	          v;

	      for (i = 0; i < n; ++i) {
	        if ((v = arcs[index[i] = i] = +value(data[i], i, data)) > 0) {
	          sum += v;
	        }
	      }

	      // Optionally sort the arcs by previously-computed values or by data.
	      if (sortValues != null) index.sort(function(i, j) { return sortValues(arcs[i], arcs[j]); });
	      else if (sort !== null) index.sort(function(i, j) { return sort(data[i], data[j]); });

	      // Compute the arcs! They are stored in the original data's order.
	      for (i = 0, k = sum ? (da - n * pa) / sum : 0; i < n; ++i, a0 = a1) {
	        j = index[i], v = arcs[j], a1 = a0 + (v > 0 ? v * k : 0) + pa, arcs[j] = {
	          data: data[j],
	          index: i,
	          value: v,
	          startAngle: a0,
	          endAngle: a1,
	          padAngle: p
	        };
	      }

	      return arcs;
	    }

	    pie.value = function(_) {
	      return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), pie) : value;
	    };

	    pie.sortValues = function(_) {
	      return arguments.length ? (sortValues = _, sort = null, pie) : sortValues;
	    };

	    pie.sort = function(_) {
	      return arguments.length ? (sort = _, sortValues = null, pie) : sort;
	    };

	    pie.startAngle = function(_) {
	      return arguments.length ? (startAngle = typeof _ === "function" ? _ : constant(+_), pie) : startAngle;
	    };

	    pie.endAngle = function(_) {
	      return arguments.length ? (endAngle = typeof _ === "function" ? _ : constant(+_), pie) : endAngle;
	    };

	    pie.padAngle = function(_) {
	      return arguments.length ? (padAngle = typeof _ === "function" ? _ : constant(+_), pie) : padAngle;
	    };

	    return pie;
	  }

	  function Radial(curve) {
	    this._curve = curve;
	  }

	  Radial.prototype = {
	    areaStart: function() {
	      this._curve.areaStart();
	    },
	    areaEnd: function() {
	      this._curve.areaEnd();
	    },
	    lineStart: function() {
	      this._curve.lineStart();
	    },
	    lineEnd: function() {
	      this._curve.lineEnd();
	    },
	    point: function(a, r) {
	      a -= halfPi, this._curve.point(r * Math.cos(a), r * Math.sin(a));
	    }
	  };

	  function curveRadial(curve, args) {
	    curve = bind(curve, args);

	    function radial(context) {
	      return new Radial(curve(context));
	    }

	    radial._curve = curve;

	    return radial;
	  }

	  function radialArea() {
	    var a = area(),
	        c = a.curve;

	    a.angle = a.x, delete a.x;
	    a.startAngle = a.x0, delete a.x0;
	    a.endAngle = a.x1, delete a.x1;
	    a.radius = a.y, delete a.y;
	    a.innerRadius = a.y0, delete a.y0;
	    a.outerRadius = a.y1, delete a.y1;

	    a.curve = function(_) {
	      return arguments.length ? c(curveRadial(_, arguments)) : c()._curve;
	    };

	    return a.curve(curveLinear);
	  }

	  function radialLine() {
	    var l = line(),
	        c = l.curve;

	    l.angle = l.x, delete l.x;
	    l.radius = l.y, delete l.y;

	    l.curve = function(_) {
	      return arguments.length ? c(curveRadial(_, arguments)) : c()._curve;
	    };

	    return l.curve(curveLinear);
	  }

	  var circle = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size / pi);
	      context.moveTo(r, 0);
	      context.arc(0, 0, r, 0, tau);
	    }
	  };

	  var cross = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size / 5) / 2;
	      context.moveTo(-3 * r, -r);
	      context.lineTo(-r, -r);
	      context.lineTo(-r, -3 * r);
	      context.lineTo(r, -3 * r);
	      context.lineTo(r, -r);
	      context.lineTo(3 * r, -r);
	      context.lineTo(3 * r, r);
	      context.lineTo(r, r);
	      context.lineTo(r, 3 * r);
	      context.lineTo(-r, 3 * r);
	      context.lineTo(-r, r);
	      context.lineTo(-3 * r, r);
	      context.closePath();
	    }
	  };

	  var tan30 = Math.sqrt(1 / 3);
	  var tan30_2 = tan30 * 2;
	  var diamond = {
	    draw: function(context, size) {
	      var y = Math.sqrt(size / tan30_2),
	          x = y * tan30;
	      context.moveTo(0, -y);
	      context.lineTo(x, 0);
	      context.lineTo(0, y);
	      context.lineTo(-x, 0);
	      context.closePath();
	    }
	  };

	  var ka = 0.89081309152928522810;
	  var kr = Math.sin(pi / 10) / Math.sin(7 * pi / 10);
	  var kx = Math.sin(tau / 10) * kr;
	  var ky = -Math.cos(tau / 10) * kr;
	  var star = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size * ka),
	          x = kx * r,
	          y = ky * r;
	      context.moveTo(0, -r);
	      context.lineTo(x, y);
	      for (var i = 1; i < 5; ++i) {
	        var a = tau * i / 5,
	            c = Math.cos(a),
	            s = Math.sin(a);
	        context.lineTo(s * r, -c * r);
	        context.lineTo(c * x - s * y, s * x + c * y);
	      }
	      context.closePath();
	    }
	  };

	  var square = {
	    draw: function(context, size) {
	      var w = Math.sqrt(size),
	          x = -w / 2;
	      context.rect(x, x, w, w);
	    }
	  };

	  var sqrt3 = Math.sqrt(3);

	  var triangle = {
	    draw: function(context, size) {
	      var y = -Math.sqrt(size / (sqrt3 * 3));
	      context.moveTo(0, y * 2);
	      context.lineTo(-sqrt3 * y, -y);
	      context.lineTo(sqrt3 * y, -y);
	      context.closePath();
	    }
	  };

	  var c = -0.5;
	  var s = Math.sqrt(3) / 2;
	  var k = 1 / Math.sqrt(12);
	  var a = (k / 2 + 1) * 3;
	  var wye = {
	    draw: function(context, size) {
	      var r = Math.sqrt(size / a),
	          x0 = r / 2,
	          y0 = r * k,
	          x1 = x0,
	          y1 = r * k + r,
	          x2 = -x1,
	          y2 = y1;
	      context.moveTo(x0, y0);
	      context.lineTo(x1, y1);
	      context.lineTo(x2, y2);
	      context.lineTo(c * x0 - s * y0, s * x0 + c * y0);
	      context.lineTo(c * x1 - s * y1, s * x1 + c * y1);
	      context.lineTo(c * x2 - s * y2, s * x2 + c * y2);
	      context.lineTo(c * x0 + s * y0, c * y0 - s * x0);
	      context.lineTo(c * x1 + s * y1, c * y1 - s * x1);
	      context.lineTo(c * x2 + s * y2, c * y2 - s * x2);
	      context.closePath();
	    }
	  };

	  var symbols = [
	    circle,
	    cross,
	    diamond,
	    square,
	    star,
	    triangle,
	    wye
	  ];

	  function symbol() {
	    var type = constant(circle),
	        size = constant(64),
	        context = null;

	    function symbol() {
	      var buffer;
	      if (!context) context = buffer = d3Path.path();
	      type.apply(this, arguments).draw(context, +size.apply(this, arguments));
	      if (buffer) return context = null, buffer + "" || null;
	    }

	    symbol.type = function(_) {
	      return arguments.length ? (type = typeof _ === "function" ? _ : constant(_), symbol) : type;
	    };

	    symbol.size = function(_) {
	      return arguments.length ? (size = typeof _ === "function" ? _ : constant(+_), symbol) : size;
	    };

	    symbol.context = function(_) {
	      return arguments.length ? (context = _ == null ? null : _, symbol) : context;
	    };

	    return symbol;
	  }

	  function noop() {}

	  function point(that, x, y) {
	    that._context.bezierCurveTo(
	      (2 * that._x0 + that._x1) / 3,
	      (2 * that._y0 + that._y1) / 3,
	      (that._x0 + 2 * that._x1) / 3,
	      (that._y0 + 2 * that._y1) / 3,
	      (that._x0 + 4 * that._x1 + x) / 6,
	      (that._y0 + 4 * that._y1 + y) / 6
	    );
	  }

	  function Basis(context) {
	    this._context = context;
	  }

	  Basis.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 =
	      this._y0 = this._y1 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 3: point(this, this._x1, this._y1); // proceed
	        case 2: this._context.lineTo(this._x1, this._y1); break;
	      }
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; this._context.lineTo((5 * this._x0 + this._x1) / 6, (5 * this._y0 + this._y1) / 6); // proceed
	        default: point(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = x;
	      this._y0 = this._y1, this._y1 = y;
	    }
	  };

	  function basis(context) {
	    return new Basis(context);
	  }

	  function BasisClosed(context) {
	    this._context = context;
	  }

	  BasisClosed.prototype = {
	    areaStart: noop,
	    areaEnd: noop,
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 =
	      this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 1: {
	          this._context.moveTo(this._x2, this._y2);
	          this._context.closePath();
	          break;
	        }
	        case 2: {
	          this._context.moveTo((this._x2 + 2 * this._x3) / 3, (this._y2 + 2 * this._y3) / 3);
	          this._context.lineTo((this._x3 + 2 * this._x2) / 3, (this._y3 + 2 * this._y2) / 3);
	          this._context.closePath();
	          break;
	        }
	        case 3: {
	          this.point(this._x2, this._y2);
	          this.point(this._x3, this._y3);
	          this.point(this._x4, this._y4);
	          break;
	        }
	      }
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._x2 = x, this._y2 = y; break;
	        case 1: this._point = 2; this._x3 = x, this._y3 = y; break;
	        case 2: this._point = 3; this._x4 = x, this._y4 = y; this._context.moveTo((this._x0 + 4 * this._x1 + x) / 6, (this._y0 + 4 * this._y1 + y) / 6); break;
	        default: point(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = x;
	      this._y0 = this._y1, this._y1 = y;
	    }
	  };

	  function basisClosed(context) {
	    return new BasisClosed(context);
	  }

	  function BasisOpen(context) {
	    this._context = context;
	  }

	  BasisOpen.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 =
	      this._y0 = this._y1 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; var x0 = (this._x0 + 4 * this._x1 + x) / 6, y0 = (this._y0 + 4 * this._y1 + y) / 6; this._line ? this._context.lineTo(x0, y0) : this._context.moveTo(x0, y0); break;
	        case 3: this._point = 4; // proceed
	        default: point(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = x;
	      this._y0 = this._y1, this._y1 = y;
	    }
	  };

	  function basisOpen(context) {
	    return new BasisOpen(context);
	  }

	  function Bundle(context, beta) {
	    this._basis = basis(context);
	    this._beta = beta;
	  }

	  Bundle.prototype = {
	    lineStart: function() {
	      this._x = [];
	      this._y = [];
	      this._basis.lineStart();
	    },
	    lineEnd: function() {
	      var x = this._x,
	          y = this._y,
	          j = x.length - 1;

	      if (j > 0) {
	        var x0 = x[0],
	            y0 = y[0],
	            dx = x[j] - x0,
	            dy = y[j] - y0,
	            i = -1,
	            t;

	        while (++i <= j) {
	          t = i / j;
	          this._basis.point(
	            this._beta * x[i] + (1 - this._beta) * (x0 + t * dx),
	            this._beta * y[i] + (1 - this._beta) * (y0 + t * dy)
	          );
	        }
	      }

	      this._x = this._y = null;
	      this._basis.lineEnd();
	    },
	    point: function(x, y) {
	      this._x.push(+x);
	      this._y.push(+y);
	    }
	  };

	  function bundle(context, beta) {
	    return beta == null ? new Bundle(context, 0.85)
	        : (beta = +beta) === 1 ? basis(context)
	        : new Bundle(context, beta);
	  }

	  function point$1(that, x, y) {
	    that._context.bezierCurveTo(
	      that._x1 + that._k * (that._x2 - that._x0),
	      that._y1 + that._k * (that._y2 - that._y0),
	      that._x2 + that._k * (that._x1 - x),
	      that._y2 + that._k * (that._y1 - y),
	      that._x2,
	      that._y2
	    );
	  }

	  function Cardinal(context, k) {
	    this._context = context;
	    this._k = k;
	  }

	  Cardinal.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 =
	      this._y0 = this._y1 = this._y2 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 2: this._context.lineTo(this._x2, this._y2); break;
	        case 3: point$1(this, this._x1, this._y1); break;
	      }
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; this._x1 = x, this._y1 = y; break;
	        case 2: this._point = 3; // proceed
	        default: point$1(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };

	  function cardinal(context, tension) {
	    return new Cardinal(context, (tension == null ? 1 : 1 - tension) / 6);
	  }

	  function CardinalClosed(context, k) {
	    this._context = context;
	    this._k = k;
	  }

	  CardinalClosed.prototype = {
	    areaStart: noop,
	    areaEnd: noop,
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
	      this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 1: {
	          this._context.moveTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	        case 2: {
	          this._context.lineTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	        case 3: {
	          this.point(this._x3, this._y3);
	          this.point(this._x4, this._y4);
	          this.point(this._x5, this._y5);
	          break;
	        }
	      }
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
	        case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
	        case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
	        default: point$1(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };

	  function cardinalClosed(context, tension) {
	    return new CardinalClosed(context, (tension == null ? 1 : 1 - tension) / 6);
	  }

	  function CardinalOpen(context, k) {
	    this._context = context;
	    this._k = k;
	  }

	  CardinalOpen.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 =
	      this._y0 = this._y1 = this._y2 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
	        case 3: this._point = 4; // proceed
	        default: point$1(this, x, y); break;
	      }
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };

	  function cardinalOpen(context, tension) {
	    return new CardinalOpen(context, (tension == null ? 1 : 1 - tension) / 6);
	  }

	  function point$2(that, x, y) {
	    var x1 = that._x1,
	        y1 = that._y1,
	        x2 = that._x2,
	        y2 = that._y2;

	    if (that._l01_a > epsilon) {
	      var a = 2 * that._l01_2a + 3 * that._l01_a * that._l12_a + that._l12_2a,
	          n = 3 * that._l01_a * (that._l01_a + that._l12_a);
	      x1 = (x1 * a - that._x0 * that._l12_2a + that._x2 * that._l01_2a) / n;
	      y1 = (y1 * a - that._y0 * that._l12_2a + that._y2 * that._l01_2a) / n;
	    }

	    if (that._l23_a > epsilon) {
	      var b = 2 * that._l23_2a + 3 * that._l23_a * that._l12_a + that._l12_2a,
	          m = 3 * that._l23_a * (that._l23_a + that._l12_a);
	      x2 = (x2 * b + that._x1 * that._l23_2a - x * that._l12_2a) / m;
	      y2 = (y2 * b + that._y1 * that._l23_2a - y * that._l12_2a) / m;
	    }

	    that._context.bezierCurveTo(x1, y1, x2, y2, that._x2, that._y2);
	  }

	  function CatmullRom(context, alpha) {
	    this._context = context;
	    this._alpha = alpha;
	  }

	  CatmullRom.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 =
	      this._y0 = this._y1 = this._y2 = NaN;
	      this._l01_a = this._l12_a = this._l23_a =
	      this._l01_2a = this._l12_2a = this._l23_2a =
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 2: this._context.lineTo(this._x2, this._y2); break;
	        case 3: this.point(this, this._x2, this._y2); break;
	      }
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;

	      if (this._point) {
	        var x23 = this._x2 - x,
	            y23 = this._y2 - y;
	        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	      }

	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; // proceed
	        default: point$2(this, x, y); break;
	      }

	      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };

	  function catmullRom(context, alpha) {
	    return (alpha = alpha == null ? 0.5 : +alpha)
	        ? new CatmullRom(context, alpha)
	        : cardinal(context, 0);
	  }

	  function CatmullRomClosed(context, alpha) {
	    this._context = context;
	    this._alpha = alpha;
	  }

	  CatmullRomClosed.prototype = {
	    areaStart: noop,
	    areaEnd: noop,
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 = this._x3 = this._x4 = this._x5 =
	      this._y0 = this._y1 = this._y2 = this._y3 = this._y4 = this._y5 = NaN;
	      this._l01_a = this._l12_a = this._l23_a =
	      this._l01_2a = this._l12_2a = this._l23_2a =
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 1: {
	          this._context.moveTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	        case 2: {
	          this._context.lineTo(this._x3, this._y3);
	          this._context.closePath();
	          break;
	        }
	        case 3: {
	          this.point(this._x3, this._y3);
	          this.point(this._x4, this._y4);
	          this.point(this._x5, this._y5);
	          break;
	        }
	      }
	    },
	    point: function(x, y) {
	      x = +x, y = +y;

	      if (this._point) {
	        var x23 = this._x2 - x,
	            y23 = this._y2 - y;
	        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	      }

	      switch (this._point) {
	        case 0: this._point = 1; this._x3 = x, this._y3 = y; break;
	        case 1: this._point = 2; this._context.moveTo(this._x4 = x, this._y4 = y); break;
	        case 2: this._point = 3; this._x5 = x, this._y5 = y; break;
	        default: point$2(this, x, y); break;
	      }

	      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };

	  function catmullRomClosed(context, alpha) {
	    return (alpha = alpha == null ? 0.5 : +alpha)
	        ? new CatmullRomClosed(context, alpha)
	        : cardinalClosed(context, 0);
	  }

	  function CatmullRomOpen(context, alpha) {
	    this._context = context;
	    this._alpha = alpha;
	  }

	  CatmullRomOpen.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 = this._x2 =
	      this._y0 = this._y1 = this._y2 = NaN;
	      this._l01_a = this._l12_a = this._l23_a =
	      this._l01_2a = this._l12_2a = this._l23_2a =
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._line || (this._line !== 0 && this._point === 3)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;

	      if (this._point) {
	        var x23 = this._x2 - x,
	            y23 = this._y2 - y;
	        this._l23_a = Math.sqrt(this._l23_2a = Math.pow(x23 * x23 + y23 * y23, this._alpha));
	      }

	      switch (this._point) {
	        case 0: this._point = 1; break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; this._line ? this._context.lineTo(this._x2, this._y2) : this._context.moveTo(this._x2, this._y2); break;
	        case 3: this._point = 4; // proceed
	        default: point$2(this, x, y); break;
	      }

	      this._l01_a = this._l12_a, this._l12_a = this._l23_a;
	      this._l01_2a = this._l12_2a, this._l12_2a = this._l23_2a;
	      this._x0 = this._x1, this._x1 = this._x2, this._x2 = x;
	      this._y0 = this._y1, this._y1 = this._y2, this._y2 = y;
	    }
	  };

	  function catmullRomOpen(context, alpha) {
	    return (alpha = alpha == null ? 0.5 : +alpha)
	        ? new CatmullRomOpen(context, alpha)
	        : cardinalOpen(context, 0);
	  }

	  function LinearClosed(context) {
	    this._context = context;
	  }

	  LinearClosed.prototype = {
	    areaStart: noop,
	    areaEnd: noop,
	    lineStart: function() {
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (this._point) this._context.closePath();
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      if (this._point) this._context.lineTo(x, y);
	      else this._point = 1, this._context.moveTo(x, y);
	    }
	  };

	  function linearClosed(context) {
	    return new LinearClosed(context);
	  }

	  function sign(x) {
	    return x < 0 ? -1 : 1;
	  }

	  // Calculate the slopes of the tangents (Hermite-type interpolation) based on
	  // the following paper: Steffen, M. 1990. A Simple Method for Monotonic
	  // Interpolation in One Dimension. Astronomy and Astrophysics, Vol. 239, NO.
	  // NOV(II), P. 443, 1990.
	  function slope3(that, x2, y2) {
	    var h0 = that._x1 - that._x0,
	        h1 = x2 - that._x1,
	        s0 = (that._y1 - that._y0) / (h0 || h1 < 0 && -0),
	        s1 = (y2 - that._y1) / (h1 || h0 < 0 && -0),
	        p = (s0 * h1 + s1 * h0) / (h0 + h1);
	    return (sign(s0) + sign(s1)) * Math.min(Math.abs(s0), Math.abs(s1), 0.5 * Math.abs(p)) || 0;
	  }

	  // Calculate a one-sided slope.
	  function slope2(that, t) {
	    var h = that._x1 - that._x0;
	    return h ? (3 * (that._y1 - that._y0) / h - t) / 2 : t;
	  }

	  // According to https://en.wikipedia.org/wiki/Cubic_Hermite_spline#Representations
	  // "you can express cubic Hermite interpolation in terms of cubic Bézier curves
	  // with respect to the four values p0, p0 + m0 / 3, p1 - m1 / 3, p1".
	  function point$3(that, t0, t1) {
	    var x0 = that._x0,
	        y0 = that._y0,
	        x1 = that._x1,
	        y1 = that._y1,
	        dx = (x1 - x0) / 3;
	    that._context.bezierCurveTo(x0 + dx, y0 + dx * t0, x1 - dx, y1 - dx * t1, x1, y1);
	  }

	  function MonotoneX(context) {
	    this._context = context;
	  }

	  MonotoneX.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x0 = this._x1 =
	      this._y0 = this._y1 =
	      this._t0 = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      switch (this._point) {
	        case 2: this._context.lineTo(this._x1, this._y1); break;
	        case 3: point$3(this, this._t0, slope2(this, this._t0)); break;
	      }
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      var t1 = NaN;

	      x = +x, y = +y;
	      if (x === this._x1 && y === this._y1) return; // Ignore coincident points.
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; break;
	        case 2: this._point = 3; point$3(this, slope2(this, t1 = slope3(this, x, y)), t1); break;
	        default: point$3(this, this._t0, t1 = slope3(this, x, y)); break;
	      }

	      this._x0 = this._x1, this._x1 = x;
	      this._y0 = this._y1, this._y1 = y;
	      this._t0 = t1;
	    }
	  }

	  function MonotoneY(context) {
	    this._context = new ReflectContext(context);
	  }

	  (MonotoneY.prototype = Object.create(MonotoneX.prototype)).point = function(x, y) {
	    MonotoneX.prototype.point.call(this, y, x);
	  };

	  function ReflectContext(context) {
	    this._context = context;
	  }

	  ReflectContext.prototype = {
	    moveTo: function(x, y) { this._context.moveTo(y, x); },
	    closePath: function() { this._context.closePath(); },
	    lineTo: function(x, y) { this._context.lineTo(y, x); },
	    bezierCurveTo: function(x1, y1, x2, y2, x, y) { this._context.bezierCurveTo(y1, x1, y2, x2, y, x); }
	  };

	  function monotoneX(context) {
	    return new MonotoneX(context);
	  }

	  function monotoneY(context) {
	    return new MonotoneY(context);
	  }

	  function Natural(context) {
	    this._context = context;
	  }

	  Natural.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x = [];
	      this._y = [];
	    },
	    lineEnd: function() {
	      var x = this._x,
	          y = this._y,
	          n = x.length;

	      if (n) {
	        this._line ? this._context.lineTo(x[0], y[0]) : this._context.moveTo(x[0], y[0]);
	        if (n === 2) {
	          this._context.lineTo(x[1], y[1]);
	        } else {
	          var px = controlPoints(x),
	              py = controlPoints(y);
	          for (var i0 = 0, i1 = 1; i1 < n; ++i0, ++i1) {
	            this._context.bezierCurveTo(px[0][i0], py[0][i0], px[1][i0], py[1][i0], x[i1], y[i1]);
	          }
	        }
	      }

	      if (this._line || (this._line !== 0 && n === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	      this._x = this._y = null;
	    },
	    point: function(x, y) {
	      this._x.push(+x);
	      this._y.push(+y);
	    }
	  };

	  // See https://www.particleincell.com/2012/bezier-splines/ for derivation.
	  function controlPoints(x) {
	    var i,
	        n = x.length - 1,
	        m,
	        a = new Array(n),
	        b = new Array(n),
	        r = new Array(n);
	    a[0] = 0, b[0] = 2, r[0] = x[0] + 2 * x[1];
	    for (i = 1; i < n - 1; ++i) a[i] = 1, b[i] = 4, r[i] = 4 * x[i] + 2 * x[i + 1];
	    a[n - 1] = 2, b[n - 1] = 7, r[n - 1] = 8 * x[n - 1] + x[n];
	    for (i = 1; i < n; ++i) m = a[i] / b[i - 1], b[i] -= m, r[i] -= m * r[i - 1];
	    a[n - 1] = r[n - 1] / b[n - 1];
	    for (i = n - 2; i >= 0; --i) a[i] = (r[i] - a[i + 1]) / b[i];
	    b[n - 1] = (x[n] + a[n - 1]) / 2;
	    for (i = 0; i < n - 1; ++i) b[i] = 2 * x[i + 1] - a[i + 1];
	    return [a, b];
	  }

	  function natural(context) {
	    return new Natural(context);
	  }

	  function Step(context, t) {
	    this._context = context;
	    this._t = t;
	  }

	  Step.prototype = {
	    areaStart: function() {
	      this._line = 0;
	    },
	    areaEnd: function() {
	      this._line = NaN;
	    },
	    lineStart: function() {
	      this._x = this._y = NaN;
	      this._point = 0;
	    },
	    lineEnd: function() {
	      if (0 < this._t && this._t < 1 && this._point === 2) this._context.lineTo(this._x, this._y);
	      if (this._line || (this._line !== 0 && this._point === 1)) this._context.closePath();
	      this._line = 1 - this._line;
	    },
	    point: function(x, y) {
	      x = +x, y = +y;
	      switch (this._point) {
	        case 0: this._point = 1; this._line ? this._context.lineTo(x, y) : this._context.moveTo(x, y); break;
	        case 1: this._point = 2; // proceed
	        default: {
	          var t = x > this._x ? this._t : 1 - this._t;
	          if (t <= 0) {
	            this._context.lineTo(this._x, y);
	            this._context.lineTo(x, y);
	          } else if (t >= 1) {
	            this._context.lineTo(x, this._y);
	            this._context.lineTo(x, y);
	          } else {
	            var x1 = (this._x + x) * t;
	            this._context.lineTo(x1, this._y);
	            this._context.lineTo(x1, y);
	          }
	          break;
	        }
	      }
	      this._x = x, this._y = y;
	    }
	  };

	  function step(context) {
	    return new Step(context, 0.5);
	  }

	  function stepBefore(context) {
	    return new Step(context, 0);
	  }

	  function stepAfter(context) {
	    return new Step(context, 1);
	  }

	  var slice$1 = Array.prototype.slice;

	  function none(series, order) {
	    if (!((n = series.length) > 1)) return;
	    for (var i = 1, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
	      s0 = s1, s1 = series[order[i]];
	      for (var j = 0; j < m; ++j) {
	        s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
	      }
	    }
	  }

	  function none$1(series) {
	    var n = series.length, o = new Array(n);
	    while (--n >= 0) o[n] = n;
	    return o;
	  }

	  function stackValue(d, key) {
	    return d[key];
	  }

	  function stack() {
	    var keys = constant([]),
	        order = none$1,
	        offset = none,
	        value = stackValue;

	    function stack(data) {
	      var kz = keys.apply(this, arguments),
	          i,
	          m = data.length,
	          n = kz.length,
	          sz = new Array(n),
	          oz;

	      for (i = 0; i < n; ++i) {
	        for (var ki = kz[i], si = sz[i] = new Array(m), j = 0, sij; j < m; ++j) {
	          si[j] = sij = [0, +value(data[j], ki, j, data)];
	          sij.data = data[j];
	        }
	        si.key = ki;
	      }

	      for (i = 0, oz = order(sz); i < n; ++i) {
	        sz[oz[i]].index = i;
	      }

	      offset(sz, oz);
	      return sz;
	    }

	    stack.keys = function(_) {
	      return arguments.length ? (keys = typeof _ === "function" ? _ : constant(slice$1.call(_)), stack) : keys;
	    };

	    stack.value = function(_) {
	      return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), stack) : value;
	    };

	    stack.order = function(_) {
	      return arguments.length ? (order = _ == null ? none$1 : typeof _ === "function" ? _ : constant(slice$1.call(_)), stack) : order;
	    };

	    stack.offset = function(_) {
	      return arguments.length ? (offset = _ == null ? none : _, stack) : offset;
	    };

	    return stack;
	  }

	  function expand(series, order) {
	    if (!((n = series.length) > 0)) return;
	    for (var i, n, j = 0, m = series[0].length, y; j < m; ++j) {
	      for (y = i = 0; i < n; ++i) y += series[i][j][1] || 0;
	      if (y) for (i = 0; i < n; ++i) series[i][j][1] /= y;
	    }
	    none(series, order);
	  }

	  function silhouette(series, order) {
	    if (!((n = series.length) > 0)) return;
	    for (var j = 0, s0 = series[order[0]], n, m = s0.length; j < m; ++j) {
	      for (var i = 0, y = 0; i < n; ++i) y += series[i][j][1] || 0;
	      s0[j][1] += s0[j][0] = -y / 2;
	    }
	    none(series, order);
	  }

	  function wiggle(series, order) {
	    if (!((n = series.length) > 0) || !((m = (s0 = series[order[0]]).length) > 0)) return;
	    for (var y = 0, j = 1, s0, m, n; j < m; ++j) {
	      for (var i = 0, s1 = 0, s2 = 0; i < n; ++i) {
	        var si = series[order[i]],
	            sij0 = si[j][1] || 0,
	            sij1 = si[j - 1][1] || 0,
	            s3 = (sij0 - sij1) / 2;
	        for (var k = 0; k < i; ++k) {
	          var sk = series[order[k]],
	              skj0 = sk[j][1] || 0,
	              skj1 = sk[j - 1][1] || 0;
	          s3 += skj0 - skj1;
	        }
	        s1 += sij0, s2 += s3 * sij0;
	      }
	      s0[j - 1][1] += s0[j - 1][0] = y;
	      if (s1) y -= s2 / s1;
	    }
	    s0[j - 1][1] += s0[j - 1][0] = y;
	    none(series, order);
	  }

	  function ascending(series) {
	    var sums = series.map(sum);
	    return none$1(series).sort(function(a, b) { return sums[a] - sums[b]; });
	  }

	  function sum(series) {
	    var s = 0, i = -1, n = series.length, v;
	    while (++i < n) if (v = +series[i][1]) s += v;
	    return s;
	  }

	  function descending(series) {
	    return ascending(series).reverse();
	  }

	  function insideOut(series) {
	    var n = series.length,
	        i,
	        j,
	        sums = series.map(sum),
	        order = none$1(series).sort(function(a, b) { return sums[b] - sums[a]; }),
	        top = 0,
	        bottom = 0,
	        tops = [],
	        bottoms = [];

	    for (i = 0; i < n; ++i) {
	      j = order[i];
	      if (top < bottom) {
	        top += sums[j];
	        tops.push(j);
	      } else {
	        bottom += sums[j];
	        bottoms.push(j);
	      }
	    }

	    return bottoms.reverse().concat(tops);
	  }

	  function reverse(series) {
	    return none$1(series).reverse();
	  }

	  var version = "0.5.1";

	  exports.version = version;
	  exports.arc = arc;
	  exports.area = area;
	  exports.line = line;
	  exports.pie = pie;
	  exports.radialArea = radialArea;
	  exports.radialLine = radialLine;
	  exports.symbol = symbol;
	  exports.symbols = symbols;
	  exports.symbolCircle = circle;
	  exports.symbolCross = cross;
	  exports.symbolDiamond = diamond;
	  exports.symbolSquare = square;
	  exports.symbolStar = star;
	  exports.symbolTriangle = triangle;
	  exports.symbolWye = wye;
	  exports.curveBasisClosed = basisClosed;
	  exports.curveBasisOpen = basisOpen;
	  exports.curveBasis = basis;
	  exports.curveBundle = bundle;
	  exports.curveCardinalClosed = cardinalClosed;
	  exports.curveCardinalOpen = cardinalOpen;
	  exports.curveCardinal = cardinal;
	  exports.curveCatmullRomClosed = catmullRomClosed;
	  exports.curveCatmullRomOpen = catmullRomOpen;
	  exports.curveCatmullRom = catmullRom;
	  exports.curveLinearClosed = linearClosed;
	  exports.curveLinear = curveLinear;
	  exports.curveMonotoneX = monotoneX;
	  exports.curveMonotoneY = monotoneY;
	  exports.curveNatural = natural;
	  exports.curveStep = step;
	  exports.curveStepAfter = stepAfter;
	  exports.curveStepBefore = stepBefore;
	  exports.stack = stack;
	  exports.stackOffsetExpand = expand;
	  exports.stackOffsetNone = none;
	  exports.stackOffsetSilhouette = silhouette;
	  exports.stackOffsetWiggle = wiggle;
	  exports.stackOrderAscending = ascending;
	  exports.stackOrderDescending = descending;
	  exports.stackOrderInsideOut = insideOut;
	  exports.stackOrderNone = none$1;
	  exports.stackOrderReverse = reverse;

	}));

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	(function (global, factory) {
	   true ? factory(exports) :
	  typeof define === 'function' && define.amd ? define(['exports'], factory) :
	  (factory((global.d3_path = global.d3_path || {})));
	}(this, function (exports) { 'use strict';

	  var pi = Math.PI;
	  var tau = 2 * pi;
	  var epsilon = 1e-6;
	  var tauEpsilon = tau - epsilon;
	  function Path() {
	    this._x0 = this._y0 = // start of current subpath
	    this._x1 = this._y1 = null; // end of current subpath
	    this._ = [];
	  }

	  function path() {
	    return new Path;
	  }

	  Path.prototype = path.prototype = {
	    constructor: Path,
	    moveTo: function(x, y) {
	      this._.push("M", this._x0 = this._x1 = +x, ",", this._y0 = this._y1 = +y);
	    },
	    closePath: function() {
	      if (this._x1 !== null) {
	        this._x1 = this._x0, this._y1 = this._y0;
	        this._.push("Z");
	      }
	    },
	    lineTo: function(x, y) {
	      this._.push("L", this._x1 = +x, ",", this._y1 = +y);
	    },
	    quadraticCurveTo: function(x1, y1, x, y) {
	      this._.push("Q", +x1, ",", +y1, ",", this._x1 = +x, ",", this._y1 = +y);
	    },
	    bezierCurveTo: function(x1, y1, x2, y2, x, y) {
	      this._.push("C", +x1, ",", +y1, ",", +x2, ",", +y2, ",", this._x1 = +x, ",", this._y1 = +y);
	    },
	    arcTo: function(x1, y1, x2, y2, r) {
	      x1 = +x1, y1 = +y1, x2 = +x2, y2 = +y2, r = +r;
	      var x0 = this._x1,
	          y0 = this._y1,
	          x21 = x2 - x1,
	          y21 = y2 - y1,
	          x01 = x0 - x1,
	          y01 = y0 - y1,
	          l01_2 = x01 * x01 + y01 * y01;

	      // Is the radius negative? Error.
	      if (r < 0) throw new Error("negative radius: " + r);

	      // Is this path empty? Move to (x1,y1).
	      if (this._x1 === null) {
	        this._.push(
	          "M", this._x1 = x1, ",", this._y1 = y1
	        );
	      }

	      // Or, is (x1,y1) coincident with (x0,y0)? Do nothing.
	      else if (!(l01_2 > epsilon));

	      // Or, are (x0,y0), (x1,y1) and (x2,y2) collinear?
	      // Equivalently, is (x1,y1) coincident with (x2,y2)?
	      // Or, is the radius zero? Line to (x1,y1).
	      else if (!(Math.abs(y01 * x21 - y21 * x01) > epsilon) || !r) {
	        this._.push(
	          "L", this._x1 = x1, ",", this._y1 = y1
	        );
	      }

	      // Otherwise, draw an arc!
	      else {
	        var x20 = x2 - x0,
	            y20 = y2 - y0,
	            l21_2 = x21 * x21 + y21 * y21,
	            l20_2 = x20 * x20 + y20 * y20,
	            l21 = Math.sqrt(l21_2),
	            l01 = Math.sqrt(l01_2),
	            l = r * Math.tan((pi - Math.acos((l21_2 + l01_2 - l20_2) / (2 * l21 * l01))) / 2),
	            t01 = l / l01,
	            t21 = l / l21;

	        // If the start tangent is not coincident with (x0,y0), line to.
	        if (Math.abs(t01 - 1) > epsilon) {
	          this._.push(
	            "L", x1 + t01 * x01, ",", y1 + t01 * y01
	          );
	        }

	        this._.push(
	          "A", r, ",", r, ",0,0,", +(y01 * x20 > x01 * y20), ",", this._x1 = x1 + t21 * x21, ",", this._y1 = y1 + t21 * y21
	        );
	      }
	    },
	    arc: function(x, y, r, a0, a1, ccw) {
	      x = +x, y = +y, r = +r;
	      var dx = r * Math.cos(a0),
	          dy = r * Math.sin(a0),
	          x0 = x + dx,
	          y0 = y + dy,
	          cw = 1 ^ ccw,
	          da = ccw ? a0 - a1 : a1 - a0;

	      // Is the radius negative? Error.
	      if (r < 0) throw new Error("negative radius: " + r);

	      // Is this path empty? Move to (x0,y0).
	      if (this._x1 === null) {
	        this._.push(
	          "M", x0, ",", y0
	        );
	      }

	      // Or, is (x0,y0) not coincident with the previous point? Line to (x0,y0).
	      else if (Math.abs(this._x1 - x0) > epsilon || Math.abs(this._y1 - y0) > epsilon) {
	        this._.push(
	          "L", x0, ",", y0
	        );
	      }

	      // Is this arc empty? We’re done.
	      if (!r) return;

	      // Is this a complete circle? Draw two arcs to complete the circle.
	      if (da > tauEpsilon) {
	        this._.push(
	          "A", r, ",", r, ",0,1,", cw, ",", x - dx, ",", y - dy,
	          "A", r, ",", r, ",0,1,", cw, ",", this._x1 = x0, ",", this._y1 = y0
	        );
	      }

	      // Otherwise, draw an arc!
	      else {
	        if (da < 0) da = da % tau + tau;
	        this._.push(
	          "A", r, ",", r, ",0,", +(da >= pi), ",", cw, ",", this._x1 = x + r * Math.cos(a1), ",", this._y1 = y + r * Math.sin(a1)
	        );
	      }
	    },
	    rect: function(x, y, w, h) {
	      this._.push("M", this._x0 = this._x1 = +x, ",", this._y0 = this._y1 = +y, "h", +w, "v", +h, "h", -w, "Z");
	    },
	    toString: function() {
	      return this._.join("");
	    }
	  };

	  var version = "0.1.5";

	  exports.version = version;
	  exports.path = path;

	}));

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(12);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(6);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(13);

	var _index6 = _interopRequireDefault(_index5);

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _class, _temp;

	var _d3Shape = __webpack_require__(89);

	var _d3Shape2 = _interopRequireDefault(_d3Shape);

	var _commonProps = __webpack_require__(86);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var _series = __webpack_require__(1);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _components = {
	  Area: {
	    displayName: 'Area'
	  }
	};

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: 'src/components/area.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: 'src/components/area.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var Area = _wrapComponent('Area')((_temp = _class = function (_Component) {
	  _inherits(Area, _Component);

	  function Area(props) {
	    _classCallCheck(this, Area);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Area).call(this, props));
	  }

	  _createClass(Area, [{
	    key: '_mkArea',
	    value: function _mkArea() {
	      var _props = this.props;
	      var areaClassName = _props.areaClassName;
	      var areaOpacity = _props.areaOpacity;

	      var dataset = (0, _series.series)(this.props);
	      var that = this;

	      return _react3.default.createElement('g', null, dataset.map(function (area) {
	        return _react3.default.createElement('path', {
	          className: areaClassName + ' area',
	          fill: area.color,
	          d: that._setAxes(area.data),
	          style: area.style
	        });
	      }));
	    }
	  }, {
	    key: '_setAxes',
	    value: function _setAxes(data) {
	      var _props2 = this.props;
	      var height = _props2.height;
	      var margins = _props2.margins;
	      var xScaleSet = _props2.xScaleSet;
	      var yScaleSet = _props2.yScaleSet;

	      var area = _d3Shape2.default.area().x(function (d) {
	        return xScaleSet(d.x);
	      }).y0(function (d) {
	        var domain = yScaleSet.domain();

	        if (domain[0] * domain[1] < 0) {
	          return yScaleSet(0);
	        } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
	          return yScaleSet.range()[0];
	        } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
	          return yScaleSet.range()[1];
	        }
	      }).y1(function (d) {
	        return yScaleSet(d.y);
	      });

	      return area.call(this, data);
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var area = this._mkArea();

	      return _react3.default.createElement('g', null, area);
	    }
	  }]);

	  return Area;
	}(_react2.Component), _class.defaultProps = _extends({
	  areaClassName: 'react-d3-basic__area'
	}, _commonProps2.default), _temp));

	exports.default = Area;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, d3) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(12);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(6);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(13);

	var _index6 = _interopRequireDefault(_index5);

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _class, _temp;

	var _d3Shape = __webpack_require__(89);

	var _d3Shape2 = _interopRequireDefault(_d3Shape);

	var _commonProps = __webpack_require__(86);

	var _commonProps2 = _interopRequireDefault(_commonProps);

	var _series = __webpack_require__(1);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _components = {
	  AreaStack: {
	    displayName: 'AreaStack'
	  }
	};

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: 'src/components/area_stack.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: 'src/components/area_stack.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var AreaStack = _wrapComponent('AreaStack')((_temp = _class = function (_Component) {
	  _inherits(AreaStack, _Component);

	  function AreaStack(props) {
	    _classCallCheck(this, AreaStack);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(AreaStack).call(this, props));
	  }

	  _createClass(AreaStack, [{
	    key: '_mkStack',
	    value: function _mkStack() {
	      var areaClassName = this.props.areaClassName;

	      var dataset = (0, _series.series)(this.props);

	      var _setStack = this._setStack();
	      var _setAxes = this._setAxes();

	      return _react3.default.createElement('g', null, _setStack(dataset).map(function (area) {
	        return _react3.default.createElement('path', {
	          className: areaClassName + ' area',
	          fill: area.color,
	          d: _setAxes(area.data),
	          style: area.style
	        });
	      }));
	    }
	  }, {
	    key: '_setStack',
	    value: function _setStack() {
	      var chartSeries = this.props.chartSeries;

	      var buildOut = function buildOut(len) {
	        // baseline for positive and negative bars respectively.
	        var currentXOffsets = [];
	        var currentXIndex = 0;
	        return function (d, y0, y) {

	          if (currentXIndex++ % len === 0) {
	            currentXOffsets = [0, 0];
	          }

	          if (y >= 0) {
	            d.y0 = currentXOffsets[1];
	            d.y = y;
	            currentXOffsets[1] += y;
	          } else {
	            d.y0 = currentXOffsets[0] + y;
	            d.y = -y;
	            currentXOffsets[0] += y;
	          }
	        };
	      };
	      return d3.layout.stack().values(function (d) {
	        return d.data;
	      }).out(buildOut(chartSeries.length));
	    }
	  }, {
	    key: '_setAxes',
	    value: function _setAxes() {
	      var _props = this.props;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;

	      return _d3Shape2.default.area().x(function (d) {
	        return xScaleSet(d.x);
	      }).y0(function (d) {
	        return yScaleSet(d.y0);
	      }).y1(function (d) {
	        return yScaleSet(d.y0 + d.y);
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var area = this._mkStack();

	      return _react3.default.createElement('g', null, area);
	    }
	  }]);

	  return AreaStack;
	}(_react2.Component), _class.defaultProps = _extends({
	  areaClass: 'react-d3-basics__area_stack',
	  areaClassName: 'react-d3-basic__area_stack'
	}, _commonProps2.default), _temp));

	exports.default = AreaStack;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module), __webpack_require__(2)))

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(12);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(6);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(13);

	var _index6 = _interopRequireDefault(_index5);

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _class, _temp;

	var _series = __webpack_require__(1);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _components = {
	  Bar: {
	    displayName: 'Bar'
	  }
	};

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: 'src/components/bar.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: 'src/components/bar.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var Bar = _wrapComponent('Bar')((_temp = _class = function (_Component) {
	  _inherits(Bar, _Component);

	  function Bar(props) {
	    _classCallCheck(this, Bar);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Bar).call(this, props));
	  }

	  _createClass(Bar, [{
	    key: '_mkBar',
	    value: function _mkBar() {
	      var _props = this.props;
	      var height = _props.height;
	      var margins = _props.margins;
	      var barClassName = _props.barClassName;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;
	      var onMouseOut = _props.onMouseOut;
	      var onMouseOver = _props.onMouseOver;

	      var dataset = (0, _series.series)(this.props)[0];
	      var domain = yScaleSet.domain();
	      var zeroBase;

	      if (domain[0] * domain[1] < 0) {
	        zeroBase = yScaleSet(0);
	      } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
	        zeroBase = yScaleSet.range()[0];
	      } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
	        zeroBase = yScaleSet.range()[1];
	      }

	      return _react3.default.createElement('g', null, dataset.data.map(function (bar) {
	        return _react3.default.createElement('rect', {
	          className: barClassName + ' bar',
	          x: xScaleSet(bar.x) ? xScaleSet(bar.x) : -10000,
	          y: bar.y < 0 ? zeroBase : yScaleSet(bar.y),
	          width: xScaleSet.rangeBand(),
	          height: bar.y < domain[0] ? 0 : Math.abs(zeroBase - yScaleSet(bar.y)),
	          fill: bar._style.color ? bar._style.color : dataset.color,
	          style: Object.assign({}, dataset.style, bar._style),
	          onMouseOut: onMouseOut,
	          onMouseOver: onMouseOver
	        });
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var bar = this._mkBar();

	      return _react3.default.createElement('g', null, bar);
	    }
	  }]);

	  return Bar;
	}(_react2.Component), _class.defaultProps = {
	  onMouseOver: function onMouseOver(d) {},
	  onMouseOut: function onMouseOut(d) {},
	  barClassName: 'react-d3-basic__bar'
	}, _temp));

	exports.default = Bar;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(12);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(6);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(13);

	var _index6 = _interopRequireDefault(_index5);

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _class, _temp;

	var _series = __webpack_require__(1);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _components = {
	  BarHorizontal: {
	    displayName: 'BarHorizontal'
	  }
	};

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: 'src/components/bar_horizontal.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: 'src/components/bar_horizontal.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var BarHorizontal = _wrapComponent('BarHorizontal')((_temp = _class = function (_Component) {
	  _inherits(BarHorizontal, _Component);

	  function BarHorizontal(props) {
	    _classCallCheck(this, BarHorizontal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarHorizontal).call(this, props));
	  }

	  _createClass(BarHorizontal, [{
	    key: '_mkBar',
	    value: function _mkBar(dom) {
	      var _props = this.props;
	      var height = _props.height;
	      var margins = _props.margins;
	      var barClassName = _props.barClassName;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;
	      var onMouseOut = _props.onMouseOut;
	      var onMouseOver = _props.onMouseOver;

	      var dataset = (0, _series.series)(this.props, true)[0];
	      var domain = xScaleSet.domain();
	      var zeroBase;

	      if (domain[0] * domain[1] < 0) {
	        zeroBase = xScaleSet(0);
	      } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
	        zeroBase = xScaleSet.range()[0];
	      } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
	        zeroBase = xScaleSet.range()[1];
	      }

	      return _react3.default.createElement('g', null, dataset.data.map(function (bar) {
	        return _react3.default.createElement('rect', {
	          className: barClassName + ' bar',
	          y: yScaleSet(bar.y) ? yScaleSet(bar.y) : -10000,
	          x: bar.x > 0 ? zeroBase : zeroBase - Math.abs(zeroBase - xScaleSet(bar.x)),
	          height: yScaleSet.rangeBand(),
	          width: bar.x < domain[0] ? 0 : Math.abs(zeroBase - xScaleSet(bar.x)),
	          fill: bar._style.color ? bar._style.color : dataset.color,
	          style: Object.assign({}, dataset.style, bar._style),
	          onMouseOver: onMouseOver,
	          onMouseOut: onMouseOut
	        });
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var bar = this._mkBar();

	      return _react3.default.createElement('g', null, bar);
	    }
	  }]);

	  return BarHorizontal;
	}(_react2.Component), _class.defaultProps = {
	  onMouseOver: function onMouseOver(d) {},
	  onMouseOut: function onMouseOut(d) {},
	  barClassName: 'react-d3-basic__bar_horizontal'
	}, _temp));

	exports.default = BarHorizontal;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(12);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(6);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(13);

	var _index6 = _interopRequireDefault(_index5);

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _class, _temp;

	var _d = __webpack_require__(2);

	var _d2 = _interopRequireDefault(_d);

	var _series = __webpack_require__(1);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _components = {
	  BarGroup: {
	    displayName: 'BarGroup'
	  }
	};

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: 'src/components/bar_group.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: 'src/components/bar_group.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var BarGroup = _wrapComponent('BarGroup')((_temp = _class = function (_Component) {
	  _inherits(BarGroup, _Component);

	  function BarGroup(props) {
	    _classCallCheck(this, BarGroup);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarGroup).call(this, props));
	  }

	  _createClass(BarGroup, [{
	    key: '_mkBarGroup',
	    value: function _mkBarGroup(dom) {
	      var _props = this.props;
	      var height = _props.height;
	      var margins = _props.margins;
	      var barClassName = _props.barClassName;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;
	      var onMouseOut = _props.onMouseOut;
	      var onMouseOver = _props.onMouseOver;

	      var dataset = (0, _series.series)(this.props);
	      var x1 = _d2.default.scale.ordinal();

	      // mapping x1, inner x axis
	      x1.domain(dataset.map(function (d) {
	        return d.field;
	      })).rangeRoundBands([0, xScaleSet.rangeBand()]);

	      var domain = yScaleSet.domain();
	      var zeroBase;

	      if (domain[0] * domain[1] < 0) {
	        zeroBase = yScaleSet(0);
	      } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
	        zeroBase = yScaleSet.range()[0];
	      } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
	        zeroBase = yScaleSet.range()[1];
	      }

	      return dataset.map(function (barGroup, i) {
	        return _react3.default.createElement('g', { className: 'bargroup' }, barGroup.data.map(function (bar) {
	          console.log(bar);
	          return _react3.default.createElement('rect', {
	            className: barClassName + ' bar',
	            width: x1.rangeBand(),
	            x: xScaleSet(bar.x) ? xScaleSet(bar.x) + x1.rangeBand() * i : -10000,
	            y: bar.y < 0 ? zeroBase : yScaleSet(bar.y),
	            height: bar.y < domain[0] ? 0 : Math.abs(zeroBase - yScaleSet(bar.y)),
	            fill: barGroup.color,
	            onMouseOver: onMouseOver,
	            onMouseOut: onMouseOut,
	            style: barGroup.style
	          });
	        }));
	      });
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var bar = this._mkBarGroup();

	      return _react3.default.createElement('g', null, bar);
	    }
	  }]);

	  return BarGroup;
	}(_react2.Component), _class.defaultProps = {
	  onMouseOver: function onMouseOver(d) {},
	  onMouseOut: function onMouseOut(d) {},
	  barClassName: 'react-d3-basic__bar_group'
	}, _temp));

	exports.default = BarGroup;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(12);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(6);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(13);

	var _index6 = _interopRequireDefault(_index5);

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _class, _temp;

	var _d = __webpack_require__(2);

	var _d2 = _interopRequireDefault(_d);

	var _series = __webpack_require__(1);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _components = {
	  BarGroupHorizontal: {
	    displayName: 'BarGroupHorizontal'
	  }
	};

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: 'src/components/bar_group_horizontal.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: 'src/components/bar_group_horizontal.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var BarGroupHorizontal = _wrapComponent('BarGroupHorizontal')((_temp = _class = function (_Component) {
	  _inherits(BarGroupHorizontal, _Component);

	  function BarGroupHorizontal(props) {
	    _classCallCheck(this, BarGroupHorizontal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarGroupHorizontal).call(this, props));
	  }

	  _createClass(BarGroupHorizontal, [{
	    key: '_mkBarGroup',
	    value: function _mkBarGroup() {
	      var _props = this.props;
	      var height = _props.height;
	      var margins = _props.margins;
	      var barClassName = _props.barClassName;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;
	      var onMouseOut = _props.onMouseOut;
	      var onMouseOver = _props.onMouseOver;

	      var dataset = (0, _series.series)(this.props, true);
	      var y1 = _d2.default.scale.ordinal();

	      // mapping x1, inner x axis
	      y1.domain(dataset.map(function (d) {
	        return d.field;
	      })).rangeRoundBands([0, yScaleSet.rangeBand()]);

	      var domain = xScaleSet.domain();
	      var zeroBase;

	      if (domain[0] * domain[1] < 0) {
	        zeroBase = xScaleSet(0);
	      } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
	        zeroBase = xScaleSet.range()[0];
	      } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
	        zeroBase = xScaleSet.range()[1];
	      }

	      return _react3.default.createElement('g', null, dataset.map(function (barGroup, i) {
	        return _react3.default.createElement('g', { className: 'bargroup' }, barGroup.data.map(function (bar) {
	          return _react3.default.createElement('rect', {
	            className: barClassName + ' bar',
	            height: y1.rangeBand(),
	            y: yScaleSet(bar.y) ? yScaleSet(bar.y) + y1.rangeBand() * i : -10000,
	            x: bar.x > 0 ? zeroBase : zeroBase - Math.abs(zeroBase - xScaleSet(bar.x)),
	            width: bar.x < domain[0] ? 0 : Math.abs(zeroBase - xScaleSet(bar.x)),
	            fill: barGroup.color,
	            onMouseOver: onMouseOver,
	            onMouseOut: onMouseOut,
	            style: barGroup.style
	          });
	        }));
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var bar = this._mkBarGroup();

	      return _react3.default.createElement('g', null, bar);
	    }
	  }]);

	  return BarGroupHorizontal;
	}(_react2.Component), _class.defaultProps = {
	  onMouseOver: function onMouseOver(d) {},
	  onMouseOut: function onMouseOut(d) {},
	  barClassName: 'react-d3-basic__bar_group_horizontal'
	}, _temp));

	exports.default = BarGroupHorizontal;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(12);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(6);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(13);

	var _index6 = _interopRequireDefault(_index5);

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _class, _temp;

	var _d = __webpack_require__(2);

	var _d2 = _interopRequireDefault(_d);

	var _series = __webpack_require__(1);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _components = {
	  BarStack: {
	    displayName: 'BarStack'
	  }
	};

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: 'src/components/bar_stack.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: 'src/components/bar_stack.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var BarStack = _wrapComponent('BarStack')((_temp = _class = function (_Component) {
	  _inherits(BarStack, _Component);

	  function BarStack(props) {
	    _classCallCheck(this, BarStack);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarStack).call(this, props));
	  }

	  _createClass(BarStack, [{
	    key: '_mkBarStack',
	    value: function _mkBarStack() {
	      var _props = this.props;
	      var height = _props.height;
	      var margins = _props.margins;
	      var barClassName = _props.barClassName;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;
	      var onMouseOver = _props.onMouseOver;
	      var onMouseOut = _props.onMouseOut;

	      var dataset = (0, _series.series)(this.props);
	      var _setStack = this._setStack();

	      var domain = yScaleSet.domain();
	      var zeroBase;

	      if (domain[0] * domain[1] < 0) {
	        zeroBase = yScaleSet(0);
	      } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
	        zeroBase = yScaleSet.range()[0];
	      } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
	        zeroBase = yScaleSet.range()[1];
	      }

	      return _react3.default.createElement('g', null, _setStack(dataset).map(function (barGroup) {
	        return _react3.default.createElement('g', {
	          className: 'barGroup',
	          fill: barGroup.color,
	          style: barGroup.style }, barGroup.data.map(function (bar) {
	          return _react3.default.createElement('rect', {
	            className: barClassName + ' bar',
	            width: xScaleSet.rangeBand(),
	            x: xScaleSet(bar.x) ? xScaleSet(bar.x) : -10000,
	            y: yScaleSet(bar.y0 + bar.y),
	            height: Math.abs(yScaleSet(bar.y) - yScaleSet(0)),
	            onMouseOver: onMouseOver,
	            onMouseOut: onMouseOut
	          });
	        }));
	      }));
	    }
	  }, {
	    key: '_setStack',
	    value: function _setStack() {
	      var chartSeries = this.props.chartSeries;

	      var buildOut = function buildOut(len) {
	        // baseline for positive and negative bars respectively.
	        var currentXOffsets = [];
	        var currentXIndex = 0;
	        return function (d, y0, y) {

	          if (currentXIndex++ % len === 0) {
	            currentXOffsets = [0, 0];
	          }

	          if (y >= 0) {
	            d.y0 = currentXOffsets[1];
	            d.y = y;
	            currentXOffsets[1] += y;
	          } else {
	            d.y0 = currentXOffsets[0] + y;
	            d.y = -y;
	            currentXOffsets[0] += y;
	          }
	        };
	      };
	      return _d2.default.layout.stack().values(function (d) {
	        return d.data;
	      }).out(buildOut(chartSeries.length));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var bar = this._mkBarStack();

	      return _react3.default.createElement('g', null, bar);
	    }
	  }]);

	  return BarStack;
	}(_react2.Component), _class.defaultProps = {
	  onMouseOver: function onMouseOver(d) {},
	  onMouseOut: function onMouseOut(d) {},
	  barClassName: 'react-d3-basic__bar_stack'
	}, _temp));

	exports.default = BarStack;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(12);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(6);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(13);

	var _index6 = _interopRequireDefault(_index5);

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _class, _temp;

	var _d = __webpack_require__(2);

	var _d2 = _interopRequireDefault(_d);

	var _series = __webpack_require__(1);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _components = {
	  BarStackHorizontal: {
	    displayName: 'BarStackHorizontal'
	  }
	};

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: 'src/components/bar_stack_horizontal.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: 'src/components/bar_stack_horizontal.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var BarStackHorizontal = _wrapComponent('BarStackHorizontal')((_temp = _class = function (_Component) {
	  _inherits(BarStackHorizontal, _Component);

	  function BarStackHorizontal(props) {
	    _classCallCheck(this, BarStackHorizontal);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(BarStackHorizontal).call(this, props));
	  }

	  _createClass(BarStackHorizontal, [{
	    key: '_mkBarStack',
	    value: function _mkBarStack(dom) {
	      var _props = this.props;
	      var height = _props.height;
	      var margins = _props.margins;
	      var barClassName = _props.barClassName;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;
	      var onMouseOver = _props.onMouseOver;
	      var onMouseOut = _props.onMouseOut;

	      var dataset = (0, _series.series)(this.props, true);
	      var _setStack = this._setStack();

	      // make areas
	      var chart = _d2.default.select(dom).attr("class", "g");

	      var domain = xScaleSet.domain();
	      var zeroBase;

	      if (domain[0] * domain[1] < 0) {
	        zeroBase = xScaleSet(0);
	      } else if (domain[0] * domain[1] >= 0 && domain[0] >= 0) {
	        zeroBase = xScaleSet.range()[0];
	      } else if (domain[0] * domain[1] >= 0 && domain[0] < 0) {
	        zeroBase = xScaleSet.range()[1];
	      }

	      return _react3.default.createElement('g', null, _setStack(dataset).map(function (barGroup) {
	        return _react3.default.createElement('g', {
	          className: 'barGroup',
	          fill: barGroup.color,
	          style: barGroup.style
	        }, barGroup.data.map(function (bar) {
	          return _react3.default.createElement('rect', {
	            className: barClassName + ' bar',
	            height: yScaleSet.rangeBand(),
	            y: yScaleSet(bar.y) ? yScaleSet(bar.y) : -10000,
	            x: xScaleSet(bar.x0),
	            width: Math.abs(xScaleSet(bar.x) - xScaleSet(0)),
	            onMouseOver: onMouseOver,
	            onMouseOut: onMouseOut
	          });
	        }));
	      }));
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

	      return _react3.default.createElement('g', null, bar);
	    }
	  }]);

	  return BarStackHorizontal;
	}(_react2.Component), _class.defaultProps = {
	  onMouseOver: function onMouseOver(d) {},
	  onMouseOut: function onMouseOut(d) {},
	  barClassName: 'react-d3-basic__bar_stack_horizontal'
	}, _temp));

	exports.default = BarStackHorizontal;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(12);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(6);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(13);

	var _index6 = _interopRequireDefault(_index5);

	var _extends = Object.assign || function (target) {
	  for (var i = 1; i < arguments.length; i++) {
	    var source = arguments[i];for (var key in source) {
	      if (Object.prototype.hasOwnProperty.call(source, key)) {
	        target[key] = source[key];
	      }
	    }
	  }return target;
	};

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _class, _temp;

	var _d3Shape = __webpack_require__(89);

	var _d3Shape2 = _interopRequireDefault(_d3Shape);

	var _commonProps = __webpack_require__(86);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _components = {
	  Pie: {
	    displayName: 'Pie'
	  }
	};

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: 'src/components/pie.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: 'src/components/pie.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var Pie = _wrapComponent('Pie')((_temp = _class = function (_Component) {
	  _inherits(Pie, _Component);

	  function Pie(props) {
	    _classCallCheck(this, Pie);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Pie).call(this, props));
	  }

	  _createClass(Pie, [{
	    key: 'mkSeries',
	    value: function mkSeries() {
	      var _props = this.props;
	      var data = _props.data;
	      var chartSeries = _props.chartSeries;
	      var value = _props.value;
	      var name = _props.name;
	      var categoricalColors = _props.categoricalColors;

	      var chartSeriesData = chartSeries.map(function (f, i) {

	        // set a color if not set
	        if (!f.color) f.color = categoricalColors(i);

	        // set name if not set
	        if (!f.name) f.name = f.field;

	        var val;

	        data.forEach(function (d) {
	          if (name(d) === f.field) val = d;
	        });

	        return Object.assign(f, { value: value(val) });
	      });

	      return chartSeriesData;
	    }
	  }, {
	    key: '_mkPie',
	    value: function _mkPie() {
	      var _props2 = this.props;
	      var width = _props2.width;
	      var height = _props2.height;
	      var innerRadius = _props2.innerRadius;
	      var outerRadius = _props2.outerRadius;
	      var pieSort = _props2.pieSort;
	      var value = _props2.value;
	      var radius = _props2.radius;
	      var onMouseOut = _props2.onMouseOut;
	      var onMouseOver = _props2.onMouseOver;

	      var radius = this.props.radius || Math.min(width - 100, height - 100) / 2;
	      var outerRadius = outerRadius || radius - 10;
	      var labelr = radius + 10;

	      var chartSeriesData = this.mkSeries();

	      var arc = _d3Shape2.default.arc().outerRadius(outerRadius).innerRadius(innerRadius);

	      var arcOver = _d3Shape2.default.arc().outerRadius(outerRadius + 10).innerRadius(innerRadius);

	      var pie = _d3Shape2.default.pie().sort(function (a, b) {
	        return pieSort(a.value, b.value);
	      }).value(function (d) {
	        return d.value;
	      });

	      return _react3.default.createElement('g', { className: 'arc' }, pie(chartSeriesData).map(function (slice, i) {
	        var textTransform = function textTransform(d) {
	          var c = arc.centroid(d),
	              x = c[0],
	              y = c[1],


	          // pythagorean theorem for hypotenuse
	          h = Math.sqrt(x * x + y * y);

	          return "translate(" + x / h * labelr + ',' + y / h * labelr + ")";
	        };

	        var textAnchor = function textAnchor(d) {
	          return (d.endAngle + d.startAngle) / 2 > Math.PI ? "end" : "start";
	        };

	        return _react3.default.createElement('g', null, _react3.default.createElement('path', {
	          key: i,
	          d: arc(slice),
	          style: _extends({ fill: slice.data.color, stroke: '#FFF' }, slice.data.style),
	          onMouseOver: onMouseOver,
	          onMouseOut: onMouseOut
	        }), _react3.default.createElement('text', {
	          transform: textTransform(slice),
	          dy: '.35em',
	          textAnchor: textAnchor(slice)
	        }, slice.data.name));
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var _props3 = this.props;
	      var width = _props3.width;
	      var height = _props3.height;
	      var margins = _props3.margins;

	      var t = 'translate(' + (width - margins.left - margins.right) / 2 + ',  ' + (height - margins.top - margins.bottom) / 2 + ')';
	      var pie = this._mkPie();

	      return _react3.default.createElement('g', { transform: t }, pie);
	    }
	  }]);

	  return Pie;
	}(_react2.Component), _class.defaultProps = _extends({
	  onMouseOver: function onMouseOver(d) {},
	  onMouseOut: function onMouseOut(d) {}
	}, _commonProps.pieProps), _temp));

	exports.default = Pie;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {"use strict";

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _index = __webpack_require__(5);

	var _index2 = _interopRequireDefault(_index);

	var _index3 = __webpack_require__(12);

	var _index4 = _interopRequireDefault(_index3);

	var _react2 = __webpack_require__(6);

	var _react3 = _interopRequireDefault(_react2);

	var _index5 = __webpack_require__(13);

	var _index6 = _interopRequireDefault(_index5);

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _class, _temp;

	var _d3Shape = __webpack_require__(89);

	var _d3Shape2 = _interopRequireDefault(_d3Shape);

	var _series = __webpack_require__(1);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { default: obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var _components = {
	  Scatter: {
	    displayName: 'Scatter'
	  }
	};

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2 = (0, _index6.default)({
	  filename: 'src/components/scatter.jsx',
	  components: _components,
	  locals: [module],
	  imports: [_react3.default]
	});

	var _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2 = (0, _index4.default)({
	  filename: 'src/components/scatter.jsx',
	  components: _components,
	  locals: [],
	  imports: [_react3.default, _index2.default]
	});

	function _wrapComponent(id) {
	  return function (Component) {
	    return _UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformHmrLibIndexJs2(_UsersLijungchiDocumentsReactD3ReactD3ShapeNode_modulesBabelPresetReactHmreNode_modulesReactTransformCatchErrorsLibIndexJs2(Component, id), id);
	  };
	}

	var Scatter = _wrapComponent('Scatter')((_temp = _class = function (_Component) {
	  _inherits(Scatter, _Component);

	  function Scatter(props) {
	    _classCallCheck(this, Scatter);

	    return _possibleConstructorReturn(this, Object.getPrototypeOf(Scatter).call(this, props));
	  }

	  _createClass(Scatter, [{
	    key: '_mkScatter',
	    value: function _mkScatter(dataset) {
	      var _props = this.props;
	      var scatterClassName = _props.scatterClassName;
	      var defaultSymbol = _props.defaultSymbol;
	      var defaultSymbolSize = _props.defaultSymbolSize;
	      var brushSymbol = _props.brushSymbol;
	      var xScaleSet = _props.xScaleSet;
	      var yScaleSet = _props.yScaleSet;

	      // for building symbols in brush, set to circle and size to 4

	      if (brushSymbol) {
	        symbol = 'circle';
	        symbolSize = 4;
	      }

	      return _react3.default.createElement('g', null, dataset.map(function (dot) {
	        var symbol = dot.symbol ? dot.symbol : defaultSymbol;
	        var symbolSize = dot.symbolSize ? dot.symbolSize : defaultSymbolSize;

	        return dot.data.map(function (d) {
	          var symbolFunc = _d3Shape2.default.symbol().size(symbolSize * symbolSize).type(function () {
	            console.log(symbol);

	            if (symbol === 'circle') {
	              return _d3Shape2.default.symbolCircle;
	            } else if (symbol === 'cross') {
	              return _d3Shape2.default.symbolCross;
	            } else if (symbol === 'diamond') {
	              return _d3Shape2.default.symbolDiamond;
	            } else if (symbol === 'square') {
	              return _d3Shape2.default.symbolSquare;
	            } else if (symbol === 'star') {
	              return _d3Shape2.default.symbolStar;
	            } else if (symbol === 'triangle') {
	              return _d3Shape2.default.symbolTriangle;
	            } else if (symbol === 'wye') {
	              return _d3Shape2.default.symbolWye;
	            } else {
	              console.error('Symbol is not support ' + symbol + '.');
	            }
	          });

	          return _react3.default.createElement('path', {
	            className: 'react-d3-basic__scatter__path',
	            fill: d.color,
	            transform: "translate(" + xScaleSet(d.x) + "," + yScaleSet(d.y) + ")",
	            d: symbolFunc(),
	            style: dot.style
	          });
	        });
	      }));
	    }
	  }, {
	    key: 'render',
	    value: function render() {
	      var d = (0, _series.series)(this.props);
	      var scatter = this._mkScatter(d);

	      return _react3.default.createElement('g', null, scatter);
	    }
	  }]);

	  return Scatter;
	}(_react2.Component), _class.defaultProps = {
	  defaultSymbol: 'circle',
	  defaultSymbolSize: 10,
	  scatterClassName: 'react-d3-basic__scatter'
	}, _temp));

	exports.default = Scatter;
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(4)(module)))

/***/ }
/******/ ]);