(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./examples/index.ts":
/*!***************************!*\
  !*** ./examples/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Examples = void 0;
var HorizontalRuler_1 = __webpack_require__(/*! ../src/Designer/plugins/HorizontalRuler */ "./src/Designer/plugins/HorizontalRuler.ts");
var VerticalRuler_1 = __webpack_require__(/*! ../src/Designer/plugins/VerticalRuler */ "./src/Designer/plugins/VerticalRuler.ts");
var VectorDesigner_1 = __webpack_require__(/*! ../src/Designer/VectorDesigner */ "./src/Designer/VectorDesigner.ts");
var AnchorControl_1 = __webpack_require__(/*! ../src/Designer/Views/AnchorControl */ "./src/Designer/Views/AnchorControl.ts");
var PolygonControl_1 = __webpack_require__(/*! ../src/Designer/Views/PolygonControl */ "./src/Designer/Views/PolygonControl.ts");
var Examples = (function () {
    function Examples() {
    }
    Examples.prototype.main = function () {
        return __awaiter(this, void 0, void 0, function () {
            var div, designer, hrulercanvas, vrulercanvas, hRuler, vRuler, anthors, segments, key, key, btnBuild;
            return __generator(this, function (_a) {
                div = document.getElementById("example");
                designer = new VectorDesigner_1.VectorDesigner(div);
                hrulercanvas = document.getElementById("HorizontalRulerCanvas");
                vrulercanvas = document.getElementById("VerticalRulerCanvas");
                hRuler = new HorizontalRuler_1.HorizontalRuler(designer, hrulercanvas);
                vRuler = new VerticalRuler_1.VerticalRuler(designer, vrulercanvas);
                designer.run();
                anthors = {};
                anthors[0] = new AnchorControl_1.AnchorControl(designer, -20, -10);
                anthors[1] = new AnchorControl_1.AnchorControl(designer, 0, 0);
                anthors[2] = new AnchorControl_1.AnchorControl(designer, 0, 20);
                anthors[3] = new AnchorControl_1.AnchorControl(designer, 20, 20);
                segments = {};
                segments[0] = new PolygonControl_1.PolygonControl(designer, anthors[0], anthors[1]);
                segments[1] = new PolygonControl_1.PolygonControl(designer, anthors[2], anthors[1]);
                segments[2] = new PolygonControl_1.PolygonControl(designer, anthors[1], anthors[3]);
                for (key in anthors) {
                    anthors[key].update();
                    designer.add(anthors[key]);
                }
                for (key in segments) {
                    segments[key].update();
                    designer.add(segments[key]);
                }
                designer.onZoom.add(function (e) {
                    var scale = document.getElementById("scale");
                    scale.innerText = e + '%';
                }, this);
                btnBuild = document.getElementById("btnBuild");
                if (btnBuild) {
                    btnBuild.onclick = function () {
                        var result = designer.toArrray();
                        var output = document.getElementById("output");
                        var outputText = '';
                        for (var _i = 0, result_1 = result; _i < result_1.length; _i++) {
                            var data = result_1[_i];
                            outputText += JSON.stringify(data);
                            outputText += '\r\n';
                        }
                        output.textContent = outputText;
                    };
                }
                return [2];
            });
        });
    };
    return Examples;
}());
exports.Examples = Examples;
new Examples().main();


/***/ }),

/***/ "./node_modules/signals/dist/signals.js":
/*!**********************************************!*\
  !*** ./node_modules/signals/dist/signals.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*jslint onevar:true, undef:true, newcap:true, regexp:true, bitwise:true, maxerr:50, indent:4, white:false, nomen:false, plusplus:false */
/*global define:false, require:false, exports:false, module:false, signals:false */

/** @license
 * JS Signals <http://millermedeiros.github.com/js-signals/>
 * Released under the MIT license
 * Author: Miller Medeiros
 * Version: 1.0.0 - Build: 268 (2012/11/29 05:48 PM)
 */

(function(global){

    // SignalBinding -------------------------------------------------
    //================================================================

    /**
     * Object that represents a binding between a Signal and a listener function.
     * <br />- <strong>This is an internal constructor and shouldn't be called by regular users.</strong>
     * <br />- inspired by Joa Ebert AS3 SignalBinding and Robert Penner's Slot classes.
     * @author Miller Medeiros
     * @constructor
     * @internal
     * @name SignalBinding
     * @param {Signal} signal Reference to Signal object that listener is currently bound to.
     * @param {Function} listener Handler function bound to the signal.
     * @param {boolean} isOnce If binding should be executed just once.
     * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
     * @param {Number} [priority] The priority level of the event listener. (default = 0).
     */
    function SignalBinding(signal, listener, isOnce, listenerContext, priority) {

        /**
         * Handler function bound to the signal.
         * @type Function
         * @private
         */
        this._listener = listener;

        /**
         * If binding should be executed just once.
         * @type boolean
         * @private
         */
        this._isOnce = isOnce;

        /**
         * Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @memberOf SignalBinding.prototype
         * @name context
         * @type Object|undefined|null
         */
        this.context = listenerContext;

        /**
         * Reference to Signal object that listener is currently bound to.
         * @type Signal
         * @private
         */
        this._signal = signal;

        /**
         * Listener priority
         * @type Number
         * @private
         */
        this._priority = priority || 0;
    }

    SignalBinding.prototype = {

        /**
         * If binding is active and should be executed.
         * @type boolean
         */
        active : true,

        /**
         * Default parameters passed to listener during `Signal.dispatch` and `SignalBinding.execute`. (curried parameters)
         * @type Array|null
         */
        params : null,

        /**
         * Call listener passing arbitrary parameters.
         * <p>If binding was added using `Signal.addOnce()` it will be automatically removed from signal dispatch queue, this method is used internally for the signal dispatch.</p>
         * @param {Array} [paramsArr] Array of parameters that should be passed to the listener
         * @return {*} Value returned by the listener.
         */
        execute : function (paramsArr) {
            var handlerReturn, params;
            if (this.active && !!this._listener) {
                params = this.params? this.params.concat(paramsArr) : paramsArr;
                handlerReturn = this._listener.apply(this.context, params);
                if (this._isOnce) {
                    this.detach();
                }
            }
            return handlerReturn;
        },

        /**
         * Detach binding from signal.
         * - alias to: mySignal.remove(myBinding.getListener());
         * @return {Function|null} Handler function bound to the signal or `null` if binding was previously detached.
         */
        detach : function () {
            return this.isBound()? this._signal.remove(this._listener, this.context) : null;
        },

        /**
         * @return {Boolean} `true` if binding is still bound to the signal and have a listener.
         */
        isBound : function () {
            return (!!this._signal && !!this._listener);
        },

        /**
         * @return {boolean} If SignalBinding will only be executed once.
         */
        isOnce : function () {
            return this._isOnce;
        },

        /**
         * @return {Function} Handler function bound to the signal.
         */
        getListener : function () {
            return this._listener;
        },

        /**
         * @return {Signal} Signal that listener is currently bound to.
         */
        getSignal : function () {
            return this._signal;
        },

        /**
         * Delete instance properties
         * @private
         */
        _destroy : function () {
            delete this._signal;
            delete this._listener;
            delete this.context;
        },

        /**
         * @return {string} String representation of the object.
         */
        toString : function () {
            return '[SignalBinding isOnce:' + this._isOnce +', isBound:'+ this.isBound() +', active:' + this.active + ']';
        }

    };


/*global SignalBinding:false*/

    // Signal --------------------------------------------------------
    //================================================================

    function validateListener(listener, fnName) {
        if (typeof listener !== 'function') {
            throw new Error( 'listener is a required param of {fn}() and should be a Function.'.replace('{fn}', fnName) );
        }
    }

    /**
     * Custom event broadcaster
     * <br />- inspired by Robert Penner's AS3 Signals.
     * @name Signal
     * @author Miller Medeiros
     * @constructor
     */
    function Signal() {
        /**
         * @type Array.<SignalBinding>
         * @private
         */
        this._bindings = [];
        this._prevParams = null;

        // enforce dispatch to aways work on same context (#47)
        var self = this;
        this.dispatch = function(){
            Signal.prototype.dispatch.apply(self, arguments);
        };
    }

    Signal.prototype = {

        /**
         * Signals Version Number
         * @type String
         * @const
         */
        VERSION : '1.0.0',

        /**
         * If Signal should keep record of previously dispatched parameters and
         * automatically execute listener during `add()`/`addOnce()` if Signal was
         * already dispatched before.
         * @type boolean
         */
        memorize : false,

        /**
         * @type boolean
         * @private
         */
        _shouldPropagate : true,

        /**
         * If Signal is active and should broadcast events.
         * <p><strong>IMPORTANT:</strong> Setting this property during a dispatch will only affect the next dispatch, if you want to stop the propagation of a signal use `halt()` instead.</p>
         * @type boolean
         */
        active : true,

        /**
         * @param {Function} listener
         * @param {boolean} isOnce
         * @param {Object} [listenerContext]
         * @param {Number} [priority]
         * @return {SignalBinding}
         * @private
         */
        _registerListener : function (listener, isOnce, listenerContext, priority) {

            var prevIndex = this._indexOfListener(listener, listenerContext),
                binding;

            if (prevIndex !== -1) {
                binding = this._bindings[prevIndex];
                if (binding.isOnce() !== isOnce) {
                    throw new Error('You cannot add'+ (isOnce? '' : 'Once') +'() then add'+ (!isOnce? '' : 'Once') +'() the same listener without removing the relationship first.');
                }
            } else {
                binding = new SignalBinding(this, listener, isOnce, listenerContext, priority);
                this._addBinding(binding);
            }

            if(this.memorize && this._prevParams){
                binding.execute(this._prevParams);
            }

            return binding;
        },

        /**
         * @param {SignalBinding} binding
         * @private
         */
        _addBinding : function (binding) {
            //simplified insertion sort
            var n = this._bindings.length;
            do { --n; } while (this._bindings[n] && binding._priority <= this._bindings[n]._priority);
            this._bindings.splice(n + 1, 0, binding);
        },

        /**
         * @param {Function} listener
         * @return {number}
         * @private
         */
        _indexOfListener : function (listener, context) {
            var n = this._bindings.length,
                cur;
            while (n--) {
                cur = this._bindings[n];
                if (cur._listener === listener && cur.context === context) {
                    return n;
                }
            }
            return -1;
        },

        /**
         * Check if listener was attached to Signal.
         * @param {Function} listener
         * @param {Object} [context]
         * @return {boolean} if Signal has the specified listener.
         */
        has : function (listener, context) {
            return this._indexOfListener(listener, context) !== -1;
        },

        /**
         * Add a listener to the signal.
         * @param {Function} listener Signal handler function.
         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
         */
        add : function (listener, listenerContext, priority) {
            validateListener(listener, 'add');
            return this._registerListener(listener, false, listenerContext, priority);
        },

        /**
         * Add listener to the signal that should be removed after first execution (will be executed only once).
         * @param {Function} listener Signal handler function.
         * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
         * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
         * @return {SignalBinding} An Object representing the binding between the Signal and listener.
         */
        addOnce : function (listener, listenerContext, priority) {
            validateListener(listener, 'addOnce');
            return this._registerListener(listener, true, listenerContext, priority);
        },

        /**
         * Remove a single listener from the dispatch queue.
         * @param {Function} listener Handler function that should be removed.
         * @param {Object} [context] Execution context (since you can add the same handler multiple times if executing in a different context).
         * @return {Function} Listener handler function.
         */
        remove : function (listener, context) {
            validateListener(listener, 'remove');

            var i = this._indexOfListener(listener, context);
            if (i !== -1) {
                this._bindings[i]._destroy(); //no reason to a SignalBinding exist if it isn't attached to a signal
                this._bindings.splice(i, 1);
            }
            return listener;
        },

        /**
         * Remove all listeners from the Signal.
         */
        removeAll : function () {
            var n = this._bindings.length;
            while (n--) {
                this._bindings[n]._destroy();
            }
            this._bindings.length = 0;
        },

        /**
         * @return {number} Number of listeners attached to the Signal.
         */
        getNumListeners : function () {
            return this._bindings.length;
        },

        /**
         * Stop propagation of the event, blocking the dispatch to next listeners on the queue.
         * <p><strong>IMPORTANT:</strong> should be called only during signal dispatch, calling it before/after dispatch won't affect signal broadcast.</p>
         * @see Signal.prototype.disable
         */
        halt : function () {
            this._shouldPropagate = false;
        },

        /**
         * Dispatch/Broadcast Signal to all listeners added to the queue.
         * @param {...*} [params] Parameters that should be passed to each handler.
         */
        dispatch : function (params) {
            if (! this.active) {
                return;
            }

            var paramsArr = Array.prototype.slice.call(arguments),
                n = this._bindings.length,
                bindings;

            if (this.memorize) {
                this._prevParams = paramsArr;
            }

            if (! n) {
                //should come after memorize
                return;
            }

            bindings = this._bindings.slice(); //clone array in case add/remove items during dispatch
            this._shouldPropagate = true; //in case `halt` was called before dispatch or during the previous dispatch.

            //execute all callbacks until end of the list or until a callback returns `false` or stops propagation
            //reverse loop since listeners with higher priority will be added at the end of the list
            do { n--; } while (bindings[n] && this._shouldPropagate && bindings[n].execute(paramsArr) !== false);
        },

        /**
         * Forget memorized arguments.
         * @see Signal.memorize
         */
        forget : function(){
            this._prevParams = null;
        },

        /**
         * Remove all bindings from signal and destroy any reference to external objects (destroy Signal object).
         * <p><strong>IMPORTANT:</strong> calling any method on the signal instance after calling dispose will throw errors.</p>
         */
        dispose : function () {
            this.removeAll();
            delete this._bindings;
            delete this._prevParams;
        },

        /**
         * @return {string} String representation of the object.
         */
        toString : function () {
            return '[Signal active:'+ this.active +' numListeners:'+ this.getNumListeners() +']';
        }

    };


    // Namespace -----------------------------------------------------
    //================================================================

    /**
     * Signals namespace
     * @namespace
     * @name signals
     */
    var signals = Signal;

    /**
     * Custom event broadcaster
     * @see Signal
     */
    // alias for backwards compatibility (see #gh-44)
    signals.Signal = Signal;



    //exports to multiple environments
    if(true){ //AMD
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () { return signals; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(this));


/***/ }),

/***/ "./src/Designer/Menus/ToolBar.ts":
/*!***************************************!*\
  !*** ./src/Designer/Menus/ToolBar.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ToolBar = void 0;
var AnchorControl_1 = __webpack_require__(/*! ../Views/AnchorControl */ "./src/Designer/Views/AnchorControl.ts");
var PolygonControl_1 = __webpack_require__(/*! ../Views/PolygonControl */ "./src/Designer/Views/PolygonControl.ts");
var Connector_1 = __webpack_require__(/*! ../Views/Connector */ "./src/Designer/Views/Connector.ts");
var ToolBar = (function () {
    function ToolBar(designer) {
        this.designer = designer;
        this.dom = document.createElement('div');
        this.dom.className = 'toolbar';
        this.btnConnectTo = this.createButton('icon-ATS');
        this.btnConnectTo.title = '建立新的线段';
        this.btnConnectTo.onclick = this.createObject.bind(this);
        this.dom.appendChild(this.btnConnectTo);
        this.btnDelete = this.createButton('icon-delete2');
        this.btnDelete.title = '删除对象';
        this.btnDelete.onclick = this.deleteObject.bind(this);
        this.dom.appendChild(this.btnDelete);
        this.btnSetting = this.createButton('icon-setting');
        this.btnSetting.title = '设置(未设置)';
        this.btnSetting.onclick = this.settingObject.bind(this);
        this.dom.appendChild(this.btnSetting);
        this.visible = false;
        this.designer.viewControl.onmove.add(function () {
        });
    }
    ToolBar.prototype.createObject = function () {
        var origin = this.designer.selected;
        if (origin instanceof AnchorControl_1.AnchorControl) {
            this.visible = false;
            this.designer.connector = new Connector_1.Connector(this.designer, origin);
        }
    };
    ToolBar.prototype.deleteObject = function () {
        this.visible = false;
        var origin = this.designer.selected;
        if (origin instanceof AnchorControl_1.AnchorControl) {
            this.visible = false;
            origin.dispose();
        }
        else if (origin instanceof PolygonControl_1.PolygonControl) {
            origin.dispose();
        }
    };
    ToolBar.prototype.settingObject = function () {
        this.visible = false;
    };
    ToolBar.prototype.setPosition = function (v) {
        this.dom.style.marginLeft = v.x + 'px';
        this.dom.style.marginTop = v.y + 'px';
    };
    Object.defineProperty(ToolBar.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (value) {
            this._visible = value;
            this.dom.style.display = value ? "" : "none";
            if (value) {
                if (this.designer.selected == null)
                    return;
                if (this.designer.selected instanceof AnchorControl_1.AnchorControl) {
                    this.btnConnectTo.style.display = '';
                    this.btnDelete.style.display = '';
                    this.btnSetting.style.display = '';
                }
                else {
                    this.btnConnectTo.style.display = 'none';
                    this.btnDelete.style.display = '';
                    this.btnSetting.style.display = '';
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    ToolBar.prototype.dispose = function () {
    };
    ToolBar.prototype.createButton = function (iconName) {
        var icon = document.createElement('span');
        icon.classList.add('icon');
        icon.classList.add('iconfont');
        icon.classList.add(iconName);
        var button = document.createElement('button');
        button.className = 'Button';
        button.appendChild(icon);
        return button;
    };
    return ToolBar;
}());
exports.ToolBar = ToolBar;


/***/ }),

/***/ "./src/Designer/Renderer.ts":
/*!**********************************!*\
  !*** ./src/Designer/Renderer.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = exports.RenderType = exports.TextAlign = void 0;
var Vector2_1 = __webpack_require__(/*! ../core/Vector2 */ "./src/core/Vector2.ts");
var TextAlign;
(function (TextAlign) {
    TextAlign[TextAlign["LEFT"] = 0] = "LEFT";
    TextAlign[TextAlign["CENTER"] = 1] = "CENTER";
    TextAlign[TextAlign["RIGHT"] = 2] = "RIGHT";
})(TextAlign = exports.TextAlign || (exports.TextAlign = {}));
var RenderType;
(function (RenderType) {
    RenderType[RenderType["STROKE"] = 1] = "STROKE";
    RenderType[RenderType["FILL"] = 2] = "FILL";
    RenderType[RenderType["ALL"] = 3] = "ALL";
})(RenderType = exports.RenderType || (exports.RenderType = {}));
var Renderer = (function () {
    function Renderer(canvas) {
        if (canvas) {
            this._canvas = canvas;
        }
        else {
            this._canvas = document.createElement("canvas");
        }
        this._context = this.canvas.getContext("2d");
        this._context.globalAlpha = 1.0;
        this._context.translate(0, 0);
        this._localOffset = new Vector2_1.Vector2(0.5, 0.5);
    }
    Renderer.prototype.apply = function (div) {
        div.appendChild(this.canvas);
    };
    Renderer.prototype.clear = function (color) {
        if (color === void 0) { color = '#A9A9A9'; }
        this._context.clearRect(0, 0, this._width, this._height);
    };
    Renderer.prototype.resize = function (width, height) {
        this._width = width;
        this._height = height;
        this.canvas.width = width;
        this.canvas.height = height;
        var ratio = this.getPixelRatio(this.context);
        this.canvas.style.width = width + 'px';
        this.canvas.style.height = height + 'px';
        this.canvas.width = width * ratio;
        this.canvas.height = height * ratio;
    };
    Renderer.prototype.getPixelRatio = function (context) {
        var backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio || 1;
        return (window.devicePixelRatio || 1) / backingStore;
    };
    ;
    Object.defineProperty(Renderer.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Renderer.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Renderer.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Renderer.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    Renderer.prototype.fillText = function (text, x, y, width, align) {
        var left = x;
        if (align === TextAlign.RIGHT) {
            var measure = this.context.measureText(text);
            if (width == null) {
                left = x - measure.width;
            }
            else {
                left = x + width - measure.width;
            }
        }
        else if (align === TextAlign.CENTER) {
            var measure = this.context.measureText(text);
            if (width == null) {
                left = x - measure.width / 2;
            }
            else {
                left = x + (width + measure.width) / 2;
            }
        }
        this.context.fillText(text, left + this._localOffset.x, y + this._localOffset.y);
    };
    Renderer.prototype.circle = function (x, y, radius, type) {
        this.context.beginPath();
        this.context.arc(x, y, radius, 0, Math.PI * 2, false);
        if (type === RenderType.ALL || type === RenderType.FILL) {
            this.context.fill();
        }
        if (type === RenderType.ALL || type === RenderType.STROKE) {
            this.context.stroke();
        }
    };
    Renderer.prototype.polygon = function (points, closed, type) {
        if (points == null || points.length == 0)
            return;
        this.context.beginPath();
        this.context.moveTo(points[0].x + this._localOffset.x, points[0].y + this._localOffset.y);
        for (var i = 1; i < points.length; i++) {
            this.context.lineTo(points[i].x + this._localOffset.x, points[i].y + this._localOffset.y);
        }
        if (closed) {
            this.context.closePath();
        }
        if (type === RenderType.ALL || type === RenderType.FILL) {
            this.context.fill();
        }
        if (type === RenderType.ALL || type === RenderType.STROKE) {
            this.context.stroke();
        }
    };
    Renderer.prototype.fillRectangle = function (x, y, width, height) {
        this.context.fillRect(x, y, width, height);
    };
    Renderer.prototype.strokeRectangle = function (x, y, width, height) {
        this.context.strokeRect(x, y, width, height);
    };
    Renderer.prototype.translateRotate = function (x, y, angle) {
        this.context.translate(x, y);
        this.context.rotate(angle / 180 * Math.PI);
        this.context.translate(-x, -y);
    };
    Renderer.prototype.line = function (x1, y1, x2, y2, lineWidth) {
        if (lineWidth === void 0) { lineWidth = 1; }
        if (lineWidth && lineWidth !== this.context.lineWidth) {
            this.context.lineWidth = lineWidth;
        }
        this.context.beginPath();
        this.context.moveTo(x1 + this._localOffset.x, y1 + this._localOffset.y);
        this.context.lineTo(x2 + this._localOffset.x, y2 + this._localOffset.y);
        this.context.stroke();
    };
    Renderer.prototype.fillPath = function (points, closed) {
        this.context.beginPath();
        this.context.moveTo(points[0].x + this._localOffset.x, points[0].y + this._localOffset.y);
        for (var i = 1; i < points.length; i++) {
            this.context.lineTo(points[i].x + this._localOffset.x, points[i].y + this._localOffset.y);
        }
        if (closed) {
            this.context.closePath();
        }
        this.context.fill();
    };
    Renderer.prototype.strokePath = function (points, closed) {
        this.context.beginPath();
        this.context.moveTo(points[0].x + this._localOffset.x, points[0].y + this._localOffset.y);
        for (var i = 1; i < points.length; i++) {
            this.context.lineTo(points[i].x + this._localOffset.x, points[i].y + this._localOffset.y);
        }
        if (closed) {
            this.context.closePath();
        }
        this.context.stroke();
    };
    Object.defineProperty(Renderer.prototype, "opacity", {
        get: function () {
            return this.context.globalAlpha;
        },
        set: function (v) {
            this.context.globalAlpha = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Renderer.prototype, "strokeColor", {
        get: function () {
            return this.context.strokeStyle;
        },
        set: function (v) {
            this.context.strokeStyle = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Renderer.prototype, "fillColor", {
        get: function () {
            return this.context.fillStyle;
        },
        set: function (v) {
            this.context.fillStyle = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Renderer.prototype, "lineWidth", {
        get: function () {
            return this.context.lineWidth;
        },
        set: function (v) {
            this.context.lineWidth = v;
        },
        enumerable: false,
        configurable: true
    });
    return Renderer;
}());
exports.Renderer = Renderer;


/***/ }),

/***/ "./src/Designer/VectorDesigner.ts":
/*!****************************************!*\
  !*** ./src/Designer/VectorDesigner.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VectorDesigner = void 0;
var signals = __webpack_require__(/*! signals */ "./node_modules/signals/dist/signals.js");
var Vector2_1 = __webpack_require__(/*! ../core/Vector2 */ "./src/core/Vector2.ts");
var Bounds_1 = __webpack_require__(/*! ./common/Bounds */ "./src/Designer/common/Bounds.ts");
var Renderer_1 = __webpack_require__(/*! ./Renderer */ "./src/Designer/Renderer.ts");
var ViewController_1 = __webpack_require__(/*! ./ViewController */ "./src/Designer/ViewController.ts");
var ToolBar_1 = __webpack_require__(/*! ./Menus/ToolBar */ "./src/Designer/Menus/ToolBar.ts");
var AnchorControl_1 = __webpack_require__(/*! ./Views/AnchorControl */ "./src/Designer/Views/AnchorControl.ts");
var PolygonControl_1 = __webpack_require__(/*! ./Views/PolygonControl */ "./src/Designer/Views/PolygonControl.ts");
var VectorDesigner = (function () {
    function VectorDesigner(div) {
        this._div = div;
        this._zoom = 100;
        this._children = [];
        this._onRender = new signals.Signal();
        this._onZoom = new signals.Signal();
        this._renderer = new Renderer_1.Renderer();
        this._viewControl = new ViewController_1.ViewController(this);
        this._runState = false;
        this._renderer.apply(div);
        this.resize();
        this._viewControl.onmove.add(this.moveTo, this);
        this._toolbar = new ToolBar_1.ToolBar(this);
        this._div.appendChild(this._toolbar.dom);
    }
    Object.defineProperty(VectorDesigner.prototype, "children", {
        get: function () {
            return this._children;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VectorDesigner.prototype, "toolbar", {
        get: function () {
            return this._toolbar;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VectorDesigner.prototype, "selected", {
        get: function () {
            return this._selected;
        },
        set: function (value) {
            if (this._selected != value) {
                if (this._selected != null) {
                    this._selected.selectedUpdate(false);
                    this.toolbar.visible = false;
                    ;
                }
                this._selected = value;
                if (this._selected != null) {
                    var pt = this.convertPoint(this._selected.getCenter());
                    this._selected.selectedUpdate(true);
                    this.toolbar.setPosition(pt);
                    this.toolbar.visible = true;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    VectorDesigner.prototype.add = function () {
        var ctls = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ctls[_i] = arguments[_i];
        }
        for (var _a = 0, ctls_1 = ctls; _a < ctls_1.length; _a++) {
            var ctl = ctls_1[_a];
            if (ctl instanceof AnchorControl_1.AnchorControl) {
                this.children.push(ctl);
            }
            else if (ctl instanceof PolygonControl_1.PolygonControl) {
                this.children.unshift(ctl);
            }
        }
    };
    VectorDesigner.prototype.remove = function () {
        var ctls = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ctls[_i] = arguments[_i];
        }
        for (var _a = 0, ctls_2 = ctls; _a < ctls_2.length; _a++) {
            var ctl = ctls_2[_a];
            var index = this.children.indexOf(ctl);
            if (index > -1) {
                this.children.splice(index, 1);
            }
        }
    };
    VectorDesigner.prototype.toArrray = function () {
        var result = [];
        for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
            var control = _a[_i];
            if (control instanceof PolygonControl_1.PolygonControl) {
                result.push(control.toArray());
            }
        }
        return result;
    };
    VectorDesigner.prototype.resize = function () {
        this._width = this._div.clientWidth;
        this._height = this._div.clientHeight;
        this._renderer.resize(this.width, this.height);
        this._bounds = new Bounds_1.Bounds(-this.width / 2, -this.height / 2, this.width / 2, this.height / 2);
        this._center = this._bounds.getCenter();
        this._res = 1 / (this._zoom / 100);
        this.moveTo(this._zoom, this._center);
    };
    VectorDesigner.prototype.moveTo = function (zoom, center, trans) {
        if (trans === void 0) { trans = false; }
        if (zoom <= 0) {
            return;
        }
        if (this._zoom != zoom) {
            this._zoom = zoom;
            this.onZoom.dispatch(zoom);
        }
        if ((this._center != center) || trans) {
            this._center = center;
        }
        this._res = 1 / (this._zoom / 100);
        var width = this.width * this._res;
        var height = this.height * this._res;
        this._bounds = new Bounds_1.Bounds(center.x - width / 2, center.y - height / 2, center.x + width / 2, center.y + height / 2);
    };
    VectorDesigner.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._runState = true;
                        return [4, this.graphicRender()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    VectorDesigner.prototype.graphicRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            var pt, _i, _a, control;
            return __generator(this, function (_b) {
                if (!this._runState || this.isDisposed)
                    return [2];
                this.renderer.clear();
                pt = this.convertPoint(new Vector2_1.Vector2(-5, -5));
                for (_i = 0, _a = this._children; _i < _a.length; _i++) {
                    control = _a[_i];
                    control.render();
                }
                if (this.connector) {
                    this.renderer.strokeColor = '#00FF00';
                    this.renderer.line(0, this.viewControl.position.y, this.width, this.viewControl.position.y, 1);
                    this.renderer.line(this.viewControl.position.x, 0, this.viewControl.position.x, this.height);
                }
                this.onRender.dispatch();
                if (!this.isDisposed && this._runState) {
                    requestAnimationFrame(this.graphicRender.bind(this));
                }
                return [2];
            });
        });
    };
    VectorDesigner.prototype.convertPoint = function (point) {
        var resolution = this.res;
        var extent = this.bounds;
        var x = (point.x / resolution + (-extent.left / resolution));
        var y = (point.y / resolution + (-extent.top / resolution));
        return new Vector2_1.Vector2(x, y);
    };
    VectorDesigner.prototype.mapPoint = function (point) {
        var ux = (point.x + this.bounds.left / this.res) * this.res;
        var uy = (point.y + this.bounds.top / this.res) * this.res;
        return new Vector2_1.Vector2(ux, uy);
    };
    VectorDesigner.prototype.convertPoints = function (points) {
        var result = [];
        for (var _i = 0, points_1 = points; _i < points_1.length; _i++) {
            var point = points_1[_i];
            result.push(this.convertPoint(point));
        }
        return result;
    };
    Object.defineProperty(VectorDesigner.prototype, "isDisposed", {
        get: function () {
            return false;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VectorDesigner.prototype, "zoom", {
        get: function () {
            return this._zoom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VectorDesigner.prototype, "res", {
        get: function () {
            return this._res;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VectorDesigner.prototype, "bounds", {
        get: function () {
            return this._bounds;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VectorDesigner.prototype, "renderer", {
        get: function () {
            return this._renderer;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VectorDesigner.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VectorDesigner.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VectorDesigner.prototype, "center", {
        get: function () {
            return this._center;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VectorDesigner.prototype, "viewControl", {
        get: function () {
            return this._viewControl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VectorDesigner.prototype, "onRender", {
        get: function () {
            return this._onRender;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VectorDesigner.prototype, "onZoom", {
        get: function () {
            return this._onZoom;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VectorDesigner.prototype, "container", {
        get: function () {
            return this._div;
        },
        enumerable: false,
        configurable: true
    });
    return VectorDesigner;
}());
exports.VectorDesigner = VectorDesigner;


/***/ }),

/***/ "./src/Designer/ViewController.ts":
/*!****************************************!*\
  !*** ./src/Designer/ViewController.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ViewController = void 0;
var signals = __webpack_require__(/*! signals */ "./node_modules/signals/dist/signals.js");
var Vector2_1 = __webpack_require__(/*! ../core/Vector2 */ "./src/core/Vector2.ts");
var AnchorControl_1 = __webpack_require__(/*! ./Views/AnchorControl */ "./src/Designer/Views/AnchorControl.ts");
var ViewController = (function () {
    function ViewController(designer) {
        this.designer = designer;
        this._iscanceled = false;
        this._onmove = new signals.Signal();
        this.position = new Vector2_1.Vector2(-1, -1);
        this.designer.renderer.canvas.ondblclick = this.mouse_dblclick.bind(this);
        this.designer.renderer.canvas.onmousedown = this.mouse_down.bind(this);
        this.designer.renderer.canvas.onmousemove = this.mouse_move.bind(this);
        this.designer.renderer.canvas.onmouseup = this.mouse_up.bind(this);
        this.designer.renderer.canvas.onwheel = this.wheelChange.bind(this);
        this.designer.renderer.canvas.onscroll = this.wheelChange.bind(this);
        this.designer.renderer.canvas.oncontextmenu = function (e) {
            e.preventDefault();
        };
    }
    Object.defineProperty(ViewController.prototype, "onmove", {
        get: function () {
            return this._onmove;
        },
        enumerable: false,
        configurable: true
    });
    ViewController.prototype.dispose = function () {
        this.designer.renderer.canvas.onwheel = null;
        this.designer.renderer.canvas.onscroll = null;
        this.designer.renderer.canvas.onmousedown = null;
        this.designer.renderer.canvas.onmousemove = null;
        this.designer.renderer.canvas.onmouseup = null;
        this.designer.renderer.canvas.ondblclick = null;
    };
    ViewController.prototype.wheelChange = function (e) {
        var deltalX = this.designer.width / 2 - e.offsetX;
        var deltalY = this.designer.height / 2 - e.offsetY;
        var px = new Vector2_1.Vector2(e.offsetX, e.offsetY);
        var zoomPoint = new Vector2_1.Vector2((px.x + this.designer.bounds.left / this.designer.res) * this.designer.res, (px.y + this.designer.bounds.top / this.designer.res) * this.designer.res);
        var zoom = 0;
        {
            var scales = [5, 10, 20, 25, 40, 50, 80, 100, 200, 250, 400, 500, 800, 1000, 1250, 2000, 2500, 3000, 4000];
            var index = scales.indexOf(this.designer.zoom);
            if (index == -1) {
                index = 1;
            }
            else {
                if (e.deltaY < 0) {
                    index = Math.min(index + 1, scales.length - 1);
                }
                else {
                    index = Math.max(index - 1, 0);
                }
            }
            zoom = scales[index];
        }
        var newRes = 1 / (zoom / 100);
        var center = new Vector2_1.Vector2(zoomPoint.x + deltalX * newRes, zoomPoint.y + deltalY * newRes);
        this.onmove.dispatch(zoom, center, false);
        this.stopEventBubble(e);
    };
    ViewController.prototype.stopEventBubble = function (e) {
        if (e.preventDefault) {
            e.preventDefault();
        }
        else {
            e.returnValue = false;
        }
        if (e && e.stopPropagation)
            e.stopPropagation();
        else
            window.event.cancelBubble = true;
    };
    ViewController.prototype.mouse_dblclick = function (e) {
        var v = this.designer.mapPoint(this.position);
        var anchor = new AnchorControl_1.AnchorControl(this.designer, v.x, v.y);
        this.designer.add(anchor);
    };
    ViewController.prototype.mouse_down = function (e) {
        this.captureMouse();
        if (this.designer.connector != null) {
            if (e.button == 2) {
                this.designer.connector.cancel();
            }
            if (e.button == 0) {
                this.designer.connector.commit();
            }
            this.designer.connector = null;
            this._iscanceled = true;
            return;
        }
        this._iscanceled = false;
        if (e.button == 2) {
            if (this.designer.selected != null) {
                this.designer.selected = null;
                this._iscanceled = true;
                return;
            }
        }
        if (this._hoverObject) {
            this._pressedObject = this._hoverObject;
            this._hoverObject.dispatchEvents('onMouseDown');
            return;
        }
        this._press_position = this.position;
        this._dragging = true;
        this.stopEventBubble(e);
        this.designer.renderer.canvas.style.cursor = "move";
        this.pressed_state = this.designer.toolbar.visible;
        if (this.pressed_state) {
            this.designer.toolbar.visible = false;
        }
    };
    ViewController.prototype.mouse_move = function (e) {
        if (this._iscanceled)
            return;
        this.position = new Vector2_1.Vector2(e.pageX - this.designer.renderer.canvas.offsetLeft, e.pageY - this.designer.renderer.canvas.offsetTop);
        if (this.designer.connector != null) {
            var v_1 = this.designer.mapPoint(this.position);
            this.designer.connector.update(v_1);
            return;
        }
        if (this._dragging) {
            var pos = this.position.sub(this._press_position);
            this._press_position = this.position;
            var center = new Vector2_1.Vector2(this.designer.center.x - pos.x * this.designer.res, this.designer.center.y - pos.y * this.designer.res);
            this.onmove.dispatch(this.designer.zoom, center, true);
            this.stopEventBubble(e);
        }
        var v = this.designer.mapPoint(this.position);
        for (var i = this.designer.children.length - 1; i >= 0; i--) {
            var control = this.designer.children[i];
            if (control.hit(v)) {
                if (this._hoverObject != control) {
                    if (this._hoverObject != null) {
                        this._hoverObject.dispatchEvents('onMouseLeave');
                        this._hoverObject = null;
                    }
                    this._hoverObject = control;
                    if (this._hoverObject != null) {
                        this._hoverObject.dispatchEvents('onMouseEnter');
                        this._hoverObject.dispatchEvents('onMouseMove');
                    }
                }
                else {
                    this._hoverObject.dispatchEvents('onMouseMove');
                }
                return;
            }
        }
        if (this._hoverObject != null) {
            this._hoverObject.dispatchEvents('onMouseLeave');
            this._hoverObject = null;
        }
    };
    ViewController.prototype.mouse_up = function (e) {
        if (this._iscanceled) {
            this._iscanceled = false;
            return;
        }
        if (this._pressedObject) {
            this._pressedObject.dispatchEvents('onMouseUp');
            if (this._pressedObject === this._hoverObject) {
                this._hoverObject.dispatchEvents('onClick');
            }
            this._pressedObject = null;
            return;
        }
        this.releaseMouse();
        this.position = new Vector2_1.Vector2(e.pageX - this.designer.renderer.canvas.offsetLeft, e.pageY - this.designer.renderer.canvas.offsetTop);
        this._dragging = false;
        this.stopEventBubble(e);
        this.designer.renderer.canvas.style.cursor = "default";
        document.onmouseup = null;
        this.designer.toolbar.visible = this.pressed_state;
    };
    ViewController.prototype.captureMouse = function () {
        if (!this._captureing) {
            this.designer.renderer.canvas.onmousemove = null;
            this.designer.renderer.canvas.onmouseup = null;
            this._document_mousemoveHandle = document.onmousemove;
            this._document_mouseupHandle = document.onmouseup;
            document.onmousemove = this.mouse_move.bind(this);
            ;
            document.onmouseup = this.mouse_up.bind(this);
            this._captureing = true;
        }
    };
    ViewController.prototype.releaseMouse = function () {
        if (this._captureing) {
            document.onmousemove = this._document_mousemoveHandle;
            document.onmouseup = this._document_mouseupHandle;
            this._captureing = false;
            this.designer.renderer.canvas.onmousemove = this.mouse_move.bind(this);
            this.designer.renderer.canvas.onmouseup = this.mouse_up.bind(this);
        }
    };
    return ViewController;
}());
exports.ViewController = ViewController;


/***/ }),

/***/ "./src/Designer/Views/AnchorControl.ts":
/*!*********************************************!*\
  !*** ./src/Designer/Views/AnchorControl.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnchorControl = void 0;
var Vector2_1 = __webpack_require__(/*! ../../core/Vector2 */ "./src/core/Vector2.ts");
var Control_1 = __webpack_require__(/*! ./Control */ "./src/Designer/Views/Control.ts");
var Anchor_1 = __webpack_require__(/*! ../../core/Anchor */ "./src/core/Anchor.ts");
var Renderer_1 = __webpack_require__(/*! ../Renderer */ "./src/Designer/Renderer.ts");
var signals = __webpack_require__(/*! signals */ "./node_modules/signals/dist/signals.js");
var AnchorControl = (function (_super) {
    __extends(AnchorControl, _super);
    function AnchorControl(designer, x, y) {
        var _this = _super.call(this, designer) || this;
        _this._onupdate = new signals.Signal();
        _this._polygons = [];
        _this.position = new Vector2_1.Vector2(x | 0, y | 0);
        _this._anchor = new Anchor_1.Anchor(_this.id, _this.position.x, _this.position.y);
        _this.fillColor = '#b5e61d';
        _this.strokeColor = '#FFFFFF';
        return _this;
    }
    Object.defineProperty(AnchorControl.prototype, "onUpdate", {
        get: function () {
            return this._onupdate;
        },
        enumerable: false,
        configurable: true
    });
    AnchorControl.prototype.addPolygon = function (p) {
        this._polygons.push(p);
    };
    AnchorControl.prototype.setPosition = function (v) {
        this.position = v.clone();
        this._anchor.setPosition(v);
    };
    AnchorControl.prototype.dispose = function () {
        if (this.designer != null) {
            this.designer.remove(this);
            while (this._polygons.length) {
                var polygon = this._polygons.shift();
                this.designer.remove(polygon);
                polygon.dispose();
            }
            this._anchor.dispose();
            this._onupdate.removeAll();
            _super.prototype.dispose.call(this);
        }
    };
    AnchorControl.prototype.update = function () {
        this._anchor.build();
        this.onUpdate.dispatch();
    };
    AnchorControl.prototype.onClick = function () {
        this.designer.selected = this;
    };
    AnchorControl.prototype.getCenter = function () {
        return this.position;
    };
    AnchorControl.prototype.selectedUpdate = function (value) {
        _super.prototype.selectedUpdate.call(this, value);
        this.fillColor = value ? '#0078d7' : '#b5e61d';
    };
    AnchorControl.prototype.hit = function (point) {
        return point.inCircle(this.position, 10 * this.designer.res);
    };
    AnchorControl.prototype.render = function () {
        this.designer.renderer.opacity = this.opacity;
        this.designer.renderer.fillColor = this.isHover && !this.isSelected ? this.hoverColor : this.fillColor;
        this.designer.renderer.strokeColor = this.strokeColor;
        var pt = this.designer.convertPoint(this.position);
        this.designer.renderer.circle(pt.x, pt.y, 5, Renderer_1.RenderType.ALL);
    };
    Object.defineProperty(AnchorControl.prototype, "left", {
        get: function () {
            return this.position.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnchorControl.prototype, "top", {
        get: function () {
            return this.position.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AnchorControl.prototype, "anchor", {
        get: function () {
            return this._anchor;
        },
        enumerable: false,
        configurable: true
    });
    return AnchorControl;
}(Control_1.Control));
exports.AnchorControl = AnchorControl;


/***/ }),

/***/ "./src/Designer/Views/Connector.ts":
/*!*****************************************!*\
  !*** ./src/Designer/Views/Connector.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Connector = void 0;
var AnchorControl_1 = __webpack_require__(/*! ./AnchorControl */ "./src/Designer/Views/AnchorControl.ts");
var PolygonControl_1 = __webpack_require__(/*! ./PolygonControl */ "./src/Designer/Views/PolygonControl.ts");
var Connector = (function () {
    function Connector(designer, origin) {
        this.designer = designer;
        this.origin = origin;
        this.newAnchor = new AnchorControl_1.AnchorControl(this.designer, -50, 18);
        this.newSegment = new PolygonControl_1.PolygonControl(this.designer, origin, this.newAnchor);
        this.update();
        this.designer.add(this.newAnchor, this.newSegment);
    }
    Connector.prototype.update = function (v) {
        if (v != null) {
            this.newAnchor.setPosition(v);
        }
        this.newAnchor.update();
        this.origin.update();
    };
    Connector.prototype.commit = function () {
        this.designer.selected = this.newAnchor;
    };
    Connector.prototype.cancel = function () {
        this.newSegment.dispose();
        this.newAnchor.dispose();
        this.origin.update();
    };
    return Connector;
}());
exports.Connector = Connector;


/***/ }),

/***/ "./src/Designer/Views/Control.ts":
/*!***************************************!*\
  !*** ./src/Designer/Views/Control.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Control = void 0;
var Vector2_1 = __webpack_require__(/*! ../../core/Vector2 */ "./src/core/Vector2.ts");
var Control = (function () {
    function Control(designer) {
        this._designer = designer;
        this.id = 111;
        this._isHover = false;
        this.hoverColor = '#ff8888';
        this.opacity = 0.5;
    }
    Control.prototype.dispose = function () {
        this._designer = null;
    };
    Object.defineProperty(Control.prototype, "designer", {
        get: function () {
            return this._designer;
        },
        enumerable: false,
        configurable: true
    });
    Control.prototype.hit = function (point) {
        return true;
    };
    Control.prototype.update = function () {
    };
    Control.prototype.render = function () {
    };
    Control.prototype.onMouseEnter = function () {
        this._isHover = true;
    };
    Control.prototype.onMouseLeave = function () {
        this._isHover = false;
    };
    Control.prototype.onClick = function () {
    };
    Control.prototype.selectedUpdate = function (value) {
        this._isSelected = value;
        this.opacity = value ? 1 : 0.5;
    };
    Object.defineProperty(Control.prototype, "isHover", {
        get: function () {
            return this._isHover;
        },
        enumerable: false,
        configurable: true
    });
    Control.prototype.getCenter = function () {
        return new Vector2_1.Vector2();
    };
    Control.prototype.dispatchEvents = function (event) {
        this[event] && this[event]();
    };
    Object.defineProperty(Control.prototype, "isSelected", {
        get: function () {
            return this._isSelected;
        },
        enumerable: false,
        configurable: true
    });
    return Control;
}());
exports.Control = Control;


/***/ }),

/***/ "./src/Designer/Views/PolygonControl.ts":
/*!**********************************************!*\
  !*** ./src/Designer/Views/PolygonControl.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PolygonControl = void 0;
var Vector2_1 = __webpack_require__(/*! ../../core/Vector2 */ "./src/core/Vector2.ts");
var Control_1 = __webpack_require__(/*! ./Control */ "./src/Designer/Views/Control.ts");
var Segment_1 = __webpack_require__(/*! ../../core/Segment */ "./src/core/Segment.ts");
var Renderer_1 = __webpack_require__(/*! ../Renderer */ "./src/Designer/Renderer.ts");
var Bounds_1 = __webpack_require__(/*! ../common/Bounds */ "./src/Designer/common/Bounds.ts");
var PolygonControl = (function (_super) {
    __extends(PolygonControl, _super);
    function PolygonControl(designer, anchor1, anchor2) {
        var _this = _super.call(this, designer) || this;
        _this._anchors = [anchor1, anchor2];
        _this.thickness = 10;
        _this.points = [];
        _this._bounds = new Bounds_1.Bounds(0, 0, 0, 0);
        _this._segment = new Segment_1.Segment(anchor1.anchor, anchor2.anchor, _this.thickness);
        _this.update();
        _this.strokeColor = '#FFFFFF';
        _this.fillColor = '#888888';
        _this._anchors[0].onUpdate.add(_this.update, _this);
        _this._anchors[1].onUpdate.add(_this.update, _this);
        _this._anchors[0].addPolygon(_this);
        _this._anchors[1].addPolygon(_this);
        return _this;
    }
    PolygonControl.prototype.dispose = function () {
        if (this.designer != null) {
            this.designer.remove(this);
            this._segment.dispose();
            while (this._anchors.length > 0) {
                var anchorControl = this._anchors.shift();
                anchorControl.onUpdate.remove(this.update, this);
                if (anchorControl.anchor.targets.length == 0) {
                    this.designer.remove(anchorControl);
                    anchorControl.dispose();
                }
                else {
                    anchorControl.update();
                }
            }
            _super.prototype.dispose.call(this);
        }
    };
    PolygonControl.prototype.update = function () {
        if (this._segment != null) {
            this.points = [];
            this._bounds = new Bounds_1.Bounds(0, 0, 0, 0);
            for (var _i = 0, _a = this._segment.points; _i < _a.length; _i++) {
                var point = _a[_i];
                var v = new Vector2_1.Vector2().fromArray(point);
                this.points.push(v);
                this._bounds.extendFromPoint(v);
            }
        }
    };
    PolygonControl.prototype.hit = function (point) {
        return point.inPolygon(this.points);
    };
    PolygonControl.prototype.selectedUpdate = function (value) {
        _super.prototype.selectedUpdate.call(this, value);
        this.fillColor = value ? '#0078d7' : '#888888';
    };
    PolygonControl.prototype.onClick = function () {
        this.designer.selected = this;
    };
    PolygonControl.prototype.getCenter = function () {
        return this._bounds.getCenter();
    };
    PolygonControl.prototype.render = function () {
        this.designer.renderer.opacity = this.opacity;
        this.designer.renderer.fillColor = this.isHover && !this.isSelected ? this.hoverColor : this.fillColor;
        this.designer.renderer.strokeColor = this.strokeColor;
        this.designer.renderer.polygon(this.designer.convertPoints(this.points), true, Renderer_1.RenderType.ALL);
    };
    Object.defineProperty(PolygonControl.prototype, "anchors", {
        get: function () {
            return this._anchors;
        },
        enumerable: false,
        configurable: true
    });
    PolygonControl.prototype.toArray = function () {
        return this._segment.points;
    };
    return PolygonControl;
}(Control_1.Control));
exports.PolygonControl = PolygonControl;


/***/ }),

/***/ "./src/Designer/common/Bounds.ts":
/*!***************************************!*\
  !*** ./src/Designer/common/Bounds.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Bounds = void 0;
var Vector2_1 = __webpack_require__(/*! ../../core/Vector2 */ "./src/core/Vector2.ts");
var Bounds = (function () {
    function Bounds(left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    Object.defineProperty(Bounds.prototype, "width", {
        get: function () {
            return this.right - this.left;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Bounds.prototype, "height", {
        get: function () {
            return this.bottom - this.top;
        },
        enumerable: false,
        configurable: true
    });
    Bounds.prototype.getCenter = function () {
        return new Vector2_1.Vector2(this.left + this.width / 2, this.top + this.height / 2);
    };
    Bounds.prototype.extend = function (bounds) {
        if (this.left > bounds.left) {
            this.left = bounds.left;
        }
        if (this.top > bounds.top) {
            this.top = bounds.top;
        }
        if (this.bottom < bounds.bottom) {
            this.bottom = bounds.bottom;
        }
        if (this.right < bounds.right) {
            this.right = bounds.right;
        }
    };
    Bounds.prototype.intersect = function (bounds) {
        var inLeft = (((bounds.left >= this.left) && (bounds.left <= this.right)) || ((this.left >= bounds.left) && (this.left <= bounds.right)));
        var inTop = (((bounds.top >= this.top) && (bounds.top <= this.bottom)) || ((this.top > bounds.top) && (this.top < bounds.bottom)));
        var inRight = (((bounds.right >= this.left) && (bounds.right <= this.right)) || ((this.right >= bounds.left) && (this.right <= bounds.right)));
        var inBottom = (((bounds.bottom >= this.top) && (bounds.bottom <= this.bottom)) || ((this.bottom >= bounds.top) && (this.bottom <= bounds.bottom)));
        return ((inBottom || inTop) && (inLeft || inRight));
    };
    Bounds.prototype.extendFromPoint = function (point) {
        if (this.left > point.x) {
            this.left = point.x;
        }
        if (this.top > point.y) {
            this.top = point.y;
        }
        if (this.bottom < point.y) {
            this.bottom = point.y;
        }
        if (this.right < point.x) {
            this.right = point.x;
        }
    };
    Bounds.prototype.contains = function (point) {
        return point.x >= this.left &&
            point.x <= this.right &&
            point.y >= this.top &&
            point.y <= this.bottom;
    };
    return Bounds;
}());
exports.Bounds = Bounds;


/***/ }),

/***/ "./src/Designer/plugins/HorizontalRuler.ts":
/*!*************************************************!*\
  !*** ./src/Designer/plugins/HorizontalRuler.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.HorizontalRuler = void 0;
var Vector2_1 = __webpack_require__(/*! ../../core/Vector2 */ "./src/core/Vector2.ts");
var Renderer_1 = __webpack_require__(/*! ../Renderer */ "./src/Designer/Renderer.ts");
var HorizontalRuler = (function () {
    function HorizontalRuler(designer, canvas) {
        var _this = this;
        this.designer = designer;
        this._canvas = canvas;
        this._needUpdate = true;
        this._renderer = new Renderer_1.Renderer(canvas);
        this.designer.onRender.add(this.render, this);
        this.designer.viewControl.onmove.add(function () {
            _this._needUpdate = true;
        }, this);
        this._canvas.oncontextmenu = function (e) {
            e.preventDefault();
        };
        this.resize();
    }
    HorizontalRuler.prototype.resize = function () {
        this._width = this._canvas.clientWidth;
        this._height = this._canvas.clientHeight;
        this._renderer.resize(this.width, this.height);
    };
    HorizontalRuler.prototype.render = function () {
        if (!this._needUpdate)
            return;
        this._needUpdate = false;
        var designerlength = this.designer.bounds.right - this.designer.bounds.left;
        var offset = this.designer.center.x % (designerlength / this.width * 100);
        this._renderer.strokeColor = '#ffffff';
        this._renderer.fillColor = '#ffffff';
        var center = this.width / 2;
        var offsetCenter = this.designer.center.x / this.designer.res;
        var offsetCalibration = offset / this.designer.res;
        var centeroffset = center - offsetCalibration;
        var pos = 0;
        var count = 0;
        this._renderer.clear();
        while (centeroffset + pos < this.width || centeroffset - pos > 0) {
            if (centeroffset + pos < this.width) {
                var pValue = null;
                if (count % 10 == 0) {
                    pValue = (offsetCenter - offsetCalibration + pos) * this.designer.res;
                    pValue = Number.parseFloat(pValue.toFixed(2));
                }
                this.drawCalibration(centeroffset + pos, pValue);
            }
            if (centeroffset - pos > 0) {
                var pValue = null;
                if (count % 10 == 0) {
                    pValue = (offsetCenter - offsetCalibration - pos) * this.designer.res;
                    pValue = Number.parseFloat(pValue.toFixed(2));
                }
                this.drawCalibration(centeroffset - pos, pValue);
            }
            pos += 10;
            count++;
        }
        this._renderer.fillColor = '#333333';
        this._renderer.fillPath([new Vector2_1.Vector2(center - 5, 0), new Vector2_1.Vector2(center + 5, 0), new Vector2_1.Vector2(center, 10)], true);
        this._renderer.strokeColor = '#aaaaaa';
        this._renderer.strokePath([new Vector2_1.Vector2(center - 5, 0), new Vector2_1.Vector2(center + 5, 0), new Vector2_1.Vector2(center, 10)], true);
    };
    HorizontalRuler.prototype.drawCalibration = function (x, value) {
        var calibration = this.height / 3;
        if (value != null) {
            this._renderer.fillText(value.toString(), x, this.height * 0.8, null, Renderer_1.TextAlign.CENTER);
            calibration = this.height / 2;
        }
        this._renderer.line(x, 0, x, calibration, 1);
    };
    Object.defineProperty(HorizontalRuler.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HorizontalRuler.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    return HorizontalRuler;
}());
exports.HorizontalRuler = HorizontalRuler;


/***/ }),

/***/ "./src/Designer/plugins/VerticalRuler.ts":
/*!***********************************************!*\
  !*** ./src/Designer/plugins/VerticalRuler.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.VerticalRuler = void 0;
var Vector2_1 = __webpack_require__(/*! ../../core/Vector2 */ "./src/core/Vector2.ts");
var Renderer_1 = __webpack_require__(/*! ../Renderer */ "./src/Designer/Renderer.ts");
var VerticalRuler = (function () {
    function VerticalRuler(designer, canvas) {
        var _this = this;
        this.designer = designer;
        this._canvas = canvas;
        this._needUpdate = true;
        this._renderer = new Renderer_1.Renderer(canvas);
        this.designer.onRender.add(this.render, this);
        this.designer.viewControl.onmove.add(function () {
            _this._needUpdate = true;
        }, this);
        this._canvas.oncontextmenu = function (e) {
            e.preventDefault();
        };
        this.resize();
    }
    VerticalRuler.prototype.resize = function () {
        this._width = this._canvas.clientWidth;
        this._height = this._canvas.clientHeight;
        this._renderer.resize(this.width, this.height);
    };
    VerticalRuler.prototype.render = function () {
        if (!this._needUpdate)
            return;
        this._needUpdate = false;
        var designerlength = this.designer.bounds.bottom - this.designer.bounds.top;
        var offset = this.designer.center.y % (designerlength / this.height * 100);
        this._renderer.strokeColor = '#ffffff';
        this._renderer.fillColor = '#ffffff';
        var center = this.height / 2;
        var offsetCenter = this.designer.center.y / this.designer.res;
        var offsetCalibration = offset / this.designer.res;
        var centeroffset = center - offsetCalibration;
        var pos = 0;
        var count = 0;
        this._renderer.clear();
        while (centeroffset + pos < this.height || centeroffset - pos > 0) {
            if (centeroffset + pos < this.height) {
                var pValue = null;
                if (count % 10 == 0) {
                    pValue = (offsetCenter - offsetCalibration + pos) * this.designer.res;
                    pValue = Number.parseFloat(pValue.toFixed(2));
                }
                this.drawCalibration(centeroffset + pos, pValue);
            }
            if (centeroffset - pos > 0) {
                var pValue = null;
                if (count % 10 == 0) {
                    pValue = (offsetCenter - offsetCalibration - pos) * this.designer.res;
                    pValue = Number.parseFloat(pValue.toFixed(2));
                }
                this.drawCalibration(centeroffset - pos, pValue);
            }
            pos += 10;
            count++;
        }
        this._renderer.fillColor = '#333333';
        this._renderer.fillPath([new Vector2_1.Vector2(0, center - 5), new Vector2_1.Vector2(0, center + 5), new Vector2_1.Vector2(10, center)], true);
        this._renderer.strokeColor = '#aaaaaa';
        this._renderer.strokePath([new Vector2_1.Vector2(0, center - 5), new Vector2_1.Vector2(0, center + 5), new Vector2_1.Vector2(10, center)], true);
    };
    VerticalRuler.prototype.drawCalibration = function (y, value) {
        var calibration = this.width / 3;
        if (value != null) {
            this._renderer.translateRotate(this.width * 0.8, y, 270);
            this._renderer.fillText(value.toString(), this.width * 0.8, y, null, Renderer_1.TextAlign.CENTER);
            this._renderer.translateRotate(this.width * 0.8, y, -270);
            calibration = this.width / 2;
        }
        this._renderer.line(0, y, calibration, y, 1);
    };
    Object.defineProperty(VerticalRuler.prototype, "width", {
        get: function () {
            return this._width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VerticalRuler.prototype, "height", {
        get: function () {
            return this._height;
        },
        enumerable: false,
        configurable: true
    });
    return VerticalRuler;
}());
exports.VerticalRuler = VerticalRuler;


/***/ }),

/***/ "./src/core/Anchor.ts":
/*!****************************!*\
  !*** ./src/core/Anchor.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Anchor = void 0;
var Vector2_1 = __webpack_require__(/*! ./Vector2 */ "./src/core/Vector2.ts");
var Anchor = (function () {
    function Anchor(id, x, y) {
        this._id = id;
        this._x = x;
        this._y = y;
        this._targets = [];
        this._map = new Map();
    }
    Object.defineProperty(Anchor.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Anchor.prototype, "x", {
        get: function () {
            return this._x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Anchor.prototype, "y", {
        get: function () {
            return this._y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Anchor.prototype, "point", {
        get: function () {
            return new Vector2_1.Vector2(this._x, this._y);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Anchor.prototype, "targets", {
        get: function () {
            return this._targets;
        },
        enumerable: false,
        configurable: true
    });
    Anchor.prototype.setPosition = function (v) {
        this._x = v.x;
        this._y = v.y;
    };
    Anchor.prototype.dispose = function () {
        while (this._targets.length > 0) {
            var anchor = this._targets.shift();
            anchor.removeTarget(this);
            var segment = this._map.get(anchor);
            this._map.delete(anchor);
            segment.dispose();
        }
        if (this._map) {
            this._map = null;
        }
    };
    Anchor.prototype.remove = function () {
        if (this._targets.length > 0) {
        }
    };
    Anchor.prototype.addTarget = function (object, segment) {
        if (!this._map.has(object)) {
            this._targets.push(object);
            this._map.set(object, segment);
        }
    };
    Anchor.prototype.removeTarget = function (object) {
        if (this._map.has(object)) {
            this._map.delete(object);
        }
        var index = this._targets.indexOf(object);
        if (index > -1) {
            this._targets.splice(index, 1);
        }
    };
    Anchor.prototype.generateEdgePoints = function (target, right) {
        if (right === void 0) { right = true; }
        var eulr = right ? 90 : -90;
        ;
        var segment = this._map.get(target);
        var start = new Vector2_1.Vector2(this.x, this.y);
        var end = new Vector2_1.Vector2(target.x, target.y);
        var off = segment.thickness / 2;
        var angle = Math.atan2((end.y - start.y), (end.x - start.x));
        var theta = angle * (180 / Math.PI);
        var ps = new Vector2_1.Vector2(start.x + off, start.y);
        var pe = new Vector2_1.Vector2(end.x + off, end.y);
        var left_point = this.rotatePoint(ps, start, theta - eulr);
        var right_point = this.rotatePoint(pe, end, theta - eulr);
        return [left_point, right_point];
    };
    Anchor.prototype.build = function () {
        if (this._targets.length > 1) {
            this.clockwiseSortPoints(this._targets);
            for (var i = 0; i < this._targets.length; i++) {
                var cur = i;
                var next = (i + 1) % this._targets.length;
                var anchor = this._targets[cur];
                var nextanchor = this._targets[next];
                var edge_path = this.generateEdgePoints(anchor, true);
                var nextEdge_path = this.generateEdgePoints(nextanchor, false);
                var intersectionPoint = this.getIntersection(edge_path[0], edge_path[1], nextEdge_path[0], nextEdge_path[1]);
                if (intersectionPoint === null) {
                    intersectionPoint = this.GetProjectivePoint(edge_path[0], edge_path[1], this.point);
                }
                var segment = this._map.get(anchor);
                var points = segment.getPort(this);
                points[1] = this.point.clone();
                points[0] = intersectionPoint.clone();
                segment = this._map.get(nextanchor);
                points = segment.getPort(this);
                points[2] = intersectionPoint.clone();
                points[1] = this.point.clone();
            }
        }
        else if (this._targets.length === 1) {
            var anchor = this._targets[0];
            var segment = this._map.get(anchor);
            var start = new Vector2_1.Vector2(this.x, this.y);
            var end = new Vector2_1.Vector2(anchor.x, anchor.y);
            var angle = Math.atan2((end.y - start.y), (end.x - start.x));
            var theta = angle * (180 / Math.PI);
            var ps = new Vector2_1.Vector2(start.x + segment.thickness / 2, start.y);
            var left_point = this.rotatePoint(ps, start, theta - 90);
            var right_point = this.rotatePoint(ps, start, theta + 90);
            var points = segment.getPort(this);
            points[0] = left_point.clone();
            points[1] = this.point.clone();
            points[2] = right_point.clone();
        }
        else {
            console.warn('Unused anchor points!');
        }
    };
    Anchor.prototype.GetProjectivePoint = function (P1, P2, pOut) {
        var pLine = P1;
        if (P1.x == P2.x && P1.y == P2.y) {
            return P1;
        }
        if (P1.x == P2.x) {
            return new Vector2_1.Vector2(pLine.x, pOut.y);
        }
        else if (P1.y == P2.y) {
            return new Vector2_1.Vector2(pOut.x, pLine.y);
        }
        var k = ((P1.y - P2.y)) / (P1.x - P2.x);
        var X = ((k * pLine.x + pOut.x / k + pOut.y - pLine.y) / (1 / k + k));
        var Y = (-1 / k * (X - pOut.x) + pOut.y);
        return new Vector2_1.Vector2(X, Y);
    };
    Anchor.prototype.rotatePoint = function (point, center, a) {
        var ang = a / 180 * Math.PI;
        var x = (point.x - center.x) * Math.cos(ang) - (point.y - center.y) * Math.sin(ang) + center.x;
        var y = (point.x - center.x) * Math.sin(ang) + (point.y - center.y) * Math.cos(ang) + center.y;
        return new Vector2_1.Vector2(x, y);
    };
    Anchor.prototype.PointCmp = function (a, b, center) {
        if (a.x >= 0 && b.x < 0)
            return true;
        if (a.x === 0 && b.x === 0)
            return a.y > b.y;
        var det = (a.x - center.x) * (b.y - center.y) - (b.x - center.x) * (a.y - center.y);
        if (det < 0)
            return true;
        if (det > 0)
            return false;
        var d1 = (a.x - center.x) * (a.x - center.x) + (a.y - center.y) * (a.y - center.y);
        var d2 = (b.x - center.x) * (b.x - center.y) + (b.y - center.y) * (b.y - center.y);
        return d1 > d2;
    };
    Anchor.prototype.clockwiseSortPoints = function (vPoints) {
        var center = this;
        for (var i = 0; i < vPoints.length - 1; i++) {
            for (var j = 0; j < vPoints.length - i - 1; j++) {
                if (!this.PointCmp(vPoints[j], vPoints[j + 1], center)) {
                    var tmp = vPoints[j];
                    vPoints[j] = vPoints[j + 1];
                    vPoints[j + 1] = tmp;
                }
            }
        }
    };
    Anchor.prototype.getIntersection = function (lineFirstStar, lineFirstEnd, lineSecondStar, lineSecondEnd) {
        var a = 0;
        var b = 0;
        var state = 0;
        if (Math.abs(lineFirstStar.x - lineFirstEnd.x) > 0.000001) {
            a = (lineFirstEnd.y - lineFirstStar.y) / (lineFirstEnd.x - lineFirstStar.x);
            state |= 1;
        }
        if (Math.abs(lineSecondStar.x - lineSecondEnd.x) > 0.000001) {
            b = (lineSecondEnd.y - lineSecondStar.y) / (lineSecondEnd.x - lineSecondStar.x);
            state |= 2;
        }
        switch (state) {
            case 0:
                {
                    if (lineFirstStar.x === lineSecondStar.x) {
                        return null;
                    }
                    else {
                        return null;
                    }
                }
            case 1:
                {
                    var x = lineSecondStar.x;
                    var y = (lineFirstStar.x - x) * (-a) + lineFirstStar.y;
                    return new Vector2_1.Vector2(x, y);
                }
            case 2:
                {
                    var x = lineFirstStar.x;
                    var y = (lineSecondStar.x - x) * (-b) + lineSecondStar.y;
                    return new Vector2_1.Vector2(x, y);
                }
            case 3:
                {
                    if (a === b) {
                        return null;
                    }
                    var x = (a * lineFirstStar.x - b * lineSecondStar.x - lineFirstStar.y + lineSecondStar.y) / (a - b);
                    var y = a * x - a * lineFirstStar.x + lineFirstStar.y;
                    return new Vector2_1.Vector2(x, y);
                }
        }
        return null;
    };
    return Anchor;
}());
exports.Anchor = Anchor;


/***/ }),

/***/ "./src/core/Segment.ts":
/*!*****************************!*\
  !*** ./src/core/Segment.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Segment = void 0;
var Segment = (function () {
    function Segment(start, end, thickness) {
        this._start = start;
        this._end = end;
        this._thickness = thickness;
        this._points = [];
        this._points.push([], []);
        this._start.addTarget(this._end, this);
        this._end.addTarget(this._start, this);
    }
    Segment.prototype.dispose = function () {
        this.remove();
        if (this._points) {
            this._points.length = 0;
            this._points = null;
        }
    };
    Object.defineProperty(Segment.prototype, "points", {
        get: function () {
            var arry = [];
            for (var _i = 0, _a = this._points[0]; _i < _a.length; _i++) {
                var o = _a[_i];
                arry.push([o.x, o.y]);
            }
            for (var _b = 0, _c = this._points[1]; _b < _c.length; _b++) {
                var o = _c[_b];
                arry.push([o.x, o.y]);
            }
            return arry;
        },
        enumerable: false,
        configurable: true
    });
    Segment.prototype.getPort = function (anchor) {
        if (this._start === anchor)
            return this._points[0];
        else
            return this._points[1];
    };
    Object.defineProperty(Segment.prototype, "thickness", {
        get: function () {
            return this._thickness;
        },
        enumerable: false,
        configurable: true
    });
    Segment.prototype.remove = function () {
        if (this._start) {
            this._start.removeTarget(this._end);
            this._end.removeTarget(this._start);
            this._end = null;
            this._start = null;
        }
    };
    return Segment;
}());
exports.Segment = Segment;


/***/ }),

/***/ "./src/core/Vector2.ts":
/*!*****************************!*\
  !*** ./src/core/Vector2.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2 = void 0;
var Vector2 = (function () {
    function Vector2(_x, _y) {
        this.x = _x ? _x : 0;
        this.y = _y ? _y : 0;
    }
    Vector2.prototype.inCircle = function (center, radius) {
        var distance = this.distanceTo(center);
        return distance < radius;
    };
    Vector2.prototype.fromArray = function (values) {
        this.x = values[0];
        this.y = values[1];
        return this;
    };
    Vector2.prototype.sub = function (v) {
        return new Vector2(this.x - v.x, this.y - v.y);
    };
    Vector2.prototype.add = function (v) {
        return new Vector2(this.x + v.x, this.y + v.y);
    };
    Vector2.prototype.clone = function () {
        return new Vector2(this.x, this.y);
    };
    Vector2.prototype.inPolygon = function (polygon) {
        var sum = 0;
        for (var i = 0, l = polygon.length, j = l - 1; i < l; j = i, i++) {
            var sx = polygon[i].x;
            var sy = polygon[i].y;
            var tx = polygon[j].x;
            var ty = polygon[j].y;
            if ((sx - this.x) * (this.x - tx) >= 0 && (sy - this.y) * (this.y - ty) >= 0 && (this.x - sx) * (ty - sy) === (this.y - sy) * (tx - sx)) {
                return true;
            }
            var angle = Math.atan2(sy - this.y, sx - this.x) - Math.atan2(ty - this.y, tx - this.x);
            if (angle >= Math.PI) {
                angle = angle - Math.PI * 2;
            }
            else if (angle <= -Math.PI) {
                angle = angle + Math.PI * 2;
            }
            sum += angle;
        }
        return Math.round(sum / Math.PI) === 0 ? false : true;
    };
    Vector2.prototype.distanceTo = function (v) {
        var dx = this.x - v.x;
        var dy = this.y - v.y;
        return Math.sqrt(dx * dx + dy * dy);
    };
    return Vector2;
}());
exports.Vector2 = Vector2;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2lnbmFscy9kaXN0L3NpZ25hbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Rlc2lnbmVyL01lbnVzL1Rvb2xCYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Rlc2lnbmVyL1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9EZXNpZ25lci9WZWN0b3JEZXNpZ25lci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVzaWduZXIvVmlld0NvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Rlc2lnbmVyL1ZpZXdzL0FuY2hvckNvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Rlc2lnbmVyL1ZpZXdzL0Nvbm5lY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVzaWduZXIvVmlld3MvQ29udHJvbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVzaWduZXIvVmlld3MvUG9seWdvbkNvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Rlc2lnbmVyL2NvbW1vbi9Cb3VuZHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Rlc2lnbmVyL3BsdWdpbnMvSG9yaXpvbnRhbFJ1bGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9EZXNpZ25lci9wbHVnaW5zL1ZlcnRpY2FsUnVsZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQW5jaG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1NlZ21lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvVmVjdG9yMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsd0lBQTBFO0FBQzFFLGtJQUFzRTtBQUN0RSxxSEFBZ0U7QUFFaEUsOEhBQW9FO0FBQ3BFLGlJQUFzRTtBQU10RTtJQUFBO0lBbUVBLENBQUM7SUEv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WUFDM0IsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO1NBQzdCO0lBQ0wsQ0FBQztJQUlNLDBCQUFTLEdBQWhCLFVBQWlCLE1BQWM7UUFDM0IsSUFBSSxNQUFNLEdBQUcsQ0FDVCxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQzdILENBQUM7UUFDRixJQUFJLEtBQUssR0FBRyxDQUNSLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FDdkgsQ0FBQztRQUNGLElBQUksT0FBTyxHQUFHLENBQ1YsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUNqSSxDQUFDO1FBQ0YsSUFBSSxRQUFRLEdBQUcsQ0FDWCxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sSUFBSSxJ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QUNmO1lBRUQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUV4RixJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsRUFBRSxFQUFFO2dCQUNsQixLQUFLLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2FBQy9CO2lCQUFNLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtnQkFDMUIsS0FBSyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQzthQUMvQjtZQUNELEdBQUcsSUFBSSxLQUFLLENBQUM7U0FDaEI7UUFFRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQzFELENBQUM7SUFHTSw0QkFBVSxHQUFqQixVQUFrQixDQUFVO1FBQ3hCLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN4QixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEIsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFPTCxjQUFDO0FBQUQsQ0FBQztBQWxGWSwwQkFBTyIsImZpbGUiOiJjb21tb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBbmNob3IgfSBmcm9tIFwiLi4vc3JjL2NvcmUvQW5jaG9yXCI7XHJcbmltcG9ydCB7IFNlZ21lbnQgfSBmcm9tIFwiLi4vc3JjL2NvcmUvU2VnbWVudFwiO1xyXG5pbXBvcnQgeyBIb3Jpem9udGFsUnVsZXIgfSBmcm9tIFwiLi4vc3JjL0Rlc2lnbmVyL3BsdWdpbnMvSG9yaXpvbnRhbFJ1bGVyXCI7XHJcbmltcG9ydCB7IFZlcnRpY2FsUnVsZXIgfSBmcm9tIFwiLi4vc3JjL0Rlc2lnbmVyL3BsdWdpbnMvVmVydGljYWxSdWxlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3JEZXNpZ25lciB9IGZyb20gXCIuLi9zcmMvRGVzaWduZXIvVmVjdG9yRGVzaWduZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uL3NyYy9jb3JlL1ZlY3RvcjInO1xyXG5pbXBvcnQgeyBBbmNob3JDb250cm9sIH0gZnJvbSBcIi4uL3NyYy9EZXNpZ25lci9WaWV3cy9BbmNob3JDb250cm9sXCI7XHJcbmltcG9ydCB7IFBvbHlnb25Db250cm9sIH0gZnJvbSBcIi4uL3NyYy9EZXNpZ25lci9WaWV3cy9Qb2x5Z29uQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBGT1JNRVJSIH0gZnJvbSBcImRuc1wiO1xyXG5cclxuLyoqXHJcbiAqIHRoaXMgaXMgZXhhbXBsZVxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIEV4YW1wbGVzIHtcclxuICAgIC8qKlxyXG4gICAgICogbWFpbiBmdW5jdGlvblxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYXN5bmMgbWFpbigpIHtcclxuICAgICAgICB2YXIgZGl2ID0gPEhUTUxEaXZFbGVtZW50PmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZXhhbXBsZVwiKTtcclxuICAgICAgICB2YXIgZGVzaWduZXIgPSBuZXcgVmVjdG9yRGVzaWduZXIoZGl2KTtcclxuICAgICAgICB2YXIgaHJ1bGVyY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJIb3Jpem9udGFsUnVsZXJDYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgdmFyIHZydWxlcmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVmVydGljYWxSdWxlckNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICB2YXIgaFJ1bGVyID0gbmV3IEhvcml6b250YWxSdWxlcihkZXNpZ25lciwgaHJ1bGVyY2FudmFzKTtcclxuICAgICAgICB2YXIgdlJ1bGVyID0gbmV3IFZlcnRpY2FsUnVsZXIoZGVzaWduZXIsIHZydWxlcmNhbnZhcyk7XHJcbiAgICAgICAgZGVzaWduZXIucnVuKCk7XHJcblxyXG4gICAgICAgIHZhciBhbnRob3JzOiB7IFtrZXk6IHN0cmluZ106IEFuY2hvckNvbnRyb2wgfSA9IHt9O1xyXG4gICAgICAgIGFudGhvcnNbMF0gPSBuZXcgQW5jaG9yQ29udHJvbChkZXNpZ25lciwgLTIwLCAtMTApO1xyXG4gICAgICAgIGFudGhvcnNbMV0gPSBuZXcgQW5jaG9yQ29udHJvbChkZXNpZ25lciwgMCwgMCk7XHJcbiAgICAgICAgYW50aG9yc1syXSA9IG5ldyBBbmNob3JDb250cm9sKGRlc2lnbmVyLCAwLCAyMCk7XHJcbiAgICAgICAgYW50aG9yc1szXSA9IG5ldyBBbmNob3JDb250cm9sKGRlc2lnbmVyLCAyMCwgMjApO1xyXG4gICAgICAgIC8vICBhbnRob3JzWzRdID0gbmV3IEFuY2hvckNvbnRyb2woZGVzaWduZXIsIDUwLCAtMTgpO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIHNlZ21lbnRzOiB7IFtrZXk6IHN0cmluZ106IFBvbHlnb25Db250cm9sIH0gPSB7fTtcclxuXHJcbiAgICAgICAgc2VnbWVudHNbMF0gPSBuZXcgUG9seWdvbkNvbnRyb2woZGVzaWduZXIsIGFudGhvcnNbMF0sIGFudGhvcnNbMV0pO1xyXG4gICAgICAgIHNlZ21lbnRzWzFdID0gbmV3IFBvbHlnb25Db250cm9sKGRlc2lnbmVyLCBhbnRob3JzWzJdLCBhbnRob3JzWzFdKTtcclxuICAgICAgICBzZWdtZW50c1syXSA9IG5ldyBQb2x5Z29uQ29udHJvbChkZXNpZ25lciwgYW50aG9yc1sxXSwgYW50aG9yc1szXSk7XHJcbiAgICAgICAgLy8gc2VnbWVudHNbM10gPSBuZXcgUG9seWdvbkNvbnRyb2woZGVzaWduZXIsIGFudGhvcnNbMV0sIGFudGhvcnNbNF0pO1xyXG5cclxuXHJcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGFudGhvcnMpIHtcclxuICAgICAgICAgICAgYW50aG9yc1trZXldLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICBkZXNpZ25lci5hZGQoYW50aG9yc1trZXldKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBmb3IgKGxldCBrZXkgaW4gc2VnbWVudHMpIHtcclxuICAgICAgICAgICAgc2VnbWVudHNba2V5XS51cGRhdGUoKTtcclxuICAgICAgICAgICAgZGVzaWduZXIuYWRkKHNlZ21lbnRzW2tleV0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgZGVzaWduZXIub25ab29tLmFkZChlPT57XHJcblxyXG4gICAgICAgICAgICB2YXIgc2NhbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNjYWxlXCIpIGFzIEhUTUxEaXZFbGVtZW50O1xyXG4gICAgICAgICAgICBzY2FsZS5pbm5lclRleHQgPSBlICsgJyUnO1xyXG5cclxuICAgICAgICB9LHRoaXMpO1xyXG5cclxuXHJcbiAgICAgICAgdmFyIGJ0bkJ1aWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5CdWlsZFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICBpZiAoYnRuQnVpbGQpIHtcclxuICAgICAgICAgICAgYnRuQnVpbGQub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBkZXNpZ25lci50b0FycnJheSgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgb3V0cHV0VGV4dCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgZGF0YSBvZiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvdXRwdXRUZXh0ICs9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG91dHB1dFRleHQgKz0gJ1xcclxcbic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBvdXRwdXQudGV4dENvbnRlbnQgPSBvdXRwdXRUZXh0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbm5ldyBFeGFtcGxlcygpLm1haW4oKTsiLCIvKmpzbGludCBvbmV2YXI6dHJ1ZSwgdW5kZWY6dHJ1ZSwgbmV3Y2FwOnRydWUsIHJlZ2V4cDp0cnVlLCBiaXR3aXNlOnRydWUsIG1heGVycjo1MCwgaW5kZW50OjQsIHdoaXRlOmZhbHNlLCBub21lbjpmYWxzZSwgcGx1c3BsdXM6ZmFsc2UgKi9cbi8qZ2xvYmFsIGRlZmluZTpmYWxzZSwgcmVxdWlyZTpmYWxzZSwgZXhwb3J0czpmYWxzZSwgbW9kdWxlOmZhbHNlLCBzaWduYWxzOmZhbHNlICovXG5cbi8qKiBAbGljZW5zZVxuICogSlMgU2lnbmFscyA8aHR0cDovL21pbGxlcm1lZGVpcm9zLmdpdGh1Yi5jb20vanMtc2lnbmFscy8+XG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIEF1dGhvcjogTWlsbGVyIE1lZGVpcm9zXG4gKiBWZXJzaW9uOiAxLjAuMCAtIEJ1aWxkOiAyNjggKDIwMTIvMTEvMjkgMDU6NDggUE0pXG4gKi9cblxuKGZ1bmN0aW9uKGdsb2JhbCl7XG5cbiAgICAvLyBTaWduYWxCaW5kaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIC8qKlxuICAgICAqIE9iamVjdCB0aGF0IHJlcHJlc2VudHMgYSBiaW5kaW5nIGJldHdlZW4gYSBTaWduYWwgYW5kIGEgbGlzdGVuZXIgZnVuY3Rpb24uXG4gICAgICogPGJyIC8+LSA8c3Ryb25nPlRoaXMgaXMgYW4gaW50ZXJuYWwgY29uc3RydWN0b3IgYW5kIHNob3VsZG4ndCBiZSBjYWxsZWQgYnkgcmVndWxhciB1c2Vycy48L3N0cm9uZz5cbiAgICAgKiA8YnIgLz4tIGluc3BpcmVkIGJ5IEpvYSBFYmVydCBBUzMgU2lnbmFsQmluZGluZyBhbmQgUm9iZXJ0IFBlbm5lcidzIFNsb3QgY2xhc3Nlcy5cbiAgICAgKiBAYXV0aG9yIE1pbGxlciBNZWRlaXJvc1xuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqIEBpbnRlcm5hbFxuICAgICAqIEBuYW1lIFNpZ25hbEJpbmRpbmdcbiAgICAgKiBAcGFyYW0ge1NpZ25hbH0gc2lnbmFsIFJlZmVyZW5jZSB0byBTaWduYWwgb2JqZWN0IHRoYXQgbGlzdGVuZXIgaXMgY3VycmVudGx5IGJvdW5kIHRvLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIEhhbmRsZXIgZnVuY3Rpb24gYm91bmQgdG8gdGhlIHNpZ25hbC5cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzT25jZSBJZiBiaW5kaW5nIHNob3VsZCBiZSBleGVjdXRlZCBqdXN0IG9uY2UuXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtsaXN0ZW5lckNvbnRleHRdIENvbnRleHQgb24gd2hpY2ggbGlzdGVuZXIgd2lsbCBiZSBleGVjdXRlZCAob2JqZWN0IHRoYXQgc2hvdWxkIHJlcHJlc2VudCB0aGUgYHRoaXNgIHZhcmlhYmxlIGluc2lkZSBsaXN0ZW5lciBmdW5jdGlvbikuXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtwcmlvcml0eV0gVGhlIHByaW9yaXR5IGxldmVsIG9mIHRoZSBldmVudCBsaXN0ZW5lci4gKGRlZmF1bHQgPSAwKS5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTaWduYWxCaW5kaW5nKHNpZ25hbCwgbGlzdGVuZXIsIGlzT25jZSwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSkge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBIYW5kbGVyIGZ1bmN0aW9uIGJvdW5kIHRvIHRoZSBzaWduYWwuXG4gICAgICAgICAqIEB0eXBlIEZ1bmN0aW9uXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9saXN0ZW5lciA9IGxpc3RlbmVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBiaW5kaW5nIHNob3VsZCBiZSBleGVjdXRlZCBqdXN0IG9uY2UuXG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2lzT25jZSA9IGlzT25jZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ29udGV4dCBvbiB3aGljaCBsaXN0ZW5lciB3aWxsIGJlIGV4ZWN1dGVkIChvYmplY3QgdGhhdCBzaG91bGQgcmVwcmVzZW50IHRoZSBgdGhpc2AgdmFyaWFibGUgaW5zaWRlIGxpc3RlbmVyIGZ1bmN0aW9uKS5cbiAgICAgICAgICogQG1lbWJlck9mIFNpZ25hbEJpbmRpbmcucHJvdG90eXBlXG4gICAgICAgICAqIEBuYW1lIGNvbnRleHRcbiAgICAgICAgICogQHR5cGUgT2JqZWN0fHVuZGVmaW5lZHxudWxsXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBsaXN0ZW5lckNvbnRleHQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlZmVyZW5jZSB0byBTaWduYWwgb2JqZWN0IHRoYXQgbGlzdGVuZXIgaXMgY3VycmVudGx5IGJvdW5kIHRvLlxuICAgICAgICAgKiBAdHlwZSBTaWduYWxcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3NpZ25hbCA9IHNpZ25hbDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogTGlzdGVuZXIgcHJpb3JpdHlcbiAgICAgICAgICogQHR5cGUgTnVtYmVyXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLl9wcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG4gICAgfVxuXG4gICAgU2lnbmFsQmluZGluZy5wcm90b3R5cGUgPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGJpbmRpbmcgaXMgYWN0aXZlIGFuZCBzaG91bGQgYmUgZXhlY3V0ZWQuXG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZSA6IHRydWUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERlZmF1bHQgcGFyYW1ldGVycyBwYXNzZWQgdG8gbGlzdGVuZXIgZHVyaW5nIGBTaWduYWwuZGlzcGF0Y2hgIGFuZCBgU2lnbmFsQmluZGluZy5leGVjdXRlYC4gKGN1cnJpZWQgcGFyYW1ldGVycylcbiAgICAgICAgICogQHR5cGUgQXJyYXl8bnVsbFxuICAgICAgICAgKi9cbiAgICAgICAgcGFyYW1zIDogbnVsbCxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2FsbCBsaXN0ZW5lciBwYXNzaW5nIGFyYml0cmFyeSBwYXJhbWV0ZXJzLlxuICAgICAgICAgKiA8cD5JZiBiaW5kaW5nIHdhcyBhZGRlZCB1c2luZyBgU2lnbmFsLmFkZE9uY2UoKWAgaXQgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHJlbW92ZWQgZnJvbSBzaWduYWwgZGlzcGF0Y2ggcXVldWUsIHRoaXMgbWV0aG9kIGlzIHVzZWQgaW50ZXJuYWxseSBmb3IgdGhlIHNpZ25hbCBkaXNwYXRjaC48L3A+XG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IFtwYXJhbXNBcnJdIEFycmF5IG9mIHBhcmFtZXRlcnMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBsaXN0ZW5lclxuICAgICAgICAgKiBAcmV0dXJuIHsqfSBWYWx1ZSByZXR1cm5lZCBieSB0aGUgbGlzdGVuZXIuXG4gICAgICAgICAqL1xuICAgICAgICBleGVjdXRlIDogZnVuY3Rpb24gKHBhcmFtc0Fycikge1xuICAgICAgICAgICAgdmFyIGhhbmRsZXJSZXR1cm4sIHBhcmFtcztcbiAgICAgICAgICAgIGlmICh0aGlzLmFjdGl2ZSAmJiAhIXRoaXMuX2xpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zID0gdGhpcy5wYXJhbXM/IHRoaXMucGFyYW1zLmNvbmNhdChwYXJhbXNBcnIpIDogcGFyYW1zQXJyO1xuICAgICAgICAgICAgICAgIGhhbmRsZXJSZXR1cm4gPSB0aGlzLl9saXN0ZW5lci5hcHBseSh0aGlzLmNvbnRleHQsIHBhcmFtcyk7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2lzT25jZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmRldGFjaCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBoYW5kbGVyUmV0dXJuO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZXRhY2ggYmluZGluZyBmcm9tIHNpZ25hbC5cbiAgICAgICAgICogLSBhbGlhcyB0bzogbXlTaWduYWwucmVtb3ZlKG15QmluZGluZy5nZXRMaXN0ZW5lcigpKTtcbiAgICAgICAgICogQHJldHVybiB7RnVuY3Rpb258bnVsbH0gSGFuZGxlciBmdW5jdGlvbiBib3VuZCB0byB0aGUgc2lnbmFsIG9yIGBudWxsYCBpZiBiaW5kaW5nIHdhcyBwcmV2aW91c2x5IGRldGFjaGVkLlxuICAgICAgICAgKi9cbiAgICAgICAgZGV0YWNoIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNCb3VuZCgpPyB0aGlzLl9zaWduYWwucmVtb3ZlKHRoaXMuX2xpc3RlbmVyLCB0aGlzLmNvbnRleHQpIDogbnVsbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIGJpbmRpbmcgaXMgc3RpbGwgYm91bmQgdG8gdGhlIHNpZ25hbCBhbmQgaGF2ZSBhIGxpc3RlbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgaXNCb3VuZCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAoISF0aGlzLl9zaWduYWwgJiYgISF0aGlzLl9saXN0ZW5lcik7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IElmIFNpZ25hbEJpbmRpbmcgd2lsbCBvbmx5IGJlIGV4ZWN1dGVkIG9uY2UuXG4gICAgICAgICAqL1xuICAgICAgICBpc09uY2UgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNPbmNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gSGFuZGxlciBmdW5jdGlvbiBib3VuZCB0byB0aGUgc2lnbmFsLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0TGlzdGVuZXIgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGlzdGVuZXI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge1NpZ25hbH0gU2lnbmFsIHRoYXQgbGlzdGVuZXIgaXMgY3VycmVudGx5IGJvdW5kIHRvLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0U2lnbmFsIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hbDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVsZXRlIGluc3RhbmNlIHByb3BlcnRpZXNcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9kZXN0cm95IDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3NpZ25hbDtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9saXN0ZW5lcjtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmNvbnRleHQ7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICB0b1N0cmluZyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnW1NpZ25hbEJpbmRpbmcgaXNPbmNlOicgKyB0aGlzLl9pc09uY2UgKycsIGlzQm91bmQ6JysgdGhpcy5pc0JvdW5kKCkgKycsIGFjdGl2ZTonICsgdGhpcy5hY3RpdmUgKyAnXSc7XG4gICAgICAgIH1cblxuICAgIH07XG5cblxuLypnbG9iYWwgU2lnbmFsQmluZGluZzpmYWxzZSovXG5cbiAgICAvLyBTaWduYWwgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlTGlzdGVuZXIobGlzdGVuZXIsIGZuTmFtZSkge1xuICAgICAgICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoICdsaXN0ZW5lciBpcyBhIHJlcXVpcmVkIHBhcmFtIG9mIHtmbn0oKSBhbmQgc2hvdWxkIGJlIGEgRnVuY3Rpb24uJy5yZXBsYWNlKCd7Zm59JywgZm5OYW1lKSApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQ3VzdG9tIGV2ZW50IGJyb2FkY2FzdGVyXG4gICAgICogPGJyIC8+LSBpbnNwaXJlZCBieSBSb2JlcnQgUGVubmVyJ3MgQVMzIFNpZ25hbHMuXG4gICAgICogQG5hbWUgU2lnbmFsXG4gICAgICogQGF1dGhvciBNaWxsZXIgTWVkZWlyb3NcbiAgICAgKiBAY29uc3RydWN0b3JcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBTaWduYWwoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSBBcnJheS48U2lnbmFsQmluZGluZz5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2JpbmRpbmdzID0gW107XG4gICAgICAgIHRoaXMuX3ByZXZQYXJhbXMgPSBudWxsO1xuXG4gICAgICAgIC8vIGVuZm9yY2UgZGlzcGF0Y2ggdG8gYXdheXMgd29yayBvbiBzYW1lIGNvbnRleHQgKCM0NylcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLmRpc3BhdGNoID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIFNpZ25hbC5wcm90b3R5cGUuZGlzcGF0Y2guYXBwbHkoc2VsZiwgYXJndW1lbnRzKTtcbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBTaWduYWwucHJvdG90eXBlID0ge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBTaWduYWxzIFZlcnNpb24gTnVtYmVyXG4gICAgICAgICAqIEB0eXBlIFN0cmluZ1xuICAgICAgICAgKiBAY29uc3RcbiAgICAgICAgICovXG4gICAgICAgIFZFUlNJT04gOiAnMS4wLjAnLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBTaWduYWwgc2hvdWxkIGtlZXAgcmVjb3JkIG9mIHByZXZpb3VzbHkgZGlzcGF0Y2hlZCBwYXJhbWV0ZXJzIGFuZFxuICAgICAgICAgKiBhdXRvbWF0aWNhbGx5IGV4ZWN1dGUgbGlzdGVuZXIgZHVyaW5nIGBhZGQoKWAvYGFkZE9uY2UoKWAgaWYgU2lnbmFsIHdhc1xuICAgICAgICAgKiBhbHJlYWR5IGRpc3BhdGNoZWQgYmVmb3JlLlxuICAgICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBtZW1vcml6ZSA6IGZhbHNlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfc2hvdWxkUHJvcGFnYXRlIDogdHJ1ZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgU2lnbmFsIGlzIGFjdGl2ZSBhbmQgc2hvdWxkIGJyb2FkY2FzdCBldmVudHMuXG4gICAgICAgICAqIDxwPjxzdHJvbmc+SU1QT1JUQU5UOjwvc3Ryb25nPiBTZXR0aW5nIHRoaXMgcHJvcGVydHkgZHVyaW5nIGEgZGlzcGF0Y2ggd2lsbCBvbmx5IGFmZmVjdCB0aGUgbmV4dCBkaXNwYXRjaCwgaWYgeW91IHdhbnQgdG8gc3RvcCB0aGUgcHJvcGFnYXRpb24gb2YgYSBzaWduYWwgdXNlIGBoYWx0KClgIGluc3RlYWQuPC9wPlxuICAgICAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICAgICAqL1xuICAgICAgICBhY3RpdmUgOiB0cnVlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgICAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzT25jZVxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gW2xpc3RlbmVyQ29udGV4dF1cbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IFtwcmlvcml0eV1cbiAgICAgICAgICogQHJldHVybiB7U2lnbmFsQmluZGluZ31cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9yZWdpc3Rlckxpc3RlbmVyIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBpc09uY2UsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpIHtcblxuICAgICAgICAgICAgdmFyIHByZXZJbmRleCA9IHRoaXMuX2luZGV4T2ZMaXN0ZW5lcihsaXN0ZW5lciwgbGlzdGVuZXJDb250ZXh0KSxcbiAgICAgICAgICAgICAgICBiaW5kaW5nO1xuXG4gICAgICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGJpbmRpbmcgPSB0aGlzLl9iaW5kaW5nc1twcmV2SW5kZXhdO1xuICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nLmlzT25jZSgpICE9PSBpc09uY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgY2Fubm90IGFkZCcrIChpc09uY2U/ICcnIDogJ09uY2UnKSArJygpIHRoZW4gYWRkJysgKCFpc09uY2U/ICcnIDogJ09uY2UnKSArJygpIHRoZSBzYW1lIGxpc3RlbmVyIHdpdGhvdXQgcmVtb3ZpbmcgdGhlIHJlbGF0aW9uc2hpcCBmaXJzdC4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJpbmRpbmcgPSBuZXcgU2lnbmFsQmluZGluZyh0aGlzLCBsaXN0ZW5lciwgaXNPbmNlLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9hZGRCaW5kaW5nKGJpbmRpbmcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZih0aGlzLm1lbW9yaXplICYmIHRoaXMuX3ByZXZQYXJhbXMpe1xuICAgICAgICAgICAgICAgIGJpbmRpbmcuZXhlY3V0ZSh0aGlzLl9wcmV2UGFyYW1zKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmc7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7U2lnbmFsQmluZGluZ30gYmluZGluZ1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2FkZEJpbmRpbmcgOiBmdW5jdGlvbiAoYmluZGluZykge1xuICAgICAgICAgICAgLy9zaW1wbGlmaWVkIGluc2VydGlvbiBzb3J0XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMuX2JpbmRpbmdzLmxlbmd0aDtcbiAgICAgICAgICAgIGRvIHsgLS1uOyB9IHdoaWxlICh0aGlzLl9iaW5kaW5nc1tuXSAmJiBiaW5kaW5nLl9wcmlvcml0eSA8PSB0aGlzLl9iaW5kaW5nc1tuXS5fcHJpb3JpdHkpO1xuICAgICAgICAgICAgdGhpcy5fYmluZGluZ3Muc3BsaWNlKG4gKyAxLCAwLCBiaW5kaW5nKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICAgICAgICogQHJldHVybiB7bnVtYmVyfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2luZGV4T2ZMaXN0ZW5lciA6IGZ1bmN0aW9uIChsaXN0ZW5lciwgY29udGV4dCkge1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLl9iaW5kaW5ncy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgY3VyO1xuICAgICAgICAgICAgd2hpbGUgKG4tLSkge1xuICAgICAgICAgICAgICAgIGN1ciA9IHRoaXMuX2JpbmRpbmdzW25dO1xuICAgICAgICAgICAgICAgIGlmIChjdXIuX2xpc3RlbmVyID09PSBsaXN0ZW5lciAmJiBjdXIuY29udGV4dCA9PT0gY29udGV4dCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENoZWNrIGlmIGxpc3RlbmVyIHdhcyBhdHRhY2hlZCB0byBTaWduYWwuXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dF1cbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gaWYgU2lnbmFsIGhhcyB0aGUgc3BlY2lmaWVkIGxpc3RlbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgaGFzIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBjb250ZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5kZXhPZkxpc3RlbmVyKGxpc3RlbmVyLCBjb250ZXh0KSAhPT0gLTE7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEFkZCBhIGxpc3RlbmVyIHRvIHRoZSBzaWduYWwuXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIFNpZ25hbCBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgICAgICAgKiBAcGFyYW0ge09iamVjdH0gW2xpc3RlbmVyQ29udGV4dF0gQ29udGV4dCBvbiB3aGljaCBsaXN0ZW5lciB3aWxsIGJlIGV4ZWN1dGVkIChvYmplY3QgdGhhdCBzaG91bGQgcmVwcmVzZW50IHRoZSBgdGhpc2AgdmFyaWFibGUgaW5zaWRlIGxpc3RlbmVyIGZ1bmN0aW9uKS5cbiAgICAgICAgICogQHBhcmFtIHtOdW1iZXJ9IFtwcmlvcml0eV0gVGhlIHByaW9yaXR5IGxldmVsIG9mIHRoZSBldmVudCBsaXN0ZW5lci4gTGlzdGVuZXJzIHdpdGggaGlnaGVyIHByaW9yaXR5IHdpbGwgYmUgZXhlY3V0ZWQgYmVmb3JlIGxpc3RlbmVycyB3aXRoIGxvd2VyIHByaW9yaXR5LiBMaXN0ZW5lcnMgd2l0aCBzYW1lIHByaW9yaXR5IGxldmVsIHdpbGwgYmUgZXhlY3V0ZWQgYXQgdGhlIHNhbWUgb3JkZXIgYXMgdGhleSB3ZXJlIGFkZGVkLiAoZGVmYXVsdCA9IDApXG4gICAgICAgICAqIEByZXR1cm4ge1NpZ25hbEJpbmRpbmd9IEFuIE9iamVjdCByZXByZXNlbnRpbmcgdGhlIGJpbmRpbmcgYmV0d2VlbiB0aGUgU2lnbmFsIGFuZCBsaXN0ZW5lci5cbiAgICAgICAgICovXG4gICAgICAgIGFkZCA6IGZ1bmN0aW9uIChsaXN0ZW5lciwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSkge1xuICAgICAgICAgICAgdmFsaWRhdGVMaXN0ZW5lcihsaXN0ZW5lciwgJ2FkZCcpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdGVyTGlzdGVuZXIobGlzdGVuZXIsIGZhbHNlLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGxpc3RlbmVyIHRvIHRoZSBzaWduYWwgdGhhdCBzaG91bGQgYmUgcmVtb3ZlZCBhZnRlciBmaXJzdCBleGVjdXRpb24gKHdpbGwgYmUgZXhlY3V0ZWQgb25seSBvbmNlKS5cbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgU2lnbmFsIGhhbmRsZXIgZnVuY3Rpb24uXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbbGlzdGVuZXJDb250ZXh0XSBDb250ZXh0IG9uIHdoaWNoIGxpc3RlbmVyIHdpbGwgYmUgZXhlY3V0ZWQgKG9iamVjdCB0aGF0IHNob3VsZCByZXByZXNlbnQgdGhlIGB0aGlzYCB2YXJpYWJsZSBpbnNpZGUgbGlzdGVuZXIgZnVuY3Rpb24pLlxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gW3ByaW9yaXR5XSBUaGUgcHJpb3JpdHkgbGV2ZWwgb2YgdGhlIGV2ZW50IGxpc3RlbmVyLiBMaXN0ZW5lcnMgd2l0aCBoaWdoZXIgcHJpb3JpdHkgd2lsbCBiZSBleGVjdXRlZCBiZWZvcmUgbGlzdGVuZXJzIHdpdGggbG93ZXIgcHJpb3JpdHkuIExpc3RlbmVycyB3aXRoIHNhbWUgcHJpb3JpdHkgbGV2ZWwgd2lsbCBiZSBleGVjdXRlZCBhdCB0aGUgc2FtZSBvcmRlciBhcyB0aGV5IHdlcmUgYWRkZWQuIChkZWZhdWx0ID0gMClcbiAgICAgICAgICogQHJldHVybiB7U2lnbmFsQmluZGluZ30gQW4gT2JqZWN0IHJlcHJlc2VudGluZyB0aGUgYmluZGluZyBiZXR3ZWVuIHRoZSBTaWduYWwgYW5kIGxpc3RlbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgYWRkT25jZSA6IGZ1bmN0aW9uIChsaXN0ZW5lciwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSkge1xuICAgICAgICAgICAgdmFsaWRhdGVMaXN0ZW5lcihsaXN0ZW5lciwgJ2FkZE9uY2UnKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9yZWdpc3Rlckxpc3RlbmVyKGxpc3RlbmVyLCB0cnVlLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIGEgc2luZ2xlIGxpc3RlbmVyIGZyb20gdGhlIGRpc3BhdGNoIHF1ZXVlLlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBIYW5kbGVyIGZ1bmN0aW9uIHRoYXQgc2hvdWxkIGJlIHJlbW92ZWQuXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbY29udGV4dF0gRXhlY3V0aW9uIGNvbnRleHQgKHNpbmNlIHlvdSBjYW4gYWRkIHRoZSBzYW1lIGhhbmRsZXIgbXVsdGlwbGUgdGltZXMgaWYgZXhlY3V0aW5nIGluIGEgZGlmZmVyZW50IGNvbnRleHQpLlxuICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbn0gTGlzdGVuZXIgaGFuZGxlciBmdW5jdGlvbi5cbiAgICAgICAgICovXG4gICAgICAgIHJlbW92ZSA6IGZ1bmN0aW9uIChsaXN0ZW5lciwgY29udGV4dCkge1xuICAgICAgICAgICAgdmFsaWRhdGVMaXN0ZW5lcihsaXN0ZW5lciwgJ3JlbW92ZScpO1xuXG4gICAgICAgICAgICB2YXIgaSA9IHRoaXMuX2luZGV4T2ZMaXN0ZW5lcihsaXN0ZW5lciwgY29udGV4dCk7XG4gICAgICAgICAgICBpZiAoaSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9iaW5kaW5nc1tpXS5fZGVzdHJveSgpOyAvL25vIHJlYXNvbiB0byBhIFNpZ25hbEJpbmRpbmcgZXhpc3QgaWYgaXQgaXNuJ3QgYXR0YWNoZWQgdG8gYSBzaWduYWxcbiAgICAgICAgICAgICAgICB0aGlzLl9iaW5kaW5ncy5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbGlzdGVuZXI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzIGZyb20gdGhlIFNpZ25hbC5cbiAgICAgICAgICovXG4gICAgICAgIHJlbW92ZUFsbCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5fYmluZGluZ3MubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKG4tLSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdzW25dLl9kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9iaW5kaW5ncy5sZW5ndGggPSAwO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IE51bWJlciBvZiBsaXN0ZW5lcnMgYXR0YWNoZWQgdG8gdGhlIFNpZ25hbC5cbiAgICAgICAgICovXG4gICAgICAgIGdldE51bUxpc3RlbmVycyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9iaW5kaW5ncy5sZW5ndGg7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFN0b3AgcHJvcGFnYXRpb24gb2YgdGhlIGV2ZW50LCBibG9ja2luZyB0aGUgZGlzcGF0Y2ggdG8gbmV4dCBsaXN0ZW5lcnMgb24gdGhlIHF1ZXVlLlxuICAgICAgICAgKiA8cD48c3Ryb25nPklNUE9SVEFOVDo8L3N0cm9uZz4gc2hvdWxkIGJlIGNhbGxlZCBvbmx5IGR1cmluZyBzaWduYWwgZGlzcGF0Y2gsIGNhbGxpbmcgaXQgYmVmb3JlL2FmdGVyIGRpc3BhdGNoIHdvbid0IGFmZmVjdCBzaWduYWwgYnJvYWRjYXN0LjwvcD5cbiAgICAgICAgICogQHNlZSBTaWduYWwucHJvdG90eXBlLmRpc2FibGVcbiAgICAgICAgICovXG4gICAgICAgIGhhbHQgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLl9zaG91bGRQcm9wYWdhdGUgPSBmYWxzZTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGlzcGF0Y2gvQnJvYWRjYXN0IFNpZ25hbCB0byBhbGwgbGlzdGVuZXJzIGFkZGVkIHRvIHRoZSBxdWV1ZS5cbiAgICAgICAgICogQHBhcmFtIHsuLi4qfSBbcGFyYW1zXSBQYXJhbWV0ZXJzIHRoYXQgc2hvdWxkIGJlIHBhc3NlZCB0byBlYWNoIGhhbmRsZXIuXG4gICAgICAgICAqL1xuICAgICAgICBkaXNwYXRjaCA6IGZ1bmN0aW9uIChwYXJhbXMpIHtcbiAgICAgICAgICAgIGlmICghIHRoaXMuYWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcGFyYW1zQXJyID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSxcbiAgICAgICAgICAgICAgICBuID0gdGhpcy5fYmluZGluZ3MubGVuZ3RoLFxuICAgICAgICAgICAgICAgIGJpbmRpbmdzO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5tZW1vcml6ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3ByZXZQYXJhbXMgPSBwYXJhbXNBcnI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghIG4pIHtcbiAgICAgICAgICAgICAgICAvL3Nob3VsZCBjb21lIGFmdGVyIG1lbW9yaXplXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBiaW5kaW5ncyA9IHRoaXMuX2JpbmRpbmdzLnNsaWNlKCk7IC8vY2xvbmUgYXJyYXkgaW4gY2FzZSBhZGQvcmVtb3ZlIGl0ZW1zIGR1cmluZyBkaXNwYXRjaFxuICAgICAgICAgICAgdGhpcy5fc2hvdWxkUHJvcGFnYXRlID0gdHJ1ZTsgLy9pbiBjYXNlIGBoYWx0YCB3YXMgY2FsbGVkIGJlZm9yZSBkaXNwYXRjaCBvciBkdXJpbmcgdGhlIHByZXZpb3VzIGRpc3BhdGNoLlxuXG4gICAgICAgICAgICAvL2V4ZWN1dGUgYWxsIGNhbGxiYWNrcyB1bnRpbCBlbmQgb2YgdGhlIGxpc3Qgb3IgdW50aWwgYSBjYWxsYmFjayByZXR1cm5zIGBmYWxzZWAgb3Igc3RvcHMgcHJvcGFnYXRpb25cbiAgICAgICAgICAgIC8vcmV2ZXJzZSBsb29wIHNpbmNlIGxpc3RlbmVycyB3aXRoIGhpZ2hlciBwcmlvcml0eSB3aWxsIGJlIGFkZGVkIGF0IHRoZSBlbmQgb2YgdGhlIGxpc3RcbiAgICAgICAgICAgIGRvIHsgbi0tOyB9IHdoaWxlIChiaW5kaW5nc1tuXSAmJiB0aGlzLl9zaG91bGRQcm9wYWdhdGUgJiYgYmluZGluZ3Nbbl0uZXhlY3V0ZShwYXJhbXNBcnIpICE9PSBmYWxzZSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEZvcmdldCBtZW1vcml6ZWQgYXJndW1lbnRzLlxuICAgICAgICAgKiBAc2VlIFNpZ25hbC5tZW1vcml6ZVxuICAgICAgICAgKi9cbiAgICAgICAgZm9yZ2V0IDogZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHRoaXMuX3ByZXZQYXJhbXMgPSBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgYWxsIGJpbmRpbmdzIGZyb20gc2lnbmFsIGFuZCBkZXN0cm95IGFueSByZWZlcmVuY2UgdG8gZXh0ZXJuYWwgb2JqZWN0cyAoZGVzdHJveSBTaWduYWwgb2JqZWN0KS5cbiAgICAgICAgICogPHA+PHN0cm9uZz5JTVBPUlRBTlQ6PC9zdHJvbmc+IGNhbGxpbmcgYW55IG1ldGhvZCBvbiB0aGUgc2lnbmFsIGluc3RhbmNlIGFmdGVyIGNhbGxpbmcgZGlzcG9zZSB3aWxsIHRocm93IGVycm9ycy48L3A+XG4gICAgICAgICAqL1xuICAgICAgICBkaXNwb3NlIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBbGwoKTtcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9iaW5kaW5ncztcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9wcmV2UGFyYW1zO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgb2JqZWN0LlxuICAgICAgICAgKi9cbiAgICAgICAgdG9TdHJpbmcgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gJ1tTaWduYWwgYWN0aXZlOicrIHRoaXMuYWN0aXZlICsnIG51bUxpc3RlbmVyczonKyB0aGlzLmdldE51bUxpc3RlbmVycygpICsnXSc7XG4gICAgICAgIH1cblxuICAgIH07XG5cblxuICAgIC8vIE5hbWVzcGFjZSAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqXG4gICAgICogU2lnbmFscyBuYW1lc3BhY2VcbiAgICAgKiBAbmFtZXNwYWNlXG4gICAgICogQG5hbWUgc2lnbmFsc1xuICAgICAqL1xuICAgIHZhciBzaWduYWxzID0gU2lnbmFsO1xuXG4gICAgLyoqXG4gICAgICogQ3VzdG9tIGV2ZW50IGJyb2FkY2FzdGVyXG4gICAgICogQHNlZSBTaWduYWxcbiAgICAgKi9cbiAgICAvLyBhbGlhcyBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgKHNlZSAjZ2gtNDQpXG4gICAgc2lnbmFscy5TaWduYWwgPSBTaWduYWw7XG5cblxuXG4gICAgLy9leHBvcnRzIHRvIG11bHRpcGxlIGVudmlyb25tZW50c1xuICAgIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCl7IC8vQU1EXG4gICAgICAgIGRlZmluZShmdW5jdGlvbiAoKSB7IHJldHVybiBzaWduYWxzOyB9KTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIG1vZHVsZS5leHBvcnRzKXsgLy9ub2RlXG4gICAgICAgIG1vZHVsZS5leHBvcnRzID0gc2lnbmFscztcbiAgICB9IGVsc2UgeyAvL2Jyb3dzZXJcbiAgICAgICAgLy91c2Ugc3RyaW5nIGJlY2F1c2Ugb2YgR29vZ2xlIGNsb3N1cmUgY29tcGlsZXIgQURWQU5DRURfTU9ERVxuICAgICAgICAvKmpzbGludCBzdWI6dHJ1ZSAqL1xuICAgICAgICBnbG9iYWxbJ3NpZ25hbHMnXSA9IHNpZ25hbHM7XG4gICAgfVxuXG59KHRoaXMpKTtcbiIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi8uLi9jb3JlL1ZlY3RvcjInO1xyXG5pbXBvcnQgeyBWZWN0b3JEZXNpZ25lciB9IGZyb20gJy4uL1ZlY3RvckRlc2lnbmVyJztcclxuaW1wb3J0IHsgQ29udHJvbCB9IGZyb20gJy4uL1ZpZXdzL0NvbnRyb2wnO1xyXG5pbXBvcnQgeyBBbmNob3JDb250cm9sIH0gZnJvbSAnLi4vVmlld3MvQW5jaG9yQ29udHJvbCc7XHJcbmltcG9ydCB7IFBvbHlnb25Db250cm9sIH0gZnJvbSAnLi4vVmlld3MvUG9seWdvbkNvbnRyb2wnO1xyXG5pbXBvcnQgeyBDb25uZWN0b3IgfSBmcm9tICcuLi9WaWV3cy9Db25uZWN0b3InO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVG9vbEJhciB7XHJcbiAgICBwdWJsaWMgZG9tOiBIVE1MRGl2RWxlbWVudDtcclxuICAgIHByaXZhdGUgZGVzaWduZXI6IFZlY3RvckRlc2lnbmVyO1xyXG4gICAgcHVibGljIF92aXNpYmxlOiBib29sZWFuO1xyXG5cclxuICAgIHByaXZhdGUgYnRuQ29ubmVjdFRvOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIHByaXZhdGUgYnRuRGVsZXRlOiBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIHByaXZhdGUgYnRuU2V0dGluZzogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGRlc2lnbmVyOiBWZWN0b3JEZXNpZ25lcikge1xyXG4gICAgICAgIC8vICAgaWNvbi1kZWxldGUyIGljb24tQVRTXHJcbiAgICAgICAgLy8gICBpY29uLXNlbmRcclxuICAgICAgICAvLyAgIGljb24tc2V0dGluZ1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIgPSBkZXNpZ25lcjtcclxuICAgICAgICB0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMuZG9tLmNsYXNzTmFtZSA9ICd0b29sYmFyJztcclxuXHJcbiAgICAgICAgdGhpcy5idG5Db25uZWN0VG8gPSB0aGlzLmNyZWF0ZUJ1dHRvbignaWNvbi1BVFMnKTtcclxuICAgICAgICB0aGlzLmJ0bkNvbm5lY3RUby50aXRsZSA9ICflu7rnq4vmlrDnmoTnur/mrrUnO1xyXG4gICAgICAgIHRoaXMuYnRuQ29ubmVjdFRvLm9uY2xpY2sgPSB0aGlzLmNyZWF0ZU9iamVjdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZG9tLmFwcGVuZENoaWxkKHRoaXMuYnRuQ29ubmVjdFRvKTtcclxuXHJcbiAgICAgICAgdGhpcy5idG5EZWxldGUgPSB0aGlzLmNyZWF0ZUJ1dHRvbignaWNvbi1kZWxldGUyJyk7XHJcbiAgICAgICAgdGhpcy5idG5EZWxldGUudGl0bGUgPSAn5Yig6Zmk5a+56LGhJztcclxuICAgICAgICB0aGlzLmJ0bkRlbGV0ZS5vbmNsaWNrID0gdGhpcy5kZWxldGVPYmplY3QuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRvbS5hcHBlbmRDaGlsZCh0aGlzLmJ0bkRlbGV0ZSk7XHJcblxyXG4gICAgICAgIHRoaXMuYnRuU2V0dGluZyA9IHRoaXMuY3JlYXRlQnV0dG9uKCdpY29uLXNldHRpbmcnKTtcclxuICAgICAgICB0aGlzLmJ0blNldHRpbmcudGl0bGUgPSAn6K6+572uKOacquiuvue9riknO1xyXG4gICAgICAgIHRoaXMuYnRuU2V0dGluZy5vbmNsaWNrID0gdGhpcy5zZXR0aW5nT2JqZWN0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQodGhpcy5idG5TZXR0aW5nKTtcclxuICAgICAgICB0aGlzLnZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnZpZXdDb250cm9sLm9ubW92ZS5hZGQoKCkgPT4ge1xyXG5cclxuXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlT2JqZWN0KCkge1xyXG4gICAgICAgIHZhciBvcmlnaW4gPSB0aGlzLmRlc2lnbmVyLnNlbGVjdGVkO1xyXG4gICAgICAgIGlmIChvcmlnaW4gaW5zdGFuY2VvZiBBbmNob3JDb250cm9sKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2lnbmVyLmNvbm5lY3RvciA9IG5ldyBDb25uZWN0b3IodGhpcy5kZXNpZ25lciwgb3JpZ2luKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgZGVsZXRlT2JqZWN0KCkge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBvcmlnaW4gPSB0aGlzLmRlc2lnbmVyLnNlbGVjdGVkO1xyXG4gICAgICAgIGlmIChvcmlnaW4gaW5zdGFuY2VvZiBBbmNob3JDb250cm9sKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBvcmlnaW4uZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChvcmlnaW4gaW5zdGFuY2VvZiBQb2x5Z29uQ29udHJvbCkge1xyXG4gICAgICAgICAgICBvcmlnaW4uZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldHRpbmdPYmplY3QoKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBzZXRQb3NpdGlvbih2OiBWZWN0b3IyKSB7XHJcbiAgICAgICAgdGhpcy5kb20uc3R5bGUubWFyZ2luTGVmdCA9IHYueCArICdweCc7XHJcbiAgICAgICAgdGhpcy5kb20uc3R5bGUubWFyZ2luVG9wID0gdi55ICsgJ3B4J1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fdmlzaWJsZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZSA/IFwiXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVzaWduZXIuc2VsZWN0ZWQgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZXNpZ25lci5zZWxlY3RlZCBpbnN0YW5jZW9mIEFuY2hvckNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuQ29ubmVjdFRvLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuRGVsZXRlLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuU2V0dGluZy5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkNvbm5lY3RUby5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5EZWxldGUuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idG5TZXR0aW5nLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVCdXR0b24oaWNvbk5hbWU6IHN0cmluZyk6IEhUTUxCdXR0b25FbGVtZW50IHtcclxuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbicpO1xyXG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgnaWNvbmZvbnQnKTtcclxuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoaWNvbk5hbWUpO1xyXG4gICAgICAgIHZhciBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gJ0J1dHRvbic7XHJcbiAgICAgICAgYnV0dG9uLmFwcGVuZENoaWxkKGljb24pO1xyXG4gICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vY29yZS9WZWN0b3IyXCI7XHJcblxyXG5leHBvcnQgZW51bSBUZXh0QWxpZ24ge1xyXG4gICAgTEVGVCA9IDAsXHJcbiAgICBDRU5URVIgPSAxLFxyXG4gICAgUklHSFQgPSAyXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZW51bSBSZW5kZXJUeXBlIHtcclxuICAgIFNUUk9LRSA9IDEsXHJcbiAgICBGSUxMID0gMixcclxuICAgIEFMTCA9IDNcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUmVuZGVyZXIge1xyXG5cclxuICAgIHByaXZhdGUgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9jb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9sb2NhbE9mZnNldDogVmVjdG9yMjtcclxuXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGNhbnZhcz86IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgaWYgKGNhbnZhcykge1xyXG4gICAgICAgICAgICB0aGlzLl9jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImNhbnZhc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fY29udGV4dCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgICAgICB0aGlzLl9jb250ZXh0Lmdsb2JhbEFscGhhID0gMS4wO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQudHJhbnNsYXRlKDAsIDApO1xyXG4gICAgICAgIHRoaXMuX2xvY2FsT2Zmc2V0ID0gbmV3IFZlY3RvcjIoMC41LCAwLjUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhcHBseShkaXY6IEhUTUxEaXZFbGVtZW50KSB7XHJcbiAgICAgICAgZGl2LmFwcGVuZENoaWxkKHRoaXMuY2FudmFzKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGNsZWFyKGNvbG9yOiBzdHJpbmcgPSAnI0E5QTlBOScpIHtcclxuXHJcbiAgICAgICAgLy8gdmFyIG9sZCA9IHRoaXMuY29udGV4dC5maWxsU3R5bGU7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5jbGVhclJlY3QoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodCk7XHJcbiAgICAgICAgLy8gdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IGNvbG9yO1xyXG4gICAgICAgIC8vIHRoaXMuY29udGV4dC5maWxsUmVjdCgwLCAwLCB0aGlzLl93aWR0aCwgdGhpcy5faGVpZ2h0KVxyXG4gICAgICAgIC8vIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBvbGQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlc2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHZhciByYXRpbyA9IHRoaXMuZ2V0UGl4ZWxSYXRpbyh0aGlzLmNvbnRleHQpO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcclxuICAgICAgICB0aGlzLmNhbnZhcy5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnO1xyXG5cclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoICogcmF0aW87XHJcbiAgICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gaGVpZ2h0ICogcmF0aW87XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBnZXRQaXhlbFJhdGlvKGNvbnRleHQpIHtcclxuICAgICAgICB2YXIgYmFja2luZ1N0b3JlID0gY29udGV4dC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XHJcbiAgICAgICAgICAgIGNvbnRleHQud2Via2l0QmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgICAgICAgICBjb250ZXh0Lm1vekJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgICAgICAgICAgY29udGV4dC5tc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgICAgICAgICAgY29udGV4dC5vQmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgICAgICAgICBjb250ZXh0LmJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgMTtcclxuICAgICAgICByZXR1cm4gKHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDEpIC8gYmFja2luZ1N0b3JlO1xyXG4gICAgfTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBnZXQgY29udGV4dCgpOiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jb250ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY2FudmFzKCk6IEhUTUxDYW52YXNFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2FudmFzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHRleHQgXHJcbiAgICAgKiBAcGFyYW0geCBcclxuICAgICAqIEBwYXJhbSB5IFxyXG4gICAgICogQHBhcmFtIHdpZHRoIFxyXG4gICAgICogQHBhcmFtIGFsaWduIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZmlsbFRleHQodGV4dDogc3RyaW5nLCB4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgYWxpZ246IFRleHRBbGlnbikge1xyXG4gICAgICAgIHZhciBsZWZ0ID0geDtcclxuICAgICAgICBpZiAoYWxpZ24gPT09IFRleHRBbGlnbi5SSUdIVCkge1xyXG4gICAgICAgICAgICBjb25zdCBtZWFzdXJlID0gdGhpcy5jb250ZXh0Lm1lYXN1cmVUZXh0KHRleHQpO1xyXG4gICAgICAgICAgICBpZiAod2lkdGggPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGVmdCA9IHggLSBtZWFzdXJlLndpZHRoO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGVmdCA9IHggKyB3aWR0aCAtIG1lYXN1cmUud2lkdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKGFsaWduID09PSBUZXh0QWxpZ24uQ0VOVEVSKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lYXN1cmUgPSB0aGlzLmNvbnRleHQubWVhc3VyZVRleHQodGV4dCk7XHJcbiAgICAgICAgICAgIGlmICh3aWR0aCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZWZ0ID0geCAtIG1lYXN1cmUud2lkdGggLyAyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGVmdCA9IHggKyAod2lkdGggKyBtZWFzdXJlLndpZHRoKSAvIDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxUZXh0KHRleHQsIGxlZnQgKyB0aGlzLl9sb2NhbE9mZnNldC54LCB5ICsgdGhpcy5fbG9jYWxPZmZzZXQueSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGNpcmNsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIHR5cGU6IFJlbmRlclR5cGUpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmFyYyh4LCB5LCByYWRpdXMsIDAsIE1hdGguUEkgKiAyLCBmYWxzZSk7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFJlbmRlclR5cGUuQUxMIHx8IHR5cGUgPT09IFJlbmRlclR5cGUuRklMTCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZSA9PT0gUmVuZGVyVHlwZS5BTEwgfHwgdHlwZSA9PT0gUmVuZGVyVHlwZS5TVFJPS0UpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHBvbHlnb24ocG9pbnRzOiBWZWN0b3IyW10sIGNsb3NlZDogYm9vbGVhbiwgdHlwZTogUmVuZGVyVHlwZSkge1xyXG4gICAgICAgIGlmKHBvaW50cyA9PSBudWxsIHx8IHBvaW50cy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKHBvaW50c1swXS54ICsgdGhpcy5fbG9jYWxPZmZzZXQueCwgcG9pbnRzWzBdLnkgKyB0aGlzLl9sb2NhbE9mZnNldC55KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHBvaW50c1tpXS54ICsgdGhpcy5fbG9jYWxPZmZzZXQueCwgcG9pbnRzW2ldLnkgKyB0aGlzLl9sb2NhbE9mZnNldC55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNsb3NlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0eXBlID09PSBSZW5kZXJUeXBlLkFMTCB8fCB0eXBlID09PSBSZW5kZXJUeXBlLkZJTEwpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFJlbmRlclR5cGUuQUxMIHx8IHR5cGUgPT09IFJlbmRlclR5cGUuU1RST0tFKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBmaWxsUmVjdGFuZ2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3Ryb2tlUmVjdGFuZ2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUm90YXRlXHJcbiAgICAgKiBAcGFyYW0geCBcclxuICAgICAqIEBwYXJhbSB5IFxyXG4gICAgICogQHBhcmFtIGFuZ2xlIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgdHJhbnNsYXRlUm90YXRlKHg6IG51bWJlciwgeTogbnVtYmVyLCBhbmdsZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSh4LCB5KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQucm90YXRlKGFuZ2xlIC8gMTgwICogTWF0aC5QSSk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSgteCwgLXkpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIGRyYXcgbGluZSBcclxuICAgICAqIEBwYXJhbSB4MSBcclxuICAgICAqIEBwYXJhbSB5MSBcclxuICAgICAqIEBwYXJhbSB4MiBcclxuICAgICAqIEBwYXJhbSB5MiBcclxuICAgICAqIEBwYXJhbSBsaW5lV2lkdGggXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBsaW5lKHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIsIGxpbmVXaWR0aDogbnVtYmVyID0gMSkge1xyXG4gICAgICAgIGlmIChsaW5lV2lkdGggJiYgbGluZVdpZHRoICE9PSB0aGlzLmNvbnRleHQubGluZVdpZHRoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKHgxICsgdGhpcy5fbG9jYWxPZmZzZXQueCwgeTEgKyB0aGlzLl9sb2NhbE9mZnNldC55KTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHgyICsgdGhpcy5fbG9jYWxPZmZzZXQueCwgeTIgKyB0aGlzLl9sb2NhbE9mZnNldC55KTtcclxuICAgICAgICAvLyB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZmlsbCBwb2x5Z29uXHJcbiAgICAgKiBAcGFyYW0gcG9pbnRzIFxyXG4gICAgICogQHBhcmFtIGNsb3NlZCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGZpbGxQYXRoKHBvaW50czogVmVjdG9yMltdLCBjbG9zZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhwb2ludHNbMF0ueCArIHRoaXMuX2xvY2FsT2Zmc2V0LngsIHBvaW50c1swXS55ICsgdGhpcy5fbG9jYWxPZmZzZXQueSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyhwb2ludHNbaV0ueCArIHRoaXMuX2xvY2FsT2Zmc2V0LngsIHBvaW50c1tpXS55ICsgdGhpcy5fbG9jYWxPZmZzZXQueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjbG9zZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIHBvbHlnb25cclxuICAgICAqIEBwYXJhbSBwb2ludHMgXHJcbiAgICAgKiBAcGFyYW0gY2xvc2VkIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3Ryb2tlUGF0aChwb2ludHM6IFZlY3RvcjJbXSwgY2xvc2VkOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8ocG9pbnRzWzBdLnggKyB0aGlzLl9sb2NhbE9mZnNldC54LCBwb2ludHNbMF0ueSArIHRoaXMuX2xvY2FsT2Zmc2V0LnkpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8ocG9pbnRzW2ldLnggKyB0aGlzLl9sb2NhbE9mZnNldC54LCBwb2ludHNbaV0ueSArIHRoaXMuX2xvY2FsT2Zmc2V0LnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2xvc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIHNldCBvcGFjaXR5KHY6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5nbG9iYWxBbHBoYSA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBvcGFjaXR5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5nbG9iYWxBbHBoYTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBzZXQgc3Ryb2tlQ29sb3Iodjogc3RyaW5nIHwgQ2FudmFzR3JhZGllbnQgfCBDYW52YXNQYXR0ZXJuKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHN0cm9rZUNvbG9yKCk6IHN0cmluZyB8IENhbnZhc0dyYWRpZW50IHwgQ2FudmFzUGF0dGVybiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBzZXQgZmlsbENvbG9yKHY6IHN0cmluZyB8IENhbnZhc0dyYWRpZW50IHwgQ2FudmFzUGF0dGVybikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgZmlsbENvbG9yKCk6IHN0cmluZyB8IENhbnZhc0dyYWRpZW50IHwgQ2FudmFzUGF0dGVybiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5maWxsU3R5bGU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgc2V0IGxpbmVXaWR0aCh2OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQubGluZVdpZHRoID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGxpbmVXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnRleHQubGluZVdpZHRoO1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCAqIGFzIHNpZ25hbHMgZnJvbSBcInNpZ25hbHNcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi9jb3JlL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgQm91bmRzIH0gZnJvbSBcIi4vY29tbW9uL0JvdW5kc1wiO1xyXG5pbXBvcnQgeyBSZW5kZXJlciB9IGZyb20gXCIuL1JlbmRlcmVyXCI7XHJcbmltcG9ydCB7IFNpemUgfSBmcm9tIFwiLi9jb21tb24vU2l6ZVwiO1xyXG5pbXBvcnQgeyBWaWV3Q29udHJvbGxlciB9IGZyb20gXCIuL1ZpZXdDb250cm9sbGVyXCI7XHJcbmltcG9ydCB7IENvbnRyb2wgfSBmcm9tIFwiLi9WaWV3cy9Db250cm9sXCI7XHJcbmltcG9ydCB7IFRvb2xCYXIgfSBmcm9tIFwiLi9NZW51cy9Ub29sQmFyXCI7XHJcbmltcG9ydCB7IEFuY2hvckNvbnRyb2wgfSBmcm9tICcuL1ZpZXdzL0FuY2hvckNvbnRyb2wnO1xyXG5pbXBvcnQgeyBQb2x5Z29uQ29udHJvbCB9IGZyb20gJy4vVmlld3MvUG9seWdvbkNvbnRyb2wnO1xyXG5pbXBvcnQgeyBDb25uZWN0b3IgfSBmcm9tIFwiLi9WaWV3cy9Db25uZWN0b3JcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yRGVzaWduZXIge1xyXG5cclxuICAgIHByaXZhdGUgX3ZpZXdDb250cm9sOiBWaWV3Q29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgX2RpdjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9ib3VuZHM6IEJvdW5kcztcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjtcclxuICAgIHByaXZhdGUgX3pvb206IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2NlbnRlcjogVmVjdG9yMjtcclxuICAgIHByaXZhdGUgX3JlczogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcnVuU3RhdGU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9vblJlbmRlcjogc2lnbmFscy5TaWduYWw7XHJcbiAgICBwcml2YXRlIF9vblpvb206IHNpZ25hbHMuU2lnbmFsO1xyXG4gICAgcHVibGljIF93aWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIF9oZWlnaHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBfY2hpbGRyZW46IENvbnRyb2xbXTtcclxuICAgIHByaXZhdGUgX3Rvb2xiYXI6IFRvb2xCYXI7XHJcbiAgICBwcml2YXRlIF9zZWxlY3RlZDogQ29udHJvbDtcclxuXHJcbiAgICBwdWJsaWMgY29ubmVjdG9yOiBDb25uZWN0b3I7XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXQgY2hpbGRyZW4oKTogQ29udHJvbFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0b29sYmFyKCk6IFRvb2xCYXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b29sYmFyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHNlbGVjdGVkKCk6IENvbnRyb2wge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgc2VsZWN0ZWQodmFsdWU6IENvbnRyb2wpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWQgIT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RlZC5zZWxlY3RlZFVwZGF0ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvb2xiYXIudmlzaWJsZSA9IGZhbHNlOztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIHZhciBwdCA9IHRoaXMuY29udmVydFBvaW50KHRoaXMuX3NlbGVjdGVkLmdldENlbnRlcigpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkLnNlbGVjdGVkVXBkYXRlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b29sYmFyLnNldFBvc2l0aW9uKHB0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9vbGJhci52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkKC4uLmN0bHM6IENvbnRyb2xbXSkge1xyXG4gICAgICAgIGZvciAobGV0IGN0bCBvZiBjdGxzKSB7XHJcbiAgICAgICAgICAgIGlmIChjdGwgaW5zdGFuY2VvZiBBbmNob3JDb250cm9sKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnB1c2goY3RsKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChjdGwgaW5zdGFuY2VvZiBQb2x5Z29uQ29udHJvbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi51bnNoaWZ0KGN0bCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgcmVtb3ZlKC4uLmN0bHM6IENvbnRyb2xbXSkge1xyXG4gICAgICAgIGZvciAobGV0IGN0bCBvZiBjdGxzKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjdGwpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgdG9BcnJyYXkoKTogbnVtYmVyW11bXVtdIHtcclxuICAgICAgICB2YXIgcmVzdWx0OiBudW1iZXJbXVtdW10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBjb250cm9sIG9mIHRoaXMuX2NoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGlmIChjb250cm9sIGluc3RhbmNlb2YgUG9seWdvbkNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNvbnRyb2wudG9BcnJheSgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGRpdjogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLl9kaXYgPSBkaXY7XHJcbiAgICAgICAgdGhpcy5fem9vbSA9IDEwMDtcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX29uUmVuZGVyID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XHJcbiAgICAgICAgdGhpcy5fb25ab29tID0gbmV3IHNpZ25hbHMuU2lnbmFsKClcclxuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IG5ldyBSZW5kZXJlcigpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdDb250cm9sID0gbmV3IFZpZXdDb250cm9sbGVyKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3J1blN0YXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuYXBwbHkoZGl2KTtcclxuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgICAgIHRoaXMuX3ZpZXdDb250cm9sLm9ubW92ZS5hZGQodGhpcy5tb3ZlVG8sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3Rvb2xiYXIgPSBuZXcgVG9vbEJhcih0aGlzKTtcclxuICAgICAgICB0aGlzLl9kaXYuYXBwZW5kQ2hpbGQodGhpcy5fdG9vbGJhci5kb20pO1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHJlc2l6ZSgpIHtcclxuICAgICAgICB0aGlzLl93aWR0aCA9IHRoaXMuX2Rpdi5jbGllbnRXaWR0aDtcclxuICAgICAgICB0aGlzLl9oZWlnaHQgPSB0aGlzLl9kaXYuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5fYm91bmRzID0gbmV3IEJvdW5kcygtdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICAgIHRoaXMuX2NlbnRlciA9IHRoaXMuX2JvdW5kcy5nZXRDZW50ZXIoKTtcclxuICAgICAgICB0aGlzLl9yZXMgPSAxIC8gKHRoaXMuX3pvb20gLyAxMDApO1xyXG4gICAgICAgIHRoaXMubW92ZVRvKHRoaXMuX3pvb20sIHRoaXMuX2NlbnRlcik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgbW92ZVRvKHpvb206IG51bWJlciwgY2VudGVyOiBWZWN0b3IyLCB0cmFuczogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHpvb20gPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl96b29tICE9IHpvb20pIHtcclxuICAgICAgICAgICAgdGhpcy5fem9vbSA9IHpvb207XHJcbiAgICAgICAgICAgIHRoaXMub25ab29tLmRpc3BhdGNoKHpvb20pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKGNlbnRlcik7XHJcbiAgICAgICAgaWYgKCh0aGlzLl9jZW50ZXIgIT0gY2VudGVyKSB8fCB0cmFucykge1xyXG4gICAgICAgICAgICB0aGlzLl9jZW50ZXIgPSBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3JlcyA9IDEgLyAodGhpcy5fem9vbSAvIDEwMCk7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aCAqIHRoaXMuX3JlcztcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKiB0aGlzLl9yZXM7XHJcbiAgICAgICAgLy/ojrflj5bmlrDnmoTop4blm77ojIPlm7TjgIJcclxuICAgICAgICB0aGlzLl9ib3VuZHMgPSBuZXcgQm91bmRzKGNlbnRlci54IC0gd2lkdGggLyAyLCBjZW50ZXIueSAtIGhlaWdodCAvIDIsIGNlbnRlci54ICsgd2lkdGggLyAyLCBjZW50ZXIueSArIGhlaWdodCAvIDIpO1xyXG4gICAgICAgIC8vcmVkcmF3XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHJ1bigpIHtcclxuICAgICAgICB0aGlzLl9ydW5TdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5ncmFwaGljUmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZ3JhcGhpY1JlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX3J1blN0YXRlIHx8IHRoaXMuaXNEaXNwb3NlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuY2xlYXIoKTtcclxuICAgICAgICB2YXIgcHQgPSB0aGlzLmNvbnZlcnRQb2ludChuZXcgVmVjdG9yMigtNSwgLTUpKTtcclxuXHJcbiAgICAgICAgZm9yICh2YXIgY29udHJvbCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBjb250cm9sLnJlbmRlcigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29ubmVjdG9yKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuc3Ryb2tlQ29sb3IgPSAnIzAwRkYwMCdcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5saW5lKDAsIHRoaXMudmlld0NvbnRyb2wucG9zaXRpb24ueSwgdGhpcy53aWR0aCwgdGhpcy52aWV3Q29udHJvbC5wb3NpdGlvbi55LCAxKTtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5saW5lKHRoaXMudmlld0NvbnRyb2wucG9zaXRpb24ueCwgMCwgdGhpcy52aWV3Q29udHJvbC5wb3NpdGlvbi54LCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLm9uUmVuZGVyLmRpc3BhdGNoKCk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzRGlzcG9zZWQgJiYgdGhpcy5fcnVuU3RhdGUpIHtcclxuICAgICAgICAgICAgLy/nu6fnu63kuIvkuIDluKdcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuZ3JhcGhpY1JlbmRlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWwhuinhuWbvuWdkOagh+i9rOaNouS4umNhbnZhc+WdkOagh+OAglxyXG4gICAgICogQHBhcmFtIHBvaW50IFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgY29udmVydFBvaW50KHBvaW50OiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgdmFyIHJlc29sdXRpb24gPSB0aGlzLnJlcztcclxuICAgICAgICB2YXIgZXh0ZW50ID0gdGhpcy5ib3VuZHM7XHJcbiAgICAgICAgdmFyIHggPSAocG9pbnQueCAvIHJlc29sdXRpb24gKyAoLWV4dGVudC5sZWZ0IC8gcmVzb2x1dGlvbikpO1xyXG4gICAgICAgIHZhciB5ID0gKHBvaW50LnkgLyByZXNvbHV0aW9uICsgKC1leHRlbnQudG9wIC8gcmVzb2x1dGlvbikpO1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWwhmNhbnZhc+WdkOagh+i9rOaNouS4uiDop4blm77lnZDmoIdcclxuICAgICAqL1xyXG4gICAgcHVibGljIG1hcFBvaW50KHBvaW50OiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgdmFyIHV4ID0gKHBvaW50LnggKyB0aGlzLmJvdW5kcy5sZWZ0IC8gdGhpcy5yZXMpICogdGhpcy5yZXM7XHJcbiAgICAgICAgdmFyIHV5ID0gKHBvaW50LnkgKyB0aGlzLmJvdW5kcy50b3AgLyB0aGlzLnJlcykgKiB0aGlzLnJlcztcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodXgsIHV5KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBjb252ZXJ0UG9pbnRzKHBvaW50czogVmVjdG9yMltdKTogVmVjdG9yMltdIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2YgcG9pbnRzKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuY29udmVydFBvaW50KHBvaW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGdldCBpc0Rpc3Bvc2VkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHpvb20oKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fem9vbTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgcmVzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGJvdW5kcygpOiBCb3VuZHMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZHM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCByZW5kZXJlcigpOiBSZW5kZXJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlbmRlcmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgY2VudGVyKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9jZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB2aWV3Q29udHJvbCgpOiBWaWV3Q29udHJvbGxlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZpZXdDb250cm9sO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgb25SZW5kZXIoKTogc2lnbmFscy5TaWduYWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vblJlbmRlcjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldCBvblpvb20oKTogc2lnbmFscy5TaWduYWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vblpvb207XHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG4gICAgcHVibGljIGdldCBjb250YWluZXIoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kaXY7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0ICogYXMgc2lnbmFscyBmcm9tIFwic2lnbmFsc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uL2NvcmUvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBWZWN0b3JEZXNpZ25lciB9IGZyb20gXCIuL1ZlY3RvckRlc2lnbmVyXCI7XHJcbmltcG9ydCB7IEFuY2hvckNvbnRyb2wgfSBmcm9tIFwiLi9WaWV3cy9BbmNob3JDb250cm9sXCI7XHJcbmltcG9ydCB7IENvbnRyb2wgfSBmcm9tIFwiLi9WaWV3cy9Db250cm9sXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXdDb250cm9sbGVyIHtcclxuICAgIHByaXZhdGUgZGVzaWduZXI6IFZlY3RvckRlc2lnbmVyO1xyXG4gICAgcHJpdmF0ZSBfZHJhZ2dpbmc6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9vbm1vdmU6IHNpZ25hbHMuU2lnbmFsO1xyXG4gICAgcHVibGljIHBvc2l0aW9uOiBWZWN0b3IyO1xyXG4gICAgcHJpdmF0ZSBfcHJlc3NfcG9zaXRpb246IFZlY3RvcjI7XHJcbiAgICBwcml2YXRlIF9ob3Zlck9iamVjdDogQ29udHJvbDtcclxuICAgIHByaXZhdGUgcHJlc3NlZF9zdGF0ZTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX3ByZXNzZWRPYmplY3Q6IENvbnRyb2w7XHJcbiAgICBwcml2YXRlIF9pc2NhbmNlbGVkOiBib29sZWFuO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgb25tb3ZlKCk6IHNpZ25hbHMuU2lnbmFsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb25tb3ZlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihkZXNpZ25lcjogVmVjdG9yRGVzaWduZXIpIHtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyID0gZGVzaWduZXI7XHJcbiAgICAgICAgdGhpcy5faXNjYW5jZWxlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX29ubW92ZSA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yMigtMSwgLTEpO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2FudmFzLm9uZGJsY2xpY2sgPSB0aGlzLm1vdXNlX2RibGNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5yZW5kZXJlci5jYW52YXMub25tb3VzZWRvd24gPSB0aGlzLm1vdXNlX2Rvd24uYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLmNhbnZhcy5vbm1vdXNlbW92ZSA9IHRoaXMubW91c2VfbW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2FudmFzLm9ubW91c2V1cCA9IHRoaXMubW91c2VfdXAuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLmNhbnZhcy5vbndoZWVsID0gdGhpcy53aGVlbENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2FudmFzLm9uc2Nyb2xsID0gdGhpcy53aGVlbENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2FudmFzLm9uY29udGV4dG1lbnUgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLmNhbnZhcy5vbndoZWVsID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLmNhbnZhcy5vbnNjcm9sbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5yZW5kZXJlci5jYW52YXMub25tb3VzZWRvd24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2FudmFzLm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLmNhbnZhcy5vbm1vdXNldXAgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2FudmFzLm9uZGJsY2xpY2sgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgd2hlZWxDaGFuZ2UoZTogV2hlZWxFdmVudCkge1xyXG4gICAgICAgIC8vICB2YXIgZGVsdGEgPSAoLWUuZGVsdGFZIC8gMTAwMCkgKiA1MDtcclxuICAgICAgICB2YXIgZGVsdGFsWCA9IHRoaXMuZGVzaWduZXIud2lkdGggLyAyIC0gZS5vZmZzZXRYO1xyXG4gICAgICAgIHZhciBkZWx0YWxZID0gdGhpcy5kZXNpZ25lci5oZWlnaHQgLyAyIC0gZS5vZmZzZXRZO1xyXG4gICAgICAgIHZhciBweCA9IG5ldyBWZWN0b3IyKGUub2Zmc2V0WCwgZS5vZmZzZXRZKTtcclxuICAgICAgICAvL+iuoeeul+e8qeaUvueahOS4reW/g+eCuVxyXG4gICAgICAgIHZhciB6b29tUG9pbnQgPSBuZXcgVmVjdG9yMigocHgueCArIHRoaXMuZGVzaWduZXIuYm91bmRzLmxlZnQgLyB0aGlzLmRlc2lnbmVyLnJlcykgKiB0aGlzLmRlc2lnbmVyLnJlcywgKHB4LnkgKyB0aGlzLmRlc2lnbmVyLmJvdW5kcy50b3AgLyB0aGlzLmRlc2lnbmVyLnJlcykgKiB0aGlzLmRlc2lnbmVyLnJlcyk7XHJcbiAgICAgICAgLy8gIHZhciB6b29tID0gIHRoaXMuZGVzaWduZXIuem9vbSArIGRlbHRhO1xyXG4gICAgICAgIHZhciB6b29tID0gMDtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHZhciBzY2FsZXMgPSBbNSwgMTAsIDIwLCAyNSwgNDAsIDUwLCA4MCwgMTAwLCAyMDAsIDI1MCwgNDAwLCA1MDAsIDgwMCwgMTAwMCwgMTI1MCwgMjAwMCwgMjUwMCwgMzAwMCwgNDAwMF07XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHNjYWxlcy5pbmRleE9mKHRoaXMuZGVzaWduZXIuem9vbSk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA9PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgaW5kZXggPSAxO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGUuZGVsdGFZIDwgMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gTWF0aC5taW4oaW5kZXggKyAxLCBzY2FsZXMubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gTWF0aC5tYXgoaW5kZXggLSAxLCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB6b29tID0gc2NhbGVzW2luZGV4XTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIG5ld1JlcyA9IDEgLyAoem9vbSAvIDEwMCk7XHJcbiAgICAgICAgdmFyIGNlbnRlciA9IG5ldyBWZWN0b3IyKHpvb21Qb2ludC54ICsgZGVsdGFsWCAqIG5ld1Jlcywgem9vbVBvaW50LnkgKyBkZWx0YWxZICogbmV3UmVzKTtcclxuICAgICAgICB0aGlzLm9ubW92ZS5kaXNwYXRjaCh6b29tLCBjZW50ZXIsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnN0b3BFdmVudEJ1YmJsZShlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3BFdmVudEJ1YmJsZShlOiBVSUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChlICYmIGUuc3RvcFByb3BhZ2F0aW9uKVxyXG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgd2luZG93LmV2ZW50LmNhbmNlbEJ1YmJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBtb3VzZV9kYmxjbGljayhlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHYgPSB0aGlzLmRlc2lnbmVyLm1hcFBvaW50KHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgIHZhciBhbmNob3IgPSBuZXcgQW5jaG9yQ29udHJvbCh0aGlzLmRlc2lnbmVyLCB2LngsIHYueSk7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5hZGQoYW5jaG9yKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIG1vdXNlX2Rvd24oZTogTW91c2VFdmVudCkge1xyXG4gICAgICAgIHRoaXMuY2FwdHVyZU1vdXNlKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVzaWduZXIuY29ubmVjdG9yICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKGUuYnV0dG9uID09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzaWduZXIuY29ubmVjdG9yLmNhbmNlbCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChlLmJ1dHRvbiA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2lnbmVyLmNvbm5lY3Rvci5jb21taXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRlc2lnbmVyLmNvbm5lY3RvciA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzY2FuY2VsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9pc2NhbmNlbGVkID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGUuYnV0dG9uID09IDIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVzaWduZXIuc2VsZWN0ZWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXNpZ25lci5zZWxlY3RlZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc2NhbmNlbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2hvdmVyT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ByZXNzZWRPYmplY3QgPSB0aGlzLl9ob3Zlck9iamVjdDtcclxuICAgICAgICAgICAgLy8gbW91c2UgZG93blxyXG4gICAgICAgICAgICB0aGlzLl9ob3Zlck9iamVjdC5kaXNwYXRjaEV2ZW50cygnb25Nb3VzZURvd24nKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9wcmVzc19wb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc3RvcEV2ZW50QnViYmxlKGUpO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2FudmFzLnN0eWxlLmN1cnNvciA9IFwibW92ZVwiO1xyXG5cclxuICAgICAgICB0aGlzLnByZXNzZWRfc3RhdGUgPSB0aGlzLmRlc2lnbmVyLnRvb2xiYXIudmlzaWJsZTtcclxuICAgICAgICBpZiAodGhpcy5wcmVzc2VkX3N0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzaWduZXIudG9vbGJhci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbW91c2VfbW92ZShlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzY2FuY2VsZWQpIHJldHVybjtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uID0gbmV3IFZlY3RvcjIoZS5wYWdlWCAtIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2FudmFzLm9mZnNldExlZnQsIGUucGFnZVkgLSB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLmNhbnZhcy5vZmZzZXRUb3ApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5kZXNpZ25lci5jb25uZWN0b3IgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBsZXQgdiA9IHRoaXMuZGVzaWduZXIubWFwUG9pbnQodGhpcy5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzaWduZXIuY29ubmVjdG9yLnVwZGF0ZSh2KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdnaW5nKSB7XHJcbiAgICAgICAgICAgIHZhciBwb3MgPSB0aGlzLnBvc2l0aW9uLnN1Yih0aGlzLl9wcmVzc19wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuX3ByZXNzX3Bvc2l0aW9uID0gdGhpcy5wb3NpdGlvbjtcclxuICAgICAgICAgICAgdmFyIGNlbnRlciA9IG5ldyBWZWN0b3IyKHRoaXMuZGVzaWduZXIuY2VudGVyLnggLSBwb3MueCAqIHRoaXMuZGVzaWduZXIucmVzLCB0aGlzLmRlc2lnbmVyLmNlbnRlci55IC0gcG9zLnkgKiB0aGlzLmRlc2lnbmVyLnJlcyk7XHJcbiAgICAgICAgICAgIHRoaXMub25tb3ZlLmRpc3BhdGNoKHRoaXMuZGVzaWduZXIuem9vbSwgY2VudGVyLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wRXZlbnRCdWJibGUoZSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgbGV0IHYgPSB0aGlzLmRlc2lnbmVyLm1hcFBvaW50KHRoaXMucG9zaXRpb24pO1xyXG5cclxuICAgICAgICBmb3IgKHZhciBpID0gdGhpcy5kZXNpZ25lci5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgICAgICB2YXIgY29udHJvbCA9IHRoaXMuZGVzaWduZXIuY2hpbGRyZW5baV07XHJcbiAgICAgICAgICAgIGlmIChjb250cm9sLmhpdCh2KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2hvdmVyT2JqZWN0ICE9IGNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5faG92ZXJPYmplY3QgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsZWF2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ob3Zlck9iamVjdC5kaXNwYXRjaEV2ZW50cygnb25Nb3VzZUxlYXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hvdmVyT2JqZWN0ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5faG92ZXJPYmplY3QgPSBjb250cm9sO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9ob3Zlck9iamVjdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGVudGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2hvdmVyT2JqZWN0LmRpc3BhdGNoRXZlbnRzKCdvbk1vdXNlRW50ZXInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ob3Zlck9iamVjdC5kaXNwYXRjaEV2ZW50cygnb25Nb3VzZU1vdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2hvdmVyT2JqZWN0LmRpc3BhdGNoRXZlbnRzKCdvbk1vdXNlTW92ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9ob3Zlck9iamVjdCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIGxlYXZlXHJcbiAgICAgICAgICAgIHRoaXMuX2hvdmVyT2JqZWN0LmRpc3BhdGNoRXZlbnRzKCdvbk1vdXNlTGVhdmUnKTtcclxuICAgICAgICAgICAgdGhpcy5faG92ZXJPYmplY3QgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdXNlX3VwKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNjYW5jZWxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc2NhbmNlbGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3ByZXNzZWRPYmplY3QpIHtcclxuICAgICAgICAgICAgLy8gbW91c2UgZG93blxyXG4gICAgICAgICAgICB0aGlzLl9wcmVzc2VkT2JqZWN0LmRpc3BhdGNoRXZlbnRzKCdvbk1vdXNlVXAnKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3ByZXNzZWRPYmplY3QgPT09IHRoaXMuX2hvdmVyT2JqZWN0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjbGlja1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faG92ZXJPYmplY3QuZGlzcGF0Y2hFdmVudHMoJ29uQ2xpY2snKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9wcmVzc2VkT2JqZWN0ID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlbGVhc2VNb3VzZSgpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yMihlLnBhZ2VYIC0gdGhpcy5kZXNpZ25lci5yZW5kZXJlci5jYW52YXMub2Zmc2V0TGVmdCwgZS5wYWdlWSAtIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2FudmFzLm9mZnNldFRvcCk7XHJcbiAgICAgICAgdGhpcy5fZHJhZ2dpbmcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN0b3BFdmVudEJ1YmJsZShlKTtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIudG9vbGJhci52aXNpYmxlID0gdGhpcy5wcmVzc2VkX3N0YXRlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIGNhcHR1cmVNb3VzZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2NhcHR1cmVpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNpZ25lci5yZW5kZXJlci5jYW52YXMub25tb3VzZW1vdmUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLmNhbnZhcy5vbm1vdXNldXAgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl9kb2N1bWVudF9tb3VzZW1vdmVIYW5kbGUgPSBkb2N1bWVudC5vbm1vdXNlbW92ZTtcclxuICAgICAgICAgICAgdGhpcy5fZG9jdW1lbnRfbW91c2V1cEhhbmRsZSA9IGRvY3VtZW50Lm9ubW91c2V1cDtcclxuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSB0aGlzLm1vdXNlX21vdmUuYmluZCh0aGlzKTs7XHJcbiAgICAgICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IHRoaXMubW91c2VfdXAuYmluZCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fY2FwdHVyZWluZyA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlbGVhc2VNb3VzZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fY2FwdHVyZWluZykge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IHRoaXMuX2RvY3VtZW50X21vdXNlbW92ZUhhbmRsZTtcclxuICAgICAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gdGhpcy5fZG9jdW1lbnRfbW91c2V1cEhhbmRsZTtcclxuICAgICAgICAgICAgdGhpcy5fY2FwdHVyZWluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLmNhbnZhcy5vbm1vdXNlbW92ZSA9IHRoaXMubW91c2VfbW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLmNhbnZhcy5vbm1vdXNldXAgPSB0aGlzLm1vdXNlX3VwLmJpbmQodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIF9jYXB0dXJlaW5nOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnRfbW91c2Vtb3ZlSGFuZGxlOiAoTW91c2VFdmVudCkgPT4gdm9pZDtcclxuICAgIHByaXZhdGUgX2RvY3VtZW50X21vdXNldXBIYW5kbGU6IChNb3VzZUV2ZW50KSA9PiB2b2lkO1xyXG5cclxuXHJcblxyXG59IiwiXHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi8uLi9jb3JlL1ZlY3RvcjInO1xyXG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnLi9Db250cm9sJztcclxuaW1wb3J0IHsgVmVjdG9yRGVzaWduZXIgfSBmcm9tICcuLi9WZWN0b3JEZXNpZ25lcic7XHJcbmltcG9ydCB7IEFuY2hvciB9IGZyb20gJy4uLy4uL2NvcmUvQW5jaG9yJztcclxuaW1wb3J0IHsgUmVuZGVyVHlwZSB9IGZyb20gJy4uL1JlbmRlcmVyJztcclxuaW1wb3J0IHsgYmFzZW5hbWUgfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IHsgUG9seWdvbkNvbnRyb2wgfSBmcm9tICcuL1BvbHlnb25Db250cm9sJztcclxuaW1wb3J0ICogYXMgc2lnbmFscyBmcm9tICdzaWduYWxzJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQW5jaG9yQ29udHJvbCBleHRlbmRzIENvbnRyb2wge1xyXG5cclxuICAgIHB1YmxpYyBwb3NpdGlvbjogVmVjdG9yMjtcclxuICAgIHByaXZhdGUgX2FuY2hvcjogQW5jaG9yO1xyXG4gICAgcHJpdmF0ZSBfb251cGRhdGU6IHNpZ25hbHMuU2lnbmFsO1xyXG4gICAgcHJpdmF0ZSBfcG9seWdvbnM6IFBvbHlnb25Db250cm9sW107XHJcblxyXG4gICAgcHVibGljIGdldCBvblVwZGF0ZSgpOiBzaWduYWxzLlNpZ25hbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29udXBkYXRlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGRlc2lnbmVyOiBWZWN0b3JEZXNpZ25lciwgeD86IG51bWJlciwgeT86IG51bWJlcikge1xyXG4gICAgICAgIHN1cGVyKGRlc2lnbmVyKTtcclxuICAgICAgICB0aGlzLl9vbnVwZGF0ZSA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xyXG4gICAgICAgIHRoaXMuX3BvbHlnb25zID0gW107XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IyKHggfCAwLCB5IHwgMCk7XHJcbiAgICAgICAgdGhpcy5fYW5jaG9yID0gbmV3IEFuY2hvcih0aGlzLmlkLCB0aGlzLnBvc2l0aW9uLngsIHRoaXMucG9zaXRpb24ueSk7XHJcbiAgICAgICAgdGhpcy5maWxsQ29sb3IgPSAnI2I1ZTYxZCc7XHJcbiAgICAgICAgdGhpcy5zdHJva2VDb2xvciA9ICcjRkZGRkZGJztcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBhZGRQb2x5Z29uKHA6IFBvbHlnb25Db250cm9sKSB7XHJcbiAgICAgICAgdGhpcy5fcG9seWdvbnMucHVzaChwKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBzZXRQb3NpdGlvbih2OiBWZWN0b3IyKSB7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHYuY2xvbmUoKTtcclxuICAgICAgICB0aGlzLl9hbmNob3Iuc2V0UG9zaXRpb24odik7XHJcblxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVzaWduZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbW92ZSh0aGlzKTtcclxuICAgICAgICAgICAgLy/liKDpmaTplJrngrnml7Yg5Yig6Zmk6ZSa54K555u46L+e57q/5q61XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9wb2x5Z29ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb2x5Z29uID0gdGhpcy5fcG9seWdvbnMuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzaWduZXIucmVtb3ZlKHBvbHlnb24pO1xyXG4gICAgICAgICAgICAgICAgcG9seWdvbi5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/plIDmr4HplJrngrlcclxuICAgICAgICAgICAgdGhpcy5fYW5jaG9yLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5fb251cGRhdGUucmVtb3ZlQWxsKCk7XHJcbiAgICAgICAgICAgIHN1cGVyLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5fYW5jaG9yLmJ1aWxkKCk7XHJcbiAgICAgICAgdGhpcy5vblVwZGF0ZS5kaXNwYXRjaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIuc2VsZWN0ZWQgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDZW50ZXIoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdGVkVXBkYXRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgc3VwZXIuc2VsZWN0ZWRVcGRhdGUodmFsdWUpO1xyXG4gICAgICAgIHRoaXMuZmlsbENvbG9yID0gdmFsdWUgPyAnIzAwNzhkNycgOiAnI2I1ZTYxZCc7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBoaXQocG9pbnQ6IFZlY3RvcjIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gcG9pbnQuaW5DaXJjbGUodGhpcy5wb3NpdGlvbiwgMTAgKiB0aGlzLmRlc2lnbmVyLnJlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLm9wYWNpdHkgPSB0aGlzLm9wYWNpdHk7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5yZW5kZXJlci5maWxsQ29sb3IgPSB0aGlzLmlzSG92ZXIgJiYgIXRoaXMuaXNTZWxlY3RlZCA/IHRoaXMuaG92ZXJDb2xvciA6IHRoaXMuZmlsbENvbG9yO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuc3Ryb2tlQ29sb3IgPSB0aGlzLnN0cm9rZUNvbG9yO1xyXG4gICAgICAgIHZhciBwdCA9IHRoaXMuZGVzaWduZXIuY29udmVydFBvaW50KHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2lyY2xlKHB0LngsIHB0LnksIDUsIFJlbmRlclR5cGUuQUxMIC8qIC8gdGhpcy5kZXNpZ25lci5yZXMgKi8pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGVmdCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLng7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0b3AoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb3NpdGlvbi55O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYW5jaG9yKCk6IEFuY2hvciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvcjtcclxuICAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vY29yZS9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IFZlY3RvckRlc2lnbmVyIH0gZnJvbSBcIi4uL1ZlY3RvckRlc2lnbmVyXCI7XHJcbmltcG9ydCB7IEFuY2hvckNvbnRyb2wgfSBmcm9tIFwiLi9BbmNob3JDb250cm9sXCI7XHJcbmltcG9ydCB7IFBvbHlnb25Db250cm9sIH0gZnJvbSBcIi4vUG9seWdvbkNvbnRyb2xcIjtcclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIENvbm5lY3RvciB7XHJcbiAgICBkZXNpZ25lcjogVmVjdG9yRGVzaWduZXI7XHJcblxyXG4gICAgb3JpZ2luOiBBbmNob3JDb250cm9sO1xyXG5cclxuICAgIG5ld0FuY2hvcjogQW5jaG9yQ29udHJvbDtcclxuXHJcbiAgICBuZXdTZWdtZW50OiBQb2x5Z29uQ29udHJvbDtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZGVzaWduZXI6IFZlY3RvckRlc2lnbmVyLCBvcmlnaW46IEFuY2hvckNvbnRyb2wpIHtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyID0gZGVzaWduZXI7XHJcbiAgICAgICAgdGhpcy5vcmlnaW4gPSBvcmlnaW47XHJcbiAgICAgICAgdGhpcy5uZXdBbmNob3IgPSBuZXcgQW5jaG9yQ29udHJvbCh0aGlzLmRlc2lnbmVyLCAtNTAsIDE4KTtcclxuICAgICAgICB0aGlzLm5ld1NlZ21lbnQgPSBuZXcgUG9seWdvbkNvbnRyb2wodGhpcy5kZXNpZ25lciwgb3JpZ2luLCB0aGlzLm5ld0FuY2hvcik7XHJcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLmFkZCh0aGlzLm5ld0FuY2hvciwgdGhpcy5uZXdTZWdtZW50KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUodj86IFZlY3RvcjIpIHtcclxuICAgICAgICBpZiAodiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3QW5jaG9yLnNldFBvc2l0aW9uKHYpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5ld0FuY2hvci51cGRhdGUoKTtcclxuICAgICAgICB0aGlzLm9yaWdpbi51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGNvbW1pdCgpIHtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnNlbGVjdGVkID0gdGhpcy5uZXdBbmNob3I7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhbmNlbCgpIHtcclxuICAgICAgICB0aGlzLm5ld1NlZ21lbnQuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMubmV3QW5jaG9yLmRpc3Bvc2UoKTtcclxuICAgICAgICB0aGlzLm9yaWdpbi51cGRhdGUoKTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uLy4uL2NvcmUvVmVjdG9yMic7XHJcbmltcG9ydCB7IFZlY3RvckRlc2lnbmVyIH0gZnJvbSAnLi4vVmVjdG9yRGVzaWduZXInO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sIHtcclxuXHJcbiAgICBwcml2YXRlIF9kZXNpZ25lcjogVmVjdG9yRGVzaWduZXJcclxuICAgIHB1YmxpYyBzdHJva2VDb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGZpbGxDb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIGhvdmVyQ29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyBvcGFjaXR5OiBudW1iZXI7XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIF9pc0hvdmVyOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfaXNTZWxlY3RlZDogYm9vbGVhbjtcclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBpZDogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGRlc2lnbmVyOiBWZWN0b3JEZXNpZ25lcikge1xyXG4gICAgICAgIHRoaXMuX2Rlc2lnbmVyID0gZGVzaWduZXI7XHJcbiAgICAgICAgdGhpcy5pZCA9IDExMTtcclxuICAgICAgICB0aGlzLl9pc0hvdmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5ob3ZlckNvbG9yID0gJyNmZjg4ODgnO1xyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IDAuNTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZGlzcG9zZSgpIHtcclxuICAgICAgICB0aGlzLl9kZXNpZ25lciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBkZXNpZ25lcigpOiBWZWN0b3JEZXNpZ25lciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2lnbmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoaXQocG9pbnQ6IFZlY3RvcjIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKCkge1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uTW91c2VFbnRlcigpIHtcclxuICAgICAgICB0aGlzLl9pc0hvdmVyID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25Nb3VzZUxlYXZlKCkge1xyXG4gICAgICAgIHRoaXMuX2lzSG92ZXIgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DbGljaygpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNlbGVjdGVkVXBkYXRlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5faXNTZWxlY3RlZCA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMub3BhY2l0eSA9IHZhbHVlID8gMSA6IDAuNTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBpc0hvdmVyKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc0hvdmVyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2VudGVyKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMigpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZGlzcGF0Y2hFdmVudHMoZXZlbnQ6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXNbZXZlbnRdICYmIHRoaXNbZXZlbnRdKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NlbGVjdGVkO1xyXG4gICAgfVxyXG59IiwiXHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi8uLi9jb3JlL1ZlY3RvcjInO1xyXG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnLi9Db250cm9sJztcclxuaW1wb3J0IHsgVmVjdG9yRGVzaWduZXIgfSBmcm9tICcuLi9WZWN0b3JEZXNpZ25lcic7XHJcbmltcG9ydCB7IFNlZ21lbnQgfSBmcm9tICcuLi8uLi9jb3JlL1NlZ21lbnQnO1xyXG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9jb3JlL0FuY2hvcic7XHJcbmltcG9ydCB7IEFuY2hvckNvbnRyb2wgfSBmcm9tICcuL0FuY2hvckNvbnRyb2wnO1xyXG5pbXBvcnQgeyBSZW5kZXJUeXBlIH0gZnJvbSAnLi4vUmVuZGVyZXInO1xyXG5pbXBvcnQgeyBCb3VuZHMgfSBmcm9tICcuLi9jb21tb24vQm91bmRzJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgUG9seWdvbkNvbnRyb2wgZXh0ZW5kcyBDb250cm9sIHtcclxuICAgIHByaXZhdGUgX3NlZ21lbnQ6IFNlZ21lbnQ7XHJcbiAgICBwdWJsaWMgdGhpY2tuZXNzOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHBvaW50czogVmVjdG9yMltdO1xyXG4gICAgcHJpdmF0ZSBfYm91bmRzOiBCb3VuZHM7XHJcbiAgICBwcml2YXRlIF9hbmNob3JzOiBBbmNob3JDb250cm9sW107XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZGVzaWduZXI6IFZlY3RvckRlc2lnbmVyLCBhbmNob3IxOiBBbmNob3JDb250cm9sLCBhbmNob3IyOiBBbmNob3JDb250cm9sKSB7XHJcbiAgICAgICAgc3VwZXIoZGVzaWduZXIpO1xyXG4gICAgICAgIHRoaXMuX2FuY2hvcnMgPSBbYW5jaG9yMSwgYW5jaG9yMl07XHJcbiAgICAgICAgdGhpcy50aGlja25lc3MgPSAxMDtcclxuICAgICAgICB0aGlzLnBvaW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2JvdW5kcyA9IG5ldyBCb3VuZHMoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5fc2VnbWVudCA9IG5ldyBTZWdtZW50KGFuY2hvcjEuYW5jaG9yLCBhbmNob3IyLmFuY2hvciwgdGhpcy50aGlja25lc3MpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5zdHJva2VDb2xvciA9ICcjRkZGRkZGJztcclxuICAgICAgICB0aGlzLmZpbGxDb2xvciA9ICcjODg4ODg4JztcclxuICAgICAgICB0aGlzLl9hbmNob3JzWzBdLm9uVXBkYXRlLmFkZCh0aGlzLnVwZGF0ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fYW5jaG9yc1sxXS5vblVwZGF0ZS5hZGQodGhpcy51cGRhdGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2FuY2hvcnNbMF0uYWRkUG9seWdvbih0aGlzKTtcclxuICAgICAgICB0aGlzLl9hbmNob3JzWzFdLmFkZFBvbHlnb24odGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVzaWduZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbW92ZSh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5fc2VnbWVudC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLl9hbmNob3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBhbmNob3JDb250cm9sID0gdGhpcy5fYW5jaG9ycy5zaGlmdCgpO1xyXG4gICAgICAgICAgICAgICAgYW5jaG9yQ29udHJvbC5vblVwZGF0ZS5yZW1vdmUodGhpcy51cGRhdGUsIHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFuY2hvckNvbnRyb2wuYW5jaG9yLnRhcmdldHMubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbW92ZShhbmNob3JDb250cm9sKTtcclxuICAgICAgICAgICAgICAgICAgICBhbmNob3JDb250cm9sLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGFuY2hvckNvbnRyb2wudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3VwZXIuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2VnbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuX2JvdW5kcyA9IG5ldyBCb3VuZHMoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHBvaW50IG9mIHRoaXMuX3NlZ21lbnQucG9pbnRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gbmV3IFZlY3RvcjIoKS5mcm9tQXJyYXkocG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludHMucHVzaCh2KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2JvdW5kcy5leHRlbmRGcm9tUG9pbnQodik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGhpdChwb2ludDogVmVjdG9yMik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBwb2ludC5pblBvbHlnb24odGhpcy5wb2ludHMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRVcGRhdGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlci5zZWxlY3RlZFVwZGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5maWxsQ29sb3IgPSB2YWx1ZSA/ICcjMDA3OGQ3JyA6ICcjODg4ODg4JztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DbGljaygpIHtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnNlbGVjdGVkID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2VudGVyKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ib3VuZHMuZ2V0Q2VudGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLm9wYWNpdHkgPSB0aGlzLm9wYWNpdHk7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5yZW5kZXJlci5maWxsQ29sb3IgPSB0aGlzLmlzSG92ZXIgJiYgIXRoaXMuaXNTZWxlY3RlZCA/IHRoaXMuaG92ZXJDb2xvciA6IHRoaXMuZmlsbENvbG9yO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuc3Ryb2tlQ29sb3IgPSB0aGlzLnN0cm9rZUNvbG9yO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIucmVuZGVyZXIucG9seWdvbih0aGlzLmRlc2lnbmVyLmNvbnZlcnRQb2ludHModGhpcy5wb2ludHMpLCB0cnVlLCBSZW5kZXJUeXBlLkFMTCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhbmNob3JzKCk6IEFuY2hvckNvbnRyb2xbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvcnM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyB0b0FycmF5KCk6IG51bWJlcltdW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWdtZW50LnBvaW50cztcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uLy4uL2NvcmUvVmVjdG9yMic7XHJcblxyXG5leHBvcnQgY2xhc3MgQm91bmRzIHtcclxuICAgIHB1YmxpYyBsZWZ0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgdG9wOiBudW1iZXI7XHJcbiAgICBwdWJsaWMgcmlnaHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBib3R0b206IG51bWJlcjtcclxuXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcclxuICAgICAgICB0aGlzLnRvcCA9IHRvcDtcclxuICAgICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbiAgICAgICAgdGhpcy5ib3R0b20gPSBib3R0b207XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmlnaHQgLSB0aGlzLmxlZnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5ib3R0b20gLSB0aGlzLnRvcDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q2VudGVyKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLmxlZnQgKyB0aGlzLndpZHRoIC8gMiwgdGhpcy50b3AgKyB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBleHRlbmQoYm91bmRzOiBCb3VuZHMpIHtcclxuICAgICAgICBpZiAodGhpcy5sZWZ0ID4gYm91bmRzLmxlZnQpIHtcclxuICAgICAgICAgICAgdGhpcy5sZWZ0ID0gYm91bmRzLmxlZnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRvcCA+IGJvdW5kcy50b3ApIHtcclxuICAgICAgICAgICAgdGhpcy50b3AgPSBib3VuZHMudG9wO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ib3R0b20gPCBib3VuZHMuYm90dG9tKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dG9tID0gYm91bmRzLmJvdHRvbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucmlnaHQgPCBib3VuZHMucmlnaHQpIHtcclxuICAgICAgICAgICAgdGhpcy5yaWdodCA9IGJvdW5kcy5yaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgaW50ZXJzZWN0KGJvdW5kczogQm91bmRzKSB7XHJcbiAgICAgICAgdmFyIGluTGVmdCA9IChcclxuICAgICAgICAgICAgKChib3VuZHMubGVmdCA+PSB0aGlzLmxlZnQpICYmIChib3VuZHMubGVmdCA8PSB0aGlzLnJpZ2h0KSkgfHwgKCh0aGlzLmxlZnQgPj0gYm91bmRzLmxlZnQpICYmICh0aGlzLmxlZnQgPD0gYm91bmRzLnJpZ2h0KSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBpblRvcCA9IChcclxuICAgICAgICAgICAgKChib3VuZHMudG9wID49IHRoaXMudG9wKSAmJiAoYm91bmRzLnRvcCA8PSB0aGlzLmJvdHRvbSkpIHx8ICgodGhpcy50b3AgPiBib3VuZHMudG9wKSAmJiAodGhpcy50b3AgPCBib3VuZHMuYm90dG9tKSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBpblJpZ2h0ID0gKFxyXG4gICAgICAgICAgICAoKGJvdW5kcy5yaWdodCA+PSB0aGlzLmxlZnQpICYmIChib3VuZHMucmlnaHQgPD0gdGhpcy5yaWdodCkpIHx8ICgodGhpcy5yaWdodCA+PSBib3VuZHMubGVmdCkgJiYgKHRoaXMucmlnaHQgPD0gYm91bmRzLnJpZ2h0KSlcclxuICAgICAgICApO1xyXG4gICAgICAgIHZhciBpbkJvdHRvbSA9IChcclxuICAgICAgICAgICAgKChib3VuZHMuYm90dG9tID49IHRoaXMudG9wKSAmJiAoYm91bmRzLmJvdHRvbSA8PSB0aGlzLmJvdHRvbSkpIHx8ICgodGhpcy5ib3R0b20gPj0gYm91bmRzLnRvcCkgJiYgKHRoaXMuYm90dG9tIDw9IGJvdW5kcy5ib3R0b20pKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgcmV0dXJuICgoaW5Cb3R0b20gfHwgaW5Ub3ApICYmIChpbkxlZnQgfHwgaW5SaWdodCkpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBleHRlbmRGcm9tUG9pbnQocG9pbnQ6IFZlY3RvcjIpIHtcclxuICAgICAgICBpZiAodGhpcy5sZWZ0ID4gcG9pbnQueCkge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBwb2ludC54O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy50b3AgPiBwb2ludC55KSB7XHJcbiAgICAgICAgICAgIHRoaXMudG9wID0gcG9pbnQueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYm90dG9tIDwgcG9pbnQueSkge1xyXG4gICAgICAgICAgICB0aGlzLmJvdHRvbSA9IHBvaW50Lnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnJpZ2h0IDwgcG9pbnQueCkge1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0gcG9pbnQueDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGNvbnRhaW5zKHBvaW50OiBWZWN0b3IyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHBvaW50LnggPj0gdGhpcy5sZWZ0ICYmXHJcbiAgICAgICAgICAgIHBvaW50LnggPD0gdGhpcy5yaWdodCAmJlxyXG4gICAgICAgICAgICBwb2ludC55ID49IHRoaXMudG9wICYmXHJcbiAgICAgICAgICAgIHBvaW50LnkgPD0gdGhpcy5ib3R0b207XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vY29yZS9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IFJlbmRlcmVyLCBUZXh0QWxpZ24gfSBmcm9tIFwiLi4vUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yRGVzaWduZXIgfSBmcm9tIFwiLi4vVmVjdG9yRGVzaWduZXJcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgSG9yaXpvbnRhbFJ1bGVyIHtcclxuICAgIHByaXZhdGUgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGRlc2lnbmVyOiBWZWN0b3JEZXNpZ25lcjtcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjtcclxuICAgIHByaXZhdGUgX25lZWRVcGRhdGU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZGVzaWduZXI6IFZlY3RvckRlc2lnbmVyLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lciA9IGRlc2lnbmVyO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLl9uZWVkVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IG5ldyBSZW5kZXJlcihjYW52YXMpO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIub25SZW5kZXIuYWRkKHRoaXMucmVuZGVyLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnZpZXdDb250cm9sLm9ubW92ZS5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9uZWVkVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9jYW52YXMub25jb250ZXh0bWVudSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlc2l6ZSgpIHtcclxuICAgICAgICB0aGlzLl93aWR0aCA9IHRoaXMuX2NhbnZhcy5jbGllbnRXaWR0aDtcclxuICAgICAgICB0aGlzLl9oZWlnaHQgPSB0aGlzLl9jYW52YXMuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fbmVlZFVwZGF0ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX25lZWRVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgZGVzaWduZXJsZW5ndGggPSB0aGlzLmRlc2lnbmVyLmJvdW5kcy5yaWdodCAtIHRoaXMuZGVzaWduZXIuYm91bmRzLmxlZnQ7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMuZGVzaWduZXIuY2VudGVyLnggJSAoZGVzaWduZXJsZW5ndGggLyB0aGlzLndpZHRoICogMTAwKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zdHJva2VDb2xvciA9ICcjZmZmZmZmJztcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5maWxsQ29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgICAgICAgdmFyIGNlbnRlciA9IHRoaXMud2lkdGggLyAyO1xyXG4gICAgICAgIHZhciBvZmZzZXRDZW50ZXIgPSB0aGlzLmRlc2lnbmVyLmNlbnRlci54IC8gdGhpcy5kZXNpZ25lci5yZXM7XHJcbiAgICAgICAgdmFyIG9mZnNldENhbGlicmF0aW9uID0gb2Zmc2V0IC8gdGhpcy5kZXNpZ25lci5yZXM7XHJcbiAgICAgICAgdmFyIGNlbnRlcm9mZnNldCA9IGNlbnRlciAtIG9mZnNldENhbGlicmF0aW9uO1xyXG4gICAgICAgIHZhciBwb3MgPSAwO1xyXG4gICAgICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuY2xlYXIoKTtcclxuICAgICAgICB3aGlsZSAoY2VudGVyb2Zmc2V0ICsgcG9zIDwgdGhpcy53aWR0aCB8fCBjZW50ZXJvZmZzZXQgLSBwb3MgPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChjZW50ZXJvZmZzZXQgKyBwb3MgPCB0aGlzLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcFZhbHVlOiBudW1iZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ICUgMTAgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBWYWx1ZSA9IChvZmZzZXRDZW50ZXIgLSBvZmZzZXRDYWxpYnJhdGlvbiArIHBvcykgKiB0aGlzLmRlc2lnbmVyLnJlcztcclxuICAgICAgICAgICAgICAgICAgICBwVmFsdWUgPSBOdW1iZXIucGFyc2VGbG9hdChwVmFsdWUudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdDYWxpYnJhdGlvbihjZW50ZXJvZmZzZXQgKyBwb3MsIHBWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNlbnRlcm9mZnNldCAtIHBvcyA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBwVmFsdWU6IG51bWJlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgJSAxMCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcFZhbHVlID0gKG9mZnNldENlbnRlciAtIG9mZnNldENhbGlicmF0aW9uIC0gcG9zKSAqIHRoaXMuZGVzaWduZXIucmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHBWYWx1ZSA9IE51bWJlci5wYXJzZUZsb2F0KHBWYWx1ZS50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0NhbGlicmF0aW9uKGNlbnRlcm9mZnNldCAtIHBvcywgcFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3MgKz0gMTA7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGZpeGVkIHRyaWFuZ2xlIHBvaW50ZXJcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5maWxsQ29sb3IgPSAnIzMzMzMzMydcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5maWxsUGF0aChbbmV3IFZlY3RvcjIoY2VudGVyIC0gNSwgMCksIG5ldyBWZWN0b3IyKGNlbnRlciArIDUsIDApLCBuZXcgVmVjdG9yMihjZW50ZXIsIDEwKV0sIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnN0cm9rZUNvbG9yID0gJyNhYWFhYWEnXHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc3Ryb2tlUGF0aChbbmV3IFZlY3RvcjIoY2VudGVyIC0gNSwgMCksIG5ldyBWZWN0b3IyKGNlbnRlciArIDUsIDApLCBuZXcgVmVjdG9yMihjZW50ZXIsIDEwKV0sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZHJhdyBydWxlciBjYWxpYnJhdGlvblxyXG4gICAgICogQHBhcmFtIHggXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZHJhd0NhbGlicmF0aW9uKHg6IG51bWJlciwgdmFsdWU/OiBudW1iZXIpIHtcclxuICAgICAgICB2YXIgY2FsaWJyYXRpb24gPSB0aGlzLmhlaWdodCAvIDM7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuZmlsbFRleHQodmFsdWUudG9TdHJpbmcoKSwgeCwgdGhpcy5oZWlnaHQgKiAwLjgsIG51bGwsIFRleHRBbGlnbi5DRU5URVIpO1xyXG4gICAgICAgICAgICBjYWxpYnJhdGlvbiA9IHRoaXMuaGVpZ2h0IC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIubGluZSh4LCAwLCB4LCBjYWxpYnJhdGlvbiwgMSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uLy4uL2NvcmUvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBSZW5kZXJlciwgVGV4dEFsaWduIH0gZnJvbSBcIi4uL1JlbmRlcmVyXCI7XHJcbmltcG9ydCB7IFZlY3RvckRlc2lnbmVyIH0gZnJvbSBcIi4uL1ZlY3RvckRlc2lnbmVyXCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFZlcnRpY2FsUnVsZXIge1xyXG4gICAgcHJpdmF0ZSBfY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIHByaXZhdGUgZGVzaWduZXI6IFZlY3RvckRlc2lnbmVyO1xyXG4gICAgcHJpdmF0ZSBfcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gICAgcHJpdmF0ZSBfbmVlZFVwZGF0ZTogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX3dpZHRoOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9oZWlnaHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihkZXNpZ25lcjogVmVjdG9yRGVzaWduZXIsIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyID0gZGVzaWduZXI7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIHRoaXMuX25lZWRVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyID0gbmV3IFJlbmRlcmVyKGNhbnZhcyk7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5vblJlbmRlci5hZGQodGhpcy5yZW5kZXIsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIudmlld0NvbnRyb2wub25tb3ZlLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuX25lZWRVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH0sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcy5vbmNvbnRleHRtZW51ID0gKGUpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgcmVzaXplKCkge1xyXG4gICAgICAgIHRoaXMuX3dpZHRoID0gdGhpcy5fY2FudmFzLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IHRoaXMuX2NhbnZhcy5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIucmVzaXplKHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9uZWVkVXBkYXRlKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5fbmVlZFVwZGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBkZXNpZ25lcmxlbmd0aCA9IHRoaXMuZGVzaWduZXIuYm91bmRzLmJvdHRvbSAtIHRoaXMuZGVzaWduZXIuYm91bmRzLnRvcDtcclxuICAgICAgICB2YXIgb2Zmc2V0ID0gdGhpcy5kZXNpZ25lci5jZW50ZXIueSAlIChkZXNpZ25lcmxlbmd0aCAvIHRoaXMuaGVpZ2h0ICogMTAwKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zdHJva2VDb2xvciA9ICcjZmZmZmZmJztcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5maWxsQ29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgICAgICAgdmFyIGNlbnRlciA9IHRoaXMuaGVpZ2h0IC8gMjtcclxuICAgICAgICB2YXIgb2Zmc2V0Q2VudGVyID0gdGhpcy5kZXNpZ25lci5jZW50ZXIueSAvIHRoaXMuZGVzaWduZXIucmVzO1xyXG4gICAgICAgIHZhciBvZmZzZXRDYWxpYnJhdGlvbiA9IG9mZnNldCAvIHRoaXMuZGVzaWduZXIucmVzO1xyXG4gICAgICAgIHZhciBjZW50ZXJvZmZzZXQgPSBjZW50ZXIgLSBvZmZzZXRDYWxpYnJhdGlvbjtcclxuICAgICAgICB2YXIgcG9zID0gMDtcclxuICAgICAgICB2YXIgY291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmNsZWFyKCk7XHJcbiAgICAgICAgd2hpbGUgKGNlbnRlcm9mZnNldCArIHBvcyA8IHRoaXMuaGVpZ2h0IHx8IGNlbnRlcm9mZnNldCAtIHBvcyA+IDApIHtcclxuICAgICAgICAgICAgaWYgKGNlbnRlcm9mZnNldCArIHBvcyA8IHRoaXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcFZhbHVlOiBudW1iZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ICUgMTAgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBWYWx1ZSA9IChvZmZzZXRDZW50ZXIgLSBvZmZzZXRDYWxpYnJhdGlvbiArIHBvcykgKiB0aGlzLmRlc2lnbmVyLnJlcztcclxuICAgICAgICAgICAgICAgICAgICBwVmFsdWUgPSBOdW1iZXIucGFyc2VGbG9hdChwVmFsdWUudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdDYWxpYnJhdGlvbihjZW50ZXJvZmZzZXQgKyBwb3MsIHBWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNlbnRlcm9mZnNldCAtIHBvcyA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBwVmFsdWU6IG51bWJlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgJSAxMCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcFZhbHVlID0gKG9mZnNldENlbnRlciAtIG9mZnNldENhbGlicmF0aW9uIC0gcG9zKSAqIHRoaXMuZGVzaWduZXIucmVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHBWYWx1ZSA9IE51bWJlci5wYXJzZUZsb2F0KHBWYWx1ZS50b0ZpeGVkKDIpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZHJhd0NhbGlicmF0aW9uKGNlbnRlcm9mZnNldCAtIHBvcywgcFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwb3MgKz0gMTA7XHJcbiAgICAgICAgICAgIGNvdW50Kys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGZpeGVkIHRyaWFuZ2xlIHBvaW50ZXJcclxuICAgICAgICAgKi9cclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5maWxsQ29sb3IgPSAnIzMzMzMzMydcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5maWxsUGF0aChbbmV3IFZlY3RvcjIoMCwgY2VudGVyIC0gNSksIG5ldyBWZWN0b3IyKDAsIGNlbnRlciArIDUpLCBuZXcgVmVjdG9yMigxMCwgY2VudGVyKV0sIHRydWUpO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnN0cm9rZUNvbG9yID0gJyNhYWFhYWEnXHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc3Ryb2tlUGF0aChbbmV3IFZlY3RvcjIoMCwgY2VudGVyIC0gNSksIG5ldyBWZWN0b3IyKDAsIGNlbnRlciArIDUpLCBuZXcgVmVjdG9yMigxMCwgY2VudGVyKV0sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZHJhdyBydWxlciBjYWxpYnJhdGlvblxyXG4gICAgICogQHBhcmFtIHggXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZHJhd0NhbGlicmF0aW9uKHk6IG51bWJlciwgdmFsdWU/OiBudW1iZXIpIHtcclxuICAgICAgICB2YXIgY2FsaWJyYXRpb24gPSB0aGlzLndpZHRoIC8gMztcclxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci50cmFuc2xhdGVSb3RhdGUodGhpcy53aWR0aCAqIDAuOCwgeSwgMjcwKTtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIuZmlsbFRleHQodmFsdWUudG9TdHJpbmcoKSwgdGhpcy53aWR0aCAqIDAuOCwgeSwgbnVsbCwgVGV4dEFsaWduLkNFTlRFUik7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLnRyYW5zbGF0ZVJvdGF0ZSh0aGlzLndpZHRoICogMC44LCB5LCAtMjcwKTtcclxuICAgICAgICAgICAgY2FsaWJyYXRpb24gPSB0aGlzLndpZHRoIC8gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIubGluZSgwLCB5LCBjYWxpYnJhdGlvbiwgeSwgMSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBTZWdtZW50IH0gZnJvbSBcIi4vU2VnbWVudFwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4vVmVjdG9yMlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuY2hvciB7XHJcbiAgICBwcml2YXRlIF94OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF95OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9pZDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfdGFyZ2V0czogQW5jaG9yW107XHJcbiAgICBwcml2YXRlIF9tYXA6IE1hcDxBbmNob3IsIFNlZ21lbnQ+O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5feCA9IHg7XHJcbiAgICAgICAgdGhpcy5feSA9IHk7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX21hcCA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgaWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB4KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3g7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB5KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3k7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgcG9pbnQoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMuX3gsIHRoaXMuX3kpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdGFyZ2V0cygpOiBBbmNob3JbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhcmdldHM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzZXRQb3NpdGlvbih2OiBWZWN0b3IyKSB7XHJcbiAgICAgICAgdGhpcy5feCA9IHYueDtcclxuICAgICAgICB0aGlzLl95ID0gdi55O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcblxyXG4gICAgICAgIHdoaWxlICh0aGlzLl90YXJnZXRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGFuY2hvciA9IHRoaXMuX3RhcmdldHMuc2hpZnQoKTtcclxuICAgICAgICAgICAgYW5jaG9yLnJlbW92ZVRhcmdldCh0aGlzKTtcclxuICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSB0aGlzLl9tYXAuZ2V0KGFuY2hvcik7XHJcbiAgICAgICAgICAgIHRoaXMuX21hcC5kZWxldGUoYW5jaG9yKTtcclxuICAgICAgICAgICAgc2VnbWVudC5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9tYXApIHtcclxuICAgICAgICAgICAgdGhpcy5fbWFwID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyByZW1vdmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3RhcmdldHMubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgLy8gcmVtb3ZlIGFsbCBzZWdtZW50cyBhbmQgc2VsZlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIGFkZCBjb25uZWN0aW9uIHRhcmdldFxyXG4gICAgICogQHBhcmFtIG9iamVjdCAgdGFyZ2V0XHJcbiAgICAgKiBAcGFyYW0gc2VnbWVudCAgc2VnbWVudCBvYmVqY3RcclxuICAgICAqL1xyXG4gICAgcHVibGljIGFkZFRhcmdldChvYmplY3Q6IEFuY2hvciwgc2VnbWVudDogU2VnbWVudCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fbWFwLmhhcyhvYmplY3QpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RhcmdldHMucHVzaChvYmplY3QpO1xyXG4gICAgICAgICAgICB0aGlzLl9tYXAuc2V0KG9iamVjdCwgc2VnbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVUYXJnZXQob2JqZWN0OiBBbmNob3IpIHtcclxuICAgICAgICBpZiAodGhpcy5fbWFwLmhhcyhvYmplY3QpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21hcC5kZWxldGUob2JqZWN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fdGFyZ2V0cy5pbmRleE9mKG9iamVjdCk7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGFyZ2V0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdlbmVyYXRlIHRoZSBlZGdlIG9uIGJvdGggc2lkZXMgb2YgdGhlIHBhdGhcclxuICAgICAqIEBwYXJhbSB0YXJnZXQgIHRhcmdldCBcclxuICAgICAqIEBwYXJhbSByaWdodCAgIGlzIHJpZ2h0ICBlZGdlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2VuZXJhdGVFZGdlUG9pbnRzKHRhcmdldDogQW5jaG9yLCByaWdodDogYm9vbGVhbiA9IHRydWUpOiBWZWN0b3IyW10ge1xyXG4gICAgICAgIHZhciBldWxyID0gcmlnaHQgPyA5MCA6IC05MDs7XHJcbiAgICAgICAgdmFyIHNlZ21lbnQgPSB0aGlzLl9tYXAuZ2V0KHRhcmdldCk7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gbmV3IFZlY3RvcjIodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgIHZhciBlbmQgPSBuZXcgVmVjdG9yMih0YXJnZXQueCwgdGFyZ2V0LnkpO1xyXG4gICAgICAgIHZhciBvZmYgPSBzZWdtZW50LnRoaWNrbmVzcyAvIDI7XHJcbiAgICAgICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuMigoZW5kLnkgLSBzdGFydC55KSwgKGVuZC54IC0gc3RhcnQueCkpO1xyXG4gICAgICAgIHZhciB0aGV0YSA9IGFuZ2xlICogKDE4MCAvIE1hdGguUEkpO1xyXG4gICAgICAgIHZhciBwcyA9IG5ldyBWZWN0b3IyKHN0YXJ0LnggKyBvZmYsIHN0YXJ0LnkpO1xyXG4gICAgICAgIHZhciBwZSA9IG5ldyBWZWN0b3IyKGVuZC54ICsgb2ZmLCBlbmQueSk7XHJcbiAgICAgICAgdmFyIGxlZnRfcG9pbnQgPSB0aGlzLnJvdGF0ZVBvaW50KHBzLCBzdGFydCwgdGhldGEgLSBldWxyKTtcclxuICAgICAgICB2YXIgcmlnaHRfcG9pbnQgPSB0aGlzLnJvdGF0ZVBvaW50KHBlLCBlbmQsIHRoZXRhIC0gZXVscik7XHJcbiAgICAgICAgcmV0dXJuIFtsZWZ0X3BvaW50LCByaWdodF9wb2ludF07XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYnVpbGQgc2VnbWVudHMgcGF0aHMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBidWlsZCgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX3RhcmdldHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAvKiBzb3J0IHBvaW50cyBieSBjbG9ja3dpc2UgKi9cclxuICAgICAgICAgICAgdGhpcy5jbG9ja3dpc2VTb3J0UG9pbnRzKHRoaXMuX3RhcmdldHMpO1xyXG4gICAgICAgICAgICAvKiBnZW5lcmF0ZSBwb2ludHMgKi9cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl90YXJnZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgY3VyID0gaTtcclxuICAgICAgICAgICAgICAgIHZhciBuZXh0ID0gKGkgKyAxKSAlIHRoaXMuX3RhcmdldHMubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgdmFyIGFuY2hvciA9IHRoaXMuX3RhcmdldHNbY3VyXTtcclxuICAgICAgICAgICAgICAgIHZhciBuZXh0YW5jaG9yID0gdGhpcy5fdGFyZ2V0c1tuZXh0XTtcclxuICAgICAgICAgICAgICAgIC8qIGdlbmVyYXRlIGVkZ2UgcG9pbnRzICovXHJcbiAgICAgICAgICAgICAgICB2YXIgZWRnZV9wYXRoID0gdGhpcy5nZW5lcmF0ZUVkZ2VQb2ludHMoYW5jaG9yLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHZhciBuZXh0RWRnZV9wYXRoID0gdGhpcy5nZW5lcmF0ZUVkZ2VQb2ludHMobmV4dGFuY2hvciwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgLyogZ2V0IGVkZ2VzIGludGVyc2VjdGlvbiBwb2ludCovXHJcbiAgICAgICAgICAgICAgICB2YXIgaW50ZXJzZWN0aW9uUG9pbnQgPSB0aGlzLmdldEludGVyc2VjdGlvbihlZGdlX3BhdGhbMF0sIGVkZ2VfcGF0aFsxXSwgbmV4dEVkZ2VfcGF0aFswXSwgbmV4dEVkZ2VfcGF0aFsxXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW50ZXJzZWN0aW9uUG9pbnQgPT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAvKiBnZXQgcHJvamVjdGl2ZSBwb2ludCAqL1xyXG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdGlvblBvaW50ID0gdGhpcy5HZXRQcm9qZWN0aXZlUG9pbnQoZWRnZV9wYXRoWzBdLCBlZGdlX3BhdGhbMV0sIHRoaXMucG9pbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSB0aGlzLl9tYXAuZ2V0KGFuY2hvcik7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnRzID0gc2VnbWVudC5nZXRQb3J0KHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgcG9pbnRzWzFdID0gdGhpcy5wb2ludC5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgcG9pbnRzWzBdID0gaW50ZXJzZWN0aW9uUG9pbnQuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIHNlZ21lbnQgPSB0aGlzLl9tYXAuZ2V0KG5leHRhbmNob3IpO1xyXG4gICAgICAgICAgICAgICAgcG9pbnRzID0gc2VnbWVudC5nZXRQb3J0KHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgcG9pbnRzWzJdID0gaW50ZXJzZWN0aW9uUG9pbnQuY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIHBvaW50c1sxXSA9IHRoaXMucG9pbnQuY2xvbmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl90YXJnZXRzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICB2YXIgYW5jaG9yID0gdGhpcy5fdGFyZ2V0c1swXTtcclxuICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSB0aGlzLl9tYXAuZ2V0KGFuY2hvcik7XHJcbiAgICAgICAgICAgIHZhciBzdGFydCA9IG5ldyBWZWN0b3IyKHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICAgICAgdmFyIGVuZCA9IG5ldyBWZWN0b3IyKGFuY2hvci54LCBhbmNob3IueSk7XHJcbiAgICAgICAgICAgIHZhciBhbmdsZSA9IE1hdGguYXRhbjIoKGVuZC55IC0gc3RhcnQueSksIChlbmQueCAtIHN0YXJ0LngpKTtcclxuICAgICAgICAgICAgdmFyIHRoZXRhID0gYW5nbGUgKiAoMTgwIC8gTWF0aC5QSSk7XHJcbiAgICAgICAgICAgIHZhciBwcyA9IG5ldyBWZWN0b3IyKHN0YXJ0LnggKyBzZWdtZW50LnRoaWNrbmVzcyAvIDIsIHN0YXJ0LnkpO1xyXG4gICAgICAgICAgICB2YXIgbGVmdF9wb2ludCA9IHRoaXMucm90YXRlUG9pbnQocHMsIHN0YXJ0LCB0aGV0YSAtIDkwKTtcclxuICAgICAgICAgICAgdmFyIHJpZ2h0X3BvaW50ID0gdGhpcy5yb3RhdGVQb2ludChwcywgc3RhcnQsIHRoZXRhICsgOTApO1xyXG4gICAgICAgICAgICB2YXIgcG9pbnRzID0gc2VnbWVudC5nZXRQb3J0KHRoaXMpO1xyXG4gICAgICAgICAgICBwb2ludHNbMF0gPSBsZWZ0X3BvaW50LmNsb25lKCk7XHJcbiAgICAgICAgICAgIHBvaW50c1sxXSA9IHRoaXMucG9pbnQuY2xvbmUoKTtcclxuICAgICAgICAgICAgcG9pbnRzWzJdID0gcmlnaHRfcG9pbnQuY2xvbmUoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1VudXNlZCBhbmNob3IgcG9pbnRzIScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBHZXRQcm9qZWN0aXZlUG9pbnQoUDE6IFZlY3RvcjIsIFAyOiBWZWN0b3IyLCBwT3V0OiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgdmFyIHBMaW5lID0gUDE7XHJcbiAgICAgICAgaWYgKFAxLnggPT0gUDIueCAmJiBQMS55ID09IFAyLnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoUDEueCA9PSBQMi54KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMihwTGluZS54LCBwT3V0LnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmIChQMS55ID09IFAyLnkpIC8v5Z6C57q/5pac546H5LiN5a2Y5Zyo5oOF5Ya1XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIocE91dC54LCBwTGluZS55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orqHnrpfnur/nmoTmlpznjodcclxuICAgICAgICB2YXIgayA9ICgoUDEueSAtIFAyLnkpKSAvIChQMS54IC0gUDIueCk7XHJcbiAgICAgICAgdmFyIFggPSAoKGsgKiBwTGluZS54ICsgcE91dC54IC8gayArIHBPdXQueSAtIHBMaW5lLnkpIC8gKDEgLyBrICsgaykpO1xyXG4gICAgICAgIHZhciBZID0gKC0xIC8gayAqIChYIC0gcE91dC54KSArIHBPdXQueSk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKFgsIFkpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIHBvaW50IOWbtOe7lSBjZW50ZXIg5peL6L2sIGEg5bqmXHJcbiAgICAgKiBAcGFyYW0gcG9pbnQg5peL6L2s5rqQ54K5XHJcbiAgICAgKiBAcGFyYW0gY2VudGVyIOaXi+i9rOS4reW/g+eCuVxyXG4gICAgICogQHBhcmFtIGEg5peL6L2s6KeS5bqmXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCByb3RhdGVQb2ludChwb2ludDogVmVjdG9yMiwgY2VudGVyOiBWZWN0b3IyLCBhOiBudW1iZXIpOiBWZWN0b3IyIHtcclxuICAgICAgICB2YXIgYW5nID0gYSAvIDE4MCAqIE1hdGguUEk7XHJcbiAgICAgICAgdmFyIHggPSAocG9pbnQueCAtIGNlbnRlci54KSAqIE1hdGguY29zKGFuZykgLSAocG9pbnQueSAtIGNlbnRlci55KSAqIE1hdGguc2luKGFuZykgKyBjZW50ZXIueDtcclxuICAgICAgICB2YXIgeSA9IChwb2ludC54IC0gY2VudGVyLngpICogTWF0aC5zaW4oYW5nKSArIChwb2ludC55IC0gY2VudGVyLnkpICogTWF0aC5jb3MoYW5nKSArIGNlbnRlci55O1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih4LCB5KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLy/oi6Xngrlh5aSn5LqO54K5YizljbPngrlh5Zyo54K5YumhuuaXtumSiOaWueWQkSzov5Tlm550cnVlLOWQpuWImei/lOWbnmZhbHNlXHJcbiAgICBwcml2YXRlIFBvaW50Q21wKGE6IEFuY2hvciwgYjogQW5jaG9yLCBjZW50ZXI6IEFuY2hvcik6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmIChhLnggPj0gMCAmJiBiLnggPCAwKVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICBpZiAoYS54ID09PSAwICYmIGIueCA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIGEueSA+IGIueTtcclxuICAgICAgICAvL+WQkemHj09B5ZKM5ZCR6YePT0LnmoTlj4nnp69cclxuICAgICAgICB2YXIgZGV0ID0gKGEueCAtIGNlbnRlci54KSAqIChiLnkgLSBjZW50ZXIueSkgLSAoYi54IC0gY2VudGVyLngpICogKGEueSAtIGNlbnRlci55KTtcclxuICAgICAgICBpZiAoZGV0IDwgMClcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgaWYgKGRldCA+IDApXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAvL+WQkemHj09B5ZKM5ZCR6YePT0LlhbHnur/vvIzku6Xot53nprvliKTmlq3lpKflsI9cclxuICAgICAgICB2YXIgZDEgPSAoYS54IC0gY2VudGVyLngpICogKGEueCAtIGNlbnRlci54KSArIChhLnkgLSBjZW50ZXIueSkgKiAoYS55IC0gY2VudGVyLnkpO1xyXG4gICAgICAgIHZhciBkMiA9IChiLnggLSBjZW50ZXIueCkgKiAoYi54IC0gY2VudGVyLnkpICsgKGIueSAtIGNlbnRlci55KSAqIChiLnkgLSBjZW50ZXIueSk7XHJcbiAgICAgICAgcmV0dXJuIGQxID4gZDI7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDpgIbml7bpkojmjpLluo8gXHJcbiAgICAgKiBodHRwczovL3d3dy5jbmJsb2dzLmNvbS9kd2R4ZHkvcC8zMjMwMTU2Lmh0bWxcclxuICAgICAqIEBwYXJhbSB2UG9pbnRzIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNsb2Nrd2lzZVNvcnRQb2ludHModlBvaW50czogQW5jaG9yW10pIHtcclxuICAgICAgICAvL+iuoeeul+mHjeW/g1xyXG4gICAgICAgIC8vIHZhciB4ID0gMDtcclxuICAgICAgICAvLyB2YXIgeSA9IDA7XHJcbiAgICAgICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCB2UG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHggKz0gdlBvaW50c1tpXS54O1xyXG4gICAgICAgIC8vICAgICB5ICs9IHZQb2ludHNbaV0ueTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gY2VudGVyLnggPSB4IC8gdlBvaW50cy5sZW5ndGg7XHJcbiAgICAgICAgLy8gY2VudGVyLnkgPSB5IC8gdlBvaW50cy5sZW5ndGg7XHJcbiAgICAgICAgdmFyIGNlbnRlciA9IHRoaXM7XHJcbiAgICAgICAgLy/lhpLms6HmjpLluo9cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZQb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdlBvaW50cy5sZW5ndGggLSBpIC0gMTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuUG9pbnRDbXAodlBvaW50c1tqXSwgdlBvaW50c1tqICsgMV0sIGNlbnRlcikpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdG1wID0gdlBvaW50c1tqXTtcclxuICAgICAgICAgICAgICAgICAgICB2UG9pbnRzW2pdID0gdlBvaW50c1tqICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdlBvaW50c1tqICsgMV0gPSB0bXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6K6h566X5Lik5p2h55u057q/55qE5Lqk54K5XHJcbiAgICAgKiBodHRwczovL3d3dy5jbmJsb2dzLmNvbS94aWFvdGlhbm5ldC9wLzM3Njg2MTEuaHRtbFxyXG4gICAgICogQG9wdGltaXplIGxpbmVGaXJzdFN0YXIuWCAhPSBsaW5lRmlyc3RFbmQuWCDlvZPop5LluqblpJ/lsI/nmoTml7blgJkg5rWu54K55pWw57K+5bqm5LiN5aSf6KGo56S65pac546H55qEIOe7k+aenOS8muWBj+enu+aMuuWkpyDnlKjlt67lgLzlsI/kuo7mn5DkuKrlsI/mlbDmr5TovoPlpb0gPDAuMDAwMDAxIOi/meagt1xyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0gbGluZUZpcnN0U3RhciBcclxuICAgICAqIEBwYXJhbSBsaW5lRmlyc3RFbmQgXHJcbiAgICAgKiBAcGFyYW0gbGluZVNlY29uZFN0YXIgXHJcbiAgICAgKiBAcGFyYW0gbGluZVNlY29uZEVuZCBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRJbnRlcnNlY3Rpb24obGluZUZpcnN0U3RhcjogVmVjdG9yMiwgbGluZUZpcnN0RW5kOiBWZWN0b3IyLCBsaW5lU2Vjb25kU3RhcjogVmVjdG9yMiwgbGluZVNlY29uZEVuZDogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgICogTDHvvIxMMumDveWtmOWcqOaWnOeOh+eahOaDheWGte+8mlxyXG4gICAgICAgICAqIOebtOe6v+aWueeoi0wxOiAoIHkgLSB5MSApIC8gKCB5MiAtIHkxICkgPSAoIHggLSB4MSApIC8gKCB4MiAtIHgxICkgXHJcbiAgICAgICAgICogPT4geSA9IFsgKCB5MiAtIHkxICkgLyAoIHgyIC0geDEgKSBdKCB4IC0geDEgKSArIHkxXHJcbiAgICAgICAgICog5LukIGEgPSAoIHkyIC0geTEgKSAvICggeDIgLSB4MSApXHJcbiAgICAgICAgICog5pyJIHkgPSBhICogeCAtIGEgKiB4MSArIHkxICAgLi4uLi4uLi4uMVxyXG4gICAgICAgICAqIOebtOe6v+aWueeoi0wyOiAoIHkgLSB5MyApIC8gKCB5NCAtIHkzICkgPSAoIHggLSB4MyApIC8gKCB4NCAtIHgzIClcclxuICAgICAgICAgKiDku6QgYiA9ICggeTQgLSB5MyApIC8gKCB4NCAtIHgzIClcclxuICAgICAgICAgKiDmnIkgeSA9IGIgKiB4IC0gYiAqIHgzICsgeTMgLi4uLi4uLi4uLjJcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiDlpoLmnpwgYSA9IGLvvIzliJnkuKTnm7Tnur/lubPnrYnvvIzlkKbliJnvvIwg6IGU6Kej5pa556iLIDEsMu+8jOW+lzpcclxuICAgICAgICAgKiB4ID0gKCBhICogeDEgLSBiICogeDMgLSB5MSArIHkzICkgLyAoIGEgLSBiIClcclxuICAgICAgICAgKiB5ID0gYSAqIHggLSBhICogeDEgKyB5MVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEwx5a2Y5Zyo5pac546HLCBMMuW5s+ihjFnovbTnmoTmg4XlhrXvvJpcclxuICAgICAgICAgKiB4ID0geDNcclxuICAgICAgICAgKiB5ID0gYSAqIHgzIC0gYSAqIHgxICsgeTFcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBMMSDlubPooYxZ6L2077yMTDLlrZjlnKjmlpznjofnmoTmg4XlhrXvvJpcclxuICAgICAgICAgKiB4ID0geDFcclxuICAgICAgICAgKiB5ID0gYiAqIHggLSBiICogeDMgKyB5M1xyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEwx5LiOTDLpg73lubPooYxZ6L2055qE5oOF5Ya177yaXHJcbiAgICAgICAgICog5aaC5p6cIHgxID0geDPvvIzpgqPkuYhMMeS4jkwy6YeN5ZCI77yM5ZCm5YiZ5bmz562JXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgKi9cclxuICAgICAgICB2YXIgYSA9IDA7XHJcbiAgICAgICAgdmFyIGIgPSAwO1xyXG4gICAgICAgIHZhciBzdGF0ZSA9IDA7XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGxpbmVGaXJzdFN0YXIueCAtIGxpbmVGaXJzdEVuZC54KSA+IDAuMDAwMDAxKSB7XHJcbiAgICAgICAgICAgIGEgPSAobGluZUZpcnN0RW5kLnkgLSBsaW5lRmlyc3RTdGFyLnkpIC8gKGxpbmVGaXJzdEVuZC54IC0gbGluZUZpcnN0U3Rhci54KTtcclxuICAgICAgICAgICAgc3RhdGUgfD0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKE1hdGguYWJzKGxpbmVTZWNvbmRTdGFyLnggLSBsaW5lU2Vjb25kRW5kLngpID4gMC4wMDAwMDEpIHtcclxuICAgICAgICAgICAgYiA9IChsaW5lU2Vjb25kRW5kLnkgLSBsaW5lU2Vjb25kU3Rhci55KSAvIChsaW5lU2Vjb25kRW5kLnggLSBsaW5lU2Vjb25kU3Rhci54KTtcclxuICAgICAgICAgICAgc3RhdGUgfD0gMjtcclxuICAgICAgICB9XHJcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xyXG4gICAgICAgICAgICBjYXNlIDA6IC8vTDHkuI5MMumDveW5s+ihjFnovbRcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGluZUZpcnN0U3Rhci54ID09PSBsaW5lU2Vjb25kU3Rhci54KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vdGhyb3cgbmV3IEV4Y2VwdGlvbihcIuS4pOadoeebtOe6v+S6kuebuOmHjeWQiO+8jOS4lOW5s+ihjOS6jlnovbTvvIzml6Dms5XorqHnrpfkuqTngrnjgIJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aHJvdyBuZXcgRXhjZXB0aW9uKFwi5Lik5p2h55u057q/5LqS55u45bmz6KGM77yM5LiU5bmz6KGM5LqOWei9tO+8jOaXoOazleiuoeeul+S6pOeCueOAglwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDE6IC8vTDHlrZjlnKjmlpznjocsIEwy5bmz6KGMWei9tFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB4ID0gbGluZVNlY29uZFN0YXIueDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeSA9IChsaW5lRmlyc3RTdGFyLnggLSB4KSAqICgtYSkgKyBsaW5lRmlyc3RTdGFyLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHgsIHkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDI6IC8vTDEg5bmz6KGMWei9tO+8jEwy5a2Y5Zyo5pac546HXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBsaW5lRmlyc3RTdGFyLng7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/nvZHkuIrmnInnm7jkvLzku6PnoIHnmoTvvIzov5nkuIDlpITmmK/plJnor6/nmoTjgILkvaDlj6/ku6Xlr7nmr5RjYXNlIDEg55qE6YC76L6RIOi/m+ihjOWIhuaekFxyXG4gICAgICAgICAgICAgICAgICAgIC8v5rqQY29kZTpsaW5lU2Vjb25kU3RhciAqIHggKyBsaW5lU2Vjb25kU3RhciAqIGxpbmVTZWNvbmRTdGFyLlggKyBwMy5ZO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gKGxpbmVTZWNvbmRTdGFyLnggLSB4KSAqICgtYikgKyBsaW5lU2Vjb25kU3Rhci55O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih4LCB5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FzZSAzOiAvL0wx77yMTDLpg73lrZjlnKjmlpznjodcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYSA9PT0gYikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aHJvdyBuZXcgRXhjZXB0aW9uKFwi5Lik5p2h55u057q/5bmz6KGM5oiW6YeN5ZCI77yM5peg5rOV6K6h566X5Lqk54K544CCXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSAoYSAqIGxpbmVGaXJzdFN0YXIueCAtIGIgKiBsaW5lU2Vjb25kU3Rhci54IC0gbGluZUZpcnN0U3Rhci55ICsgbGluZVNlY29uZFN0YXIueSkgLyAoYSAtIGIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gYSAqIHggLSBhICogbGluZUZpcnN0U3Rhci54ICsgbGluZUZpcnN0U3Rhci55O1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih4LCB5KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEV4Y2VwdGlvbihcIuS4jeWPr+iDveWPkeeUn+eahOaDheWGtVwiKTtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbn0iLCJpbXBvcnQgeyBBbmNob3IgfSBmcm9tIFwiLi9BbmNob3JcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuL1ZlY3RvcjJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTZWdtZW50IHtcclxuICAgIHByaXZhdGUgX3RoaWNrbmVzczogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc3RhcnQ6IEFuY2hvcjtcclxuICAgIHByaXZhdGUgX2VuZDogQW5jaG9yO1xyXG4gICAgcHJpdmF0ZSBfcG9pbnRzOiBWZWN0b3IyW11bXTtcclxuXHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICBpZiAodGhpcy5fcG9pbnRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvaW50cy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9wb2ludHMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHBvaW50cygpOiBudW1iZXJbXVtdIHtcclxuICAgICAgICB2YXIgYXJyeTogbnVtYmVyW11bXSA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIG8gb2YgdGhpcy5fcG9pbnRzWzBdKSB7XHJcbiAgICAgICAgICAgIGFycnkucHVzaChbby54LCBvLnldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yICh2YXIgbyBvZiB0aGlzLl9wb2ludHNbMV0pIHtcclxuICAgICAgICAgICAgYXJyeS5wdXNoKFtvLngsIG8ueV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyeTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldFBvcnQoYW5jaG9yOiBBbmNob3IpOiBWZWN0b3IyW10ge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCA9PT0gYW5jaG9yKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcG9pbnRzWzBdO1xyXG4gICAgICAgIGVsc2VcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BvaW50c1sxXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3Ioc3RhcnQ6IEFuY2hvciwgZW5kOiBBbmNob3IsIHRoaWNrbmVzczogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fc3RhcnQgPSBzdGFydDtcclxuICAgICAgICB0aGlzLl9lbmQgPSBlbmQ7XHJcbiAgICAgICAgdGhpcy5fdGhpY2tuZXNzID0gdGhpY2tuZXNzO1xyXG4gICAgICAgIHRoaXMuX3BvaW50cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX3BvaW50cy5wdXNoKFtdLCBbXSlcclxuICAgICAgICB0aGlzLl9zdGFydC5hZGRUYXJnZXQodGhpcy5fZW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9lbmQuYWRkVGFyZ2V0KHRoaXMuX3N0YXJ0LCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRoaWNrbmVzcygpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90aGlja25lc3M7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZW1vdmUgdGhpcyBzZWdtZW50IGZyb20gZ3JhcGhpY1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVtb3ZlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdGFydC5yZW1vdmVUYXJnZXQodGhpcy5fZW5kKTtcclxuICAgICAgICAgICAgdGhpcy5fZW5kLnJlbW92ZVRhcmdldCh0aGlzLl9zdGFydCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2VuZCA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxufSIsImV4cG9ydCBjbGFzcyBWZWN0b3IyIHtcclxuXHJcbiAgICBwdWJsaWMgeDogbnVtYmVyO1xyXG4gICAgcHVibGljIHk6IG51bWJlcjtcclxuXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKF94PzogbnVtYmVyLCBfeT86IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IF94ID8gX3ggOiAwO1xyXG4gICAgICAgIHRoaXMueSA9IF95ID8gX3kgOiAwO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGluQ2lyY2xlKGNlbnRlcjogVmVjdG9yMiwgcmFkaXVzOiBudW1iZXIpIHtcclxuICAgICAgICB2YXIgZGlzdGFuY2UgPSB0aGlzLmRpc3RhbmNlVG8oY2VudGVyKTtcclxuICAgICAgICByZXR1cm4gZGlzdGFuY2UgPCByYWRpdXM7XHJcbiAgICAgICAgLy8gcmV0dXJuICgodGhpcy54IC0gY2VudGVyLngpIF4gMiArICh0aGlzLnkgLSBjZW50ZXIueSkgXiAyKSA8IChyYWRpdXMgXiAyKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGZyb21BcnJheSh2YWx1ZXM6IG51bWJlcltdKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0gdmFsdWVzWzBdO1xyXG4gICAgICAgIHRoaXMueSA9IHZhbHVlc1sxXTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3ViKHY6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54IC0gdi54LCB0aGlzLnkgLSB2LnkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwdWJsaWMgYWRkKHY6IFZlY3RvcjIpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54ICsgdi54LCB0aGlzLnkgKyB2LnkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbG9uZSgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54LCB0aGlzLnkpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Yik5pat5b2T5YmN54K55piv5ZCm5L2N5LqO5aSa6L655b2i5YaFXHJcbiAgICAgKiBAcGFyYW0gcG9seWdvbiDlpJrovrnlvaJcclxuICAgICAqL1xyXG4gICAgcHVibGljIGluUG9seWdvbihwb2x5Z29uOiBWZWN0b3IyW10pOiBib29sZWFuIHtcclxuICAgICAgICBsZXQgc3VtID0gMDtcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHBvbHlnb24ubGVuZ3RoLCBqID0gbCAtIDE7IGkgPCBsOyBqID0gaSwgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN4ID0gcG9seWdvbltpXS54O1xyXG4gICAgICAgICAgICBjb25zdCBzeSA9IHBvbHlnb25baV0ueTtcclxuICAgICAgICAgICAgY29uc3QgdHggPSBwb2x5Z29uW2pdLng7XHJcbiAgICAgICAgICAgIGNvbnN0IHR5ID0gcG9seWdvbltqXS55O1xyXG4gICAgICAgICAgICAvLyDngrnkuI7lpJrovrnlvaLpobbngrnph43lkIjmiJblnKjlpJrovrnlvaLnmoTovrnkuIpcclxuICAgICAgICAgICAgaWYgKChzeCAtIHRoaXMueCkgKiAodGhpcy54IC0gdHgpID49IDAgJiYgKHN5IC0gdGhpcy55KSAqICh0aGlzLnkgLSB0eSkgPj0gMCAmJiAodGhpcy54IC0gc3gpICogKHR5IC0gc3kpID09PSAodGhpcy55IC0gc3kpICogKHR4IC0gc3gpKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyDngrnkuI7nm7jpgrvpobbngrnov57nur/nmoTlpLnop5JcclxuICAgICAgICAgICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuMihzeSAtIHRoaXMueSwgc3ggLSB0aGlzLngpIC0gTWF0aC5hdGFuMih0eSAtIHRoaXMueSwgdHggLSB0aGlzLngpO1xyXG4gICAgICAgICAgICAvLyDnoa7kv53lpLnop5LkuI3otoXlh7rlj5blgLzojIPlm7TvvIgtz4Ag5YiwIM+A77yJXHJcbiAgICAgICAgICAgIGlmIChhbmdsZSA+PSBNYXRoLlBJKSB7XHJcbiAgICAgICAgICAgICAgICBhbmdsZSA9IGFuZ2xlIC0gTWF0aC5QSSAqIDI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoYW5nbGUgPD0gLU1hdGguUEkpIHtcclxuICAgICAgICAgICAgICAgIGFuZ2xlID0gYW5nbGUgKyBNYXRoLlBJICogMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdW0gKz0gYW5nbGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOiuoeeul+Wbnui9rOaVsOW5tuWIpOaWreeCueWSjOWkmui+ueW9oueahOWHoOS9leWFs+ezu1xyXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHN1bSAvIE1hdGguUEkpID09PSAwID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZGlzdGFuY2VUbyh2OiBWZWN0b3IyKTogbnVtYmVyIHtcclxuICAgICAgICBjb25zdCBkeCA9IHRoaXMueCAtIHYueDtcclxuICAgICAgICBjb25zdCBkeSA9IHRoaXMueSAtIHYueTtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KGR4ICogZHggKyBkeSAqIGR5KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=