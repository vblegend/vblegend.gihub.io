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
var Vector2_1 = __webpack_require__(/*! ../src/core/Vector2 */ "./src/core/Vector2.ts");
var AnchorControl_1 = __webpack_require__(/*! ../src/Designer/Views/AnchorControl */ "./src/Designer/Views/AnchorControl.ts");
var Examples = (function () {
    function Examples() {
    }
    Examples.prototype.main = function () {
        return __awaiter(this, void 0, void 0, function () {
            var div, designer, hrulercanvas, vrulercanvas, hRuler, vRuler, btnBuild, btnParse, btnClean, btnGoCenter, btnRandom;
            return __generator(this, function (_a) {
                div = document.getElementById("example");
                designer = new VectorDesigner_1.VectorDesigner(div);
                hrulercanvas = document.getElementById("HorizontalRulerCanvas");
                vrulercanvas = document.getElementById("VerticalRulerCanvas");
                hRuler = new HorizontalRuler_1.HorizontalRuler(designer, hrulercanvas);
                vRuler = new VerticalRuler_1.VerticalRuler(designer, vrulercanvas);
                designer.run();
                designer.onZoom.add(function (e) {
                    var scale = document.getElementById("scale");
                    scale.innerText = e + '%';
                }, this);
                btnBuild = document.getElementById("btnBuild");
                if (btnBuild) {
                    btnBuild.onclick = function () {
                        var output = document.getElementById("output");
                        output.value = JSON.stringify(designer.serialize());
                    };
                }
                btnParse = document.getElementById("btnParse");
                if (btnParse) {
                    btnParse.onclick = function () {
                        var output = document.getElementById("output");
                        var arrays = JSON.parse(output.value);
                        console.time('Parse');
                        designer.from(arrays);
                        console.timeEnd('Parse');
                    };
                }
                btnClean = document.getElementById("btnClean");
                if (btnClean) {
                    btnClean.onclick = function () {
                        designer.clear();
                    };
                }
                btnGoCenter = document.getElementById("btnGoCenter");
                if (btnGoCenter) {
                    btnGoCenter.onclick = function () {
                        designer.viewControl.onmove.dispatch(100, new Vector2_1.Vector2(), true);
                    };
                }
                btnRandom = document.getElementById("btnRandom");
                if (btnRandom) {
                    btnRandom.onclick = function () {
                        var anthors = [];
                        var segments = [];
                        var objects = [];
                        for (var _i = 0, _a = designer.children; _i < _a.length; _i++) {
                            var anchor_1 = _a[_i];
                            if (anchor_1 instanceof AnchorControl_1.AnchorControl) {
                                anthors.push(anchor_1);
                            }
                        }
                        for (var i = 0; i <= 20; i++) {
                            var anchor = designer.createAnchor(null, Math.random() * 2000 - 1000, Math.random() * 2000 - 1000);
                            anthors.push(anchor);
                            objects.push(anchor);
                        }
                        for (var i = 0; i < 20; i++) {
                            while (segments[i] == null) {
                                var f = Math.round(Math.random() * (anthors.length - 1));
                                var t = Math.round(Math.random() * (anthors.length - 1));
                                segments[i] = designer.createPolygon(null, anthors[f], anthors[t]);
                            }
                            objects.push(segments[i]);
                        }
                        for (var _b = 0, anthors_1 = anthors; _b < anthors_1.length; _b++) {
                            var object = anthors_1[_b];
                            if (object instanceof AnchorControl_1.AnchorControl) {
                                if (object.polygons.length == 0) {
                                    var index = objects.indexOf(object);
                                    if (index > -1) {
                                        objects.splice(index, 1);
                                    }
                                }
                            }
                        }
                        for (var _c = 0, anthors_2 = anthors; _c < anthors_2.length; _c++) {
                            var object = anthors_2[_c];
                            if (object instanceof AnchorControl_1.AnchorControl) {
                                object.update();
                            }
                        }
                        designer.add.apply(designer, objects);
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
var Vector2_1 = __webpack_require__(/*! ../../core/Vector2 */ "./src/core/Vector2.ts");
var AnchorControl_1 = __webpack_require__(/*! ../Views/AnchorControl */ "./src/Designer/Views/AnchorControl.ts");
var PolygonControl_1 = __webpack_require__(/*! ../Views/PolygonControl */ "./src/Designer/Views/PolygonControl.ts");
var Connector_1 = __webpack_require__(/*! ../common/Connector */ "./src/Designer/common/Connector.ts");
var MouseCapturer_1 = __webpack_require__(/*! ../Utility/MouseCapturer */ "./src/Designer/Utility/MouseCapturer.ts");
var ToolBar = (function () {
    function ToolBar(designer) {
        var _this = this;
        this.designer = designer;
        this._position = new Vector2_1.Vector2();
        this.dom = document.createElement('div');
        this.dom.oncontextmenu = function (e) {
            e.preventDefault();
        };
        this.dom.className = 'toolbar';
        var btnDrag = this.createDragButton();
        this._dragCapture = new MouseCapturer_1.MouseCapturer(btnDrag);
        this._dragCapture.onMouseDown.add(this.drag_start, this);
        this._dragCapture.onMouseMove.add(this.drag_move, this);
        this._dragCapture.onMouseUp.add(this.drag_end, this);
        this.dom.appendChild(btnDrag);
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
        this.addBreak(this.dom);
        this.thicknessDiv = document.createElement('div');
        this.thicknessDiv.className = 'ToolBox-Input';
        var header = document.createElement('a');
        header.innerText = '厚度';
        header.style.float = 'left';
        this.thicknessInput = document.createElement('input');
        this.thicknessInput.type = 'number';
        this.thicknessInput.onchange = function () {
            var value = _this.thicknessInput.value;
            if (value == null || value.length == 0)
                return;
            if (_this.designer.selected instanceof PolygonControl_1.PolygonControl) {
                _this.designer.selected.updateThickness(Number.parseFloat(value));
                _this.designer.requestRender();
            }
        };
        var setThickness = document.createElement('button');
        setThickness.textContent = '修改';
        this.thicknessDiv.appendChild(header);
        this.thicknessDiv.appendChild(this.thicknessInput);
        this.thicknessDiv.appendChild(setThickness);
        this.dom.appendChild(this.thicknessDiv);
        this.positionDiv = document.createElement('div');
        this.positionDiv.className = 'ToolBox-Input';
        var header = document.createElement('a');
        header.innerText = 'x';
        header.style.float = 'left';
        this.positionDiv.appendChild(header);
        this.xInput = document.createElement('input');
        this.xInput.type = 'number';
        this.xInput.onchange = function () {
            var value = _this.xInput.value;
            if (value == null || value.length == 0)
                return;
            if (_this.designer.selected instanceof AnchorControl_1.AnchorControl) {
                var position = _this.designer.selected.position.clone();
                position.x = Number.parseFloat(value);
                _this.designer.selected.setPosition(position);
                _this.designer.requestRender();
            }
        };
        this.positionDiv.appendChild(this.xInput);
        this.yInput = document.createElement('input');
        this.yInput.type = 'number';
        this.yInput.onchange = function () {
            var value = _this.yInput.value;
            if (value == null || value.length == 0)
                return;
            if (_this.designer.selected instanceof AnchorControl_1.AnchorControl) {
                var position = _this.designer.selected.position.clone();
                position.y = Number.parseFloat(value);
                _this.designer.selected.setPosition(position);
                _this.designer.requestRender();
            }
        };
        this.positionDiv.appendChild(this.yInput);
        var setPosition = document.createElement('button');
        setPosition.textContent = '修改';
        this.positionDiv.appendChild(setPosition);
        this.dom.appendChild(this.positionDiv);
        this.addBreak(this.dom);
    }
    ToolBar.prototype.addBreak = function (parent) {
        var hr = document.createElement('hr');
        hr.style.border = '0';
        hr.style.borderLeft = '1px solid #585858';
        hr.style.marginLeft = '2px';
        hr.style.marginRight = '2px';
        parent.appendChild(hr);
    };
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
        origin.remove();
    };
    ToolBar.prototype.settingObject = function () {
    };
    Object.defineProperty(ToolBar.prototype, "width", {
        get: function () {
            return this.dom.clientWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ToolBar.prototype, "height", {
        get: function () {
            return this.dom.clientHeight;
        },
        enumerable: false,
        configurable: true
    });
    ToolBar.prototype.setPosition = function (v) {
        if (v.x < 0)
            v.x = 0;
        if (v.y < 0)
            v.y = 0;
        if (v.x + this.width > this.designer.width)
            v.x = this.designer.width - this.width;
        if (v.y + this.height > this.designer.height)
            v.y = this.designer.height - this.height;
        var offset = new Vector2_1.Vector2(this.designer.container.offsetLeft, this.designer.container.offsetTop);
        this._position = v.clone();
        v = v.sub(offset);
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
                    this.thicknessDiv.style.display = 'none';
                    this.positionDiv.style.display = '';
                    this.xInput.value = this.designer.selected.anchor.x.toString();
                    this.yInput.value = this.designer.selected.anchor.y.toString();
                }
                else if (this.designer.selected instanceof PolygonControl_1.PolygonControl) {
                    this.btnConnectTo.style.display = 'none';
                    this.btnDelete.style.display = '';
                    this.btnSetting.style.display = '';
                    this.thicknessDiv.style.display = '';
                    this.positionDiv.style.display = 'none';
                    this.thicknessInput.value = this.designer.selected.thickness.toString();
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    ToolBar.prototype.dispose = function () {
        this._dragCapture.dispose();
    };
    ToolBar.prototype.createDragButton = function () {
        var button = document.createElement('div');
        button.style.height = '32px';
        button.style.width = '16px';
        button.style.backgroundColor = '#282828';
        button.style.cursor = 'move';
        return button;
    };
    ToolBar.prototype.drag_start = function (e) {
        this._dragPosition = new Vector2_1.Vector2(e.pageX, e.pageY);
        this._dragCapture.capture();
    };
    ToolBar.prototype.drag_move = function (e) {
        if (this._dragPosition != null) {
            var pos = new Vector2_1.Vector2(e.pageX, e.pageY);
            var vertor = pos.sub(this._dragPosition);
            var v = this._position.add(vertor);
            this.setPosition(v);
            this._dragPosition = pos;
        }
    };
    ToolBar.prototype.drag_end = function (e) {
        this._dragPosition = null;
        this._dragCapture.release();
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
        if (points == null || points.length === 0)
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

/***/ "./src/Designer/Utility/MouseCapturer.ts":
/*!***********************************************!*\
  !*** ./src/Designer/Utility/MouseCapturer.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.MouseCapturer = void 0;
var signals = __webpack_require__(/*! signals */ "./node_modules/signals/dist/signals.js");
var MouseCapturer = (function () {
    function MouseCapturer(element) {
        this._element = element;
        this._onmousedown = new signals.Signal();
        this._onmousemove = new signals.Signal();
        this._onmouseup = new signals.Signal();
        this._documentdownhandle = this.element_mouse_down.bind(this);
        this._documentmovehandle = this.document_mouse_move.bind(this);
        this._documentuphandle = this.document_mouse_up.bind(this);
        document.addEventListener('mousemove', this._documentmovehandle);
        document.addEventListener('mouseup', this._documentuphandle);
        if (this._element != null) {
            this._element.addEventListener('mousedown', this._documentdownhandle);
            this._element.addEventListener('mousemove', this._documentmovehandle);
            this._element.addEventListener('mouseup', this._documentuphandle);
        }
    }
    MouseCapturer.prototype.dispose = function () {
        this.release();
        if (this._element != null) {
            this._element.removeEventListener('mousedown', this._documentdownhandle);
        }
        this._onmousedown.dispose();
        this._onmousemove.dispose();
        this._onmouseup.dispose();
    };
    MouseCapturer.prototype.capture = function () {
        if (!this._captureing) {
            this._element.removeEventListener('mousemove', this._documentmovehandle);
            this._element.removeEventListener('mouseup', this._documentuphandle);
            document.addEventListener('mousemove', this._documentmovehandle);
            document.addEventListener('mouseup', this._documentuphandle);
            this._captureing = true;
        }
    };
    MouseCapturer.prototype.release = function () {
        if (this._captureing) {
            document.removeEventListener('mousemove', this._documentmovehandle);
            document.removeEventListener('mouseup', this._documentuphandle);
            this._element.addEventListener('mousemove', this._documentmovehandle);
            this._element.addEventListener('mouseup', this._documentuphandle);
            this._captureing = false;
        }
    };
    MouseCapturer.prototype.element_mouse_down = function (e) {
        this._onmousedown.dispatch(e);
    };
    MouseCapturer.prototype.document_mouse_move = function (e) {
        this._onmousemove.dispatch(e);
    };
    MouseCapturer.prototype.document_mouse_up = function (e) {
        this._onmouseup.dispatch(e);
    };
    Object.defineProperty(MouseCapturer.prototype, "onMouseDown", {
        get: function () {
            return this._onmousedown;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MouseCapturer.prototype, "onMouseMove", {
        get: function () {
            return this._onmousemove;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MouseCapturer.prototype, "onMouseUp", {
        get: function () {
            return this._onmouseup;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MouseCapturer.prototype, "isCaptured", {
        get: function () {
            return this._captureing;
        },
        enumerable: false,
        configurable: true
    });
    return MouseCapturer;
}());
exports.MouseCapturer = MouseCapturer;


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
var AdsorbService_1 = __webpack_require__(/*! ./common/AdsorbService */ "./src/Designer/common/AdsorbService.ts");
var VectorDesigner = (function () {
    function VectorDesigner(div) {
        this._div = div;
        this._zoom = 100;
        this._children = [];
        this._mouseGrabObjects = [];
        this._adsorb = new AdsorbService_1.AdsorbService(this);
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
        this.horizontalLineColor = '#00FF00';
        this.verticalLineColor = '#00FF00';
        this._requestRender = true;
        this.defaultHeight = 100;
        this.defaultthickness = 10;
        this._maxSerialNumber = 0;
    }
    Object.defineProperty(VectorDesigner.prototype, "adsorb", {
        get: function () {
            return this._adsorb;
        },
        enumerable: false,
        configurable: true
    });
    VectorDesigner.prototype.grabObjects = function (objects) {
        this.releaseGrabObjects();
        this._adsorb.enabled = false;
        for (var _i = 0, objects_1 = objects; _i < objects_1.length; _i++) {
            var object = objects_1[_i];
            if (this.remove(object).length > 0) {
                this._mouseGrabObjects.push(object);
            }
        }
        this._adsorb.enabled = true;
    };
    VectorDesigner.prototype.releaseGrabObjects = function () {
        this._adsorb.enabled = false;
        while (this._mouseGrabObjects.length > 0) {
            var object = this._mouseGrabObjects.shift();
            this.add(object);
        }
        this._adsorb.enabled = true;
    };
    VectorDesigner.prototype.discardGrabObjects = function () {
        this._adsorb.enabled = false;
        while (this._mouseGrabObjects.length > 0) {
            this._mouseGrabObjects.shift();
        }
        this._adsorb.enabled = true;
    };
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
                var pt = null;
                if (this._selected instanceof AnchorControl_1.AnchorControl) {
                    pt = this.convertPoint(this._selected.point).add(new Vector2_1.Vector2(20, 10));
                }
                else if (this._selected instanceof PolygonControl_1.PolygonControl) {
                    pt = this._selected.getSubPoint(this.viewControl.position);
                    pt = this.convertPoint(pt).add(new Vector2_1.Vector2(20, 10));
                }
                if (pt) {
                    this.toolbar.visible = true;
                    this._selected.selectedUpdate(true);
                    this.toolbar.setPosition(pt);
                }
            }
            this.requestRender();
        },
        enumerable: false,
        configurable: true
    });
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
        this.requestRender();
    };
    VectorDesigner.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._runState = true;
                        this._requestRender = true;
                        return [4, this.graphicRender()];
                    case 1:
                        _a.sent();
                        return [2];
                }
            });
        });
    };
    VectorDesigner.prototype.updateElementPoints = function () {
        this._adsorb.update();
    };
    VectorDesigner.prototype.requestRender = function () {
        this._requestRender = true;
    };
    VectorDesigner.prototype.graphicRender = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _i, _a, control, _b, _c, control, position;
            return __generator(this, function (_d) {
                if (!this._runState || this.isDisposed)
                    return [2];
                if (this._requestRender) {
                    this._requestRender = false;
                    this.renderer.clear();
                    for (_i = 0, _a = this._children; _i < _a.length; _i++) {
                        control = _a[_i];
                        control.render();
                    }
                    if (this.connector)
                        this.connector.render();
                    if (this._mouseGrabObjects.length > 0) {
                        for (_b = 0, _c = this._mouseGrabObjects; _b < _c.length; _b++) {
                            control = _c[_b];
                            control.render();
                        }
                    }
                    if (this.virtualCursor) {
                        position = this.convertPoint(this.virtualCursor.position);
                        this.renderer.strokeColor = this.horizontalLineColor;
                        this.renderer.line(0, position.y, this.width, position.y, 1);
                        this.renderer.strokeColor = this.verticalLineColor;
                        this.renderer.line(position.x, 0, position.x, this.height);
                    }
                    this.onRender.dispatch();
                }
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
    VectorDesigner.prototype.createAnchor = function (id, x, y) {
        var x = Number.parseFloat(x.toFixed(4));
        var y = Number.parseFloat(y.toFixed(4));
        if (id == null) {
            for (var _i = 0, _a = this.children; _i < _a.length; _i++) {
                var anchor_1 = _a[_i];
                if (anchor_1 instanceof AnchorControl_1.AnchorControl) {
                    if (anchor_1.anchor.x === x && anchor_1.anchor.y === y) {
                        return anchor_1;
                    }
                }
            }
            id = ++this._maxSerialNumber;
        }
        var anchor = new AnchorControl_1.AnchorControl(this, x, y);
        anchor.id = id;
        if (id >= this._maxSerialNumber) {
            this._maxSerialNumber = id + 1;
        }
        return anchor;
    };
    VectorDesigner.prototype.createPolygon = function (id, anchor1, anchor2, thickness) {
        if (anchor1 == anchor2)
            return null;
        if (anchor1.anchor.targets.indexOf(anchor2.anchor) > -1) {
            return null;
        }
        if (id && id >= this._maxSerialNumber) {
            this._maxSerialNumber = id + 1;
        }
        else {
            id = ++this._maxSerialNumber;
        }
        if (thickness == null)
            thickness = this.defaultthickness;
        var polygon = new PolygonControl_1.PolygonControl(this, anchor1, anchor2, thickness);
        polygon.id = id;
        polygon.height = this.defaultHeight;
        return polygon;
    };
    VectorDesigner.prototype.add = function () {
        var ctls = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ctls[_i] = arguments[_i];
        }
        for (var _a = 0, ctls_1 = ctls; _a < ctls_1.length; _a++) {
            var ctl = ctls_1[_a];
            if (ctl != null) {
                var index = this.children.indexOf(ctl);
                if (ctl.id && ctl.id >= this._maxSerialNumber) {
                    this._maxSerialNumber = ctl.id + 1;
                }
                if (index == -1) {
                    if (ctl instanceof AnchorControl_1.AnchorControl) {
                        this.children.push(ctl);
                    }
                    else if (ctl instanceof PolygonControl_1.PolygonControl) {
                        this.children.unshift(ctl);
                    }
                }
            }
        }
        this.requestRender();
        this._adsorb.update();
    };
    VectorDesigner.prototype.remove = function () {
        var ctls = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            ctls[_i] = arguments[_i];
        }
        var result = [];
        for (var _a = 0, ctls_2 = ctls; _a < ctls_2.length; _a++) {
            var ctl = ctls_2[_a];
            var index = this.children.indexOf(ctl);
            if (index > -1) {
                result.push(this.children[index]);
                this.children.splice(index, 1);
            }
            index = this._mouseGrabObjects.indexOf(ctl);
            if (index > -1) {
                this._mouseGrabObjects.splice(index, 1);
            }
        }
        this.requestRender();
        this._adsorb.update();
        return result;
    };
    VectorDesigner.prototype.clear = function () {
        this.releaseGrabObjects();
        this.connector = null;
        this.selected = null;
        this.virtualCursor = null;
        this._adsorb.clear();
        this._adsorb.enabled = false;
        while (this.children.length > 0) {
            var control = this.children.shift();
            control.remove();
        }
        this._adsorb.enabled = true;
        this._maxSerialNumber = 0;
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
    VectorDesigner.prototype.serialize = function () {
        var area = {
            anchors: [],
            walls: []
        };
        for (var _i = 0, _a = this._children; _i < _a.length; _i++) {
            var control = _a[_i];
            if (control instanceof PolygonControl_1.PolygonControl) {
                area.walls.push(control.serialize());
            }
            else if (control instanceof AnchorControl_1.AnchorControl) {
                if (control.polygons.length > 0) {
                    area.anchors.push(control.serialize());
                }
            }
        }
        return area;
    };
    VectorDesigner.prototype.from = function (area) {
        this.clear();
        var map = {};
        var objects = [];
        for (var _i = 0, _a = area.anchors; _i < _a.length; _i++) {
            var anchor = _a[_i];
            map[anchor.id] = this.createAnchor(anchor.id, anchor.x, anchor.y);
            objects.push(map[anchor.id]);
        }
        for (var _b = 0, _c = area.walls; _b < _c.length; _b++) {
            var wall = _c[_b];
            var from = map[wall.anchors[0]];
            var to = map[wall.anchors[1]];
            if (from && to) {
                var segment = this.createPolygon(wall.id, from, to, wall.thick);
                if (segment) {
                    segment.height = wall.height;
                    objects.push(segment);
                }
            }
        }
        for (var key in map) {
            map[key].update();
        }
        this.add.apply(this, objects);
        map = {};
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
var MouseCapturer_1 = __webpack_require__(/*! ./Utility/MouseCapturer */ "./src/Designer/Utility/MouseCapturer.ts");
var PolygonControl_1 = __webpack_require__(/*! ./Views/PolygonControl */ "./src/Designer/Views/PolygonControl.ts");
var ViewController = (function () {
    function ViewController(designer) {
        this.designer = designer;
        this._iscanceled = false;
        this._onmove = new signals.Signal();
        this.position = new Vector2_1.Vector2(-1, -1);
        this.capturer = new MouseCapturer_1.MouseCapturer(this.designer.renderer.canvas);
        this.capturer.onMouseDown.add(this.mouse_down, this);
        this.capturer.onMouseMove.add(this.mouse_move, this);
        this.capturer.onMouseUp.add(this.mouse_up, this);
        this.designer.renderer.canvas.ondblclick = this.mouse_dblclick.bind(this);
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
    Object.defineProperty(ViewController.prototype, "hitObject", {
        get: function () {
            return this._hitObject;
        },
        enumerable: false,
        configurable: true
    });
    ViewController.prototype.dispose = function () {
        this.designer.renderer.canvas.onwheel = null;
        this.designer.renderer.canvas.onscroll = null;
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
            if (index === -1) {
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
        if (this.hitObject instanceof AnchorControl_1.AnchorControl) {
            return;
        }
        if (this.hitObject instanceof PolygonControl_1.PolygonControl) {
            var anchor = this.hitObject.split(this.position);
            this.designer.selected = anchor;
            return;
        }
        if (this.designer.selected == null) {
            var v = this.designer.mapPoint(this.position);
            var anchor = this.designer.createAnchor(null, v.x, v.y);
            this.designer.add(anchor);
            this.designer.selected = anchor;
        }
    };
    ViewController.prototype.mouse_down = function (e) {
        this.capturer.capture();
        this.pressed_state = this.designer.toolbar.visible;
        if (this.pressed_state) {
            this.designer.toolbar.visible = false;
        }
        if (this.designer.connector != null) {
            if (e.button === 2) {
                this.designer.connector.cancel();
                this.designer.toolbar.visible = true;
            }
            if (e.button === 0) {
                this.designer.connector.commit(this.hitObject, this.position);
            }
            this.designer.connector = null;
            this._iscanceled = true;
            this.designer.virtualCursor = null;
            return;
        }
        this._iscanceled = false;
        if (e.button === 2) {
            if (this.designer.selected != null) {
                this.designer.selected = null;
                this._iscanceled = true;
                return;
            }
        }
        if (this._hoverObject) {
            this._pressedObject = this._hoverObject;
            this._pressedObject.dispatchEvents('onMouseDown', e.button, this.position);
            return;
        }
        this._press_position = this.position;
        this._dragging = true;
        this.stopEventBubble(e);
        this.designer.renderer.canvas.style.cursor = "move";
    };
    ViewController.prototype.testhitObject = function (v, excluded) {
        for (var i = this.designer.children.length - 1; i >= 0; i--) {
            var control = this.designer.children[i];
            if (control.hit(v)) {
                if (excluded != null && excluded.length > 0) {
                    if (excluded.indexOf(control) > -1)
                        continue;
                }
                return control;
            }
        }
        return null;
    };
    ViewController.prototype.mouse_move = function (e) {
        if (this._iscanceled)
            return;
        var v = this.designer.mapPoint(this.position);
        var excluded = [];
        if (this._pressedObject instanceof AnchorControl_1.AnchorControl) {
            excluded.push(this._pressedObject);
            excluded = excluded.concat(this._pressedObject.polygons);
        }
        else if (this._pressedObject instanceof PolygonControl_1.PolygonControl) {
        }
        this._hitObject = this.testhitObject(v, excluded);
        this.position = new Vector2_1.Vector2(e.pageX - this.designer.renderer.canvas.offsetLeft, e.pageY - this.designer.renderer.canvas.offsetTop);
        if (this.designer.connector != null) {
            this.designer.connector.update(this.position, this._hitObject);
            return;
        }
        if (this._pressedObject) {
            this._pressedObject.dispatchEvents('onMouseMove', e.button, this.position);
            return;
        }
        if (this._dragging) {
            var pos = this.position.sub(this._press_position);
            this._press_position = this.position;
            var center = new Vector2_1.Vector2(this.designer.center.x - pos.x * this.designer.res, this.designer.center.y - pos.y * this.designer.res);
            this.onmove.dispatch(this.designer.zoom, center, true);
            this.stopEventBubble(e);
        }
        if (this._hitObject !== this._hoverObject) {
            if (this._hoverObject != null) {
                this._hoverObject.dispatchEvents('onMouseLeave');
            }
            this._hoverObject = this._hitObject;
            if (this._hoverObject != null) {
                this._hoverObject.dispatchEvents('onMouseEnter');
                this._hoverObject.dispatchEvents('onMouseMove', e.button, this.position);
            }
        }
        else if (this._hoverObject != null) {
            this._hoverObject.dispatchEvents('onMouseMove', e.button, this.position);
        }
    };
    ViewController.prototype.mouse_up = function (e) {
        if (this.designer.selected == null) {
            this.designer.toolbar.visible = false;
        }
        this.capturer.release();
        if (this._iscanceled) {
            this._iscanceled = false;
            return;
        }
        this.designer.toolbar.visible = this.pressed_state;
        if (this._pressedObject) {
            this._pressedObject.dispatchEvents('onMouseUp', e.button, this.position);
            if (this._pressedObject === this._hoverObject) {
                this._hoverObject.dispatchEvents('onClick');
            }
            this._pressedObject = null;
            return;
        }
        if (this._dragging) {
            this.position = new Vector2_1.Vector2(e.pageX - this.designer.renderer.canvas.offsetLeft, e.pageY - this.designer.renderer.canvas.offsetTop);
            this._dragging = false;
            this.stopEventBubble(e);
            this.designer.renderer.canvas.style.cursor = "default";
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
var Control_1 = __webpack_require__(/*! ./Control */ "./src/Designer/Views/Control.ts");
var Anchor_1 = __webpack_require__(/*! ../../core/Anchor */ "./src/core/Anchor.ts");
var Renderer_1 = __webpack_require__(/*! ../Renderer */ "./src/Designer/Renderer.ts");
var PolygonControl_1 = __webpack_require__(/*! ./PolygonControl */ "./src/Designer/Views/PolygonControl.ts");
var signals = __webpack_require__(/*! signals */ "./node_modules/signals/dist/signals.js");
var AnchorControl = (function (_super) {
    __extends(AnchorControl, _super);
    function AnchorControl(designer, x, y) {
        var _this = _super.call(this, designer) || this;
        _this._onupdate = new signals.Signal();
        _this._polygons = [];
        _this._linked = [];
        _this.dragDelayTime = 50;
        _this.position.set(x, y);
        _this._anchor = new Anchor_1.Anchor(0, _this.position.x, _this.position.y);
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
    Object.defineProperty(AnchorControl.prototype, "id", {
        get: function () {
            return this._anchor.id;
        },
        set: function (value) {
            this._anchor.id = value;
        },
        enumerable: false,
        configurable: true
    });
    AnchorControl.prototype.onBeginDrag = function (canvasPosition) {
        var viewPos = this.designer.mapPoint(canvasPosition);
        this.designer.grabObjects([this]);
        this.designer.updateElementPoints();
        this.designer.virtualCursor = this;
    };
    AnchorControl.prototype.onDraging = function (canvasPosition) {
        var viewPos = this.designer.mapPoint(canvasPosition);
        var result;
        var hitObject = this.designer.viewControl.hitObject;
        if (hitObject != this && hitObject instanceof PolygonControl_1.PolygonControl) {
            result = viewPos = hitObject.getSubPoint(canvasPosition);
        }
        else {
            result = this.designer.adsorb.adsorption(viewPos);
        }
        this.designer.horizontalLineColor = result.y != null ? '#0000FF' : '#00FF00';
        this.designer.verticalLineColor = result.x != null ? '#0000FF' : '#00FF00';
        this.setPosition(viewPos);
        this.updateNearby();
        this.designer.requestRender();
    };
    AnchorControl.prototype.onEndDrag = function (canvasPosition) {
        var _this = this;
        this.designer.virtualCursor = null;
        var anchor = this.designer._children.find(function (e) { return e instanceof AnchorControl && e.anchor.x === _this.anchor.x && e.anchor.y === _this.anchor.y; });
        if (anchor != null && anchor != this) {
            this.merageTo(anchor);
            this.designer.discardGrabObjects();
            return;
        }
        if (this.designer.viewControl.hitObject != this) {
            if (this.designer.viewControl.hitObject instanceof PolygonControl_1.PolygonControl) {
                var targetAnchor = this.designer.viewControl.hitObject.split(this.designer.viewControl.position);
                this.merageTo(targetAnchor);
            }
            else if (this.designer.viewControl.hitObject instanceof AnchorControl) {
                this.merageTo(this.designer.viewControl.hitObject);
            }
        }
        this.designer.releaseGrabObjects();
        this.designer.updateElementPoints();
    };
    AnchorControl.prototype.merageTo = function (ANCHOR) {
        if (this.anchor.targets.indexOf(ANCHOR.anchor) > -1)
            return false;
        for (var _i = 0, _a = this._polygons; _i < _a.length; _i++) {
            var polygon = _a[_i];
            var poly = this.designer.createPolygon(null, polygon.anchors[0] == this ? polygon.anchors[1] : polygon.anchors[0], ANCHOR, polygon.thickness);
            if (poly != null) {
                this.designer.add(poly);
            }
        }
        this.remove();
        ANCHOR.update();
        this.designer.selected = ANCHOR;
        return true;
    };
    AnchorControl.prototype.updateNearby = function () {
        for (var _i = 0, _a = this._polygons; _i < _a.length; _i++) {
            var target = _a[_i];
            for (var _b = 0, _c = target.anchors; _b < _c.length; _b++) {
                var v = _c[_b];
                if (v !== this) {
                    v.update();
                }
            }
        }
        this.update();
    };
    AnchorControl.prototype.addPolygon = function (p, a) {
        this._polygons.push(p);
        this._linked.push(a);
    };
    AnchorControl.prototype.removePolygon = function (p, a) {
        var index = this._polygons.indexOf(p);
        if (index > -1)
            this._polygons.splice(index, 1);
        index = this._linked.indexOf(a);
        if (index > -1)
            this._linked.splice(index, 1);
    };
    Object.defineProperty(AnchorControl.prototype, "polygons", {
        get: function () {
            return this._polygons;
        },
        enumerable: false,
        configurable: true
    });
    AnchorControl.prototype.setPosition = function (v) {
        this.position.copy(v);
        this._anchor.setPosition(v);
    };
    AnchorControl.prototype.remove = function () {
        _super.prototype.remove.call(this);
        this._linked = [];
        while (this._polygons.length) {
            var polygon = this._polygons.shift();
            polygon.remove();
        }
        this._anchor.remove();
        this._onupdate.removeAll();
    };
    AnchorControl.prototype.update = function () {
        this._anchor.build();
        this.onUpdate.dispatch();
    };
    AnchorControl.prototype.onClick = function () {
        this.designer.selected = this;
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
    Object.defineProperty(AnchorControl.prototype, "point", {
        get: function () {
            return this.position;
        },
        enumerable: false,
        configurable: true
    });
    AnchorControl.prototype.serialize = function () {
        return {
            id: this.id,
            x: this.position.x,
            y: this.position.y
        };
    };
    return AnchorControl;
}(Control_1.Control));
exports.AnchorControl = AnchorControl;


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
        this._isHover = false;
        this._pressedTime = null;
        this.hoverColor = '#ff8888';
        this.opacity = 0.5;
        this._isSelected = false;
        this._position = new Vector2_1.Vector2();
        this.dragDelayTime = 0;
    }
    Object.defineProperty(Control.prototype, "position", {
        get: function () {
            return this._position;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (value) {
            this._id = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "isPressed", {
        get: function () {
            return this._pressedTime != null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "isDraging", {
        get: function () {
            return this._draging;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Control.prototype, "pressedTick", {
        get: function () {
            if (this._pressedTime == null)
                return 0;
            return new Date().getTime() - this._pressedTime;
        },
        enumerable: false,
        configurable: true
    });
    Control.prototype.remove = function () {
        this.designer.remove(this);
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
        this.designer.requestRender();
    };
    Control.prototype.onMouseLeave = function () {
        this._isHover = false;
        this.designer.requestRender();
    };
    Control.prototype.onMouseDown = function (button, pos) {
        var _this = this;
        this._pressedTime = new Date().getTime();
        if (button === 0) {
            this._hDragTimer = window.setTimeout(function () {
                _this._hDragTimer = null;
                if (_this.designer.viewControl.hitObject == _this) {
                    _this._draging = true;
                    _this.onBeginDrag(pos);
                }
            }, this.dragDelayTime);
        }
    };
    Control.prototype.onMouseMove = function (button, pos) {
        if (this._draging) {
            this.onDraging(pos);
        }
    };
    Control.prototype.onMouseUp = function (button, pos) {
        this._pressedTime = null;
        if (this._hDragTimer) {
            window.clearTimeout(this._hDragTimer);
            this._hDragTimer = null;
        }
        if (this._draging) {
            this._draging = false;
            this.onEndDrag(pos);
        }
    };
    Control.prototype.onBeginDrag = function (canvasPosition) {
    };
    Control.prototype.onDraging = function (canvasPosition) {
    };
    Control.prototype.onEndDrag = function (canvasPosition) {
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
    Control.prototype.dispatchEvents = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        this[event] && this[event].apply(this, params);
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
    function PolygonControl(designer, anchor1, anchor2, thickness) {
        var _this = _super.call(this, designer) || this;
        _this._anchors = [anchor1, anchor2];
        _this._points = [];
        _this.dragDelayTime = 200;
        _this._bounds = new Bounds_1.Bounds(0, 0, 0, 0);
        _this._segment = new Segment_1.Segment(anchor1.anchor, anchor2.anchor, thickness);
        _this.strokeColor = '#FFFFFF';
        _this.fillColor = '#888888';
        _this._anchors[0].onUpdate.add(_this.update, _this);
        _this._anchors[1].onUpdate.add(_this.update, _this);
        _this._anchors[0].addPolygon(_this, _this._anchors[1]);
        _this._anchors[1].addPolygon(_this, _this._anchors[0]);
        return _this;
    }
    Object.defineProperty(PolygonControl.prototype, "thickness", {
        get: function () {
            return this._segment.thickness;
        },
        set: function (value) {
            this._segment.thickness = value;
        },
        enumerable: false,
        configurable: true
    });
    PolygonControl.prototype.updateThickness = function (thickness) {
        this.thickness = thickness;
        for (var _i = 0, _a = this._anchors; _i < _a.length; _i++) {
            var anchor = _a[_i];
            anchor.update();
        }
        this.update();
    };
    Object.defineProperty(PolygonControl.prototype, "id", {
        get: function () {
            return this._segment.id;
        },
        set: function (value) {
            this._segment.id = value;
        },
        enumerable: false,
        configurable: true
    });
    PolygonControl.prototype.remove = function (removeanchor) {
        if (removeanchor === void 0) { removeanchor = true; }
        _super.prototype.remove.call(this);
        this._segment.dispose();
        this._anchors[0].onUpdate.remove(this.update, this);
        this._anchors[1].onUpdate.remove(this.update, this);
        this._anchors[0].removePolygon(this, this._anchors[1]);
        this._anchors[1].removePolygon(this, this._anchors[0]);
        while (this._anchors.length > 0 && removeanchor) {
            var anchorControl = this._anchors.shift();
            if (anchorControl.anchor.targets.length === 0) {
                anchorControl.remove();
            }
            else {
                anchorControl.update();
            }
        }
    };
    PolygonControl.prototype.getSubPoint = function (canvasPoint) {
        var mousePosition = this.designer.mapPoint(canvasPoint);
        return Vector2_1.Vector2.getProjectivePoint(this.anchors[0].position, this.anchors[1].position, mousePosition);
    };
    PolygonControl.prototype.split = function (point) {
        var polygons = [];
        var anchors = [];
        var anchor1 = this.anchors[0];
        var anchor2 = this.anchors[1];
        var mousePosition = this.designer.mapPoint(point);
        var target = Vector2_1.Vector2.getProjectivePoint(anchor1.position, anchor2.position, mousePosition);
        var targetAnchor = this.designer.createAnchor(null, target.x, target.y);
        anchors.push(targetAnchor);
        for (var _i = 0, _a = this.anchors; _i < _a.length; _i++) {
            var anchor = _a[_i];
            var segment = this.designer.createPolygon(null, anchor, targetAnchor, this.thickness);
            if (segment != null)
                polygons.push(segment);
            anchors.push(anchor);
        }
        for (var _b = 0, anchors_1 = anchors; _b < anchors_1.length; _b++) {
            var anchor = anchors_1[_b];
            anchor.update();
        }
        targetAnchor.update();
        for (var _c = 0, polygons_1 = polygons; _c < polygons_1.length; _c++) {
            var f = polygons_1[_c];
            f.update();
            this.designer.add(f);
        }
        this.remove();
        this.designer.add(targetAnchor);
        return targetAnchor;
    };
    PolygonControl.prototype.onBeginDrag = function (canvasPosition) {
        this.designer.renderer.canvas.style.cursor = 'move';
        var viewPos = this.designer.mapPoint(canvasPosition);
        this._anchorPositions = [viewPos.sub(this.anchors[0].position), viewPos.sub(this.anchors[1].position)];
    };
    PolygonControl.prototype.onDraging = function (canvasPosition) {
        var viewPos = this.designer.mapPoint(canvasPosition);
        this.anchors[0].setPosition(viewPos.sub(this._anchorPositions[0]));
        this.anchors[1].setPosition(viewPos.sub(this._anchorPositions[1]));
        this.anchors[0].updateNearby();
        this.anchors[1].updateNearby();
        this.designer.requestRender();
    };
    PolygonControl.prototype.onEndDrag = function (canvasPosition) {
        this.designer.renderer.canvas.style.cursor = 'default';
    };
    PolygonControl.prototype.update = function () {
        if (this._segment != null) {
            this._points = [];
            this._bounds = new Bounds_1.Bounds(0, 0, 0, 0);
            for (var _i = 0, _a = this._segment.points; _i < _a.length; _i++) {
                var point = _a[_i];
                var v = new Vector2_1.Vector2().fromArray(point);
                this._points.push(v);
                this._bounds.extendFromPoint(v);
            }
        }
    };
    PolygonControl.prototype.hit = function (point) {
        return point.inPolygon(this._points);
    };
    PolygonControl.prototype.selectedUpdate = function (value) {
        _super.prototype.selectedUpdate.call(this, value);
        this.fillColor = value ? '#0078d7' : '#888888';
    };
    PolygonControl.prototype.onClick = function () {
        this.designer.selected = this;
    };
    PolygonControl.prototype.render = function () {
        this.designer.renderer.opacity = this.opacity;
        this.designer.renderer.fillColor = this.isHover && !this.isSelected ? this.hoverColor : this.fillColor;
        this.designer.renderer.strokeColor = this.strokeColor;
        this.designer.renderer.polygon(this.designer.convertPoints(this._points), true, Renderer_1.RenderType.ALL);
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
    PolygonControl.prototype.serialize = function () {
        return {
            id: this.id,
            anchors: [this.anchors[0].id, this.anchors[1].id],
            thick: this.thickness,
            height: this.height,
        };
    };
    return PolygonControl;
}(Control_1.Control));
exports.PolygonControl = PolygonControl;


/***/ }),

/***/ "./src/Designer/common/AdsorbService.ts":
/*!**********************************************!*\
  !*** ./src/Designer/common/AdsorbService.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AdsorbService = void 0;
var AnchorControl_1 = __webpack_require__(/*! ../Views/AnchorControl */ "./src/Designer/Views/AnchorControl.ts");
var AdsorbService = (function () {
    function AdsorbService(designer) {
        this.designer = designer;
        this.horizontalTraces = [];
        this.verticalTraces = [];
        this.enabled = true;
    }
    AdsorbService.prototype.update = function () {
        if (!this.enabled)
            return;
        this.horizontalTraces.length = 0;
        this.verticalTraces.length = 0;
        for (var _i = 0, _a = this.designer.children; _i < _a.length; _i++) {
            var object = _a[_i];
            if (object instanceof AnchorControl_1.AnchorControl) {
                this.horizontalTraces.push(object.point.x);
                this.verticalTraces.push(object.point.y);
            }
        }
        this.horizontalTraces = Array.from(new Set(this.horizontalTraces)).sort(function (a, b) { return a - b; });
        this.verticalTraces = Array.from(new Set(this.verticalTraces)).sort(function (a, b) { return a - b; });
    };
    AdsorbService.prototype.clear = function () {
        this.horizontalTraces.length = 0;
        this.verticalTraces.length = 0;
    };
    AdsorbService.prototype.binarySearch = function (array, targetNum) {
        var min = 0;
        var max = array.length - 1;
        while (min != max) {
            var midIndex = Math.round((max + min) / 2);
            var mid = (max - min);
            if (targetNum === array[midIndex]) {
                return array[midIndex];
            }
            if (targetNum > array[midIndex]) {
                min = midIndex;
            }
            else {
                max = midIndex;
            }
            if (mid <= 2) {
                break;
            }
        }
        if (Math.abs(array[max] - targetNum) >= Math.abs(array[min] - targetNum)) {
            return array[min];
        }
        else {
            return array[max];
        }
    };
    AdsorbService.prototype.adsorption = function (in_out_Point, lessValue) {
        if (lessValue === void 0) { lessValue = 15; }
        var result = { x: null, y: null };
        lessValue *= this.designer.res;
        var x = this.binarySearch(this.horizontalTraces, in_out_Point.x);
        var y = this.binarySearch(this.verticalTraces, in_out_Point.y);
        var x_dis = Math.abs(x - in_out_Point.x);
        if (x != null && x_dis <= lessValue) {
            in_out_Point.x = x;
            result.x = x_dis;
        }
        var y_dis = Math.abs(y - in_out_Point.y);
        if (y != null && y_dis <= lessValue) {
            in_out_Point.y = y;
            result.y = y_dis;
        }
        return result;
    };
    return AdsorbService;
}());
exports.AdsorbService = AdsorbService;


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

/***/ "./src/Designer/common/Connector.ts":
/*!******************************************!*\
  !*** ./src/Designer/common/Connector.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Connector = void 0;
var Vector2_1 = __webpack_require__(/*! ../../core/Vector2 */ "./src/core/Vector2.ts");
var AnchorControl_1 = __webpack_require__(/*! ../Views/AnchorControl */ "./src/Designer/Views/AnchorControl.ts");
var PolygonControl_1 = __webpack_require__(/*! ../Views/PolygonControl */ "./src/Designer/Views/PolygonControl.ts");
var Connector = (function () {
    function Connector(designer, origin) {
        this.designer = designer;
        this.origin = origin;
        var v = this.designer.mapPoint(this.designer.viewControl.position);
        this.newAnchor = this.designer.createAnchor(null, v.x, v.y);
        this.newSegment = this.designer.createPolygon(null, origin, this.newAnchor, 10);
        this.designer.virtualCursor = this.newAnchor;
        this.update();
    }
    Connector.prototype.update = function (canvasPoint, control) {
        var position;
        var result;
        if (control instanceof PolygonControl_1.PolygonControl) {
            position = control.getSubPoint(canvasPoint);
            result = new Vector2_1.Vector2(1, 1);
        }
        else if (canvasPoint != null) {
            position = this.designer.mapPoint(canvasPoint);
            result = this.designer.adsorb.adsorption(position);
        }
        if (position) {
            this.newAnchor.setPosition(position);
        }
        if (result) {
            this.designer.horizontalLineColor = result.y != null ? '#0000FF' : '#00FF00';
            this.designer.verticalLineColor = result.x != null ? '#0000FF' : '#00FF00';
        }
        this.newAnchor.update();
        this.origin.update();
        this.designer.requestRender();
    };
    Connector.prototype.commit = function (hover, position) {
        var point = this.newAnchor.point;
        var anchor = this.designer._children.find(function (e) { return e instanceof AnchorControl_1.AnchorControl && e.anchor.x === point.x && e.anchor.y === point.y; });
        if (hover instanceof AnchorControl_1.AnchorControl) {
            anchor = hover;
        }
        if (hover instanceof PolygonControl_1.PolygonControl) {
            this.newSegment.remove(false);
            this.newAnchor.remove();
            this.newAnchor = hover.split(this.designer.viewControl.position);
            this.newSegment = this.designer.createPolygon(null, this.origin, this.newAnchor, 10);
            this.newAnchor.update();
            this.origin.update();
        }
        else if (anchor != null) {
            this.newSegment.remove(false);
            this.newAnchor.remove();
            this.newAnchor = anchor;
            this.newSegment = this.designer.createPolygon(null, this.origin, this.newAnchor, 10);
            this.update();
            this.designer.add(this.newAnchor, this.newSegment);
        }
        this.designer.add(this.newAnchor, this.newSegment);
        this.designer.selected = this.newAnchor;
    };
    Connector.prototype.render = function () {
        if (this.newSegment != null) {
            this.newSegment.render();
        }
        if (this.newAnchor != null) {
            this.newAnchor.render();
        }
    };
    Connector.prototype.cancel = function () {
        this.newSegment.remove(false);
        this.newAnchor.remove();
        this.newSegment = null;
        this.newAnchor = null;
        this.origin.update();
    };
    return Connector;
}());
exports.Connector = Connector;


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
                if (count % 10 === 0) {
                    pValue = (offsetCenter - offsetCalibration + pos) * this.designer.res;
                    pValue = Number.parseFloat(pValue.toFixed(2));
                }
                this.drawCalibration(centeroffset + pos, pValue);
            }
            if (centeroffset - pos > 0) {
                var pValue = null;
                if (count % 10 === 0) {
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
        this._renderer.strokeColor = '#000000';
        this._renderer.fillColor = '#000000';
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
                if (count % 10 === 0) {
                    pValue = (offsetCenter - offsetCalibration + pos) * this.designer.res;
                    pValue = Number.parseFloat(pValue.toFixed(2));
                }
                this.drawCalibration(centeroffset + pos, pValue);
            }
            if (centeroffset - pos > 0) {
                var pValue = null;
                if (count % 10 === 0) {
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
        this._point = new Vector2_1.Vector2(x, y);
        this._targets = [];
        this._map = new Map();
    }
    Object.defineProperty(Anchor.prototype, "x", {
        get: function () {
            return this._point.x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Anchor.prototype, "y", {
        get: function () {
            return this._point.y;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Anchor.prototype, "point", {
        get: function () {
            return this._point;
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
        this._point.x = v.x;
        this._point.y = v.y;
        this._point.round4();
    };
    Anchor.prototype.dispose = function () {
        this.remove();
    };
    Anchor.prototype.remove = function () {
        if (this._targets.length > 0) {
            while (this._targets.length > 0) {
                var anchor = this._targets.shift();
                var segment = this._map.get(anchor);
                segment.dispose();
            }
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
    Anchor.prototype.build = function () {
        if (this._targets.length > 1) {
            Vector2_1.Vector2.clockwiseSortPoints(this._targets, this);
            for (var i = 0; i < this._targets.length; i++) {
                var cur = i;
                var next = (i + 1) % this._targets.length;
                var anchor = this._targets[cur];
                var nextanchor = this._targets[next];
                var edge_path = this.generateEdgePoints(anchor, true);
                var nextEdge_path = this.generateEdgePoints(nextanchor, false);
                var intersectionPoint = Vector2_1.Vector2.getIntersection(edge_path[0], edge_path[1], nextEdge_path[0], nextEdge_path[1]);
                if (intersectionPoint === null) {
                    intersectionPoint = Vector2_1.Vector2.getProjectivePoint(edge_path[0], edge_path[1], this.point);
                }
                intersectionPoint.round4();
                var segment = this._map.get(anchor);
                var points = segment.getPort(this);
                points[1] = this.point.clone();
                points[0] = intersectionPoint;
                segment = this._map.get(nextanchor);
                points = segment.getPort(this);
                points[2] = intersectionPoint;
                points[1] = this.point.clone();
            }
        }
        else if (this._targets.length === 1) {
            var anchor = this._targets[0];
            var segment = this._map.get(anchor);
            var start = this.point;
            var end = anchor.point;
            var angle = Math.atan2((end.y - start.y), (end.x - start.x));
            var theta = angle * (180 / Math.PI);
            var ps = new Vector2_1.Vector2(start.x + segment.thickness / 2, start.y);
            var left_point = ps.rotatePoint(start, theta - 90);
            var right_point = ps.rotatePoint(start, theta + 90);
            var points = segment.getPort(this);
            points[0] = left_point.round4();
            points[1] = this.point.clone();
            points[2] = right_point.round4();
        }
    };
    Anchor.prototype.generateEdgePoints = function (target, right) {
        if (right === void 0) { right = true; }
        var eulr = right ? 90 : -90;
        ;
        var segment = this._map.get(target);
        var start = this.point;
        var end = target.point;
        var off = segment.thickness / 2;
        var angle = Math.atan2((end.y - start.y), (end.x - start.x));
        var theta = angle * (180 / Math.PI);
        var ps = new Vector2_1.Vector2(start.x + off, start.y);
        var pe = new Vector2_1.Vector2(end.x + off, end.y);
        var left_point = ps.rotatePoint(start, theta - eulr);
        var right_point = pe.rotatePoint(end, theta - eulr);
        return [left_point, right_point];
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
    Segment.prototype.remove = function () {
        if (this._start) {
            this._start.removeTarget(this._end);
            this._end.removeTarget(this._start);
            this._end = null;
            this._start = null;
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
        set: function (value) {
            this._thickness = value;
        },
        enumerable: false,
        configurable: true
    });
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
    Vector2.prototype.round4 = function () {
        this.x = (this.x * 10000 | 0) / 10000;
        this.y = (this.y * 10000 | 0) / 10000;
        return this;
    };
    Vector2.prototype.round2 = function () {
        this.x = (this.x * 100 | 0) / 100;
        this.y = (this.y * 100 | 0) / 100;
        return this;
    };
    Vector2.prototype.round0 = function () {
        this.x = this.x | 0;
        this.y = this.y | 0;
        return this;
    };
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
    Vector2.prototype.copy = function (v) {
        this.x = v.x;
        this.y = v.y;
    };
    Vector2.prototype.set = function (x, y) {
        this.x = x;
        this.y = y;
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
    Vector2.getProjectivePoint = function (P1, P2, point) {
        var pLine = P1;
        if (P1.x === P2.x && P1.y === P2.y) {
            return P1;
        }
        if (P1.x === P2.x) {
            return new Vector2(pLine.x, point.y);
        }
        else if (P1.y === P2.y) {
            return new Vector2(point.x, pLine.y);
        }
        var k = ((P1.y - P2.y)) / (P1.x - P2.x);
        var X = ((k * pLine.x + point.x / k + point.y - pLine.y) / (1 / k + k));
        var Y = (-1 / k * (X - point.x) + point.y);
        return new Vector2(X, Y);
    };
    Vector2.prototype.rotatePoint = function (center, a) {
        var ang = a / 180 * Math.PI;
        var x = (this.x - center.x) * Math.cos(ang) - (this.y - center.y) * Math.sin(ang) + center.x;
        var y = (this.x - center.x) * Math.sin(ang) + (this.y - center.y) * Math.cos(ang) + center.y;
        return new Vector2(x, y);
    };
    Vector2.lessCcw = function (a, b, center) {
        var dax = ((a.x - center.x) > 0) ? 1 : 0;
        var day = ((a.y - center.y) > 0) ? 1 : 0;
        var qa = (1 - dax) + (1 - day) + ((dax & (1 - day)) << 1);
        var dbx = ((b.x - center.x) > 0) ? 1 : 0;
        var dby = ((b.y - center.y) > 0) ? 1 : 0;
        var qb = (1 - dbx) + (1 - dby) + ((dbx & (1 - dby)) << 1);
        if (qa == qb) {
            return (b.x - center.x) * (a.y - center.y) < (b.y - center.y) * (a.x - center.x);
        }
        else {
            return qa < qb;
        }
    };
    Vector2.clockwiseSortPoints = function (vPoints, center) {
        for (var i = 0; i < vPoints.length - 1; i++) {
            for (var j = 0; j < vPoints.length - i - 1; j++) {
                if (this.lessCcw(vPoints[j], vPoints[j + 1], center)) {
                    var tmp = vPoints[j];
                    vPoints[j] = vPoints[j + 1];
                    vPoints[j + 1] = tmp;
                }
            }
        }
    };
    Vector2.getIntersection = function (lineFirstStar, lineFirstEnd, lineSecondStar, lineSecondEnd) {
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
                    return new Vector2(x, y);
                }
            case 2:
                {
                    var x = lineFirstStar.x;
                    var y = (lineSecondStar.x - x) * (-b) + lineSecondStar.y;
                    return new Vector2(x, y);
                }
            case 3:
                {
                    if (a === b) {
                        return null;
                    }
                    var x = (a * lineFirstStar.x - b * lineSecondStar.x - lineFirstStar.y + lineSecondStar.y) / (a - b);
                    var y = a * x - a * lineFirstStar.x + lineFirstStar.y;
                    return new Vector2(x, y);
                }
        }
        return null;
    };
    return Vector2;
}());
exports.Vector2 = Vector2;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9leGFtcGxlcy9pbmRleC50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc2lnbmFscy9kaXN0L3NpZ25hbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Rlc2lnbmVyL01lbnVzL1Rvb2xCYXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Rlc2lnbmVyL1JlbmRlcmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9EZXNpZ25lci9VdGlsaXR5L01vdXNlQ2FwdHVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Rlc2lnbmVyL1ZlY3RvckRlc2lnbmVyLnRzIiwid2VicGFjazovLy8uL3NyYy9EZXNpZ25lci9WaWV3Q29udHJvbGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVzaWduZXIvVmlld3MvQW5jaG9yQ29udHJvbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVzaWduZXIvVmlld3MvQ29udHJvbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVzaWduZXIvVmlld3MvUG9seWdvbkNvbnRyb2wudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0Rlc2lnbmVyL2NvbW1vbi9BZHNvcmJTZXJ2aWNlLnRzIiwid2VicGFjazovLy8uL3NyYy9EZXNpZ25lci9jb21tb24vQm91bmRzLnRzIiwid2VicGFjazovLy8uL3NyYy9EZXNpZ25lci9jb21tb24vQ29ubmVjdG9yLnRzIiwid2VicGFjazovLy8uL3NyYy9EZXNpZ25lci9wbHVnaW5zL0hvcml6b250YWxSdWxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvRGVzaWduZXIvcGx1Z2lucy9WZXJ0aWNhbFJ1bGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0FuY2hvci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9TZWdtZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL1ZlY3RvcjIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LENBQUM7U0FDL0I7UUFDRCxJQUFJLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLEtBQUssRUFBRTtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBSU0sMEJBQVMsR0FBaEIsVUFBaUIsTUFBYztRQUMzQixJQUFJLE1BQU0sR0FBRyxDQUNULENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FDN0gsQ0FBQztRQUNGLElBQUksS0FBSyxHQUFHLENBQ1IsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUN2SCxDQUFDO1FBQ0YsSUFBSSxPQUFPLEdBQUcsQ0FDVixDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQ2pJ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Q0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM3RixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDN0YsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQVdjLGVBQU8sR0FBdEIsVUFBdUIsQ0FBVyxFQUFFLENBQVcsRUFBRSxNQUFnQjtRQU03RCxJQUFNLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQU0sR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBTSxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFNLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxFQUFFLElBQUksRUFBRSxFQUFFO1lBQ1YsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BGO2FBQU07WUFDSCxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUM7U0FDbEI7SUFDTCxDQUFDO0lBT2EsMkJBQW1CLEdBQWpDLFVBQWtDLE9BQW1CLEVBQUUsTUFBZ0I7UUFFbkUsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE9BQU8sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzdDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsRUFBRTtvQkFDbEQsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyQixPQUFPLENBQUMsQ0FBQyxDQUFDLEdBQUcsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDNUIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7aUJBQ3hCO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFZYSx1QkFBZSxHQUE3QixVQUE4QixhQUFzQixFQUFFLFlBQXFCLEVBQUUsY0FBdUIsRUFBRSxhQUFzQjtRQTJCeEgsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsSUFBSSxLQUFLLEdBQUcsQ0FBQyxDQUFDO1FBQ2QsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsWUFBWSxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRTtZQUN2RCxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVFLEtBQUssSUFBSSxDQUFDLENBQUM7U0FDZDtRQUNELElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUU7WUFDekQsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRixLQUFLLElBQUksQ0FBQyxDQUFDO1NBQ2Q7UUFDRCxRQUFRLEtBQUssRUFBRTtZQUNYLEtBQUssQ0FBQztnQkFDRjtvQkFDSSxJQUFJLGFBQWEsQ0FBQyxDQUFDLEtBQUssY0FBYyxDQUFDLENBQUMsRUFBRTt3QkFFdEMsT0FBTyxJQUFJLENBQUM7cUJBQ2Y7eUJBQ0k7d0JBRUQsT0FBTyxJQUFJLENBQUM7cUJBQ2Y7aUJBQ0o7WUFDTCxLQUFLLENBQUM7Z0JBQ0Y7b0JBQ0ksSUFBSSxDQUFDLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQztvQkFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDO29CQUN2RCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDNUI7WUFDTCxLQUFLLENBQUM7Z0JBQ0Y7b0JBQ0ksSUFBSSxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztvQkFHeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDO29CQUN6RCxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDNUI7WUFDTCxLQUFLLENBQUM7Z0JBQ0Y7b0JBQ0ksSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFO3dCQUVULE9BQU8sSUFBSSxDQUFDO3FCQUNmO29CQUNELElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGNBQWMsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3BHLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLGFBQWEsQ0FBQyxDQUFDLEdBQUcsYUFBYSxDQUFDLENBQUMsQ0FBQztvQkFDdEQsT0FBTyxJQUFJLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzVCO1NBQ1I7UUFFRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBV0wsY0FBQztBQUFELENBQUM7QUEvUlksMEJBQU8iLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSBcIi4uL3NyYy9jb3JlL0FuY2hvclwiO1xyXG5pbXBvcnQgeyBTZWdtZW50IH0gZnJvbSBcIi4uL3NyYy9jb3JlL1NlZ21lbnRcIjtcclxuaW1wb3J0IHsgSG9yaXpvbnRhbFJ1bGVyIH0gZnJvbSBcIi4uL3NyYy9EZXNpZ25lci9wbHVnaW5zL0hvcml6b250YWxSdWxlclwiO1xyXG5pbXBvcnQgeyBWZXJ0aWNhbFJ1bGVyIH0gZnJvbSBcIi4uL3NyYy9EZXNpZ25lci9wbHVnaW5zL1ZlcnRpY2FsUnVsZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yRGVzaWduZXIgfSBmcm9tIFwiLi4vc3JjL0Rlc2lnbmVyL1ZlY3RvckRlc2lnbmVyXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi9zcmMvY29yZS9WZWN0b3IyJztcclxuaW1wb3J0IHsgQW5jaG9yQ29udHJvbCB9IGZyb20gXCIuLi9zcmMvRGVzaWduZXIvVmlld3MvQW5jaG9yQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBQb2x5Z29uQ29udHJvbCB9IGZyb20gXCIuLi9zcmMvRGVzaWduZXIvVmlld3MvUG9seWdvbkNvbnRyb2xcIjtcclxuaW1wb3J0IHsgRk9STUVSUiB9IGZyb20gXCJkbnNcIjtcclxuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcInF1ZXJ5c3RyaW5nXCI7XHJcbmltcG9ydCB7IENvbnRyb2wgfSBmcm9tIFwiLi4vc3JjL0Rlc2lnbmVyL1ZpZXdzL0NvbnRyb2xcIjtcclxuaW1wb3J0IHsgQXJlYVdhbGxzIH0gZnJvbSBcIi4uL3NyYy9jb3JlL1dhbGxFbGVtZW50XCI7XHJcblxyXG4vKipcclxuICogdGhpcyBpcyBleGFtcGxlXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgRXhhbXBsZXMge1xyXG4gICAgLyoqXHJcbiAgICAgKiBtYWluIGZ1bmN0aW9uXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBtYWluKCkge1xyXG4gICAgICAgIHZhciBkaXYgPSA8SFRNTERpdkVsZW1lbnQ+ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJleGFtcGxlXCIpO1xyXG4gICAgICAgIHZhciBkZXNpZ25lciA9IG5ldyBWZWN0b3JEZXNpZ25lcihkaXYpO1xyXG4gICAgICAgIHZhciBocnVsZXJjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkhvcml6b250YWxSdWxlckNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICB2YXIgdnJ1bGVyY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJWZXJ0aWNhbFJ1bGVyQ2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIHZhciBoUnVsZXIgPSBuZXcgSG9yaXpvbnRhbFJ1bGVyKGRlc2lnbmVyLCBocnVsZXJjYW52YXMpO1xyXG4gICAgICAgIHZhciB2UnVsZXIgPSBuZXcgVmVydGljYWxSdWxlcihkZXNpZ25lciwgdnJ1bGVyY2FudmFzKTtcclxuICAgICAgICBkZXNpZ25lci5ydW4oKTtcclxuXHJcbiAgICAgICAgLy8gXHJcbiAgICAgICAgZGVzaWduZXIub25ab29tLmFkZChlID0+IHtcclxuICAgICAgICAgICAgdmFyIHNjYWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzY2FsZVwiKSBhcyBIVE1MRGl2RWxlbWVudDtcclxuICAgICAgICAgICAgc2NhbGUuaW5uZXJUZXh0ID0gZSArICclJztcclxuICAgICAgICB9LCB0aGlzKTtcclxuXHJcbiAgICAgICAgdmFyIGJ0bkJ1aWxkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG5CdWlsZFwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICBpZiAoYnRuQnVpbGQpIHtcclxuICAgICAgICAgICAgYnRuQnVpbGQub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBvdXRwdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm91dHB1dFwiKSBhcyBIVE1MVGV4dEFyZWFFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgb3V0cHV0LnZhbHVlID0gSlNPTi5zdHJpbmdpZnkoZGVzaWduZXIuc2VyaWFsaXplKCkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYnRuUGFyc2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0blBhcnNlXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIGlmIChidG5QYXJzZSkge1xyXG4gICAgICAgICAgICBidG5QYXJzZS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIG91dHB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3V0cHV0XCIpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJyYXlzID0gSlNPTi5wYXJzZShvdXRwdXQudmFsdWUpIGFzIEFyZWFXYWxscztcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUudGltZSgnUGFyc2UnKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUucHJvZmlsZSgnUGFyc2UnKVxyXG4gICAgICAgICAgICAgICAgZGVzaWduZXIuZnJvbShhcnJheXMpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5wcm9maWxlRW5kKCdQYXJzZScpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS50aW1lRW5kKCdQYXJzZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgIHZhciBidG5DbGVhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuQ2xlYW5cIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICAgICAgaWYgKGJ0bkNsZWFuKSB7XHJcbiAgICAgICAgICAgIGJ0bkNsZWFuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkZXNpZ25lci5jbGVhcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgYnRuR29DZW50ZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0bkdvQ2VudGVyXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgICAgIGlmIChidG5Hb0NlbnRlcikge1xyXG4gICAgICAgICAgICBidG5Hb0NlbnRlci5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGVzaWduZXIudmlld0NvbnRyb2wub25tb3ZlLmRpc3BhdGNoKDEwMCwgbmV3IFZlY3RvcjIoKSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBidG5SYW5kb20gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJ0blJhbmRvbVwiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgICAgICBpZiAoYnRuUmFuZG9tKSB7XHJcbiAgICAgICAgICAgIGJ0blJhbmRvbS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFudGhvcnM6IEFuY2hvckNvbnRyb2xbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnRzOiBQb2x5Z29uQ29udHJvbFtdID0gW107XHJcbiAgICAgICAgICAgICAgICB2YXIgb2JqZWN0czogQ29udHJvbFtdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBhbmNob3Igb2YgZGVzaWduZXIuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYW5jaG9yIGluc3RhbmNlb2YgQW5jaG9yQ29udHJvbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbnRob3JzLnB1c2goYW5jaG9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8PSAyMDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFuY2hvciA9IGRlc2lnbmVyLmNyZWF0ZUFuY2hvcihudWxsLCBNYXRoLnJhbmRvbSgpICogMjAwMCAtIDEwMDAsIE1hdGgucmFuZG9tKCkgKiAyMDAwIC0gMTAwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYW50aG9ycy5wdXNoKGFuY2hvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0cy5wdXNoKGFuY2hvcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IDIwOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB3aGlsZSAoc2VnbWVudHNbaV0gPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZiA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChhbnRob3JzLmxlbmd0aCAtIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAoYW50aG9ycy5sZW5ndGggLSAxKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlZ21lbnRzW2ldID0gZGVzaWduZXIuY3JlYXRlUG9seWdvbihudWxsLCBhbnRob3JzW2ZdLCBhbnRob3JzW3RdKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0cy5wdXNoKHNlZ21lbnRzW2ldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgb2JqZWN0IG9mIGFudGhvcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgQW5jaG9yQ29udHJvbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2JqZWN0LnBvbHlnb25zLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSBvYmplY3RzLmluZGV4T2Yob2JqZWN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0cy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IG9iamVjdCBvZiBhbnRob3JzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9iamVjdCBpbnN0YW5jZW9mIEFuY2hvckNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqZWN0LnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkZXNpZ25lci5hZGQuYXBwbHkoZGVzaWduZXIsIG9iamVjdHMpO1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxubmV3IEV4YW1wbGVzKCkubWFpbigpOyIsIi8qanNsaW50IG9uZXZhcjp0cnVlLCB1bmRlZjp0cnVlLCBuZXdjYXA6dHJ1ZSwgcmVnZXhwOnRydWUsIGJpdHdpc2U6dHJ1ZSwgbWF4ZXJyOjUwLCBpbmRlbnQ6NCwgd2hpdGU6ZmFsc2UsIG5vbWVuOmZhbHNlLCBwbHVzcGx1czpmYWxzZSAqL1xuLypnbG9iYWwgZGVmaW5lOmZhbHNlLCByZXF1aXJlOmZhbHNlLCBleHBvcnRzOmZhbHNlLCBtb2R1bGU6ZmFsc2UsIHNpZ25hbHM6ZmFsc2UgKi9cblxuLyoqIEBsaWNlbnNlXG4gKiBKUyBTaWduYWxzIDxodHRwOi8vbWlsbGVybWVkZWlyb3MuZ2l0aHViLmNvbS9qcy1zaWduYWxzLz5cbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogQXV0aG9yOiBNaWxsZXIgTWVkZWlyb3NcbiAqIFZlcnNpb246IDEuMC4wIC0gQnVpbGQ6IDI2OCAoMjAxMi8xMS8yOSAwNTo0OCBQTSlcbiAqL1xuXG4oZnVuY3Rpb24oZ2xvYmFsKXtcblxuICAgIC8vIFNpZ25hbEJpbmRpbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgLyoqXG4gICAgICogT2JqZWN0IHRoYXQgcmVwcmVzZW50cyBhIGJpbmRpbmcgYmV0d2VlbiBhIFNpZ25hbCBhbmQgYSBsaXN0ZW5lciBmdW5jdGlvbi5cbiAgICAgKiA8YnIgLz4tIDxzdHJvbmc+VGhpcyBpcyBhbiBpbnRlcm5hbCBjb25zdHJ1Y3RvciBhbmQgc2hvdWxkbid0IGJlIGNhbGxlZCBieSByZWd1bGFyIHVzZXJzLjwvc3Ryb25nPlxuICAgICAqIDxiciAvPi0gaW5zcGlyZWQgYnkgSm9hIEViZXJ0IEFTMyBTaWduYWxCaW5kaW5nIGFuZCBSb2JlcnQgUGVubmVyJ3MgU2xvdCBjbGFzc2VzLlxuICAgICAqIEBhdXRob3IgTWlsbGVyIE1lZGVpcm9zXG4gICAgICogQGNvbnN0cnVjdG9yXG4gICAgICogQGludGVybmFsXG4gICAgICogQG5hbWUgU2lnbmFsQmluZGluZ1xuICAgICAqIEBwYXJhbSB7U2lnbmFsfSBzaWduYWwgUmVmZXJlbmNlIHRvIFNpZ25hbCBvYmplY3QgdGhhdCBsaXN0ZW5lciBpcyBjdXJyZW50bHkgYm91bmQgdG8uXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgSGFuZGxlciBmdW5jdGlvbiBib3VuZCB0byB0aGUgc2lnbmFsLlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNPbmNlIElmIGJpbmRpbmcgc2hvdWxkIGJlIGV4ZWN1dGVkIGp1c3Qgb25jZS5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW2xpc3RlbmVyQ29udGV4dF0gQ29udGV4dCBvbiB3aGljaCBsaXN0ZW5lciB3aWxsIGJlIGV4ZWN1dGVkIChvYmplY3QgdGhhdCBzaG91bGQgcmVwcmVzZW50IHRoZSBgdGhpc2AgdmFyaWFibGUgaW5zaWRlIGxpc3RlbmVyIGZ1bmN0aW9uKS5cbiAgICAgKiBAcGFyYW0ge051bWJlcn0gW3ByaW9yaXR5XSBUaGUgcHJpb3JpdHkgbGV2ZWwgb2YgdGhlIGV2ZW50IGxpc3RlbmVyLiAoZGVmYXVsdCA9IDApLlxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFNpZ25hbEJpbmRpbmcoc2lnbmFsLCBsaXN0ZW5lciwgaXNPbmNlLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEhhbmRsZXIgZnVuY3Rpb24gYm91bmQgdG8gdGhlIHNpZ25hbC5cbiAgICAgICAgICogQHR5cGUgRnVuY3Rpb25cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX2xpc3RlbmVyID0gbGlzdGVuZXI7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIGJpbmRpbmcgc2hvdWxkIGJlIGV4ZWN1dGVkIGp1c3Qgb25jZS5cbiAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5faXNPbmNlID0gaXNPbmNlO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDb250ZXh0IG9uIHdoaWNoIGxpc3RlbmVyIHdpbGwgYmUgZXhlY3V0ZWQgKG9iamVjdCB0aGF0IHNob3VsZCByZXByZXNlbnQgdGhlIGB0aGlzYCB2YXJpYWJsZSBpbnNpZGUgbGlzdGVuZXIgZnVuY3Rpb24pLlxuICAgICAgICAgKiBAbWVtYmVyT2YgU2lnbmFsQmluZGluZy5wcm90b3R5cGVcbiAgICAgICAgICogQG5hbWUgY29udGV4dFxuICAgICAgICAgKiBAdHlwZSBPYmplY3R8dW5kZWZpbmVkfG51bGxcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuY29udGV4dCA9IGxpc3RlbmVyQ29udGV4dDtcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVmZXJlbmNlIHRvIFNpZ25hbCBvYmplY3QgdGhhdCBsaXN0ZW5lciBpcyBjdXJyZW50bHkgYm91bmQgdG8uXG4gICAgICAgICAqIEB0eXBlIFNpZ25hbFxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fc2lnbmFsID0gc2lnbmFsO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBMaXN0ZW5lciBwcmlvcml0eVxuICAgICAgICAgKiBAdHlwZSBOdW1iZXJcbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuX3ByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcbiAgICB9XG5cbiAgICBTaWduYWxCaW5kaW5nLnByb3RvdHlwZSA9IHtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSWYgYmluZGluZyBpcyBhY3RpdmUgYW5kIHNob3VsZCBiZSBleGVjdXRlZC5cbiAgICAgICAgICogQHR5cGUgYm9vbGVhblxuICAgICAgICAgKi9cbiAgICAgICAgYWN0aXZlIDogdHJ1ZSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRGVmYXVsdCBwYXJhbWV0ZXJzIHBhc3NlZCB0byBsaXN0ZW5lciBkdXJpbmcgYFNpZ25hbC5kaXNwYXRjaGAgYW5kIGBTaWduYWxCaW5kaW5nLmV4ZWN1dGVgLiAoY3VycmllZCBwYXJhbWV0ZXJzKVxuICAgICAgICAgKiBAdHlwZSBBcnJheXxudWxsXG4gICAgICAgICAqL1xuICAgICAgICBwYXJhbXMgOiBudWxsLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDYWxsIGxpc3RlbmVyIHBhc3NpbmcgYXJiaXRyYXJ5IHBhcmFtZXRlcnMuXG4gICAgICAgICAqIDxwPklmIGJpbmRpbmcgd2FzIGFkZGVkIHVzaW5nIGBTaWduYWwuYWRkT25jZSgpYCBpdCB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgcmVtb3ZlZCBmcm9tIHNpZ25hbCBkaXNwYXRjaCBxdWV1ZSwgdGhpcyBtZXRob2QgaXMgdXNlZCBpbnRlcm5hbGx5IGZvciB0aGUgc2lnbmFsIGRpc3BhdGNoLjwvcD5cbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gW3BhcmFtc0Fycl0gQXJyYXkgb2YgcGFyYW1ldGVycyB0aGF0IHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIGxpc3RlbmVyXG4gICAgICAgICAqIEByZXR1cm4geyp9IFZhbHVlIHJldHVybmVkIGJ5IHRoZSBsaXN0ZW5lci5cbiAgICAgICAgICovXG4gICAgICAgIGV4ZWN1dGUgOiBmdW5jdGlvbiAocGFyYW1zQXJyKSB7XG4gICAgICAgICAgICB2YXIgaGFuZGxlclJldHVybiwgcGFyYW1zO1xuICAgICAgICAgICAgaWYgKHRoaXMuYWN0aXZlICYmICEhdGhpcy5fbGlzdGVuZXIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXMgPSB0aGlzLnBhcmFtcz8gdGhpcy5wYXJhbXMuY29uY2F0KHBhcmFtc0FycikgOiBwYXJhbXNBcnI7XG4gICAgICAgICAgICAgICAgaGFuZGxlclJldHVybiA9IHRoaXMuX2xpc3RlbmVyLmFwcGx5KHRoaXMuY29udGV4dCwgcGFyYW1zKTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNPbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGV0YWNoKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGhhbmRsZXJSZXR1cm47XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIERldGFjaCBiaW5kaW5nIGZyb20gc2lnbmFsLlxuICAgICAgICAgKiAtIGFsaWFzIHRvOiBteVNpZ25hbC5yZW1vdmUobXlCaW5kaW5nLmdldExpc3RlbmVyKCkpO1xuICAgICAgICAgKiBAcmV0dXJuIHtGdW5jdGlvbnxudWxsfSBIYW5kbGVyIGZ1bmN0aW9uIGJvdW5kIHRvIHRoZSBzaWduYWwgb3IgYG51bGxgIGlmIGJpbmRpbmcgd2FzIHByZXZpb3VzbHkgZGV0YWNoZWQuXG4gICAgICAgICAqL1xuICAgICAgICBkZXRhY2ggOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pc0JvdW5kKCk/IHRoaXMuX3NpZ25hbC5yZW1vdmUodGhpcy5fbGlzdGVuZXIsIHRoaXMuY29udGV4dCkgOiBudWxsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYmluZGluZyBpcyBzdGlsbCBib3VuZCB0byB0aGUgc2lnbmFsIGFuZCBoYXZlIGEgbGlzdGVuZXIuXG4gICAgICAgICAqL1xuICAgICAgICBpc0JvdW5kIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICghIXRoaXMuX3NpZ25hbCAmJiAhIXRoaXMuX2xpc3RlbmVyKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7Ym9vbGVhbn0gSWYgU2lnbmFsQmluZGluZyB3aWxsIG9ubHkgYmUgZXhlY3V0ZWQgb25jZS5cbiAgICAgICAgICovXG4gICAgICAgIGlzT25jZSA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc09uY2U7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBIYW5kbGVyIGZ1bmN0aW9uIGJvdW5kIHRvIHRoZSBzaWduYWwuXG4gICAgICAgICAqL1xuICAgICAgICBnZXRMaXN0ZW5lciA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9saXN0ZW5lcjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7U2lnbmFsfSBTaWduYWwgdGhhdCBsaXN0ZW5lciBpcyBjdXJyZW50bHkgYm91bmQgdG8uXG4gICAgICAgICAqL1xuICAgICAgICBnZXRTaWduYWwgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmFsO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEZWxldGUgaW5zdGFuY2UgcHJvcGVydGllc1xuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX2Rlc3Ryb3kgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBkZWxldGUgdGhpcy5fc2lnbmFsO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29udGV4dDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHJldHVybiB7c3RyaW5nfSBTdHJpbmcgcmVwcmVzZW50YXRpb24gb2YgdGhlIG9iamVjdC5cbiAgICAgICAgICovXG4gICAgICAgIHRvU3RyaW5nIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuICdbU2lnbmFsQmluZGluZyBpc09uY2U6JyArIHRoaXMuX2lzT25jZSArJywgaXNCb3VuZDonKyB0aGlzLmlzQm91bmQoKSArJywgYWN0aXZlOicgKyB0aGlzLmFjdGl2ZSArICddJztcbiAgICAgICAgfVxuXG4gICAgfTtcblxuXG4vKmdsb2JhbCBTaWduYWxCaW5kaW5nOmZhbHNlKi9cblxuICAgIC8vIFNpZ25hbCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVMaXN0ZW5lcihsaXN0ZW5lciwgZm5OYW1lKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXIgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvciggJ2xpc3RlbmVyIGlzIGEgcmVxdWlyZWQgcGFyYW0gb2Yge2ZufSgpIGFuZCBzaG91bGQgYmUgYSBGdW5jdGlvbi4nLnJlcGxhY2UoJ3tmbn0nLCBmbk5hbWUpICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gZXZlbnQgYnJvYWRjYXN0ZXJcbiAgICAgKiA8YnIgLz4tIGluc3BpcmVkIGJ5IFJvYmVydCBQZW5uZXIncyBBUzMgU2lnbmFscy5cbiAgICAgKiBAbmFtZSBTaWduYWxcbiAgICAgKiBAYXV0aG9yIE1pbGxlciBNZWRlaXJvc1xuICAgICAqIEBjb25zdHJ1Y3RvclxuICAgICAqL1xuICAgIGZ1bmN0aW9uIFNpZ25hbCgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIEFycmF5LjxTaWduYWxCaW5kaW5nPlxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5fYmluZGluZ3MgPSBbXTtcbiAgICAgICAgdGhpcy5fcHJldlBhcmFtcyA9IG51bGw7XG5cbiAgICAgICAgLy8gZW5mb3JjZSBkaXNwYXRjaCB0byBhd2F5cyB3b3JrIG9uIHNhbWUgY29udGV4dCAoIzQ3KVxuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2ggPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgU2lnbmFsLnByb3RvdHlwZS5kaXNwYXRjaC5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIFNpZ25hbC5wcm90b3R5cGUgPSB7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFNpZ25hbHMgVmVyc2lvbiBOdW1iZXJcbiAgICAgICAgICogQHR5cGUgU3RyaW5nXG4gICAgICAgICAqIEBjb25zdFxuICAgICAgICAgKi9cbiAgICAgICAgVkVSU0lPTiA6ICcxLjAuMCcsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElmIFNpZ25hbCBzaG91bGQga2VlcCByZWNvcmQgb2YgcHJldmlvdXNseSBkaXNwYXRjaGVkIHBhcmFtZXRlcnMgYW5kXG4gICAgICAgICAqIGF1dG9tYXRpY2FsbHkgZXhlY3V0ZSBsaXN0ZW5lciBkdXJpbmcgYGFkZCgpYC9gYWRkT25jZSgpYCBpZiBTaWduYWwgd2FzXG4gICAgICAgICAqIGFscmVhZHkgZGlzcGF0Y2hlZCBiZWZvcmUuXG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIG1lbW9yaXplIDogZmFsc2UsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICogQHByaXZhdGVcbiAgICAgICAgICovXG4gICAgICAgIF9zaG91bGRQcm9wYWdhdGUgOiB0cnVlLFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBJZiBTaWduYWwgaXMgYWN0aXZlIGFuZCBzaG91bGQgYnJvYWRjYXN0IGV2ZW50cy5cbiAgICAgICAgICogPHA+PHN0cm9uZz5JTVBPUlRBTlQ6PC9zdHJvbmc+IFNldHRpbmcgdGhpcyBwcm9wZXJ0eSBkdXJpbmcgYSBkaXNwYXRjaCB3aWxsIG9ubHkgYWZmZWN0IHRoZSBuZXh0IGRpc3BhdGNoLCBpZiB5b3Ugd2FudCB0byBzdG9wIHRoZSBwcm9wYWdhdGlvbiBvZiBhIHNpZ25hbCB1c2UgYGhhbHQoKWAgaW5zdGVhZC48L3A+XG4gICAgICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgICAgICovXG4gICAgICAgIGFjdGl2ZSA6IHRydWUsXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXG4gICAgICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNPbmNlXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbbGlzdGVuZXJDb250ZXh0XVxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gW3ByaW9yaXR5XVxuICAgICAgICAgKiBAcmV0dXJuIHtTaWduYWxCaW5kaW5nfVxuICAgICAgICAgKiBAcHJpdmF0ZVxuICAgICAgICAgKi9cbiAgICAgICAgX3JlZ2lzdGVyTGlzdGVuZXIgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGlzT25jZSwgbGlzdGVuZXJDb250ZXh0LCBwcmlvcml0eSkge1xuXG4gICAgICAgICAgICB2YXIgcHJldkluZGV4ID0gdGhpcy5faW5kZXhPZkxpc3RlbmVyKGxpc3RlbmVyLCBsaXN0ZW5lckNvbnRleHQpLFxuICAgICAgICAgICAgICAgIGJpbmRpbmc7XG5cbiAgICAgICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgYmluZGluZyA9IHRoaXMuX2JpbmRpbmdzW3ByZXZJbmRleF07XG4gICAgICAgICAgICAgICAgaWYgKGJpbmRpbmcuaXNPbmNlKCkgIT09IGlzT25jZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBjYW5ub3QgYWRkJysgKGlzT25jZT8gJycgOiAnT25jZScpICsnKCkgdGhlbiBhZGQnKyAoIWlzT25jZT8gJycgOiAnT25jZScpICsnKCkgdGhlIHNhbWUgbGlzdGVuZXIgd2l0aG91dCByZW1vdmluZyB0aGUgcmVsYXRpb25zaGlwIGZpcnN0LicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYmluZGluZyA9IG5ldyBTaWduYWxCaW5kaW5nKHRoaXMsIGxpc3RlbmVyLCBpc09uY2UsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2FkZEJpbmRpbmcoYmluZGluZyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKHRoaXMubWVtb3JpemUgJiYgdGhpcy5fcHJldlBhcmFtcyl7XG4gICAgICAgICAgICAgICAgYmluZGluZy5leGVjdXRlKHRoaXMuX3ByZXZQYXJhbXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYmluZGluZztcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQHBhcmFtIHtTaWduYWxCaW5kaW5nfSBiaW5kaW5nXG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfYWRkQmluZGluZyA6IGZ1bmN0aW9uIChiaW5kaW5nKSB7XG4gICAgICAgICAgICAvL3NpbXBsaWZpZWQgaW5zZXJ0aW9uIHNvcnRcbiAgICAgICAgICAgIHZhciBuID0gdGhpcy5fYmluZGluZ3MubGVuZ3RoO1xuICAgICAgICAgICAgZG8geyAtLW47IH0gd2hpbGUgKHRoaXMuX2JpbmRpbmdzW25dICYmIGJpbmRpbmcuX3ByaW9yaXR5IDw9IHRoaXMuX2JpbmRpbmdzW25dLl9wcmlvcml0eSk7XG4gICAgICAgICAgICB0aGlzLl9iaW5kaW5ncy5zcGxpY2UobiArIDEsIDAsIGJpbmRpbmcpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclxuICAgICAgICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAgICAgICAqIEBwcml2YXRlXG4gICAgICAgICAqL1xuICAgICAgICBfaW5kZXhPZkxpc3RlbmVyIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBjb250ZXh0KSB7XG4gICAgICAgICAgICB2YXIgbiA9IHRoaXMuX2JpbmRpbmdzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBjdXI7XG4gICAgICAgICAgICB3aGlsZSAobi0tKSB7XG4gICAgICAgICAgICAgICAgY3VyID0gdGhpcy5fYmluZGluZ3Nbbl07XG4gICAgICAgICAgICAgICAgaWYgKGN1ci5fbGlzdGVuZXIgPT09IGxpc3RlbmVyICYmIGN1ci5jb250ZXh0ID09PSBjb250ZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQ2hlY2sgaWYgbGlzdGVuZXIgd2FzIGF0dGFjaGVkIHRvIFNpZ25hbC5cbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXJcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtjb250ZXh0XVxuICAgICAgICAgKiBAcmV0dXJuIHtib29sZWFufSBpZiBTaWduYWwgaGFzIHRoZSBzcGVjaWZpZWQgbGlzdGVuZXIuXG4gICAgICAgICAqL1xuICAgICAgICBoYXMgOiBmdW5jdGlvbiAobGlzdGVuZXIsIGNvbnRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pbmRleE9mTGlzdGVuZXIobGlzdGVuZXIsIGNvbnRleHQpICE9PSAtMTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogQWRkIGEgbGlzdGVuZXIgdG8gdGhlIHNpZ25hbC5cbiAgICAgICAgICogQHBhcmFtIHtGdW5jdGlvbn0gbGlzdGVuZXIgU2lnbmFsIGhhbmRsZXIgZnVuY3Rpb24uXG4gICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbbGlzdGVuZXJDb250ZXh0XSBDb250ZXh0IG9uIHdoaWNoIGxpc3RlbmVyIHdpbGwgYmUgZXhlY3V0ZWQgKG9iamVjdCB0aGF0IHNob3VsZCByZXByZXNlbnQgdGhlIGB0aGlzYCB2YXJpYWJsZSBpbnNpZGUgbGlzdGVuZXIgZnVuY3Rpb24pLlxuICAgICAgICAgKiBAcGFyYW0ge051bWJlcn0gW3ByaW9yaXR5XSBUaGUgcHJpb3JpdHkgbGV2ZWwgb2YgdGhlIGV2ZW50IGxpc3RlbmVyLiBMaXN0ZW5lcnMgd2l0aCBoaWdoZXIgcHJpb3JpdHkgd2lsbCBiZSBleGVjdXRlZCBiZWZvcmUgbGlzdGVuZXJzIHdpdGggbG93ZXIgcHJpb3JpdHkuIExpc3RlbmVycyB3aXRoIHNhbWUgcHJpb3JpdHkgbGV2ZWwgd2lsbCBiZSBleGVjdXRlZCBhdCB0aGUgc2FtZSBvcmRlciBhcyB0aGV5IHdlcmUgYWRkZWQuIChkZWZhdWx0ID0gMClcbiAgICAgICAgICogQHJldHVybiB7U2lnbmFsQmluZGluZ30gQW4gT2JqZWN0IHJlcHJlc2VudGluZyB0aGUgYmluZGluZyBiZXR3ZWVuIHRoZSBTaWduYWwgYW5kIGxpc3RlbmVyLlxuICAgICAgICAgKi9cbiAgICAgICAgYWRkIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUxpc3RlbmVyKGxpc3RlbmVyLCAnYWRkJyk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0ZXJMaXN0ZW5lcihsaXN0ZW5lciwgZmFsc2UsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBBZGQgbGlzdGVuZXIgdG8gdGhlIHNpZ25hbCB0aGF0IHNob3VsZCBiZSByZW1vdmVkIGFmdGVyIGZpcnN0IGV4ZWN1dGlvbiAod2lsbCBiZSBleGVjdXRlZCBvbmx5IG9uY2UpLlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lciBTaWduYWwgaGFuZGxlciBmdW5jdGlvbi5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtsaXN0ZW5lckNvbnRleHRdIENvbnRleHQgb24gd2hpY2ggbGlzdGVuZXIgd2lsbCBiZSBleGVjdXRlZCAob2JqZWN0IHRoYXQgc2hvdWxkIHJlcHJlc2VudCB0aGUgYHRoaXNgIHZhcmlhYmxlIGluc2lkZSBsaXN0ZW5lciBmdW5jdGlvbikuXG4gICAgICAgICAqIEBwYXJhbSB7TnVtYmVyfSBbcHJpb3JpdHldIFRoZSBwcmlvcml0eSBsZXZlbCBvZiB0aGUgZXZlbnQgbGlzdGVuZXIuIExpc3RlbmVycyB3aXRoIGhpZ2hlciBwcmlvcml0eSB3aWxsIGJlIGV4ZWN1dGVkIGJlZm9yZSBsaXN0ZW5lcnMgd2l0aCBsb3dlciBwcmlvcml0eS4gTGlzdGVuZXJzIHdpdGggc2FtZSBwcmlvcml0eSBsZXZlbCB3aWxsIGJlIGV4ZWN1dGVkIGF0IHRoZSBzYW1lIG9yZGVyIGFzIHRoZXkgd2VyZSBhZGRlZC4gKGRlZmF1bHQgPSAwKVxuICAgICAgICAgKiBAcmV0dXJuIHtTaWduYWxCaW5kaW5nfSBBbiBPYmplY3QgcmVwcmVzZW50aW5nIHRoZSBiaW5kaW5nIGJldHdlZW4gdGhlIFNpZ25hbCBhbmQgbGlzdGVuZXIuXG4gICAgICAgICAqL1xuICAgICAgICBhZGRPbmNlIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBsaXN0ZW5lckNvbnRleHQsIHByaW9yaXR5KSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUxpc3RlbmVyKGxpc3RlbmVyLCAnYWRkT25jZScpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JlZ2lzdGVyTGlzdGVuZXIobGlzdGVuZXIsIHRydWUsIGxpc3RlbmVyQ29udGV4dCwgcHJpb3JpdHkpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBSZW1vdmUgYSBzaW5nbGUgbGlzdGVuZXIgZnJvbSB0aGUgZGlzcGF0Y2ggcXVldWUuXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIEhhbmRsZXIgZnVuY3Rpb24gdGhhdCBzaG91bGQgYmUgcmVtb3ZlZC5cbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IFtjb250ZXh0XSBFeGVjdXRpb24gY29udGV4dCAoc2luY2UgeW91IGNhbiBhZGQgdGhlIHNhbWUgaGFuZGxlciBtdWx0aXBsZSB0aW1lcyBpZiBleGVjdXRpbmcgaW4gYSBkaWZmZXJlbnQgY29udGV4dCkuXG4gICAgICAgICAqIEByZXR1cm4ge0Z1bmN0aW9ufSBMaXN0ZW5lciBoYW5kbGVyIGZ1bmN0aW9uLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3ZlIDogZnVuY3Rpb24gKGxpc3RlbmVyLCBjb250ZXh0KSB7XG4gICAgICAgICAgICB2YWxpZGF0ZUxpc3RlbmVyKGxpc3RlbmVyLCAncmVtb3ZlJyk7XG5cbiAgICAgICAgICAgIHZhciBpID0gdGhpcy5faW5kZXhPZkxpc3RlbmVyKGxpc3RlbmVyLCBjb250ZXh0KTtcbiAgICAgICAgICAgIGlmIChpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdzW2ldLl9kZXN0cm95KCk7IC8vbm8gcmVhc29uIHRvIGEgU2lnbmFsQmluZGluZyBleGlzdCBpZiBpdCBpc24ndCBhdHRhY2hlZCB0byBhIHNpZ25hbFxuICAgICAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdzLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBsaXN0ZW5lcjtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZnJvbSB0aGUgU2lnbmFsLlxuICAgICAgICAgKi9cbiAgICAgICAgcmVtb3ZlQWxsIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG4gPSB0aGlzLl9iaW5kaW5ncy5sZW5ndGg7XG4gICAgICAgICAgICB3aGlsZSAobi0tKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fYmluZGluZ3Nbbl0uX2Rlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdzLmxlbmd0aCA9IDA7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge251bWJlcn0gTnVtYmVyIG9mIGxpc3RlbmVycyBhdHRhY2hlZCB0byB0aGUgU2lnbmFsLlxuICAgICAgICAgKi9cbiAgICAgICAgZ2V0TnVtTGlzdGVuZXJzIDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdzLmxlbmd0aDtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogU3RvcCBwcm9wYWdhdGlvbiBvZiB0aGUgZXZlbnQsIGJsb2NraW5nIHRoZSBkaXNwYXRjaCB0byBuZXh0IGxpc3RlbmVycyBvbiB0aGUgcXVldWUuXG4gICAgICAgICAqIDxwPjxzdHJvbmc+SU1QT1JUQU5UOjwvc3Ryb25nPiBzaG91bGQgYmUgY2FsbGVkIG9ubHkgZHVyaW5nIHNpZ25hbCBkaXNwYXRjaCwgY2FsbGluZyBpdCBiZWZvcmUvYWZ0ZXIgZGlzcGF0Y2ggd29uJ3QgYWZmZWN0IHNpZ25hbCBicm9hZGNhc3QuPC9wPlxuICAgICAgICAgKiBAc2VlIFNpZ25hbC5wcm90b3R5cGUuZGlzYWJsZVxuICAgICAgICAgKi9cbiAgICAgICAgaGFsdCA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuX3Nob3VsZFByb3BhZ2F0ZSA9IGZhbHNlO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBEaXNwYXRjaC9Ccm9hZGNhc3QgU2lnbmFsIHRvIGFsbCBsaXN0ZW5lcnMgYWRkZWQgdG8gdGhlIHF1ZXVlLlxuICAgICAgICAgKiBAcGFyYW0gey4uLip9IFtwYXJhbXNdIFBhcmFtZXRlcnMgdGhhdCBzaG91bGQgYmUgcGFzc2VkIHRvIGVhY2ggaGFuZGxlci5cbiAgICAgICAgICovXG4gICAgICAgIGRpc3BhdGNoIDogZnVuY3Rpb24gKHBhcmFtcykge1xuICAgICAgICAgICAgaWYgKCEgdGhpcy5hY3RpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwYXJhbXNBcnIgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpLFxuICAgICAgICAgICAgICAgIG4gPSB0aGlzLl9iaW5kaW5ncy5sZW5ndGgsXG4gICAgICAgICAgICAgICAgYmluZGluZ3M7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLm1lbW9yaXplKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHJldlBhcmFtcyA9IHBhcmFtc0FycjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCEgbikge1xuICAgICAgICAgICAgICAgIC8vc2hvdWxkIGNvbWUgYWZ0ZXIgbWVtb3JpemVcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJpbmRpbmdzID0gdGhpcy5fYmluZGluZ3Muc2xpY2UoKTsgLy9jbG9uZSBhcnJheSBpbiBjYXNlIGFkZC9yZW1vdmUgaXRlbXMgZHVyaW5nIGRpc3BhdGNoXG4gICAgICAgICAgICB0aGlzLl9zaG91bGRQcm9wYWdhdGUgPSB0cnVlOyAvL2luIGNhc2UgYGhhbHRgIHdhcyBjYWxsZWQgYmVmb3JlIGRpc3BhdGNoIG9yIGR1cmluZyB0aGUgcHJldmlvdXMgZGlzcGF0Y2guXG5cbiAgICAgICAgICAgIC8vZXhlY3V0ZSBhbGwgY2FsbGJhY2tzIHVudGlsIGVuZCBvZiB0aGUgbGlzdCBvciB1bnRpbCBhIGNhbGxiYWNrIHJldHVybnMgYGZhbHNlYCBvciBzdG9wcyBwcm9wYWdhdGlvblxuICAgICAgICAgICAgLy9yZXZlcnNlIGxvb3Agc2luY2UgbGlzdGVuZXJzIHdpdGggaGlnaGVyIHByaW9yaXR5IHdpbGwgYmUgYWRkZWQgYXQgdGhlIGVuZCBvZiB0aGUgbGlzdFxuICAgICAgICAgICAgZG8geyBuLS07IH0gd2hpbGUgKGJpbmRpbmdzW25dICYmIHRoaXMuX3Nob3VsZFByb3BhZ2F0ZSAmJiBiaW5kaW5nc1tuXS5leGVjdXRlKHBhcmFtc0FycikgIT09IGZhbHNlKTtcbiAgICAgICAgfSxcblxuICAgICAgICAvKipcbiAgICAgICAgICogRm9yZ2V0IG1lbW9yaXplZCBhcmd1bWVudHMuXG4gICAgICAgICAqIEBzZWUgU2lnbmFsLm1lbW9yaXplXG4gICAgICAgICAqL1xuICAgICAgICBmb3JnZXQgOiBmdW5jdGlvbigpe1xuICAgICAgICAgICAgdGhpcy5fcHJldlBhcmFtcyA9IG51bGw7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFJlbW92ZSBhbGwgYmluZGluZ3MgZnJvbSBzaWduYWwgYW5kIGRlc3Ryb3kgYW55IHJlZmVyZW5jZSB0byBleHRlcm5hbCBvYmplY3RzIChkZXN0cm95IFNpZ25hbCBvYmplY3QpLlxuICAgICAgICAgKiA8cD48c3Ryb25nPklNUE9SVEFOVDo8L3N0cm9uZz4gY2FsbGluZyBhbnkgbWV0aG9kIG9uIHRoZSBzaWduYWwgaW5zdGFuY2UgYWZ0ZXIgY2FsbGluZyBkaXNwb3NlIHdpbGwgdGhyb3cgZXJyb3JzLjwvcD5cbiAgICAgICAgICovXG4gICAgICAgIGRpc3Bvc2UgOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUFsbCgpO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX2JpbmRpbmdzO1xuICAgICAgICAgICAgZGVsZXRlIHRoaXMuX3ByZXZQYXJhbXM7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEByZXR1cm4ge3N0cmluZ30gU3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBvYmplY3QuXG4gICAgICAgICAqL1xuICAgICAgICB0b1N0cmluZyA6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAnW1NpZ25hbCBhY3RpdmU6JysgdGhpcy5hY3RpdmUgKycgbnVtTGlzdGVuZXJzOicrIHRoaXMuZ2V0TnVtTGlzdGVuZXJzKCkgKyddJztcbiAgICAgICAgfVxuXG4gICAgfTtcblxuXG4gICAgLy8gTmFtZXNwYWNlIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAvKipcbiAgICAgKiBTaWduYWxzIG5hbWVzcGFjZVxuICAgICAqIEBuYW1lc3BhY2VcbiAgICAgKiBAbmFtZSBzaWduYWxzXG4gICAgICovXG4gICAgdmFyIHNpZ25hbHMgPSBTaWduYWw7XG5cbiAgICAvKipcbiAgICAgKiBDdXN0b20gZXZlbnQgYnJvYWRjYXN0ZXJcbiAgICAgKiBAc2VlIFNpZ25hbFxuICAgICAqL1xuICAgIC8vIGFsaWFzIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSAoc2VlICNnaC00NClcbiAgICBzaWduYWxzLlNpZ25hbCA9IFNpZ25hbDtcblxuXG5cbiAgICAvL2V4cG9ydHMgdG8gbXVsdGlwbGUgZW52aXJvbm1lbnRzXG4gICAgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKXsgLy9BTURcbiAgICAgICAgZGVmaW5lKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNpZ25hbHM7IH0pO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpeyAvL25vZGVcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBzaWduYWxzO1xuICAgIH0gZWxzZSB7IC8vYnJvd3NlclxuICAgICAgICAvL3VzZSBzdHJpbmcgYmVjYXVzZSBvZiBHb29nbGUgY2xvc3VyZSBjb21waWxlciBBRFZBTkNFRF9NT0RFXG4gICAgICAgIC8qanNsaW50IHN1Yjp0cnVlICovXG4gICAgICAgIGdsb2JhbFsnc2lnbmFscyddID0gc2lnbmFscztcbiAgICB9XG5cbn0odGhpcykpO1xuIiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uLy4uL2NvcmUvVmVjdG9yMic7XHJcbmltcG9ydCB7IFZlY3RvckRlc2lnbmVyIH0gZnJvbSAnLi4vVmVjdG9yRGVzaWduZXInO1xyXG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnLi4vVmlld3MvQ29udHJvbCc7XHJcbmltcG9ydCB7IEFuY2hvckNvbnRyb2wgfSBmcm9tICcuLi9WaWV3cy9BbmNob3JDb250cm9sJztcclxuaW1wb3J0IHsgUG9seWdvbkNvbnRyb2wgfSBmcm9tICcuLi9WaWV3cy9Qb2x5Z29uQ29udHJvbCc7XHJcbmltcG9ydCB7IENvbm5lY3RvciB9IGZyb20gJy4uL2NvbW1vbi9Db25uZWN0b3InO1xyXG5pbXBvcnQgeyBNb3VzZUNhcHR1cmVyIH0gZnJvbSAnLi4vVXRpbGl0eS9Nb3VzZUNhcHR1cmVyJztcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFRvb2xCYXIge1xyXG4gICAgcHVibGljIGRvbTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGRlc2lnbmVyOiBWZWN0b3JEZXNpZ25lcjtcclxuICAgIHByaXZhdGUgX3Zpc2libGU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIGJ0bkNvbm5lY3RUbzogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGJ0bkRlbGV0ZTogSFRNTEJ1dHRvbkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGJ0blNldHRpbmc6IEhUTUxCdXR0b25FbGVtZW50O1xyXG4gICAgcHJpdmF0ZSB0aGlja25lc3NEaXY6IEhUTUxEaXZFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSB0aGlja25lc3NJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgICBwcml2YXRlIHhJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICAgIHByaXZhdGUgeUlucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgX3Bvc2l0aW9uOiBWZWN0b3IyO1xyXG4gICAgcHJpdmF0ZSBfZHJhZ0NhcHR1cmU6IE1vdXNlQ2FwdHVyZXI7XHJcbiAgICBwcml2YXRlIF9kcmFnUG9zaXRpb246IFZlY3RvcjI7XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIHBvc2l0aW9uRGl2OiBIVE1MRGl2RWxlbWVudDtcclxuXHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZGVzaWduZXI6IFZlY3RvckRlc2lnbmVyKSB7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lciA9IGRlc2lnbmVyO1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gbmV3IFZlY3RvcjIoKTtcclxuICAgICAgICB0aGlzLmRvbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgICAgICB0aGlzLmRvbS5vbmNvbnRleHRtZW51ID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICB0aGlzLmRvbS5jbGFzc05hbWUgPSAndG9vbGJhcic7XHJcbiAgICAgICAgdmFyIGJ0bkRyYWcgPSB0aGlzLmNyZWF0ZURyYWdCdXR0b24oKTtcclxuICAgICAgICB0aGlzLl9kcmFnQ2FwdHVyZSA9IG5ldyBNb3VzZUNhcHR1cmVyKGJ0bkRyYWcpO1xyXG4gICAgICAgIHRoaXMuX2RyYWdDYXB0dXJlLm9uTW91c2VEb3duLmFkZCh0aGlzLmRyYWdfc3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2RyYWdDYXB0dXJlLm9uTW91c2VNb3ZlLmFkZCh0aGlzLmRyYWdfbW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0NhcHR1cmUub25Nb3VzZVVwLmFkZCh0aGlzLmRyYWdfZW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmRvbS5hcHBlbmRDaGlsZChidG5EcmFnKTtcclxuICAgICAgICB0aGlzLmJ0bkNvbm5lY3RUbyA9IHRoaXMuY3JlYXRlQnV0dG9uKCdpY29uLUFUUycpO1xyXG4gICAgICAgIHRoaXMuYnRuQ29ubmVjdFRvLnRpdGxlID0gJ+W7uueri+aWsOeahOe6v+autSc7XHJcbiAgICAgICAgdGhpcy5idG5Db25uZWN0VG8ub25jbGljayA9IHRoaXMuY3JlYXRlT2JqZWN0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQodGhpcy5idG5Db25uZWN0VG8pO1xyXG5cclxuICAgICAgICB0aGlzLmJ0bkRlbGV0ZSA9IHRoaXMuY3JlYXRlQnV0dG9uKCdpY29uLWRlbGV0ZTInKTtcclxuICAgICAgICB0aGlzLmJ0bkRlbGV0ZS50aXRsZSA9ICfliKDpmaTlr7nosaEnO1xyXG4gICAgICAgIHRoaXMuYnRuRGVsZXRlLm9uY2xpY2sgPSB0aGlzLmRlbGV0ZU9iamVjdC5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZG9tLmFwcGVuZENoaWxkKHRoaXMuYnRuRGVsZXRlKTtcclxuXHJcbiAgICAgICAgdGhpcy5idG5TZXR0aW5nID0gdGhpcy5jcmVhdGVCdXR0b24oJ2ljb24tc2V0dGluZycpO1xyXG4gICAgICAgIHRoaXMuYnRuU2V0dGluZy50aXRsZSA9ICforr7nva4o5pyq6K6+572uKSc7XHJcbiAgICAgICAgdGhpcy5idG5TZXR0aW5nLm9uY2xpY2sgPSB0aGlzLnNldHRpbmdPYmplY3QuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRvbS5hcHBlbmRDaGlsZCh0aGlzLmJ0blNldHRpbmcpO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIudmlld0NvbnRyb2wub25tb3ZlLmFkZCgoKSA9PiB7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuYWRkQnJlYWsodGhpcy5kb20pO1xyXG5cclxuICAgICAgICB0aGlzLnRoaWNrbmVzc0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMudGhpY2tuZXNzRGl2LmNsYXNzTmFtZSA9ICdUb29sQm94LUlucHV0JztcclxuICAgICAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGhlYWRlci5pbm5lclRleHQgPSAn5Y6a5bqmJztcclxuICAgICAgICBoZWFkZXIuc3R5bGUuZmxvYXQgPSAnbGVmdCc7XHJcbiAgICAgICAgdGhpcy50aGlja25lc3NJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgdGhpcy50aGlja25lc3NJbnB1dC50eXBlID0gJ251bWJlcic7XHJcbiAgICAgICAgdGhpcy50aGlja25lc3NJbnB1dC5vbmNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gdGhpcy50aGlja25lc3NJbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlID09IG51bGwgfHwgdmFsdWUubGVuZ3RoID09IDApIHJldHVybjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVzaWduZXIuc2VsZWN0ZWQgaW5zdGFuY2VvZiBQb2x5Z29uQ29udHJvbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXNpZ25lci5zZWxlY3RlZC51cGRhdGVUaGlja25lc3MoTnVtYmVyLnBhcnNlRmxvYXQodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzaWduZXIucmVxdWVzdFJlbmRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBzZXRUaGlja25lc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcclxuICAgICAgICBzZXRUaGlja25lc3MudGV4dENvbnRlbnQgPSAn5L+u5pS5J1xyXG5cclxuICAgICAgICB0aGlzLnRoaWNrbmVzc0Rpdi5hcHBlbmRDaGlsZChoZWFkZXIpO1xyXG4gICAgICAgIHRoaXMudGhpY2tuZXNzRGl2LmFwcGVuZENoaWxkKHRoaXMudGhpY2tuZXNzSW5wdXQpO1xyXG4gICAgICAgIHRoaXMudGhpY2tuZXNzRGl2LmFwcGVuZENoaWxkKHNldFRoaWNrbmVzcyk7XHJcbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQodGhpcy50aGlja25lc3NEaXYpO1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25EaXYuY2xhc3NOYW1lID0gJ1Rvb2xCb3gtSW5wdXQnO1xyXG5cclxuICAgICAgICB2YXIgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGhlYWRlci5pbm5lclRleHQgPSAneCc7XHJcbiAgICAgICAgaGVhZGVyLnN0eWxlLmZsb2F0ID0gJ2xlZnQnO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb25EaXYuYXBwZW5kQ2hpbGQoaGVhZGVyKTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMueElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnhJbnB1dC50eXBlID0gJ251bWJlcic7XHJcbiAgICAgICAgdGhpcy54SW5wdXQub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMueElucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZS5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZXNpZ25lci5zZWxlY3RlZCBpbnN0YW5jZW9mIEFuY2hvckNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuZGVzaWduZXIuc2VsZWN0ZWQucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uLnggPSBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2lnbmVyLnNlbGVjdGVkLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzaWduZXIucmVxdWVzdFJlbmRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucG9zaXRpb25EaXYuYXBwZW5kQ2hpbGQodGhpcy54SW5wdXQpO1xyXG4gICAgICAgIHRoaXMueUlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICB0aGlzLnlJbnB1dC50eXBlID0gJ251bWJlcic7XHJcbiAgICAgICAgdGhpcy55SW5wdXQub25jaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IHRoaXMueUlucHV0LnZhbHVlO1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZS5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZXNpZ25lci5zZWxlY3RlZCBpbnN0YW5jZW9mIEFuY2hvckNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuZGVzaWduZXIuc2VsZWN0ZWQucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uLnkgPSBOdW1iZXIucGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2lnbmVyLnNlbGVjdGVkLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVzaWduZXIucmVxdWVzdFJlbmRlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucG9zaXRpb25EaXYuYXBwZW5kQ2hpbGQodGhpcy55SW5wdXQpO1xyXG4gICAgICAgIHZhciBzZXRQb3NpdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xyXG4gICAgICAgIHNldFBvc2l0aW9uLnRleHRDb250ZW50ID0gJ+S/ruaUuSdcclxuXHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbkRpdi5hcHBlbmRDaGlsZChzZXRQb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5kb20uYXBwZW5kQ2hpbGQodGhpcy5wb3NpdGlvbkRpdik7XHJcbiAgICAgICAgdGhpcy5hZGRCcmVhayh0aGlzLmRvbSk7XHJcblxyXG5cclxuXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkQnJlYWsocGFyZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHZhciBociA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hyJyk7XHJcbiAgICAgICAgaHIuc3R5bGUuYm9yZGVyID0gJzAnO1xyXG4gICAgICAgIGhyLnN0eWxlLmJvcmRlckxlZnQgPSAnMXB4IHNvbGlkICM1ODU4NTgnO1xyXG4gICAgICAgIGhyLnN0eWxlLm1hcmdpbkxlZnQgPSAnMnB4JztcclxuICAgICAgICBoci5zdHlsZS5tYXJnaW5SaWdodCA9ICcycHgnO1xyXG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChocik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVPYmplY3QoKSB7XHJcbiAgICAgICAgdmFyIG9yaWdpbiA9IHRoaXMuZGVzaWduZXIuc2VsZWN0ZWQ7XHJcbiAgICAgICAgaWYgKG9yaWdpbiBpbnN0YW5jZW9mIEFuY2hvckNvbnRyb2wpIHtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzaWduZXIuY29ubmVjdG9yID0gbmV3IENvbm5lY3Rvcih0aGlzLmRlc2lnbmVyLCBvcmlnaW4pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGVPYmplY3QoKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIG9yaWdpbiA9IHRoaXMuZGVzaWduZXIuc2VsZWN0ZWQ7XHJcbiAgICAgICAgb3JpZ2luLnJlbW92ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dGluZ09iamVjdCgpIHtcclxuICAgICAgICAvL3RoaXMudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZG9tLmNsaWVudFdpZHRoO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kb20uY2xpZW50SGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc2V0UG9zaXRpb24odjogVmVjdG9yMikge1xyXG4gICAgICAgIGlmICh2LnggPCAwKSB2LnggPSAwO1xyXG4gICAgICAgIGlmICh2LnkgPCAwKSB2LnkgPSAwO1xyXG4gICAgICAgIGlmICh2LnggKyB0aGlzLndpZHRoID4gdGhpcy5kZXNpZ25lci53aWR0aCkgdi54ID0gdGhpcy5kZXNpZ25lci53aWR0aCAtIHRoaXMud2lkdGg7XHJcbiAgICAgICAgaWYgKHYueSArIHRoaXMuaGVpZ2h0ID4gdGhpcy5kZXNpZ25lci5oZWlnaHQpIHYueSA9IHRoaXMuZGVzaWduZXIuaGVpZ2h0IC0gdGhpcy5oZWlnaHQ7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IG5ldyBWZWN0b3IyKHRoaXMuZGVzaWduZXIuY29udGFpbmVyLm9mZnNldExlZnQsIHRoaXMuZGVzaWduZXIuY29udGFpbmVyLm9mZnNldFRvcCk7XHJcbiAgICAgICAgdGhpcy5fcG9zaXRpb24gPSB2LmNsb25lKCk7XHJcbiAgICAgICAgdiA9IHYuc3ViKG9mZnNldCk7XHJcbiAgICAgICAgdGhpcy5kb20uc3R5bGUubWFyZ2luTGVmdCA9IHYueCArICdweCc7XHJcbiAgICAgICAgdGhpcy5kb20uc3R5bGUubWFyZ2luVG9wID0gdi55ICsgJ3B4J1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHZpc2libGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Zpc2libGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCB2aXNpYmxlKHZhbHVlOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5fdmlzaWJsZSA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuZG9tLnN0eWxlLmRpc3BsYXkgPSB2YWx1ZSA/IFwiXCIgOiBcIm5vbmVcIjtcclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVzaWduZXIuc2VsZWN0ZWQgPT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5kZXNpZ25lci5zZWxlY3RlZCBpbnN0YW5jZW9mIEFuY2hvckNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuQ29ubmVjdFRvLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuRGVsZXRlLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuU2V0dGluZy5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRoaWNrbmVzc0Rpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkRpdi5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnhJbnB1dC52YWx1ZSA9IHRoaXMuZGVzaWduZXIuc2VsZWN0ZWQuYW5jaG9yLngudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMueUlucHV0LnZhbHVlID0gdGhpcy5kZXNpZ25lci5zZWxlY3RlZC5hbmNob3IueS50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRlc2lnbmVyLnNlbGVjdGVkIGluc3RhbmNlb2YgUG9seWdvbkNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYnRuQ29ubmVjdFRvLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0bkRlbGV0ZS5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ0blNldHRpbmcuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aGlja25lc3NEaXYuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbkRpdi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aGlja25lc3NJbnB1dC52YWx1ZSA9IHRoaXMuZGVzaWduZXIuc2VsZWN0ZWQudGhpY2tuZXNzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ0NhcHR1cmUuZGlzcG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBpY29uTmFtZSBcclxuICAgICAqL1xyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlRHJhZ0J1dHRvbigpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgdmFyIGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5oZWlnaHQgPSAnMzJweCc7XHJcbiAgICAgICAgYnV0dG9uLnN0eWxlLndpZHRoID0gJzE2cHgnO1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnIzI4MjgyOCdcclxuICAgICAgICBidXR0b24uc3R5bGUuY3Vyc29yID0gJ21vdmUnO1xyXG4gICAgICAgIHJldHVybiBidXR0b247XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmFnX3N0YXJ0KGU6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICB0aGlzLl9kcmFnUG9zaXRpb24gPSBuZXcgVmVjdG9yMihlLnBhZ2VYLCBlLnBhZ2VZKTtcclxuICAgICAgICB0aGlzLl9kcmFnQ2FwdHVyZS5jYXB0dXJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmFnX21vdmUoZTogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9kcmFnUG9zaXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB2YXIgcG9zID0gbmV3IFZlY3RvcjIoZS5wYWdlWCwgZS5wYWdlWSk7XHJcbiAgICAgICAgICAgIHZhciB2ZXJ0b3IgPSBwb3Muc3ViKHRoaXMuX2RyYWdQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHZhciB2ID0gdGhpcy5fcG9zaXRpb24uYWRkKHZlcnRvcik7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UG9zaXRpb24odik7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdQb3NpdGlvbiA9IHBvcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkcmFnX2VuZChlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgdGhpcy5fZHJhZ1Bvc2l0aW9uID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9kcmFnQ2FwdHVyZS5yZWxlYXNlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlQnV0dG9uKGljb25OYW1lOiBzdHJpbmcpOiBIVE1MQnV0dG9uRWxlbWVudCB7XHJcbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcclxuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ljb25mb250Jyk7XHJcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKGljb25OYW1lKTtcclxuICAgICAgICB2YXIgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XHJcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdCdXR0b24nO1xyXG4gICAgICAgIGJ1dHRvbi5hcHBlbmRDaGlsZChpY29uKTtcclxuICAgICAgICByZXR1cm4gYnV0dG9uO1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uL2NvcmUvVmVjdG9yMlwiO1xyXG5cclxuZXhwb3J0IGVudW0gVGV4dEFsaWduIHtcclxuICAgIExFRlQgPSAwLFxyXG4gICAgQ0VOVEVSID0gMSxcclxuICAgIFJJR0hUID0gMlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGVudW0gUmVuZGVyVHlwZSB7XHJcbiAgICBTVFJPS0UgPSAxLFxyXG4gICAgRklMTCA9IDIsXHJcbiAgICBBTEwgPSAzXHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcclxuXHJcbiAgICBwcml2YXRlIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBfY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfbG9jYWxPZmZzZXQ6IFZlY3RvcjI7XHJcblxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihjYW52YXM/OiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgICAgIGlmIChjYW52YXMpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2FudmFzID0gY2FudmFzO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJjYW52YXNcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NvbnRleHQgPSB0aGlzLmNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICAgICAgdGhpcy5fY29udGV4dC5nbG9iYWxBbHBoYSA9IDEuMDtcclxuICAgICAgICB0aGlzLl9jb250ZXh0LnRyYW5zbGF0ZSgwLCAwKTtcclxuICAgICAgICB0aGlzLl9sb2NhbE9mZnNldCA9IG5ldyBWZWN0b3IyKDAuNSwgMC41KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXBwbHkoZGl2OiBIVE1MRGl2RWxlbWVudCkge1xyXG4gICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0aGlzLmNhbnZhcyk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBjbGVhcihjb2xvcjogc3RyaW5nID0gJyNBOUE5QTknKSB7XHJcblxyXG4gICAgICAgIC8vIHZhciBvbGQgPSB0aGlzLmNvbnRleHQuZmlsbFN0eWxlO1xyXG4gICAgICAgIHRoaXMuX2NvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHRoaXMuX3dpZHRoLCB0aGlzLl9oZWlnaHQpO1xyXG4gICAgICAgIC8vIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSBjb2xvcjtcclxuICAgICAgICAvLyB0aGlzLmNvbnRleHQuZmlsbFJlY3QoMCwgMCwgdGhpcy5fd2lkdGgsIHRoaXMuX2hlaWdodClcclxuICAgICAgICAvLyB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gb2xkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXNpemUod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl93aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuX2hlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB2YXIgcmF0aW8gPSB0aGlzLmdldFBpeGVsUmF0aW8odGhpcy5jb250ZXh0KTtcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XHJcbiAgICAgICAgdGhpcy5jYW52YXMuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuXHJcbiAgICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB3aWR0aCAqIHJhdGlvO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodCAqIHJhdGlvO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgZ2V0UGl4ZWxSYXRpbyhjb250ZXh0KSB7XHJcbiAgICAgICAgdmFyIGJhY2tpbmdTdG9yZSA9IGNvbnRleHQuYmFja2luZ1N0b3JlUGl4ZWxSYXRpbyB8fFxyXG4gICAgICAgICAgICBjb250ZXh0LndlYmtpdEJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgICAgICAgICAgY29udGV4dC5tb3pCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XHJcbiAgICAgICAgICAgIGNvbnRleHQubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8XHJcbiAgICAgICAgICAgIGNvbnRleHQub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHxcclxuICAgICAgICAgICAgY29udGV4dC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IDE7XHJcbiAgICAgICAgcmV0dXJuICh3aW5kb3cuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxKSAvIGJhY2tpbmdTdG9yZTtcclxuICAgIH07XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGNvbnRleHQoKTogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY29udGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGNhbnZhcygpOiBIVE1MQ2FudmFzRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhbnZhcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaGVpZ2h0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2hlaWdodDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB0ZXh0IFxyXG4gICAgICogQHBhcmFtIHggXHJcbiAgICAgKiBAcGFyYW0geSBcclxuICAgICAqIEBwYXJhbSB3aWR0aCBcclxuICAgICAqIEBwYXJhbSBhbGlnbiBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGZpbGxUZXh0KHRleHQ6IHN0cmluZywgeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGFsaWduOiBUZXh0QWxpZ24pIHtcclxuICAgICAgICB2YXIgbGVmdCA9IHg7XHJcbiAgICAgICAgaWYgKGFsaWduID09PSBUZXh0QWxpZ24uUklHSFQpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVhc3VyZSA9IHRoaXMuY29udGV4dC5tZWFzdXJlVGV4dCh0ZXh0KTtcclxuICAgICAgICAgICAgaWYgKHdpZHRoID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGxlZnQgPSB4IC0gbWVhc3VyZS53aWR0aDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxlZnQgPSB4ICsgd2lkdGggLSBtZWFzdXJlLndpZHRoO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChhbGlnbiA9PT0gVGV4dEFsaWduLkNFTlRFUikge1xyXG4gICAgICAgICAgICBjb25zdCBtZWFzdXJlID0gdGhpcy5jb250ZXh0Lm1lYXN1cmVUZXh0KHRleHQpO1xyXG4gICAgICAgICAgICBpZiAod2lkdGggPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGVmdCA9IHggLSBtZWFzdXJlLndpZHRoIC8gMjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxlZnQgPSB4ICsgKHdpZHRoICsgbWVhc3VyZS53aWR0aCkgLyAyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsVGV4dCh0ZXh0LCBsZWZ0ICsgdGhpcy5fbG9jYWxPZmZzZXQueCwgeSArIHRoaXMuX2xvY2FsT2Zmc2V0LnkpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBjaXJjbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCB0eXBlOiBSZW5kZXJUeXBlKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5hcmMoeCwgeSwgcmFkaXVzLCAwLCBNYXRoLlBJICogMiwgZmFsc2UpO1xyXG4gICAgICAgIGlmICh0eXBlID09PSBSZW5kZXJUeXBlLkFMTCB8fCB0eXBlID09PSBSZW5kZXJUeXBlLkZJTEwpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGwoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFJlbmRlclR5cGUuQUxMIHx8IHR5cGUgPT09IFJlbmRlclR5cGUuU1RST0tFKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBwb2x5Z29uKHBvaW50czogVmVjdG9yMltdLCBjbG9zZWQ6IGJvb2xlYW4sIHR5cGU6IFJlbmRlclR5cGUpIHtcclxuICAgICAgICBpZihwb2ludHMgPT0gbnVsbCB8fCBwb2ludHMubGVuZ3RoID09PSAwKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8ocG9pbnRzWzBdLnggKyB0aGlzLl9sb2NhbE9mZnNldC54LCBwb2ludHNbMF0ueSArIHRoaXMuX2xvY2FsT2Zmc2V0LnkpO1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8ocG9pbnRzW2ldLnggKyB0aGlzLl9sb2NhbE9mZnNldC54LCBwb2ludHNbaV0ueSArIHRoaXMuX2xvY2FsT2Zmc2V0LnkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2xvc2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IFJlbmRlclR5cGUuQUxMIHx8IHR5cGUgPT09IFJlbmRlclR5cGUuRklMTCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuZmlsbCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZSA9PT0gUmVuZGVyVHlwZS5BTEwgfHwgdHlwZSA9PT0gUmVuZGVyVHlwZS5TVFJPS0UpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGZpbGxSZWN0YW5nbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdHJva2VSZWN0YW5nbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSb3RhdGVcclxuICAgICAqIEBwYXJhbSB4IFxyXG4gICAgICogQHBhcmFtIHkgXHJcbiAgICAgKiBAcGFyYW0gYW5nbGUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyB0cmFuc2xhdGVSb3RhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIGFuZ2xlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKHgsIHkpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5yb3RhdGUoYW5nbGUgLyAxODAgKiBNYXRoLlBJKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKC14LCAteSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZHJhdyBsaW5lIFxyXG4gICAgICogQHBhcmFtIHgxIFxyXG4gICAgICogQHBhcmFtIHkxIFxyXG4gICAgICogQHBhcmFtIHgyIFxyXG4gICAgICogQHBhcmFtIHkyIFxyXG4gICAgICogQHBhcmFtIGxpbmVXaWR0aCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGxpbmUoeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlciwgbGluZVdpZHRoOiBudW1iZXIgPSAxKSB7XHJcbiAgICAgICAgaWYgKGxpbmVXaWR0aCAmJiBsaW5lV2lkdGggIT09IHRoaXMuY29udGV4dC5saW5lV2lkdGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5tb3ZlVG8oeDEgKyB0aGlzLl9sb2NhbE9mZnNldC54LCB5MSArIHRoaXMuX2xvY2FsT2Zmc2V0LnkpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lVG8oeDIgKyB0aGlzLl9sb2NhbE9mZnNldC54LCB5MiArIHRoaXMuX2xvY2FsT2Zmc2V0LnkpO1xyXG4gICAgICAgIC8vIHRoaXMuY29udGV4dC5jbG9zZVBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmaWxsIHBvbHlnb25cclxuICAgICAqIEBwYXJhbSBwb2ludHMgXHJcbiAgICAgKiBAcGFyYW0gY2xvc2VkIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZmlsbFBhdGgocG9pbnRzOiBWZWN0b3IyW10sIGNsb3NlZDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5iZWdpblBhdGgoKTtcclxuICAgICAgICB0aGlzLmNvbnRleHQubW92ZVRvKHBvaW50c1swXS54ICsgdGhpcy5fbG9jYWxPZmZzZXQueCwgcG9pbnRzWzBdLnkgKyB0aGlzLl9sb2NhbE9mZnNldC55KTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IHBvaW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQubGluZVRvKHBvaW50c1tpXS54ICsgdGhpcy5fbG9jYWxPZmZzZXQueCwgcG9pbnRzW2ldLnkgKyB0aGlzLl9sb2NhbE9mZnNldC55KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNsb3NlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbnRleHQuY2xvc2VQYXRoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY29udGV4dC5maWxsKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcG9seWdvblxyXG4gICAgICogQHBhcmFtIHBvaW50cyBcclxuICAgICAqIEBwYXJhbSBjbG9zZWQgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdHJva2VQYXRoKHBvaW50czogVmVjdG9yMltdLCBjbG9zZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0Lm1vdmVUbyhwb2ludHNbMF0ueCArIHRoaXMuX2xvY2FsT2Zmc2V0LngsIHBvaW50c1swXS55ICsgdGhpcy5fbG9jYWxPZmZzZXQueSk7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBwb2ludHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmxpbmVUbyhwb2ludHNbaV0ueCArIHRoaXMuX2xvY2FsT2Zmc2V0LngsIHBvaW50c1tpXS55ICsgdGhpcy5fbG9jYWxPZmZzZXQueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjbG9zZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jb250ZXh0LmNsb3NlUGF0aCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgc2V0IG9wYWNpdHkodjogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0Lmdsb2JhbEFscGhhID0gdjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG9wYWNpdHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0Lmdsb2JhbEFscGhhO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIHNldCBzdHJva2VDb2xvcih2OiBzdHJpbmcgfCBDYW52YXNHcmFkaWVudCB8IENhbnZhc1BhdHRlcm4pIHtcclxuICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc3Ryb2tlQ29sb3IoKTogc3RyaW5nIHwgQ2FudmFzR3JhZGllbnQgfCBDYW52YXNQYXR0ZXJuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIHNldCBmaWxsQ29sb3Iodjogc3RyaW5nIHwgQ2FudmFzR3JhZGllbnQgfCBDYW52YXNQYXR0ZXJuKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHY7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBmaWxsQ29sb3IoKTogc3RyaW5nIHwgQ2FudmFzR3JhZGllbnQgfCBDYW52YXNQYXR0ZXJuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb250ZXh0LmZpbGxTdHlsZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBzZXQgbGluZVdpZHRoKHY6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuY29udGV4dC5saW5lV2lkdGggPSB2O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgbGluZVdpZHRoKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udGV4dC5saW5lV2lkdGg7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0ICogYXMgc2lnbmFscyBmcm9tIFwic2lnbmFsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdXNlQ2FwdHVyZXIge1xyXG4gICAgcHJpdmF0ZSBfY2FwdHVyZWluZzogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgX2RvY3VtZW50ZG93bmhhbmRsZTogKGU6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XHJcbiAgICBwcml2YXRlIF9kb2N1bWVudG1vdmVoYW5kbGU6IChlOiBNb3VzZUV2ZW50KSA9PiB2b2lkO1xyXG4gICAgcHJpdmF0ZSBfZG9jdW1lbnR1cGhhbmRsZTogKGU6IE1vdXNlRXZlbnQpID0+IHZvaWQ7XHJcblxyXG4gICAgcHJpdmF0ZSBfb25tb3VzZWRvd246IHNpZ25hbHMuU2lnbmFsO1xyXG4gICAgcHJpdmF0ZSBfb25tb3VzZW1vdmU6IHNpZ25hbHMuU2lnbmFsO1xyXG4gICAgcHJpdmF0ZSBfb25tb3VzZXVwOiBzaWduYWxzLlNpZ25hbDtcclxuXHJcbiAgICBwcml2YXRlIF9lbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuX2VsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHRoaXMuX29ubW91c2Vkb3duID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XHJcbiAgICAgICAgdGhpcy5fb25tb3VzZW1vdmUgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcclxuICAgICAgICB0aGlzLl9vbm1vdXNldXAgPSBuZXcgc2lnbmFscy5TaWduYWwoKTtcclxuICAgICAgICB0aGlzLl9kb2N1bWVudGRvd25oYW5kbGUgPSB0aGlzLmVsZW1lbnRfbW91c2VfZG93bi5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2RvY3VtZW50bW92ZWhhbmRsZSA9IHRoaXMuZG9jdW1lbnRfbW91c2VfbW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2RvY3VtZW50dXBoYW5kbGUgPSB0aGlzLmRvY3VtZW50X21vdXNlX3VwLmJpbmQodGhpcyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fZG9jdW1lbnRtb3ZlaGFuZGxlKTtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fZG9jdW1lbnR1cGhhbmRsZSk7XHJcbiAgICAgICAgaWYgKHRoaXMuX2VsZW1lbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuX2RvY3VtZW50ZG93bmhhbmRsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fZG9jdW1lbnRtb3ZlaGFuZGxlKTtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5fZG9jdW1lbnR1cGhhbmRsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNwb3NlKCkge1xyXG4gICAgICAgIHRoaXMucmVsZWFzZSgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9lbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCB0aGlzLl9kb2N1bWVudGRvd25oYW5kbGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9vbm1vdXNlZG93bi5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fb25tb3VzZW1vdmUuZGlzcG9zZSgpO1xyXG4gICAgICAgIHRoaXMuX29ubW91c2V1cC5kaXNwb3NlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgY2FwdHVyZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2NhcHR1cmVpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCB0aGlzLl9kb2N1bWVudG1vdmVoYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCB0aGlzLl9kb2N1bWVudHVwaGFuZGxlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fZG9jdW1lbnRtb3ZlaGFuZGxlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX2RvY3VtZW50dXBoYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9jYXB0dXJlaW5nID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbGVhc2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2NhcHR1cmVpbmcpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5fZG9jdW1lbnRtb3ZlaGFuZGxlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX2RvY3VtZW50dXBoYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIHRoaXMuX2RvY3VtZW50bW92ZWhhbmRsZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX2RvY3VtZW50dXBoYW5kbGUpO1xyXG4gICAgICAgICAgICB0aGlzLl9jYXB0dXJlaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZWxlbWVudF9tb3VzZV9kb3duKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICB0aGlzLl9vbm1vdXNlZG93bi5kaXNwYXRjaChlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRvY3VtZW50X21vdXNlX21vdmUoZTogTW91c2VFdmVudCkge1xyXG4gICAgICAgIHRoaXMuX29ubW91c2Vtb3ZlLmRpc3BhdGNoKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZG9jdW1lbnRfbW91c2VfdXAoZTogTW91c2VFdmVudCkge1xyXG4gICAgICAgIHRoaXMuX29ubW91c2V1cC5kaXNwYXRjaChlKTtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgb25Nb3VzZURvd24oKTogc2lnbmFscy5TaWduYWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vbm1vdXNlZG93bjtcclxuICAgIH1cclxuICAgIHB1YmxpYyBnZXQgb25Nb3VzZU1vdmUoKTogc2lnbmFscy5TaWduYWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vbm1vdXNlbW92ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG9uTW91c2VVcCgpOiBzaWduYWxzLlNpZ25hbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29ubW91c2V1cDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGlzQ2FwdHVyZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcHR1cmVpbmc7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0ICogYXMgc2lnbmFscyBmcm9tIFwic2lnbmFsc1wiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4uL2NvcmUvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBCb3VuZHMgfSBmcm9tIFwiLi9jb21tb24vQm91bmRzXCI7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSBcIi4vUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgU2l6ZSB9IGZyb20gXCIuL2NvbW1vbi9TaXplXCI7XHJcbmltcG9ydCB7IFZpZXdDb250cm9sbGVyIH0gZnJvbSBcIi4vVmlld0NvbnRyb2xsZXJcIjtcclxuaW1wb3J0IHsgQ29udHJvbCB9IGZyb20gXCIuL1ZpZXdzL0NvbnRyb2xcIjtcclxuaW1wb3J0IHsgVG9vbEJhciB9IGZyb20gXCIuL01lbnVzL1Rvb2xCYXJcIjtcclxuaW1wb3J0IHsgQW5jaG9yQ29udHJvbCB9IGZyb20gJy4vVmlld3MvQW5jaG9yQ29udHJvbCc7XHJcbmltcG9ydCB7IFBvbHlnb25Db250cm9sIH0gZnJvbSAnLi9WaWV3cy9Qb2x5Z29uQ29udHJvbCc7XHJcbmltcG9ydCB7IENvbm5lY3RvciB9IGZyb20gXCIuL2NvbW1vbi9Db25uZWN0b3JcIjtcclxuaW1wb3J0IHsgQWRzb3JiU2VydmljZSB9IGZyb20gXCIuL2NvbW1vbi9BZHNvcmJTZXJ2aWNlXCI7XHJcbmltcG9ydCB7IEFyZWFXYWxscywgV2FsbENvbmZpZzJkIH0gZnJvbSBcIi4uL2NvcmUvV2FsbEVsZW1lbnRcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yRGVzaWduZXIge1xyXG5cclxuICAgIHByaXZhdGUgX3ZpZXdDb250cm9sOiBWaWV3Q29udHJvbGxlcjtcclxuICAgIHByaXZhdGUgX2RpdjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIF9ib3VuZHM6IEJvdW5kcztcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjtcclxuICAgIHByaXZhdGUgX3pvb206IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2NlbnRlcjogVmVjdG9yMjtcclxuICAgIHByaXZhdGUgX3JlczogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfcnVuU3RhdGU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9vblJlbmRlcjogc2lnbmFscy5TaWduYWw7XHJcbiAgICBwcml2YXRlIF9vblpvb206IHNpZ25hbHMuU2lnbmFsO1xyXG4gICAgcHVibGljIF93aWR0aDogbnVtYmVyO1xyXG4gICAgcHVibGljIF9oZWlnaHQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyBfY2hpbGRyZW46IENvbnRyb2xbXTtcclxuICAgIHByaXZhdGUgX3Rvb2xiYXI6IFRvb2xCYXI7XHJcbiAgICBwcml2YXRlIF9zZWxlY3RlZDogQ29udHJvbDtcclxuICAgIHB1YmxpYyB2aXJ0dWFsQ3Vyc29yOiBBbmNob3JDb250cm9sO1xyXG4gICAgcHVibGljIGNvbm5lY3RvcjogQ29ubmVjdG9yO1xyXG4gICAgcHJpdmF0ZSBfYWRzb3JiOiBBZHNvcmJTZXJ2aWNlO1xyXG4gICAgcHVibGljIGhvcml6b250YWxMaW5lQ29sb3I6IHN0cmluZztcclxuICAgIHB1YmxpYyB2ZXJ0aWNhbExpbmVDb2xvcjogc3RyaW5nO1xyXG4gICAgcHVibGljIF9tb3VzZUdyYWJPYmplY3RzOiBDb250cm9sW107XHJcbiAgICBwdWJsaWMgZGVmYXVsdEhlaWdodDogbnVtYmVyO1xyXG4gICAgcHVibGljIGRlZmF1bHR0aGlja25lc3M6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3JlcXVlc3RSZW5kZXI6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9tYXhTZXJpYWxOdW1iZXI6IG51bWJlcjtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOejgeaAp+WQuOmZhOacjeWKoVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0IGFkc29yYigpOiBBZHNvcmJTZXJ2aWNlIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYWRzb3JiO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog5oqT5L2P5a+56LGhIOaKiuWvueixoeS7juWtkOmbhuS4reaLv+WHuuadpe+8jOmYsuatoueUn+aIkOejgeWQuOeCueaXtuaKiuaKk+S9j+eahOWvueixoeWKoOi/m+WOu1xyXG4gICAgICogQHBhcmFtIG9iamVjdHMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBncmFiT2JqZWN0cyhvYmplY3RzOiBDb250cm9sW10pIHtcclxuICAgICAgICB0aGlzLnJlbGVhc2VHcmFiT2JqZWN0cygpO1xyXG4gICAgICAgIHRoaXMuX2Fkc29yYi5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgb2JqZWN0IG9mIG9iamVjdHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVtb3ZlKG9iamVjdCkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbW91c2VHcmFiT2JqZWN0cy5wdXNoKG9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYWRzb3JiLmVuYWJsZWQgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog6YeK5pS+5oqT5L2P55qE5a+56LGh77yM5YaN5oqK5a+56LGh5pS+5YWl5Yiw5a2Q6ZuG5Lit5Y67XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZWxlYXNlR3JhYk9iamVjdHMoKSB7XHJcbiAgICAgICAgdGhpcy5fYWRzb3JiLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB3aGlsZSAodGhpcy5fbW91c2VHcmFiT2JqZWN0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBvYmplY3QgPSB0aGlzLl9tb3VzZUdyYWJPYmplY3RzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKG9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Fkc29yYi5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOS4ouW8g+aJgOacieaKk+S9j+eahOWvueixoe+8jOS4jeWGjeaUvuWbnuWtkOmbhuS4rVxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZGlzY2FyZEdyYWJPYmplY3RzKCkge1xyXG4gICAgICAgIHRoaXMuX2Fkc29yYi5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgd2hpbGUgKHRoaXMuX21vdXNlR3JhYk9iamVjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9tb3VzZUdyYWJPYmplY3RzLnNoaWZ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Fkc29yYi5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXQgY2hpbGRyZW4oKTogQ29udHJvbFtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRyZW47XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0b29sYmFyKCk6IFRvb2xCYXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl90b29sYmFyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc2VsZWN0ZWQoKTogQ29udHJvbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlbGVjdGVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgc2VsZWN0ZWQodmFsdWU6IENvbnRyb2wpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWQgIT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NlbGVjdGVkICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9zZWxlY3RlZC5zZWxlY3RlZFVwZGF0ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvb2xiYXIudmlzaWJsZSA9IGZhbHNlOztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB2YXIgcHQ6IFZlY3RvcjIgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWQgaW5zdGFuY2VvZiBBbmNob3JDb250cm9sKSB7XHJcbiAgICAgICAgICAgICAgICBwdCA9IHRoaXMuY29udmVydFBvaW50KHRoaXMuX3NlbGVjdGVkLnBvaW50KS5hZGQobmV3IFZlY3RvcjIoMjAsIDEwKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fc2VsZWN0ZWQgaW5zdGFuY2VvZiBQb2x5Z29uQ29udHJvbCkge1xyXG4gICAgICAgICAgICAgICAgcHQgPSB0aGlzLl9zZWxlY3RlZC5nZXRTdWJQb2ludCh0aGlzLnZpZXdDb250cm9sLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgIHB0ID0gdGhpcy5jb252ZXJ0UG9pbnQocHQpLmFkZChuZXcgVmVjdG9yMigyMCwgMTApKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocHQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudG9vbGJhci52aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NlbGVjdGVkLnNlbGVjdGVkVXBkYXRlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b29sYmFyLnNldFBvc2l0aW9uKHB0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlcXVlc3RSZW5kZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGRpdjogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLl9kaXYgPSBkaXY7XHJcbiAgICAgICAgdGhpcy5fem9vbSA9IDEwMDtcclxuICAgICAgICB0aGlzLl9jaGlsZHJlbiA9IFtdO1xyXG4gICAgICAgIHRoaXMuX21vdXNlR3JhYk9iamVjdHMgPSBbXTtcclxuICAgICAgICB0aGlzLl9hZHNvcmIgPSBuZXcgQWRzb3JiU2VydmljZSh0aGlzKTtcclxuICAgICAgICB0aGlzLl9vblJlbmRlciA9IG5ldyBzaWduYWxzLlNpZ25hbCgpO1xyXG4gICAgICAgIHRoaXMuX29uWm9vbSA9IG5ldyBzaWduYWxzLlNpZ25hbCgpXHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcclxuICAgICAgICB0aGlzLl92aWV3Q29udHJvbCA9IG5ldyBWaWV3Q29udHJvbGxlcih0aGlzKTtcclxuICAgICAgICB0aGlzLl9ydW5TdGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmFwcGx5KGRpdik7XHJcbiAgICAgICAgdGhpcy5yZXNpemUoKTtcclxuICAgICAgICB0aGlzLl92aWV3Q29udHJvbC5vbm1vdmUuYWRkKHRoaXMubW92ZVRvLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl90b29sYmFyID0gbmV3IFRvb2xCYXIodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fZGl2LmFwcGVuZENoaWxkKHRoaXMuX3Rvb2xiYXIuZG9tKTtcclxuICAgICAgICB0aGlzLmhvcml6b250YWxMaW5lQ29sb3IgPSAnIzAwRkYwMCc7XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNhbExpbmVDb2xvciA9ICcjMDBGRjAwJztcclxuICAgICAgICB0aGlzLl9yZXF1ZXN0UmVuZGVyID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRIZWlnaHQgPSAxMDA7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0dGhpY2tuZXNzID0gMTA7XHJcbiAgICAgICAgdGhpcy5fbWF4U2VyaWFsTnVtYmVyID0gMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHJlc2l6ZSgpIHtcclxuICAgICAgICB0aGlzLl93aWR0aCA9IHRoaXMuX2Rpdi5jbGllbnRXaWR0aDtcclxuICAgICAgICB0aGlzLl9oZWlnaHQgPSB0aGlzLl9kaXYuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5fYm91bmRzID0gbmV3IEJvdW5kcygtdGhpcy53aWR0aCAvIDIsIC10aGlzLmhlaWdodCAvIDIsIHRoaXMud2lkdGggLyAyLCB0aGlzLmhlaWdodCAvIDIpO1xyXG4gICAgICAgIHRoaXMuX2NlbnRlciA9IHRoaXMuX2JvdW5kcy5nZXRDZW50ZXIoKTtcclxuICAgICAgICB0aGlzLl9yZXMgPSAxIC8gKHRoaXMuX3pvb20gLyAxMDApO1xyXG4gICAgICAgIHRoaXMubW92ZVRvKHRoaXMuX3pvb20sIHRoaXMuX2NlbnRlcik7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgbW92ZVRvKHpvb206IG51bWJlciwgY2VudGVyOiBWZWN0b3IyLCB0cmFuczogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHpvb20gPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl96b29tICE9IHpvb20pIHtcclxuICAgICAgICAgICAgdGhpcy5fem9vbSA9IHpvb207XHJcbiAgICAgICAgICAgIHRoaXMub25ab29tLmRpc3BhdGNoKHpvb20pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKGNlbnRlcik7XHJcbiAgICAgICAgaWYgKCh0aGlzLl9jZW50ZXIgIT0gY2VudGVyKSB8fCB0cmFucykge1xyXG4gICAgICAgICAgICB0aGlzLl9jZW50ZXIgPSBjZW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3JlcyA9IDEgLyAodGhpcy5fem9vbSAvIDEwMCk7XHJcbiAgICAgICAgdmFyIHdpZHRoID0gdGhpcy53aWR0aCAqIHRoaXMuX3JlcztcclxuICAgICAgICB2YXIgaGVpZ2h0ID0gdGhpcy5oZWlnaHQgKiB0aGlzLl9yZXM7XHJcbiAgICAgICAgLy/ojrflj5bmlrDnmoTop4blm77ojIPlm7TjgIJcclxuICAgICAgICB0aGlzLl9ib3VuZHMgPSBuZXcgQm91bmRzKGNlbnRlci54IC0gd2lkdGggLyAyLCBjZW50ZXIueSAtIGhlaWdodCAvIDIsIGNlbnRlci54ICsgd2lkdGggLyAyLCBjZW50ZXIueSArIGhlaWdodCAvIDIpO1xyXG4gICAgICAgIC8vcmVkcmF3XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIHJ1bigpIHtcclxuICAgICAgICB0aGlzLl9ydW5TdGF0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcmVxdWVzdFJlbmRlciA9IHRydWU7XHJcbiAgICAgICAgYXdhaXQgdGhpcy5ncmFwaGljUmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHVwZGF0ZUVsZW1lbnRQb2ludHMoKSB7XHJcbiAgICAgICAgdGhpcy5fYWRzb3JiLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcmVxdWVzdFJlbmRlcigpIHtcclxuICAgICAgICB0aGlzLl9yZXF1ZXN0UmVuZGVyID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBncmFwaGljUmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fcnVuU3RhdGUgfHwgdGhpcy5pc0Rpc3Bvc2VkKSByZXR1cm47XHJcbiAgICAgICAgaWYgKHRoaXMuX3JlcXVlc3RSZW5kZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVxdWVzdFJlbmRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmNsZWFyKCk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGNvbnRyb2wgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgIGNvbnRyb2wucmVuZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY29ubmVjdG9yKSB0aGlzLmNvbm5lY3Rvci5yZW5kZXIoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9tb3VzZUdyYWJPYmplY3RzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGNvbnRyb2wgb2YgdGhpcy5fbW91c2VHcmFiT2JqZWN0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2wucmVuZGVyKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZpcnR1YWxDdXJzb3IpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwb3NpdGlvbiA9IHRoaXMuY29udmVydFBvaW50KHRoaXMudmlydHVhbEN1cnNvci5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLnN0cm9rZUNvbG9yID0gdGhpcy5ob3Jpem9udGFsTGluZUNvbG9yO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5saW5lKDAsIHBvc2l0aW9uLnksIHRoaXMud2lkdGgsIHBvc2l0aW9uLnksIDEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5zdHJva2VDb2xvciA9IHRoaXMudmVydGljYWxMaW5lQ29sb3I7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlcmVyLmxpbmUocG9zaXRpb24ueCwgMCwgcG9zaXRpb24ueCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub25SZW5kZXIuZGlzcGF0Y2goKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghdGhpcy5pc0Rpc3Bvc2VkICYmIHRoaXMuX3J1blN0YXRlKSB7XHJcbiAgICAgICAgICAgIC8v57un57ut5LiL5LiA5binXHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmdyYXBoaWNSZW5kZXIuYmluZCh0aGlzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsIbop4blm77lnZDmoIfovazmjaLkuLpjYW52YXPlnZDmoIfjgIJcclxuICAgICAqIEBwYXJhbSBwb2ludCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGNvbnZlcnRQb2ludChwb2ludDogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIHZhciByZXNvbHV0aW9uID0gdGhpcy5yZXM7XHJcbiAgICAgICAgdmFyIGV4dGVudCA9IHRoaXMuYm91bmRzO1xyXG4gICAgICAgIHZhciB4ID0gKHBvaW50LnggLyByZXNvbHV0aW9uICsgKC1leHRlbnQubGVmdCAvIHJlc29sdXRpb24pKTtcclxuICAgICAgICB2YXIgeSA9IChwb2ludC55IC8gcmVzb2x1dGlvbiArICgtZXh0ZW50LnRvcCAvIHJlc29sdXRpb24pKTtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlsIZjYW52YXPlnZDmoIfovazmjaLkuLog6KeG5Zu+5Z2Q5qCHXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBtYXBQb2ludChwb2ludDogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIHZhciB1eCA9IChwb2ludC54ICsgdGhpcy5ib3VuZHMubGVmdCAvIHRoaXMucmVzKSAqIHRoaXMucmVzO1xyXG4gICAgICAgIHZhciB1eSA9IChwb2ludC55ICsgdGhpcy5ib3VuZHMudG9wIC8gdGhpcy5yZXMpICogdGhpcy5yZXM7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHV4LCB1eSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBjb252ZXJ0UG9pbnRzKHBvaW50czogVmVjdG9yMltdKTogVmVjdG9yMltdIHtcclxuICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgcG9pbnQgb2YgcG9pbnRzKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKHRoaXMuY29udmVydFBvaW50KHBvaW50KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVBbmNob3IoaWQ6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpOiBBbmNob3JDb250cm9sIHtcclxuICAgICAgICB2YXIgeCA9IE51bWJlci5wYXJzZUZsb2F0KHgudG9GaXhlZCg0KSk7XHJcbiAgICAgICAgdmFyIHkgPSBOdW1iZXIucGFyc2VGbG9hdCh5LnRvRml4ZWQoNCkpO1xyXG4gICAgICAgIGlmIChpZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGFuY2hvciBvZiB0aGlzLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYW5jaG9yIGluc3RhbmNlb2YgQW5jaG9yQ29udHJvbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbmNob3IuYW5jaG9yLnggPT09IHggJiYgYW5jaG9yLmFuY2hvci55ID09PSB5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhbmNob3I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlkID0gKyt0aGlzLl9tYXhTZXJpYWxOdW1iZXI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBhbmNob3IgPSBuZXcgQW5jaG9yQ29udHJvbCh0aGlzLCB4LCB5KTtcclxuICAgICAgICBhbmNob3IuaWQgPSBpZDtcclxuICAgICAgICBpZiAoaWQgPj0gdGhpcy5fbWF4U2VyaWFsTnVtYmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21heFNlcmlhbE51bWJlciA9IGlkICsgMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFuY2hvcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlUG9seWdvbihpZDogbnVtYmVyLCBhbmNob3IxOiBBbmNob3JDb250cm9sLCBhbmNob3IyOiBBbmNob3JDb250cm9sLCB0aGlja25lc3M/OiBudW1iZXIpOiBQb2x5Z29uQ29udHJvbCB7XHJcbiAgICAgICAgaWYgKGFuY2hvcjEgPT0gYW5jaG9yMikgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgaWYgKGFuY2hvcjEuYW5jaG9yLnRhcmdldHMuaW5kZXhPZihhbmNob3IyLmFuY2hvcikgPiAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGlkICYmIGlkID49IHRoaXMuX21heFNlcmlhbE51bWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXhTZXJpYWxOdW1iZXIgPSBpZCArIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWQgPSArK3RoaXMuX21heFNlcmlhbE51bWJlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaWNrbmVzcyA9PSBudWxsKSB0aGlja25lc3MgPSB0aGlzLmRlZmF1bHR0aGlja25lc3M7XHJcbiAgICAgICAgdmFyIHBvbHlnb24gPSBuZXcgUG9seWdvbkNvbnRyb2wodGhpcywgYW5jaG9yMSwgYW5jaG9yMiwgdGhpY2tuZXNzKTtcclxuICAgICAgICBwb2x5Z29uLmlkID0gaWQ7XHJcbiAgICAgICAgcG9seWdvbi5oZWlnaHQgPSB0aGlzLmRlZmF1bHRIZWlnaHQ7XHJcbiAgICAgICAgcmV0dXJuIHBvbHlnb247XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgYWRkKC4uLmN0bHM6IENvbnRyb2xbXSkge1xyXG4gICAgICAgIGZvciAobGV0IGN0bCBvZiBjdGxzKSB7XHJcbiAgICAgICAgICAgIGlmIChjdGwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5jaGlsZHJlbi5pbmRleE9mKGN0bCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3RsLmlkICYmIGN0bC5pZCA+PSB0aGlzLl9tYXhTZXJpYWxOdW1iZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9tYXhTZXJpYWxOdW1iZXIgPSBjdGwuaWQgKyAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGluZGV4ID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN0bCBpbnN0YW5jZW9mIEFuY2hvckNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5wdXNoKGN0bCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjdGwgaW5zdGFuY2VvZiBQb2x5Z29uQ29udHJvbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkcmVuLnVuc2hpZnQoY3RsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5fYWRzb3JiLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlKC4uLmN0bHM6IENvbnRyb2xbXSk6IENvbnRyb2xbXSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGN0bCBvZiBjdGxzKSB7XHJcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHRoaXMuY2hpbGRyZW4uaW5kZXhPZihjdGwpO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godGhpcy5jaGlsZHJlbltpbmRleF0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGluZGV4ID0gdGhpcy5fbW91c2VHcmFiT2JqZWN0cy5pbmRleE9mKGN0bCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9tb3VzZUdyYWJPYmplY3RzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0UmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5fYWRzb3JiLnVwZGF0ZSgpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNsZWFyKCkge1xyXG4gICAgICAgIHRoaXMucmVsZWFzZUdyYWJPYmplY3RzKCk7XHJcbiAgICAgICAgdGhpcy5jb25uZWN0b3IgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudmlydHVhbEN1cnNvciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fYWRzb3JiLmNsZWFyKCk7XHJcbiAgICAgICAgdGhpcy5fYWRzb3JiLmVuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICB3aGlsZSAodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHZhciBjb250cm9sID0gdGhpcy5jaGlsZHJlbi5zaGlmdCgpO1xyXG4gICAgICAgICAgICBjb250cm9sLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9hZHNvcmIuZW5hYmxlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fbWF4U2VyaWFsTnVtYmVyID0gMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHRvQXJycmF5KCk6IG51bWJlcltdW11bXSB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDogbnVtYmVyW11bXVtdID0gW107XHJcbiAgICAgICAgZm9yICh2YXIgY29udHJvbCBvZiB0aGlzLl9jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAoY29udHJvbCBpbnN0YW5jZW9mIFBvbHlnb25Db250cm9sKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChjb250cm9sLnRvQXJyYXkoKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHNlcmlhbGl6ZSgpOiBBcmVhV2FsbHMge1xyXG4gICAgICAgIHZhciBhcmVhOiBBcmVhV2FsbHMgPSB7XHJcbiAgICAgICAgICAgIGFuY2hvcnM6IFtdLFxyXG4gICAgICAgICAgICB3YWxsczogW11cclxuICAgICAgICB9O1xyXG4gICAgICAgIGZvciAodmFyIGNvbnRyb2wgb2YgdGhpcy5fY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBQb2x5Z29uQ29udHJvbCkge1xyXG4gICAgICAgICAgICAgICAgYXJlYS53YWxscy5wdXNoKGNvbnRyb2wuc2VyaWFsaXplKCkpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBBbmNob3JDb250cm9sKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29udHJvbC5wb2x5Z29ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJlYS5hbmNob3JzLnB1c2goY29udHJvbC5zZXJpYWxpemUoKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyZWE7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBmcm9tKGFyZWE6IEFyZWFXYWxscykge1xyXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcclxuICAgICAgICB2YXIgbWFwOiB7IFtrZXk6IHN0cmluZ106IEFuY2hvckNvbnRyb2wgfSA9IHt9O1xyXG4gICAgICAgIHZhciBvYmplY3RzOiBDb250cm9sW10gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBhbmNob3Igb2YgYXJlYS5hbmNob3JzKSB7XHJcbiAgICAgICAgICAgIG1hcFthbmNob3IuaWRdID0gdGhpcy5jcmVhdGVBbmNob3IoYW5jaG9yLmlkLCBhbmNob3IueCwgYW5jaG9yLnkpO1xyXG4gICAgICAgICAgICBvYmplY3RzLnB1c2gobWFwW2FuY2hvci5pZF0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCB3YWxsIG9mIGFyZWEud2FsbHMpIHtcclxuICAgICAgICAgICAgdmFyIGZyb20gPSBtYXBbd2FsbC5hbmNob3JzWzBdXTtcclxuICAgICAgICAgICAgdmFyIHRvID0gbWFwW3dhbGwuYW5jaG9yc1sxXV07XHJcbiAgICAgICAgICAgIGlmIChmcm9tICYmIHRvKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2VnbWVudCA9IHRoaXMuY3JlYXRlUG9seWdvbih3YWxsLmlkLCBmcm9tLCB0bywgd2FsbC50aGljayk7XHJcbiAgICAgICAgICAgICAgICBpZiAoc2VnbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlZ21lbnQuaGVpZ2h0ID0gd2FsbC5oZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqZWN0cy5wdXNoKHNlZ21lbnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGtleSBpbiBtYXApIHtcclxuICAgICAgICAgICAgbWFwW2tleV0udXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYWRkLmFwcGx5KHRoaXMsIG9iamVjdHMpO1xyXG4gICAgICAgIG1hcCA9IHt9O1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGlzRGlzcG9zZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgem9vbSgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl96b29tO1xyXG4gICAgfVxyXG4gICAgcHVibGljIGdldCByZXMoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgYm91bmRzKCk6IEJvdW5kcyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2JvdW5kcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHJlbmRlcmVyKCk6IFJlbmRlcmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcmVuZGVyZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBjZW50ZXIoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHZpZXdDb250cm9sKCk6IFZpZXdDb250cm9sbGVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmlld0NvbnRyb2w7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBvblJlbmRlcigpOiBzaWduYWxzLlNpZ25hbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uUmVuZGVyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG9uWm9vbSgpOiBzaWduYWxzLlNpZ25hbCB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29uWm9vbTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXQgY29udGFpbmVyKCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGl2O1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCAqIGFzIHNpZ25hbHMgZnJvbSBcInNpZ25hbHNcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuLi9jb3JlL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgVmVjdG9yRGVzaWduZXIgfSBmcm9tIFwiLi9WZWN0b3JEZXNpZ25lclwiO1xyXG5pbXBvcnQgeyBBbmNob3JDb250cm9sIH0gZnJvbSBcIi4vVmlld3MvQW5jaG9yQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSBcIi4vVmlld3MvQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBNb3VzZUNhcHR1cmVyIH0gZnJvbSAnLi9VdGlsaXR5L01vdXNlQ2FwdHVyZXInO1xyXG5pbXBvcnQgeyBQb2x5Z29uQ29udHJvbCB9IGZyb20gJy4vVmlld3MvUG9seWdvbkNvbnRyb2wnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3Q29udHJvbGxlciB7XHJcbiAgICBwcml2YXRlIGRlc2lnbmVyOiBWZWN0b3JEZXNpZ25lcjtcclxuICAgIHByaXZhdGUgX2RyYWdnaW5nOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfb25tb3ZlOiBzaWduYWxzLlNpZ25hbDtcclxuICAgIHB1YmxpYyBwb3NpdGlvbjogVmVjdG9yMjtcclxuICAgIHByaXZhdGUgX3ByZXNzX3Bvc2l0aW9uOiBWZWN0b3IyO1xyXG4gICAgcHJpdmF0ZSBfaG92ZXJPYmplY3Q6IENvbnRyb2w7XHJcbiAgICBwcml2YXRlIF9oaXRPYmplY3Q6IENvbnRyb2w7XHJcbiAgICBwcml2YXRlIHByZXNzZWRfc3RhdGU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9wcmVzc2VkT2JqZWN0OiBDb250cm9sO1xyXG4gICAgcHJpdmF0ZSBfaXNjYW5jZWxlZDogYm9vbGVhbjtcclxuICAgIHByaXZhdGUgY2FwdHVyZXI6IE1vdXNlQ2FwdHVyZXI7XHJcblxyXG4gICAgcHVibGljIGdldCBvbm1vdmUoKTogc2lnbmFscy5TaWduYWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9vbm1vdmU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGRlc2lnbmVyOiBWZWN0b3JEZXNpZ25lcikge1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIgPSBkZXNpZ25lcjtcclxuICAgICAgICB0aGlzLl9pc2NhbmNlbGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fb25tb3ZlID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XHJcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IG5ldyBWZWN0b3IyKC0xLCAtMSk7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlciA9IG5ldyBNb3VzZUNhcHR1cmVyKHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2FudmFzKTtcclxuICAgICAgICB0aGlzLmNhcHR1cmVyLm9uTW91c2VEb3duLmFkZCh0aGlzLm1vdXNlX2Rvd24sIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY2FwdHVyZXIub25Nb3VzZU1vdmUuYWRkKHRoaXMubW91c2VfbW92ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5jYXB0dXJlci5vbk1vdXNlVXAuYWRkKHRoaXMubW91c2VfdXAsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2FudmFzLm9uZGJsY2xpY2sgPSB0aGlzLm1vdXNlX2RibGNsaWNrLmJpbmQodGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5kZXNpZ25lci5yZW5kZXJlci5jYW52YXMub25tb3VzZWRvd24gPSB0aGlzLm1vdXNlX2Rvd24uYmluZCh0aGlzKTtcclxuICAgICAgICAvLyB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLmNhbnZhcy5vbm1vdXNlbW92ZSA9IHRoaXMubW91c2VfbW92ZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIC8vIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2FudmFzLm9ubW91c2V1cCA9IHRoaXMubW91c2VfdXAuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLmNhbnZhcy5vbndoZWVsID0gdGhpcy53aGVlbENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2FudmFzLm9uc2Nyb2xsID0gdGhpcy53aGVlbENoYW5nZS5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2FudmFzLm9uY29udGV4dG1lbnUgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaGl0T2JqZWN0KCk6IENvbnRyb2wge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oaXRPYmplY3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5yZW5kZXJlci5jYW52YXMub253aGVlbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5yZW5kZXJlci5jYW52YXMub25zY3JvbGwgPSBudWxsO1xyXG4gICAgICAgIC8vIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2FudmFzLm9ubW91c2Vkb3duID0gbnVsbDtcclxuICAgICAgICAvLyB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLmNhbnZhcy5vbm1vdXNlbW92ZSA9IG51bGw7XHJcbiAgICAgICAgLy8gdGhpcy5kZXNpZ25lci5yZW5kZXJlci5jYW52YXMub25tb3VzZXVwID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLmNhbnZhcy5vbmRibGNsaWNrID0gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHdoZWVsQ2hhbmdlKGU6IFdoZWVsRXZlbnQpIHtcclxuICAgICAgICAvLyAgdmFyIGRlbHRhID0gKC1lLmRlbHRhWSAvIDEwMDApICogNTA7XHJcbiAgICAgICAgdmFyIGRlbHRhbFggPSB0aGlzLmRlc2lnbmVyLndpZHRoIC8gMiAtIGUub2Zmc2V0WDtcclxuICAgICAgICB2YXIgZGVsdGFsWSA9IHRoaXMuZGVzaWduZXIuaGVpZ2h0IC8gMiAtIGUub2Zmc2V0WTtcclxuICAgICAgICB2YXIgcHggPSBuZXcgVmVjdG9yMihlLm9mZnNldFgsIGUub2Zmc2V0WSk7XHJcbiAgICAgICAgLy/orqHnrpfnvKnmlL7nmoTkuK3lv4PngrlcclxuICAgICAgICB2YXIgem9vbVBvaW50ID0gbmV3IFZlY3RvcjIoKHB4LnggKyB0aGlzLmRlc2lnbmVyLmJvdW5kcy5sZWZ0IC8gdGhpcy5kZXNpZ25lci5yZXMpICogdGhpcy5kZXNpZ25lci5yZXMsIChweC55ICsgdGhpcy5kZXNpZ25lci5ib3VuZHMudG9wIC8gdGhpcy5kZXNpZ25lci5yZXMpICogdGhpcy5kZXNpZ25lci5yZXMpO1xyXG4gICAgICAgIC8vICB2YXIgem9vbSA9ICB0aGlzLmRlc2lnbmVyLnpvb20gKyBkZWx0YTtcclxuICAgICAgICB2YXIgem9vbSA9IDA7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgc2NhbGVzID0gWzUsIDEwLCAyMCwgMjUsIDQwLCA1MCwgODAsIDEwMCwgMjAwLCAyNTAsIDQwMCwgNTAwLCA4MDAsIDEwMDAsIDEyNTAsIDIwMDAsIDI1MDAsIDMwMDAsIDQwMDBdO1xyXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBzY2FsZXMuaW5kZXhPZih0aGlzLmRlc2lnbmVyLnpvb20pO1xyXG4gICAgICAgICAgICBpZiAoaW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBpbmRleCA9IDE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5kZWx0YVkgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBNYXRoLm1pbihpbmRleCArIDEsIHNjYWxlcy5sZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXggPSBNYXRoLm1heChpbmRleCAtIDEsIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHpvb20gPSBzY2FsZXNbaW5kZXhdO1xyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgbmV3UmVzID0gMSAvICh6b29tIC8gMTAwKTtcclxuICAgICAgICB2YXIgY2VudGVyID0gbmV3IFZlY3RvcjIoem9vbVBvaW50LnggKyBkZWx0YWxYICogbmV3UmVzLCB6b29tUG9pbnQueSArIGRlbHRhbFkgKiBuZXdSZXMpO1xyXG4gICAgICAgIHRoaXMub25tb3ZlLmRpc3BhdGNoKHpvb20sIGNlbnRlciwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMuc3RvcEV2ZW50QnViYmxlKGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RvcEV2ZW50QnViYmxlKGU6IFVJRXZlbnQpIHtcclxuICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZS5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGUgJiYgZS5zdG9wUHJvcGFnYXRpb24pXHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB3aW5kb3cuZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG1vdXNlX2RibGNsaWNrKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5oaXRPYmplY3QgaW5zdGFuY2VvZiBBbmNob3JDb250cm9sKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaGl0T2JqZWN0IGluc3RhbmNlb2YgUG9seWdvbkNvbnRyb2wpIHtcclxuICAgICAgICAgICAgdmFyIGFuY2hvciA9IHRoaXMuaGl0T2JqZWN0LnNwbGl0KHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2lnbmVyLnNlbGVjdGVkID0gYW5jaG9yO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRlc2lnbmVyLnNlbGVjdGVkID09IG51bGwpIHtcclxuICAgICAgICAgICAgbGV0IHYgPSB0aGlzLmRlc2lnbmVyLm1hcFBvaW50KHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgICAgICB2YXIgYW5jaG9yID0gdGhpcy5kZXNpZ25lci5jcmVhdGVBbmNob3IobnVsbCwgdi54LCB2LnkpO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2lnbmVyLmFkZChhbmNob3IpO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2lnbmVyLnNlbGVjdGVkID0gYW5jaG9yO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBtb3VzZV9kb3duKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICB0aGlzLmNhcHR1cmVyLmNhcHR1cmUoKTtcclxuICAgICAgICB0aGlzLnByZXNzZWRfc3RhdGUgPSB0aGlzLmRlc2lnbmVyLnRvb2xiYXIudmlzaWJsZTtcclxuICAgICAgICBpZiAodGhpcy5wcmVzc2VkX3N0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzaWduZXIudG9vbGJhci52aXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRlc2lnbmVyLmNvbm5lY3RvciAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmJ1dHRvbiA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXNpZ25lci5jb25uZWN0b3IuY2FuY2VsKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2lnbmVyLnRvb2xiYXIudmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGUuYnV0dG9uID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2lnbmVyLmNvbm5lY3Rvci5jb21taXQodGhpcy5oaXRPYmplY3QsIHRoaXMucG9zaXRpb24pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGVzaWduZXIuY29ubmVjdG9yID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5faXNjYW5jZWxlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGVzaWduZXIudmlydHVhbEN1cnNvciA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2lzY2FuY2VsZWQgPSBmYWxzZTtcclxuICAgICAgICBpZiAoZS5idXR0b24gPT09IDIpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVzaWduZXIuc2VsZWN0ZWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kZXNpZ25lci5zZWxlY3RlZCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pc2NhbmNlbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2hvdmVyT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ByZXNzZWRPYmplY3QgPSB0aGlzLl9ob3Zlck9iamVjdDtcclxuICAgICAgICAgICAgLy8gbW91c2UgZG93blxyXG4gICAgICAgICAgICB0aGlzLl9wcmVzc2VkT2JqZWN0LmRpc3BhdGNoRXZlbnRzKCdvbk1vdXNlRG93bicsIGUuYnV0dG9uLCB0aGlzLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5fcHJlc3NfcG9zaXRpb24gPSB0aGlzLnBvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMuX2RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLnN0b3BFdmVudEJ1YmJsZShlKTtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcIm1vdmVcIjtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJpdmF0ZSB0ZXN0aGl0T2JqZWN0KHY6IFZlY3RvcjIsIGV4Y2x1ZGVkPzogQ29udHJvbFtdKTogQ29udHJvbCB7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IHRoaXMuZGVzaWduZXIuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICAgICAgdmFyIGNvbnRyb2wgPSB0aGlzLmRlc2lnbmVyLmNoaWxkcmVuW2ldO1xyXG4gICAgICAgICAgICBpZiAoY29udHJvbC5oaXQodikpIHtcclxuICAgICAgICAgICAgICAgIGlmIChleGNsdWRlZCAhPSBudWxsICYmIGV4Y2x1ZGVkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihjb250cm9sKSA+IC0xKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBjb250cm9sO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBtb3VzZV9tb3ZlKGU6IE1vdXNlRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy5faXNjYW5jZWxlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBsZXQgdiA9IHRoaXMuZGVzaWduZXIubWFwUG9pbnQodGhpcy5wb3NpdGlvbik7XHJcbiAgICAgICAgdmFyIGV4Y2x1ZGVkOiBDb250cm9sW10gPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5fcHJlc3NlZE9iamVjdCBpbnN0YW5jZW9mIEFuY2hvckNvbnRyb2wpIHtcclxuICAgICAgICAgICAgZXhjbHVkZWQucHVzaCh0aGlzLl9wcmVzc2VkT2JqZWN0KTtcclxuICAgICAgICAgICAgZXhjbHVkZWQgPSBleGNsdWRlZC5jb25jYXQodGhpcy5fcHJlc3NlZE9iamVjdC5wb2x5Z29ucyk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9wcmVzc2VkT2JqZWN0IGluc3RhbmNlb2YgUG9seWdvbkNvbnRyb2wpIHtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLl9oaXRPYmplY3QgPSB0aGlzLnRlc3RoaXRPYmplY3QodiwgZXhjbHVkZWQpO1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yMihlLnBhZ2VYIC0gdGhpcy5kZXNpZ25lci5yZW5kZXJlci5jYW52YXMub2Zmc2V0TGVmdCwgZS5wYWdlWSAtIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2FudmFzLm9mZnNldFRvcCk7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVzaWduZXIuY29ubmVjdG9yICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5kZXNpZ25lci5jb25uZWN0b3IudXBkYXRlKHRoaXMucG9zaXRpb24sIHRoaXMuX2hpdE9iamVjdCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX3ByZXNzZWRPYmplY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5fcHJlc3NlZE9iamVjdC5kaXNwYXRjaEV2ZW50cygnb25Nb3VzZU1vdmUnLCBlLmJ1dHRvbiwgdGhpcy5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9kcmFnZ2luZykge1xyXG4gICAgICAgICAgICB2YXIgcG9zID0gdGhpcy5wb3NpdGlvbi5zdWIodGhpcy5fcHJlc3NfcG9zaXRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLl9wcmVzc19wb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XHJcbiAgICAgICAgICAgIHZhciBjZW50ZXIgPSBuZXcgVmVjdG9yMih0aGlzLmRlc2lnbmVyLmNlbnRlci54IC0gcG9zLnggKiB0aGlzLmRlc2lnbmVyLnJlcywgdGhpcy5kZXNpZ25lci5jZW50ZXIueSAtIHBvcy55ICogdGhpcy5kZXNpZ25lci5yZXMpO1xyXG4gICAgICAgICAgICB0aGlzLm9ubW92ZS5kaXNwYXRjaCh0aGlzLmRlc2lnbmVyLnpvb20sIGNlbnRlciwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEV2ZW50QnViYmxlKGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2hpdE9iamVjdCAhPT0gdGhpcy5faG92ZXJPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2hvdmVyT2JqZWN0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hvdmVyT2JqZWN0LmRpc3BhdGNoRXZlbnRzKCdvbk1vdXNlTGVhdmUnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9ob3Zlck9iamVjdCA9IHRoaXMuX2hpdE9iamVjdDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2hvdmVyT2JqZWN0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hvdmVyT2JqZWN0LmRpc3BhdGNoRXZlbnRzKCdvbk1vdXNlRW50ZXInKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hvdmVyT2JqZWN0LmRpc3BhdGNoRXZlbnRzKCdvbk1vdXNlTW92ZScsIGUuYnV0dG9uLCB0aGlzLnBvc2l0aW9uKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5faG92ZXJPYmplY3QgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9ob3Zlck9iamVjdC5kaXNwYXRjaEV2ZW50cygnb25Nb3VzZU1vdmUnLCBlLmJ1dHRvbiwgdGhpcy5wb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSBtb3VzZV91cChlOiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGVzaWduZXIuc2VsZWN0ZWQgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlc2lnbmVyLnRvb2xiYXIudmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNhcHR1cmVyLnJlbGVhc2UoKTtcclxuICAgICAgICBpZiAodGhpcy5faXNjYW5jZWxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc2NhbmNlbGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci50b29sYmFyLnZpc2libGUgPSB0aGlzLnByZXNzZWRfc3RhdGU7XHJcbiAgICAgICAgaWYgKHRoaXMuX3ByZXNzZWRPYmplY3QpIHtcclxuICAgICAgICAgICAgLy8gbW91c2UgZG93blxyXG4gICAgICAgICAgICB0aGlzLl9wcmVzc2VkT2JqZWN0LmRpc3BhdGNoRXZlbnRzKCdvbk1vdXNlVXAnLCBlLmJ1dHRvbiwgdGhpcy5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9wcmVzc2VkT2JqZWN0ID09PSB0aGlzLl9ob3Zlck9iamVjdCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2xpY2tcclxuICAgICAgICAgICAgICAgIHRoaXMuX2hvdmVyT2JqZWN0LmRpc3BhdGNoRXZlbnRzKCdvbkNsaWNrJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fcHJlc3NlZE9iamVjdCA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdnaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBuZXcgVmVjdG9yMihlLnBhZ2VYIC0gdGhpcy5kZXNpZ25lci5yZW5kZXJlci5jYW52YXMub2Zmc2V0TGVmdCwgZS5wYWdlWSAtIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2FudmFzLm9mZnNldFRvcCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcEV2ZW50QnViYmxlKGUpO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLmNhbnZhcy5zdHlsZS5jdXJzb3IgPSBcImRlZmF1bHRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSIsIlxyXG5pbXBvcnQgeyBWZWN0b3IyLCBJVmVjdG9yMiB9IGZyb20gJy4uLy4uL2NvcmUvVmVjdG9yMic7XHJcbmltcG9ydCB7IENvbnRyb2wgfSBmcm9tICcuL0NvbnRyb2wnO1xyXG5pbXBvcnQgeyBWZWN0b3JEZXNpZ25lciB9IGZyb20gJy4uL1ZlY3RvckRlc2lnbmVyJztcclxuaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSAnLi4vLi4vY29yZS9BbmNob3InO1xyXG5pbXBvcnQgeyBSZW5kZXJUeXBlIH0gZnJvbSAnLi4vUmVuZGVyZXInO1xyXG5pbXBvcnQgeyBQb2x5Z29uQ29udHJvbCB9IGZyb20gJy4vUG9seWdvbkNvbnRyb2wnO1xyXG5pbXBvcnQgKiBhcyBzaWduYWxzIGZyb20gJ3NpZ25hbHMnO1xyXG5pbXBvcnQgeyBTZWdtZW50IH0gZnJvbSAnLi4vLi4vY29yZS9TZWdtZW50JztcclxuaW1wb3J0IHsgQWRzb3JiUmVzdWx0IH0gZnJvbSAnLi4vY29tbW9uL0Fkc29yYlNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBbmNob3JDb25maWcyZCB9IGZyb20gJy4uLy4uL2NvcmUvV2FsbEVsZW1lbnQnO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBBbmNob3JDb250cm9sIGV4dGVuZHMgQ29udHJvbCB7XHJcbiAgICBwcml2YXRlIF9hbmNob3I6IEFuY2hvcjtcclxuICAgIHByaXZhdGUgX29udXBkYXRlOiBzaWduYWxzLlNpZ25hbDtcclxuICAgIHByaXZhdGUgX3BvbHlnb25zOiBQb2x5Z29uQ29udHJvbFtdO1xyXG5cclxuICAgIHByaXZhdGUgX2xpbmtlZDogQW5jaG9yQ29udHJvbFtdO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0IG9uVXBkYXRlKCk6IHNpZ25hbHMuU2lnbmFsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fb251cGRhdGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpZCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbmNob3IuaWQ7XHJcbiAgICB9XHJcbiAgICBwdWJsaWMgc2V0IGlkKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9hbmNob3IuaWQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZGVzaWduZXI6IFZlY3RvckRlc2lnbmVyLCB4PzogbnVtYmVyLCB5PzogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoZGVzaWduZXIpO1xyXG4gICAgICAgIHRoaXMuX29udXBkYXRlID0gbmV3IHNpZ25hbHMuU2lnbmFsKCk7XHJcbiAgICAgICAgdGhpcy5fcG9seWdvbnMgPSBbXTtcclxuICAgICAgICB0aGlzLl9saW5rZWQgPSBbXTtcclxuICAgICAgICB0aGlzLmRyYWdEZWxheVRpbWUgPSA1MDtcclxuICAgICAgICB0aGlzLnBvc2l0aW9uLnNldCh4LCB5KTtcclxuICAgICAgICB0aGlzLl9hbmNob3IgPSBuZXcgQW5jaG9yKDAsIHRoaXMucG9zaXRpb24ueCwgdGhpcy5wb3NpdGlvbi55KTtcclxuICAgICAgICB0aGlzLmZpbGxDb2xvciA9ICcjYjVlNjFkJztcclxuICAgICAgICB0aGlzLnN0cm9rZUNvbG9yID0gJyNGRkZGRkYnO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25CZWdpbkRyYWcoY2FudmFzUG9zaXRpb246IFZlY3RvcjIpIHtcclxuICAgICAgICB2YXIgdmlld1BvcyA9IHRoaXMuZGVzaWduZXIubWFwUG9pbnQoY2FudmFzUG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIuZ3JhYk9iamVjdHMoW3RoaXNdKTtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnVwZGF0ZUVsZW1lbnRQb2ludHMoKTtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnZpcnR1YWxDdXJzb3IgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EcmFnaW5nKGNhbnZhc1Bvc2l0aW9uOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgdmFyIHZpZXdQb3MgPSB0aGlzLmRlc2lnbmVyLm1hcFBvaW50KGNhbnZhc1Bvc2l0aW9uKTtcclxuICAgICAgICB2YXIgcmVzdWx0OiBJVmVjdG9yMjtcclxuICAgICAgICB2YXIgaGl0T2JqZWN0ID0gdGhpcy5kZXNpZ25lci52aWV3Q29udHJvbC5oaXRPYmplY3Q7XHJcbiAgICAgICAgLy8g5aaC5p6c6byg5qCH5Zyo5aKZ5LiKICDlkLjpmYTliLDlopnlo4HkuIpcclxuICAgICAgICBpZiAoaGl0T2JqZWN0ICE9IHRoaXMgJiYgaGl0T2JqZWN0IGluc3RhbmNlb2YgUG9seWdvbkNvbnRyb2wpIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdmlld1BvcyA9IGhpdE9iamVjdC5nZXRTdWJQb2ludChjYW52YXNQb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyDlr7vmib7pu5jorqTlkLjpmYTngrlcclxuICAgICAgICAgICAgcmVzdWx0ID0gdGhpcy5kZXNpZ25lci5hZHNvcmIuYWRzb3JwdGlvbih2aWV3UG9zKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5ob3Jpem9udGFsTGluZUNvbG9yID0gcmVzdWx0LnkgIT0gbnVsbCA/ICcjMDAwMEZGJyA6ICcjMDBGRjAwJztcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnZlcnRpY2FsTGluZUNvbG9yID0gcmVzdWx0LnggIT0gbnVsbCA/ICcjMDAwMEZGJyA6ICcjMDBGRjAwJztcclxuICAgICAgICB0aGlzLnNldFBvc2l0aW9uKHZpZXdQb3MpO1xyXG4gICAgICAgIHRoaXMudXBkYXRlTmVhcmJ5KCk7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5yZXF1ZXN0UmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRW5kRHJhZyhjYW52YXNQb3NpdGlvbjogVmVjdG9yMikge1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIudmlydHVhbEN1cnNvciA9IG51bGw7XHJcbiAgICAgICAgdmFyIGFuY2hvciA9IHRoaXMuZGVzaWduZXIuX2NoaWxkcmVuLmZpbmQoZSA9PiBlIGluc3RhbmNlb2YgQW5jaG9yQ29udHJvbCAmJiBlLmFuY2hvci54ID09PSB0aGlzLmFuY2hvci54ICYmIGUuYW5jaG9yLnkgPT09IHRoaXMuYW5jaG9yLnkpIGFzIEFuY2hvckNvbnRyb2w7XHJcbiAgICAgICAgaWYgKGFuY2hvciAhPSBudWxsICYmIGFuY2hvciAhPSB0aGlzKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVyYWdlVG8oYW5jaG9yKTtcclxuICAgICAgICAgICAgdGhpcy5kZXNpZ25lci5kaXNjYXJkR3JhYk9iamVjdHMoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGVzaWduZXIudmlld0NvbnRyb2wuaGl0T2JqZWN0ICE9IHRoaXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGVzaWduZXIudmlld0NvbnRyb2wuaGl0T2JqZWN0IGluc3RhbmNlb2YgUG9seWdvbkNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNwbGl0XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0QW5jaG9yID0gdGhpcy5kZXNpZ25lci52aWV3Q29udHJvbC5oaXRPYmplY3Quc3BsaXQodGhpcy5kZXNpZ25lci52aWV3Q29udHJvbC5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAvLyBtZXJhZ2VcclxuICAgICAgICAgICAgICAgIHRoaXMubWVyYWdlVG8odGFyZ2V0QW5jaG9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmRlc2lnbmVyLnZpZXdDb250cm9sLmhpdE9iamVjdCBpbnN0YW5jZW9mIEFuY2hvckNvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgIC8vIG1lcmFnZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tZXJhZ2VUbyh0aGlzLmRlc2lnbmVyLnZpZXdDb250cm9sLmhpdE9iamVjdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5yZWxlYXNlR3JhYk9iamVjdHMoKTtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnVwZGF0ZUVsZW1lbnRQb2ludHMoKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIG1lcmFnZVRvKEFOQ0hPUjogQW5jaG9yQ29udHJvbCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8v5LiN5pSv5oyB5ZCI5bm25Yiw6Ieq5bex55qE5Y+m5LiA56uvXHJcbiAgICAgICAgaWYgKHRoaXMuYW5jaG9yLnRhcmdldHMuaW5kZXhPZihBTkNIT1IuYW5jaG9yKSA+IC0xKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgLy8gbG9vayBsb29rIOS4juiHquW3seebuOi/nueahOmUmueCuVxyXG4gICAgICAgIGZvciAobGV0IHBvbHlnb24gb2YgdGhpcy5fcG9seWdvbnMpIHtcclxuICAgICAgICAgICAgdmFyIHBvbHkgPSB0aGlzLmRlc2lnbmVyLmNyZWF0ZVBvbHlnb24obnVsbCwgcG9seWdvbi5hbmNob3JzWzBdID09IHRoaXMgPyBwb2x5Z29uLmFuY2hvcnNbMV0gOiBwb2x5Z29uLmFuY2hvcnNbMF0sIEFOQ0hPUiwgcG9seWdvbi50aGlja25lc3MpO1xyXG4gICAgICAgICAgICBpZiAocG9seSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlc2lnbmVyLmFkZChwb2x5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL3JlbW92ZSBzZWxmXHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICAvLyB1cGRhdGUgYW5jaG9yXHJcbiAgICAgICAgQU5DSE9SLnVwZGF0ZSgpO1xyXG4gICAgICAgIC8vIHVwZGF0ZSBzZWdtZW50c1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIuc2VsZWN0ZWQgPSBBTkNIT1I7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIHVwZGF0ZU5lYXJieSgpIHtcclxuICAgICAgICBmb3IgKGxldCB0YXJnZXQgb2YgdGhpcy5fcG9seWdvbnMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgdiBvZiB0YXJnZXQuYW5jaG9ycykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHYgIT09IHRoaXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2LnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFBvbHlnb24ocDogUG9seWdvbkNvbnRyb2wsIGE6IEFuY2hvckNvbnRyb2wpIHtcclxuICAgICAgICB0aGlzLl9wb2x5Z29ucy5wdXNoKHApO1xyXG4gICAgICAgIHRoaXMuX2xpbmtlZC5wdXNoKGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVQb2x5Z29uKHA6IFBvbHlnb25Db250cm9sLCBhOiBBbmNob3JDb250cm9sKSB7XHJcbiAgICAgICAgdmFyIGluZGV4ID0gdGhpcy5fcG9seWdvbnMuaW5kZXhPZihwKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkgdGhpcy5fcG9seWdvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICBpbmRleCA9IHRoaXMuX2xpbmtlZC5pbmRleE9mKGEpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB0aGlzLl9saW5rZWQuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHBvbHlnb25zKCk6IFBvbHlnb25Db250cm9sW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb2x5Z29ucztcclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgc2V0UG9zaXRpb24odjogVmVjdG9yMikge1xyXG4gICAgICAgIHRoaXMucG9zaXRpb24uY29weSh2KTtcclxuICAgICAgICB0aGlzLl9hbmNob3Iuc2V0UG9zaXRpb24odik7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIHJlbW92ZSgpIHtcclxuICAgICAgICBzdXBlci5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLl9saW5rZWQgPSBbXTtcclxuICAgICAgICB3aGlsZSAodGhpcy5fcG9seWdvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHZhciBwb2x5Z29uID0gdGhpcy5fcG9seWdvbnMuc2hpZnQoKTtcclxuICAgICAgICAgICAgcG9seWdvbi5yZW1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fYW5jaG9yLnJlbW92ZSgpO1xyXG4gICAgICAgIHRoaXMuX29udXBkYXRlLnJlbW92ZUFsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcbiAgICAgICAgdGhpcy5fYW5jaG9yLmJ1aWxkKCk7XHJcbiAgICAgICAgdGhpcy5vblVwZGF0ZS5kaXNwYXRjaCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBvbkNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIuc2VsZWN0ZWQgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRVcGRhdGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlci5zZWxlY3RlZFVwZGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5maWxsQ29sb3IgPSB2YWx1ZSA/ICcjMDA3OGQ3JyA6ICcjYjVlNjFkJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGhpdChwb2ludDogVmVjdG9yMik6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBwb2ludC5pbkNpcmNsZSh0aGlzLnBvc2l0aW9uLCAxMCAqIHRoaXMuZGVzaWduZXIucmVzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIucmVuZGVyZXIub3BhY2l0eSA9IHRoaXMub3BhY2l0eTtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLmZpbGxDb2xvciA9IHRoaXMuaXNIb3ZlciAmJiAhdGhpcy5pc1NlbGVjdGVkID8gdGhpcy5ob3ZlckNvbG9yIDogdGhpcy5maWxsQ29sb3I7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5yZW5kZXJlci5zdHJva2VDb2xvciA9IHRoaXMuc3Ryb2tlQ29sb3I7XHJcbiAgICAgICAgdmFyIHB0ID0gdGhpcy5kZXNpZ25lci5jb252ZXJ0UG9pbnQodGhpcy5wb3NpdGlvbik7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5yZW5kZXJlci5jaXJjbGUocHQueCwgcHQueSwgNSwgUmVuZGVyVHlwZS5BTEwgLyogLyB0aGlzLmRlc2lnbmVyLnJlcyAqLyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBsZWZ0KCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb24ueDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHRvcCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvc2l0aW9uLnk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhbmNob3IoKTogQW5jaG9yIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgcG9pbnQoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9zaXRpb247XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBzZXJpYWxpemUoKTogQW5jaG9yQ29uZmlnMmQge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGlkOiB0aGlzLmlkLFxyXG4gICAgICAgICAgICB4OiB0aGlzLnBvc2l0aW9uLngsXHJcbiAgICAgICAgICAgIHk6IHRoaXMucG9zaXRpb24ueVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gJy4uLy4uL2NvcmUvVmVjdG9yMic7XHJcbmltcG9ydCB7IFZlY3RvckRlc2lnbmVyIH0gZnJvbSAnLi4vVmVjdG9yRGVzaWduZXInO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sIHtcclxuXHJcbiAgICBwcm90ZWN0ZWQgc3Ryb2tlQ29sb3I6IHN0cmluZztcclxuICAgIHByb3RlY3RlZCBmaWxsQ29sb3I6IHN0cmluZztcclxuICAgIHByb3RlY3RlZCBob3ZlckNvbG9yOiBzdHJpbmc7XHJcbiAgICBwcm90ZWN0ZWQgb3BhY2l0eTogbnVtYmVyO1xyXG4gICAgXHJcbiAgICBwcml2YXRlIF9kZXNpZ25lcjogVmVjdG9yRGVzaWduZXJcclxuICAgIHByaXZhdGUgX2lzSG92ZXI6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9pc1NlbGVjdGVkOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3ByZXNzZWRUaW1lOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9wb3NpdGlvbjogVmVjdG9yMjtcclxuICAgIHByaXZhdGUgX2hEcmFnVGltZXI6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2RyYWdpbmc6IGJvb2xlYW47XHJcbiAgICBwcm90ZWN0ZWQgZHJhZ0RlbGF5VGltZTogbnVtYmVyO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHBvc2l0aW9uKCk6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9wb3NpdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGlkKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgaWQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX2lkID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBpc1ByZXNzZWQoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ByZXNzZWRUaW1lICE9IG51bGw7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXQgaXNEcmFnaW5nKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9kcmFnaW5nO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmjInkuIvliLDlvZPliY3nmoR0aWNrXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXQgcHJlc3NlZFRpY2soKTogbnVtYmVyIHtcclxuICAgICAgICBpZiAodGhpcy5fcHJlc3NlZFRpbWUgPT0gbnVsbCkgcmV0dXJuIDA7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5fcHJlc3NlZFRpbWU7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZGVzaWduZXI6IFZlY3RvckRlc2lnbmVyKSB7XHJcbiAgICAgICAgdGhpcy5fZGVzaWduZXIgPSBkZXNpZ25lcjtcclxuICAgICAgICB0aGlzLl9pc0hvdmVyID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcHJlc3NlZFRpbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuaG92ZXJDb2xvciA9ICcjZmY4ODg4JztcclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSAwLjU7XHJcbiAgICAgICAgdGhpcy5faXNTZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gbmV3IFZlY3RvcjIoKTtcclxuICAgICAgICB0aGlzLmRyYWdEZWxheVRpbWUgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5yZW1vdmUodGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldCBkZXNpZ25lcigpOiBWZWN0b3JEZXNpZ25lciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2Rlc2lnbmVyO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgaGl0KHBvaW50OiBWZWN0b3IyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGUoKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmVuZGVyIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtb3VzZSBtb3ZlIGVudGVyXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBvbk1vdXNlRW50ZXIoKSB7XHJcbiAgICAgICAgdGhpcy5faXNIb3ZlciA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5yZXF1ZXN0UmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtb3VzZSBtb3ZlIGxlYXZlXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBvbk1vdXNlTGVhdmUoKSB7XHJcbiAgICAgICAgdGhpcy5faXNIb3ZlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIucmVxdWVzdFJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbW91c2UgYnV0dG9uIGRvd25cclxuICAgICAqIEBwYXJhbSBidXR0b24gXHJcbiAgICAgKiBAcGFyYW0gcG9zIFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgb25Nb3VzZURvd24oYnV0dG9uOiBudW1iZXIsIHBvczogVmVjdG9yMikge1xyXG4gICAgICAgIHRoaXMuX3ByZXNzZWRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgaWYgKGJ1dHRvbiA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9oRHJhZ1RpbWVyID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faERyYWdUaW1lciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5kZXNpZ25lci52aWV3Q29udHJvbC5oaXRPYmplY3QgPT0gdGhpcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2RyYWdpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25CZWdpbkRyYWcocG9zKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgdGhpcy5kcmFnRGVsYXlUaW1lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtb3VzZSBtb3ZlXHJcbiAgICAgKiBAcGFyYW0gYnV0dG9uIFxyXG4gICAgICogQHBhcmFtIHBvcyBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uTW91c2VNb3ZlKGJ1dHRvbjogbnVtYmVyLCBwb3M6IFZlY3RvcjIpIHtcclxuICAgICAgICBpZiAodGhpcy5fZHJhZ2luZykge1xyXG4gICAgICAgICAgICB0aGlzLm9uRHJhZ2luZyhwb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1vdXNlIGJ1dHRvbiB1cFxyXG4gICAgICogQHBhcmFtIGJ1dHRvbiBcclxuICAgICAqIEBwYXJhbSBwb3MgXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBvbk1vdXNlVXAoYnV0dG9uOiBudW1iZXIsIHBvczogVmVjdG9yMikge1xyXG4gICAgICAgIHRoaXMuX3ByZXNzZWRUaW1lID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5faERyYWdUaW1lcikge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMuX2hEcmFnVGltZXIpO1xyXG4gICAgICAgICAgICB0aGlzLl9oRHJhZ1RpbWVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuX2RyYWdpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fZHJhZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLm9uRW5kRHJhZyhwb3MpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZHJhZyBiZSBpbml0aWF0ZWRcclxuICAgICAqIEBwYXJhbSBjYW52YXNQb3NpdGlvbiBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uQmVnaW5EcmFnKGNhbnZhc1Bvc2l0aW9uOiBWZWN0b3IyKSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZHJhZyBtb3ZlaW5nXHJcbiAgICAgKiBAcGFyYW0gY2FudmFzUG9zaXRpb24gXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBvbkRyYWdpbmcoY2FudmFzUG9zaXRpb246IFZlY3RvcjIpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkcmFnIHRoZSBlbmRcclxuICAgICAqIEBwYXJhbSBjYW52YXNQb3NpdGlvbiBcclxuICAgICAqL1xyXG4gICAgcHJvdGVjdGVkIG9uRW5kRHJhZyhjYW52YXNQb3NpdGlvbjogVmVjdG9yMikge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtb3VzZSBjbGlja1xyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgb25DbGljaygpIHtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogb2JqZWN0IHNlbGVjdCBzdGF0ZSBjaGFuZ2VkXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZWxlY3RlZFVwZGF0ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuX2lzU2VsZWN0ZWQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLm9wYWNpdHkgPSB2YWx1ZSA/IDEgOiAwLjU7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbW91c2UgaG92ZXIgaW4gc2VsZlxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgZ2V0IGlzSG92ZXIoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzSG92ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3BhdGNoRXZlbnRzKGV2ZW50OiBzdHJpbmcsIC4uLnBhcmFtczogYW55W10pIHtcclxuICAgICAgICB0aGlzW2V2ZW50XSAmJiB0aGlzW2V2ZW50XS5hcHBseSh0aGlzLCBwYXJhbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2VsZiBpcyBzZWxlY3Qgc3RhdGVcclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldCBpc1NlbGVjdGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pc1NlbGVjdGVkO1xyXG4gICAgfVxyXG59IiwiXHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tICcuLi8uLi9jb3JlL1ZlY3RvcjInO1xyXG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnLi9Db250cm9sJztcclxuaW1wb3J0IHsgVmVjdG9yRGVzaWduZXIgfSBmcm9tICcuLi9WZWN0b3JEZXNpZ25lcic7XHJcbmltcG9ydCB7IFNlZ21lbnQgfSBmcm9tICcuLi8uLi9jb3JlL1NlZ21lbnQnO1xyXG5pbXBvcnQgeyBBbmNob3IgfSBmcm9tICcuLi8uLi9jb3JlL0FuY2hvcic7XHJcbmltcG9ydCB7IEFuY2hvckNvbnRyb2wgfSBmcm9tICcuL0FuY2hvckNvbnRyb2wnO1xyXG5pbXBvcnQgeyBSZW5kZXJUeXBlIH0gZnJvbSAnLi4vUmVuZGVyZXInO1xyXG5pbXBvcnQgeyBCb3VuZHMgfSBmcm9tICcuLi9jb21tb24vQm91bmRzJztcclxuaW1wb3J0IHsgV2FsbENvbmZpZzJkIH0gZnJvbSAnLi4vLi4vY29yZS9XYWxsRWxlbWVudCc7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBvbHlnb25Db250cm9sIGV4dGVuZHMgQ29udHJvbCB7XHJcbiAgICBwcml2YXRlIF9zZWdtZW50OiBTZWdtZW50O1xyXG4gICAgcHJpdmF0ZSBfcG9pbnRzOiBWZWN0b3IyW107XHJcbiAgICBwcml2YXRlIF9ib3VuZHM6IEJvdW5kcztcclxuICAgIHByaXZhdGUgX2FuY2hvcnM6IEFuY2hvckNvbnRyb2xbXTtcclxuICAgIHByaXZhdGUgX2FuY2hvclBvc2l0aW9uczogVmVjdG9yMltdO1xyXG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihkZXNpZ25lcjogVmVjdG9yRGVzaWduZXIsIGFuY2hvcjE6IEFuY2hvckNvbnRyb2wsIGFuY2hvcjI6IEFuY2hvckNvbnRyb2wsIHRoaWNrbmVzczogbnVtYmVyKSB7XHJcbiAgICAgICAgc3VwZXIoZGVzaWduZXIpO1xyXG4gICAgICAgIHRoaXMuX2FuY2hvcnMgPSBbYW5jaG9yMSwgYW5jaG9yMl07XHJcbiAgICAgICAgdGhpcy5fcG9pbnRzID0gW107XHJcbiAgICAgICAgdGhpcy5kcmFnRGVsYXlUaW1lID0gMjAwO1xyXG4gICAgICAgIHRoaXMuX2JvdW5kcyA9IG5ldyBCb3VuZHMoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgdGhpcy5fc2VnbWVudCA9IG5ldyBTZWdtZW50KGFuY2hvcjEuYW5jaG9yLCBhbmNob3IyLmFuY2hvciwgdGhpY2tuZXNzKTtcclxuICAgICAgICB0aGlzLnN0cm9rZUNvbG9yID0gJyNGRkZGRkYnO1xyXG4gICAgICAgIHRoaXMuZmlsbENvbG9yID0gJyM4ODg4ODgnO1xyXG4gICAgICAgIHRoaXMuX2FuY2hvcnNbMF0ub25VcGRhdGUuYWRkKHRoaXMudXBkYXRlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9hbmNob3JzWzFdLm9uVXBkYXRlLmFkZCh0aGlzLnVwZGF0ZSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fYW5jaG9yc1swXS5hZGRQb2x5Z29uKHRoaXMsIHRoaXMuX2FuY2hvcnNbMV0pO1xyXG4gICAgICAgIHRoaXMuX2FuY2hvcnNbMV0uYWRkUG9seWdvbih0aGlzLCB0aGlzLl9hbmNob3JzWzBdKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXQgdGhpY2tuZXNzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NlZ21lbnQudGhpY2tuZXNzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQgdGhpY2tuZXNzKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9zZWdtZW50LnRoaWNrbmVzcyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB1cGRhdGVUaGlja25lc3ModGhpY2tuZXNzOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRoaWNrbmVzcyA9IHRoaWNrbmVzcztcclxuICAgICAgICBmb3IgKGxldCBhbmNob3Igb2YgdGhpcy5fYW5jaG9ycykge1xyXG4gICAgICAgICAgICBhbmNob3IudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXQgaWQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2VnbWVudC5pZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQgaWQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3NlZ21lbnQuaWQgPSB2YWx1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHJlbW92ZShyZW1vdmVhbmNob3I6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgc3VwZXIucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5fc2VnbWVudC5kaXNwb3NlKCk7XHJcbiAgICAgICAgdGhpcy5fYW5jaG9yc1swXS5vblVwZGF0ZS5yZW1vdmUodGhpcy51cGRhdGUsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2FuY2hvcnNbMV0ub25VcGRhdGUucmVtb3ZlKHRoaXMudXBkYXRlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9hbmNob3JzWzBdLnJlbW92ZVBvbHlnb24odGhpcywgdGhpcy5fYW5jaG9yc1sxXSk7XHJcbiAgICAgICAgdGhpcy5fYW5jaG9yc1sxXS5yZW1vdmVQb2x5Z29uKHRoaXMsIHRoaXMuX2FuY2hvcnNbMF0pO1xyXG4gICAgICAgIHdoaWxlICh0aGlzLl9hbmNob3JzLmxlbmd0aCA+IDAgJiYgcmVtb3ZlYW5jaG9yKSB7XHJcbiAgICAgICAgICAgIGxldCBhbmNob3JDb250cm9sID0gdGhpcy5fYW5jaG9ycy5zaGlmdCgpO1xyXG4gICAgICAgICAgICBpZiAoYW5jaG9yQ29udHJvbC5hbmNob3IudGFyZ2V0cy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGFuY2hvckNvbnRyb2wucmVtb3ZlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbmNob3JDb250cm9sLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGdldFN1YlBvaW50KGNhbnZhc1BvaW50OiBWZWN0b3IyKSB7XHJcbiAgICAgICAgdmFyIG1vdXNlUG9zaXRpb24gPSB0aGlzLmRlc2lnbmVyLm1hcFBvaW50KGNhbnZhc1BvaW50KTtcclxuICAgICAgICByZXR1cm4gVmVjdG9yMi5nZXRQcm9qZWN0aXZlUG9pbnQodGhpcy5hbmNob3JzWzBdLnBvc2l0aW9uLCB0aGlzLmFuY2hvcnNbMV0ucG9zaXRpb24sIG1vdXNlUG9zaXRpb24pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc3BsaXQocG9pbnQ6IFZlY3RvcjIpOiBBbmNob3JDb250cm9sIHtcclxuICAgICAgICB2YXIgcG9seWdvbnM6IFBvbHlnb25Db250cm9sW10gPSBbXTtcclxuICAgICAgICB2YXIgYW5jaG9yczogQW5jaG9yQ29udHJvbFtdID0gW107XHJcbiAgICAgICAgdmFyIGFuY2hvcjEgPSB0aGlzLmFuY2hvcnNbMF07XHJcbiAgICAgICAgdmFyIGFuY2hvcjIgPSB0aGlzLmFuY2hvcnNbMV07XHJcbiAgICAgICAgdmFyIG1vdXNlUG9zaXRpb24gPSB0aGlzLmRlc2lnbmVyLm1hcFBvaW50KHBvaW50KTtcclxuICAgICAgICB2YXIgdGFyZ2V0ID0gVmVjdG9yMi5nZXRQcm9qZWN0aXZlUG9pbnQoYW5jaG9yMS5wb3NpdGlvbiwgYW5jaG9yMi5wb3NpdGlvbiwgbW91c2VQb3NpdGlvbik7XHJcbiAgICAgICAgdmFyIHRhcmdldEFuY2hvciA9IHRoaXMuZGVzaWduZXIuY3JlYXRlQW5jaG9yKG51bGwsIHRhcmdldC54LCB0YXJnZXQueSk7XHJcbiAgICAgICAgYW5jaG9ycy5wdXNoKHRhcmdldEFuY2hvcik7XHJcbiAgICAgICAgZm9yIChsZXQgYW5jaG9yIG9mIHRoaXMuYW5jaG9ycykge1xyXG4gICAgICAgICAgICB2YXIgc2VnbWVudCA9IHRoaXMuZGVzaWduZXIuY3JlYXRlUG9seWdvbihudWxsLCBhbmNob3IsIHRhcmdldEFuY2hvciwgdGhpcy50aGlja25lc3MpO1xyXG4gICAgICAgICAgICBpZiAoc2VnbWVudCAhPSBudWxsKSBwb2x5Z29ucy5wdXNoKHNlZ21lbnQpO1xyXG4gICAgICAgICAgICBhbmNob3JzLnB1c2goYW5jaG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgYW5jaG9yIG9mIGFuY2hvcnMpIHtcclxuICAgICAgICAgICAgYW5jaG9yLnVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0YXJnZXRBbmNob3IudXBkYXRlKCk7XHJcbiAgICAgICAgLy8gdXBkYXRlIHNlZ21lbnRzXHJcbiAgICAgICAgZm9yIChsZXQgZiBvZiBwb2x5Z29ucykge1xyXG4gICAgICAgICAgICBmLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2lnbmVyLmFkZChmKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLmFkZCh0YXJnZXRBbmNob3IpO1xyXG4gICAgICAgIHJldHVybiB0YXJnZXRBbmNob3I7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkJlZ2luRHJhZyhjYW52YXNQb3NpdGlvbjogVmVjdG9yMikge1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2FudmFzLnN0eWxlLmN1cnNvciA9ICdtb3ZlJztcclxuICAgICAgICB2YXIgdmlld1BvcyA9IHRoaXMuZGVzaWduZXIubWFwUG9pbnQoY2FudmFzUG9zaXRpb24pO1xyXG4gICAgICAgIHRoaXMuX2FuY2hvclBvc2l0aW9ucyA9IFt2aWV3UG9zLnN1Yih0aGlzLmFuY2hvcnNbMF0ucG9zaXRpb24pLCB2aWV3UG9zLnN1Yih0aGlzLmFuY2hvcnNbMV0ucG9zaXRpb24pXTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHByb3RlY3RlZCBvbkRyYWdpbmcoY2FudmFzUG9zaXRpb246IFZlY3RvcjIpIHtcclxuICAgICAgICB2YXIgdmlld1BvcyA9IHRoaXMuZGVzaWduZXIubWFwUG9pbnQoY2FudmFzUG9zaXRpb24pO1xyXG5cclxuICAgICAgICAvLyB2YXIgcG9zMSA9IHZpZXdQb3Muc3ViKHRoaXMuX2FuY2hvclBvc2l0aW9uc1swXSk7XHJcbiAgICAgICAgLy8gdmFyIHBvczIgPSB2aWV3UG9zLnN1Yih0aGlzLl9hbmNob3JQb3NpdGlvbnNbMV0pO1xyXG5cclxuICAgICAgICAvLyB2YXIgcmVzdWx0MSA9IHRoaXMuZGVzaWduZXIuYWRzb3JiLmFkc29ycHRpb24ocG9zMSk7XHJcbiAgICAgICAgLy8gdmFyIHJlc3VsdDIgPSB0aGlzLmRlc2lnbmVyLmFkc29yYi5hZHNvcnB0aW9uKHBvczIpO1xyXG5cclxuICAgICAgICAvLyB2YXIgbWlueCA9IE1hdGgubWluKHJlc3VsdDEueCA/IHJlc3VsdDEueCA6IHBvczEueCwgcmVzdWx0Mi54ID8gcmVzdWx0Mi54IDogcG9zMi54KTtcclxuICAgICAgICAvLyB2YXIgbWlueSA9IE1hdGgubWluKHJlc3VsdDEueSA/IHJlc3VsdDEueSA6IHBvczEueSwgcmVzdWx0Mi55ID8gcmVzdWx0Mi55IDogcG9zMi55KTtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuYW5jaG9yc1swXS5zZXRQb3NpdGlvbih2aWV3UG9zLnN1Yih0aGlzLl9hbmNob3JQb3NpdGlvbnNbMF0pKTtcclxuICAgICAgICB0aGlzLmFuY2hvcnNbMV0uc2V0UG9zaXRpb24odmlld1Bvcy5zdWIodGhpcy5fYW5jaG9yUG9zaXRpb25zWzFdKSk7XHJcbiAgICAgICAgdGhpcy5hbmNob3JzWzBdLnVwZGF0ZU5lYXJieSgpO1xyXG4gICAgICAgIHRoaXMuYW5jaG9yc1sxXS51cGRhdGVOZWFyYnkoKTtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnJlcXVlc3RSZW5kZXIoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHJvdGVjdGVkIG9uRW5kRHJhZyhjYW52YXNQb3NpdGlvbjogVmVjdG9yMikge1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIucmVuZGVyZXIuY2FudmFzLnN0eWxlLmN1cnNvciA9ICdkZWZhdWx0JztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc2VnbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvaW50cyA9IFtdO1xyXG4gICAgICAgICAgICB0aGlzLl9ib3VuZHMgPSBuZXcgQm91bmRzKDAsIDAsIDAsIDApO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBwb2ludCBvZiB0aGlzLl9zZWdtZW50LnBvaW50cykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdiA9IG5ldyBWZWN0b3IyKCkuZnJvbUFycmF5KHBvaW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3BvaW50cy5wdXNoKHYpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fYm91bmRzLmV4dGVuZEZyb21Qb2ludCh2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaGl0KHBvaW50OiBWZWN0b3IyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHBvaW50LmluUG9seWdvbih0aGlzLl9wb2ludHMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgc2VsZWN0ZWRVcGRhdGUodmFsdWU6IGJvb2xlYW4pIHtcclxuICAgICAgICBzdXBlci5zZWxlY3RlZFVwZGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5maWxsQ29sb3IgPSB2YWx1ZSA/ICcjMDA3OGQ3JyA6ICcjODg4ODg4JztcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25DbGljaygpIHtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnNlbGVjdGVkID0gdGhpcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVuZGVyKCkge1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIucmVuZGVyZXIub3BhY2l0eSA9IHRoaXMub3BhY2l0eTtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnJlbmRlcmVyLmZpbGxDb2xvciA9IHRoaXMuaXNIb3ZlciAmJiAhdGhpcy5pc1NlbGVjdGVkID8gdGhpcy5ob3ZlckNvbG9yIDogdGhpcy5maWxsQ29sb3I7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5yZW5kZXJlci5zdHJva2VDb2xvciA9IHRoaXMuc3Ryb2tlQ29sb3I7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5yZW5kZXJlci5wb2x5Z29uKHRoaXMuZGVzaWduZXIuY29udmVydFBvaW50cyh0aGlzLl9wb2ludHMpLCB0cnVlLCBSZW5kZXJUeXBlLkFMTCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBhbmNob3JzKCk6IEFuY2hvckNvbnRyb2xbXSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvcnM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyB0b0FycmF5KCk6IG51bWJlcltdW10ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWdtZW50LnBvaW50cztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2VyaWFsaXplKCk6IFdhbGxDb25maWcyZCB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMuaWQsXHJcbiAgICAgICAgICAgIGFuY2hvcnM6IFt0aGlzLmFuY2hvcnNbMF0uaWQsIHRoaXMuYW5jaG9yc1sxXS5pZF0sXHJcbiAgICAgICAgICAgIHRoaWNrOiB0aGlzLnRoaWNrbmVzcyxcclxuICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBJVmVjdG9yMiwgVmVjdG9yMiB9IGZyb20gXCIuLi8uLi9jb3JlL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgVmVjdG9yRGVzaWduZXIgfSBmcm9tIFwiLi4vVmVjdG9yRGVzaWduZXJcIjtcclxuaW1wb3J0IHsgQW5jaG9yQ29udHJvbCB9IGZyb20gXCIuLi9WaWV3cy9BbmNob3JDb250cm9sXCI7XHJcblxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBZHNvcmJSZXN1bHQge1xyXG4gICAgLyoqXHJcbiAgICAgKiB4IGRpc3RhbmNlIGFic29sdXRlIHZhbHVlXHJcbiAgICAgKiBubyByZXR1cm4gbnVsbCBmb3VuZFxyXG4gICAgICovXHJcbiAgICB4OiBudW1iZXI7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB5IGRpc3RhbmNlIGFic29sdXRlIHZhbHVlXHJcbiAgICAgKiBubyByZXR1cm4gbnVsbCBmb3VuZFxyXG4gICAgICovXHJcbiAgICB5OiBudW1iZXI7XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgQWRzb3JiU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGRlc2lnbmVyOiBWZWN0b3JEZXNpZ25lcjtcclxuICAgIC8qKlxyXG4gICAgICog5rC05bmz5Z2Q5qCHXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaG9yaXpvbnRhbFRyYWNlczogbnVtYmVyW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDlnoLnm7TlnZDmoIdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSB2ZXJ0aWNhbFRyYWNlczogbnVtYmVyW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGVuYWJsZWQ6IGJvb2xlYW47XHJcblxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGRlc2lnbmVyOiBWZWN0b3JEZXNpZ25lcikge1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIgPSBkZXNpZ25lcjtcclxuICAgICAgICB0aGlzLmhvcml6b250YWxUcmFjZXMgPSBbXTtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsVHJhY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmm7TmlrDmiYDmnInplJrngrnnmoTlnZDmoIdcclxuICAgICAqL1xyXG4gICAgcHVibGljIHVwZGF0ZSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaG9yaXpvbnRhbFRyYWNlcy5sZW5ndGggPSAwO1xyXG4gICAgICAgIHRoaXMudmVydGljYWxUcmFjZXMubGVuZ3RoID0gMDtcclxuICAgICAgICBmb3IgKGxldCBvYmplY3Qgb2YgdGhpcy5kZXNpZ25lci5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBpZiAob2JqZWN0IGluc3RhbmNlb2YgQW5jaG9yQ29udHJvbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ob3Jpem9udGFsVHJhY2VzLnB1c2gob2JqZWN0LnBvaW50LngpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNhbFRyYWNlcy5wdXNoKG9iamVjdC5wb2ludC55KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmhvcml6b250YWxUcmFjZXMgPSBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy5ob3Jpem9udGFsVHJhY2VzKSkuc29ydCgoYSwgYikgPT4gYSAtIGIpO1xyXG4gICAgICAgIHRoaXMudmVydGljYWxUcmFjZXMgPSBBcnJheS5mcm9tKG5ldyBTZXQodGhpcy52ZXJ0aWNhbFRyYWNlcykpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjbGVhcigpIHtcclxuICAgICAgICB0aGlzLmhvcml6b250YWxUcmFjZXMubGVuZ3RoID0gMDtcclxuICAgICAgICB0aGlzLnZlcnRpY2FsVHJhY2VzLmxlbmd0aCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDkuozliIbmn6Xmib7ov5HkvLzlgLxcclxuICAgICAqIEBwYXJhbSBkYXRhcyDmlbDmja7mupBcclxuICAgICAqIEBwYXJhbSB2YWx1ZSDmn6Xmib7nmoTov5HkvLzlgLxcclxuICAgICAqL1xyXG4gICAgcHVibGljIGJpbmFyeVNlYXJjaChhcnJheTogbnVtYmVyW10sIHRhcmdldE51bTogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICB2YXIgbWluID0gMDtcclxuICAgICAgICB2YXIgbWF4ID0gYXJyYXkubGVuZ3RoIC0gMTtcclxuICAgICAgICB3aGlsZSAobWluICE9IG1heCkge1xyXG4gICAgICAgICAgICB2YXIgbWlkSW5kZXggPSBNYXRoLnJvdW5kKChtYXggKyBtaW4pIC8gMik7XHJcbiAgICAgICAgICAgIHZhciBtaWQgPSAobWF4IC0gbWluKTtcclxuICAgICAgICAgICAgaWYgKHRhcmdldE51bSA9PT0gYXJyYXlbbWlkSW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXJyYXlbbWlkSW5kZXhdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0YXJnZXROdW0gPiBhcnJheVttaWRJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgIG1pbiA9IG1pZEluZGV4O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbWF4ID0gbWlkSW5kZXg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKG1pZCA8PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTWF0aC5hYnMoYXJyYXlbbWF4XSAtIHRhcmdldE51bSkgPj0gTWF0aC5hYnMoYXJyYXlbbWluXSAtIHRhcmdldE51bSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5W21pbl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYXJyYXlbbWF4XTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWQuOmZhOS4gOS4qui/keS8vOWAvFxyXG4gICAgICogQHBhcmFtIGluX291dF9Qb2ludCAg6KaB5p+l5om+55qE5Z2Q5qCH77yM5pyA5ZCO6L+U5ZueXHJcbiAgICAgKiBAcGFyYW0gbGVzc1ZhbHVlICAgICDlsI/kuo7ojIPlm7RcclxuICAgICAqIEBwYXJhbSByZXR1cm4gICAgICAgIFZlY3RvcjIgKHgseSkg6L+U5ZueIHgseei9tOWdkOagh+aYr+WQpuacieS/ruato1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgYWRzb3JwdGlvbihpbl9vdXRfUG9pbnQ6IFZlY3RvcjIsIGxlc3NWYWx1ZTogbnVtYmVyID0gMTUpOiBJVmVjdG9yMiB7XHJcbiAgICAgICAgdmFyIHJlc3VsdDogSVZlY3RvcjIgPSB7IHg6IG51bGwsIHk6IG51bGwgfTtcclxuICAgICAgICBsZXNzVmFsdWUgKj0gdGhpcy5kZXNpZ25lci5yZXM7XHJcbiAgICAgICAgdmFyIHggPSB0aGlzLmJpbmFyeVNlYXJjaCh0aGlzLmhvcml6b250YWxUcmFjZXMsIGluX291dF9Qb2ludC54KTtcclxuICAgICAgICB2YXIgeSA9IHRoaXMuYmluYXJ5U2VhcmNoKHRoaXMudmVydGljYWxUcmFjZXMsIGluX291dF9Qb2ludC55KTtcclxuICAgICAgICB2YXIgeF9kaXMgPSBNYXRoLmFicyh4IC0gaW5fb3V0X1BvaW50LngpO1xyXG4gICAgICAgIGlmICh4ICE9IG51bGwgJiYgeF9kaXMgPD0gbGVzc1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGluX291dF9Qb2ludC54ID0geDtcclxuICAgICAgICAgICAgcmVzdWx0LnggPSB4X2RpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgdmFyIHlfZGlzID0gTWF0aC5hYnMoeSAtIGluX291dF9Qb2ludC55KTtcclxuICAgICAgICBpZiAoeSAhPSBudWxsICYmIHlfZGlzIDw9IGxlc3NWYWx1ZSkge1xyXG4gICAgICAgICAgICBpbl9vdXRfUG9pbnQueSA9IHk7XHJcbiAgICAgICAgICAgIHJlc3VsdC55ID0geV9kaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSAnLi4vLi4vY29yZS9WZWN0b3IyJztcclxuXHJcbmV4cG9ydCBjbGFzcyBCb3VuZHMge1xyXG4gICAgcHVibGljIGxlZnQ6IG51bWJlcjtcclxuICAgIHB1YmxpYyB0b3A6IG51bWJlcjtcclxuICAgIHB1YmxpYyByaWdodDogbnVtYmVyO1xyXG4gICAgcHVibGljIGJvdHRvbTogbnVtYmVyO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgICAgIHRoaXMudG9wID0gdG9wO1xyXG4gICAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxuICAgICAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5yaWdodCAtIHRoaXMubGVmdDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmJvdHRvbSAtIHRoaXMudG9wO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDZW50ZXIoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMubGVmdCArIHRoaXMud2lkdGggLyAyLCB0aGlzLnRvcCArIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGV4dGVuZChib3VuZHM6IEJvdW5kcykge1xyXG4gICAgICAgIGlmICh0aGlzLmxlZnQgPiBib3VuZHMubGVmdCkge1xyXG4gICAgICAgICAgICB0aGlzLmxlZnQgPSBib3VuZHMubGVmdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMudG9wID4gYm91bmRzLnRvcCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvcCA9IGJvdW5kcy50b3A7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmJvdHRvbSA8IGJvdW5kcy5ib3R0b20pIHtcclxuICAgICAgICAgICAgdGhpcy5ib3R0b20gPSBib3VuZHMuYm90dG9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yaWdodCA8IGJvdW5kcy5yaWdodCkge1xyXG4gICAgICAgICAgICB0aGlzLnJpZ2h0ID0gYm91bmRzLnJpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBpbnRlcnNlY3QoYm91bmRzOiBCb3VuZHMpIHtcclxuICAgICAgICB2YXIgaW5MZWZ0ID0gKFxyXG4gICAgICAgICAgICAoKGJvdW5kcy5sZWZ0ID49IHRoaXMubGVmdCkgJiYgKGJvdW5kcy5sZWZ0IDw9IHRoaXMucmlnaHQpKSB8fCAoKHRoaXMubGVmdCA+PSBib3VuZHMubGVmdCkgJiYgKHRoaXMubGVmdCA8PSBib3VuZHMucmlnaHQpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIGluVG9wID0gKFxyXG4gICAgICAgICAgICAoKGJvdW5kcy50b3AgPj0gdGhpcy50b3ApICYmIChib3VuZHMudG9wIDw9IHRoaXMuYm90dG9tKSkgfHwgKCh0aGlzLnRvcCA+IGJvdW5kcy50b3ApICYmICh0aGlzLnRvcCA8IGJvdW5kcy5ib3R0b20pKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIGluUmlnaHQgPSAoXHJcbiAgICAgICAgICAgICgoYm91bmRzLnJpZ2h0ID49IHRoaXMubGVmdCkgJiYgKGJvdW5kcy5yaWdodCA8PSB0aGlzLnJpZ2h0KSkgfHwgKCh0aGlzLnJpZ2h0ID49IGJvdW5kcy5sZWZ0KSAmJiAodGhpcy5yaWdodCA8PSBib3VuZHMucmlnaHQpKVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdmFyIGluQm90dG9tID0gKFxyXG4gICAgICAgICAgICAoKGJvdW5kcy5ib3R0b20gPj0gdGhpcy50b3ApICYmIChib3VuZHMuYm90dG9tIDw9IHRoaXMuYm90dG9tKSkgfHwgKCh0aGlzLmJvdHRvbSA+PSBib3VuZHMudG9wKSAmJiAodGhpcy5ib3R0b20gPD0gYm91bmRzLmJvdHRvbSkpXHJcbiAgICAgICAgKTtcclxuICAgICAgICByZXR1cm4gKChpbkJvdHRvbSB8fCBpblRvcCkgJiYgKGluTGVmdCB8fCBpblJpZ2h0KSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGV4dGVuZEZyb21Qb2ludChwb2ludDogVmVjdG9yMikge1xyXG4gICAgICAgIGlmICh0aGlzLmxlZnQgPiBwb2ludC54KSB7XHJcbiAgICAgICAgICAgIHRoaXMubGVmdCA9IHBvaW50Lng7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRvcCA+IHBvaW50LnkpIHtcclxuICAgICAgICAgICAgdGhpcy50b3AgPSBwb2ludC55O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ib3R0b20gPCBwb2ludC55KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYm90dG9tID0gcG9pbnQueTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucmlnaHQgPCBwb2ludC54KSB7XHJcbiAgICAgICAgICAgIHRoaXMucmlnaHQgPSBwb2ludC54O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgY29udGFpbnMocG9pbnQ6IFZlY3RvcjIpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gcG9pbnQueCA+PSB0aGlzLmxlZnQgJiZcclxuICAgICAgICAgICAgcG9pbnQueCA8PSB0aGlzLnJpZ2h0ICYmXHJcbiAgICAgICAgICAgIHBvaW50LnkgPj0gdGhpcy50b3AgJiZcclxuICAgICAgICAgICAgcG9pbnQueSA8PSB0aGlzLmJvdHRvbTtcclxuICAgIH1cclxuXHJcblxyXG59IiwiaW1wb3J0IHsgSVZlY3RvcjIsIFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vY29yZS9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IFZlY3RvckRlc2lnbmVyIH0gZnJvbSBcIi4uL1ZlY3RvckRlc2lnbmVyXCI7XHJcbmltcG9ydCB7IEFuY2hvckNvbnRyb2wgfSBmcm9tIFwiLi4vVmlld3MvQW5jaG9yQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBQb2x5Z29uQ29udHJvbCB9IGZyb20gXCIuLi9WaWV3cy9Qb2x5Z29uQ29udHJvbFwiO1xyXG5pbXBvcnQgeyBDb250cm9sIH0gZnJvbSAnLi4vVmlld3MvQ29udHJvbCc7XHJcblxyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBDb25uZWN0b3Ige1xyXG4gICAgZGVzaWduZXI6IFZlY3RvckRlc2lnbmVyO1xyXG4gICAgb3JpZ2luOiBBbmNob3JDb250cm9sO1xyXG4gICAgbmV3QW5jaG9yOiBBbmNob3JDb250cm9sO1xyXG4gICAgbmV3U2VnbWVudDogUG9seWdvbkNvbnRyb2w7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGRlc2lnbmVyOiBWZWN0b3JEZXNpZ25lciwgb3JpZ2luOiBBbmNob3JDb250cm9sKSB7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lciA9IGRlc2lnbmVyO1xyXG4gICAgICAgIHRoaXMub3JpZ2luID0gb3JpZ2luO1xyXG4gICAgICAgIHZhciB2ID0gdGhpcy5kZXNpZ25lci5tYXBQb2ludCh0aGlzLmRlc2lnbmVyLnZpZXdDb250cm9sLnBvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLm5ld0FuY2hvciA9IHRoaXMuZGVzaWduZXIuY3JlYXRlQW5jaG9yKG51bGwsIHYueCwgdi55KTtcclxuICAgICAgICB0aGlzLm5ld1NlZ21lbnQgPSB0aGlzLmRlc2lnbmVyLmNyZWF0ZVBvbHlnb24obnVsbCwgb3JpZ2luLCB0aGlzLm5ld0FuY2hvciwgMTApO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIudmlydHVhbEN1cnNvciA9IHRoaXMubmV3QW5jaG9yO1xyXG4gICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgdXBkYXRlKGNhbnZhc1BvaW50PzogVmVjdG9yMiwgY29udHJvbD86IENvbnRyb2wpIHtcclxuICAgICAgICBsZXQgcG9zaXRpb246IFZlY3RvcjI7XHJcbiAgICAgICAgdmFyIHJlc3VsdDogSVZlY3RvcjI7XHJcbiAgICAgICAgaWYgKGNvbnRyb2wgaW5zdGFuY2VvZiBQb2x5Z29uQ29udHJvbCkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA9IGNvbnRyb2wuZ2V0U3ViUG9pbnQoY2FudmFzUG9pbnQpO1xyXG4gICAgICAgICAgICByZXN1bHQgPSBuZXcgVmVjdG9yMigxLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAoY2FudmFzUG9pbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA9IHRoaXMuZGVzaWduZXIubWFwUG9pbnQoY2FudmFzUG9pbnQpO1xyXG4gICAgICAgICAgICByZXN1bHQgPSB0aGlzLmRlc2lnbmVyLmFkc29yYi5hZHNvcnB0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3QW5jaG9yLnNldFBvc2l0aW9uKHBvc2l0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmRlc2lnbmVyLmhvcml6b250YWxMaW5lQ29sb3IgPSByZXN1bHQueSAhPSBudWxsID8gJyMwMDAwRkYnIDogJyMwMEZGMDAnO1xyXG4gICAgICAgICAgICB0aGlzLmRlc2lnbmVyLnZlcnRpY2FsTGluZUNvbG9yID0gcmVzdWx0LnggIT0gbnVsbCA/ICcjMDAwMEZGJyA6ICcjMDBGRjAwJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5uZXdBbmNob3IudXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5vcmlnaW4udXBkYXRlKCk7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5yZXF1ZXN0UmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBjb21taXQoaG92ZXI6IENvbnRyb2wsIHBvc2l0aW9uOiBWZWN0b3IyKSB7XHJcbiAgICAgICAgdmFyIHBvaW50ID0gdGhpcy5uZXdBbmNob3IucG9pbnQ7XHJcbiAgICAgICAgdmFyIGFuY2hvciA9IHRoaXMuZGVzaWduZXIuX2NoaWxkcmVuLmZpbmQoZSA9PiBlIGluc3RhbmNlb2YgQW5jaG9yQ29udHJvbCAmJiBlLmFuY2hvci54ID09PSBwb2ludC54ICYmIGUuYW5jaG9yLnkgPT09IHBvaW50LnkpIGFzIEFuY2hvckNvbnRyb2w7XHJcbiAgICAgICAgaWYgKGhvdmVyIGluc3RhbmNlb2YgQW5jaG9yQ29udHJvbCkge1xyXG4gICAgICAgICAgICBhbmNob3IgPSBob3ZlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGhvdmVyIGluc3RhbmNlb2YgUG9seWdvbkNvbnRyb2wpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdTZWdtZW50LnJlbW92ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMubmV3QW5jaG9yLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICAvLyBzcGxpdFxyXG4gICAgICAgICAgICB0aGlzLm5ld0FuY2hvciA9IGhvdmVyLnNwbGl0KHRoaXMuZGVzaWduZXIudmlld0NvbnRyb2wucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAvLyBtZXJhZ2VcclxuICAgICAgICAgICAgdGhpcy5uZXdTZWdtZW50ID0gdGhpcy5kZXNpZ25lci5jcmVhdGVQb2x5Z29uKG51bGwsIHRoaXMub3JpZ2luLCB0aGlzLm5ld0FuY2hvciwgMTApO1xyXG4gICAgICAgICAgICB0aGlzLm5ld0FuY2hvci51cGRhdGUoKTtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW4udXBkYXRlKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChhbmNob3IgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvKiBjb25uZWN0IHRvIG9sZCBhbmNob3IgLCByZW1vdmUgbmV3IGFuY2hvciBhbmQgIHNlZ21lbnQgKi9cclxuICAgICAgICAgICAgdGhpcy5uZXdTZWdtZW50LnJlbW92ZShmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMubmV3QW5jaG9yLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm5ld0FuY2hvciA9IGFuY2hvcjtcclxuICAgICAgICAgICAgLyogdXNlIG9sZCBhbmNob3IgY3JlYXRlIG5ldyBhbmNob3IgKi9cclxuICAgICAgICAgICAgdGhpcy5uZXdTZWdtZW50ID0gdGhpcy5kZXNpZ25lci5jcmVhdGVQb2x5Z29uKG51bGwsIHRoaXMub3JpZ2luLCB0aGlzLm5ld0FuY2hvciwgMTApO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAvKiBhZGQgb2JqZWN0cyB0byBkZXNpZ25lciAqL1xyXG4gICAgICAgICAgICB0aGlzLmRlc2lnbmVyLmFkZCh0aGlzLm5ld0FuY2hvciwgdGhpcy5uZXdTZWdtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5hZGQodGhpcy5uZXdBbmNob3IsIHRoaXMubmV3U2VnbWVudCk7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci5zZWxlY3RlZCA9IHRoaXMubmV3QW5jaG9yO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW5kZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMubmV3U2VnbWVudCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubmV3U2VnbWVudC5yZW5kZXIoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubmV3QW5jaG9yICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5uZXdBbmNob3IucmVuZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBjYW5jZWwoKSB7XHJcbiAgICAgICAgdGhpcy5uZXdTZWdtZW50LnJlbW92ZShmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5uZXdBbmNob3IucmVtb3ZlKCk7XHJcbiAgICAgICAgdGhpcy5uZXdTZWdtZW50ID0gbnVsbDtcclxuICAgICAgICB0aGlzLm5ld0FuY2hvciA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vcmlnaW4udXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG5cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vY29yZS9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IFJlbmRlcmVyLCBUZXh0QWxpZ24gfSBmcm9tIFwiLi4vUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yRGVzaWduZXIgfSBmcm9tIFwiLi4vVmVjdG9yRGVzaWduZXJcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgSG9yaXpvbnRhbFJ1bGVyIHtcclxuICAgIHByaXZhdGUgX2NhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGRlc2lnbmVyOiBWZWN0b3JEZXNpZ25lcjtcclxuICAgIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjtcclxuICAgIHByaXZhdGUgX25lZWRVcGRhdGU6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF93aWR0aDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfaGVpZ2h0OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoZGVzaWduZXI6IFZlY3RvckRlc2lnbmVyLCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KSB7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lciA9IGRlc2lnbmVyO1xyXG4gICAgICAgIHRoaXMuX2NhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICB0aGlzLl9uZWVkVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlciA9IG5ldyBSZW5kZXJlcihjYW52YXMpO1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIub25SZW5kZXIuYWRkKHRoaXMucmVuZGVyLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLnZpZXdDb250cm9sLm9ubW92ZS5hZGQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLl9uZWVkVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9LCB0aGlzKTtcclxuICAgICAgICB0aGlzLl9jYW52YXMub25jb250ZXh0bWVudSA9IChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucmVzaXplKCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlc2l6ZSgpIHtcclxuICAgICAgICB0aGlzLl93aWR0aCA9IHRoaXMuX2NhbnZhcy5jbGllbnRXaWR0aDtcclxuICAgICAgICB0aGlzLl9oZWlnaHQgPSB0aGlzLl9jYW52YXMuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnJlc2l6ZSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIHByaXZhdGUgcmVuZGVyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5fbmVlZFVwZGF0ZSkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuX25lZWRVcGRhdGUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgZGVzaWduZXJsZW5ndGggPSB0aGlzLmRlc2lnbmVyLmJvdW5kcy5yaWdodCAtIHRoaXMuZGVzaWduZXIuYm91bmRzLmxlZnQ7XHJcbiAgICAgICAgdmFyIG9mZnNldCA9IHRoaXMuZGVzaWduZXIuY2VudGVyLnggJSAoZGVzaWduZXJsZW5ndGggLyB0aGlzLndpZHRoICogMTAwKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zdHJva2VDb2xvciA9ICcjZmZmZmZmJztcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5maWxsQ29sb3IgPSAnI2ZmZmZmZic7XHJcbiAgICAgICAgdmFyIGNlbnRlciA9IHRoaXMud2lkdGggLyAyO1xyXG4gICAgICAgIHZhciBvZmZzZXRDZW50ZXIgPSB0aGlzLmRlc2lnbmVyLmNlbnRlci54IC8gdGhpcy5kZXNpZ25lci5yZXM7XHJcbiAgICAgICAgdmFyIG9mZnNldENhbGlicmF0aW9uID0gb2Zmc2V0IC8gdGhpcy5kZXNpZ25lci5yZXM7XHJcbiAgICAgICAgdmFyIGNlbnRlcm9mZnNldCA9IGNlbnRlciAtIG9mZnNldENhbGlicmF0aW9uO1xyXG4gICAgICAgIHZhciBwb3MgPSAwO1xyXG4gICAgICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuY2xlYXIoKTtcclxuICAgICAgICB3aGlsZSAoY2VudGVyb2Zmc2V0ICsgcG9zIDwgdGhpcy53aWR0aCB8fCBjZW50ZXJvZmZzZXQgLSBwb3MgPiAwKSB7XHJcbiAgICAgICAgICAgIGlmIChjZW50ZXJvZmZzZXQgKyBwb3MgPCB0aGlzLndpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcFZhbHVlOiBudW1iZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ICUgMTAgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwVmFsdWUgPSAob2Zmc2V0Q2VudGVyIC0gb2Zmc2V0Q2FsaWJyYXRpb24gKyBwb3MpICogdGhpcy5kZXNpZ25lci5yZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgcFZhbHVlID0gTnVtYmVyLnBhcnNlRmxvYXQocFZhbHVlLnRvRml4ZWQoMikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3Q2FsaWJyYXRpb24oY2VudGVyb2Zmc2V0ICsgcG9zLCBwVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChjZW50ZXJvZmZzZXQgLSBwb3MgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcFZhbHVlOiBudW1iZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ICUgMTAgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBwVmFsdWUgPSAob2Zmc2V0Q2VudGVyIC0gb2Zmc2V0Q2FsaWJyYXRpb24gLSBwb3MpICogdGhpcy5kZXNpZ25lci5yZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgcFZhbHVlID0gTnVtYmVyLnBhcnNlRmxvYXQocFZhbHVlLnRvRml4ZWQoMikpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kcmF3Q2FsaWJyYXRpb24oY2VudGVyb2Zmc2V0IC0gcG9zLCBwVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHBvcyArPSAxMDtcclxuICAgICAgICAgICAgY291bnQrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogZml4ZWQgdHJpYW5nbGUgcG9pbnRlclxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmZpbGxDb2xvciA9ICcjMzMzMzMzJ1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmZpbGxQYXRoKFtuZXcgVmVjdG9yMihjZW50ZXIgLSA1LCAwKSwgbmV3IFZlY3RvcjIoY2VudGVyICsgNSwgMCksIG5ldyBWZWN0b3IyKGNlbnRlciwgMTApXSwgdHJ1ZSk7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc3Ryb2tlQ29sb3IgPSAnI2FhYWFhYSdcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zdHJva2VQYXRoKFtuZXcgVmVjdG9yMihjZW50ZXIgLSA1LCAwKSwgbmV3IFZlY3RvcjIoY2VudGVyICsgNSwgMCksIG5ldyBWZWN0b3IyKGNlbnRlciwgMTApXSwgdHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBkcmF3IHJ1bGVyIGNhbGlicmF0aW9uXHJcbiAgICAgKiBAcGFyYW0geCBcclxuICAgICAqIEBwYXJhbSB2YWx1ZSBcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkcmF3Q2FsaWJyYXRpb24oeDogbnVtYmVyLCB2YWx1ZT86IG51bWJlcikge1xyXG4gICAgICAgIHZhciBjYWxpYnJhdGlvbiA9IHRoaXMuaGVpZ2h0IC8gMztcclxuICAgICAgICBpZiAodmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci5maWxsVGV4dCh2YWx1ZS50b1N0cmluZygpLCB4LCB0aGlzLmhlaWdodCAqIDAuOCwgbnVsbCwgVGV4dEFsaWduLkNFTlRFUik7XHJcbiAgICAgICAgICAgIGNhbGlicmF0aW9uID0gdGhpcy5oZWlnaHQgLyAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5saW5lKHgsIDAsIHgsIGNhbGlicmF0aW9uLCAxKTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXQgd2lkdGgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fd2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBoZWlnaHQoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5faGVpZ2h0O1xyXG4gICAgfVxyXG5cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi4vLi4vY29yZS9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IFJlbmRlcmVyLCBUZXh0QWxpZ24gfSBmcm9tIFwiLi4vUmVuZGVyZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yRGVzaWduZXIgfSBmcm9tIFwiLi4vVmVjdG9yRGVzaWduZXJcIjtcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmVydGljYWxSdWxlciB7XHJcbiAgICBwcml2YXRlIF9jYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBkZXNpZ25lcjogVmVjdG9yRGVzaWduZXI7XHJcbiAgICBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXI7XHJcbiAgICBwcml2YXRlIF9uZWVkVXBkYXRlOiBib29sZWFuO1xyXG4gICAgcHJpdmF0ZSBfd2lkdGg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX2hlaWdodDogbnVtYmVyO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKGRlc2lnbmVyOiBWZWN0b3JEZXNpZ25lciwgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCkge1xyXG4gICAgICAgIHRoaXMuZGVzaWduZXIgPSBkZXNpZ25lcjtcclxuICAgICAgICB0aGlzLl9jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgICAgdGhpcy5fbmVlZFVwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoY2FudmFzKTtcclxuICAgICAgICB0aGlzLmRlc2lnbmVyLm9uUmVuZGVyLmFkZCh0aGlzLnJlbmRlciwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5kZXNpZ25lci52aWV3Q29udHJvbC5vbm1vdmUuYWRkKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fbmVlZFVwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfSwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5fY2FudmFzLm9uY29udGV4dG1lbnUgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnJlc2l6ZSgpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHJpdmF0ZSByZXNpemUoKSB7XHJcbiAgICAgICAgdGhpcy5fd2lkdGggPSB0aGlzLl9jYW52YXMuY2xpZW50V2lkdGg7XHJcbiAgICAgICAgdGhpcy5faGVpZ2h0ID0gdGhpcy5fY2FudmFzLmNsaWVudEhlaWdodDtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5yZXNpemUodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICBwcml2YXRlIHJlbmRlcigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX25lZWRVcGRhdGUpIHJldHVybjtcclxuICAgICAgICB0aGlzLl9uZWVkVXBkYXRlID0gZmFsc2U7XHJcbiAgICAgICAgdmFyIGRlc2lnbmVybGVuZ3RoID0gdGhpcy5kZXNpZ25lci5ib3VuZHMuYm90dG9tIC0gdGhpcy5kZXNpZ25lci5ib3VuZHMudG9wO1xyXG4gICAgICAgIHZhciBvZmZzZXQgPSB0aGlzLmRlc2lnbmVyLmNlbnRlci55ICUgKGRlc2lnbmVybGVuZ3RoIC8gdGhpcy5oZWlnaHQgKiAxMDApO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnN0cm9rZUNvbG9yID0gJyMwMDAwMDAnO1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmZpbGxDb2xvciA9ICcjMDAwMDAwJztcclxuICAgICAgICB2YXIgY2VudGVyID0gdGhpcy5oZWlnaHQgLyAyO1xyXG4gICAgICAgIHZhciBvZmZzZXRDZW50ZXIgPSB0aGlzLmRlc2lnbmVyLmNlbnRlci55IC8gdGhpcy5kZXNpZ25lci5yZXM7XHJcbiAgICAgICAgdmFyIG9mZnNldENhbGlicmF0aW9uID0gb2Zmc2V0IC8gdGhpcy5kZXNpZ25lci5yZXM7XHJcbiAgICAgICAgdmFyIGNlbnRlcm9mZnNldCA9IGNlbnRlciAtIG9mZnNldENhbGlicmF0aW9uO1xyXG4gICAgICAgIHZhciBwb3MgPSAwO1xyXG4gICAgICAgIHZhciBjb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuY2xlYXIoKTtcclxuICAgICAgICB3aGlsZSAoY2VudGVyb2Zmc2V0ICsgcG9zIDwgdGhpcy5oZWlnaHQgfHwgY2VudGVyb2Zmc2V0IC0gcG9zID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoY2VudGVyb2Zmc2V0ICsgcG9zIDwgdGhpcy5oZWlnaHQpIHtcclxuICAgICAgICAgICAgICAgIHZhciBwVmFsdWU6IG51bWJlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgJSAxMCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBWYWx1ZSA9IChvZmZzZXRDZW50ZXIgLSBvZmZzZXRDYWxpYnJhdGlvbiArIHBvcykgKiB0aGlzLmRlc2lnbmVyLnJlcztcclxuICAgICAgICAgICAgICAgICAgICBwVmFsdWUgPSBOdW1iZXIucGFyc2VGbG9hdChwVmFsdWUudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdDYWxpYnJhdGlvbihjZW50ZXJvZmZzZXQgKyBwb3MsIHBWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNlbnRlcm9mZnNldCAtIHBvcyA+IDApIHtcclxuICAgICAgICAgICAgICAgIHZhciBwVmFsdWU6IG51bWJlciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoY291bnQgJSAxMCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBWYWx1ZSA9IChvZmZzZXRDZW50ZXIgLSBvZmZzZXRDYWxpYnJhdGlvbiAtIHBvcykgKiB0aGlzLmRlc2lnbmVyLnJlcztcclxuICAgICAgICAgICAgICAgICAgICBwVmFsdWUgPSBOdW1iZXIucGFyc2VGbG9hdChwVmFsdWUudG9GaXhlZCgyKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRyYXdDYWxpYnJhdGlvbihjZW50ZXJvZmZzZXQgLSBwb3MsIHBWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcG9zICs9IDEwO1xyXG4gICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBmaXhlZCB0cmlhbmdsZSBwb2ludGVyXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuZmlsbENvbG9yID0gJyMzMzMzMzMnXHJcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuZmlsbFBhdGgoW25ldyBWZWN0b3IyKDAsIGNlbnRlciAtIDUpLCBuZXcgVmVjdG9yMigwLCBjZW50ZXIgKyA1KSwgbmV3IFZlY3RvcjIoMTAsIGNlbnRlcildLCB0cnVlKTtcclxuICAgICAgICB0aGlzLl9yZW5kZXJlci5zdHJva2VDb2xvciA9ICcjYWFhYWFhJ1xyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnN0cm9rZVBhdGgoW25ldyBWZWN0b3IyKDAsIGNlbnRlciAtIDUpLCBuZXcgVmVjdG9yMigwLCBjZW50ZXIgKyA1KSwgbmV3IFZlY3RvcjIoMTAsIGNlbnRlcildLCB0cnVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGRyYXcgcnVsZXIgY2FsaWJyYXRpb25cclxuICAgICAqIEBwYXJhbSB4IFxyXG4gICAgICogQHBhcmFtIHZhbHVlIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGRyYXdDYWxpYnJhdGlvbih5OiBudW1iZXIsIHZhbHVlPzogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIGNhbGlicmF0aW9uID0gdGhpcy53aWR0aCAvIDM7XHJcbiAgICAgICAgaWYgKHZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmVuZGVyZXIudHJhbnNsYXRlUm90YXRlKHRoaXMud2lkdGggKiAwLjgsIHksIDI3MCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3JlbmRlcmVyLmZpbGxUZXh0KHZhbHVlLnRvU3RyaW5nKCksIHRoaXMud2lkdGggKiAwLjgsIHksIG51bGwsIFRleHRBbGlnbi5DRU5URVIpO1xyXG4gICAgICAgICAgICB0aGlzLl9yZW5kZXJlci50cmFuc2xhdGVSb3RhdGUodGhpcy53aWR0aCAqIDAuOCwgeSwgLTI3MCk7XHJcbiAgICAgICAgICAgIGNhbGlicmF0aW9uID0gdGhpcy53aWR0aCAvIDI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLmxpbmUoMCwgeSwgY2FsaWJyYXRpb24sIHksIDEpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG4gICAgcHVibGljIGdldCB3aWR0aCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl93aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGhlaWdodCgpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9oZWlnaHQ7XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgU2VnbWVudCB9IGZyb20gXCIuL1NlZ21lbnRcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuL1ZlY3RvcjJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmNob3Ige1xyXG4gICAgcHVibGljIGlkOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIF9wb2ludDogVmVjdG9yMjtcclxuICAgIHByaXZhdGUgX3RhcmdldHM6IEFuY2hvcltdO1xyXG4gICAgcHJpdmF0ZSBfbWFwOiBNYXA8QW5jaG9yLCBTZWdtZW50PjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLl9wb2ludCA9IG5ldyBWZWN0b3IyKHgsIHkpOy8vLnJvdW5kKCk7XHJcbiAgICAgICAgdGhpcy5fdGFyZ2V0cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX21hcCA9IG5ldyBNYXAoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHgoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9pbnQueDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHkoKTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9pbnQueTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBwb2ludCgpOiBWZWN0b3IyIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcG9pbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCB0YXJnZXRzKCk6IEFuY2hvcltdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGFyZ2V0cztcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHNldFBvc2l0aW9uKHY6IFZlY3RvcjIpIHtcclxuICAgICAgICB0aGlzLl9wb2ludC54ID0gdi54O1xyXG4gICAgICAgIHRoaXMuX3BvaW50LnkgPSB2Lnk7XHJcbiAgICAgICAgdGhpcy5fcG9pbnQucm91bmQ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIHJlbW92ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fdGFyZ2V0cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSBhbGwgc2VnbWVudHMgYW5kIHNlbGZcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuX3RhcmdldHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFuY2hvciA9IHRoaXMuX3RhcmdldHMuc2hpZnQoKTtcclxuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gdGhpcy5fbWFwLmdldChhbmNob3IpO1xyXG4gICAgICAgICAgICAgICAgc2VnbWVudC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhZGQgY29ubmVjdGlvbiB0YXJnZXRcclxuICAgICAqIEBwYXJhbSBvYmplY3QgIHRhcmdldFxyXG4gICAgICogQHBhcmFtIHNlZ21lbnQgIHNlZ21lbnQgb2JlamN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBhZGRUYXJnZXQob2JqZWN0OiBBbmNob3IsIHNlZ21lbnQ6IFNlZ21lbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuX21hcC5oYXMob2JqZWN0KSkge1xyXG4gICAgICAgICAgICB0aGlzLl90YXJnZXRzLnB1c2gob2JqZWN0KTtcclxuICAgICAgICAgICAgdGhpcy5fbWFwLnNldChvYmplY3QsIHNlZ21lbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlVGFyZ2V0KG9iamVjdDogQW5jaG9yKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX21hcC5oYXMob2JqZWN0KSkge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXAuZGVsZXRlKG9iamVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBpbmRleCA9IHRoaXMuX3RhcmdldHMuaW5kZXhPZihvYmplY3QpO1xyXG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3RhcmdldHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBidWlsZCBzZWdtZW50cyBwYXRocyBcclxuICAgICAqL1xyXG4gICAgcHVibGljIGJ1aWxkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl90YXJnZXRzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgLyogc29ydCBwb2ludHMgYnkgY2xvY2t3aXNlICovXHJcbiAgICAgICAgICAgIFZlY3RvcjIuY2xvY2t3aXNlU29ydFBvaW50cyh0aGlzLl90YXJnZXRzLCB0aGlzKTtcclxuICAgICAgICAgICAgLyogZ2VuZXJhdGUgcG9pbnRzICovXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fdGFyZ2V0cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGN1ciA9IGk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV4dCA9IChpICsgMSkgJSB0aGlzLl90YXJnZXRzLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHZhciBhbmNob3IgPSB0aGlzLl90YXJnZXRzW2N1cl07XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV4dGFuY2hvciA9IHRoaXMuX3RhcmdldHNbbmV4dF07XHJcbiAgICAgICAgICAgICAgICAvKiBnZW5lcmF0ZSBlZGdlIHBvaW50cyAqL1xyXG4gICAgICAgICAgICAgICAgdmFyIGVkZ2VfcGF0aCA9IHRoaXMuZ2VuZXJhdGVFZGdlUG9pbnRzKGFuY2hvciwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbmV4dEVkZ2VfcGF0aCA9IHRoaXMuZ2VuZXJhdGVFZGdlUG9pbnRzKG5leHRhbmNob3IsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIC8qIGdldCBlZGdlcyBpbnRlcnNlY3Rpb24gcG9pbnQqL1xyXG4gICAgICAgICAgICAgICAgdmFyIGludGVyc2VjdGlvblBvaW50ID0gVmVjdG9yMi5nZXRJbnRlcnNlY3Rpb24oZWRnZV9wYXRoWzBdLCBlZGdlX3BhdGhbMV0sIG5leHRFZGdlX3BhdGhbMF0sIG5leHRFZGdlX3BhdGhbMV0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGludGVyc2VjdGlvblBvaW50ID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyogZ2V0IHByb2plY3RpdmUgcG9pbnQgKi9cclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3Rpb25Qb2ludCA9IFZlY3RvcjIuZ2V0UHJvamVjdGl2ZVBvaW50KGVkZ2VfcGF0aFswXSwgZWRnZV9wYXRoWzFdLCB0aGlzLnBvaW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGludGVyc2VjdGlvblBvaW50LnJvdW5kNCgpO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNlZ21lbnQgPSB0aGlzLl9tYXAuZ2V0KGFuY2hvcik7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9pbnRzID0gc2VnbWVudC5nZXRQb3J0KHRoaXMpO1xyXG4gICAgICAgICAgICAgICAgcG9pbnRzWzFdID0gdGhpcy5wb2ludC5jbG9uZSgpO1xyXG4gICAgICAgICAgICAgICAgcG9pbnRzWzBdID0gaW50ZXJzZWN0aW9uUG9pbnQ7XHJcbiAgICAgICAgICAgICAgICBzZWdtZW50ID0gdGhpcy5fbWFwLmdldChuZXh0YW5jaG9yKTtcclxuICAgICAgICAgICAgICAgIHBvaW50cyA9IHNlZ21lbnQuZ2V0UG9ydCh0aGlzKTtcclxuICAgICAgICAgICAgICAgIHBvaW50c1syXSA9IGludGVyc2VjdGlvblBvaW50O1xyXG4gICAgICAgICAgICAgICAgcG9pbnRzWzFdID0gdGhpcy5wb2ludC5jbG9uZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX3RhcmdldHMubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgIHZhciBhbmNob3IgPSB0aGlzLl90YXJnZXRzWzBdO1xyXG4gICAgICAgICAgICB2YXIgc2VnbWVudCA9IHRoaXMuX21hcC5nZXQoYW5jaG9yKTtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5wb2ludDtcclxuICAgICAgICAgICAgdmFyIGVuZCA9IGFuY2hvci5wb2ludDtcclxuICAgICAgICAgICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuMigoZW5kLnkgLSBzdGFydC55KSwgKGVuZC54IC0gc3RhcnQueCkpO1xyXG4gICAgICAgICAgICB2YXIgdGhldGEgPSBhbmdsZSAqICgxODAgLyBNYXRoLlBJKTtcclxuICAgICAgICAgICAgdmFyIHBzID0gbmV3IFZlY3RvcjIoc3RhcnQueCArIHNlZ21lbnQudGhpY2tuZXNzIC8gMiwgc3RhcnQueSk7XHJcbiAgICAgICAgICAgIHZhciBsZWZ0X3BvaW50ID0gcHMucm90YXRlUG9pbnQoc3RhcnQsIHRoZXRhIC0gOTApO1xyXG4gICAgICAgICAgICB2YXIgcmlnaHRfcG9pbnQgPSBwcy5yb3RhdGVQb2ludChzdGFydCwgdGhldGEgKyA5MCk7XHJcbiAgICAgICAgICAgIHZhciBwb2ludHMgPSBzZWdtZW50LmdldFBvcnQodGhpcyk7XHJcbiAgICAgICAgICAgIHBvaW50c1swXSA9IGxlZnRfcG9pbnQucm91bmQ0KCk7XHJcbiAgICAgICAgICAgIHBvaW50c1sxXSA9IHRoaXMucG9pbnQuY2xvbmUoKTtcclxuICAgICAgICAgICAgcG9pbnRzWzJdID0gcmlnaHRfcG9pbnQucm91bmQ0KCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdlbmVyYXRlIHRoZSBlZGdlIG9uIGJvdGggc2lkZXMgb2YgdGhlIHBhdGhcclxuICAgICAqIEBwYXJhbSB0YXJnZXQgIHRhcmdldCBcclxuICAgICAqIEBwYXJhbSByaWdodCAgIGlzIHJpZ2h0ICBlZGdlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2VuZXJhdGVFZGdlUG9pbnRzKHRhcmdldDogQW5jaG9yLCByaWdodDogYm9vbGVhbiA9IHRydWUpOiBWZWN0b3IyW10ge1xyXG4gICAgICAgIHZhciBldWxyID0gcmlnaHQgPyA5MCA6IC05MDs7XHJcbiAgICAgICAgdmFyIHNlZ21lbnQgPSB0aGlzLl9tYXAuZ2V0KHRhcmdldCk7XHJcbiAgICAgICAgdmFyIHN0YXJ0ID0gdGhpcy5wb2ludDtcclxuICAgICAgICB2YXIgZW5kID0gdGFyZ2V0LnBvaW50O1xyXG4gICAgICAgIHZhciBvZmYgPSBzZWdtZW50LnRoaWNrbmVzcyAvIDI7XHJcbiAgICAgICAgdmFyIGFuZ2xlID0gTWF0aC5hdGFuMigoZW5kLnkgLSBzdGFydC55KSwgKGVuZC54IC0gc3RhcnQueCkpO1xyXG4gICAgICAgIHZhciB0aGV0YSA9IGFuZ2xlICogKDE4MCAvIE1hdGguUEkpO1xyXG4gICAgICAgIHZhciBwcyA9IG5ldyBWZWN0b3IyKHN0YXJ0LnggKyBvZmYsIHN0YXJ0LnkpO1xyXG4gICAgICAgIHZhciBwZSA9IG5ldyBWZWN0b3IyKGVuZC54ICsgb2ZmLCBlbmQueSk7XHJcbiAgICAgICAgdmFyIGxlZnRfcG9pbnQgPSBwcy5yb3RhdGVQb2ludChzdGFydCwgdGhldGEgLSBldWxyKTtcclxuICAgICAgICB2YXIgcmlnaHRfcG9pbnQgPSBwZS5yb3RhdGVQb2ludChlbmQsIHRoZXRhIC0gZXVscik7XHJcbiAgICAgICAgcmV0dXJuIFtsZWZ0X3BvaW50LCByaWdodF9wb2ludF07XHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IHsgQW5jaG9yIH0gZnJvbSBcIi4vQW5jaG9yXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi9WZWN0b3IyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2VnbWVudCB7XHJcbiAgICBwdWJsaWMgaWQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgX3RoaWNrbmVzczogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBfc3RhcnQ6IEFuY2hvcjtcclxuICAgIHByaXZhdGUgX2VuZDogQW5jaG9yO1xyXG4gICAgcHJpdmF0ZSBfcG9pbnRzOiBWZWN0b3IyW11bXTtcclxuXHJcblxyXG4gICAgcHVibGljIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmUoKTtcclxuICAgICAgICBpZiAodGhpcy5fcG9pbnRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3BvaW50cy5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLl9wb2ludHMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJlbW92ZSB0aGlzIHNlZ21lbnQgZnJvbSBncmFwaGljXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZW1vdmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3N0YXJ0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0YXJ0LnJlbW92ZVRhcmdldCh0aGlzLl9lbmQpO1xyXG4gICAgICAgICAgICB0aGlzLl9lbmQucmVtb3ZlVGFyZ2V0KHRoaXMuX3N0YXJ0KTtcclxuICAgICAgICAgICAgdGhpcy5fZW5kID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fc3RhcnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGdldCBwb2ludHMoKTogbnVtYmVyW11bXSB7XHJcbiAgICAgICAgdmFyIGFycnk6IG51bWJlcltdW10gPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBvIG9mIHRoaXMuX3BvaW50c1swXSkge1xyXG4gICAgICAgICAgICBhcnJ5LnB1c2goW28ueCwgby55XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAodmFyIG8gb2YgdGhpcy5fcG9pbnRzWzFdKSB7XHJcbiAgICAgICAgICAgIGFycnkucHVzaChbby54LCBvLnldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFycnk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBnZXRQb3J0KGFuY2hvcjogQW5jaG9yKTogVmVjdG9yMltdIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQgPT09IGFuY2hvcilcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3BvaW50c1swXTtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wb2ludHNbMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHN0YXJ0OiBBbmNob3IsIGVuZDogQW5jaG9yLCB0aGlja25lc3M6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0ID0gc3RhcnQ7XHJcbiAgICAgICAgdGhpcy5fZW5kID0gZW5kO1xyXG4gICAgICAgIHRoaXMuX3RoaWNrbmVzcyA9IHRoaWNrbmVzcztcclxuICAgICAgICB0aGlzLl9wb2ludHMgPSBbXTtcclxuICAgICAgICB0aGlzLl9wb2ludHMucHVzaChbXSwgW10pO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0LmFkZFRhcmdldCh0aGlzLl9lbmQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2VuZC5hZGRUYXJnZXQodGhpcy5fc3RhcnQsIHRoaXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgdGhpY2tuZXNzKCk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RoaWNrbmVzcztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0IHRoaWNrbmVzcyh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5fdGhpY2tuZXNzID0gdmFsdWU7XHJcbiAgICB9XHJcblxyXG5cclxufSIsIlxyXG5leHBvcnQgaW50ZXJmYWNlIElWZWN0b3IyIHtcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjIge1xyXG5cclxuICAgIHB1YmxpYyB4OiBudW1iZXI7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyO1xyXG5cclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoX3g/OiBudW1iZXIsIF95PzogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0gX3ggPyBfeCA6IDA7XHJcbiAgICAgICAgdGhpcy55ID0gX3kgPyBfeSA6IDA7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyByb3VuZDQoKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0gKHRoaXMueCAqIDEwMDAwIHwgMCkgLyAxMDAwMDtcclxuICAgICAgICB0aGlzLnkgPSAodGhpcy55ICogMTAwMDAgfCAwKSAvIDEwMDAwO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByb3VuZDIoKTogdGhpcyB7XHJcbiAgICAgICAgdGhpcy54ID0gKHRoaXMueCAqIDEwMCB8IDApIC8gMTAwO1xyXG4gICAgICAgIHRoaXMueSA9ICh0aGlzLnkgKiAxMDAgfCAwKSAvIDEwMDtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIHJvdW5kMCgpOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSB0aGlzLnggfCAwO1xyXG4gICAgICAgIHRoaXMueSA9IHRoaXMueSB8IDA7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBpbkNpcmNsZShjZW50ZXI6IFZlY3RvcjIsIHJhZGl1czogbnVtYmVyKSB7XHJcbiAgICAgICAgdmFyIGRpc3RhbmNlID0gdGhpcy5kaXN0YW5jZVRvKGNlbnRlcik7XHJcbiAgICAgICAgcmV0dXJuIGRpc3RhbmNlIDwgcmFkaXVzO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgZnJvbUFycmF5KHZhbHVlczogbnVtYmVyW10pOiB0aGlzIHtcclxuICAgICAgICB0aGlzLnggPSB2YWx1ZXNbMF07XHJcbiAgICAgICAgdGhpcy55ID0gdmFsdWVzWzFdO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWIodjogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLnggLSB2LngsIHRoaXMueSAtIHYueSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZCh2OiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueCArIHYueCwgdGhpcy55ICsgdi55KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xvbmUoKTogVmVjdG9yMiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueCwgdGhpcy55KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29weSh2OiBWZWN0b3IyKSB7XHJcbiAgICAgICAgdGhpcy54ID0gdi54O1xyXG4gICAgICAgIHRoaXMueSA9IHYueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOWIpOaWreW9k+WJjeeCueaYr+WQpuS9jeS6juWkmui+ueW9ouWGhVxyXG4gICAgICogQHBhcmFtIHBvbHlnb24g5aSa6L655b2iXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpblBvbHlnb24ocG9seWdvbjogVmVjdG9yMltdKTogYm9vbGVhbiB7XHJcbiAgICAgICAgbGV0IHN1bSA9IDA7XHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBwb2x5Z29uLmxlbmd0aCwgaiA9IGwgLSAxOyBpIDwgbDsgaiA9IGksIGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBzeCA9IHBvbHlnb25baV0ueDtcclxuICAgICAgICAgICAgY29uc3Qgc3kgPSBwb2x5Z29uW2ldLnk7XHJcbiAgICAgICAgICAgIGNvbnN0IHR4ID0gcG9seWdvbltqXS54O1xyXG4gICAgICAgICAgICBjb25zdCB0eSA9IHBvbHlnb25bal0ueTtcclxuICAgICAgICAgICAgLy8g54K55LiO5aSa6L655b2i6aG254K56YeN5ZCI5oiW5Zyo5aSa6L655b2i55qE6L655LiKXHJcbiAgICAgICAgICAgIGlmICgoc3ggLSB0aGlzLngpICogKHRoaXMueCAtIHR4KSA+PSAwICYmIChzeSAtIHRoaXMueSkgKiAodGhpcy55IC0gdHkpID49IDAgJiYgKHRoaXMueCAtIHN4KSAqICh0eSAtIHN5KSA9PT0gKHRoaXMueSAtIHN5KSAqICh0eCAtIHN4KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8g54K55LiO55u46YK76aG254K56L+e57q/55qE5aS56KeSXHJcbiAgICAgICAgICAgIHZhciBhbmdsZSA9IE1hdGguYXRhbjIoc3kgLSB0aGlzLnksIHN4IC0gdGhpcy54KSAtIE1hdGguYXRhbjIodHkgLSB0aGlzLnksIHR4IC0gdGhpcy54KTtcclxuICAgICAgICAgICAgLy8g56Gu5L+d5aS56KeS5LiN6LaF5Ye65Y+W5YC86IyD5Zu077yILc+AIOWIsCDPgO+8iVxyXG4gICAgICAgICAgICBpZiAoYW5nbGUgPj0gTWF0aC5QSSkge1xyXG4gICAgICAgICAgICAgICAgYW5nbGUgPSBhbmdsZSAtIE1hdGguUEkgKiAyO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGFuZ2xlIDw9IC1NYXRoLlBJKSB7XHJcbiAgICAgICAgICAgICAgICBhbmdsZSA9IGFuZ2xlICsgTWF0aC5QSSAqIDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3VtICs9IGFuZ2xlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDorqHnrpflm57ovazmlbDlubbliKTmlq3ngrnlkozlpJrovrnlvaLnmoTlh6DkvZXlhbPns7tcclxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChzdW0gLyBNYXRoLlBJKSA9PT0gMCA/IGZhbHNlIDogdHJ1ZTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgcHVibGljIGRpc3RhbmNlVG8odjogVmVjdG9yMik6IG51bWJlciB7XHJcbiAgICAgICAgY29uc3QgZHggPSB0aGlzLnggLSB2Lng7XHJcbiAgICAgICAgY29uc3QgZHkgPSB0aGlzLnkgLSB2Lnk7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkeCAqIGR4ICsgZHkgKiBkeSk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorqHnrpfngrkocG9pbnQp5Zyo57q/KFAxLT5QMinkuIrnmoTmipXlvbHlnZDmoIdcclxuICAgICAqIEBwYXJhbSBQMSBcclxuICAgICAqIEBwYXJhbSBQMiBcclxuICAgICAqIEBwYXJhbSBwb2ludCBcclxuICAgICAqL1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXRQcm9qZWN0aXZlUG9pbnQoUDE6IFZlY3RvcjIsIFAyOiBWZWN0b3IyLCBwb2ludDogVmVjdG9yMik6IFZlY3RvcjIge1xyXG4gICAgICAgIHZhciBwTGluZSA9IFAxO1xyXG4gICAgICAgIGlmIChQMS54ID09PSBQMi54ICYmIFAxLnkgPT09IFAyLnkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoUDEueCA9PT0gUDIueCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIocExpbmUueCwgcG9pbnQueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKFAxLnkgPT09IFAyLnkpIC8v5Z6C57q/5pac546H5LiN5a2Y5Zyo5oOF5Ya1XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIocG9pbnQueCwgcExpbmUueSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6K6h566X57q/55qE5pac546HXHJcbiAgICAgICAgdmFyIGsgPSAoKFAxLnkgLSBQMi55KSkgLyAoUDEueCAtIFAyLngpO1xyXG4gICAgICAgIHZhciBYID0gKChrICogcExpbmUueCArIHBvaW50LnggLyBrICsgcG9pbnQueSAtIHBMaW5lLnkpIC8gKDEgLyBrICsgaykpO1xyXG4gICAgICAgIHZhciBZID0gKC0xIC8gayAqIChYIC0gcG9pbnQueCkgKyBwb2ludC55KTtcclxuICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoWCwgWSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDorqHnrpcg5b2T5YmN54K5IOWbtOe7lWNlbnRlcuaXi+i9rGHluqbmiYDlnKjkvY3nva5cclxuICAgICAqIEBwYXJhbSBwb2ludCDml4vovazmupDngrlcclxuICAgICAqIEBwYXJhbSBjZW50ZXIg5peL6L2s5Lit5b+D54K5XHJcbiAgICAgKiBAcGFyYW0gYSDml4vovazop5LluqZcclxuICAgICAqL1xyXG4gICAgcHVibGljIHJvdGF0ZVBvaW50KGNlbnRlcjogVmVjdG9yMiwgYTogbnVtYmVyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgdmFyIGFuZyA9IGEgLyAxODAgKiBNYXRoLlBJO1xyXG4gICAgICAgIHZhciB4ID0gKHRoaXMueCAtIGNlbnRlci54KSAqIE1hdGguY29zKGFuZykgLSAodGhpcy55IC0gY2VudGVyLnkpICogTWF0aC5zaW4oYW5nKSArIGNlbnRlci54O1xyXG4gICAgICAgIHZhciB5ID0gKHRoaXMueCAtIGNlbnRlci54KSAqIE1hdGguc2luKGFuZykgKyAodGhpcy55IC0gY2VudGVyLnkpICogTWF0aC5jb3MoYW5nKSArIGNlbnRlci55O1xyXG4gICAgICAgIHJldHVybiBuZXcgVmVjdG9yMih4LCB5KTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDmnoHlnZDmoIfmjpLluo9cclxuICAgICAqIOeCueeahOmhuuaXtumSiOaOkuW6j+eul+azlVxyXG4gICAgICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNjk4OTEwMC9zb3J0LXBvaW50cy1pbi1jbG9ja3dpc2Utb3JkZXJcclxuICAgICAqIEBwYXJhbSBhIFxyXG4gICAgICogQHBhcmFtIGIgXHJcbiAgICAgKiBAcGFyYW0gY2VudGVyIFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHN0YXRpYyBsZXNzQ2N3KGE6IElWZWN0b3IyLCBiOiBJVmVjdG9yMiwgY2VudGVyOiBJVmVjdG9yMik6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIENvbXB1dGVzIHRoZSBxdWFkcmFudCBmb3IgYSBhbmQgYiAoMC0zKTpcclxuICAgICAgICAvLyAgICAgXlxyXG4gICAgICAgIC8vICAgMSB8IDBcclxuICAgICAgICAvLyAgLS0tKy0tPlxyXG4gICAgICAgIC8vICAgMiB8IDNcclxuICAgICAgICBjb25zdCBkYXggPSAoKGEueCAtIGNlbnRlci54KSA+IDApID8gMSA6IDA7XHJcbiAgICAgICAgY29uc3QgZGF5ID0gKChhLnkgLSBjZW50ZXIueSkgPiAwKSA/IDEgOiAwO1xyXG4gICAgICAgIGNvbnN0IHFhID0gKDEgLSBkYXgpICsgKDEgLSBkYXkpICsgKChkYXggJiAoMSAtIGRheSkpIDw8IDEpO1xyXG4gICAgICAgIGNvbnN0IGRieCA9ICgoYi54IC0gY2VudGVyLngpID4gMCkgPyAxIDogMDtcclxuICAgICAgICBjb25zdCBkYnkgPSAoKGIueSAtIGNlbnRlci55KSA+IDApID8gMSA6IDA7XHJcbiAgICAgICAgY29uc3QgcWIgPSAoMSAtIGRieCkgKyAoMSAtIGRieSkgKyAoKGRieCAmICgxIC0gZGJ5KSkgPDwgMSk7XHJcbiAgICAgICAgaWYgKHFhID09IHFiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoYi54IC0gY2VudGVyLngpICogKGEueSAtIGNlbnRlci55KSA8IChiLnkgLSBjZW50ZXIueSkgKiAoYS54IC0gY2VudGVyLngpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBxYSA8IHFiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIOmAhuaXtumSiOaOkuW6jyBcclxuICAgICAqIGh0dHBzOi8vd3d3LmNuYmxvZ3MuY29tL2R3ZHhkeS9wLzMyMzAxNTYuaHRtbFxyXG4gICAgICogQHBhcmFtIHZQb2ludHMgXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzdGF0aWMgY2xvY2t3aXNlU29ydFBvaW50cyh2UG9pbnRzOiBJVmVjdG9yMltdLCBjZW50ZXI6IElWZWN0b3IyKSB7XHJcbiAgICAgICAgLy/lhpLms6HmjpLluo9cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZQb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgdlBvaW50cy5sZW5ndGggLSBpIC0gMTsgaisrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sZXNzQ2N3KHZQb2ludHNbal0sIHZQb2ludHNbaiArIDFdLCBjZW50ZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRtcCA9IHZQb2ludHNbal07XHJcbiAgICAgICAgICAgICAgICAgICAgdlBvaW50c1tqXSA9IHZQb2ludHNbaiArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZQb2ludHNbaiArIDFdID0gdG1wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAvKipcclxuICAgICAqIOiuoeeul+S4pOadoeebtOe6v+eahOS6pOeCuVxyXG4gICAgICogaHR0cHM6Ly93d3cuY25ibG9ncy5jb20veGlhb3RpYW5uZXQvcC8zNzY4NjExLmh0bWxcclxuICAgICAqIEBvcHRpbWl6ZSBsaW5lRmlyc3RTdGFyLlggIT0gbGluZUZpcnN0RW5kLlgg5b2T6KeS5bqm5aSf5bCP55qE5pe25YCZIOa1rueCueaVsOeyvuW6puS4jeWkn+ihqOekuuaWnOeOh+eahCDnu5PmnpzkvJrlgY/np7vmjLrlpKcg55So5beu5YC85bCP5LqO5p+Q5Liq5bCP5pWw5q+U6L6D5aW9IDwwLjAwMDAwMSDov5nmoLdcclxuICAgICAqIEBwYXJhbSBsaW5lRmlyc3RTdGFyIFxyXG4gICAgICogQHBhcmFtIGxpbmVGaXJzdEVuZCBcclxuICAgICAqIEBwYXJhbSBsaW5lU2Vjb25kU3RhciBcclxuICAgICAqIEBwYXJhbSBsaW5lU2Vjb25kRW5kIFxyXG4gICAgICovXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldEludGVyc2VjdGlvbihsaW5lRmlyc3RTdGFyOiBWZWN0b3IyLCBsaW5lRmlyc3RFbmQ6IFZlY3RvcjIsIGxpbmVTZWNvbmRTdGFyOiBWZWN0b3IyLCBsaW5lU2Vjb25kRW5kOiBWZWN0b3IyKTogVmVjdG9yMiB7XHJcbiAgICAgICAgLypcclxuICAgICAgICAgKiBMMe+8jEwy6YO95a2Y5Zyo5pac546H55qE5oOF5Ya177yaXHJcbiAgICAgICAgICog55u057q/5pa556iLTDE6ICggeSAtIHkxICkgLyAoIHkyIC0geTEgKSA9ICggeCAtIHgxICkgLyAoIHgyIC0geDEgKSBcclxuICAgICAgICAgKiA9PiB5ID0gWyAoIHkyIC0geTEgKSAvICggeDIgLSB4MSApIF0oIHggLSB4MSApICsgeTFcclxuICAgICAgICAgKiDku6QgYSA9ICggeTIgLSB5MSApIC8gKCB4MiAtIHgxIClcclxuICAgICAgICAgKiDmnIkgeSA9IGEgKiB4IC0gYSAqIHgxICsgeTEgICAuLi4uLi4uLi4xXHJcbiAgICAgICAgICog55u057q/5pa556iLTDI6ICggeSAtIHkzICkgLyAoIHk0IC0geTMgKSA9ICggeCAtIHgzICkgLyAoIHg0IC0geDMgKVxyXG4gICAgICAgICAqIOS7pCBiID0gKCB5NCAtIHkzICkgLyAoIHg0IC0geDMgKVxyXG4gICAgICAgICAqIOaciSB5ID0gYiAqIHggLSBiICogeDMgKyB5MyAuLi4uLi4uLi4uMlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIOWmguaenCBhID0gYu+8jOWImeS4pOebtOe6v+W5s+etie+8jOWQpuWIme+8jCDogZTop6PmlrnnqIsgMSwy77yM5b6XOlxyXG4gICAgICAgICAqIHggPSAoIGEgKiB4MSAtIGIgKiB4MyAtIHkxICsgeTMgKSAvICggYSAtIGIgKVxyXG4gICAgICAgICAqIHkgPSBhICogeCAtIGEgKiB4MSArIHkxXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogTDHlrZjlnKjmlpznjocsIEwy5bmz6KGMWei9tOeahOaDheWGte+8mlxyXG4gICAgICAgICAqIHggPSB4M1xyXG4gICAgICAgICAqIHkgPSBhICogeDMgLSBhICogeDEgKyB5MVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEwxIOW5s+ihjFnovbTvvIxMMuWtmOWcqOaWnOeOh+eahOaDheWGte+8mlxyXG4gICAgICAgICAqIHggPSB4MVxyXG4gICAgICAgICAqIHkgPSBiICogeCAtIGIgKiB4MyArIHkzXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogTDHkuI5MMumDveW5s+ihjFnovbTnmoTmg4XlhrXvvJpcclxuICAgICAgICAgKiDlpoLmnpwgeDEgPSB4M++8jOmCo+S5iEwx5LiOTDLph43lkIjvvIzlkKbliJnlubPnrYlcclxuICAgICAgICAgKiBcclxuICAgICAgICAqL1xyXG4gICAgICAgIHZhciBhID0gMDtcclxuICAgICAgICB2YXIgYiA9IDA7XHJcbiAgICAgICAgdmFyIHN0YXRlID0gMDtcclxuICAgICAgICBpZiAoTWF0aC5hYnMobGluZUZpcnN0U3Rhci54IC0gbGluZUZpcnN0RW5kLngpID4gMC4wMDAwMDEpIHtcclxuICAgICAgICAgICAgYSA9IChsaW5lRmlyc3RFbmQueSAtIGxpbmVGaXJzdFN0YXIueSkgLyAobGluZUZpcnN0RW5kLnggLSBsaW5lRmlyc3RTdGFyLngpO1xyXG4gICAgICAgICAgICBzdGF0ZSB8PSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoTWF0aC5hYnMobGluZVNlY29uZFN0YXIueCAtIGxpbmVTZWNvbmRFbmQueCkgPiAwLjAwMDAwMSkge1xyXG4gICAgICAgICAgICBiID0gKGxpbmVTZWNvbmRFbmQueSAtIGxpbmVTZWNvbmRTdGFyLnkpIC8gKGxpbmVTZWNvbmRFbmQueCAtIGxpbmVTZWNvbmRTdGFyLngpO1xyXG4gICAgICAgICAgICBzdGF0ZSB8PSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzd2l0Y2ggKHN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDogLy9MMeS4jkwy6YO95bmz6KGMWei9tFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsaW5lRmlyc3RTdGFyLnggPT09IGxpbmVTZWNvbmRTdGFyLngpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy90aHJvdyBuZXcgRXhjZXB0aW9uKFwi5Lik5p2h55u057q/5LqS55u46YeN5ZCI77yM5LiU5bmz6KGM5LqOWei9tO+8jOaXoOazleiuoeeul+S6pOeCueOAglwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3Rocm93IG5ldyBFeGNlcHRpb24oXCLkuKTmnaHnm7Tnur/kupLnm7jlubPooYzvvIzkuJTlubPooYzkuo5Z6L2077yM5peg5rOV6K6h566X5Lqk54K544CCXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMTogLy9MMeWtmOWcqOaWnOeOhywgTDLlubPooYxZ6L20XHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHggPSBsaW5lU2Vjb25kU3Rhci54O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB5ID0gKGxpbmVGaXJzdFN0YXIueCAtIHgpICogKC1hKSArIGxpbmVGaXJzdFN0YXIueTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjIoeCwgeSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgMjogLy9MMSDlubPooYxZ6L2077yMTDLlrZjlnKjmlpznjodcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IGxpbmVGaXJzdFN0YXIueDtcclxuICAgICAgICAgICAgICAgICAgICAvL+e9keS4iuacieebuOS8vOS7o+eggeeahO+8jOi/meS4gOWkhOaYr+mUmeivr+eahOOAguS9oOWPr+S7peWvueavlGNhc2UgMSDnmoTpgLvovpEg6L+b6KGM5YiG5p6QXHJcbiAgICAgICAgICAgICAgICAgICAgLy/mupBjb2RlOmxpbmVTZWNvbmRTdGFyICogeCArIGxpbmVTZWNvbmRTdGFyICogbGluZVNlY29uZFN0YXIuWCArIHAzLlk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSAobGluZVNlY29uZFN0YXIueCAtIHgpICogKC1iKSArIGxpbmVTZWNvbmRTdGFyLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHgsIHkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlIDM6IC8vTDHvvIxMMumDveWtmOWcqOaWnOeOh1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhID09PSBiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRocm93IG5ldyBFeGNlcHRpb24oXCLkuKTmnaHnm7Tnur/lubPooYzmiJbph43lkIjvvIzml6Dms5XorqHnrpfkuqTngrnjgIJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YXIgeCA9IChhICogbGluZUZpcnN0U3Rhci54IC0gYiAqIGxpbmVTZWNvbmRTdGFyLnggLSBsaW5lRmlyc3RTdGFyLnkgKyBsaW5lU2Vjb25kU3Rhci55KSAvIChhIC0gYik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHkgPSBhICogeCAtIGEgKiBsaW5lRmlyc3RTdGFyLnggKyBsaW5lRmlyc3RTdGFyLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHgsIHkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXhjZXB0aW9uKFwi5LiN5Y+v6IO95Y+R55Sf55qE5oOF5Ya1XCIpO1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxufSJdLCJzb3VyY2VSb290IjoiIn0=