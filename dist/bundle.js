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
class BaseState {
    constructor() {
        this.transition = new Vector_1.Vector(0, 0);
        this.rotation = 0;
        this.scale = new Vector_1.Vector(1, 1);
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
exports.CONTEXT = exports.RIGHT_BOTTOM = exports.RIGH_TOP = exports.LEFT_BOTTOM = exports.LEFT_TOP = exports.SCREEN_HEIGTH = exports.SCREEN_WIDTH = void 0;
const Point_1 = __webpack_require__(/*! ./primitives/Point */ "./src/engine/primitives/Point.ts");
exports.SCREEN_WIDTH = document.body.clientWidth;
exports.SCREEN_HEIGTH = window.screen.availHeight - 30;
exports.LEFT_TOP = new Point_1.Point(0, 0);
exports.LEFT_BOTTOM = new Point_1.Point(0, exports.SCREEN_HEIGTH);
exports.RIGH_TOP = new Point_1.Point(exports.SCREEN_WIDTH, 0);
exports.RIGHT_BOTTOM = new Point_1.Point(exports.SCREEN_WIDTH, exports.SCREEN_HEIGTH);
let canvas = document.getElementById('canvas');
canvas.width = exports.SCREEN_WIDTH;
canvas.height = exports.SCREEN_HEIGTH;
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
        let line;
        if ((line = this.map(this.node)) == null || camera == null)
            return;
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
        let pointLike;
        if (camera == null || (pointLike = this.map(this.node)) == null)
            return;
        let style = this.node.Style;
        let p = Point_1.Point.From(pointLike);
        p = camera.Convert(p);
        let radius = style.position == "relative" ? style.pointRadius * camera.RelationX : style.pointRadius;
        Consts_1.CONTEXT.beginPath();
        Consts_1.CONTEXT.arc(p.x, p.y, radius, 0, 2 * Math.PI, true);
        Consts_1.CONTEXT.stroke();
    }
}
exports.DrawPointCom = DrawPointCom;


/***/ }),

/***/ "./src/engine/general-nodes/Grid.ts":
/*!******************************************!*\
  !*** ./src/engine/general-nodes/Grid.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
const Node_1 = __webpack_require__(/*! ../map/Node */ "./src/engine/map/Node.ts");
const Point_1 = __webpack_require__(/*! ../primitives/Point */ "./src/engine/primitives/Point.ts");
const Straight_Line_1 = __webpack_require__(/*! ../primitives/Straight-Line */ "./src/engine/primitives/Straight-Line.ts");
const DrawLineCom_1 = __webpack_require__(/*! ../general-components/DrawLineCom */ "./src/engine/general-components/DrawLineCom.ts");
const DrawPointCom_1 = __webpack_require__(/*! ../general-components/DrawPointCom */ "./src/engine/general-components/DrawPointCom.ts");
class Grid extends Node_1.Node {
    constructor(camera) {
        super();
        let ox = new Straight_Line_1.StraightLine(new Point_1.Point(0, 0), new Point_1.Point(1, 0));
        let oy = new Straight_Line_1.StraightLine(new Point_1.Point(0, 0), new Point_1.Point(0, 1));
        this.AddComponent(new DrawLineCom_1.DrawLineCom(this, o => ox));
        this.AddComponent(new DrawLineCom_1.DrawLineCom(this, o => oy));
        for (var i = 1; i < camera.scale.x; i++) {
            this.AddComponent(new DrawPointCom_1.DrawPointCom(this, o => new Point_1.Point(i, i)));
            this.AddComponent(new DrawPointCom_1.DrawPointCom(this, o => new Point_1.Point(-i, i)));
            this.AddComponent(new DrawPointCom_1.DrawPointCom(this, o => new Point_1.Point(i, -i)));
            this.AddComponent(new DrawPointCom_1.DrawPointCom(this, o => new Point_1.Point(-i, -i)));
            this.AddComponent(new DrawLineCom_1.DrawLineCom(this, o => new Straight_Line_1.StraightLine(new Point_1.Point(i, 0), new Point_1.Point(i, 1))));
            this.AddComponent(new DrawLineCom_1.DrawLineCom(this, o => new Straight_Line_1.StraightLine(new Point_1.Point(-i, 0), new Point_1.Point(-i, 1))));
            this.AddComponent(new DrawLineCom_1.DrawLineCom(this, o => new Straight_Line_1.StraightLine(new Point_1.Point(0, i), new Point_1.Point(1, i))));
            this.AddComponent(new DrawLineCom_1.DrawLineCom(this, o => new Straight_Line_1.StraightLine(new Point_1.Point(0, -i), new Point_1.Point(1, -i))));
        }
    }
}
exports.Grid = Grid;


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
        this.RelationX = 100;
        this.RelationY = 100;
    }
    static FromState(state) {
        let camera = new Camera();
        camera.transition = state.transition;
        camera.rotation = state.rotation;
        camera.scale = state.scale;
        return camera;
    }
    get RelationX() {
        return Consts_1.SCREEN_WIDTH / this.scale.x;
    }
    get RelationY() {
        return Consts_1.SCREEN_HEIGTH / this.scale.y;
    }
    set RelationX(v) {
        this.scale = new Vector_1.Vector(Consts_1.SCREEN_WIDTH / v, this.scale.y);
    }
    set RelationY(v) {
        this.scale = new Vector_1.Vector(this.scale.x, Consts_1.SCREEN_HEIGTH / v);
    }
    MoveBy(vector) {
        this.transition = this.transition.Add(vector);
    }
    Reset() {
        this.transition = new Vector_1.Vector(0, 0);
        this.rotation = 0;
        this.scale = new Vector_1.Vector(100, 100);
        this.RelationY = this.RelationX;
    }
    ConvertToCamera(screen) {
        let movedPoint = new Point_1.Point(screen.x - Consts_1.SCREEN_WIDTH / 2, -(screen.y - Consts_1.SCREEN_HEIGTH / 2));
        movedPoint = movedPoint.GetMoved(this.transition.Product(-1));
        let inMeters = new Vector_1.Vector(movedPoint.x / this.RelationX, movedPoint.y / this.RelationY);
        if (this.rotation != 0) {
            inMeters = inMeters.Rotate(this.rotation);
        }
        return Point_1.Point.From(inMeters);
    }
    Convert(point) {
        let scaled = new Vector_1.Vector(point.x * this.RelationX, point.y * this.RelationY);
        if (this.rotation != 0 && scaled.Length != 0) {
            scaled = scaled.Rotate(-this.rotation);
        }
        let moved = scaled.Add(this.transition);
        return new Point_1.Point(moved.x + Consts_1.SCREEN_WIDTH / 2, -(moved.y - Consts_1.SCREEN_HEIGTH / 2));
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
    OnStart() {
    }
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
class Node extends BaseState_1.BaseState {
    constructor() {
        super(...arguments);
        this.isMouseIn = false;
        this.Components = [];
        this.Style = new NodeStyle_1.NodeStyle();
        this.DependentNodes = [];
        this.Content = null;
        this.camera = null;
    }
    get Camera() {
        return this.camera;
    }
    AddChild(element) {
        element.camera = Camera_1.Camera.FromState(this);
        this.DependentNodes.push(element);
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
const Camera_1 = __webpack_require__(/*! ./Camera */ "./src/engine/map/Camera.ts");
class View {
    constructor() {
        this.Nodes = [];
        this.MainCamera = new Camera_1.Camera();
        this.MainCamera.RelationX = 45;
        this.MainCamera.RelationY = 45;
    }
    Run() {
        setInterval(() => {
            this.Nodes.forEach(n => n.OnUpdate());
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

/***/ "./src/engine/primitives/Section.ts":
/*!******************************************!*\
  !*** ./src/engine/primitives/Section.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Section = void 0;
const Straight_Line_1 = __webpack_require__(/*! ./Straight-Line */ "./src/engine/primitives/Straight-Line.ts");
const math_1 = __webpack_require__(/*! ../../helpers/math */ "./src/helpers/math.ts");
class Section {
    constructor(p1, p2) {
        this._p1 = p1;
        this._p2 = p2;
    }
    get Point1() {
        return this._p1;
    }
    get Point2() {
        return this._p2;
    }
    get Length() {
        return Math.sqrt((this._p2.x - this._p1.x) ^ 2 + (this._p2.y - this._p1.y));
    }
    Intersection(anower) {
        let a = this._p1, b = this._p2, c = anower._p1, d = anower._p2;
        let line1 = new Straight_Line_1.StraightLine(a, b);
        let line2 = new Straight_Line_1.StraightLine(c, d);
        let point = line1.Intersection(line2);
        if (point == null)
            return null;
        let isBelong = math_1.Fns.Between(a.x, b.x, point.x) && math_1.Fns.Between(a.y, b.y, point.y)
            && math_1.Fns.Between(c.x, d.x, point.x) && math_1.Fns.Between(c.y, d.y, point.y);
        if (isBelong)
            return point;
        else
            return null;
    }
}
exports.Section = Section;


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

/***/ "./src/engine/view/Artist.ts":
/*!***********************************!*\
  !*** ./src/engine/view/Artist.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Artist = void 0;
const Straight_Line_1 = __webpack_require__(/*! ../primitives/Straight-Line */ "./src/engine/primitives/Straight-Line.ts");
const Consts_1 = __webpack_require__(/*! ../Consts */ "./src/engine/Consts.ts");
class Artist {
    constructor(context, camera) {
        this.camera = camera;
        this.context = context;
    }
    Clear() {
        this.context.clearRect(0, 0, Consts_1.SCREEN_WIDTH, Consts_1.SCREEN_HEIGTH);
    }
    DrawPoint(point) {
        let p = this.camera.Convert(point);
        this.context.beginPath();
        this.context.arc(p.x, p.y, 5, 0, 2 * Math.PI, true);
        this.context.stroke();
    }
    DrawLine(line) {
        let screenLineP = this.camera.Convert(line.Point);
        let screenLineV = line.DirectionVector.GetRotatedUnit(this.camera.rotation);
        let screenLine = Straight_Line_1.StraightLine.FromPointAndVector(screenLineP, screenLineV);
        let hpg = (p) => screenLine.HalfPlane(p) == 1;
        let hpl = (p) => screenLine.HalfPlane(p) == -1;
        if ((hpg(Consts_1.LEFT_TOP) && hpg(Consts_1.LEFT_BOTTOM) && hpg(Consts_1.RIGH_TOP) && hpg(Consts_1.RIGHT_BOTTOM))
            || (hpl(Consts_1.LEFT_TOP) && hpl(Consts_1.LEFT_BOTTOM) && hpl(Consts_1.RIGH_TOP) && hpl(Consts_1.RIGHT_BOTTOM)))
            return;
        this.context.beginPath();
        if (screenLine.DirectionVector.x == 0) {
            this.context.moveTo(Math.abs(screenLine.C), 0);
            this.context.lineTo(Math.abs(screenLine.C), Consts_1.SCREEN_HEIGTH);
            this.context.stroke();
            return screenLine;
        }
        if (screenLine.DirectionVector.y == 0) {
            this.context.moveTo(0, Math.abs(screenLine.C));
            this.context.lineTo(Consts_1.SCREEN_WIDTH, Math.abs(screenLine.C));
            this.context.stroke();
            return screenLine;
        }
        let startX = 0, startY = screenLine.DefineY(startX);
        let endX = Consts_1.SCREEN_WIDTH, endY = screenLine.DefineY(endX);
        this.context.moveTo(startX, startY);
        this.context.lineTo(endX, endY);
        this.context.stroke();
        return screenLine;
    }
    DrawSection(section) {
        let p1 = this.camera.Convert(section.Point1);
        let p2 = this.camera.Convert(section.Point2);
        this.context.beginPath();
        this.context.moveTo(p1.x, p1.y);
        this.context.lineTo(p2.x, p2.y);
        this.context.stroke();
    }
    DrawLabel(str) {
        let p = str.absolute ? str.position : this.camera.Convert(str.position);
        this.context.strokeText(str.text, p.x, p.y);
    }
}
exports.Artist = Artist;


/***/ }),

/***/ "./src/helpers/math.ts":
/*!*****************************!*\
  !*** ./src/helpers/math.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Fns = exports.Matrix = void 0;
class Matrix {
    constructor(matrix) {
        if (matrix.length <= 1 && matrix[0].length <= 1)
            throw "Matrix must contain 2 or more elements in rows and columns";
        this._matrix = matrix;
        this._M = matrix.length; // rows
        this._N = matrix[0].length; // columns
    }
    get IsSquare() {
        return this._M == this._N;
    }
    get AsArray() {
        return this._matrix;
    }
    WithoutColumn(columnIndex) {
        let newMatrix = this._matrix.map(row => row.filter((_, i) => i != columnIndex));
        return new Matrix(newMatrix);
    }
    WithoutRow(rowIndex) {
        let newMatrix = this._matrix.filter((_, i) => i != rowIndex);
        return new Matrix(newMatrix);
    }
    Determinant() {
        if (this._cashedDeterminant)
            return this._cashedDeterminant;
        if (!this.IsSquare)
            throw "Matrix must be square to find determinant";
        let m = this._matrix;
        if (this._M == 2)
            return m[0][0] * m[1][1] - m[1][0] * m[0][1];
        else {
            let determinant = 0;
            this._matrix[0].forEach((val, i) => {
                let lowerDeterminant = this.WithoutRow(0).WithoutColumn(i).Determinant();
                let result = lowerDeterminant * val * (i % 2 == 0 ? 1 : -1);
                determinant += result;
            });
            this._cashedDeterminant = determinant;
            return determinant;
        }
    }
}
exports.Matrix = Matrix;
class Fns {
    static Between(a, b, c) {
        return Math.min(a, b) <= c + this.EPSILON && c <= Math.max(a, b) + this.EPSILON;
    }
    static Determinant(a, b, c, d) {
        return a * b - c * d;
    }
}
exports.Fns = Fns;
Fns.EPSILON = 1E-9;


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const Straight_Line_1 = __webpack_require__(/*! ./engine/primitives/Straight-Line */ "./src/engine/primitives/Straight-Line.ts");
const Point_1 = __webpack_require__(/*! ./engine/primitives/Point */ "./src/engine/primitives/Point.ts");
const Camera_1 = __webpack_require__(/*! ./engine/map/Camera */ "./src/engine/map/Camera.ts");
__webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
const Artist_1 = __webpack_require__(/*! ./engine/view/Artist */ "./src/engine/view/Artist.ts");
const Consts_1 = __webpack_require__(/*! ./engine/Consts */ "./src/engine/Consts.ts");
const Vector_1 = __webpack_require__(/*! ./engine/primitives/Vector */ "./src/engine/primitives/Vector.ts");
const Section_1 = __webpack_require__(/*! ./engine/primitives/Section */ "./src/engine/primitives/Section.ts");
const Main_1 = __webpack_require__(/*! ./logic/Main */ "./src/logic/Main.ts");
Main_1.Main();
function Demo() {
    let canvas = document.getElementById('canvas');
    let camera = new Camera_1.Camera();
    camera.RelationX = 45;
    camera.RelationY = 45;
    canvas.addEventListener('click', (event) => {
        let p1 = camera.ConvertToCamera(new Point_1.Point(event.x, event.y));
        let p2 = camera.Convert(p1);
        console.log(`mouse : x:${event.x} y:${event.y}, camera: x:${p1.x} y:${p1.y}, back: x:${p2.x} y:${p2.y}`);
    });
    canvas.width = Consts_1.SCREEN_WIDTH;
    canvas.height = Consts_1.SCREEN_HEIGTH;
    let context = canvas.getContext('2d');
    let artist = new Artist_1.Artist(context, camera);
    let transition = 0;
    setInterval(() => {
        transition += 0.01;
        camera.transition = new Vector_1.Vector(100 * Math.sin(transition), -100 * Math.cos(transition));
        camera.rotation += 0.001;
        artist.Clear();
        context.strokeStyle = "red";
        artist.DrawLine(new Straight_Line_1.StraightLine(new Point_1.Point(0, 0), new Point_1.Point(1, 0)));
        artist.DrawLine(new Straight_Line_1.StraightLine(new Point_1.Point(0, 0), new Point_1.Point(0, 1)));
        artist.DrawSection(new Section_1.Section(new Point_1.Point(2, 0), new Point_1.Point(0, 2)));
        artist.DrawSection(new Section_1.Section(new Point_1.Point(-2, 0), new Point_1.Point(0, 2)));
        artist.DrawSection(new Section_1.Section(new Point_1.Point(-2, 0), new Point_1.Point(0, -2)));
        artist.DrawSection(new Section_1.Section(new Point_1.Point(2, 0), new Point_1.Point(0, -2)));
        context.strokeStyle = 'black';
        for (var i = 1; i < camera.scale.x; i++) {
            artist.DrawPoint(new Point_1.Point(i, i));
            artist.DrawPoint(new Point_1.Point(-i, i));
            artist.DrawPoint(new Point_1.Point(i, -i));
            artist.DrawPoint(new Point_1.Point(-i, -i));
            artist.DrawLine(new Straight_Line_1.StraightLine(new Point_1.Point(i, 0), new Point_1.Point(i, 1)));
            artist.DrawLine(new Straight_Line_1.StraightLine(new Point_1.Point(-i, 0), new Point_1.Point(-i, 1)));
            artist.DrawLine(new Straight_Line_1.StraightLine(new Point_1.Point(0, i), new Point_1.Point(1, i)));
            artist.DrawLine(new Straight_Line_1.StraightLine(new Point_1.Point(0, -i), new Point_1.Point(1, -i)));
        }
    }, 10);
}


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
const Grid_1 = __webpack_require__(/*! ../engine/general-nodes/Grid */ "./src/engine/general-nodes/Grid.ts");
const View_1 = __webpack_require__(/*! ../engine/map/View */ "./src/engine/map/View.ts");
function Main() {
    let view = new View_1.View();
    let grid = new Grid_1.Grid(view.MainCamera);
    view.Nodes.push(grid);
    view.Run();
}
exports.Main = Main;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map