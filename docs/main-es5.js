var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- Slide Menu-->\r\n<aside class=\"side-menu__container\" [ngClass]=\"{'side-menu__container-active': showMenu}\" (click)=\"toggleMenu()\">\r\n  <nav class=\"slide-menu\" [ngClass]=\"{'slide-menu-active': showMenu, 'slide-menu-active-dark': darkModeActive}\"\r\n       (click)=\"$event.stopImmediatePropagation();\">\r\n    <section class=\"menu-body\">\r\n      <ul class=\"menu-links\" [ngClass]=\"{'menu-links-dark': darkModeActive}\">\r\n        <li class=\"menu-link\" [routerLinkActiveOptions]=\"{exact:true}\" routerLink=\"\" routerLinkActive=\"link-active\" (click)=\"toggleMenu()\" style=\"margin-top: 60px;\">Home</li>\r\n        <li class=\"menu-link\" [routerLinkActiveOptions]=\"{exact:true}\" routerLink=\"/add\" routerLinkActive=\"link-active\" (click)=\"toggleMenu()\">Add City</li>\r\n      </ul>\r\n    </section>\r\n  </nav>\r\n</aside>\r\n\r\n<main class=\"root__container\" [ngClass]=\"{'root__container-dark': darkModeActive}\">\r\n  <header [ngClass]=\"{'main__header-dark': darkModeActive}\" class=\"main__header\" *ngIf=\"loggedIn | async\">\r\n\r\n    <div class=\"left__section\">\r\n      <svg (click)=\"toggleMenu()\" class=\"hamburger__icon\" id=\"Menu_Burger_Icon\" data-name=\"Menu Burger Icon\"\r\n           viewBox=\"31.5 30 49.9 32\">\r\n        <defs>\r\n          <style>.hamburger__icon__fill {\r\n            fill: #594e78\r\n          }</style>\r\n        </defs>\r\n        <rect id=\"Rectangle_9\" width=\"49.9\" height=\"4\" [ngClass]=\"{'hamburger__icon__fill-dark': darkModeActive}\"\r\n              class=\"hamburger__icon__fill\" data-name=\"Rectangle 9\" rx=\"2\"\r\n              transform=\"translate(31.5 58)\"></rect>\r\n        <rect id=\"Rectangle_10\" width=\"49.9\" height=\"4\" [ngClass]=\"{'hamburger__icon__fill-dark': darkModeActive}\"\r\n              class=\"hamburger__icon__fill\" data-name=\"Rectangle 10\" rx=\"2\"\r\n              transform=\"translate(31.5 44)\"></rect>\r\n        <rect id=\"Rectangle_11\" width=\"49.9\" height=\"4\" [ngClass]=\"{'hamburger__icon__fill-dark': darkModeActive}\"\r\n              class=\"hamburger__icon__fill\" data-name=\"Rectangle 11\" rx=\"2\"\r\n              transform=\"translate(31.5 30)\"></rect>\r\n      </svg>\r\n    </div>\r\n\r\n    <h3 class=\"date__text\">Weather Today</h3>\r\n\r\n\r\n    <div class=\"mode-toggle__container\">\r\n      <span class=\"mode-toggle__text\">Light</span>\r\n\r\n      <label class=\"toggle-button__container\">\r\n        <input (click)=\"modeToggleSwitch()\" type=\"checkbox\" class=\"mode-toggle__input\"/>\r\n        <span [ngClass]=\"{'mode-toggle__bg-checked': darkModeActive}\" class=\"mode-toggle__bg\"></span>\r\n        <span [ngClass]=\"{'mode-toggle__circle-checked': darkModeActive}\" class=\"mode-toggle__circle\"></span>\r\n      </label>\r\n\r\n\r\n      <span class=\"mode-toggle__text\">Dark</span>\r\n    </div>\r\n\r\n  </header>\r\n\r\n  <!-- Main Content -->\r\n\r\n  <div class=\"main-container__bg\">\r\n    <router-outlet></router-outlet>\r\n  </div>\r\n\r\n\r\n</main>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add/add.component.html": 
        /*!************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add/add.component.html ***!
          \************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<svg class=\"back__button\" routerLink=\"\" viewBox=\"4085 152 98.5 126\" tabindex=\"0\">\r\n  <defs>\r\n    <style>.a {\r\n      fill: #2f1533b2;\r\n    }\r\n\r\n    .b {\r\n      fill: rgba(12, 12, 12, 0);\r\n    }\r\n\r\n    .b, .c {\r\n      stroke: #fff;\r\n      stroke-width: 2px;\r\n    }\r\n\r\n    .c {\r\n      fill: none;\r\n    }\r\n\r\n    .d {\r\n      fill: #fff;\r\n      font-size: 15px;\r\n      font-family: SegoeUI, Segoe UI, sans-serif;\r\n      letter-spacing: 0.4em;\r\n    }</style>\r\n  </defs>\r\n  <g transform=\"translate(3980)\">\r\n    <circle class=\"a\" cx=\"39\" cy=\"39\" r=\"39\" transform=\"translate(105 152)\"></circle>\r\n    <line class=\"b\" transform=\"translate(123.5 190.5)\" x1=\"80\"></line>\r\n    <line class=\"b\" transform=\"translate(123.5 164.5)\" x2=\"26\" y1=\"26\"></line>\r\n    <line class=\"c\" transform=\"translate(123.5 190.5)\" x1=\"26\" y1=\"27\"></line>\r\n    <text class=\"d\" transform=\"translate(117 274)\">\r\n      <tspan x=\"0\" y=\"0\">BACK</tspan>\r\n    </text>\r\n  </g>\r\n</svg>\r\n<div class=\"add-wrapper\">\r\n\r\n\r\n    <section class=\"main-card\">\r\n  \r\n  \r\n  \r\n      <div class=\"city-search-wrapper\">\r\n  \r\n        <div class=\"city-search-header\">\r\n     \r\n          <h3 class=\"city-search-title\">SEARCH FOR A CITY</h3>\r\n          <div class=\"search-city-input-wrapper\">\r\n            <input class=\"search-city-input\" auto-complete-placeholder=\"search city\" placeholder=\"search city\"\r\n                   auto-complete [(ngModel)]=\"city\"\r\n                   [source]=\"capitals\" [max-num-list]=\"5\" [close-on-focusout]=\"false\" #input/>\r\n            <button class=\"search-city-btn\" (click)=\"selectCity(input.value)\">\r\n              <svg class=\"search-icon\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 451 451\">\r\n                <path fill=\"#FFF\"\r\n                      d=\"M447 428L337.6 318.4A192.5 192.5 0 0 0 192.4 0C86.3 0 0 86.3 0 192.3s86.3 192.3 192.3 192.3c48.2 0 92.3-17.8 126-47.2L428.2 447a13.2 13.2 0 0 0 19 0 13.5 13.5 0 0 0 0-19zM27 192.3C27 101.1 101 27 192.3 27c91.1 0 165.3 74.2 165.3 165.3s-74.2 165.4-165.4 165.4A165.6 165.6 0 0 1 27 192.3z\"></path>\r\n              </svg>\r\n            </button>\r\n          </div>\r\n<!-- \r\n          <form >\r\n            <div class=\"form-group\">\r\n            <label > </label>\r\n            <input type=\"text\" class=\"search-city-input\"name=\"city\" [(ngModel)]=\"city\" placeholder=\"Search Here\" id=\"email\">\r\n            <label > </label>\r\n            </div>\r\n            </form> -->\r\n\r\n        </div>\r\n  \r\n        <div class=\"city-search-body\">\r\n          <span *ngIf=\"showNote\" class=\"city-invalid-note\">City name is not valid</span>\r\n          <app-weather-card (cityStored)=\"selectedCity = ''\" *ngIf=\"cardCity\" [city]=\"cardCity\"\r\n                            [addMode]=\"true\"></app-weather-card>\r\n        </div>\r\n  \r\n      </div>\r\n\r\n    </section>\r\n  </div>\r\n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/details/details.component.html": 
        /*!********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/details/details.component.html ***!
          \********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"details-page__wrapper\" [ngClass]=\"{'details-page__wrapper-dark': darkMode}\">\r\n    <div class=\"background-gradient__circle\" [ngClass]=\"{'background-gradient__circle-dark': darkMode}\"></div>\r\n    <svg class=\"back__button\" routerLink=\"\" viewBox=\"4085 152 98.5 126\" tabindex=\"0\">\r\n      <defs>\r\n        <style>.a {\r\n          fill: #2f1533b2;\r\n        }\r\n  \r\n        .b {\r\n          fill: rgba(12, 12, 12, 0);\r\n        }\r\n  \r\n        .b, .c {\r\n          stroke: #fff;\r\n          stroke-width: 2px;\r\n        }\r\n  \r\n        .c {\r\n          fill: none;\r\n        }\r\n  \r\n        .d {\r\n          fill: #fff;\r\n          font-size: 15px;\r\n          font-family: SegoeUI, Segoe UI, sans-serif;\r\n          letter-spacing: 0.4em;\r\n        }</style>\r\n      </defs>\r\n      <g transform=\"translate(3980)\">\r\n        <circle class=\"a\" cx=\"39\" cy=\"39\" r=\"39\" transform=\"translate(105 152)\"></circle>\r\n        <line class=\"b\" transform=\"translate(123.5 190.5)\" x1=\"80\"></line>\r\n        <line class=\"b\" transform=\"translate(123.5 164.5)\" x2=\"26\" y1=\"26\"></line>\r\n        <line class=\"c\" transform=\"translate(123.5 190.5)\" x1=\"26\" y1=\"27\"></line>\r\n        <text class=\"d\" transform=\"translate(117 274)\">\r\n          <tspan x=\"0\" y=\"0\">BACK</tspan>\r\n        </text>\r\n      </g>\r\n    </svg>\r\n    <section class=\"main-weather__card\">\r\n      <section class=\"card-header__container-dark\" [ngSwitch]=\"true\">\r\n        <img class=\"city__illustration\" [src]=\"cityIllustrationPath\"/>\r\n        <div class=\"header-content__wrapper\">\r\n          <div class=\"today-weather__container\">\r\n            <!--{{today}}-->\r\n            <div class=\"temp-state__container\">\r\n              <span class=\"temperature__text\">{{temp}}°</span>\r\n              <span class=\"weather-state__text\">{{state}}</span>\r\n            </div>\r\n            <div class=\"hum-wind__container\">\r\n              <div class=\"hum__container\">\r\n                <span class=\"hum__text\">humidity</span>\r\n                <span class=\"hum-value__text\">{{hum}} %</span>\r\n              </div>\r\n              <div class=\"hum-wind__separator\">&nbsp;</div>\r\n              <div class=\"wind__container\">\r\n                <span class=\"wind__text\">wind</span>\r\n                <span class=\"wind-value__text\">{{wind}} K/M</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"city-name__container\">\r\n            <div class=\"city-name__underline\">\r\n              <span class=\"city-name__text\">{{city}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </section>\r\n     \r\n      \r\n        <section class=\"forecast__container\">\r\n          <div class=\"day-weather__container\" [ngSwitch]=\"true\" *ngFor=\"let day of daysForecast | keyvalue\">\r\n            <span class=\"day-name__text\">{{day.key}}</span>\r\n            <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day.value.state === 'Clouds'\"\r\n                 viewBox=\"2436.9 -843.1 275.5 274.1\">\r\n              <g data-name=\"cloudy icon\" transform=\"translate(84 790)\">\r\n                <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" data-name=\"Ellipse 23\" transform=\"translate(2354 -1633)\"/>\r\n                <path fill=\"#ffde17\"\r\n                      d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\"\r\n                      data-name=\"Subtraction 1\"/>\r\n              </g>\r\n            </svg>\r\n            <svg *ngSwitchCase=\"day.value.state === 'Haze' || day.value.state === 'Fog'\" viewBox=\"0 0 454 366\">\r\n              <path fill=\"#12bcff\"\r\n                    d=\"M340 110c-40 0-75-14-110-26-30-11-61-21-92-27-35-6-65 6-89 34a28 28 0 0 1-40 3C-3 83-3 66 8 54 53 1 110-9 174 7c36 9 71 25 106 36 19 5 39 10 58 11 27 2 48-13 65-33 12-13 29-15 41-5s13 28 1 41c-28 33-63 53-105 53zM120 312c-27-1-51 11-70 34-11 13-29 15-41 4-12-10-12-28-1-40 45-53 103-63 167-47 37 10 72 25 108 36 18 6 37 10 55 11 27 2 47-12 64-32 8-9 17-15 30-12 21 4 29 28 16 45-37 45-85 65-143 51-34-8-66-21-99-32-27-9-53-18-86-18zM123 128c42 1 81 15 120 29 26 9 52 18 79 24 28 6 53-3 74-24l11-11c11-11 27-11 39-1 10 10 11 26 1 38-35 43-81 64-137 52-34-7-67-20-100-32-29-10-59-20-91-19-28 1-51 13-69 34-12 13-29 15-41 4s-12-28 0-41c30-35 68-52 114-53z\"/>\r\n            </svg>\r\n            <svg class=\"forecast-condition__icon\"\r\n                 *ngSwitchCase=\"day.value.state === 'Rain' || day.value.state === 'Drizzle'\"\r\n                 viewBox=\"3170 -843.1 163.5 242.7\">\r\n              <g data-name=\"Rain Icon\">\r\n                <g data-name=\"Water Drops\">\r\n                  <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" data-name=\"Path 7\"/>\r\n                  <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" data-name=\"Path 3\"/>\r\n                </g>\r\n              </g>\r\n            </svg>\r\n            <svg class=\"forecast-condition__icon\" *ngSwitchCase=\"day.value.state === 'Storm' || day.value.state === 'Thunderstorm'\"\r\n                 viewBox=\"3487.9 -810.7 291.2 200.3\">\r\n              <g data-name=\"Strom icon\" transform=\"translate(1959 -1260.7)\">\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 14\" rx=\"55.3\" ry=\"51.7\"\r\n                         transform=\"translate(1529 490.4)\"/>\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 15\" rx=\"55.3\" ry=\"51.7\"\r\n                         transform=\"translate(1569.6 467.8)\"/>\r\n                <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 16\"\r\n                        transform=\"translate(1618.9 476.8)\"/>\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 17\" rx=\"55.3\" ry=\"51.7\"\r\n                         transform=\"translate(1631.8 450)\"/>\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 18\" rx=\"55.3\" ry=\"51.7\"\r\n                         transform=\"translate(1687.1 477.5)\"/>\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 19\" rx=\"55.3\" ry=\"51.7\"\r\n                         transform=\"translate(1709.6 507.3)\"/>\r\n                <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-1\" data-name=\"Ellipse 20\"\r\n                        transform=\"translate(1639.6 500.1)\"/>\r\n                <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-1\" data-name=\"Ellipse 21\" rx=\"55.3\" ry=\"51.7\"\r\n                         transform=\"translate(1569.6 507.3)\"/>\r\n                <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"18\"\r\n                      d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" data-name=\"Path 59\"/>\r\n                <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\"\r\n                      data-name=\"Path 60\"/>\r\n              </g>\r\n            </svg>\r\n            <svg class=\"forecast-condition__icon\"\r\n                 *ngSwitchCase=\"day.value.state === 'Sunny' || day.value.state === 'Clear'\"\r\n                 viewBox=\"2050 -845 262 262\">\r\n              <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" data-name=\"Sun Icon\" transform=\"translate(2050 -845)\"/>\r\n            </svg>\r\n  \r\n  \r\n            <span class=\"day-temp__text\">{{day.value.temp}}°</span>\r\n            <span class=\"day-state__text\">{{day.value.state}}</span>\r\n          </div>\r\n        </section>\r\n    </section>\r\n  </div>\r\n  \r\n  \r\n  <app-error [message]=\"errorMessage\"></app-error>\r\n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html": 
        /*!**************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
          \**************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main__container\">\r\n    <app-weather-card *ngFor=\"let city of cities | async;\" [city]=\"city?.name\"></app-weather-card>\r\n    <app-add-card></app-add-card>\r\n  </div>\r\n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/add-card/add-card.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/add-card/add-card.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"add__card\" routerLink=\"/add\" [ngClass]=\"{'add__card-dark': darkMode}\">\r\n      <div class=\"header__container\">\r\n        <span class=\"card__title\">Add city</span>\r\n      </div>\r\n      <div class=\"body__container\">\r\n        <svg class=\"add__icon\" id=\"Plus_Icon\" *ngIf=\"!darkMode\" data-name=\"Plus Icon\" viewBox=\"1454.4 326.4 209.1 209.1\">\r\n          <defs>\r\n  \r\n          </defs>\r\n          <g filter=\"url(#Ellipse_7)\">\r\n            <circle id=\"Ellipse_7-2\" cx=\"95.6\" cy=\"95.6\" r=\"95.6\" fill=\"#f5f8ff\" data-name=\"Ellipse 7\"\r\n                    transform=\"translate(1463.4 332.4)\"></circle>\r\n          </g>\r\n          <rect id=\"Rectangle_3\" width=\"12.8\" height=\"142.9\" class=\"cls-299\" data-name=\"Rectangle 3\" rx=\"5\"\r\n                transform=\"translate(1552.6 358.1)\"></rect>\r\n          <rect id=\"Rectangle_4\" width=\"12.8\" height=\"142.9\" class=\"cls-299\" data-name=\"Rectangle 4\" rx=\"5\"\r\n                transform=\"rotate(90 603.6 1026.8)\"/>\r\n        </svg>\r\n        <svg class=\"add__icon\" viewBox=\"0 0 209.1 209.1\" *ngIf=\"darkMode\">\r\n          <defs>\r\n            <filter id=\"a\" width=\"209.1\" height=\"209.1\" x=\"0\" y=\"0\" filterUnits=\"userSpaceOnUse\">\r\n              <feOffset dy=\"3\"/>\r\n              <feGaussianBlur result=\"blur\" stdDeviation=\"3\"/>\r\n              <feFlood flood-color=\"#333\" flood-opacity=\".1\"/>\r\n              <feComposite in2=\"blur\" operator=\"in\"/>\r\n              <feComposite in=\"SourceGraphic\"/>\r\n            </filter>\r\n            <linearGradient id=\"b\" x1=\".5\" x2=\".5\" y2=\"1\" gradientUnits=\"objectBoundingBox\">\r\n              <stop offset=\"0\" stop-color=\"#f41878\"/>\r\n              <stop offset=\"1\" stop-color=\"#0e008b\"/>\r\n            </linearGradient>\r\n            <linearGradient id=\"c\" x1=\".5\" x2=\".5\" y2=\"1\" gradientUnits=\"objectBoundingBox\">\r\n              <stop offset=\"0\" stop-color=\"#f41878\"/>\r\n              <stop offset=\"1\" stop-color=\"#18058c\"/>\r\n            </linearGradient>\r\n          </defs>\r\n          <g data-name=\"Plus Icon\" transform=\"translate(-1454.4 -326.4)\">\r\n            <circle cx=\"95.6\" cy=\"95.6\" r=\"95.6\" fill=\"#39518a\" data-name=\"Ellipse 7\" filter=\"url(#a)\"\r\n                    transform=\"translate(1463.4 332.4)\"/>\r\n            <rect width=\"12.8\" height=\"142.9\" fill=\"url(#b)\" data-name=\"Rectangle 3\" rx=\"5\"\r\n                  transform=\"translate(1552.6 358.1)\"/>\r\n            <rect width=\"12.8\" height=\"142.9\" fill=\"url(#c)\" data-name=\"Rectangle 4\" rx=\"5\"\r\n                  transform=\"rotate(90 603.6 1026.8)\"/>\r\n          </g>\r\n        </svg>\r\n  \r\n        <img src=\"https://pngriver.com/wp-content/uploads/2018/03/Download-City-PNG-Transparent-Image-For-Designing-Use.png\" style=\"margin-top: -30px !important; border-radius: 30px;\"width=\"300\" height=\"300\">\r\n      </div>\r\n    </div>\r\n    ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/error/error.component.html": 
        /*!*************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/error/error.component.html ***!
          \*************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"error-wrapper\" [ngClass]=\"{'error-wrapper-active': message}\">\r\n    <span class=\"error-message\">{{message}}</span>\r\n    <button class=\"error-btn\">{{action}}</button>\r\n  </div>\r\n  ");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/weather-card/weather-card.component.html": 
        /*!***************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ui/weather-card/weather-card.component.html ***!
          \***************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<section class=\"weather__card\" (click)=\"openDetails()\"\r\n         *ngIf=\"addMode ? !cityAdded && cityName : true\"\r\n         [ngClass]=\"{'weather__card-dark': darkMode, 'weather__card-add': addMode}\">\r\n  <span class=\"city-name__text\">{{cityName}}</span>\r\n  <div class=\"weather-icon__container\" [ngSwitch]=\"true\">\r\n    <svg *ngSwitchCase=\"state === 'Sunny' || state === 'Clear'\" viewBox=\"2050 -845 262 262\">\r\n      <circle cx=\"131\" cy=\"131\" r=\"131\" fill=\"#ffde17\" data-name=\"Sun Icon\" transform=\"translate(2050 -845)\"/>\r\n    </svg>\r\n    <svg *ngSwitchCase=\"state === 'Clouds'\" viewBox=\"2436.9 -843.1 275.5 274.1\">\r\n      <g data-name=\"cloudy icon\" transform=\"translate(84 790)\">\r\n        <circle cx=\"137\" cy=\"137\" r=\"137\" fill=\"#fff\" data-name=\"Ellipse 23\" transform=\"translate(2354 -1633)\"/>\r\n        <path fill=\"#ffde17\"\r\n              d=\"M2523.4-1361.5a37.2 37.2 0 0 0 8.4-23.4c0-22-19.8-40-44.1-40l-3.4.1h-.5a39.8 39.8 0 0 0-39.4-33.7 40.1 40.1 0 0 0-10 1.2 40 40 0 0 0-35.2-21.2 40.1 40.1 0 0 0-38.5 29 137.4 137.4 0 0 1-7.8-45.8 138.8 138.8 0 0 1 2.8-27.8 137 137 0 0 1 8-25.8 137.8 137.8 0 0 1 12.7-23.4 138.8 138.8 0 0 1 16.8-20.4 138.8 138.8 0 0 1 20.4-16.9 137.8 137.8 0 0 1 23.4-12.7 137 137 0 0 1 25.9-8 138.8 138.8 0 0 1 27.7-2.8 138.8 138.8 0 0 1 27.8 2.8 137 137 0 0 1 25.9 8 137.8 137.8 0 0 1 23.4 12.7 138.8 138.8 0 0 1 20.4 16.9 138.7 138.7 0 0 1 16.8 20.4 137.8 137.8 0 0 1 12.7 23.4 137 137 0 0 1 8 25.8 138.8 138.8 0 0 1 2.8 27.8 137.4 137.4 0 0 1-8 46.1 137.2 137.2 0 0 1-21.9 39.6 138.2 138.2 0 0 1-33.2 30.1 136.8 136.8 0 0 1-41.9 18z\"\r\n              data-name=\"Subtraction 1\"/>\r\n      </g>\r\n    </svg>\r\n    <svg *ngSwitchCase=\"state === 'Rain' || state === 'Drizzle' || state === 'Mist'\" viewBox=\"3170 -843.1 163.5 242.7\">\r\n      <g data-name=\"Rain Icon\">\r\n        <g data-name=\"Water Drops\">\r\n          <path fill=\"#0032cc\" d=\"M3295.4-824.5s85.8 133.5 0 133.5 0-133.5 0-133.5z\" data-name=\"Path 7\"/>\r\n          <path fill=\"#003eff\" d=\"M3239.4-843s-156.1 242.6 0 242.6 0-242.7 0-242.7z\" data-name=\"Path 3\"/>\r\n        </g>\r\n      </g>\r\n    </svg>\r\n    <svg *ngSwitchCase=\"state === 'Haze' || state === 'Fog'\" viewBox=\"0 0 454 366\">\r\n      <path fill=\"#12bcff\"\r\n            d=\"M340 110c-40 0-75-14-110-26-30-11-61-21-92-27-35-6-65 6-89 34a28 28 0 0 1-40 3C-3 83-3 66 8 54 53 1 110-9 174 7c36 9 71 25 106 36 19 5 39 10 58 11 27 2 48-13 65-33 12-13 29-15 41-5s13 28 1 41c-28 33-63 53-105 53zM120 312c-27-1-51 11-70 34-11 13-29 15-41 4-12-10-12-28-1-40 45-53 103-63 167-47 37 10 72 25 108 36 18 6 37 10 55 11 27 2 47-12 64-32 8-9 17-15 30-12 21 4 29 28 16 45-37 45-85 65-143 51-34-8-66-21-99-32-27-9-53-18-86-18zM123 128c42 1 81 15 120 29 26 9 52 18 79 24 28 6 53-3 74-24l11-11c11-11 27-11 39-1 10 10 11 26 1 38-35 43-81 64-137 52-34-7-67-20-100-32-29-10-59-20-91-19-28 1-51 13-69 34-12 13-29 15-41 4s-12-28 0-41c30-35 68-52 114-53z\"/>\r\n    </svg>\r\n    <svg *ngSwitchCase=\"state === 'Storm' || state === 'Thunderstorm'\" viewBox=\"3487.9 -810.7 291.2 200.3\">\r\n      <g data-name=\"Strom icon\" transform=\"translate(1959 -1260.7)\">\r\n        <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-99\" data-name=\"Ellipse 14\" rx=\"55.3\" ry=\"51.7\"\r\n                 transform=\"translate(1529 490.4)\"/>\r\n        <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-99\" data-name=\"Ellipse 15\" rx=\"55.3\" ry=\"51.7\"\r\n                 transform=\"translate(1569.6 467.8)\"/>\r\n        <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-99\" data-name=\"Ellipse 16\"\r\n                transform=\"translate(1618.9 476.8)\"/>\r\n        <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-99\" data-name=\"Ellipse 17\" rx=\"55.3\" ry=\"51.7\"\r\n                 transform=\"translate(1631.8 450)\"/>\r\n        <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-99\" data-name=\"Ellipse 18\" rx=\"55.3\" ry=\"51.7\"\r\n                 transform=\"translate(1687.1 477.5)\"/>\r\n        <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-99\" data-name=\"Ellipse 19\" rx=\"55.3\" ry=\"51.7\"\r\n                 transform=\"translate(1709.6 507.3)\"/>\r\n        <circle cx=\"55.3\" cy=\"55.3\" r=\"55.3\" class=\"cls-99\" data-name=\"Ellipse 20\"\r\n                transform=\"translate(1639.6 500.1)\"/>\r\n        <ellipse cx=\"55.3\" cy=\"51.7\" class=\"cls-99\" data-name=\"Ellipse 21\" rx=\"55.3\" ry=\"51.7\"\r\n                 transform=\"translate(1569.6 507.3)\"/>\r\n        <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"18\"\r\n              d=\"M1732.5 644l-61.4-61.4 22.5-10.3 26.8 5.1 9.5-22.4-38-37.2\" data-name=\"Path 59\"/>\r\n        <path fill=\"none\" stroke=\"#fd0\" stroke-width=\"15\" d=\"M1597.2 539.5l31.2 25.9-24.8 22.2 17.3 36.2\"\r\n              data-name=\"Path 60\"/>\r\n      </g>\r\n    </svg>\r\n  </div>\r\n  <div class=\"temperature-text__container\">\r\n    <span class=\"temperature__text\">{{ citesWeather }}</span>\r\n    <span class=\"temperature-metric__text\">{{ temp }}°</span>\r\n    <span class=\"weather-condition__text\">{{ state }}</span>\r\n  </div>\r\n  <section class=\"min-max__container\">\r\n    <div class=\"min__container\">\r\n      <svg class=\"min-arrow__icon\" viewBox=\"188.5 807 21 21\">\r\n        <path fill=\"#00ff9b\" d=\"M209.5 817.5h-21L199 828z\" data-name=\"Min Arrow\"/>\r\n      </svg>\r\n\r\n      <span class=\"min-temperature__text\">{{ minTemp }}</span>\r\n      <span class=\"min__text\">Min</span>\r\n    </div>\r\n    <div class=\"max__container\">\r\n      <svg class=\"max-arrow__icon\" viewBox=\"449.5 820 21 21\">\r\n        <path fill=\"red\" d=\"M449.5 830.5h21L460 820z\" data-name=\"Max Arrow\"/>\r\n      </svg>\r\n      <span class=\"max-temperature__text\">{{ maxTemp }}</span>\r\n      <span class=\"max__text\">Max</span>\r\n    </div>\r\n  </section>\r\n  <button class=\"add-city-btn\" *ngIf=\"addMode\" (click)=\"addCity()\">ADD CITY +</button>\r\n\r\n</section>\r\n\r\n<div *ngIf=\"cityAdded\" class=\"city-added-note\">\r\n  <h5 class=\"add-success-text\">City has been successfully added!</h5>\r\n  <svg viewBox=\"0 0 50 50\" height=\"5rem\">\r\n    <circle cx=\"25\" cy=\"25\" r=\"25\" fill=\"#25ae88\"/>\r\n    <path fill=\"none\" stroke=\"#fff\" stroke-linecap=\"round\" stroke-linejoin=\"round\" stroke-miterlimit=\"10\"\r\n          stroke-width=\"2\"\r\n          d=\"M38 15L22 33l-10-8\"/>\r\n  </svg>\r\n</div>\r\n\r\n<app-error [message]=\"errorMessage\"></app-error>\r\n");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation. All rights reserved.
            Licensed under the Apache License, Version 2.0 (the "License"); you may not use
            this file except in compliance with the License. You may obtain a copy of the
            License at http://www.apache.org/licenses/LICENSE-2.0
            
            THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
            KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
            WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
            MERCHANTABLITY OR NON-INFRINGEMENT.
            
            See the Apache Version 2.0 License for specific language governing permissions
            and limitations under the License.
            ***************************************************************************** */
            /* global Reflect, Promise */
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                        t[p] = s[p];
                if (s != null && typeof Object.getOwnPropertySymbols === "function")
                    for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                            t[p[i]] = s[p[i]];
                    }
                return t;
            }
            function __decorate(decorators, target, key, desc) {
                var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
            /* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/details/details.component */ "./src/app/pages/details/details.component.ts");
            /* harmony import */ var _pages_add_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/add/add.component */ "./src/app/pages/add/add.component.ts");
            var routes = [
                { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] },
                { path: 'details/:city', component: _pages_details_details_component__WEBPACK_IMPORTED_MODULE_4__["DetailsComponent"] },
                { path: 'add', component: _pages_add_add_component__WEBPACK_IMPORTED_MODULE_5__["AddComponent"] },
                { path: '**', redirectTo: '' }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.component.css": 
        /*!***********************************!*\
          !*** ./src/app/app.component.css ***!
          \***********************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".root__container {\r\n  width: 100%;\r\n  min-height: 100vh;\r\n  display: flex;\r\n  align-items: center;\r\n  flex-flow: column;\r\n  background-image: linear-gradient(to top, rgba(0, 124, 133, 0.521) 0%, #ff3bef6e 100%);\r\n}\r\n\r\n.root__container-dark {\r\n  /*background: linear-gradient(to top, #30cfd0 0%, #330867 100%);*/\r\n  background: linear-gradient(to bottom, #000000,#33011a );\r\n}\r\n\r\n.side-menu__container {\r\n  position: fixed;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  overflow: hidden;\r\n  pointer-events: none;\r\n  z-index: 50;\r\n}\r\n\r\n.side-menu__container-active {\r\n  pointer-events: auto;\r\n}\r\n\r\n.side-menu__container::before {\r\n  content: '';\r\n  cursor: pointer;\r\n  position: absolute;\r\n  display: block;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: #0c1066;\r\n  opacity: 0;\r\n  transition: opacity 300ms linear;\r\n  will-change: opacity;\r\n}\r\n\r\n.side-menu__container-active::before {\r\n  opacity: 0.3;\r\n}\r\n\r\n.slide-menu {\r\n  box-sizing: border-box;\r\n  transform: translateX(-200%);\r\n  position: relative;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 50;\r\n  min-height: 100vh;\r\n  width: 90%;\r\n  max-width: 26rem;\r\n  background-color: rgba(107, 107, 107, 0.445);\r\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: 2fr 4fr 1fr;\r\n  grid-gap: 1rem;\r\n  transition: transform 300ms linear;\r\n  will-change: transform;\r\n}\r\n\r\n.slide-menu-active {\r\n  transform: none;\r\n}\r\n\r\n.slide-menu-active-dark {\r\n  background-color: #2B244D;\r\n}\r\n\r\n.menu-header-dark {\r\n  background: linear-gradient(to top, #30cfd0 0%, #330867 100%);\r\n}\r\n\r\n.greeting__text {\r\n  grid-area: greeting;\r\n  font-size: 1.25rem;\r\n  letter-spacing: 0.15rem;\r\n  text-transform: uppercase;\r\n  margin-top: 1rem;\r\n  justify-self: center;\r\n  align-self: center;\r\n}\r\n\r\n.account-details {\r\n  grid-area: details;\r\n  display: flex;\r\n  flex-flow: column;\r\n  margin-left: 1rem;\r\n  align-self: center;\r\n}\r\n\r\n.name__text {\r\n  font-size: 1.15rem;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.email__text {\r\n  font-size: 0.9rem;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.menu-body {\r\n  display: grid;\r\n  width: 100%;\r\n}\r\n\r\n.menu-links {\r\n  display: flex;\r\n  flex-flow: column;\r\n  list-style: none;\r\n}\r\n\r\n.menu-links-dark {\r\n  color: white;\r\n}\r\n\r\n.link-active {\r\n  color: rgb(0, 47, 68);\r\n  border-bottom: 1px solid rgb(0, 47, 68);\r\n}\r\n\r\n.menu-link {\r\n  outline: none;\r\n  font-size: 1rem;\r\n  padding: 1rem 0;\r\n  margin: 0.5rem 0;\r\n  cursor: pointer;\r\n}\r\n\r\n/*Header*/\r\n\r\n.main__header {\r\n  background-color: rgba(107, 107, 107, 0.295);\r\n  width: 100%;\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 0.25fr;\r\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.048);\r\n  margin: 0;\r\n  min-height: 4rem;\r\n  align-items: center;\r\n}\r\n\r\n.main__header-dark {\r\n  background-color: rgba(80, 67, 145, 0.445);\r\n  color: white;\r\n}\r\n\r\n.toggle-button__container {\r\n  cursor: pointer;\r\n  position: relative;\r\n  margin: 0 0.75rem 0 0.25rem;\r\n  display: inline-flex;\r\n}\r\n\r\n.mode-toggle__container {\r\n  display: flex;\r\n  align-items: center;\r\n  flex-wrap: nowrap;\r\n}\r\n\r\n.mode-toggle__input {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n}\r\n\r\n.mode-toggle__bg {\r\n  height: 1rem;\r\n  width: 2rem;\r\n  border-radius: 0.5rem;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  display: inline-block;\r\n  transition: background-color 300ms linear;\r\n}\r\n\r\n.mode-toggle__circle {\r\n  height: 1.30rem;\r\n  width: 1.30rem;\r\n  background-color: #2B244D;\r\n  position: absolute;\r\n  top: -0.18rem;\r\n  border-radius: 50%;\r\n  box-shadow: 0 0 0 rgba(0, 0, 255, 0.5);\r\n  transition: left 300ms linear;\r\n  left: 0.2rem;\r\n}\r\n\r\n.mode-toggle__circle-checked {\r\n  background-color: white;\r\n  left: 1.5rem;\r\n}\r\n\r\n.mode-toggle__bg-checked {\r\n  background-color: #FF0070;\r\n}\r\n\r\n.mode-toggle__text {\r\n  font-size: 0.75rem;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n/*Content*/\r\n\r\n.left__section {\r\n  display: grid;\r\n  grid-template-rows: 1fr;\r\n  grid-template-columns: 1fr 1fr;\r\n  max-width: 5rem;\r\n}\r\n\r\n.date__text {\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n/*SVGs*/\r\n\r\n.hamburger__icon {\r\n  position: relative;\r\n  z-index: 50;\r\n  height: 1rem;\r\n  padding: 0.5rem 1.5rem;\r\n  margin-right: 1rem;\r\n  cursor: pointer;\r\n}\r\n\r\n.logo__icon {\r\n  height: 2rem;\r\n  margin-left: 1rem;\r\n}\r\n\r\n.logo__text {\r\n  fill: #2B244D;\r\n}\r\n\r\n.logo__text-dark {\r\n  fill: #ffff;\r\n}\r\n\r\n.hamburger__icon__fill {\r\n  fill: #2B244D;\r\n}\r\n\r\n.hamburger__icon__fill-dark {\r\n  fill: #ffff;\r\n}\r\n\r\n/*\r\n================\r\n    Body\r\n================\r\n*/\r\n\r\n.main-container__bg {\r\n  min-height: 100vh;\r\n  min-width: 100% !important;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n/* Media Query:   LT-MD   */\r\n\r\n@media screen and (max-width: 959px) {\r\n  .main__header {\r\n    grid-template-columns: 1fr;\r\n    justify-items: center;\r\n    padding: 1rem 0;\r\n    min-height: 8rem;\r\n  }\r\n\r\n  .left__section {\r\n    justify-self: start;\r\n    max-width: none;\r\n    grid-template-columns: 0 5fr;\r\n    width: 100%;\r\n  }\r\n\r\n  .logo__icon {\r\n    margin: 0 auto;\r\n  }\r\n\r\n  .hamburger__icon {\r\n    margin-right: 0;\r\n  }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 300px) {\r\n  .slide-menu {\r\n    width: 100%;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0VBQ1gsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLHNGQUFzRjtBQUN4Rjs7QUFFQTtFQUNFLGlFQUFpRTtFQUNqRSx3REFBd0Q7QUFDMUQ7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsT0FBTztFQUNQLE1BQU07RUFDTixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxvQkFBb0I7QUFDdEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixVQUFVO0VBQ1YsZ0NBQWdDO0VBQ2hDLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixPQUFPO0VBQ1AsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLDRDQUE0QztFQUM1Qyx5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiwrQkFBK0I7RUFDL0IsY0FBYztFQUNkLGtDQUFrQztFQUNsQyxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsNkRBQTZEO0FBQy9EOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIseUJBQXlCO0VBQ3pCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHVDQUF1QztBQUN6Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBLFNBQVM7O0FBQ1Q7RUFDRSw0Q0FBNEM7RUFDNUMsV0FBVztFQUNYLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsMkNBQTJDO0VBQzNDLFNBQVM7RUFDVCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsMENBQTBDO0VBQzFDLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usd0JBQXdCO0VBQ3hCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gscUJBQXFCO0VBQ3JCLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIseUNBQXlDO0FBQzNDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCx5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsc0NBQXNDO0VBQ3RDLDZCQUE2QjtFQUM3QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHlCQUF5QjtFQUN6QixzQkFBc0I7QUFDeEI7O0FBRUEsVUFBVTs7QUFDVjtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsc0JBQXNCO0FBQ3hCOztBQUVBLE9BQU87O0FBQ1A7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBOzs7O0NBSUM7O0FBQ0Q7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCO0VBQzFCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBLDJCQUEyQjs7QUFDM0I7RUFDRTtJQUNFLDBCQUEwQjtJQUMxQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsNEJBQTRCO0lBQzVCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxlQUFlO0VBQ2pCOztBQUVGOztBQUVBO0VBQ0U7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJvb3RfX2NvbnRhaW5lciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMTI0LCAxMzMsIDAuNTIxKSAwJSwgI2ZmM2JlZjZlIDEwMCUpO1xyXG59XHJcblxyXG4ucm9vdF9fY29udGFpbmVyLWRhcmsge1xyXG4gIC8qYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzMwY2ZkMCAwJSwgIzMzMDg2NyAxMDAlKTsqL1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICMwMDAwMDAsIzMzMDExYSApO1xyXG59XHJcblxyXG4uc2lkZS1tZW51X19jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHotaW5kZXg6IDUwO1xyXG59XHJcblxyXG4uc2lkZS1tZW51X19jb250YWluZXItYWN0aXZlIHtcclxuICBwb2ludGVyLWV2ZW50czogYXV0bztcclxufVxyXG5cclxuLnNpZGUtbWVudV9fY29udGFpbmVyOjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICcnO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwYzEwNjY7XHJcbiAgb3BhY2l0eTogMDtcclxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGxpbmVhcjtcclxuICB3aWxsLWNoYW5nZTogb3BhY2l0eTtcclxufVxyXG5cclxuLnNpZGUtbWVudV9fY29udGFpbmVyLWFjdGl2ZTo6YmVmb3JlIHtcclxuICBvcGFjaXR5OiAwLjM7XHJcbn1cclxuXHJcbi5zbGlkZS1tZW51IHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMjAwJSk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHotaW5kZXg6IDUwO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgbWF4LXdpZHRoOiAyNnJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEwNywgMTA3LCAxMDcsIDAuNDQ1KTtcclxuICBib3gtc2hhZG93OiAwIDAgMnJlbSByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDRmciAxZnI7XHJcbiAgZ3JpZC1nYXA6IDFyZW07XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDMwMG1zIGxpbmVhcjtcclxuICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xyXG59XHJcblxyXG4uc2xpZGUtbWVudS1hY3RpdmUge1xyXG4gIHRyYW5zZm9ybTogbm9uZTtcclxufVxyXG5cclxuLnNsaWRlLW1lbnUtYWN0aXZlLWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyQjI0NEQ7XHJcbn1cclxuXHJcbi5tZW51LWhlYWRlci1kYXJrIHtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCAjMzBjZmQwIDAlLCAjMzMwODY3IDEwMCUpO1xyXG59XHJcblxyXG4uZ3JlZXRpbmdfX3RleHQge1xyXG4gIGdyaWQtYXJlYTogZ3JlZXRpbmc7XHJcbiAgZm9udC1zaXplOiAxLjI1cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjE1cmVtO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgbWFyZ2luLXRvcDogMXJlbTtcclxuICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hY2NvdW50LWRldGFpbHMge1xyXG4gIGdyaWQtYXJlYTogZGV0YWlscztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxufVxyXG5cclxuLm5hbWVfX3RleHQge1xyXG4gIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5lbWFpbF9fdGV4dCB7XHJcbiAgZm9udC1zaXplOiAwLjlyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxufVxyXG5cclxuLm1lbnUtYm9keSB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLm1lbnUtbGlua3Mge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG4ubWVudS1saW5rcy1kYXJrIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5saW5rLWFjdGl2ZSB7XHJcbiAgY29sb3I6IHJnYigwLCA0NywgNjgpO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMCwgNDcsIDY4KTtcclxufVxyXG5cclxuLm1lbnUtbGluayB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgcGFkZGluZzogMXJlbSAwO1xyXG4gIG1hcmdpbjogMC41cmVtIDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4vKkhlYWRlciovXHJcbi5tYWluX19oZWFkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTA3LCAxMDcsIDEwNywgMC4yOTUpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDAuMjVmcjtcclxuICBib3gtc2hhZG93OiAwIDAgMnJlbSByZ2JhKDAsIDAsIDI1NSwgMC4wNDgpO1xyXG4gIG1hcmdpbjogMDtcclxuICBtaW4taGVpZ2h0OiA0cmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYWluX19oZWFkZXItZGFyayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg4MCwgNjcsIDE0NSwgMC40NDUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxufVxyXG5cclxuLnRvZ2dsZS1idXR0b25fX2NvbnRhaW5lciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXJnaW46IDAgMC43NXJlbSAwIDAuMjVyZW07XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbi5tb2RlLXRvZ2dsZV9fY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbn1cclxuXHJcbi5tb2RlLXRvZ2dsZV9faW5wdXQge1xyXG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcclxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XHJcbn1cclxuXHJcbi5tb2RlLXRvZ2dsZV9fYmcge1xyXG4gIGhlaWdodDogMXJlbTtcclxuICB3aWR0aDogMnJlbTtcclxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDMwMG1zIGxpbmVhcjtcclxufVxyXG5cclxuLm1vZGUtdG9nZ2xlX19jaXJjbGUge1xyXG4gIGhlaWdodDogMS4zMHJlbTtcclxuICB3aWR0aDogMS4zMHJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMkIyNDREO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IC0wLjE4cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3gtc2hhZG93OiAwIDAgMCByZ2JhKDAsIDAsIDI1NSwgMC41KTtcclxuICB0cmFuc2l0aW9uOiBsZWZ0IDMwMG1zIGxpbmVhcjtcclxuICBsZWZ0OiAwLjJyZW07XHJcbn1cclxuXHJcbi5tb2RlLXRvZ2dsZV9fY2lyY2xlLWNoZWNrZWQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGxlZnQ6IDEuNXJlbTtcclxufVxyXG5cclxuLm1vZGUtdG9nZ2xlX19iZy1jaGVja2VkIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkYwMDcwO1xyXG59XHJcblxyXG4ubW9kZS10b2dnbGVfX3RleHQge1xyXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbn1cclxuXHJcbi8qQ29udGVudCovXHJcbi5sZWZ0X19zZWN0aW9uIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICBtYXgtd2lkdGg6IDVyZW07XHJcbn1cclxuXHJcbi5kYXRlX190ZXh0IHtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbn1cclxuXHJcbi8qU1ZHcyovXHJcbi5oYW1idXJnZXJfX2ljb24ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA1MDtcclxuICBoZWlnaHQ6IDFyZW07XHJcbiAgcGFkZGluZzogMC41cmVtIDEuNXJlbTtcclxuICBtYXJnaW4tcmlnaHQ6IDFyZW07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4ubG9nb19faWNvbiB7XHJcbiAgaGVpZ2h0OiAycmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xyXG59XHJcblxyXG4ubG9nb19fdGV4dCB7XHJcbiAgZmlsbDogIzJCMjQ0RDtcclxufVxyXG5cclxuLmxvZ29fX3RleHQtZGFyayB7XHJcbiAgZmlsbDogI2ZmZmY7XHJcbn1cclxuXHJcbi5oYW1idXJnZXJfX2ljb25fX2ZpbGwge1xyXG4gIGZpbGw6ICMyQjI0NEQ7XHJcbn1cclxuXHJcbi5oYW1idXJnZXJfX2ljb25fX2ZpbGwtZGFyayB7XHJcbiAgZmlsbDogI2ZmZmY7XHJcbn1cclxuXHJcbi8qXHJcbj09PT09PT09PT09PT09PT1cclxuICAgIEJvZHlcclxuPT09PT09PT09PT09PT09PVxyXG4qL1xyXG4ubWFpbi1jb250YWluZXJfX2JnIHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBtaW4td2lkdGg6IDEwMCUgIWltcG9ydGFudDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi8qIE1lZGlhIFF1ZXJ5OiAgIExULU1EICAgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuICAubWFpbl9faGVhZGVyIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMXJlbSAwO1xyXG4gICAgbWluLWhlaWdodDogOHJlbTtcclxuICB9XHJcblxyXG4gIC5sZWZ0X19zZWN0aW9uIHtcclxuICAgIGp1c3RpZnktc2VsZjogc3RhcnQ7XHJcbiAgICBtYXgtd2lkdGg6IG5vbmU7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDAgNWZyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICAubG9nb19faWNvbiB7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICB9XHJcblxyXG4gIC5oYW1idXJnZXJfX2ljb24ge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzAwcHgpIHtcclxuICAuc2xpZGUtbWVudSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");
            /* harmony import */ var _services_fb_fb_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/fb/fb.service */ "./src/app/services/fb/fb.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(ui, fb, router) {
                    this.ui = ui;
                    this.fb = fb;
                    this.router = router;
                    this.showMenu = false;
                    this.userEmail = '';
                    this.loggedIn = this.fb.isAuth();
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub1 = this.ui.darkModeState.subscribe(function (value) {
                        _this.darkModeActive = value;
                    });
                    this.fb.auth.userData().subscribe(function (user) {
                        _this.userEmail = user.email;
                    });
                };
                AppComponent.prototype.toggleMenu = function () {
                    this.showMenu = !this.showMenu;
                };
                AppComponent.prototype.modeToggleSwitch = function () {
                    this.ui.darkModeState.next(!this.darkModeActive);
                };
                AppComponent.prototype.ngOnDestroy = function () {
                    this.sub1.unsubscribe();
                };
                AppComponent.prototype.logout = function () {
                    this.toggleMenu();
                    this.router.navigateByUrl('/login');
                    this.fb.auth.signout();
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"] },
                { type: _services_fb_fb_service__WEBPACK_IMPORTED_MODULE_3__["FbService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
            /* harmony import */ var _pages_details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/details/details.component */ "./src/app/pages/details/details.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _ui_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ui/weather-card/weather-card.component */ "./src/app/ui/weather-card/weather-card.component.ts");
            /* harmony import */ var _ui_add_card_add_card_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ui/add-card/add-card.component */ "./src/app/ui/add-card/add-card.component.ts");
            /* harmony import */ var _pages_add_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/add/add.component */ "./src/app/pages/add/add.component.ts");
            /* harmony import */ var _ui_error_error_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ui/error/error.component */ "./src/app/ui/error/error.component.ts");
            /* harmony import */ var angularfire_lite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angularfire-lite */ "./node_modules/angularfire-lite/fesm2015/angularfire-lite.js");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
            /* harmony import */ var _ngui_auto_complete__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngui/auto-complete */ "./node_modules/@ngui/auto-complete/dist/index.js");
            /* harmony import */ var _ngui_auto_complete__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/ __webpack_require__.n(_ngui_auto_complete__WEBPACK_IMPORTED_MODULE_14__);
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm2015/service-worker.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                        _pages_details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"],
                        _ui_weather_card_weather_card_component__WEBPACK_IMPORTED_MODULE_8__["WeatherCardComponent"],
                        _ui_add_card_add_card_component__WEBPACK_IMPORTED_MODULE_9__["AddCardComponent"],
                        _pages_add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"],
                        _ui_error_error_component__WEBPACK_IMPORTED_MODULE_11__["ErrorComponent"],
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"].withServerTransition({ appId: 'serverApp' }),
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                        _ngui_auto_complete__WEBPACK_IMPORTED_MODULE_14__["NguiAutoCompleteModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                        angularfire_lite__WEBPACK_IMPORTED_MODULE_12__["AngularFireLite"].forRoot(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].config),
                        _angular_service_worker__WEBPACK_IMPORTED_MODULE_16__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].production })
                    ],
                    bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/pages/add/add.component.css": 
        /*!*********************************************!*\
          !*** ./src/app/pages/add/add.component.css ***!
          \*********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css2?family=Gotu&display=swap');\r\n\r\n.add-wrapper {\r\n  position: relative;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.main-card {\r\n  height: 87vh;\r\n  width: 90vw;\r\n  background-color: transparent;\r\n  border-radius: 1rem;\r\n  display: flex;\r\n  margin-top: -6rem;\r\n}\r\n\r\n.add-city-btn {\r\n  padding: 0.75rem 1.5rem;\r\n  background-color: #003EFF;\r\n  outline: none;\r\n  border: none;\r\n  color: white;\r\n  border-radius: 2rem;\r\n  font-size: 1rem;\r\n  min-width: 100%;\r\n}\r\n\r\n.city-search-wrapper {\r\n  flex-flow: column;\r\n  flex: 1 1;\r\n  position: relative;\r\n  overflow-y: auto;\r\n}\r\n\r\n/* width */\r\n\r\n::-webkit-scrollbar {\r\n  width: 10px;\r\n  background-color: transparent;\r\n}\r\n\r\n/* Track */\r\n\r\n::-webkit-scrollbar-track {\r\n  background-color: transparent;\r\n  background: transparent;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Handle */\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background: transparent; \r\n  border-radius: 10px;\r\n}\r\n\r\n/* Handle on hover */\r\n\r\n::-webkit-scrollbar-thumb:hover {\r\n  background: transparent; \r\n  border-radius: 10px;\r\n}\r\n\r\n.city-search-header {\r\n  width: 100%;\r\n  min-height: 40%;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-flow: column;\r\n}\r\n\r\n.city-search-body {\r\n  width: 100%;\r\n  min-height: 60%;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\n.city-search-hr {\r\n  word-spacing: 1rem;\r\n  margin: 2rem;\r\n}\r\n\r\n.search-city-input-wrapper {\r\n  position: relative;\r\n  width: 80%;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.search-city-input {\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  padding: 1.5rem;\r\n  border-radius: 3rem;\r\n  outline: none;\r\n  border: none;\r\n  box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);\r\n  font-size: 1rem;\r\n  color: #131F69;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.search-city-input:hover {\r\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 8px 0 rgba(0,0,0,.12), 0 5px 1px -2px rgba(0,0,0,.2);\r\n\r\n}\r\n\r\n.search-city-input::-webkit-input-placeholder {\r\n  font-size: 1rem;\r\n  color: #131F69;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.search-city-input::-moz-placeholder {\r\n  font-size: 1rem;\r\n  color: #131F69;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.search-city-input::-ms-input-placeholder {\r\n  font-size: 1rem;\r\n  color: #131F69;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.search-city-input::placeholder {\r\n  font-size: 1rem;\r\n  color: #131F69;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1rem;\r\n}\r\n\r\n.search-city-btn {\r\n  cursor: pointer;\r\n  position: absolute;\r\n  background: linear-gradient(to bottom, #3b0021,#9782c7 );\r\n  height: 5rem;\r\n  width: 5rem;\r\n  border-radius: 50%;\r\n  right: 0;\r\n  top: -0.35rem;\r\n  outline: none;\r\n  border: none;\r\n  z-index: 5;\r\n  box-shadow: 0 0 2rem 0.15rem rgba(0, 0, 255, 0.1);\r\n}\r\n\r\n.search-icon {\r\n  height: 50%;\r\n  width: 50%;\r\n}\r\n\r\n.city-search-title {\r\n  color: #0c1066;\r\n  margin: 4rem 0 3rem 0;\r\n  font-size: 22px;\r\n  margin-left: 40px;\r\n  font-weight: 200;\r\n  color: #131F69;\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1rem;\r\n  text-align: center;\r\n}\r\n\r\napp-weather-card {\r\n  margin: 2rem 0;\r\n  min-width: 28rem;\r\n}\r\n\r\n/* Media Query:   LT-XL  */\r\n\r\n@media screen and (max-width: 1919px) {\r\n  .add-city-btn {\r\n    height: 80%;\r\n    width: 75%;\r\n  }\r\n  .add-city-btn{\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n/* Media Query:   LT-MD   */\r\n\r\n@media screen and (max-width: 959px) {\r\n\r\n  app-weather-card {\r\n    width: 90%;\r\n    margin-bottom: 2rem;\r\n  }\r\n  \r\n  .add-wrapper {\r\n    flex-flow: column;\r\n  }\r\n\r\n  .main-card {\r\n    flex-flow: column;\r\n    margin-left: -1rem;\r\n    margin-bottom: 2rem;\r\n    height: auto;\r\n  }\r\n\r\n  .city-search-title {\r\n    margin: 2rem;\r\n  }\r\n\r\n}\r\n\r\n/* Media Query:   LT-LG  */\r\n\r\n@media screen and (max-width: 1279px) {\r\n  .back__button {\r\n    top: 1rem;\r\n  }\r\n}\r\n\r\n.back__button {\r\n  top: 3rem;\r\n  left: 3.25rem;\r\n  width: 5rem;\r\n  cursor: pointer;\r\n  z-index: 6;\r\n  margin: 0 auto;\r\n  right: 0;\r\n  left: 0;\r\n  padding: 40px;\r\n  margin-bottom: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWRkL2FkZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHlFQUF5RTs7QUFFekU7RUFDRSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLDZCQUE2QjtFQUM3QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2Qix5QkFBeUI7RUFDekIsYUFBYTtFQUNiLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUNDLFVBQVU7O0FBQ1Y7RUFDQyxXQUFXO0VBQ1gsNkJBQTZCO0FBQy9COztBQUVBLFVBQVU7O0FBQ1Y7RUFDRSw2QkFBNkI7RUFDN0IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQSxXQUFXOztBQUNYO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQSxvQkFBb0I7O0FBQ3BCO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxlQUFlO0VBQ2YsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7QUFDZDs7QUFHQTtFQUNFLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1Ysc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixZQUFZO0VBQ1osaURBQWlEO0VBQ2pELGVBQWU7RUFDZixjQUFjO0VBQ2QseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0UsbUdBQW1HOztBQUVyRzs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFMQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFMQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFMQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QseUJBQXlCO0VBQ3pCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsd0RBQXdEO0VBQ3hELFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWixVQUFVO0VBQ1YsaURBQWlEO0FBQ25EOztBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQSwwQkFBMEI7O0FBQzFCO0VBQ0U7SUFDRSxXQUFXO0lBQ1gsVUFBVTtFQUNaO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQSwyQkFBMkI7O0FBQzNCOztFQUVFO0lBQ0UsVUFBVTtJQUNWLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQjs7RUFFQTtJQUNFLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLFlBQVk7RUFDZDs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7QUFFRjs7QUFHQSwwQkFBMEI7O0FBQzFCO0VBQ0U7SUFDRSxTQUFTO0VBQ1g7QUFDRjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFDZixVQUFVO0VBQ1YsY0FBYztFQUNkLFFBQVE7RUFDUixPQUFPO0VBQ1AsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FkZC9hZGQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdvdHUmZGlzcGxheT1zd2FwJyk7XHJcblxyXG4uYWRkLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLm1haW4tY2FyZCB7XHJcbiAgaGVpZ2h0OiA4N3ZoO1xyXG4gIHdpZHRoOiA5MHZ3O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBtYXJnaW4tdG9wOiAtNnJlbTtcclxufVxyXG5cclxuLmFkZC1jaXR5LWJ0biB7XHJcbiAgcGFkZGluZzogMC43NXJlbSAxLjVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwM0VGRjtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgYm9yZGVyLXJhZGl1czogMnJlbTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2l0eS1zZWFyY2gtd3JhcHBlciB7XHJcbiAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgZmxleDogMSAxO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcbiAvKiB3aWR0aCAqL1xyXG4gOjotd2Via2l0LXNjcm9sbGJhciB7XHJcbiAgd2lkdGg6IDEwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi8qIFRyYWNrICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuIFxyXG4vKiBIYW5kbGUgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XHJcbiAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7IFxyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xyXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDsgXHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG4gIFxyXG4uY2l0eS1zZWFyY2gtaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA0MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxufVxyXG5cclxuLmNpdHktc2VhcmNoLWJvZHkge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDYwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uY2l0eS1zZWFyY2gtaHIge1xyXG4gIHdvcmQtc3BhY2luZzogMXJlbTtcclxuICBtYXJnaW46IDJyZW07XHJcbn1cclxuXHJcblxyXG4uc2VhcmNoLWNpdHktaW5wdXQtd3JhcHBlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiA4MCU7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4uc2VhcmNoLWNpdHktaW5wdXQge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMS41cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDNyZW07XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDJyZW0gMC4xNXJlbSByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgY29sb3I6ICMxMzFGNjk7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG4uc2VhcmNoLWNpdHktaW5wdXQ6aG92ZXIge1xyXG4gIGJveC1zaGFkb3c6IDAgMnB4IDJweCAwIHJnYmEoMCwwLDAsLjE0KSwgMCAxcHggOHB4IDAgcmdiYSgwLDAsMCwuMTIpLCAwIDVweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKTtcclxuXHJcbn1cclxuXHJcbi5zZWFyY2gtY2l0eS1pbnB1dDo6cGxhY2Vob2xkZXIge1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICBjb2xvcjogIzEzMUY2OTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbn1cclxuXHJcbi5zZWFyY2gtY2l0eS1idG4ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzNiMDAyMSwjOTc4MmM3ICk7XHJcbiAgaGVpZ2h0OiA1cmVtO1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICByaWdodDogMDtcclxuICB0b3A6IC0wLjM1cmVtO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgYm94LXNoYWRvdzogMCAwIDJyZW0gMC4xNXJlbSByZ2JhKDAsIDAsIDI1NSwgMC4xKTtcclxufVxyXG5cclxuLnNlYXJjaC1pY29uIHtcclxuICBoZWlnaHQ6IDUwJTtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4uY2l0eS1zZWFyY2gtdGl0bGUge1xyXG4gIGNvbG9yOiAjMGMxMDY2O1xyXG4gIG1hcmdpbjogNHJlbSAwIDNyZW0gMDtcclxuICBmb250LXNpemU6IDIycHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDIwMDtcclxuICBjb2xvcjogIzEzMUY2OTtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbmFwcC13ZWF0aGVyLWNhcmQge1xyXG4gIG1hcmdpbjogMnJlbSAwO1xyXG4gIG1pbi13aWR0aDogMjhyZW07XHJcbn1cclxuXHJcbi8qIE1lZGlhIFF1ZXJ5OiAgIExULVhMICAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcclxuICAuYWRkLWNpdHktYnRuIHtcclxuICAgIGhlaWdodDogODAlO1xyXG4gICAgd2lkdGg6IDc1JTtcclxuICB9XHJcbiAgLmFkZC1jaXR5LWJ0bntcclxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB9XHJcbn1cclxuXHJcbi8qIE1lZGlhIFF1ZXJ5OiAgIExULU1EICAgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTU5cHgpIHtcclxuXHJcbiAgYXBwLXdlYXRoZXItY2FyZCB7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmFkZC13cmFwcGVyIHtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIH1cclxuXHJcbiAgLm1haW4tY2FyZCB7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAuY2l0eS1zZWFyY2gtdGl0bGUge1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4vKiBNZWRpYSBRdWVyeTogICBMVC1MRyAgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XHJcbiAgLmJhY2tfX2J1dHRvbiB7XHJcbiAgICB0b3A6IDFyZW07XHJcbiAgfVxyXG59XHJcbiAgXHJcbi5iYWNrX19idXR0b24ge1xyXG4gIHRvcDogM3JlbTtcclxuICBsZWZ0OiAzLjI1cmVtO1xyXG4gIHdpZHRoOiA1cmVtO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB6LWluZGV4OiA2O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIHJpZ2h0OiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgcGFkZGluZzogNDBweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbiJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/pages/add/add.component.ts": 
        /*!********************************************!*\
          !*** ./src/app/pages/add/add.component.ts ***!
          \********************************************/
        /*! exports provided: AddComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function () { return AddComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/weather/weather.service */ "./src/app/services/weather/weather.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AddComponent = /** @class */ (function () {
                function AddComponent(weatherService, router) {
                    this.weatherService = weatherService;
                    this.router = router;
                    this.today = Date.now();
                    this.location = {
                        city: 'london',
                        code: 'uk'
                    };
                    this.defultCity = 'Durban';
                    this.defaultstate = 'ZA';
                    this.showNote = false;
                }
                AddComponent.prototype.ngOnInit = function () {
                    this.getDefaultWeather();
                };
                AddComponent.prototype.ngAfterContentChecked = function () {
                    //Called after every check of the component's or directive's content.
                    //Add 'implements AfterContentChecked' to the class.
                    if (this.weatherService.check) {
                        this.getSearchedWeather();
                        this.weatherService.check = false;
                    }
                };
                AddComponent.prototype.getDefaultWeather = function () {
                    var _this = this;
                    return this.weatherService.getWeatherData(this.defultCity, this.defaultstate).subscribe(function (response) {
                        console.log(response);
                        _this.weather = response;
                    });
                };
                AddComponent.prototype.check = function () {
                    this.weatherService.check = true;
                };
                AddComponent.prototype.ngDoCheck = function () {
                };
                AddComponent.prototype.getSearchedWeather = function () {
                    var _this = this;
                    return this.weatherService.getWeatherData(this.city, this.code).subscribe(function (response) {
                        console.log(response);
                        _this.weather = response;
                    });
                };
                AddComponent.prototype.selectCity = function (city) {
                    if (this.city.includes(city)) {
                        this.cardCity = city;
                        this.showNote = false;
                    }
                    else if (city.leading > 0) {
                        this.showNote = true;
                        this.city = null;
                        this.weather = null;
                    }
                };
                return AddComponent;
            }());
            AddComponent.ctorParameters = function () { return [
                { type: _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_2__["WeatherService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
            ]; };
            AddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/add/add.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add.component.css */ "./src/app/pages/add/add.component.css")).default]
                })
            ], AddComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/details/details.component.css": 
        /*!*****************************************************!*\
          !*** ./src/app/pages/details/details.component.css ***!
          \*****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".details-page__wrapper {\r\n    background: linear-gradient(to top, rgb(1, 28, 36) 0%, #76b1ae 100%);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    position: relative;\r\n    overflow: hidden;\r\n    min-height: 100vh;\r\n    padding: 2rem 0;\r\n    width: 100vw;\r\n  }\r\n  \r\n  .details-page__wrapper-dark {\r\n    background: linear-gradient(rgb(88, 0, 41), rgb(0, 8, 77));\r\n  }\r\n  \r\n  .main-weather__card {\r\n    background-color: white;\r\n    height: 80%;\r\n    width: 65%;\r\n    border-radius: 1rem;\r\n    position: relative;\r\n    z-index: 3;\r\n    justify-items: center;\r\n    opacity: 0;\r\n    -webkit-animation: scaleup 1s ease-out 300ms, fadein 1.25s ease-out 300ms forwards;\r\n            animation: scaleup 1s ease-out 300ms, fadein 1.25s ease-out 300ms forwards;\r\n  }\r\n  \r\n  .card-header__container-dark {\r\n    width: 100%;\r\n    position: relative;\r\n    overflow: hidden;\r\n  }\r\n  \r\n  .back__button {\r\n    position: absolute;\r\n    top: 3rem;\r\n    left: 3.25rem;\r\n    width: 5rem;\r\n    cursor: pointer;\r\n    z-index: 6;\r\n    margin-top: 2rem;\r\n  }\r\n  \r\n  .city__illustration {\r\n    width: 100%;\r\n    height: 510px;\r\n    border-radius: 1rem 1rem 0 0;\r\n    position: relative;\r\n    -o-object-fit: cover;\r\n       object-fit: cover;\r\n    display: block;\r\n  }\r\n  \r\n  .header-content__wrapper {\r\n    position: absolute;\r\n    z-index: 2;\r\n    color: #000;\r\n    top: 3rem;\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    grid-template-columns: repeat(2, 1fr);\r\n    width: 100%;\r\n  \r\n  }\r\n  \r\n  .temperature__text {\r\n    font-size: 6rem;\r\n    letter-spacing: 0.75rem;\r\n  }\r\n  \r\n  .city-name__container {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    padding-bottom: 25%;\r\n  }\r\n  \r\n  .city-name__underline {\r\n    background: transparent;\r\n    border-radius: 5px;\r\n    height: 5px;\r\n    box-shadow: 0 3rem 0 0 #ffffff;\r\n  }\r\n  \r\n  .city-name__text {\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.3rem;\r\n    font-size: 1.75rem;\r\n    padding-bottom: 2rem;\r\n  }\r\n  \r\n  .today-weather__container {\r\n    align-self: center;\r\n    justify-self: center;\r\n    display: grid;\r\n    width: 100%;\r\n    grid-template-rows: 3fr 1fr;\r\n    grid-template-columns: 1fr;\r\n    justify-items: center;\r\n    grid-gap: 2rem;\r\n  }\r\n  \r\n  .temp-state__container {\r\n    display: flex;\r\n    justify-content: center;\r\n    flex-flow: column;\r\n  }\r\n  \r\n  .weather-state__text {\r\n    letter-spacing: 0.5rem;\r\n    font-size: 1.15rem;\r\n    text-transform: uppercase;\r\n    margin-top: 0.25rem;\r\n  }\r\n  \r\n  .hum-wind__container {\r\n    display: flex;\r\n    align-items: center;\r\n    margin-left: -4rem;\r\n  }\r\n  \r\n  .hum-wind__separator {\r\n    margin: 0 2rem;\r\n    width: 2px;\r\n    height: 2.5rem;\r\n    background-color: white;\r\n  }\r\n  \r\n  .hum__text, .wind__text {\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.2rem;\r\n    font-size: 0.8rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n  \r\n  .hum__container, .wind__container {\r\n    display: flex;\r\n    flex-flow: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  /*\r\n  ================\r\n       BODY\r\n  ================\r\n  */\r\n  \r\n  .body-content__wrapper {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1.5fr;\r\n    grid-template-rows: 1fr;\r\n    justify-items: center;\r\n    justify-content: center;\r\n    align-content: start;\r\n    align-items: start;\r\n    box-sizing: border-box;\r\n    grid-column-gap: 1rem;\r\n    width: 100%;\r\n    padding: 2rem;\r\n  }\r\n  \r\n  .forecast__container {\r\n    display: flex;\r\n    flex-flow: row;\r\n    flex-wrap: wrap;\r\n    min-width: 100% !important;\r\n    margin: 0 auto;\r\n    left: 0;\r\n    right: 0;\r\n    padding-left: 50px;\r\n  }\r\n  \r\n  .day-weather__container {\r\n    display: flex;\r\n    flex-flow: column;\r\n    margin: 2rem 1.5rem;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n  \r\n  .day-name__text {\r\n    font-size: 1.5rem;\r\n    color: #39437a;\r\n    font-weight: bold;\r\n    text-transform: uppercase;\r\n    margin-bottom: 0.5rem;\r\n  }\r\n  \r\n  .forecast-condition__icon {\r\n    height: 4rem;\r\n  }\r\n  \r\n  .day-temp__text {\r\n    font-size: 1.85rem;\r\n    color: #0c1066;\r\n    letter-spacing: 0.25rem;\r\n    margin: 0.75rem 0;\r\n    text-align: center;\r\n    padding-left: 0.35rem;\r\n  }\r\n  \r\n  .day-state__text {\r\n    font-size: 0.65rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.2rem;\r\n    color: #2B244D;\r\n  }\r\n  \r\n  /* Media Query:   LT-XL   */\r\n  \r\n  @media screen and (max-width: 1919px) {\r\n    .main-weather__card {\r\n      height: 80%;\r\n      width: 75%;\r\n    }\r\n  }\r\n  \r\n  /* Media Query:   LT-LG  */\r\n  \r\n  @media screen and (max-width: 1279px) {\r\n    .back__button {\r\n      top: 1rem;\r\n    }\r\n  \r\n    .main-weather__card {\r\n      width: 80%;\r\n    }\r\n  \r\n    .body-content__wrapper {\r\n      grid-template-columns: 1fr;\r\n    }\r\n  }\r\n  \r\n  /* Media Query:   LT-MD   */\r\n  \r\n  @media screen and (max-width: 959px) {\r\n  \r\n    .header-content__wrapper {\r\n      grid-template-columns: 1fr;\r\n      grid-template-rows: 2fr 1fr;\r\n    }\r\n  \r\n    .back__button {\r\n      position: static;\r\n      margin-bottom: 1rem;\r\n    }\r\n  \r\n    .details-page__wrapper {\r\n      flex-flow: column;\r\n    }\r\n  \r\n    .hum-wind__container, .temp-state__container {\r\n      margin: 0 auto;\r\n    }\r\n  \r\n    .city-name__container {\r\n      padding-bottom: 0;\r\n    }\r\n  \r\n  }\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZGV0YWlscy9kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxvRUFBb0U7SUFDcEUsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLFlBQVk7RUFDZDs7RUFFQTtJQUNFLDBEQUEwRDtFQUM1RDs7RUFHQTtJQUNFLHVCQUF1QjtJQUN2QixXQUFXO0lBQ1gsVUFBVTtJQUNWLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1Ysa0ZBQTBFO1lBQTFFLDBFQUEwRTtFQUM1RTs7RUFFQTtJQUNFLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxhQUFhO0lBQ2IsV0FBVztJQUNYLGVBQWU7SUFDZixVQUFVO0lBQ1YsZ0JBQWdCO0VBQ2xCOztFQUVBO0lBQ0UsV0FBVztJQUNYLGFBQWE7SUFDYiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLG9CQUFpQjtPQUFqQixpQkFBaUI7SUFDakIsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHFDQUFxQztJQUNyQyxXQUFXOztFQUViOztFQUVBO0lBQ0UsZUFBZTtJQUNmLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLHVCQUF1QjtJQUN2QixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixvQkFBb0I7SUFDcEIsYUFBYTtJQUNiLFdBQVc7SUFDWCwyQkFBMkI7SUFDM0IsMEJBQTBCO0lBQzFCLHFCQUFxQjtJQUNyQixjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixtQkFBbUI7RUFDckI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxVQUFVO0lBQ1YsY0FBYztJQUNkLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtFQUNyQjs7RUFFQTtJQUNFLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtFQUNyQjs7RUFFQTs7OztHQUlDOztFQUVEO0lBQ0UsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIscUJBQXFCO0lBQ3JCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixxQkFBcUI7SUFDckIsV0FBVztJQUNYLGFBQWE7RUFDZjs7RUFFQTtJQUNFLGFBQWE7SUFDYixjQUFjO0lBQ2QsZUFBZTtJQUNmLDBCQUEwQjtJQUMxQixjQUFjO0lBQ2QsT0FBTztJQUNQLFFBQVE7SUFDUixrQkFBa0I7RUFDcEI7O0VBSUE7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIseUJBQXlCO0lBQ3pCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLFlBQVk7RUFDZDs7RUFFQTtJQUNFLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsdUJBQXVCO0lBQ3ZCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIscUJBQXFCO0VBQ3ZCOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixzQkFBc0I7SUFDdEIsY0FBYztFQUNoQjs7RUFFQSwyQkFBMkI7O0VBQzNCO0lBQ0U7TUFDRSxXQUFXO01BQ1gsVUFBVTtJQUNaO0VBQ0Y7O0VBRUEsMEJBQTBCOztFQUMxQjtJQUNFO01BQ0UsU0FBUztJQUNYOztJQUVBO01BQ0UsVUFBVTtJQUNaOztJQUVBO01BQ0UsMEJBQTBCO0lBQzVCO0VBQ0Y7O0VBRUEsMkJBQTJCOztFQUMzQjs7SUFFRTtNQUNFLDBCQUEwQjtNQUMxQiwyQkFBMkI7SUFDN0I7O0lBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsbUJBQW1CO0lBQ3JCOztJQUVBO01BQ0UsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsY0FBYztJQUNoQjs7SUFFQTtNQUNFLGlCQUFpQjtJQUNuQjs7RUFFRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2RldGFpbHMvZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbHMtcGFnZV9fd3JhcHBlciB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCByZ2IoMSwgMjgsIDM2KSAwJSwgIzc2YjFhZSAxMDAlKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgbWluLWhlaWdodDogMTAwdmg7XHJcbiAgICBwYWRkaW5nOiAycmVtIDA7XHJcbiAgICB3aWR0aDogMTAwdnc7XHJcbiAgfVxyXG4gIFxyXG4gIC5kZXRhaWxzLXBhZ2VfX3dyYXBwZXItZGFyayB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiKDg4LCAwLCA0MSksIHJnYigwLCA4LCA3NykpO1xyXG4gIH1cclxuXHJcblxyXG4gIC5tYWluLXdlYXRoZXJfX2NhcmQge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICAgIHdpZHRoOiA2NSU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgei1pbmRleDogMztcclxuICAgIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBhbmltYXRpb246IHNjYWxldXAgMXMgZWFzZS1vdXQgMzAwbXMsIGZhZGVpbiAxLjI1cyBlYXNlLW91dCAzMDBtcyBmb3J3YXJkcztcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtaGVhZGVyX19jb250YWluZXItZGFyayB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5iYWNrX19idXR0b24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAzcmVtO1xyXG4gICAgbGVmdDogMy4yNXJlbTtcclxuICAgIHdpZHRoOiA1cmVtO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgei1pbmRleDogNjtcclxuICAgIG1hcmdpbi10b3A6IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5jaXR5X19pbGx1c3RyYXRpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDUxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMXJlbSAxcmVtIDAgMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5oZWFkZXItY29udGVudF9fd3JhcHBlciB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAyO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICB0b3A6IDNyZW07XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgXHJcbiAgfVxyXG4gIFxyXG4gIC50ZW1wZXJhdHVyZV9fdGV4dCB7XHJcbiAgICBmb250LXNpemU6IDZyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC43NXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNpdHktbmFtZV9fY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMjUlO1xyXG4gIH1cclxuICBcclxuICAuY2l0eS1uYW1lX191bmRlcmxpbmUge1xyXG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICBoZWlnaHQ6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgM3JlbSAwIDAgI2ZmZmZmZjtcclxuICB9XHJcbiAgXHJcbiAgLmNpdHktbmFtZV9fdGV4dCB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcclxuICAgIGZvbnQtc2l6ZTogMS43NXJlbTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xyXG4gIH1cclxuICBcclxuICAudG9kYXktd2VhdGhlcl9fY29udGFpbmVyIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAzZnIgMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLWdhcDogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLnRlbXAtc3RhdGVfX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICB9XHJcbiAgXHJcbiAgLndlYXRoZXItc3RhdGVfX3RleHQge1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcclxuICAgIGZvbnQtc2l6ZTogMS4xNXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xyXG4gIH1cclxuICBcclxuICAuaHVtLXdpbmRfX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiAtNHJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmh1bS13aW5kX19zZXBhcmF0b3Ige1xyXG4gICAgbWFyZ2luOiAwIDJyZW07XHJcbiAgICB3aWR0aDogMnB4O1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLmh1bV9fdGV4dCwgLndpbmRfX3RleHQge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjJyZW07XHJcbiAgICBmb250LXNpemU6IDAuOHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5odW1fX2NvbnRhaW5lciwgLndpbmRfX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8qXHJcbiAgPT09PT09PT09PT09PT09PVxyXG4gICAgICAgQk9EWVxyXG4gID09PT09PT09PT09PT09PT1cclxuICAqL1xyXG4gIFxyXG4gIC5ib2R5LWNvbnRlbnRfX3dyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDEuNWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XHJcbiAgICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWNvbnRlbnQ6IHN0YXJ0O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGdyaWQtY29sdW1uLWdhcDogMXJlbTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcGFkZGluZzogMnJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmZvcmVjYXN0X19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgbWluLXdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIGxlZnQ6IDA7XHJcbiAgICByaWdodDogMDtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICB9XHJcblxyXG5cclxuXHJcbiAgLmRheS13ZWF0aGVyX19jb250YWluZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgbWFyZ2luOiAycmVtIDEuNXJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmRheS1uYW1lX190ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6ICMzOTQzN2E7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5mb3JlY2FzdC1jb25kaXRpb25fX2ljb24ge1xyXG4gICAgaGVpZ2h0OiA0cmVtO1xyXG4gIH1cclxuICBcclxuICAuZGF5LXRlbXBfX3RleHQge1xyXG4gICAgZm9udC1zaXplOiAxLjg1cmVtO1xyXG4gICAgY29sb3I6ICMwYzEwNjY7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXJlbTtcclxuICAgIG1hcmdpbjogMC43NXJlbSAwO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwLjM1cmVtO1xyXG4gIH1cclxuICBcclxuICAuZGF5LXN0YXRlX190ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMC42NXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xyXG4gICAgY29sb3I6ICMyQjI0NEQ7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1lZGlhIFF1ZXJ5OiAgIExULVhMICAgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxOTE5cHgpIHtcclxuICAgIC5tYWluLXdlYXRoZXJfX2NhcmQge1xyXG4gICAgICBoZWlnaHQ6IDgwJTtcclxuICAgICAgd2lkdGg6IDc1JTtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLyogTWVkaWEgUXVlcnk6ICAgTFQtTEcgICovXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI3OXB4KSB7XHJcbiAgICAuYmFja19fYnV0dG9uIHtcclxuICAgICAgdG9wOiAxcmVtO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLm1haW4td2VhdGhlcl9fY2FyZCB7XHJcbiAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbiAgXHJcbiAgICAuYm9keS1jb250ZW50X193cmFwcGVyIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIE1lZGlhIFF1ZXJ5OiAgIExULU1EICAgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTlweCkge1xyXG4gIFxyXG4gICAgLmhlYWRlci1jb250ZW50X193cmFwcGVyIHtcclxuICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAgIGdyaWQtdGVtcGxhdGUtcm93czogMmZyIDFmcjtcclxuICAgIH1cclxuICBcclxuICAgIC5iYWNrX19idXR0b24ge1xyXG4gICAgICBwb3NpdGlvbjogc3RhdGljO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmRldGFpbHMtcGFnZV9fd3JhcHBlciB7XHJcbiAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgLmh1bS13aW5kX19jb250YWluZXIsIC50ZW1wLXN0YXRlX19jb250YWluZXIge1xyXG4gICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuICBcclxuICAgIC5jaXR5LW5hbWVfX2NvbnRhaW5lciB7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgfVxyXG4gIFxyXG4gIH1cclxuICBcclxuICAiXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/details/details.component.ts": 
        /*!****************************************************!*\
          !*** ./src/app/pages/details/details.component.ts ***!
          \****************************************************/
        /*! exports provided: DetailsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function () { return DetailsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/weather/weather.service */ "./src/app/services/weather/weather.service.ts");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            /* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services_twitter_twitter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/twitter/twitter.service */ "./src/app/services/twitter/twitter.service.ts");
            var DetailsComponent = /** @class */ (function () {
                function DetailsComponent(twitter, activeRouter, weather, ui) {
                    this.twitter = twitter;
                    this.activeRouter = activeRouter;
                    this.weather = weather;
                    this.ui = ui;
                }
                DetailsComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub1 = this.ui.darkModeState.subscribe(function (isDark) {
                        _this.darkMode = isDark;
                    });
                    var todayNumberInWeek = new Date().getDay();
                    var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
                    this.today = days[todayNumberInWeek];
                    this.sub2 = this.activeRouter.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["concatMap"])(function (route) {
                        _this.city = route.params.city;
                        switch (_this.city.toLowerCase()) {
                            case 'paris':
                                _this.cityIllustrationPath = '../../../assets/cities/france.svg';
                                break;
                            case 'doha':
                                _this.cityIllustrationPath = '../../assets/cities/qatar.svg';
                                break;
                            case 'rabat':
                                _this.cityIllustrationPath = '../../assets/cities/rabat.svg';
                                break;
                            case 'tunis':
                                _this.cityIllustrationPath = '../../assets/cities/tunis.svg';
                                break;
                            case 'tokyo':
                                _this.cityIllustrationPath = '../../assets/cities/japan.svg';
                                break;
                            default:
                                _this.cityIllustrationPath = '../../assets/cities/default.svg';
                        }
                        return Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(_this.weather.getWeather(_this.city), _this.weather.getForecast(_this.city));
                    })).subscribe(function (payload) {
                        var e_1, _a;
                        _this.state = payload[0].weather[0].main;
                        _this.temp = Math.ceil(Number(payload[0].main.temp));
                        _this.hum = payload[0].main.humidity;
                        _this.wind = Math.round(Math.round(payload[0].wind.speed));
                        var dates = {};
                        try {
                            for (var _b = __values(payload[1]), _c = _b.next(); !_c.done; _c = _b.next()) {
                                var res = _c.value;
                                var date = new Date(res.dt_txt).toDateString().split(' ')[0];
                                if (dates[date]) {
                                    dates[date].counter += 1;
                                    dates[date].temp += res.main.temp;
                                }
                                else {
                                    dates[date] = {
                                        state: res.weather[0].main,
                                        temp: res.main.temp,
                                        counter: 1
                                    };
                                }
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        Object.keys(dates).forEach(function (day) {
                            dates[day].temp = Math.round(dates[day].temp / dates[day].counter);
                        });
                        delete dates[Object.keys(dates)[0]];
                        _this.daysForecast = dates;
                    }, function (err) {
                        _this.errorMessage = err.error.message;
                        setTimeout(function () {
                            _this.errorMessage = '';
                        }, 2500);
                    });
                    this.tweets$ = this.twitter.fetchTweets(this.city);
                };
                DetailsComponent.prototype.ngOnDestroy = function () {
                    this.sub1.unsubscribe();
                    this.sub2.unsubscribe();
                };
                return DetailsComponent;
            }());
            DetailsComponent.ctorParameters = function () { return [
                { type: _services_twitter_twitter_service__WEBPACK_IMPORTED_MODULE_7__["TwitterService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
                { type: _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"] },
                { type: _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_5__["UiService"] }
            ]; };
            DetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-details',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/details/details.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./details.component.css */ "./src/app/pages/details/details.component.css")).default]
                })
            ], DetailsComponent);
            /***/ 
        }),
        /***/ "./src/app/pages/home/home.component.css": 
        /*!***********************************************!*\
          !*** ./src/app/pages/home/home.component.css ***!
          \***********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n.main__container {\r\n    display: flex;\r\n    justify-content: space-around;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    min-height: 90vh;\r\n    position: relative;\r\n  }\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixrQkFBa0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWFpbl9fY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBtaW4taGVpZ2h0OiA5MHZoO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBcclxuICAiXX0= */");
            /***/ 
        }),
        /***/ "./src/app/pages/home/home.component.ts": 
        /*!**********************************************!*\
          !*** ./src/app/pages/home/home.component.ts ***!
          \**********************************************/
        /*! exports provided: HomeComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function () { return HomeComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_fb_fb_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/fb/fb.service */ "./src/app/services/fb/fb.service.ts");
            var HomeComponent = /** @class */ (function () {
                function HomeComponent(fb) {
                    this.fb = fb;
                }
                HomeComponent.prototype.ngOnInit = function () {
                    this.cities = this.fb.getCities();
                };
                return HomeComponent;
            }());
            HomeComponent.ctorParameters = function () { return [
                { type: _services_fb_fb_service__WEBPACK_IMPORTED_MODULE_2__["FbService"] }
            ]; };
            HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-home',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")).default]
                })
            ], HomeComponent);
            /***/ 
        }),
        /***/ "./src/app/services/fb/fb.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/fb/fb.service.ts ***!
          \*******************************************/
        /*! exports provided: FbService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FbService", function () { return FbService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var angularfire_lite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire-lite */ "./node_modules/angularfire-lite/fesm2015/angularfire-lite.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var FbService = /** @class */ (function () {
                function FbService(auth, fs) {
                    this.auth = auth;
                    this.fs = fs;
                }
                FbService.prototype.isAuth = function () {
                    return this.auth.isAuthenticated();
                };
                FbService.prototype.signin = function (email, pass) {
                    return this.auth.signin(email, pass);
                };
                FbService.prototype.signup = function (email, pass) {
                    return this.auth.signup(email, pass);
                };
                FbService.prototype.getCities = function () {
                    var _this = this;
                    return this.auth.uid().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (uid) {
                        return _this.fs.read("" + uid);
                    }));
                };
                FbService.prototype.addCity = function (name) {
                    var _this = this;
                    return this.auth.uid()
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (uid) {
                        return _this.fs
                            .write(uid + "/" + name, { name: name, added: new Date() })
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
                    }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
                };
                return FbService;
            }());
            FbService.ctorParameters = function () { return [
                { type: angularfire_lite__WEBPACK_IMPORTED_MODULE_2__["AngularFireLiteAuth"] },
                { type: angularfire_lite__WEBPACK_IMPORTED_MODULE_2__["AngularFireLiteFirestore"] }
            ]; };
            FbService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], FbService);
            /***/ 
        }),
        /***/ "./src/app/services/twitter/twitter.service.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/services/twitter/twitter.service.ts ***!
          \*****************************************************/
        /*! exports provided: TwitterService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterService", function () { return TwitterService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var TwitterService = /** @class */ (function () {
                function TwitterService(http) {
                    this.http = http;
                }
                TwitterService.prototype.fetchTweets = function (city) {
                    return this.http.post('https://us-central1-minimus-weather.cloudfunctions.net/tweets', {
                        data: { q: city + " Weather" }
                    }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res && res.result ? res.result.statuses : []; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (tweets) { return tweets.map(function (tweet) { return tweet.text && tweet.text.match(/weather/g); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (tweets) { return tweets.map(function (tweet) { return ({
                        text: tweet.text,
                        date: tweet.created_at,
                        user: {
                            name: tweet.user.name,
                            photo: tweet.user.profile_image_url_https,
                            handle: tweet.user.screen_name
                        }
                    }); }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (tweets) { return tweets.slice(0, 4); }));
                };
                return TwitterService;
            }());
            TwitterService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            TwitterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], TwitterService);
            /***/ 
        }),
        /***/ "./src/app/services/ui/ui.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/ui/ui.service.ts ***!
          \*******************************************/
        /*! exports provided: UiService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiService", function () { return UiService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
            var UiService = /** @class */ (function () {
                function UiService() {
                    // TODO: if the user is signed in get the default value from Firebase
                    this.darkModeState = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](false);
                }
                return UiService;
            }());
            UiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], UiService);
            /***/ 
        }),
        /***/ "./src/app/services/weather/weather.service.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/services/weather/weather.service.ts ***!
          \*****************************************************/
        /*! exports provided: WeatherService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherService", function () { return WeatherService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            var WeatherService = /** @class */ (function () {
                function WeatherService(http) {
                    this.http = http;
                    this.baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
                    this.forcastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=';
                    this.appID = 'a81a730a0edf521e8d64cb4c4be4c671';
                    this.check = false;
                }
                WeatherService.prototype.getWeatherData = function (city, code) {
                    return this.http.get(this.forcastURL + city + ',' + code + '&APPID=' + this.appID + '&units=metric');
                };
                WeatherService.prototype.getWeather = function (city, metric) {
                    if (metric === void 0) { metric = 'metric'; }
                    return this.http.get("" + this.baseURL + city + "&units=" + metric + "&APPID=" + this.appID).pipe((Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()));
                };
                WeatherService.prototype.getForecast = function (city, metric) {
                    if (metric === void 0) { metric = 'metric'; }
                    return this.http.get("" + this.forcastURL + city + "&units=" + metric + "&APPID=" + this.appID)
                        .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (weather) { return weather['list']; }));
                };
                return WeatherService;
            }());
            WeatherService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            WeatherService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: 'root'
                })
            ], WeatherService);
            /***/ 
        }),
        /***/ "./src/app/ui/add-card/add-card.component.css": 
        /*!****************************************************!*\
          !*** ./src/app/ui/add-card/add-card.component.css ***!
          \****************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".add__card {\r\n  background-color: transparent;\r\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\r\n  display: grid;\r\n  grid-template-columns: 1fr;\r\n  grid-template-rows: 1fr 1fr;\r\n  height: 30rem;\r\n  justify-items: center;\r\n  cursor: pointer;\r\n  border-radius: 1.75rem;\r\n  color: #443282;\r\n  padding-top: 20px;\r\n}\r\n.add__card:hover{\r\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 9px 0 rgba(0,0,0,.12), 0 6px 1px -2px rgba(0,0,0,.2);\r\n}\r\n.add__card-dark {\r\n  background: linear-gradient(to bottom, rgb(0, 1, 41),rgb(80, 13, 65));\r\n  color: white;\r\n}\r\n.card__title {\r\n  text-transform: uppercase;\r\n  letter-spacing: 0.1rem;\r\n  \r\n}\r\n.city__illustration {\r\n  width: 20rem;\r\n}\r\n.body__container {\r\n  align-self: end;\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n  flex-flow: column;\r\n}\r\n.add__icon {\r\n  width: 10rem;\r\n  margin-bottom: 1.15rem;\r\n}\r\n.cls-299 {\r\n  fill: #f0ed49;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvYWRkLWNhcmQvYWRkLWNhcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE2QjtFQUM3Qix5Q0FBeUM7RUFDekMsYUFBYTtFQUNiLDBCQUEwQjtFQUMxQiwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLG1HQUFtRztBQUNyRztBQUVBO0VBQ0UscUVBQXFFO0VBQ3JFLFlBQVk7QUFDZDtBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLHNCQUFzQjs7QUFFeEI7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0UsZUFBZTtFQUNmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1CO0VBQ25CLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0UsYUFBYTtBQUNmIiwiZmlsZSI6InNyYy9hcHAvdWkvYWRkLWNhcmQvYWRkLWNhcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRfX2NhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJveC1zaGFkb3c6IDAgMCAycmVtIHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyO1xyXG4gIGhlaWdodDogMzByZW07XHJcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiAxLjc1cmVtO1xyXG4gIGNvbG9yOiAjNDQzMjgyO1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG59XHJcbi5hZGRfX2NhcmQ6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgwLDAsMCwuMTQpLCAwIDFweCA5cHggMCByZ2JhKDAsMCwwLC4xMiksIDAgNnB4IDFweCAtMnB4IHJnYmEoMCwwLDAsLjIpO1xyXG59XHJcblxyXG4uYWRkX19jYXJkLWRhcmsge1xyXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYigwLCAxLCA0MSkscmdiKDgwLCAxMywgNjUpKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5jYXJkX190aXRsZSB7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gIFxyXG59XHJcblxyXG4uY2l0eV9faWxsdXN0cmF0aW9uIHtcclxuICB3aWR0aDogMjByZW07XHJcbn1cclxuXHJcbi5ib2R5X19jb250YWluZXIge1xyXG4gIGFsaWduLXNlbGY6IGVuZDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG59XHJcblxyXG4uYWRkX19pY29uIHtcclxuICB3aWR0aDogMTByZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMS4xNXJlbTtcclxufVxyXG4uY2xzLTI5OSB7XHJcbiAgZmlsbDogI2YwZWQ0OTtcclxufSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/ui/add-card/add-card.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/ui/add-card/add-card.component.ts ***!
          \***************************************************/
        /*! exports provided: AddCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddCardComponent", function () { return AddCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");
            var AddCardComponent = /** @class */ (function () {
                function AddCardComponent(ui) {
                    this.ui = ui;
                }
                AddCardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub1 = this.ui.darkModeState.subscribe(function (isDark) {
                        _this.darkMode = isDark;
                    });
                };
                AddCardComponent.prototype.ngOnDestroy = function () {
                    this.sub1.unsubscribe();
                };
                return AddCardComponent;
            }());
            AddCardComponent.ctorParameters = function () { return [
                { type: _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"] }
            ]; };
            AddCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-add-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/add-card/add-card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-card.component.css */ "./src/app/ui/add-card/add-card.component.css")).default]
                })
            ], AddCardComponent);
            /***/ 
        }),
        /***/ "./src/app/ui/error/error.component.css": 
        /*!**********************************************!*\
          !*** ./src/app/ui/error/error.component.css ***!
          \**********************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".error-wrapper {\r\n    position: fixed;\r\n    left: 50%;\r\n    bottom: 0;\r\n    transform: translate(-50%, 5rem);\r\n    width: 70%;\r\n    background-color: crimson;\r\n    color: white;\r\n    height: 4rem;\r\n    border-radius: 0.25rem 0.25rem 0 0;\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    padding: 0.5rem 3rem;\r\n    transition: transform 1s ease-in-out;\r\n    z-index: 9999999999;\r\n  }\r\n  \r\n  .error-wrapper-active {\r\n    transform: translate(-50%, 0);\r\n  }\r\n  \r\n  .error-message {\r\n    font-size: 1.25rem;\r\n    letter-spacing: 0.1rem;\r\n    text-transform: capitalize;\r\n    line-height: 1.25rem;\r\n    display: block;\r\n    text-overflow: ellipsis;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n    width: 80%;\r\n  }\r\n  \r\n  .error-btn {\r\n    outline: none;\r\n    border: none;\r\n    padding: 1rem 1.5rem;\r\n    background-color: rgba(255, 255, 255, 0.3);\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n    color: white;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvZXJyb3IvZXJyb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixTQUFTO0lBQ1QsU0FBUztJQUNULGdDQUFnQztJQUNoQyxVQUFVO0lBQ1YseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYiw4QkFBOEI7SUFDOUIsbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixvQ0FBb0M7SUFDcEMsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsNkJBQTZCO0VBQy9COztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsb0JBQW9CO0lBQ3BCLGNBQWM7SUFDZCx1QkFBdUI7SUFDdkIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixVQUFVO0VBQ1o7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLG9CQUFvQjtJQUNwQiwwQ0FBMEM7SUFDMUMsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC91aS9lcnJvci9lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmVycm9yLXdyYXBwZXIge1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgNXJlbSk7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGhlaWdodDogNHJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gMC4yNXJlbSAwIDA7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAzcmVtO1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDFzIGVhc2UtaW4tb3V0O1xyXG4gICAgei1pbmRleDogOTk5OTk5OTk5OTtcclxuICB9XHJcbiAgXHJcbiAgLmVycm9yLXdyYXBwZXItYWN0aXZlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDApO1xyXG4gIH1cclxuICBcclxuICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICBmb250LXNpemU6IDEuMjVyZW07XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5lcnJvci1idG4ge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDFyZW0gMS41cmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gICJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/ui/error/error.component.ts": 
        /*!*********************************************!*\
          !*** ./src/app/ui/error/error.component.ts ***!
          \*********************************************/
        /*! exports provided: ErrorComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () { return ErrorComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ErrorComponent = /** @class */ (function () {
                function ErrorComponent() {
                    this.action = 'GOT IT';
                }
                ErrorComponent.prototype.ngOnInit = function () {
                };
                return ErrorComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ErrorComponent.prototype, "message", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], ErrorComponent.prototype, "action", void 0);
            ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-error',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/error/error.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./error.component.css */ "./src/app/ui/error/error.component.css")).default]
                })
            ], ErrorComponent);
            /***/ 
        }),
        /***/ "./src/app/ui/weather-card/weather-card.component.css": 
        /*!************************************************************!*\
          !*** ./src/app/ui/weather-card/weather-card.component.css ***!
          \************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".weather__card {\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n    box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\r\n    justify-items: center;\r\n    margin: 2rem;\r\n    height: 30rem;\r\n    cursor: pointer;\r\n    background-color: transparent;\r\n    border-radius: 1.75rem;\r\n    background-color: rgba(102, 102, 102, 0.308);\r\n    padding-top: 20px;\r\n    padding-bottom: 10px;\r\n    \r\n  }\r\n.weather__card:hover{\r\n  box-shadow: 0 2px 2px 0 rgba(109, 109, 109, 0.14), 0 1px 9px 0 rgba(0,0,0,.12), 0 6px 1px -2px rgba(0,0,0,.2);\r\n  }\r\n.weather__card-add {\r\n    cursor: auto;\r\n    margin: 0 auto;\r\n    box-shadow: rgba(0, 0, 255, 0.5);  }\r\n.weather__card-dark {\r\n    /*background: linear-gradient(to bottom, #711B86, #00057A);*/\r\n  background: linear-gradient(to bottom, #3728658e, #0000006b);\r\n    color: white;\r\n  }\r\n.city-name__text {\r\n    text-transform: uppercase;\r\n    font-size: 1.4rem;\r\n    letter-spacing: 0.1rem;\r\n    margin-bottom: 1rem;\r\n  }\r\n.temperature__text {\r\n    align-self: end;\r\n    width: 100%;\r\n    font-size: 4rem;\r\n    font-weight: 100;\r\n    letter-spacing: 0.1rem;\r\n    \r\n  }\r\n.temperature-metric__text {\r\n    text-align: start;\r\n    font-size: 3rem;\r\n  }\r\n.min-max__container {\r\n    display: grid;\r\n    grid-template-rows: 1fr;\r\n    grid-template-columns: 1fr 1fr;\r\n    align-items: center;\r\n    margin-top: -8px;\r\n  }\r\n.min__container, .max__container {\r\n    margin: 1rem 3rem;\r\n    display: grid;\r\n    grid-template-columns: 1fr;\r\n    grid-template-rows: 1fr 1fr;\r\n  }\r\n.min-arrow__icon, .max-arrow__icon {\r\n    height: 1.25rem;\r\n    margin: auto;\r\n  }\r\n.max-arrow__icon {\r\n    margin-bottom: -0.05rem;\r\n  }\r\n.weather-condition__text {\r\n    display: block;\r\n    font-size: 1rem;\r\n    text-transform: uppercase;\r\n    letter-spacing: 0.1rem;\r\n    text-align: center;\r\n  }\r\n.max__text {\r\n    color: #FF0070;\r\n  }\r\n.min__text {\r\n    color: #00FF9B;\r\n  }\r\n.max__text, .min__text {\r\n    font-size: 1rem;\r\n    text-align: center;\r\n  }\r\n.max-temperature__text, .min-temperature__text {\r\n    text-align: center;\r\n    font-size: 2rem;\r\n  }\r\n.weather-icon__container {\r\n    width: 10rem;\r\n    margin-bottom: 8rem;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n.weather-icon__container > svg {\r\n    width: 5rem;\r\n  }\r\n.add-city-btn {\r\n    outline: none;\r\n    border: none;\r\n    cursor: pointer;\r\n    border-radius: 3rem;\r\n    padding: 1rem 2rem;\r\n    color: white;\r\n    margin-top: 2rem;\r\n    background: linear-gradient(to top, #3b0021,#9782c7 );\r\n\r\n    font-size: 1rem;\r\n    font-weight: bold;\r\n  }\r\n.add-city-btn:hover {\r\n    background: linear-gradient(to bottom, #3b0021,#9782c7 );\r\n\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdWkvd2VhdGhlci1jYXJkL3dlYXRoZXItY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiwrQkFBK0I7SUFDL0IseUNBQXlDO0lBQ3pDLHFCQUFxQjtJQUNyQixZQUFZO0lBQ1osYUFBYTtJQUNiLGVBQWU7SUFDZiw2QkFBNkI7SUFDN0Isc0JBQXNCO0lBQ3RCLDRDQUE0QztJQUM1QyxpQkFBaUI7SUFDakIsb0JBQW9COztFQUV0QjtBQUNGO0VBQ0UsNkdBQTZHO0VBQzdHO0FBRUE7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLGdDQUFnQyxHQUFHO0FBRXJDO0lBQ0UsNERBQTREO0VBQzlELDREQUE0RDtJQUMxRCxZQUFZO0VBQ2Q7QUFFQTtJQUNFLHlCQUF5QjtJQUN6QixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtFQUNyQjtBQUVBO0lBQ0UsZUFBZTtJQUNmLFdBQVc7SUFDWCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHNCQUFzQjs7RUFFeEI7QUFFQTtJQUNFLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCO0FBRUE7SUFDRSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0VBQ2xCO0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsYUFBYTtJQUNiLDBCQUEwQjtJQUMxQiwyQkFBMkI7RUFDN0I7QUFFQTtJQUNFLGVBQWU7SUFDZixZQUFZO0VBQ2Q7QUFFQTtJQUNFLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0UsY0FBYztJQUNkLGVBQWU7SUFDZix5QkFBeUI7SUFDekIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUVBO0lBQ0UsY0FBYztFQUNoQjtBQUVBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjtBQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLGVBQWU7RUFDakI7QUFFQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtFQUN6QjtBQUVBO0lBQ0UsV0FBVztFQUNiO0FBRUE7SUFDRSxhQUFhO0lBQ2IsWUFBWTtJQUNaLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIscURBQXFEOztJQUVyRCxlQUFlO0lBQ2YsaUJBQWlCO0VBQ25CO0FBRUE7SUFDRSx3REFBd0Q7O0VBRTFEIiwiZmlsZSI6InNyYy9hcHAvdWkvd2VhdGhlci1jYXJkL3dlYXRoZXItY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlYXRoZXJfX2NhcmQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmcjtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAycmVtIHJnYmEoMCwgMCwgMjU1LCAwLjEpO1xyXG4gICAganVzdGlmeS1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAycmVtO1xyXG4gICAgaGVpZ2h0OiAzMHJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS43NXJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTAyLCAxMDIsIDEwMiwgMC4zMDgpO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICAgIFxyXG4gIH1cclxuLndlYXRoZXJfX2NhcmQ6aG92ZXJ7XHJcbiAgYm94LXNoYWRvdzogMCAycHggMnB4IDAgcmdiYSgxMDksIDEwOSwgMTA5LCAwLjE0KSwgMCAxcHggOXB4IDAgcmdiYSgwLDAsMCwuMTIpLCAwIDZweCAxcHggLTJweCByZ2JhKDAsMCwwLC4yKTtcclxuICB9XHJcbiAgXHJcbiAgLndlYXRoZXJfX2NhcmQtYWRkIHtcclxuICAgIGN1cnNvcjogYXV0bztcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAyNTUsIDAuNSk7ICB9XHJcbiAgXHJcbiAgLndlYXRoZXJfX2NhcmQtZGFyayB7XHJcbiAgICAvKmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICM3MTFCODYsICMwMDA1N0EpOyovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzM3Mjg2NThlLCAjMDAwMDAwNmIpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuY2l0eS1uYW1lX190ZXh0IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuICBcclxuICAudGVtcGVyYXR1cmVfX3RleHQge1xyXG4gICAgYWxpZ24tc2VsZjogZW5kO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBmb250LXdlaWdodDogMTAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICAgIFxyXG4gIH1cclxuICBcclxuICAudGVtcGVyYXR1cmUtbWV0cmljX190ZXh0IHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gICAgZm9udC1zaXplOiAzcmVtO1xyXG4gIH1cclxuICBcclxuICAubWluLW1heF9fY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gIH1cclxuICBcclxuICAubWluX19jb250YWluZXIsIC5tYXhfX2NvbnRhaW5lciB7XHJcbiAgICBtYXJnaW46IDFyZW0gM3JlbTtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcclxuICB9XHJcbiAgXHJcbiAgLm1pbi1hcnJvd19faWNvbiwgLm1heC1hcnJvd19faWNvbiB7XHJcbiAgICBoZWlnaHQ6IDEuMjVyZW07XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXgtYXJyb3dfX2ljb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTAuMDVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWF0aGVyLWNvbmRpdGlvbl9fdGV4dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAubWF4X190ZXh0IHtcclxuICAgIGNvbG9yOiAjRkYwMDcwO1xyXG4gIH1cclxuICBcclxuICAubWluX190ZXh0IHtcclxuICAgIGNvbG9yOiAjMDBGRjlCO1xyXG4gIH1cclxuICBcclxuICAubWF4X190ZXh0LCAubWluX190ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLm1heC10ZW1wZXJhdHVyZV9fdGV4dCwgLm1pbi10ZW1wZXJhdHVyZV9fdGV4dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC53ZWF0aGVyLWljb25fX2NvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTByZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiA4cmVtO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIH1cclxuICBcclxuICAud2VhdGhlci1pY29uX19jb250YWluZXIgPiBzdmcge1xyXG4gICAgd2lkdGg6IDVyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC5hZGQtY2l0eS1idG4ge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNyZW07XHJcbiAgICBwYWRkaW5nOiAxcmVtIDJyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgIzNiMDAyMSwjOTc4MmM3ICk7XHJcblxyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5hZGQtY2l0eS1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzNiMDAyMSwjOTc4MmM3ICk7XHJcblxyXG4gIH1cclxuIl19 */");
            /***/ 
        }),
        /***/ "./src/app/ui/weather-card/weather-card.component.ts": 
        /*!***********************************************************!*\
          !*** ./src/app/ui/weather-card/weather-card.component.ts ***!
          \***********************************************************/
        /*! exports provided: WeatherCardComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherCardComponent", function () { return WeatherCardComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/weather/weather.service */ "./src/app/services/weather/weather.service.ts");
            /* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _services_fb_fb_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/fb/fb.service */ "./src/app/services/fb/fb.service.ts");
            var WeatherCardComponent = /** @class */ (function () {
                function WeatherCardComponent(weather, router, ui, fb) {
                    this.weather = weather;
                    this.router = router;
                    this.ui = ui;
                    this.fb = fb;
                    this.cityStored = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
                    this.cityAdded = false;
                }
                Object.defineProperty(WeatherCardComponent.prototype, "city", {
                    set: function (city) {
                        var _this = this;
                        this.cityName = city;
                        this.weather.getWeather(city)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                            .subscribe(function (payload) {
                            _this.state = payload.weather[0].main;
                            _this.temp = Math.ceil(payload.main.temp);
                        }, function (err) {
                            _this.errorMessage = err.error.message;
                            setTimeout(function () {
                                _this.errorMessage = '';
                            }, 3000);
                        });
                        this.weather.getForecast(city)
                            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
                            .subscribe(function (payload) {
                            var e_2, _a;
                            _this.maxTemp = Math.round(payload[0].main.temp);
                            _this.minTemp = Math.round(payload[0].main.temp);
                            try {
                                for (var payload_1 = __values(payload), payload_1_1 = payload_1.next(); !payload_1_1.done; payload_1_1 = payload_1.next()) {
                                    var res = payload_1_1.value;
                                    if (new Date().toLocaleDateString('en-GB') === new Date(res.dt_txt).toLocaleDateString('en-GB')) {
                                        _this.maxTemp = res.main.temp > _this.maxTemp ? Math.round(res.main.temp) : _this.maxTemp;
                                        _this.minTemp = res.main.temp < _this.minTemp ? Math.round(res.main.temp) : _this.minTemp;
                                    }
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (payload_1_1 && !payload_1_1.done && (_a = payload_1.return)) _a.call(payload_1);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }, function (err) {
                            _this.errorMessage = err.error.message;
                            setTimeout(function () {
                                _this.errorMessage = '';
                            }, 3000);
                        });
                    },
                    enumerable: true,
                    configurable: true
                });
                WeatherCardComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.sub1 = this.ui.darkModeState.subscribe(function (isDark) {
                        _this.darkMode = isDark;
                    });
                };
                WeatherCardComponent.prototype.ngOnDestroy = function () {
                    this.sub1.unsubscribe();
                };
                WeatherCardComponent.prototype.openDetails = function () {
                    if (!this.addMode) {
                        this.router.navigateByUrl('/details/' + this.cityName);
                    }
                };
                WeatherCardComponent.prototype.addCity = function () {
                    var _this = this;
                    this.fb.addCity(this.cityName).subscribe(function () {
                        _this.cityName = null;
                        _this.maxTemp = null;
                        _this.minTemp = null;
                        _this.state = null;
                        _this.temp = null;
                        _this.cityAdded = true;
                        _this.cityStored.emit();
                        setTimeout(function () { return _this.cityAdded = false; }, 2000);
                    });
                };
                return WeatherCardComponent;
            }());
            WeatherCardComponent.ctorParameters = function () { return [
                { type: _services_weather_weather_service__WEBPACK_IMPORTED_MODULE_3__["WeatherService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
                { type: _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__["UiService"] },
                { type: _services_fb_fb_service__WEBPACK_IMPORTED_MODULE_6__["FbService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], WeatherCardComponent.prototype, "city", null);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], WeatherCardComponent.prototype, "addMode", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
            ], WeatherCardComponent.prototype, "cityStored", void 0);
            WeatherCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-weather-card',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./weather-card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ui/weather-card/weather-card.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./weather-card.component.css */ "./src/app/ui/weather-card/weather-card.component.css")).default]
                })
            ], WeatherCardComponent);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
                production: false,
                appID: '1:1037734815269:web:e6de8b01d1978d17d301cc',
                gKey: 'G-0W03SFXDT7',
                config: {
                    apiKey: 'AIzaSyArn5V9sEMXLnFMLS1YPpSXoFnsJmDiNOw',
                    authDomain: 'weather-1078e.firebaseapp.com',
                    databaseURL: 'https://weather-1078e.firebaseio.com',
                    projectId: 'weather-1078e',
                    storageBucket: 'weather-1078e.appspot.com',
                    messagingSenderId: '1037734815269'
                }
            };
            /*
             * In development mode, to ignore zone related error stack frames such as
             * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
             * import the following file, but please comment it out in production mode
             * because it will have performance impact when throw error
             */
            // import 'zone.js/dist/zone-error';  // Included with Angular CLI.
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
            }
            document.addEventListener('DOMContentLoaded', function () {
                Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
                    .catch(function (err) { return console.log(err); });
            });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\Melissa\Desktop\weather-1\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map