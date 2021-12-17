webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/Card/Menu/MenuItemList/MenuItemList.tsx":
/*!**********************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemList/MenuItemList.tsx ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuItemList = void 0;\r\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst menuitemlist_css_1 = __importDefault(__webpack_require__(/*! ./menuitemlist.css */ \"./src/shared/CardsList/Card/Menu/MenuItemList/menuitemlist.css\"));\r\nconst BlockIcon_1 = __webpack_require__(/*! ../../../../Icons/BlockIcon */ \"./src/shared/Icons/BlockIcon.tsx\");\r\nconst Text_1 = __webpack_require__(/*! ../../../../Text */ \"./src/shared/Text/index.ts\");\r\nconst WarningIcon_1 = __webpack_require__(/*! ../../../../Icons/WarningIcon */ \"./src/shared/Icons/WarningIcon.tsx\");\r\nfunction MenuItemList({ postId }) {\r\n    return (react_1.default.createElement(\"ul\", { className: menuitemlist_css_1.default.menuItemsList },\r\n        react_1.default.createElement(\"li\", { className: menuitemlist_css_1.default.menuItem, onClick: () => console.log(postId) },\r\n            react_1.default.createElement(CommentsIcon, null),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey66 }, \" \\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemlist_css_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: menuitemlist_css_1.default.menuItem, onClick: () => console.log(postId) },\r\n            react_1.default.createElement(BlockIcon_1.BlockIcon, null),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey66 }, \" \\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\")),\r\n        react_1.default.createElement(\"div\", { className: menuitemlist_css_1.default.divider }),\r\n        react_1.default.createElement(\"li\", { className: menuitemlist_css_1.default.menuItem },\r\n            react_1.default.createElement(WarningIcon_1.WarningIcon, null),\r\n            react_1.default.createElement(Text_1.Text, { size: 12, color: Text_1.EColor.grey66 }, \" \\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"))));\r\n}\r\nexports.MenuItemList = MenuItemList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuItemList/MenuItemList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/Card/Menu/MenuItemList/index.ts":
/*!**************************************************************!*\
  !*** ./src/shared/CardsList/Card/Menu/MenuItemList/index.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./MenuItemList */ \"./src/shared/CardsList/Card/Menu/MenuItemList/MenuItemList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/Card/Menu/MenuItemList/index.ts?");

/***/ })

})