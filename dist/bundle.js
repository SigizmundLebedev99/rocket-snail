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
exports.push([module.i, "body{\r\n    margin: 0;\r\n    height: 100vh;\r\n}\r\n\r\n#viewport{\r\n    height: 100vh;\r\n    width: 100%;\r\n}", ""]);
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

/***/ "./src/engine/core/Component.ts":
/*!**************************************!*\
  !*** ./src/engine/core/Component.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseComponent = exports.DrawComponent = exports.Component = exports.BaseComponent = void 0;
class BaseComponent {
    constructor() {
        this.priority = 1;
        this.Started = false;
    }
    get Priority() {
        return this.priority;
    }
    set Priority(v) {
        if (this.priority == v)
            return;
        this.priority = v;
        if (this.PriorityChanged)
            this.PriorityChanged();
    }
    OnStart(node) { }
}
exports.BaseComponent = BaseComponent;
class Component extends BaseComponent {
}
exports.Component = Component;
class DrawComponent extends BaseComponent {
}
exports.DrawComponent = DrawComponent;
class MouseComponent extends BaseComponent {
}
exports.MouseComponent = MouseComponent;


/***/ }),

/***/ "./src/engine/core/CoordinateGrid.ts":
/*!*******************************************!*\
  !*** ./src/engine/core/CoordinateGrid.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.CoordinateGrid = void 0;
class CoordinateGrid {
    constructor(node) {
        this.Node = node;
    }
    ConvertFromScreen(point) {
        function transformVector(state) {
            if (state.Parent == null) {
                point
                    .Add(-state.Transition.x, -state.Transition.y)
                    .Multiply(1 / state.Scale.x, 1 / state.Scale.y)
                    .Rotate(-state.Rotation);
                return;
            }
            transformVector(state.Parent);
            point
                .Add(-state.Transition.x, -state.Transition.y)
                .Multiply(1 / state.Scale.x, 1 / state.Scale.y)
                .Rotate(-state.Rotation);
        }
        transformVector(this.Node);
        return point;
    }
    Convert(point) {
        function transformVector(state) {
            if (state.Parent == null) {
                point
                    .Rotate(state.Rotation)
                    .MultiplyV(state.Scale)
                    .AddV(state.Transition);
                return;
            }
            transformVector(state.Parent);
            point
                .Rotate(state.Rotation)
                .MultiplyV(state.Scale)
                .AddV(state.Transition);
        }
        transformVector(this.Node);
        return point;
    }
    PrepareAxis(context) {
        function transformContext(state) {
            if (state.Parent == null) {
                context.translate(state.Transition.x, state.Transition.y);
                context.scale(state.Scale.x, state.Scale.y);
                context.rotate(state.Rotation);
                return;
            }
            transformContext(state.Parent);
            context.translate(state.Transition.x, state.Transition.y);
            context.scale(state.Scale.x, state.Scale.y);
            context.rotate(state.Rotation);
        }
        transformContext(this.Node);
    }
}
exports.CoordinateGrid = CoordinateGrid;


/***/ }),

/***/ "./src/engine/core/MouseContext.ts":
/*!*****************************************!*\
  !*** ./src/engine/core/MouseContext.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseState = exports.MouseContext = void 0;
const Vector_1 = __webpack_require__(/*! ../primitives/Vector */ "./src/engine/primitives/Vector.ts");
class Binding {
    constructor(node) {
        this.handlers = [];
        this.isCaptured = false;
        this.isIn = false;
        this.node = node;
    }
}
class MouseContext {
    constructor() {
        this.captureStack = [];
        this.isIn = null;
        this.isCaptured = null;
        this.Position = new Vector_1.Vector(0, 0);
        this.LastState = { key: 'none' };
        this.Movement = new Vector_1.Vector(0, 0);
    }
    get In() {
        return this.isIn;
    }
    get Captured() {
        return this.isCaptured;
    }
    HandleState(state) {
        this.Position = state.Position;
        if (this.isIn != null) {
            this.isIn.isIn = false;
            this.isIn = null;
        }
        for (let b in this.captureStack) {
            let binding = this.captureStack[b];
            for (let p in binding.handlers) {
                let primitive = binding.handlers[p]();
                let point = binding.node.Position == 'absolute' ? state.Position : binding.node.CoordinateGrid.ConvertFromScreen(state.Position.Copy());
                if (primitive.IsPointIn(point)) {
                    binding.isIn = true;
                    this.isIn = binding;
                    break;
                }
            }
            if (binding.isIn)
                break;
        }
        switch (state.key) {
            case 'move': {
                this.Movement = state.Movement;
                break;
            }
            case 'down': {
                this.LastState = state;
                this.isCaptured = this.isIn;
                if (this.isIn != null)
                    this.isIn.isCaptured = true;
                break;
            }
            case 'up': {
                this.LastState = state;
                if (this.isCaptured) {
                    this.isCaptured.isCaptured = false;
                    this.isCaptured = null;
                }
                break;
            }
            case 'wheel': {
                this.LastState = state;
            }
        }
    }
    ListenEvents(htmlElement) {
        htmlElement.addEventListener("mousedown", (e) => {
            this.HandleState({
                key: "down",
                Position: new Vector_1.Vector(e.x, e.y),
                Which: e.which
            });
        });
        htmlElement.addEventListener("mouseup", (e) => {
            this.HandleState({
                key: "up",
                Position: new Vector_1.Vector(e.x, e.y)
            });
        });
        htmlElement.addEventListener("wheel", (e) => {
            this.HandleState({
                key: "wheel",
                Delta: e.deltaY,
                Position: new Vector_1.Vector(e.x, e.y)
            });
        });
        htmlElement.addEventListener("mousemove", (e) => {
            this.HandleState({
                key: "move",
                Movement: new Vector_1.Vector(e.movementX, e.movementY),
                Position: new Vector_1.Vector(e.x, e.y)
            });
        });
    }
    Resort() {
        this.captureStack = [...this.captureStack].sort((a, b) => b.node.Priority - a.node.Priority);
    }
    Reset() {
        this.LastState = { key: "none" };
        this.Movement = new Vector_1.Vector(0, 0);
    }
    CaptureMouse(node, handle) {
        let binding = this.captureStack.find(e => e.node == node);
        if (binding) {
            binding.handlers.push(handle);
        }
        else {
            binding = new Binding(node);
            binding.handlers.push(handle);
            this.captureStack.push(binding);
            this.Resort();
        }
        let bind = binding;
        return () => {
            return new MouseState(this, bind);
        };
    }
}
exports.MouseContext = MouseContext;
class MouseState {
    constructor(context, bind) {
        this.IsCaptured = false;
        this.IsIn = false;
        this.In = null;
        this.Captured = null;
        this.KeyState = context.LastState;
        this.Position = context.Position;
        this.Movement = context.Movement;
        this.IsCaptured = bind.isCaptured;
        this.IsIn = bind.isIn;
        this.In = context.In;
        this.Captured = context.Captured;
    }
}
exports.MouseState = MouseState;


/***/ }),

/***/ "./src/engine/core/Scene.ts":
/*!**********************************!*\
  !*** ./src/engine/core/Scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = void 0;
const SceneContext_1 = __webpack_require__(/*! ./SceneContext */ "./src/engine/core/SceneContext.ts");
const MouseContext_1 = __webpack_require__(/*! ./MouseContext */ "./src/engine/core/MouseContext.ts");
class Scene {
    constructor(context, mouseContext) {
        this.ElementsOnScene = [];
        this.ShouldResort = false;
        this.Canvas = context;
        if (mouseContext) {
            this._mouseContext = mouseContext;
            this.Context = new SceneContext_1.SceneContext(this, mouseContext);
            return;
        }
        this._mouseContext = new MouseContext_1.MouseContext();
        this._mouseContext.ListenEvents(context.canvas);
        this.Context = new SceneContext_1.SceneContext(this, this._mouseContext);
    }
    Clear() {
        this.Canvas.clearRect(0, 0, this.Canvas.canvas.width, this.Canvas.canvas.height);
    }
    Redraw() {
        if (this.ShouldResort) {
            this._mouseContext.Resort();
            this.Resort();
            this.ShouldResort = false;
        }
        this.Clear();
        this.ElementsOnScene.forEach(node => {
            if (node.IsActive)
                node.OnMouseUpdate();
        });
        this.ElementsOnScene.forEach(node => {
            if (node.IsActive)
                node.OnComponentsUpdate();
        });
        this.ElementsOnScene.forEach(node => {
            if (!node.IsActive)
                return;
            this.Canvas.save();
            node.OnDrawUpdate();
            this.Canvas.restore();
        });
        this._mouseContext.Reset();
    }
    Run() {
        this.intervalId = setInterval(() => {
            this.Redraw();
        }, 8);
    }
    Stop() {
        clearInterval(this.intervalId);
    }
    Resort() {
        let elements = [...this.ElementsOnScene];
        elements.sort((a, b) => a.Priority - b.Priority);
        this.ElementsOnScene = elements;
    }
}
exports.Scene = Scene;


/***/ }),

/***/ "./src/engine/core/SceneContext.ts":
/*!*****************************************!*\
  !*** ./src/engine/core/SceneContext.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneContext = void 0;
const SceneElement_1 = __webpack_require__(/*! ./SceneElement */ "./src/engine/core/SceneElement.ts");
const Vector_1 = __webpack_require__(/*! ../primitives/Vector */ "./src/engine/primitives/Vector.ts");
class SceneContext {
    constructor(scene, mouseContext) {
        this._scene = scene;
        this.Canvas = scene.Canvas;
        this._mouse = mouseContext;
        let root = new SceneElement_1.SceneElement(this);
        root.Position = 'absolute';
        root.Priority = -10000;
        this.AddElement(root);
        this._root = root;
    }
    get Mouse() {
        return this._mouse;
    }
    get ElementsOnScene() {
        return [...this._scene.ElementsOnScene];
    }
    get Width() {
        return this.Canvas.canvas.width;
    }
    get Height() {
        return this.Canvas.canvas.height;
    }
    get LeftTop() {
        return new Vector_1.Vector(0, 0);
    }
    get LeftBottom() {
        return new Vector_1.Vector(0, this.Height);
    }
    get RightTop() {
        return new Vector_1.Vector(this.Width, 0);
    }
    get RightBottom() {
        return new Vector_1.Vector(this.Width, this.Height);
    }
    get Center() {
        return new Vector_1.Vector(this.Width / 2, this.Height / 2);
    }
    get Root() {
        return this._root;
    }
    PriorityChanged() {
        this._scene.ShouldResort = true;
    }
    AddElement(element) {
        this._scene.ElementsOnScene.push(element);
        this._scene.ShouldResort = true;
        if (this._root)
            this._root.AddChild(element);
    }
    RemoveElement(element) {
        this._scene.ElementsOnScene =
            this._scene.ElementsOnScene
                .filter(e => e != element);
    }
    Redraw() {
        this._scene.Redraw();
    }
    Run() {
        this._scene.Run();
    }
    Stop() {
        this._scene.Stop();
    }
}
exports.SceneContext = SceneContext;


/***/ }),

/***/ "./src/engine/core/SceneElement.ts":
/*!*****************************************!*\
  !*** ./src/engine/core/SceneElement.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SceneElement = void 0;
const Component_1 = __webpack_require__(/*! ./Component */ "./src/engine/core/Component.ts");
const Style_1 = __webpack_require__(/*! ./Style */ "./src/engine/core/Style.ts");
const CoordinateGrid_1 = __webpack_require__(/*! ./CoordinateGrid */ "./src/engine/core/CoordinateGrid.ts");
const Vector_1 = __webpack_require__(/*! ../primitives/Vector */ "./src/engine/primitives/Vector.ts");
const GeneralComponent_1 = __webpack_require__(/*! ../general-components/GeneralComponent */ "./src/engine/general-components/GeneralComponent.ts");
const GeneralMouseComponent_1 = __webpack_require__(/*! ../general-components/GeneralMouseComponent */ "./src/engine/general-components/GeneralMouseComponent.ts");
class SceneElement {
    constructor(view, active = true) {
        this.isActive = true;
        this.Position = "relative";
        this.priority = 1;
        this.parent = null;
        this.children = [];
        this.components = [];
        this.drawComponents = [];
        this.mouseComponents = [];
        this.Style = new Style_1.Style();
        this.Transition = new Vector_1.Vector(0, 0);
        this.Rotation = 0;
        this.Scale = new Vector_1.Vector(1, 1);
        this._scene = view;
        this.mouseContext = view.Mouse;
        view.AddElement(this);
        this.isActive = active;
    }
    get Scene() {
        return this._scene;
    }
    get IsActive() {
        return this.isActive;
    }
    get Priority() {
        return this.priority;
    }
    set Priority(v) {
        if (v == this.priority)
            return;
        this.priority = v;
        this.Scene.PriorityChanged();
    }
    get Parent() {
        return this.parent;
    }
    get Children() {
        return [...this.children];
    }
    get TotalRotation() {
        if (this.Parent != null)
            return this.Rotation + this.Parent.TotalRotation;
        return this.Rotation;
    }
    get TotalScale() {
        if (this.Parent != null) {
            let baseScale = this.Parent.TotalScale;
            return this.Scale.Copy().MultiplyV(baseScale);
        }
        return this.Scale;
    }
    get CoordinateGrid() {
        return new CoordinateGrid_1.CoordinateGrid(this);
    }
    setActive(val) {
        this.isActive = val;
        this.children.forEach(e => e.setActive(val));
    }
    ActivateTree() {
        this.setActive(true);
    }
    DeactivateTree() {
        this.setActive(false);
    }
    AddChild(element) {
        if (element.Parent != null)
            element.Parent.RemoveChild(element);
        element.parent = this;
        this.children.push(element);
        return this;
    }
    Remove() {
        this._scene.RemoveElement(this);
        if (this.parent != null) {
            this.parent.children = this.parent.children.filter(e => e != this);
        }
        this.children.forEach(e => e.Remove());
    }
    RemoveChild(element) {
        if (element.Parent != this || !this.children.some(e => e == element))
            throw "Unable to remove. Element is not child element";
        element.parent = null;
        //TODO: Add styles backuping;
        this.children = this.children.filter(e => e != element);
    }
    AddComponent(component) {
        if (component instanceof Component_1.Component)
            this.components.push(component);
        else if (component instanceof Component_1.DrawComponent)
            this.drawComponents.push(component);
        else if (component instanceof Component_1.MouseComponent)
            this.mouseComponents.push(component);
        else {
            component = new GeneralComponent_1.GeneralComponent(component);
            this.components.push(component);
        }
        component.PriorityChanged = this.ResortComponents;
        this.ResortComponents();
        return this;
    }
    AddMouseComponent(component) {
        if (component instanceof Component_1.MouseComponent)
            this.mouseComponents.push(component);
        else {
            component = new GeneralMouseComponent_1.GeneralMouseComponent(component);
            this.mouseComponents.push(component);
        }
        component.PriorityChanged = this.ResortComponents;
        this.ResortComponents();
        return this;
    }
    CaptureMouse(map) {
        if (this.mouseContext)
            this.map = this.mouseContext.CaptureMouse(this, map);
        return this;
    }
    ResortComponents() {
        this.components = [...this.components].sort((a, b) => b.Priority - a.Priority);
        this.drawComponents = [...this.drawComponents].sort((a, b) => b.Priority - a.Priority);
        this.mouseComponents = [...this.mouseComponents].sort((a, b) => b.Priority - a.Priority);
    }
    CheckIfStarted(component) {
        if (component.Started)
            return;
        component.OnStart(this);
        component.Started = true;
    }
    OnMouseUpdate() {
        if (this.map) {
            let mouseState = this.map();
            this.mouseComponents.forEach(c => {
                this.CheckIfStarted(c);
                c.OnUpdate(this, mouseState);
            });
        }
    }
    OnDrawUpdate() {
        if (this.drawComponents.length == 0)
            return;
        if (this.Position == 'relative')
            this.CoordinateGrid.PrepareAxis(this._scene.Canvas);
        Style_1.Style.Apply(this._scene.Canvas, this);
        this.drawComponents.forEach(c => {
            this.CheckIfStarted(c);
            c.OnUpdate(this, this._scene.Canvas);
        });
    }
    OnComponentsUpdate() {
        this.components.forEach(c => {
            this.CheckIfStarted(c);
            c.OnUpdate(this);
        });
    }
}
exports.SceneElement = SceneElement;


/***/ }),

/***/ "./src/engine/core/Style.ts":
/*!**********************************!*\
  !*** ./src/engine/core/Style.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Style = void 0;
class Style {
    constructor(state = null) {
        if (state)
            Object.getOwnPropertyNames(state).forEach(p => {
                this[p] = state[p];
            });
    }
    Copy(style) {
        Object.getOwnPropertyNames(this).forEach(p => {
            if (!this[p])
                this[p] = style[p];
        });
    }
    static Apply(context, node) {
        if (node instanceof Style) {
            Object.getOwnPropertyNames(node).forEach(p => {
                if (node[p] && context[p])
                    context[p] = node[p];
            });
            return;
        }
        if (node.Parent != null)
            this.Apply(context, node.Parent);
        Object.getOwnPropertyNames(node.Style).forEach(p => {
            if (node.Style[p] && context[p])
                context[p] = node.Style[p];
        });
    }
}
exports.Style = Style;


/***/ }),

/***/ "./src/engine/core/ViewPort.ts":
/*!*************************************!*\
  !*** ./src/engine/core/ViewPort.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewPort = void 0;
const Scene_1 = __webpack_require__(/*! ./Scene */ "./src/engine/core/Scene.ts");
const MouseContext_1 = __webpack_require__(/*! ./MouseContext */ "./src/engine/core/MouseContext.ts");
class ViewPort {
    constructor(viewportContainerId) {
        this.scenes = [];
        this.container = document.getElementById(viewportContainerId);
        this.Mouse = new MouseContext_1.MouseContext();
        this.Mouse.ListenEvents(this.container);
    }
    AddScene() {
        let canvas = document.createElement('canvas');
        canvas.width = this.container.clientWidth;
        canvas.height = this.container.clientHeight;
        canvas.style.position = 'absolute';
        this.container.appendChild(canvas);
        let context = canvas.getContext('2d');
        if (context == null)
            throw "Your brouser doesn't support canvas";
        let scene = new Scene_1.Scene(context, this.Mouse);
        this.scenes.push(scene);
        return scene.Context;
    }
}
exports.ViewPort = ViewPort;


/***/ }),

/***/ "./src/engine/general-components/DragDropCom.ts":
/*!******************************************************!*\
  !*** ./src/engine/general-components/DragDropCom.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DragDropCom = void 0;
const Component_1 = __webpack_require__(/*! ../core/Component */ "./src/engine/core/Component.ts");
const StateMachine_1 = __webpack_require__(/*! ../state-machine/StateMachine */ "./src/engine/state-machine/StateMachine.ts");
const Vector_1 = __webpack_require__(/*! ../primitives/Vector */ "./src/engine/primitives/Vector.ts");
class DragDropCom extends Component_1.MouseComponent {
    constructor() {
        super();
        this.sm = new StateMachine_1.StateMachine("none");
        this.sm.AddState('none')
            .AddCondition((state) => {
            let mouseState = state;
            return mouseState.IsCaptured;
        }, 'drag');
        this.sm.AddState('drag')
            .AddCondition((state) => {
            let mouseState = state;
            return !mouseState.IsCaptured;
        }, "none")
            .OnCheck(state => {
            let mouseState = state;
            if (!this.node)
                return;
            let d = mouseState.Movement;
            if (!d.x && !d.y)
                return;
            if (this.node.Position == 'relative' && this.node.Parent != null) {
                let scale = this.node.Parent.TotalScale;
                var v = new Vector_1.Vector(d.x / scale.x, d.y / scale.y);
                v.Rotate(-this.node.TotalRotation);
                this.node.Transition.AddV(v);
            }
            else
                this.node.Transition.Add(d.x / 2, d.y / 2);
        });
    }
    OnStart(node) {
        this.node = node;
    }
    OnUpdate(node, mouseState) {
        this.sm.CheckState(mouseState);
    }
}
exports.DragDropCom = DragDropCom;


/***/ }),

/***/ "./src/engine/general-components/DrawEllipsCom.ts":
/*!********************************************************!*\
  !*** ./src/engine/general-components/DrawEllipsCom.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DrawEllipsCom = void 0;
const Component_1 = __webpack_require__(/*! ../core/Component */ "./src/engine/core/Component.ts");
class DrawEllipsCom extends Component_1.DrawComponent {
    constructor(map) {
        super();
        this.map = map;
        this.Priority = -10000;
    }
    OnUpdate(node, context) {
        let e = this.map();
        context.beginPath();
        context.save();
        context.translate(e.x, e.y);
        context.scale(1, e.b / e.a);
        context.arc(0, 0, e.a, 0, Math.PI * 2);
        context.restore();
        context.fill();
        context.stroke();
        context.closePath();
    }
}
exports.DrawEllipsCom = DrawEllipsCom;


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
const Component_1 = __webpack_require__(/*! ../core/Component */ "./src/engine/core/Component.ts");
const Line_1 = __webpack_require__(/*! ../primitives/Line */ "./src/engine/primitives/Line.ts");
const Style_1 = __webpack_require__(/*! ../core/Style */ "./src/engine/core/Style.ts");
class DrawLineCom extends Component_1.DrawComponent {
    constructor(map, style) {
        super();
        this.map = map;
        this.style = style;
    }
    OnUpdate(node, context) {
        let state;
        if (this.map instanceof Line_1.Line)
            state = this.map;
        else
            state = this.map();
        if (this.style) {
            context.save();
            Style_1.Style.Apply(context, this.style);
        }
        if (state instanceof Line_1.Line) {
            let line = state;
            context.beginPath();
            context.moveTo(line.p1.x, line.p1.y);
            context.lineTo(line.p2.x, line.p2.y);
            context.closePath();
            context.stroke();
        }
        else {
            state.forEach(line => {
                context.beginPath();
                context.moveTo(line.p1.x, line.p1.y);
                context.lineTo(line.p2.x, line.p2.y);
                context.closePath();
                context.stroke();
            });
        }
        if (this.style)
            context.restore();
    }
}
exports.DrawLineCom = DrawLineCom;


/***/ }),

/***/ "./src/engine/general-components/GeneralComponent.ts":
/*!***********************************************************!*\
  !*** ./src/engine/general-components/GeneralComponent.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralComponent = void 0;
const Component_1 = __webpack_require__(/*! ../core/Component */ "./src/engine/core/Component.ts");
class GeneralComponent extends Component_1.Component {
    constructor(action) {
        super();
        this.action = action;
    }
    OnUpdate(node) {
        this.action(node);
    }
}
exports.GeneralComponent = GeneralComponent;


/***/ }),

/***/ "./src/engine/general-components/GeneralMouseComponent.ts":
/*!****************************************************************!*\
  !*** ./src/engine/general-components/GeneralMouseComponent.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GeneralMouseComponent = void 0;
const Component_1 = __webpack_require__(/*! ../core/Component */ "./src/engine/core/Component.ts");
class GeneralMouseComponent extends Component_1.MouseComponent {
    constructor(action) {
        super();
        this.action = action;
    }
    OnUpdate(node, state) {
        this.action(node, state);
    }
}
exports.GeneralMouseComponent = GeneralMouseComponent;


/***/ }),

/***/ "./src/engine/general-components/WheelScaleCom.ts":
/*!********************************************************!*\
  !*** ./src/engine/general-components/WheelScaleCom.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.WheelScaleCom = void 0;
const Component_1 = __webpack_require__(/*! ../core/Component */ "./src/engine/core/Component.ts");
class WheelScaleCom extends Component_1.MouseComponent {
    constructor() {
        super();
    }
    OnUpdate(node, mouseState) {
        if (!mouseState.IsIn || mouseState.KeyState.key != 'wheel')
            return;
        var delta = 1 + mouseState.KeyState.Delta / 2000;
        node.Scale.Multiply(delta);
    }
}
exports.WheelScaleCom = WheelScaleCom;


/***/ }),

/***/ "./src/engine/grid/Grid.ts":
/*!*********************************!*\
  !*** ./src/engine/grid/Grid.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
const SceneElement_1 = __webpack_require__(/*! ../../engine/core/SceneElement */ "./src/engine/core/SceneElement.ts");
const Line_1 = __webpack_require__(/*! ../primitives/Line */ "./src/engine/primitives/Line.ts");
const DrawLineCom_1 = __webpack_require__(/*! ../../engine/general-components/DrawLineCom */ "./src/engine/general-components/DrawLineCom.ts");
const Vector_1 = __webpack_require__(/*! ../primitives/Vector */ "./src/engine/primitives/Vector.ts");
const Style_1 = __webpack_require__(/*! ../core/Style */ "./src/engine/core/Style.ts");
class Grid extends SceneElement_1.SceneElement {
    constructor(view, gap) {
        super(view);
        this.Priority = -1000;
        this.Style.lineWidth = 0.2;
        this.Style.strokeStyle = "black";
        this.Position = 'absolute';
        this.Transition = view.Center;
        let { Width, Height } = view;
        let x_c = view.Center.x;
        let y_c = view.Center.y;
        this.AddComponent(new DrawLineCom_1.DrawLineCom(() => this.GetLongitudes(gap)));
        this.AddComponent(new DrawLineCom_1.DrawLineCom(() => this.GetLatitudes(gap)));
        this.AddComponent(new DrawLineCom_1.DrawLineCom(() => new Line_1.Line(new Vector_1.Vector(-Width, this.Parent.Transition.y * this.Scale.x), new Vector_1.Vector(Width, this.Parent.Transition.y * this.Scale.x)), new Style_1.Style({
            lineWidth: 1
        })));
        this.AddComponent(new DrawLineCom_1.DrawLineCom(() => new Line_1.Line(new Vector_1.Vector(this.Parent.Transition.x * this.Scale.x, -Height), new Vector_1.Vector(this.Parent.Transition.x * this.Scale.x, Height)), new Style_1.Style({
            lineWidth: 1
        })));
    }
    GetLatitudes(gap) {
        let { Width, Height } = this.Scene;
        let arr = [];
        let position = this.Parent ? this.Parent.Transition : new Vector_1.Vector(0, 0);
        gap = this.Parent ? this.Parent.Scale.x : gap;
        let x = position.x % gap;
        while (x < Width) {
            let _x = x;
            arr.push(new Line_1.Line(new Vector_1.Vector(_x, 0), new Vector_1.Vector(_x, Height)));
            x += gap;
        }
        return arr;
    }
    GetLongitudes(gap) {
        let { Width, Height } = this.Scene;
        if (!this.Parent)
            return [];
        let arr = [];
        let position = this.Parent ? this.Parent.Transition : new Vector_1.Vector(0, 0);
        gap = this.Parent ? this.Parent.Scale.y : gap;
        let y = position.y % gap;
        while (y < Height) {
            let _y = y;
            arr.push(new Line_1.Line(new Vector_1.Vector(0, _y), new Vector_1.Vector(Width, _y)));
            y += gap;
        }
        return arr;
    }
}
exports.Grid = Grid;


/***/ }),

/***/ "./src/engine/primitives/Ellips.ts":
/*!*****************************************!*\
  !*** ./src/engine/primitives/Ellips.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Ellips = void 0;
class Ellips {
    constructor(x, y, a, b) {
        this.x = x;
        this.y = y;
        if (b) {
            this.a = a;
            this.b = b;
        }
        else {
            this.a = a;
            this.b = a;
        }
    }
    IsPointIn(point) {
        let { x, y, a, b } = this;
        let forX = Math.pow(point.x - x, 2) / (a * a);
        let forY = Math.pow(point.y - y, 2) / (b * b);
        return forX + forY <= 1;
    }
}
exports.Ellips = Ellips;


/***/ }),

/***/ "./src/engine/primitives/Line.ts":
/*!***************************************!*\
  !*** ./src/engine/primitives/Line.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Line = void 0;
class Line {
    constructor(p1, p2) {
        let A = p1.y - p2.y, B = p2.x - p1.x, C = -A * p1.x - B * p1.y;
        this._A = A;
        this._B = B;
        this._C = C;
        this.p1 = p1;
        this.p2 = p2;
    }
    Proection(p) {
        return this._A * p.x + this._B * p.y + this._C;
    }
}
exports.Line = Line;


/***/ }),

/***/ "./src/engine/primitives/Rectangle.ts":
/*!********************************************!*\
  !*** ./src/engine/primitives/Rectangle.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Rectangle = void 0;
const math_1 = __webpack_require__(/*! ../../helpers/math */ "./src/helpers/math.ts");
class Rectangle {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
    }
    IsPointIn(point) {
        let xIn = math_1.Fns.Between(this.x, this.x + this.width, point.x);
        let yIn = math_1.Fns.Between(this.y, this.y + this.height, point.y);
        return xIn && yIn;
    }
}
exports.Rectangle = Rectangle;


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
    constructor(state, state2 = 0) {
        if (state.x !== null && state.y != null && !isNaN(state.x) && !isNaN(state.y)) {
            this.x = state.x;
            this.y = state.y;
            return;
        }
        if (Array.isArray(state) && state.length == 2 && !isNaN(state[0]) && !isNaN(state[1])) {
            this.x = state[0];
            this.y = state[1];
            return;
        }
        if (state != null && !isNaN(state) && !isNaN(state2)) {
            this.x = state;
            this.y = state2;
            return;
        }
        throw "Invalid input";
    }
    get Length() {
        let length = Math.sqrt(this.x * this.x + this.y * this.y);
        return length;
    }
    get Angle() {
        return Math.acos(this.x / this.Length);
    }
    Add(x, y) {
        this.x += x;
        this.y += y;
        return this;
    }
    AddV(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }
    Subtract(x, y) {
        this.x -= x;
        this.y -= y;
        return this;
    }
    SubstractV(vector) {
        this.x += vector.x;
        this.y += vector.y;
        return this;
    }
    Multiply(x, y) {
        if (!y) {
            this.x *= x;
            this.y *= x;
        }
        else {
            this.x *= x;
            this.y *= y;
        }
        return this;
    }
    MultiplyV(vector) {
        this.x *= vector.x;
        this.y *= vector.y;
        return this;
    }
    Scalar(vector) {
        return this.x * vector.x + this.y * vector.y;
    }
    Pseudo(anower) {
        return this.x * anower.y - this.y * anower.x;
    }
    GetUnit() {
        let length = this.Length;
        return new Vector(this.x / length, this.y / length);
    }
    GetRotatedUnit(angle) {
        angle += this.Angle;
        return new Vector(Math.cos(angle), Math.sin(angle));
    }
    Rotate(angle) {
        let { x, y } = this;
        this.x = x * Math.cos(angle) - y * Math.sin(angle);
        this.y = y * Math.cos(angle) + x * Math.sin(angle);
        return this;
    }
    Copy() {
        return new Vector(this.x, this.y);
    }
}
exports.Vector = Vector;


/***/ }),

/***/ "./src/engine/state-machine/StateMachine.ts":
/*!**************************************************!*\
  !*** ./src/engine/state-machine/StateMachine.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.StateMachine = exports.State = void 0;
class State {
    constructor(name) {
        this.Conditions = [];
        this.Name = name;
    }
    AddCondition(condition, goto) {
        this.Conditions.push({ condition, goto });
        return this;
    }
    OnEnter(action) {
        this.onEnter = action;
        return this;
    }
    OnCheck(action) {
        this.onCheck = action;
        return this;
    }
    OnLeave(action) {
        this.onLeave = action;
        return this;
    }
}
exports.State = State;
class StateMachine {
    constructor(initState) {
        this.states = {};
        this.currentState = initState;
    }
    AddState(name) {
        let state = new State(name);
        this.states[String(state.Name)] = state;
        return state;
    }
    CheckState(_state) {
        let state = this.states[String(this.currentState)];
        for (let c in state.Conditions) {
            let { condition, goto } = state.Conditions[c];
            if (!condition(_state))
                continue;
            if (state.onLeave)
                state.onLeave(_state);
            this.currentState = goto;
            let newState = this.states[String(this.currentState)];
            if (newState.onEnter)
                newState.onEnter(_state);
            return;
        }
        if (state.onCheck)
            state.onCheck(_state);
    }
}
exports.StateMachine = StateMachine;


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
__webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
const Main_1 = __webpack_require__(/*! ./sample/Main */ "./src/sample/Main.ts");
Main_1.Main();


/***/ }),

/***/ "./src/sample/Main.ts":
/*!****************************!*\
  !*** ./src/sample/Main.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const Grid_1 = __webpack_require__(/*! ../engine/grid/Grid */ "./src/engine/grid/Grid.ts");
const SceneElement_1 = __webpack_require__(/*! ../engine/core/SceneElement */ "./src/engine/core/SceneElement.ts");
const Rectangle_1 = __webpack_require__(/*! ../engine/primitives/Rectangle */ "./src/engine/primitives/Rectangle.ts");
const ViewPort_1 = __webpack_require__(/*! ../engine/core/ViewPort */ "./src/engine/core/ViewPort.ts");
const Vector_1 = __webpack_require__(/*! ../engine/primitives/Vector */ "./src/engine/primitives/Vector.ts");
const Ellips_1 = __webpack_require__(/*! ../engine/primitives/Ellips */ "./src/engine/primitives/Ellips.ts");
const Planet_1 = __webpack_require__(/*! ./nodes/Planet */ "./src/sample/nodes/Planet.ts");
const DrawEllipsCom_1 = __webpack_require__(/*! ../engine/general-components/DrawEllipsCom */ "./src/engine/general-components/DrawEllipsCom.ts");
const DragDropCom_1 = __webpack_require__(/*! ../engine/general-components/DragDropCom */ "./src/engine/general-components/DragDropCom.ts");
const SatelliteCom_1 = __webpack_require__(/*! ./components/SatelliteCom */ "./src/sample/components/SatelliteCom.ts");
const TransitionCom_1 = __webpack_require__(/*! ./components/TransitionCom */ "./src/sample/components/TransitionCom.ts");
const WheelScaleCom_1 = __webpack_require__(/*! ../engine/general-components/WheelScaleCom */ "./src/engine/general-components/WheelScaleCom.ts");
function Main() {
    let viewport = new ViewPort_1.ViewPort("viewport");
    let back = viewport.AddScene();
    let grid = new Grid_1.Grid(back, 50);
    let front = viewport.AddScene();
    front.Root
        .CaptureMouse(() => new Rectangle_1.Rectangle(0, 0, front.Width, front.Height))
        .AddComponent(new DragDropCom_1.DragDropCom())
        .AddComponent(new WheelScaleCom_1.WheelScaleCom())
        .AddChild(grid)
        .AddComponent(() => back.Redraw());
    front.Root.Scale = new Vector_1.Vector(60, -40);
    front.Root.Transition = front.Center;
    let pos = new Vector_1.Vector(-6, -6);
    let start = new Vector_1.Vector(-6, -6);
    for (let i = 0; i < 255; i++) {
        if (i % 15 == 0) {
            start.Add(0, 2);
            pos = new Vector_1.Vector(start.x, start.y);
        }
        pos.Add(2, 0);
        let sun = new SceneElement_1.SceneElement(front);
        sun.Style.lineWidth = 0.1;
        sun.Style.fillStyle = 'yellow';
        sun.Style.strokeStyle = 'orange';
        sun.CaptureMouse(() => new Ellips_1.Ellips(0, 0, 1.5));
        sun.Scale = new Vector_1.Vector(0.2, 0.2);
        sun.Transition = pos.Copy();
        let earth = new Planet_1.Planet(front, "Earth", new Vector_1.Vector(5, 1.5), 'blue');
        let moon = new Planet_1.Planet(front, "Moon", new Vector_1.Vector(2, 0.5), 'gray');
        sun
            .AddComponent(new DrawEllipsCom_1.DrawEllipsCom(() => new Ellips_1.Ellips(0, 0, 1.5)))
            .AddComponent(new DragDropCom_1.DragDropCom())
            .AddComponent(new SatelliteCom_1.SatelliteCom())
            .AddChild(earth
            .AddComponent(new TransitionCom_1.TransitionCom())
            .AddComponent(new DrawEllipsCom_1.DrawEllipsCom(() => new Ellips_1.Ellips(0, 0, 1)))
            .AddChild(moon
            .AddComponent(new TransitionCom_1.TransitionCom(-0.005))
            .AddComponent(new DrawEllipsCom_1.DrawEllipsCom(() => new Ellips_1.Ellips(0, 0, 0.8)))));
    }
    back.Redraw();
    front.Run();
}
exports.Main = Main;


/***/ }),

/***/ "./src/sample/components/PerspectiveCom.ts":
/*!*************************************************!*\
  !*** ./src/sample/components/PerspectiveCom.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.PerspectiveCom = void 0;
const Component_1 = __webpack_require__(/*! ../../engine/core/Component */ "./src/engine/core/Component.ts");
class PerspectiveCom extends Component_1.Component {
    constructor(planeAngle) {
        super();
        this.planeAngle = planeAngle;
    }
    OnStart(node) {
        this.originalScale = node.Scale;
    }
    OnUpdate(node) {
        let planet = node;
        let nodeY = planet.Transition.y;
        if (nodeY == 0) {
            planet.orbitYCoefficient = 1;
        }
        else if (nodeY >= 0) {
            planet.orbitYCoefficient = 1 - Math.abs(nodeY) / this.planeAngle;
        }
        else {
            planet.orbitYCoefficient = 1 + Math.abs(nodeY) / this.planeAngle;
        }
        if (this.originalScale)
            planet.Scale = this.originalScale.Copy().Multiply(planet.orbitYCoefficient);
    }
}
exports.PerspectiveCom = PerspectiveCom;


/***/ }),

/***/ "./src/sample/components/SatelliteCom.ts":
/*!***********************************************!*\
  !*** ./src/sample/components/SatelliteCom.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SatelliteCom = void 0;
const Component_1 = __webpack_require__(/*! ../../engine/core/Component */ "./src/engine/core/Component.ts");
const Vector_1 = __webpack_require__(/*! ../../engine/primitives/Vector */ "./src/engine/primitives/Vector.ts");
class SatelliteCom extends Component_1.Component {
    constructor() {
        super();
    }
    OnUpdate(node) {
        node.Priority = node.CoordinateGrid.Convert(new Vector_1.Vector(0, 0)).y;
    }
}
exports.SatelliteCom = SatelliteCom;


/***/ }),

/***/ "./src/sample/components/TransitionCom.ts":
/*!************************************************!*\
  !*** ./src/sample/components/TransitionCom.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.TransitionCom = void 0;
const Component_1 = __webpack_require__(/*! ../../engine/core/Component */ "./src/engine/core/Component.ts");
const Vector_1 = __webpack_require__(/*! ../../engine/primitives/Vector */ "./src/engine/primitives/Vector.ts");
class TransitionCom extends Component_1.Component {
    constructor(speed) {
        super();
        this.transition = 0;
        this.increment = speed !== null && speed !== void 0 ? speed : 0.005;
    }
    OnUpdate(node) {
        let planet = node;
        let altitude = planet.orbitEllips;
        let kx = altitude.x * planet.orbitYCoefficient;
        let ky = -planet.orbitYCoefficient * altitude.y;
        this.transition += planet.orbitYCoefficient * this.increment;
        planet.Transition = new Vector_1.Vector(kx * Math.sin(this.transition), ky * Math.cos(this.transition));
    }
}
exports.TransitionCom = TransitionCom;


/***/ }),

/***/ "./src/sample/nodes/Planet.ts":
/*!************************************!*\
  !*** ./src/sample/nodes/Planet.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Planet = void 0;
const SceneElement_1 = __webpack_require__(/*! ../../engine/core/SceneElement */ "./src/engine/core/SceneElement.ts");
const SatelliteCom_1 = __webpack_require__(/*! ../components/SatelliteCom */ "./src/sample/components/SatelliteCom.ts");
const PerspectiveCom_1 = __webpack_require__(/*! ../components/PerspectiveCom */ "./src/sample/components/PerspectiveCom.ts");
class Planet extends SceneElement_1.SceneElement {
    constructor(view, name, orbitEllips, color) {
        super(view);
        this.orbitYCoefficient = 1;
        this.orbitEllips = orbitEllips;
        this.Name = name;
        this.Style.fillStyle = color !== null && color !== void 0 ? color : "red";
        this.AddComponent(new SatelliteCom_1.SatelliteCom())
            .AddComponent(new PerspectiveCom_1.PerspectiveCom(6));
    }
}
exports.Planet = Planet;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map