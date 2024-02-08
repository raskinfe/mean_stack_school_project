"use strict";

function _typeof(obj) {
  "@babel/helpers - typeof";
  return (
    (_typeof =
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
        ? function (obj) {
            return typeof obj;
          }
        : function (obj) {
            return obj &&
              "function" == typeof Symbol &&
              obj.constructor === Symbol &&
              obj !== Symbol.prototype
              ? "symbol"
              : typeof obj;
          }),
    _typeof(obj)
  );
}
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", { writable: false });
  return Constructor;
}
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: { value: subClass, writable: true, configurable: true },
  });
  Object.defineProperty(subClass, "prototype", { writable: false });
  if (superClass) _setPrototypeOf(subClass, superClass);
}
function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
      result;
    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }
    return _possibleConstructorReturn(this, result);
  };
}
function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError(
      "Derived constructors may only return object or undefined"
    );
  }
  return _assertThisInitialized(self);
}
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  }
  return self;
}
function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;
  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;
    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }
    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);
      _cache.set(Class, Wrapper);
    }
    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }
    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true,
      },
    });
    return _setPrototypeOf(Wrapper, Class);
  };
  return _wrapNativeSuper(Class);
}
function _construct(Parent, args, Class) {
  if (_isNativeReflectConstruct()) {
    _construct = Reflect.construct.bind();
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }
  return _construct.apply(null, arguments);
}
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;
  try {
    Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
    return true;
  } catch (e) {
    return false;
  }
}
function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf
    ? Object.setPrototypeOf.bind()
    : function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
      };
  return _setPrototypeOf(o, p);
}
function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf
    ? Object.getPrototypeOf.bind()
    : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
      };
  return _getPrototypeOf(o);
}
customElements.define(
  "compodoc-menu",
  /*#__PURE__*/ (function (_HTMLElement) {
    _inherits(_class, _HTMLElement);
    var _super = _createSuper(_class);
    function _class() {
      var _this;
      _classCallCheck(this, _class);
      _this = _super.call(this);
      _this.isNormalMode = _this.getAttribute("mode") === "normal";
      return _this;
    }
    _createClass(_class, [
      {
        key: "connectedCallback",
        value: function connectedCallback() {
          this.render(this.isNormalMode);
        },
      },
      {
        key: "render",
        value: function render(isNormalMode) {
          var tp = lithtml.html(
            '\n        <nav>\n            <ul class="list">\n                <li class="title">\n                    <a href="index.html" data-type="index-link">my-project documentation</a>\n                </li>\n\n                <li class="divider"></li>\n                '
              .concat(
                isNormalMode
                  ? '<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>'
                  : "",
                '\n                <li class="chapter">\n                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>\n                    <ul class="links">\n                        <li class="link">\n                            <a href="overview.html" data-type="chapter-link">\n                                <span class="icon ion-ios-keypad"></span>Overview\n                            </a>\n                        </li>\n                        <li class="link">\n                            <a href="index.html" data-type="chapter-link">\n                                <span class="icon ion-ios-paper"></span>README\n                            </a>\n                        </li>\n                                <li class="link">\n                                    <a href="dependencies.html" data-type="chapter-link">\n                                        <span class="icon ion-ios-list"></span>Dependencies\n                                    </a>\n                                </li>\n                                <li class="link">\n                                    <a href="properties.html" data-type="chapter-link">\n                                        <span class="icon ion-ios-apps"></span>Properties\n                                    </a>\n                                </li>\n                    </ul>\n                </li>\n                    <li class="chapter modules">\n                        <a data-type="chapter-link" href="modules.html">\n                            <div class="menu-toggler linked" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#modules-links"'
                  : 'data-target="#xs-modules-links"',
                '>\n                                <span class="icon ion-ios-archive"></span>\n                                <span class="link-name">Modules</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                        </a>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"',
                '>\n                            <li class="link">\n                                <a href="modules/AdminDashboardModule.html" data-type="entity-link" >AdminDashboardModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-AdminDashboardModule-610ff85a5ec04026ec2471614ff1915c7b25daa6bff4df8de9fd6bc0a58ab83e6811431d4c6dd0aac7b6be2a3e363a69f9d5dddf24f756e317032c43b98580ea"'
                  : 'data-target="#xs-components-links-module-AdminDashboardModule-610ff85a5ec04026ec2471614ff1915c7b25daa6bff4df8de9fd6bc0a58ab83e6811431d4c6dd0aac7b6be2a3e363a69f9d5dddf24f756e317032c43b98580ea"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-AdminDashboardModule-610ff85a5ec04026ec2471614ff1915c7b25daa6bff4df8de9fd6bc0a58ab83e6811431d4c6dd0aac7b6be2a3e363a69f9d5dddf24f756e317032c43b98580ea"'
                  : 'id="xs-components-links-module-AdminDashboardModule-610ff85a5ec04026ec2471614ff1915c7b25daa6bff4df8de9fd6bc0a58ab83e6811431d4c6dd0aac7b6be2a3e363a69f9d5dddf24f756e317032c43b98580ea"',
                '>\n                                            <li class="link">\n                                                <a href="components/AdminDashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminDashboardComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/CategoryChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CategoryChartComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/OffersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OffersComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/UsersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#injectables-links-module-AdminDashboardModule-610ff85a5ec04026ec2471614ff1915c7b25daa6bff4df8de9fd6bc0a58ab83e6811431d4c6dd0aac7b6be2a3e363a69f9d5dddf24f756e317032c43b98580ea"'
                  : 'data-target="#xs-injectables-links-module-AdminDashboardModule-610ff85a5ec04026ec2471614ff1915c7b25daa6bff4df8de9fd6bc0a58ab83e6811431d4c6dd0aac7b6be2a3e363a69f9d5dddf24f756e317032c43b98580ea"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-AdminDashboardModule-610ff85a5ec04026ec2471614ff1915c7b25daa6bff4df8de9fd6bc0a58ab83e6811431d4c6dd0aac7b6be2a3e363a69f9d5dddf24f756e317032c43b98580ea"'
                  : 'id="xs-injectables-links-module-AdminDashboardModule-610ff85a5ec04026ec2471614ff1915c7b25daa6bff4df8de9fd6bc0a58ab83e6811431d4c6dd0aac7b6be2a3e363a69f9d5dddf24f756e317032c43b98580ea"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/AdminService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AdminService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-AppModule-8361889f6ddd94f446553d0027187723e6c392d33020684e4b910b2ba061efb8c7d08b3c8d33c19b7cb9e5c6cbc586ea9b97d7695d8aa7ffcb7c667bd4ba24e5"'
                  : 'data-target="#xs-components-links-module-AppModule-8361889f6ddd94f446553d0027187723e6c392d33020684e4b910b2ba061efb8c7d08b3c8d33c19b7cb9e5c6cbc586ea9b97d7695d8aa7ffcb7c667bd4ba24e5"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-AppModule-8361889f6ddd94f446553d0027187723e6c392d33020684e4b910b2ba061efb8c7d08b3c8d33c19b7cb9e5c6cbc586ea9b97d7695d8aa7ffcb7c667bd4ba24e5"'
                  : 'id="xs-components-links-module-AppModule-8361889f6ddd94f446553d0027187723e6c392d33020684e4b910b2ba061efb8c7d08b3c8d33c19b7cb9e5c6cbc586ea9b97d7695d8aa7ffcb7c667bd4ba24e5"',
                '>\n                                            <li class="link">\n                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/NavBarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavBarComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#injectables-links-module-AppModule-8361889f6ddd94f446553d0027187723e6c392d33020684e4b910b2ba061efb8c7d08b3c8d33c19b7cb9e5c6cbc586ea9b97d7695d8aa7ffcb7c667bd4ba24e5"'
                  : 'data-target="#xs-injectables-links-module-AppModule-8361889f6ddd94f446553d0027187723e6c392d33020684e4b910b2ba061efb8c7d08b3c8d33c19b7cb9e5c6cbc586ea9b97d7695d8aa7ffcb7c667bd4ba24e5"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-AppModule-8361889f6ddd94f446553d0027187723e6c392d33020684e4b910b2ba061efb8c7d08b3c8d33c19b7cb9e5c6cbc586ea9b97d7695d8aa7ffcb7c667bd4ba24e5"'
                  : 'id="xs-injectables-links-module-AppModule-8361889f6ddd94f446553d0027187723e6c392d33020684e4b910b2ba061efb8c7d08b3c8d33c19b7cb9e5c6cbc586ea9b97d7695d8aa7ffcb7c667bd4ba24e5"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/ApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiService</a>\n                                        </li>\n                                        <li class="link">\n                                            <a href="injectables/MessageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageService</a>\n                                        </li>\n                                        <li class="link">\n                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>\n                            </li>\n                            <li class="link">\n                                <a href="modules/ButtonModule.html" data-type="entity-link" >ButtonModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-ButtonModule-7d6a60d5e33b924aac7d6c095bd932186d8f5579dee3d8d46ed63ee51fdf4e9f563fb2d59fdbf2e8cb6aa30032d4d66242f624ea2392ce066e24d184fc29a1e1"'
                  : 'data-target="#xs-components-links-module-ButtonModule-7d6a60d5e33b924aac7d6c095bd932186d8f5579dee3d8d46ed63ee51fdf4e9f563fb2d59fdbf2e8cb6aa30032d4d66242f624ea2392ce066e24d184fc29a1e1"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-ButtonModule-7d6a60d5e33b924aac7d6c095bd932186d8f5579dee3d8d46ed63ee51fdf4e9f563fb2d59fdbf2e8cb6aa30032d4d66242f624ea2392ce066e24d184fc29a1e1"'
                  : 'id="xs-components-links-module-ButtonModule-7d6a60d5e33b924aac7d6c095bd932186d8f5579dee3d8d46ed63ee51fdf4e9f563fb2d59fdbf2e8cb6aa30032d4d66242f624ea2392ce066e24d184fc29a1e1"',
                '>\n                                            <li class="link">\n                                                <a href="components/ButtonComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ButtonComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/ChartModule.html" data-type="entity-link" >ChartModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-ChartModule-186ed72aa6c13265ade6c2f2c1470e2b05b5dd5bb3a017b5236e6fd8308045a51ea400f46b31c2d757cdfe69348b31ad14457b007f3a988cad7bdd62a1de2374"'
                  : 'data-target="#xs-components-links-module-ChartModule-186ed72aa6c13265ade6c2f2c1470e2b05b5dd5bb3a017b5236e6fd8308045a51ea400f46b31c2d757cdfe69348b31ad14457b007f3a988cad7bdd62a1de2374"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-ChartModule-186ed72aa6c13265ade6c2f2c1470e2b05b5dd5bb3a017b5236e6fd8308045a51ea400f46b31c2d757cdfe69348b31ad14457b007f3a988cad7bdd62a1de2374"'
                  : 'id="xs-components-links-module-ChartModule-186ed72aa6c13265ade6c2f2c1470e2b05b5dd5bb3a017b5236e6fd8308045a51ea400f46b31c2d757cdfe69348b31ad14457b007f3a988cad7bdd62a1de2374"',
                '>\n                                            <li class="link">\n                                                <a href="components/ChartComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChartComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/CreateNewItemModule.html" data-type="entity-link" >CreateNewItemModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-CreateNewItemModule-7395b0918a5d54b648888515550b089e3ed594e8a7b35de9d0c577ea7c073621684ed7d6e2212608063d82dbc407243df6e2c6e5db4dd2550b15057d343fc85e"'
                  : 'data-target="#xs-components-links-module-CreateNewItemModule-7395b0918a5d54b648888515550b089e3ed594e8a7b35de9d0c577ea7c073621684ed7d6e2212608063d82dbc407243df6e2c6e5db4dd2550b15057d343fc85e"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-CreateNewItemModule-7395b0918a5d54b648888515550b089e3ed594e8a7b35de9d0c577ea7c073621684ed7d6e2212608063d82dbc407243df6e2c6e5db4dd2550b15057d343fc85e"'
                  : 'id="xs-components-links-module-CreateNewItemModule-7395b0918a5d54b648888515550b089e3ed594e8a7b35de9d0c577ea7c073621684ed7d6e2212608063d82dbc407243df6e2c6e5db4dd2550b15057d343fc85e"',
                '>\n                                            <li class="link">\n                                                <a href="components/CreateNewItemComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CreateNewItemComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/DashboardModule.html" data-type="entity-link" >DashboardModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-DashboardModule-eddbf844fe234ed6c454a8f79de8fbf2d47ab497fbbb63b939e70b16291b0648ad8e81d36b193f7f3bc7a5b5a84ea5bc042d623eb8665ccfe1b1b6f1fdaea81d"'
                  : 'data-target="#xs-components-links-module-DashboardModule-eddbf844fe234ed6c454a8f79de8fbf2d47ab497fbbb63b939e70b16291b0648ad8e81d36b193f7f3bc7a5b5a84ea5bc042d623eb8665ccfe1b1b6f1fdaea81d"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-DashboardModule-eddbf844fe234ed6c454a8f79de8fbf2d47ab497fbbb63b939e70b16291b0648ad8e81d36b193f7f3bc7a5b5a84ea5bc042d623eb8665ccfe1b1b6f1fdaea81d"'
                  : 'id="xs-components-links-module-DashboardModule-eddbf844fe234ed6c454a8f79de8fbf2d47ab497fbbb63b939e70b16291b0648ad8e81d36b193f7f3bc7a5b5a84ea5bc042d623eb8665ccfe1b1b6f1fdaea81d"',
                '>\n                                            <li class="link">\n                                                <a href="components/CarouselComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CarouselComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/ChatBoxComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ChatBoxComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/DashboardComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/DashboardSidebarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardSidebarComponent</a>\n                                            </li>\n                                            <li class="link">\n                                                <a href="components/SearchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#injectables-links-module-DashboardModule-eddbf844fe234ed6c454a8f79de8fbf2d47ab497fbbb63b939e70b16291b0648ad8e81d36b193f7f3bc7a5b5a84ea5bc042d623eb8665ccfe1b1b6f1fdaea81d"'
                  : 'data-target="#xs-injectables-links-module-DashboardModule-eddbf844fe234ed6c454a8f79de8fbf2d47ab497fbbb63b939e70b16291b0648ad8e81d36b193f7f3bc7a5b5a84ea5bc042d623eb8665ccfe1b1b6f1fdaea81d"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-DashboardModule-eddbf844fe234ed6c454a8f79de8fbf2d47ab497fbbb63b939e70b16291b0648ad8e81d36b193f7f3bc7a5b5a84ea5bc042d623eb8665ccfe1b1b6f1fdaea81d"'
                  : 'id="xs-injectables-links-module-DashboardModule-eddbf844fe234ed6c454a8f79de8fbf2d47ab497fbbb63b939e70b16291b0648ad8e81d36b193f7f3bc7a5b5a84ea5bc042d623eb8665ccfe1b1b6f1fdaea81d"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/IssueModule.html" data-type="entity-link" >IssueModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-IssueModule-ca1b6edbd279d70b4d5706d8b8a7e7cbafd03f5509b48e8e18395aff23997d2f402612cdff3bf9f85517dbb703ae9d9d288f17784de800dab5a3fce2da8764e2"'
                  : 'data-target="#xs-components-links-module-IssueModule-ca1b6edbd279d70b4d5706d8b8a7e7cbafd03f5509b48e8e18395aff23997d2f402612cdff3bf9f85517dbb703ae9d9d288f17784de800dab5a3fce2da8764e2"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-IssueModule-ca1b6edbd279d70b4d5706d8b8a7e7cbafd03f5509b48e8e18395aff23997d2f402612cdff3bf9f85517dbb703ae9d9d288f17784de800dab5a3fce2da8764e2"'
                  : 'id="xs-components-links-module-IssueModule-ca1b6edbd279d70b4d5706d8b8a7e7cbafd03f5509b48e8e18395aff23997d2f402612cdff3bf9f85517dbb703ae9d9d288f17784de800dab5a3fce2da8764e2"',
                '>\n                                            <li class="link">\n                                                <a href="components/IssueComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IssueComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-LoginModule-04bd2581b324cc84998f59bbb9c507e5bc9c383c4b2b0c0d4197687e8acf6a8b9b7d55f9b1daf65ca0b0a8171450c65c70bf9d07aa66fdcb79deea8a18339502"'
                  : 'data-target="#xs-components-links-module-LoginModule-04bd2581b324cc84998f59bbb9c507e5bc9c383c4b2b0c0d4197687e8acf6a8b9b7d55f9b1daf65ca0b0a8171450c65c70bf9d07aa66fdcb79deea8a18339502"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-LoginModule-04bd2581b324cc84998f59bbb9c507e5bc9c383c4b2b0c0d4197687e8acf6a8b9b7d55f9b1daf65ca0b0a8171450c65c70bf9d07aa66fdcb79deea8a18339502"'
                  : 'id="xs-components-links-module-LoginModule-04bd2581b324cc84998f59bbb9c507e5bc9c383c4b2b0c0d4197687e8acf6a8b9b7d55f9b1daf65ca0b0a8171450c65c70bf9d07aa66fdcb79deea8a18339502"',
                '>\n                                            <li class="link">\n                                                <a href="components/LoginComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#injectables-links-module-LoginModule-04bd2581b324cc84998f59bbb9c507e5bc9c383c4b2b0c0d4197687e8acf6a8b9b7d55f9b1daf65ca0b0a8171450c65c70bf9d07aa66fdcb79deea8a18339502"'
                  : 'data-target="#xs-injectables-links-module-LoginModule-04bd2581b324cc84998f59bbb9c507e5bc9c383c4b2b0c0d4197687e8acf6a8b9b7d55f9b1daf65ca0b0a8171450c65c70bf9d07aa66fdcb79deea8a18339502"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-LoginModule-04bd2581b324cc84998f59bbb9c507e5bc9c383c4b2b0c0d4197687e8acf6a8b9b7d55f9b1daf65ca0b0a8171450c65c70bf9d07aa66fdcb79deea8a18339502"'
                  : 'id="xs-injectables-links-module-LoginModule-04bd2581b324cc84998f59bbb9c507e5bc9c383c4b2b0c0d4197687e8acf6a8b9b7d55f9b1daf65ca0b0a8171450c65c70bf9d07aa66fdcb79deea8a18339502"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/ApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/MessageModule.html" data-type="entity-link" >MessageModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-MessageModule-d1ec2791a40951416239703b4fbb459ae9e2f19b1b738e4a6760f1adc90742ce3f931814af8e4cd44a1d1f933391a7a8309d5c129b313f5d3cc2f1e4c0062b5a"'
                  : 'data-target="#xs-components-links-module-MessageModule-d1ec2791a40951416239703b4fbb459ae9e2f19b1b738e4a6760f1adc90742ce3f931814af8e4cd44a1d1f933391a7a8309d5c129b313f5d3cc2f1e4c0062b5a"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-MessageModule-d1ec2791a40951416239703b4fbb459ae9e2f19b1b738e4a6760f1adc90742ce3f931814af8e4cd44a1d1f933391a7a8309d5c129b313f5d3cc2f1e4c0062b5a"'
                  : 'id="xs-components-links-module-MessageModule-d1ec2791a40951416239703b4fbb459ae9e2f19b1b738e4a6760f1adc90742ce3f931814af8e4cd44a1d1f933391a7a8309d5c129b313f5d3cc2f1e4c0062b5a"',
                '>\n                                            <li class="link">\n                                                <a href="components/MessageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#injectables-links-module-MessageModule-d1ec2791a40951416239703b4fbb459ae9e2f19b1b738e4a6760f1adc90742ce3f931814af8e4cd44a1d1f933391a7a8309d5c129b313f5d3cc2f1e4c0062b5a"'
                  : 'data-target="#xs-injectables-links-module-MessageModule-d1ec2791a40951416239703b4fbb459ae9e2f19b1b738e4a6760f1adc90742ce3f931814af8e4cd44a1d1f933391a7a8309d5c129b313f5d3cc2f1e4c0062b5a"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-MessageModule-d1ec2791a40951416239703b4fbb459ae9e2f19b1b738e4a6760f1adc90742ce3f931814af8e4cd44a1d1f933391a7a8309d5c129b313f5d3cc2f1e4c0062b5a"'
                  : 'id="xs-injectables-links-module-MessageModule-d1ec2791a40951416239703b4fbb459ae9e2f19b1b738e4a6760f1adc90742ce3f931814af8e4cd44a1d1f933391a7a8309d5c129b313f5d3cc2f1e4c0062b5a"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/MessageService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MessageService</a>\n                                        </li>\n                                        <li class="link">\n                                            <a href="injectables/SocketService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SocketService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/OfferModule.html" data-type="entity-link" >OfferModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-OfferModule-18c4b6f4cd7983989e745ad882730f7ab4bc991aae65f3d467056f340603d3c27b5fda14d6dcee30db2f27d19cef5e5796acc1951a38f5b682c894829c45cb3b"'
                  : 'data-target="#xs-components-links-module-OfferModule-18c4b6f4cd7983989e745ad882730f7ab4bc991aae65f3d467056f340603d3c27b5fda14d6dcee30db2f27d19cef5e5796acc1951a38f5b682c894829c45cb3b"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-OfferModule-18c4b6f4cd7983989e745ad882730f7ab4bc991aae65f3d467056f340603d3c27b5fda14d6dcee30db2f27d19cef5e5796acc1951a38f5b682c894829c45cb3b"'
                  : 'id="xs-components-links-module-OfferModule-18c4b6f4cd7983989e745ad882730f7ab4bc991aae65f3d467056f340603d3c27b5fda14d6dcee30db2f27d19cef5e5796acc1951a38f5b682c894829c45cb3b"',
                '>\n                                            <li class="link">\n                                                <a href="components/OfferComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >OfferComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/ResetPasswordModule.html" data-type="entity-link" >ResetPasswordModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-ResetPasswordModule-e360a682a1ff0247f8a1d57e6e372f026a640cf83e3150f8db1314dd7936bdb48fc708efcb7921219fa70a43ff66f350f5059d032eeeeff63602b8ac2e70e23f"'
                  : 'data-target="#xs-components-links-module-ResetPasswordModule-e360a682a1ff0247f8a1d57e6e372f026a640cf83e3150f8db1314dd7936bdb48fc708efcb7921219fa70a43ff66f350f5059d032eeeeff63602b8ac2e70e23f"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-ResetPasswordModule-e360a682a1ff0247f8a1d57e6e372f026a640cf83e3150f8db1314dd7936bdb48fc708efcb7921219fa70a43ff66f350f5059d032eeeeff63602b8ac2e70e23f"'
                  : 'id="xs-components-links-module-ResetPasswordModule-e360a682a1ff0247f8a1d57e6e372f026a640cf83e3150f8db1314dd7936bdb48fc708efcb7921219fa70a43ff66f350f5059d032eeeeff63602b8ac2e70e23f"',
                '>\n                                            <li class="link">\n                                                <a href="components/ResetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResetPasswordComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/UserProfileModule.html" data-type="entity-link" >UserProfileModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-UserProfileModule-66809ac5a93f77486e5da0806f090f0706577e1cb0a286b4be0e564ee1c44c243e168303afe5524648f94ee285ef4c65742d738cd2a4f901b3df8bb23c7640d5"'
                  : 'data-target="#xs-components-links-module-UserProfileModule-66809ac5a93f77486e5da0806f090f0706577e1cb0a286b4be0e564ee1c44c243e168303afe5524648f94ee285ef4c65742d738cd2a4f901b3df8bb23c7640d5"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-UserProfileModule-66809ac5a93f77486e5da0806f090f0706577e1cb0a286b4be0e564ee1c44c243e168303afe5524648f94ee285ef4c65742d738cd2a4f901b3df8bb23c7640d5"'
                  : 'id="xs-components-links-module-UserProfileModule-66809ac5a93f77486e5da0806f090f0706577e1cb0a286b4be0e564ee1c44c243e168303afe5524648f94ee285ef4c65742d738cd2a4f901b3df8bb23c7640d5"',
                '>\n                                            <li class="link">\n                                                <a href="components/UserProfileComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserProfileComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#injectables-links-module-UserProfileModule-66809ac5a93f77486e5da0806f090f0706577e1cb0a286b4be0e564ee1c44c243e168303afe5524648f94ee285ef4c65742d738cd2a4f901b3df8bb23c7640d5"'
                  : 'data-target="#xs-injectables-links-module-UserProfileModule-66809ac5a93f77486e5da0806f090f0706577e1cb0a286b4be0e564ee1c44c243e168303afe5524648f94ee285ef4c65742d738cd2a4f901b3df8bb23c7640d5"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-UserProfileModule-66809ac5a93f77486e5da0806f090f0706577e1cb0a286b4be0e564ee1c44c243e168303afe5524648f94ee285ef4c65742d738cd2a4f901b3df8bb23c7640d5"'
                  : 'id="xs-injectables-links-module-UserProfileModule-66809ac5a93f77486e5da0806f090f0706577e1cb0a286b4be0e564ee1c44c243e168303afe5524648f94ee285ef4c65742d738cd2a4f901b3df8bb23c7640d5"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/ApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                            <li class="link">\n                                <a href="modules/UserRegistrationModule.html" data-type="entity-link" >UserRegistrationModule</a>\n                                    <li class="chapter inner">\n                                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links-module-UserRegistrationModule-aa416078152a188c55d4b410055c0037f38be7d3b204682c48f4b999c78af05d42faa5059b4cc0a04174b43f09b206ae03f63a1906d08b8cf11fc77a01ffe050"'
                  : 'data-target="#xs-components-links-module-UserRegistrationModule-aa416078152a188c55d4b410055c0037f38be7d3b204682c48f4b999c78af05d42faa5059b4cc0a04174b43f09b206ae03f63a1906d08b8cf11fc77a01ffe050"',
                '>\n                                            <span class="icon ion-md-cog"></span>\n                                            <span>Components</span>\n                                            <span class="icon ion-ios-arrow-down"></span>\n                                        </div>\n                                        <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links-module-UserRegistrationModule-aa416078152a188c55d4b410055c0037f38be7d3b204682c48f4b999c78af05d42faa5059b4cc0a04174b43f09b206ae03f63a1906d08b8cf11fc77a01ffe050"'
                  : 'id="xs-components-links-module-UserRegistrationModule-aa416078152a188c55d4b410055c0037f38be7d3b204682c48f4b999c78af05d42faa5059b4cc0a04174b43f09b206ae03f63a1906d08b8cf11fc77a01ffe050"',
                '>\n                                            <li class="link">\n                                                <a href="components/UserRegistrationComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserRegistrationComponent</a>\n                                            </li>\n                                        </ul>\n                                    </li>\n                                <li class="chapter inner">\n                                    <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#injectables-links-module-UserRegistrationModule-aa416078152a188c55d4b410055c0037f38be7d3b204682c48f4b999c78af05d42faa5059b4cc0a04174b43f09b206ae03f63a1906d08b8cf11fc77a01ffe050"'
                  : 'data-target="#xs-injectables-links-module-UserRegistrationModule-aa416078152a188c55d4b410055c0037f38be7d3b204682c48f4b999c78af05d42faa5059b4cc0a04174b43f09b206ae03f63a1906d08b8cf11fc77a01ffe050"',
                '>\n                                        <span class="icon ion-md-arrow-round-down"></span>\n                                        <span>Injectables</span>\n                                        <span class="icon ion-ios-arrow-down"></span>\n                                    </div>\n                                    <ul class="links collapse" '
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links-module-UserRegistrationModule-aa416078152a188c55d4b410055c0037f38be7d3b204682c48f4b999c78af05d42faa5059b4cc0a04174b43f09b206ae03f63a1906d08b8cf11fc77a01ffe050"'
                  : 'id="xs-injectables-links-module-UserRegistrationModule-aa416078152a188c55d4b410055c0037f38be7d3b204682c48f4b999c78af05d42faa5059b4cc0a04174b43f09b206ae03f63a1906d08b8cf11fc77a01ffe050"',
                '>\n                                        <li class="link">\n                                            <a href="injectables/ApiService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ApiService</a>\n                                        </li>\n                                    </ul>\n                                </li>\n                            </li>\n                </ul>\n                </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#components-links"'
                  : 'data-target="#xs-components-links"',
                '>\n                            <span class="icon ion-md-cog"></span>\n                            <span>Components</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode
                  ? 'id="components-links"'
                  : 'id="xs-components-links"',
                '>\n                            <li class="link">\n                                <a href="components/FooterComponent.html" data-type="entity-link" >FooterComponent</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#classes-links"'
                  : 'data-target="#xs-classes-links"',
                '>\n                            <span class="icon ion-ios-paper"></span>\n                            <span>Classes</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"',
                '>\n                            <li class="link">\n                                <a href="classes/AdminController.html" data-type="entity-link" >AdminController</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/ImageController.html" data-type="entity-link" >ImageController</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/MessageController.html" data-type="entity-link" >MessageController</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/PostController.html" data-type="entity-link" >PostController</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/QueryResponse.html" data-type="entity-link" >QueryResponse</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UserController.html" data-type="entity-link" >UserController</a>\n                            </li>\n                            <li class="link">\n                                <a href="classes/UserIssueController.html" data-type="entity-link" >UserIssueController</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class="chapter">\n                            <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#injectables-links"'
                  : 'data-target="#xs-injectables-links"',
                '>\n                                <span class="icon ion-md-arrow-round-down"></span>\n                                <span>Injectables</span>\n                                <span class="icon ion-ios-arrow-down"></span>\n                            </div>\n                            <ul class="links collapse " '
              )
              .concat(
                isNormalMode
                  ? 'id="injectables-links"'
                  : 'id="xs-injectables-links"',
                '>\n                                <li class="link">\n                                    <a href="injectables/AdminService.html" data-type="entity-link" >AdminService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/ApiService.html" data-type="entity-link" >ApiService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/MessageService.html" data-type="entity-link" >MessageService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/PostService.html" data-type="entity-link" >PostService</a>\n                                </li>\n                                <li class="link">\n                                    <a href="injectables/SocketService.html" data-type="entity-link" >SocketService</a>\n                                </li>\n                            </ul>\n                        </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#guards-links"'
                  : 'data-target="#xs-guards-links"',
                '>\n                            <span class="icon ion-ios-lock"></span>\n                            <span>Guards</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"',
                '>\n                            <li class="link">\n                                <a href="guards/AdminGuard.html" data-type="entity-link" >AdminGuard</a>\n                            </li>\n                            <li class="link">\n                                <a href="guards/AuthGuardService.html" data-type="entity-link" >AuthGuardService</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#interfaces-links"'
                  : 'data-target="#xs-interfaces-links"',
                '>\n                            <span class="icon ion-md-information-circle-outline"></span>\n                            <span>Interfaces</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode
                  ? ' id="interfaces-links"'
                  : 'id="xs-interfaces-links"',
                '>\n                            <li class="link">\n                                <a href="interfaces/Error.html" data-type="entity-link" >Error</a>\n                            </li>\n                            <li class="link">\n                                <a href="interfaces/IDataset.html" data-type="entity-link" >IDataset</a>\n                            </li>\n                            <li class="link">\n                                <a href="interfaces/IIssue.html" data-type="entity-link" >IIssue</a>\n                            </li>\n                            <li class="link">\n                                <a href="interfaces/IMessage.html" data-type="entity-link" >IMessage</a>\n                            </li>\n                            <li class="link">\n                                <a href="interfaces/IPost.html" data-type="entity-link" >IPost</a>\n                            </li>\n                            <li class="link">\n                                <a href="interfaces/IRequestOptions.html" data-type="entity-link" >IRequestOptions</a>\n                            </li>\n                            <li class="link">\n                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>\n                            </li>\n                            <li class="link">\n                                <a href="interfaces/IUser-1.html" data-type="entity-link" >IUser</a>\n                            </li>\n                            <li class="link">\n                                <a href="interfaces/Result.html" data-type="entity-link" >Result</a>\n                            </li>\n                        </ul>\n                    </li>\n                    <li class="chapter">\n                        <div class="simple menu-toggler" data-toggle="collapse" '
              )
              .concat(
                isNormalMode
                  ? 'data-target="#miscellaneous-links"'
                  : 'data-target="#xs-miscellaneous-links"',
                '>\n                            <span class="icon ion-ios-cube"></span>\n                            <span>Miscellaneous</span>\n                            <span class="icon ion-ios-arrow-down"></span>\n                        </div>\n                        <ul class="links collapse " '
              )
              .concat(
                isNormalMode
                  ? 'id="miscellaneous-links"'
                  : 'id="xs-miscellaneous-links"',
                '>\n                            <li class="link">\n                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>\n                            </li>\n                            <li class="link">\n                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>\n                            </li>\n                        </ul>\n                    </li>\n                        <li class="chapter">\n                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>\n                        </li>\n                    <li class="chapter">\n                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>\n                    </li>\n                    <li class="divider"></li>\n                    <li class="copyright">\n                        Documentation generated using <a href="https://compodoc.app/" target="_blank">\n                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">\n                        </a>\n                    </li>\n            </ul>\n        </nav>\n        '
              )
          );
          this.innerHTML = tp.strings;
        },
      },
    ]);
    return _class;
  })(/*#__PURE__*/ _wrapNativeSuper(HTMLElement))
);
