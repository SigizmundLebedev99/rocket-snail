/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "body{\r\n    margin: 0;\r\n}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/engine/BaseState.ts":
/*!*********************************!*\
  !*** ./src/engine/BaseState.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseState = void 0;
const Vector_1 = __webpack_require__(/*! ./primitives/Vector */ "./src/engine/primitives/Vector.ts");
const Consts_1 = __webpack_require__(/*! ./Consts */ "./src/engine/Consts.ts");
class BaseState {
    constructor() {
        this._transition = new Vector_1.Vector(0, 0);
        this._rotation = 0;
        this._scale = new Vector_1.Vector(Consts_1.SCALE, Consts_1.SCALE);
        this._base = null;
    }
    get transition() {
        if (this._base == null)
            return this._transition;
        else
            return this._transition.Add(this._base.transition);
    }
    get rotation() {
        if (this._base == null)
            return this._rotation;
        else
            return this._rotation + this._base.rotation;
    }
    get scale() {
        let obj = {
            acc: this._scale, count: 1
        };
        this.RecAvg(obj);
        return obj.acc.Product(1 / obj.count);
    }
    set transition(v) {
        this._transition = v;
    }
    set scale(v) {
        this._scale = v;
    }
    Reset() {
        this._transition = new Vector_1.Vector(0, 0);
        this._rotation = 0;
        this._scale = new Vector_1.Vector(Consts_1.SCALE, Consts_1.SCALE);
        this._base = null;
    }
    From(state) {
        this._base = state;
    }
    Copy(state) {
        this._base = state._base;
        this._rotation = state._rotation;
        this._scale = state._scale;
        this._transition = state._transition;
    }
    RecAvg(obj) {
        if (this._base == null)
            return;
        obj.acc = obj.acc.Add(this._base.scale);
        obj.count += 1;
        this._base.RecAvg(obj);
    }
    SetRotation(angle) {
        this._rotation = angle;
    }
    Rotate(angle) {
        this._rotation += angle;
    }
}
exports.BaseState = BaseState;


/***/ }),

/***/ "./src/engine/Consts.ts":
/*!******************************!*\
  !*** ./src/engine/Consts.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CONTEXT = exports.CANVAS = exports.SCALE = exports.RIGHT_BOTTOM = exports.RIGH_TOP = exports.LEFT_BOTTOM = exports.LEFT_TOP = exports.SCREEN_HEIGTH = exports.SCREEN_WIDTH = void 0;
const Point_1 = __webpack_require__(/*! ./primitives/Point */ "./src/engine/primitives/Point.ts");
///
/// Temporary solution
///
exports.SCREEN_WIDTH = document.body.clientWidth;
exports.SCREEN_HEIGTH = screen.availHeight;
exports.LEFT_TOP = new Point_1.Point(0, 0);
exports.LEFT_BOTTOM = new Point_1.Point(0, exports.SCREEN_HEIGTH);
exports.RIGH_TOP = new Point_1.Point(exports.SCREEN_WIDTH, 0);
exports.RIGHT_BOTTOM = new Point_1.Point(exports.SCREEN_WIDTH, exports.SCREEN_HEIGTH);
// count of cells in scren width;
exports.SCALE = 45;
let canvas = document.getElementById('canvas');
canvas.width = exports.SCREEN_WIDTH;
canvas.height = exports.SCREEN_HEIGTH;
exports.CANVAS = canvas;
exports.CONTEXT = canvas.getContext('2d');


/***/ }),

/***/ "./src/engine/general-components/DrawLineCom.ts":
/*!******************************************************!*\
  !*** ./src/engine/general-components/DrawLineCom.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawLineCom = void 0;
const Component_1 = __webpack_require__(/*! ../map/Component */ "./src/engine/map/Component.ts");
const Straight_Line_1 = __webpack_require__(/*! ../primitives/Straight-Line */ "./src/engine/primitives/Straight-Line.ts");
const Consts_1 = __webpack_require__(/*! ../Consts */ "./src/engine/Consts.ts");
class DrawLineCom extends Component_1.Component {
    constructor(node, map) {
        super();
        this.node = node;
        this.map = map;
    }
    OnUpdate() {
        let camera = this.node.Camera;
        let line = this.map(this.node);
        let screenLineP = camera.Convert(line.Point);
        let screenLineV = line.DirectionVector.GetRotatedUnit(camera.rotation);
        let screenLine = Straight_Line_1.StraightLine.FromPointAndVector(screenLineP, screenLineV);
        let hpg = (p) => screenLine.HalfPlane(p) == 1;
        let hpl = (p) => screenLine.HalfPlane(p) == -1;
        if ((hpg(Consts_1.LEFT_TOP) && hpg(Consts_1.LEFT_BOTTOM) && hpg(Consts_1.RIGH_TOP) && hpg(Consts_1.RIGHT_BOTTOM))
            || (hpl(Consts_1.LEFT_TOP) && hpl(Consts_1.LEFT_BOTTOM) && hpl(Consts_1.RIGH_TOP) && hpl(Consts_1.RIGHT_BOTTOM)))
            return;
        Consts_1.CONTEXT.beginPath();
        if (screenLine.DirectionVector.x == 0) {
            Consts_1.CONTEXT.moveTo(Math.abs(screenLine.C), 0);
            Consts_1.CONTEXT.lineTo(Math.abs(screenLine.C), Consts_1.SCREEN_HEIGTH);
            Consts_1.CONTEXT.stroke();
        }
        if (screenLine.DirectionVector.y == 0) {
            Consts_1.CONTEXT.moveTo(0, Math.abs(screenLine.C));
            Consts_1.CONTEXT.lineTo(Consts_1.SCREEN_WIDTH, Math.abs(screenLine.C));
            Consts_1.CONTEXT.stroke();
        }
        let startX = 0, startY = screenLine.DefineY(startX);
        let endX = Consts_1.SCREEN_WIDTH, endY = screenLine.DefineY(endX);
        Consts_1.CONTEXT.moveTo(startX, startY);
        Consts_1.CONTEXT.lineTo(endX, endY);
        Consts_1.CONTEXT.stroke();
    }
}
exports.DrawLineCom = DrawLineCom;


/***/ }),

/***/ "./src/engine/general-components/DrawPointCom.ts":
/*!*******************************************************!*\
  !*** ./src/engine/general-components/DrawPointCom.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawPointCom = void 0;
const Component_1 = __webpack_require__(/*! ../map/Component */ "./src/engine/map/Component.ts");
const Point_1 = __webpack_require__(/*! ../primitives/Point */ "./src/engine/primitives/Point.ts");
const Consts_1 = __webpack_require__(/*! ../Consts */ "./src/engine/Consts.ts");
class DrawPointCom extends Component_1.Component {
    constructor(node, map) {
        super();
        this.node = node;
        this.map = map;
    }
    OnUpdate() {
        let camera = this.node.Camera;
        let pointLike = this.map(this.node);
        let style = this.node.Style;
        let p = Point_1.Point.From(pointLike);
        p = camera.Convert(p);
        let radius = style.pointRadius;
        Consts_1.CONTEXT.save();
        Consts_1.CONTEXT.strokeStyle = style.strokeStyle;
        Consts_1.CONTEXT.fillStyle = style.pointColor;
        Consts_1.CONTEXT.beginPath();
        Consts_1.CONTEXT.arc(p.x, p.y, radius, 0, 2 * Math.PI, true);
        Consts_1.CONTEXT.stroke();
        Consts_1.CONTEXT.fill();
        Consts_1.CONTEXT.restore();
    }
}
exports.DrawPointCom = DrawPointCom;


/***/ }),

/***/ "./src/engine/general-nodes/grid/Grid.ts":
/*!***********************************************!*\
  !*** ./src/engine/general-nodes/grid/Grid.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
const Node_1 = __webpack_require__(/*! ../../map/Node */ "./src/engine/map/Node.ts");
const Point_1 = __webpack_require__(/*! ../../primitives/Point */ "./src/engine/primitives/Point.ts");
const Straight_Line_1 = __webpack_require__(/*! ../../primitives/Straight-Line */ "./src/engine/primitives/Straight-Line.ts");
const DrawLineCom_1 = __webpack_require__(/*! ../../general-components/DrawLineCom */ "./src/engine/general-components/DrawLineCom.ts");
const Consts_1 = __webpack_require__(/*! ../../Consts */ "./src/engine/Consts.ts");
const Vector_1 = __webpack_require__(/*! ../../primitives/Vector */ "./src/engine/primitives/Vector.ts");
const XAxis_1 = __webpack_require__(/*! ./XAxis */ "./src/engine/general-nodes/grid/XAxis.ts");
const YAxis_1 = __webpack_require__(/*! ./YAxis */ "./src/engine/general-nodes/grid/YAxis.ts");
class Grid extends Node_1.Node {
    constructor() {
        super();
        this.AddChild(new XAxis_1.XAxis());
        this.AddChild(new YAxis_1.YAxis());
        this.scale = new Vector_1.Vector(45, 45);
        for (let i = 1; i < Consts_1.SCREEN_WIDTH / this.scale.x; i++) {
            this.AddComponent(new DrawLineCom_1.DrawLineCom(this, o => new Straight_Line_1.StraightLine(new Point_1.Point(i, 0), new Point_1.Point(i, 1))));
            this.AddComponent(new DrawLineCom_1.DrawLineCom(this, o => new Straight_Line_1.StraightLine(new Point_1.Point(-i, 0), new Point_1.Point(-i, 1))));
            this.AddComponent(new DrawLineCom_1.DrawLineCom(this, o => new Straight_Line_1.StraightLine(new Point_1.Point(0, i), new Point_1.Point(1, i))));
            this.AddComponent(new DrawLineCom_1.DrawLineCom(this, o => new Straight_Line_1.StraightLine(new Point_1.Point(0, -i), new Point_1.Point(1, -i))));
            //this.AddComponent(new DrawPointCom(this, o => new Point(i,i)));
            //this.AddComponent(new DrawPointCom(this, o => new Point(-i,i)));
            //this.AddComponent(new DrawPointCom(this, o => new Point(i,-i)));
            //this.AddComponent(new DrawPointCom(this, o => new Point(-i,-i)));
        }
    }
}
exports.Grid = Grid;


/***/ }),

/***/ "./src/engine/general-nodes/grid/XAxis.ts":
/*!************************************************!*\
  !*** ./src/engine/general-nodes/grid/XAxis.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.XAxis = void 0;
const Node_1 = __webpack_require__(/*! ../../map/Node */ "./src/engine/map/Node.ts");
const DrawLineCom_1 = __webpack_require__(/*! ../../general-components/DrawLineCom */ "./src/engine/general-components/DrawLineCom.ts");
const Straight_Line_1 = __webpack_require__(/*! ../../primitives/Straight-Line */ "./src/engine/primitives/Straight-Line.ts");
const Point_1 = __webpack_require__(/*! ../../primitives/Point */ "./src/engine/primitives/Point.ts");
class XAxis extends Node_1.Node {
    constructor() {
        super();
        this.Style.strokeStyle = "red";
        this.AddComponent(new DrawLineCom_1.DrawLineCom(this, o => new Straight_Line_1.StraightLine(new Point_1.Point(0, 0), new Point_1.Point(1, 0))));
    }
}
exports.XAxis = XAxis;


/***/ }),

/***/ "./src/engine/general-nodes/grid/YAxis.ts":
/*!************************************************!*\
  !*** ./src/engine/general-nodes/grid/YAxis.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.YAxis = void 0;
const Node_1 = __webpack_require__(/*! ../../map/Node */ "./src/engine/map/Node.ts");
const DrawLineCom_1 = __webpack_require__(/*! ../../general-components/DrawLineCom */ "./src/engine/general-components/DrawLineCom.ts");
const Straight_Line_1 = __webpack_require__(/*! ../../primitives/Straight-Line */ "./src/engine/primitives/Straight-Line.ts");
const Point_1 = __webpack_require__(/*! ../../primitives/Point */ "./src/engine/primitives/Point.ts");
class YAxis extends Node_1.Node {
    constructor() {
        super();
        this.Style.strokeStyle = "blue";
        this.AddComponent(new DrawLineCom_1.DrawLineCom(this, o => new Straight_Line_1.StraightLine(new Point_1.Point(0, 0), new Point_1.Point(0, 1))));
    }
}
exports.YAxis = YAxis;


/***/ }),

/***/ "./src/engine/map/Camera.ts":
/*!**********************************!*\
  !*** ./src/engine/map/Camera.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
const Vector_1 = __webpack_require__(/*! ../primitives/Vector */ "./src/engine/primitives/Vector.ts");
const Point_1 = __webpack_require__(/*! ../primitives/Point */ "./src/engine/primitives/Point.ts");
const Consts_1 = __webpack_require__(/*! ../Consts */ "./src/engine/Consts.ts");
const BaseState_1 = __webpack_require__(/*! ../BaseState */ "./src/engine/BaseState.ts");
class Camera extends BaseState_1.BaseState {
    constructor() {
        super();
    }
    static FromState(state) {
        let camera = new Camera();
        camera.Copy(state);
        return camera;
    }
    MoveBy(vector) {
        this.transition = this.transition.Add(vector);
    }
    Reset() {
        this.transition = new Vector_1.Vector(0, 0);
        this.SetRotation(0);
        this.scale = new Vector_1.Vector(45, 45);
    }
    ConvertToCamera(screen) {
        let movedPoint = new Point_1.Point(screen.x - Consts_1.SCREEN_WIDTH / 2, -(screen.y - Consts_1.SCREEN_HEIGTH / 2));
        movedPoint = movedPoint.GetMoved(this.transition.Product(-1));
        let inMeters = new Vector_1.Vector(movedPoint.x / this.scale.x, movedPoint.y / this.scale.y);
        if (this.rotation != 0) {
            inMeters = inMeters.Rotate(this.rotation);
        }
        return Point_1.Point.From(inMeters);
    }
    Convert(point) {
        let p = Vector_1.Vector.FromPoint(point);
        if (this._base != null) {
            p = p.Add(this._transition);
            p = p.Rotate(-this._rotation);
            p = p.Add(this._base.transition);
            p = p.Rotate(-this._base.rotation);
        }
        else if (this.rotation != 0 && p.Length != 0) {
            p = p.Rotate(-this.rotation);
            p = p.Add(this.transition);
        }
        else {
            p = p.Add(this.transition);
        }
        let scaled = new Vector_1.Vector(p.x * this.scale.x, p.y * this.scale.y);
        return new Point_1.Point(scaled.x + Consts_1.SCREEN_WIDTH / 2, -(scaled.y - Consts_1.SCREEN_HEIGTH / 2));
    }
}
exports.Camera = Camera;


/***/ }),

/***/ "./src/engine/map/Component.ts":
/*!*************************************!*\
  !*** ./src/engine/map/Component.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
class Component {
    OnStart() { }
}
exports.Component = Component;


/***/ }),

/***/ "./src/engine/map/Node.ts":
/*!********************************!*\
  !*** ./src/engine/map/Node.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
const NodeStyle_1 = __webpack_require__(/*! ./NodeStyle */ "./src/engine/map/NodeStyle.ts");
const Camera_1 = __webpack_require__(/*! ./Camera */ "./src/engine/map/Camera.ts");
const BaseState_1 = __webpack_require__(/*! ../BaseState */ "./src/engine/BaseState.ts");
const View_1 = __webpack_require__(/*! ./View */ "./src/engine/map/View.ts");
class Node extends BaseState_1.BaseState {
    constructor() {
        super(...arguments);
        this.isMouseIn = false;
        this.Components = [];
        this.Style = new NodeStyle_1.NodeStyle();
        this.DependentNodes = [];
    }
    get Camera() {
        return Camera_1.Camera.FromState(this);
    }
    AddChild(element) {
        element.From(this);
        this.DependentNodes.push(element);
        View_1.View.Instanse.AddChild(element);
        return element;
    }
    AddComponent(component) {
        component.OnStart();
        this.Components.push(component);
    }
    OnUpdate() {
        this.Components.forEach(c => c.OnUpdate());
    }
}
exports.Node = Node;


/***/ }),

/***/ "./src/engine/map/NodeStyle.ts":
/*!*************************************!*\
  !*** ./src/engine/map/NodeStyle.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeStyle = void 0;
class NodeStyle {
    constructor() {
        this.strokeStyle = 'black';
        this.fillStyle = 'black';
        this.position = "relative";
        this.pointRadius = 5;
        this.pointColor = "red";
    }
}
exports.NodeStyle = NodeStyle;


/***/ }),

/***/ "./src/engine/map/View.ts":
/*!********************************!*\
  !*** ./src/engine/map/View.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.View = void 0;
const Consts_1 = __webpack_require__(/*! ../Consts */ "./src/engine/Consts.ts");
class View {
    constructor() {
        this.DependentNodes = [];
    }
    static get Instanse() {
        return this._singleton;
    }
    AddChild(element) {
        this.DependentNodes.push(element);
        return element;
    }
    Clear() {
        Consts_1.CONTEXT.clearRect(0, 0, Consts_1.SCREEN_WIDTH, Consts_1.SCREEN_HEIGTH);
    }
    Run() {
        setInterval(() => {
            this.Clear();
            this.DependentNodes.forEach(n => n.OnUpdate());
        }, 5);
    }
}
exports.View = View;


/***/ }),

/***/ "./src/engine/primitives/Point.ts":
/*!****************************************!*\
  !*** ./src/engine/primitives/Point.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    IsEqual(anower) {
        return this.x == anower.x && this.y == anower.y;
    }
    GetMoved(vector) {
        let x = this.x + vector.x;
        let y = this.y + vector.y;
        return new Point(x, y);
    }
    static From(pointLikeobj) {
        return new Point(pointLikeobj.x, pointLikeobj.y);
    }
}
exports.Point = Point;


/***/ }),

/***/ "./src/engine/primitives/Straight-Line.ts":
/*!************************************************!*\
  !*** ./src/engine/primitives/Straight-Line.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StraightLine = void 0;
const Point_1 = __webpack_require__(/*! ./Point */ "./src/engine/primitives/Point.ts");
const Vector_1 = __webpack_require__(/*! ./Vector */ "./src/engine/primitives/Vector.ts");
class StraightLine {
    constructor(p1, p2) {
        let A = p1.y - p2.y, B = p2.x - p1.x, C = -A * p1.x - B * p1.y;
        this._A = A;
        this._B = B;
        this._C = C;
        this._p = Vector_1.Vector.FromPoint(p1).Length == 0 ? p2 : p1;
    }
    get NormalVector() {
        return new Vector_1.Vector(this._A, this._B);
    }
    get DirectionVector() {
        return new Vector_1.Vector(-this._B, this._A);
    }
    get Point() {
        return this._p;
    }
    get A() {
        return this._A;
    }
    get B() {
        return this._B;
    }
    get C() {
        return this._C;
    }
    IsBelongs(p) {
        return this._A * p.x + this._B * p.y + this._C == 0;
    }
    Intersection(anower) {
        let A1 = this._A, A2 = anower._A, B1 = this._B, B2 = anower._B, C1 = -this._C, C2 = -anower._C;
        let d = A1 * B2 - A2 * B1;
        if (d == 0)
            return null;
        else {
            let detX = C1 * B2 - C2 * B1;
            let detY = A1 * C2 - A2 * C1;
            return new Point_1.Point(detX / d, detY / d);
        }
    }
    HalfPlane(p) {
        let result = this._A * p.x + this._B * p.y + this._C;
        if (result > 0)
            return 1;
        if (result < 0)
            return -1;
        return 0;
    }
    DefineY(x) {
        //Ax + By + C = 0
        return ((-this._A * x) - this._C) / this._B;
    }
    static FromPointAndVector(p, v) {
        return new StraightLine(p, p.GetMoved(v));
    }
}
exports.StraightLine = StraightLine;


/***/ }),

/***/ "./src/engine/primitives/Vector.ts":
/*!*****************************************!*\
  !*** ./src/engine/primitives/Vector.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector = void 0;
class Vector {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    get Length() {
        let length = Math.sqrt(this.x * this.x + this.y * this.y);
        return length;
    }
    get Angle() {
        return Math.acos(this.x / this.Length);
    }
    Add(anower) {
        return new Vector(this.x + anower.x, this.y + anower.y);
    }
    Subtract(anower) {
        return new Vector(this.x - anower.x, this.y - anower.y);
    }
    Product(num) {
        return new Vector(this.x * num, this.y * num);
    }
    Scalar(anower) {
        return this.x * anower.x + this.y * anower.y;
    }
    Pseudo(anower) {
        return this.x * anower.y - this.y * anower.x;
    }
    Unit() {
        let length = this.Length;
        return new Vector(this.x / length, this.y / this.Length);
    }
    GetRotatedUnit(angle) {
        angle -= this.Angle;
        return new Vector(Math.cos(angle), Math.sin(angle));
    }
    Rotate(angle) {
        if (this.x == 0 && this.y == 0)
            return this;
        angle -= this.Angle;
        let unit;
        if (this.y < 0)
            unit = new Vector(Math.cos(angle), Math.sin(angle));
        else
            unit = new Vector(-Math.cos(angle), -Math.sin(angle));
        return unit.Product(this.Length);
    }
    static FromPoints(begin, end) {
        return new Vector(end.x - begin.x, end.y - begin.y);
    }
    static FromPoint(end) {
        return new Vector(end.x, end.y);
    }
}
exports.Vector = Vector;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
const Main_1 = __webpack_require__(/*! ./logic/Main */ "./src/logic/Main.ts");
Main_1.Main();


/***/ }),

/***/ "./src/logic/Main.ts":
/*!***************************!*\
  !*** ./src/logic/Main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Grid_1 = __webpack_require__(/*! ../engine/general-nodes/grid/Grid */ "./src/engine/general-nodes/grid/Grid.ts");
const View_1 = __webpack_require__(/*! ../engine/map/View */ "./src/engine/map/View.ts");
const Planet_1 = __webpack_require__(/*! ./nodes/Planet */ "./src/logic/nodes/Planet.ts");
const Vector_1 = __webpack_require__(/*! ../engine/primitives/Vector */ "./src/engine/primitives/Vector.ts");
const RotateCom_1 = __webpack_require__(/*! ./components/RotateCom */ "./src/logic/components/RotateCom.ts");
function Main() {
    let view = new View_1.View();
    let grid = new Grid_1.Grid();
    grid.AddComponent(new RotateCom_1.RotateCom(grid, 0.001));
    //grid.AddComponent(new TransitionCom(grid, 0.001));
    let planet = new Planet_1.Planet();
    planet.transition = new Vector_1.Vector(5, 0);
    grid.AddChild(planet);
    view.AddChild(grid);
    view.Run();
}
exports.Main = Main;


/***/ }),

/***/ "./src/logic/components/RotateCom.ts":
/*!*******************************************!*\
  !*** ./src/logic/components/RotateCom.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RotateCom = void 0;
const Component_1 = __webpack_require__(/*! ../../engine/map/Component */ "./src/engine/map/Component.ts");
class RotateCom extends Component_1.Component {
    constructor(node, num) {
        super();
        this.node = node;
        this.num = num;
    }
    OnUpdate() {
        this.node.Rotate(this.num);
    }
}
exports.RotateCom = RotateCom;


/***/ }),

/***/ "./src/logic/nodes/Planet.ts":
/*!***********************************!*\
  !*** ./src/logic/nodes/Planet.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Planet = void 0;
const Node_1 = __webpack_require__(/*! ../../engine/map/Node */ "./src/engine/map/Node.ts");
const DrawPointCom_1 = __webpack_require__(/*! ../../engine/general-components/DrawPointCom */ "./src/engine/general-components/DrawPointCom.ts");
const Point_1 = __webpack_require__(/*! ../../engine/primitives/Point */ "./src/engine/primitives/Point.ts");
const Satellite_1 = __webpack_require__(/*! ./Satellite */ "./src/logic/nodes/Satellite.ts");
class Planet extends Node_1.Node {
    constructor() {
        super();
        this.Style.pointColor = 'red';
        this.Style.pointRadius = 60;
        this.AddComponent(new DrawPointCom_1.DrawPointCom(this, o => new Point_1.Point(0, 0)));
        this.child = new Satellite_1.Satellite();
        this.AddChild(this.child);
    }
}
exports.Planet = Planet;


/***/ }),

/***/ "./src/logic/nodes/Satellite.ts":
/*!**************************************!*\
  !*** ./src/logic/nodes/Satellite.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Satellite = void 0;
const Node_1 = __webpack_require__(/*! ../../engine/map/Node */ "./src/engine/map/Node.ts");
const DrawPointCom_1 = __webpack_require__(/*! ../../engine/general-components/DrawPointCom */ "./src/engine/general-components/DrawPointCom.ts");
const Point_1 = __webpack_require__(/*! ../../engine/primitives/Point */ "./src/engine/primitives/Point.ts");
const RotateCom_1 = __webpack_require__(/*! ../components/RotateCom */ "./src/logic/components/RotateCom.ts");
class Satellite extends Node_1.Node {
    constructor() {
        super();
        this.Style.pointColor = 'blue';
        this.Style.pointRadius = 50;
        this.AddComponent(new DrawPointCom_1.DrawPointCom(this, o => new Point_1.Point(0, 3)));
        this.AddComponent(new RotateCom_1.RotateCom(this, 0.005));
    }
}
exports.Satellite = Satellite;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map