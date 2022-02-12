webpackHotUpdate("main",{

/***/ "./src/shared/CardsList/CardsList.tsx":
/*!********************************************!*\
  !*** ./src/shared/CardsList/CardsList.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\r\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\r\n}) : function(o, v) {\r\n    o[\"default\"] = v;\r\n});\r\nvar __importStar = (this && this.__importStar) || function (mod) {\r\n    if (mod && mod.__esModule) return mod;\r\n    var result = {};\r\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\r\n    __setModuleDefault(result, mod);\r\n    return result;\r\n};\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __importDefault = (this && this.__importDefault) || function (mod) {\r\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.CardsList = void 0;\r\nconst react_1 = __importStar(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\r\nconst cardslist_css_1 = __importDefault(__webpack_require__(/*! ./cardslist.css */ \"./src/shared/CardsList/cardslist.css\"));\r\nconst Card_1 = __webpack_require__(/*! ./Card */ \"./src/shared/CardsList/Card/index.ts\");\r\nconst axios_1 = __importDefault(__webpack_require__(/*! axios */ \"./node_modules/axios/index.js\"));\r\nconst react_redux_1 = __webpack_require__(/*! react-redux */ \"./node_modules/react-redux/es/index.js\");\r\nfunction CardsList() {\r\n    const token = react_redux_1.useSelector(state => state.token.token);\r\n    const [posts, setPosts] = react_1.useState([]);\r\n    const [loading, setLoading] = react_1.useState(false);\r\n    const [errorLoading, setErrorLoading] = react_1.useState('');\r\n    const bottomOfList = react_1.useRef(null);\r\n    const [nextAfter, setNextAfter] = react_1.useState('');\r\n    const [count, setCount] = react_1.useState(0);\r\n    const buttonLoading = react_1.useRef(null);\r\n    const [postLoading, setPostLoading] = react_1.useState(true);\r\n    react_1.useEffect(() => {\r\n        function load() {\r\n            return __awaiter(this, void 0, void 0, function* () {\r\n                setLoading(true);\r\n                setErrorLoading('');\r\n                try {\r\n                    const { data: { data: { after, children } } } = yield axios_1.default.get('https://oauth.reddit.com/rising/', {\r\n                        headers: { Authorization: `bearer ${token}` },\r\n                        params: {\r\n                            limit: 10,\r\n                            after: nextAfter,\r\n                        }\r\n                    });\r\n                    setNextAfter(after);\r\n                    setPosts(prevChildren => prevChildren.concat(...children));\r\n                }\r\n                catch (error) {\r\n                    setErrorLoading(String(error));\r\n                }\r\n                setLoading(false);\r\n            });\r\n        }\r\n        const observer = new IntersectionObserver((entries) => {\r\n            if ((entries[0].isIntersecting) && (count <= 2)) {\r\n                load();\r\n                setCount(count + 1);\r\n            }\r\n            else\r\n                setPostLoading(false);\r\n        }, {\r\n            rootMargin: '5px'\r\n        });\r\n        if (bottomOfList.current) {\r\n            observer.observe(bottomOfList.current);\r\n        }\r\n        return () => {\r\n            if (bottomOfList.current) {\r\n                observer.unobserve(bottomOfList.current);\r\n            }\r\n        };\r\n    }, [bottomOfList.current, nextAfter, token, postLoading]);\r\n    function handleClick() {\r\n        if (buttonLoading.current)\r\n            buttonLoading.current.innerHTML = 'Загрузка...';\r\n        setCount(0);\r\n        setPostLoading(true);\r\n    }\r\n    return (react_1.default.createElement(\"div\", null,\r\n        react_1.default.createElement(\"ul\", { className: cardslist_css_1.default.cardList },\r\n            posts.length === 0 && !loading && !errorLoading && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"\\u041D\\u0435\\u0442 \\u043D\\u0438 \\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u043F\\u043E\\u0441\\u0442\\u0430\")),\r\n            posts.map(post => (react_1.default.createElement(Card_1.Card, { key: post.data.id, id: post.data.id, title: post.data.title, text: post.data.selftext, cardImage: post.data.thumbnail, author: post.data.author, karmaCounter: post.data.score }))),\r\n            loading && (react_1.default.createElement(\"div\", { style: { textAlign: 'center' } }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u043A\\u0430...\")),\r\n            errorLoading && (react_1.default.createElement(\"div\", { role: \"alert\", style: { textAlign: 'center' } }, errorLoading)),\r\n            (count == 3) &&\r\n                react_1.default.createElement(\"div\", { className: cardslist_css_1.default.list },\r\n                    react_1.default.createElement(\"button\", { className: cardslist_css_1.default.button, ref: buttonLoading, onClick: handleClick }, \"\\u0417\\u0430\\u0433\\u0440\\u0443\\u0437\\u0438\\u0442\\u044C \\u0435\\u0449\\u0435\"))),\r\n        react_1.default.createElement(\"div\", { ref: bottomOfList })));\r\n}\r\nexports.CardsList = CardsList;\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/CardsList.tsx?");

/***/ }),

/***/ "./src/shared/CardsList/index.ts":
/*!***************************************!*\
  !*** ./src/shared/CardsList/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\n__exportStar(__webpack_require__(/*! ./CardsList */ \"./src/shared/CardsList/CardsList.tsx\"), exports);\r\n\n\n//# sourceURL=webpack:///./src/shared/CardsList/index.ts?");

/***/ })

})