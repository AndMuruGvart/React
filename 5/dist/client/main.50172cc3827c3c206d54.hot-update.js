webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Menu/Menu.tsx":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/Menu.tsx ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Menu = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst menu_css_1 = __importDefault(__webpack_require__(/*! ./menu.css */ \"./src/shared/CardsList/Card/Menu/menu.css\"));\r\nconst Dropdown_1 = __webpack_require__(/*! ../../../Dropdown */ \"./src/shared/Dropdown/index.ts\");\r\nconst generateRandomString_1 = __webpack_require__(/*! ../../../../utils/react/generateRandomString */ \"./src/utils/react/generateRandomString.tsx\");\r\nconst GenericList_1 = __webpack_require__(/*! ../../../GenericList */ \"./src/shared/GenericList/index.ts\");\r\nconst pipe_1 = __webpack_require__(/*! ../../../../utils/react/pipe */ \"./src/utils/react/pipe.tsx\");\r\nconst preventDefault_1 = __webpack_require__(/*! ../../../../utils/react/preventDefault */ \"./src/utils/react/preventDefault.tsx\");\r\nconst stopPropagation_1 = __webpack_require__(/*! ../../../../utils/react/stopPropagation */ \"./src/utils/react/stopPropagation.tsx\");\r\nconst LIST = [\r\n    { As: 'a', text: 'Комментарии', href: '#', className: { styles: menu_css_1.default } },\r\n    { As: 'a', text: 'Поделиться', href: '#', className: { styles: menu_css_1.default } },\r\n    { As: 'a', text: 'Скрыть', href: '#', className: { styles: menu_css_1.default } },\r\n    { As: 'a', text: 'Сохранить', href: '#', className: { styles: menu_css_1.default } },\r\n    { As: 'a', text: 'Пожаловаться', href: '#', className: { styles: menu_css_1.default } },\r\n    { As: 'a', text: 'Закрыть', href: '#', className: { styles: menu_css_1.default } }\r\n].map(generateRandomString_1.generateId);\r\nfunction Menu() {\r\n    const [list, setList] = react_1.default.useState(LIST);\r\n    const handleItemClick = (id) => {\r\n        setList(list.filter((item) => item.id !== id));\r\n    };\r\n    const handleAdd = () => {\r\n        setList(list.concat(generateRandomString_1.generateId({ text: generateRandomString_1.generateRandomString(), As: 'a', href: '#', className: { styles: menu_css_1.default } })));\r\n    };\r\n    return (react_1.default.createElement(\"div\", { className: menu_css_1.default.menu },\r\n        react_1.default.createElement(Dropdown_1.Dropdown, { button: react_1.default.createElement(\"button\", { className: menu_css_1.default.menuButton },\r\n                react_1.default.createElement(\"svg\", { width: \"5\", height: \"20\", viewBox: \"0 0 5 20\", fill: \"none\", xmlns: \"http://www.w3.org/2000/svg\" },\r\n                    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"2.5\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n                    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"10\", r: \"2.5\", fill: \"#D9D9D9\" }),\r\n                    react_1.default.createElement(\"circle\", { cx: \"2.5\", cy: \"17.5\", r: \"2.5\", fill: \"#D9D9D9\" }))) },\r\n            react_1.default.createElement(\"button\", { onClick: pipe_1.pipe(preventDefault_1.preventDefault, stopPropagation_1.stopPropagation, handleAdd) }, \"Add Element\"),\r\n            react_1.default.createElement(\"div\", { className: menu_css_1.default.dropdown }),\r\n            react_1.default.createElement(\"ul\", null,\r\n                react_1.default.createElement(GenericList_1.GenericList, { list: list })))));\r\n}\r\nexports.Menu = Menu;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/Menu.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/index.ts":
/*!*************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./Menu */ \"./src/shared/CardsList/Card/Menu/Menu.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/index.ts?");

/***/ })

})