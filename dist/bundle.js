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

/***/ "./src/engine/core/BaseState.ts":
/*!**************************************!*\
  !*** ./src/engine/core/BaseState.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseState = void 0;
const Vector_1 = __webpack_require__(/*! ../primitives/Vector */ "./src/engine/primitives/Vector.ts");
class BaseState {
    constructor() {
        this.Transition = new Vector_1.Vector(0, 0);
        this.Rotation = 0;
        this.Scale = new Vector_1.Vector(1, 1);
        this.BaseState = null;
    }
    get TotalTransition() {
        if (this.BaseState != null)
            return this.Transition.Add(this.BaseState.TotalTransition);
        return this.Transition;
    }
    get TotalRotation() {
        if (this.BaseState != null)
            return this.Rotation + this.BaseState.TotalRotation;
        return this.Rotation;
    }
    get TotalScale() {
        if (this.BaseState != null) {
            let baseScale = this.BaseState.TotalScale;
            return new Vector_1.Vector(this.Scale.x * baseScale.x, this.Scale.y * baseScale.y);
        }
        return this.Scale;
    }
    Copy(state) {
        this.BaseState = state.BaseState;
        this.Rotation = state.Rotation;
        this.Scale = state.Scale;
        this.Transition = state.Transition;
    }
}
exports.BaseState = BaseState;


/***/ }),

/***/ "./src/engine/core/Camera.ts":
/*!***********************************!*\
  !*** ./src/engine/core/Camera.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
const Vector_1 = __webpack_require__(/*! ../primitives/Vector */ "./src/engine/primitives/Vector.ts");
const Point_1 = __webpack_require__(/*! ../primitives/Point */ "./src/engine/primitives/Point.ts");
class Camera {
    constructor(node, view) {
        this.actualTransition = new Vector_1.Vector(0, 0);
        this.Node = node;
        this._view = view;
    }
    get ActualTransition() {
        return this.actualTransition;
    }
    ConvertFromScreen(point) {
        let view = this._view;
        let vector = Vector_1.Vector.FromPoint(point);
        vector = vector.Add(new Vector_1.Vector(-view.Width / 2, -view.Height / 2));
        vector = new Vector_1.Vector(vector.x / view.PIXELS_METER, vector.y / (-view.PIXELS_METER));
        function transformVector(state) {
            if (state.BaseState == null) {
                vector = new Vector_1.Vector(vector.x / state.Scale.x, vector.y / state.Scale.y);
                vector = vector.Add(new Vector_1.Vector(-state.Transition.x, -state.Transition.y));
                vector = vector.Rotate(-state.Rotation);
                return;
            }
            transformVector(state.BaseState);
            vector = vector.Add(new Vector_1.Vector(-state.Transition.x, -state.Transition.y));
            vector = vector.Rotate(-state.Rotation);
            vector = new Vector_1.Vector(vector.x / state.Scale.x, vector.y / state.Scale.y);
        }
        transformVector(this.Node);
        return Point_1.Point.From(vector);
    }
    Convert(point) {
        let p = Vector_1.Vector.FromPoint(point);
        let view = this._view;
        function transformCamera(state) {
            if (state.BaseState == null) {
                p = p.Rotate(-state.Rotation);
                p = p.Add(state.Transition);
                p = new Vector_1.Vector(p.x * state.Scale.x, p.y * state.Scale.y);
                return;
            }
            transformCamera(state.BaseState);
            p = new Vector_1.Vector(p.x * state.Scale.x, p.y * state.Scale.y);
            p = p.Rotate(-state.Rotation);
            p = p.Add(state.Transition);
        }
        transformCamera(this.Node);
        p = new Vector_1.Vector(p.x * view.PIXELS_METER, p.y * view.PIXELS_METER);
        return new Point_1.Point(p.x + view.Width / 2, -(p.y - view.Height / 2));
    }
    PrepareAxis() {
        let view = this._view;
        let context = view.Canvas;
        context.translate(view.Width / 2, view.Height / 2);
        context.scale(view.PIXELS_METER, -view.PIXELS_METER);
        function transformContext(state) {
            if (state.BaseState == null) {
                context.scale(state.Scale.x, state.Scale.y);
                context.translate(state.Transition.x, state.Transition.y);
                context.rotate(state.Rotation);
                return;
            }
            transformContext(state.BaseState);
            context.translate(state.Transition.x, state.Transition.y);
            context.rotate(state.Rotation);
            context.scale(state.Scale.x, state.Scale.y);
        }
        transformContext(this.Node);
    }
    ConvertScreenVector(movement) {
        let view = this._view;
        let node = this.Node;
        let scale;
        if (node.BaseState)
            scale = node.BaseState.TotalScale;
        else
            scale = node.TotalScale;
        movement = new Vector_1.Vector(movement.x / view.PIXELS_METER, -movement.y / view.PIXELS_METER);
        movement = new Vector_1.Vector(movement.x / scale.x, movement.y / scale.y);
        movement = movement.Rotate(-node.TotalRotation);
        return movement;
    }
}
exports.Camera = Camera;


/***/ }),

/***/ "./src/engine/core/Component.ts":
/*!**************************************!*\
  !*** ./src/engine/core/Component.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
class Component {
    constructor() {
        this.priority = 1;
        this.Started = false;
    }
    get Priority() {
        return this.priority;
    }
    set Priority(v) {
        if (this.Priority == v)
            return;
        this.Priority = v;
        if (this.PriorityChanged)
            this.PriorityChanged();
    }
    OnStart() { }
}
exports.Component = Component;


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
const Point_1 = __webpack_require__(/*! ../primitives/Point */ "./src/engine/primitives/Point.ts");
class Binding {
    constructor(node, handle, passEventDown) {
        this.isCaptured = false;
        this.isIn = false;
        this.node = node;
        this.handle = handle;
        this.passEventDown = passEventDown;
    }
}
class SceneBinding {
    constructor() {
        this.movement = new Vector_1.Vector(0, 0);
        this.lastState = { key: "none" };
        this.elements = [];
    }
    Reset() {
        this.movement = new Vector_1.Vector(0, 0);
        this.lastState = { key: "none" };
    }
    Resort() {
        this.elements = [...this.elements].sort((a, b) => b.node.Priority - a.node.Priority);
    }
}
class MouseContext {
    constructor() {
        this.scenesStack = [];
        this.scenes = {};
        this.isIn = null;
        this.isCaptured = null;
        this.Position = new Point_1.Point(0, 0);
    }
    setState(ks) {
        for (let s in this.scenes)
            this.scenes[s].lastState = ks;
    }
    ListenEvents(htmlElement) {
        htmlElement.addEventListener("mousedown", (e) => {
            this.HandleState({
                key: "down",
                Position: new Point_1.Point(e.x, e.y),
                Which: e.which
            });
        });
        htmlElement.addEventListener("mouseup", (e) => {
            this.HandleState({
                key: "up",
                Position: new Point_1.Point(e.x, e.y)
            });
        });
        htmlElement.addEventListener("wheel", (e) => {
            this.HandleState({
                key: "wheel",
                Delta: e.deltaY,
                Position: new Point_1.Point(e.x, e.y)
            });
        });
        htmlElement.addEventListener("mousemove", (e) => {
            this.HandleState({
                key: "move",
                Movement: new Vector_1.Vector(e.movementX, e.movementY),
                Position: new Point_1.Point(e.x, e.y)
            });
        });
    }
    HandleState(state) {
        this.Position = state.Position;
        for (let s in this.scenesStack) {
            let scene = this.scenesStack[s];
            let next = true;
            for (let b in scene.elements) {
                let binding = scene.elements[b];
                let primitive = binding.handle();
                let point = binding.node.Position == 'absolute' ? state.Position : binding.node.Camera.ConvertFromScreen(state.Position);
                if (primitive.IsPointIn(point)) {
                    if (this.isIn != null)
                        this.isIn.isIn = false;
                    this.isIn = binding;
                    this.isIn.isIn = true;
                    if (!binding.passEventDown) {
                        next = false;
                        break;
                    }
                }
            }
            if (!next)
                break;
        }
        switch (state.key) {
            case 'move': {
                for (let s in this.scenes)
                    this.scenes[s].movement = state.Movement;
                break;
            }
            case 'down': {
                this.setState(state);
                this.isCaptured = this.isIn;
                if (this.isIn != null)
                    this.isIn.isCaptured = true;
                break;
            }
            case 'up': {
                this.setState(state);
                if (this.isCaptured) {
                    this.isCaptured.isCaptured = false;
                    this.isCaptured = null;
                }
                break;
            }
            case 'wheel': {
                this.setState(state);
            }
        }
    }
    Resort(sceneId) {
        this.scenes[sceneId].Resort();
    }
    CaptureMouse(node, handle, passEventDown = false) {
        var scene = this.scenes[node.Scene.Priority];
        let bind = new Binding(node, handle, passEventDown);
        scene.elements.push(bind);
        scene.Resort();
        return () => {
            return new MouseState(scene.lastState, this.Position, scene.movement, bind.isCaptured, bind.isIn);
        };
    }
    HandleMouseByScene(id) {
        let scene = new SceneBinding();
        this.scenes[id] = scene;
        this.scenesStack.unshift(scene);
        return () => {
            scene.Reset();
        };
    }
}
exports.MouseContext = MouseContext;
class MouseState {
    constructor(keyState, position, movement, isC, isI) {
        this.IsCaptured = false;
        this.IsIn = false;
        this.KeyState = keyState;
        this.Position = position;
        this.Movement = movement;
        this.IsCaptured = isC;
        this.IsIn = isI;
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
    constructor(context, mouseContext, id) {
        this.sceneId = 0;
        this.ElementsOnScene = [];
        this.ShouldResort = false;
        this.Canvas = context;
        if (id)
            this.sceneId = id;
        if (mouseContext) {
            this._mouseContext = mouseContext;
            this.Context = new SceneContext_1.SceneContext(this, mouseContext);
            this.setMouseHandled = mouseContext.HandleMouseByScene(this.sceneId);
            return;
        }
        this._mouseContext = new MouseContext_1.MouseContext();
        this._mouseContext.ListenEvents(context.canvas);
        this.setMouseHandled = this._mouseContext.HandleMouseByScene(this.sceneId);
        this.Context = new SceneContext_1.SceneContext(this, this._mouseContext);
    }
    get Priority() {
        return this.sceneId;
    }
    Clear() {
        this.Canvas.clearRect(0, 0, this.Canvas.canvas.width, this.Canvas.canvas.height);
    }
    Redraw() {
        if (this.ShouldResort) {
            this._mouseContext.Resort(this.sceneId);
            this.Resort();
            this.ShouldResort = false;
        }
        this.Clear();
        this.ElementsOnScene.forEach(node => {
            if (!node.IsActive)
                return;
            this.Canvas.save();
            node.Style.Apply(this.Canvas);
            if (node.Position == 'relative')
                node.Camera.PrepareAxis();
            node.OnUpdate();
            this.Canvas.restore();
        });
        this.setMouseHandled();
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
const Point_1 = __webpack_require__(/*! ../primitives/Point */ "./src/engine/primitives/Point.ts");
const SceneElement_1 = __webpack_require__(/*! ./SceneElement */ "./src/engine/core/SceneElement.ts");
class SceneContext {
    constructor(scene, mouseContext) {
        this.PIXELS_METER = 45;
        this._scene = scene;
        this.Canvas = scene.Canvas;
        this._mouse = mouseContext;
        let root = new SceneElement_1.SceneElement(this);
        root.Position = 'absolute';
        root.Priority = -10000;
        this.AddElement(root);
        this._root = root;
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
        return new Point_1.Point(0, 0);
    }
    get LeftBottom() {
        return new Point_1.Point(0, this.Height);
    }
    get RightTop() {
        return new Point_1.Point(this.Width, 0);
    }
    get RightBottom() {
        return new Point_1.Point(this.Width, this.Height);
    }
    get Priority() {
        return this._scene.Priority;
    }
    get Root() {
        return this._root;
    }
    PriorityChanged() {
        this._scene.ShouldResort = true;
    }
    AddElement(element) {
        let elementsToAdd = [element];
        let i = 0;
        do {
            let current = elementsToAdd[i];
            current.Children.forEach(e => elementsToAdd.push(e));
            i++;
        } while (i <= elementsToAdd.length - 1);
        elementsToAdd.forEach(e => {
            this._scene.ElementsOnScene.push(e);
            e.IsOnScene = true;
        });
    }
    RemoveElement(element) {
        let elementsToRemove = [element];
        let i = 0;
        do {
            let current = elementsToRemove[i];
            current.Children.forEach(e => elementsToRemove.push(e));
            i++;
        } while (i <= elementsToRemove.length - 1);
        this._scene.ElementsOnScene =
            this._scene.ElementsOnScene
                .filter(e => !(elementsToRemove.some(remove => remove == e)));
        elementsToRemove.forEach(e => e.IsOnScene = false);
    }
    CaptureMouse(node, map) {
        return this._mouse.CaptureMouse(node, map);
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
const Style_1 = __webpack_require__(/*! ./Style */ "./src/engine/core/Style.ts");
const Camera_1 = __webpack_require__(/*! ./Camera */ "./src/engine/core/Camera.ts");
const BaseState_1 = __webpack_require__(/*! ./BaseState */ "./src/engine/core/BaseState.ts");
class SceneElement extends BaseState_1.BaseState {
    constructor(view) {
        super();
        this.isOnScene = false;
        this.IsActive = true;
        this.Position = "relative";
        this.priority = 1;
        this.parent = null;
        this.children = [];
        this.components = [];
        this.Style = new Style_1.Style();
        this._view = view;
    }
    get Scene() {
        return this._view;
    }
    get IsOnScene() {
        return this.isOnScene;
    }
    set IsOnScene(val) {
        if (this._view.ElementsOnScene.some(e => e == this)) {
            if (!val)
                throw "You can't set <IsOnScene> property to false, when element is on scene";
            this.isOnScene = true;
        }
        else {
            if (val)
                throw "You can't set <IsOnScene> property to true, when element isn't on scene";
            this.isOnScene = false;
        }
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
    get Components() {
        return [...this.components];
    }
    get Camera() {
        return new Camera_1.Camera(this, this.Scene);
    }
    AddChild(element) {
        if (element.Parent != null)
            element.Parent.RemoveChild(element, false);
        element.BaseState = this;
        element.Style.Copy(this.Style);
        element.parent = this;
        if (this.isOnScene && !element.isOnScene)
            this._view.AddElement(element);
        this.children.push(element);
        return this;
    }
    RemoveChild(element, removeFromScene) {
        if (!this.children.some(e => e == element))
            throw "Unable to remove. Element is not child element";
        this.children = this.children.filter(e => e != element);
        if (removeFromScene)
            this._view.RemoveElement(element);
    }
    AddComponent(component) {
        component.PriorityChanged = this.ResortComponents;
        this.components.push(component);
        this.ResortComponents();
        return this;
    }
    ResortComponents() {
        this.components = this.Components.sort((a, b) => b.Priority - a.Priority);
    }
    OnUpdate() {
        this.components.forEach(c => {
            if (!c.Started) {
                c.OnStart();
                c.Started = true;
            }
            c.OnUpdate();
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
    Copy(style) {
        var _a, _b, _c, _d, _e;
        this.fillStyle = (_a = this.fillStyle) !== null && _a !== void 0 ? _a : style.fillStyle;
        this.lineWidth = (_b = this.lineWidth) !== null && _b !== void 0 ? _b : style.lineWidth;
        this.pointRadius = (_c = this.pointRadius) !== null && _c !== void 0 ? _c : style.pointRadius;
        this.strokeStyle = (_d = this.strokeStyle) !== null && _d !== void 0 ? _d : style.strokeStyle;
        this.textAlign = (_e = this.textAlign) !== null && _e !== void 0 ? _e : style.textAlign;
    }
    Apply(context) {
        var _a, _b, _c, _d;
        context.fillStyle = (_a = this.fillStyle) !== null && _a !== void 0 ? _a : "black";
        context.strokeStyle = (_b = this.strokeStyle) !== null && _b !== void 0 ? _b : "black";
        context.lineWidth = (_c = this.lineWidth) !== null && _c !== void 0 ? _c : 0.5;
        context.textAlign = (_d = this.textAlign) !== null && _d !== void 0 ? _d : 'start';
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
        let scene = new Scene_1.Scene(context, this.Mouse, this.scenes.length);
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
class DragDropCom extends Component_1.Component {
    constructor(node, map) {
        super();
        this.map = map;
        this.node = node;
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
            let vector = this.node.Camera.ConvertScreenVector(mouseState.Movement);
            this.node.Transition = this.node.Transition.Add(vector);
        });
    }
    OnUpdate() {
        let state = this.map();
        this.sm.CheckState(state);
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
class DrawEllipsCom extends Component_1.Component {
    constructor(node, map) {
        super();
        this.node = node;
        this.map = map;
    }
    OnUpdate() {
        var _a;
        let e = this.map();
        let context = (_a = this.node.Scene) === null || _a === void 0 ? void 0 : _a.Canvas;
        if (!context)
            return;
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
const Straight_Line_1 = __webpack_require__(/*! ../primitives/Straight-Line */ "./src/engine/primitives/Straight-Line.ts");
class DrawLineCom extends Component_1.Component {
    constructor(node, map) {
        super();
        this.node = node;
        this.map = map;
    }
    OnUpdate() {
        let camera = this.node.Camera;
        let line = this.map();
        let view = this.node.Scene;
        if (!view)
            return;
        let screenLineP = camera.Convert(line.Point);
        if (!screenLineP)
            return;
        let screenLineV = line.DirectionVector.GetRotatedUnit(this.node.TotalRotation);
        let screenLine = Straight_Line_1.StraightLine.FromPointAndVector(screenLineP, screenLineV);
        let hpg = (p) => screenLine.HalfPlane(p) == 1;
        let hpl = (p) => screenLine.HalfPlane(p) == -1;
        if ((hpg(view.LeftTop) && hpg(view.LeftBottom) && hpg(view.RightTop) && hpg(view.RightBottom))
            || (hpl(view.LeftTop) && hpl(view.LeftBottom) && hpl(view.RightTop) && hpl(view.RightBottom)))
            return;
        view.Canvas.beginPath();
        if (screenLine.DirectionVector.x == 0) {
            view.Canvas.moveTo(Math.abs(screenLine.C), 0);
            view.Canvas.lineTo(Math.abs(screenLine.C), view.Height);
            view.Canvas.stroke();
        }
        let startX = 0, startY = screenLine.DefineY(startX);
        let endX = view.Width, endY = screenLine.DefineY(endX);
        view.Canvas.moveTo(startX, startY);
        view.Canvas.lineTo(endX, endY);
        view.Canvas.stroke();
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
const Component_1 = __webpack_require__(/*! ../core/Component */ "./src/engine/core/Component.ts");
class DrawPointCom extends Component_1.Component {
    constructor(node, map) {
        super();
        this.node = node;
        this.map = map;
    }
    OnUpdate() {
        let point = this.map();
        if (this.node.Position == "absolute") {
            let camera = this.node.Camera;
            let p = camera.Convert(point);
            if (p)
                this.DrawPoint(p);
        }
        else {
            this.DrawPoint(point);
        }
    }
    DrawPoint(p) {
        var _a, _b;
        let context = (_a = this.node.Scene) === null || _a === void 0 ? void 0 : _a.Canvas;
        if (!context)
            return;
        let style = this.node.Style;
        let radius = (_b = style.pointRadius) !== null && _b !== void 0 ? _b : 0.3;
        context.beginPath();
        context.arc(p.x, p.y, radius, 0, 2 * Math.PI, true);
        context.stroke();
        context.fill();
    }
}
exports.DrawPointCom = DrawPointCom;


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
class WheelScaleCom extends Component_1.Component {
    constructor(node, map) {
        super();
        this.map = map;
        this.node = node;
    }
    OnUpdate() {
        let state = this.map();
        if (!state.IsIn || state.KeyState.key != 'wheel')
            return;
        let delta = state.KeyState.Delta;
        let s = this.node.Scale;
        if (delta > 0)
            this.node.Scale = s.Product(1.1);
        else if (delta < 0)
            this.node.Scale = s.Product(0.9);
    }
}
exports.WheelScaleCom = WheelScaleCom;


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
        this.a = a;
        this.b = b;
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
const Complex_1 = __webpack_require__(/*! ../../helpers/Complex */ "./src/helpers/Complex.ts");
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
        angle += this.Angle;
        return new Vector(Math.cos(angle), Math.sin(angle));
    }
    Rotate(angle) {
        let v = new Vector(Math.cos(angle), Math.sin(angle));
        let complex = new Complex_1.Complex(this.x, this.y);
        let result = complex.Mul(new Complex_1.Complex(v.x, v.y));
        return new Vector(result.x, result.y);
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

/***/ "./src/helpers/Complex.ts":
/*!********************************!*\
  !*** ./src/helpers/Complex.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Complex = void 0;
class Complex {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    Mod() {
        var t = this.x * this.x + this.y * this.y;
        return Math.sqrt(t);
    }
    Arg() {
        if (this.x > 0 && this.y >= 0)
            return Math.atan(this.y / this.x);
        else if (this.x < 0)
            return Math.atan(this.y / this.x) + Math.PI;
        else if (this.x > 0 && this.y < 0)
            return Math.atan(this.y / this.x) + 2 * Math.PI;
        else if (this.x == 0 && this.y > 0)
            return Math.PI / 2;
        else if (this.x == 0 && this.y < 0)
            return 3 * Math.PI / 2;
        else
            return 0;
    }
    Mul(obj) {
        var r1 = this.Mod(), r2 = obj.Mod();
        var p1 = this.Arg(), p2 = obj.Arg();
        var u = r1 * r2 * Math.cos(p1 + p2);
        var v = r1 * r2 * Math.sin(p1 + p2);
        return new Complex(u, v);
    }
}
exports.Complex = Complex;


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
const Grid_1 = __webpack_require__(/*! ./grid/Grid */ "./src/sample/grid/Grid.ts");
const Planet_1 = __webpack_require__(/*! ./nodes/Planet */ "./src/sample/nodes/Planet.ts");
const Vector_1 = __webpack_require__(/*! ../engine/primitives/Vector */ "./src/engine/primitives/Vector.ts");
const PerspectiveCom_1 = __webpack_require__(/*! ./components/PerspectiveCom */ "./src/sample/components/PerspectiveCom.ts");
const SatelliteCom_1 = __webpack_require__(/*! ./components/SatelliteCom */ "./src/sample/components/SatelliteCom.ts");
const SceneElement_1 = __webpack_require__(/*! ../engine/core/SceneElement */ "./src/engine/core/SceneElement.ts");
const TransitionCom_1 = __webpack_require__(/*! ./components/TransitionCom */ "./src/sample/components/TransitionCom.ts");
const DragDropCom_1 = __webpack_require__(/*! ../engine/general-components/DragDropCom */ "./src/engine/general-components/DragDropCom.ts");
const Ellips_1 = __webpack_require__(/*! ../engine/primitives/Ellips */ "./src/engine/primitives/Ellips.ts");
const DrawEllipsCom_1 = __webpack_require__(/*! ../engine/general-components/DrawEllipsCom */ "./src/engine/general-components/DrawEllipsCom.ts");
const Rectangle_1 = __webpack_require__(/*! ../engine/primitives/Rectangle */ "./src/engine/primitives/Rectangle.ts");
const WheelScaleCom_1 = __webpack_require__(/*! ../engine/general-components/WheelScaleCom */ "./src/engine/general-components/WheelScaleCom.ts");
const ViewPort_1 = __webpack_require__(/*! ../engine/core/ViewPort */ "./src/engine/core/ViewPort.ts");
const RedrawOnChangeCom_1 = __webpack_require__(/*! ./components/RedrawOnChangeCom */ "./src/sample/components/RedrawOnChangeCom.ts");
function Main() {
    let viewport = new ViewPort_1.ViewPort("viewport");
    let back = viewport.AddScene();
    let grid = new Grid_1.Grid(back);
    back.AddElement(grid);
    let front = viewport.AddScene();
    let rootMouse = front.CaptureMouse(front.Root, () => new Rectangle_1.Rectangle(0, 0, front.Width, front.Height));
    front.Root
        .AddComponent(new DragDropCom_1.DragDropCom(front.Root, rootMouse))
        .AddComponent(new WheelScaleCom_1.WheelScaleCom(front.Root, rootMouse))
        .AddComponent(new DragDropCom_1.DragDropCom(grid, rootMouse))
        .AddComponent(new WheelScaleCom_1.WheelScaleCom(grid, rootMouse))
        .AddComponent(new RedrawOnChangeCom_1.RedrawOnChange(back, rootMouse));
    let pos = new Vector_1.Vector(-6, -6);
    let start = new Vector_1.Vector(-6, -6);
    for (let i = 0; i < 1000; i++) {
        if (i % 31 == 0) {
            start = start.Add(new Vector_1.Vector(0, 1));
            pos = new Vector_1.Vector(start.x, start.y);
        }
        pos = pos.Add(new Vector_1.Vector(1, 0));
        let sun = new SceneElement_1.SceneElement(front);
        sun.Style.pointRadius = 1.5;
        sun.Style.lineWidth = 0.05;
        sun.Style.fillStyle = 'yellow';
        sun.Style.strokeStyle = 'orange';
        let sunMouse = front.CaptureMouse(sun, () => new Ellips_1.Ellips(0, 0, 1.5, 1.5));
        sun.Scale = new Vector_1.Vector(0.2, 0.2);
        sun.Transition = pos;
        let earth = new Planet_1.Planet(front, "Earth", new Vector_1.Vector(5, 1.5), 'blue');
        let moon = new Planet_1.Planet(front, "Moon", new Vector_1.Vector(2, 0.5), 'gray');
        moon.Style.pointRadius = 0.3;
        front.Root.AddChild(sun
            .AddComponent(new DrawEllipsCom_1.DrawEllipsCom(sun, () => new Ellips_1.Ellips(0, 0, 1.5, 1.5)))
            .AddComponent(new DragDropCom_1.DragDropCom(sun, sunMouse))
            .AddComponent(new SatelliteCom_1.SatelliteCom(sun))
            .AddChild(earth
            .AddComponent(new TransitionCom_1.TransitionCom(earth))
            .AddComponent(new SatelliteCom_1.SatelliteCom(earth))
            .AddComponent(new PerspectiveCom_1.PerspectiveCom(earth, 6))
            .AddChild(moon
            .AddComponent(new TransitionCom_1.TransitionCom(moon, -0.003))
            .AddComponent(new SatelliteCom_1.SatelliteCom(moon)))));
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
    constructor(node, planeAngle) {
        super();
        this.node = node;
        this.originalScale = node.Scale;
        this.planeAngle = planeAngle;
    }
    OnUpdate() {
        let view = this.node.Scene;
        if (!view)
            return;
        let nodeY = this.node.Transition.y;
        if (nodeY == 0) {
            this.node.orbitYCoefficient = 1;
        }
        else if (nodeY >= 0) {
            this.node.orbitYCoefficient = 1 - Math.abs(nodeY) / this.planeAngle;
        }
        else {
            this.node.orbitYCoefficient = 1 + Math.abs(nodeY) / this.planeAngle;
        }
        this.node.Scale = this.originalScale.Product(this.node.orbitYCoefficient);
    }
}
exports.PerspectiveCom = PerspectiveCom;


/***/ }),

/***/ "./src/sample/components/RedrawOnChangeCom.ts":
/*!****************************************************!*\
  !*** ./src/sample/components/RedrawOnChangeCom.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.RedrawOnChange = void 0;
const Component_1 = __webpack_require__(/*! ../../engine/core/Component */ "./src/engine/core/Component.ts");
class RedrawOnChange extends Component_1.Component {
    constructor(viewToRedraw, map) {
        super();
        this.view = viewToRedraw;
        this.map = map;
    }
    OnUpdate() {
        let state = this.map();
        if (state.IsCaptured || (state.IsIn && state.KeyState.key == 'wheel'))
            this.view.Redraw();
    }
}
exports.RedrawOnChange = RedrawOnChange;


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
class SatelliteCom extends Component_1.Component {
    constructor(node) {
        super();
        this.node = node;
    }
    OnUpdate() {
        this.node.Priority = -this.node.TotalTransition.y;
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
    constructor(node, speed) {
        super();
        this.transition = 0;
        this.node = node;
        this.increment = speed !== null && speed !== void 0 ? speed : 0.005;
    }
    OnUpdate() {
        let altitude = this.node.orbitEllips;
        let kx = altitude.x * this.node.orbitYCoefficient;
        let ky = -this.node.orbitYCoefficient * altitude.y;
        this.transition += this.node.orbitYCoefficient * this.increment;
        this.node.Transition = new Vector_1.Vector(kx * Math.sin(this.transition), ky * Math.cos(this.transition));
    }
}
exports.TransitionCom = TransitionCom;


/***/ }),

/***/ "./src/sample/grid/Grid.ts":
/*!*********************************!*\
  !*** ./src/sample/grid/Grid.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Grid = void 0;
const SceneElement_1 = __webpack_require__(/*! ../../engine/core/SceneElement */ "./src/engine/core/SceneElement.ts");
const Point_1 = __webpack_require__(/*! ../../engine/primitives/Point */ "./src/engine/primitives/Point.ts");
const Straight_Line_1 = __webpack_require__(/*! ../../engine/primitives/Straight-Line */ "./src/engine/primitives/Straight-Line.ts");
const DrawLineCom_1 = __webpack_require__(/*! ../../engine/general-components/DrawLineCom */ "./src/engine/general-components/DrawLineCom.ts");
const XAxis_1 = __webpack_require__(/*! ./XAxis */ "./src/sample/grid/XAxis.ts");
const YAxis_1 = __webpack_require__(/*! ./YAxis */ "./src/sample/grid/YAxis.ts");
class Grid extends SceneElement_1.SceneElement {
    constructor(view) {
        super(view);
        this.Priority = -10000;
        this.Position = "absolute";
        this.Style.lineWidth = 0.5;
        this.AddChild(new XAxis_1.XAxis(view));
        this.AddChild(new YAxis_1.YAxis(view));
        for (let i = 1; i < view.Width / view.PIXELS_METER; i++) {
            this.AddComponent(new DrawLineCom_1.DrawLineCom(this, () => new Straight_Line_1.StraightLine(new Point_1.Point(i, 0), new Point_1.Point(i, 1))));
            this.AddComponent(new DrawLineCom_1.DrawLineCom(this, () => new Straight_Line_1.StraightLine(new Point_1.Point(-i, 0), new Point_1.Point(-i, 1))));
            this.AddComponent(new DrawLineCom_1.DrawLineCom(this, () => new Straight_Line_1.StraightLine(new Point_1.Point(0, i), new Point_1.Point(1, i))));
            this.AddComponent(new DrawLineCom_1.DrawLineCom(this, () => new Straight_Line_1.StraightLine(new Point_1.Point(0, -i), new Point_1.Point(1, -i))));
        }
    }
}
exports.Grid = Grid;


/***/ }),

/***/ "./src/sample/grid/XAxis.ts":
/*!**********************************!*\
  !*** ./src/sample/grid/XAxis.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.XAxis = void 0;
const SceneElement_1 = __webpack_require__(/*! ../../engine/core/SceneElement */ "./src/engine/core/SceneElement.ts");
const DrawLineCom_1 = __webpack_require__(/*! ../../engine/general-components/DrawLineCom */ "./src/engine/general-components/DrawLineCom.ts");
const Straight_Line_1 = __webpack_require__(/*! ../../engine/primitives/Straight-Line */ "./src/engine/primitives/Straight-Line.ts");
const Point_1 = __webpack_require__(/*! ../../engine/primitives/Point */ "./src/engine/primitives/Point.ts");
class XAxis extends SceneElement_1.SceneElement {
    constructor(view) {
        super(view);
        this.Priority = -10000;
        this.Position = 'absolute';
        this.Style.strokeStyle = "red";
        this.Style.pointRadius = 5;
        this.Style.lineWidth = 1;
        let map = () => {
            return new Straight_Line_1.StraightLine(new Point_1.Point(0, 0), new Point_1.Point(1, 0));
        };
        this.AddComponent(new DrawLineCom_1.DrawLineCom(this, map));
    }
}
exports.XAxis = XAxis;


/***/ }),

/***/ "./src/sample/grid/YAxis.ts":
/*!**********************************!*\
  !*** ./src/sample/grid/YAxis.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.YAxis = void 0;
const SceneElement_1 = __webpack_require__(/*! ../../engine/core/SceneElement */ "./src/engine/core/SceneElement.ts");
const DrawLineCom_1 = __webpack_require__(/*! ../../engine/general-components/DrawLineCom */ "./src/engine/general-components/DrawLineCom.ts");
const Straight_Line_1 = __webpack_require__(/*! ../../engine/primitives/Straight-Line */ "./src/engine/primitives/Straight-Line.ts");
const Point_1 = __webpack_require__(/*! ../../engine/primitives/Point */ "./src/engine/primitives/Point.ts");
class YAxis extends SceneElement_1.SceneElement {
    constructor(view) {
        super(view);
        this.Priority = -10000;
        this.Position = "absolute";
        this.Style.lineWidth = 1;
        this.Style.strokeStyle = "blue";
        this.AddComponent(new DrawLineCom_1.DrawLineCom(this, () => new Straight_Line_1.StraightLine(new Point_1.Point(0, 0), new Point_1.Point(0, 1))));
    }
}
exports.YAxis = YAxis;


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
const DrawPointCom_1 = __webpack_require__(/*! ../../engine/general-components/DrawPointCom */ "./src/engine/general-components/DrawPointCom.ts");
const Point_1 = __webpack_require__(/*! ../../engine/primitives/Point */ "./src/engine/primitives/Point.ts");
class Planet extends SceneElement_1.SceneElement {
    constructor(view, name, orbitEllips, color) {
        super(view);
        this.orbitYCoefficient = 1;
        this.orbitEllips = orbitEllips;
        this.Name = name;
        this.Style.fillStyle = color !== null && color !== void 0 ? color : "red";
        this.Style.pointRadius = 1;
        this.Style.lineWidth = 0.1;
        this.AddComponent(new DrawPointCom_1.DrawPointCom(this, () => new Point_1.Point(0, 0)));
    }
}
exports.Planet = Planet;


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map