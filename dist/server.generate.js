/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar config = {\n  env: process.NODE_ENV || 'development',\n  port: process.eventNames.PORT || 4040,\n  jwtSecret: process.env.JWT_SECRET || 'mysecret_key',\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://localhost:27017/reactApp'\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://reactapp/./config/config.js?");

/***/ }),

/***/ "./server/controllers/authCtrl.js":
/*!****************************************!*\
  !*** ./server/controllers/authCtrl.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config/config */ \"./config/config.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ \"./server/models/User.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  // Signin/verify user and create cookie\n  signin: function signin(req, res) {\n    var id = req.body.id;\n    _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n      _id: id\n    }, function (err, user) {\n      if (err || !user) return res.status(401).json({\n        err: \"User not found\"\n      });\n      // User authentication from login would go here\n      ////////////////////////\n      var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().sign({\n        _id: user._id\n      }, _config_config__WEBPACK_IMPORTED_MODULE_1__[\"default\"].jwtSecret);\n      res.cookie('t', token, {\n        expire: new Date() + 9999\n      });\n      // return res.json({token, user: {_id: user._id, username: user.username, name: user.name }})\n      return res.json({\n        token: token,\n        user: user\n      });\n    });\n  },\n  // Signout user and delete cookie\n  signout: function signout(req, res) {\n    res.clearCookie('t');\n    return res.status('200').json({\n      msg: 'signed out'\n    });\n  }\n});\n\n//# sourceURL=webpack://reactapp/./server/controllers/authCtrl.js?");

/***/ }),

/***/ "./server/controllers/chatCtrl.js":
/*!****************************************!*\
  !*** ./server/controllers/chatCtrl.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_ChatRoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/ChatRoom */ \"./server/models/ChatRoom.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/User */ \"./server/models/User.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }\nfunction _iterableToArrayLimit(r, l) { var t = null == r ? null : \"undefined\" != typeof Symbol && r[Symbol.iterator] || r[\"@@iterator\"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t[\"return\"] && (u = t[\"return\"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  // Return list of users in specified chatroom\n  lobby: function lobby(req, res) {\n    var lobby = req.body;\n    _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].find({\n      _id: {\n        $in: lobby\n      }\n    }, function (err, docs) {\n      res.status(200).json(docs);\n    }).select('_id name username');\n  },\n  // Return all chatroom profiles\n  chatRooms: function chatRooms(req, res) {\n    _models_ChatRoom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({}, function (err, docs) {\n      res.status(200).json(docs);\n    });\n  },\n  // Add new chat room\n  addRoom: function addRoom(req, res) {\n    var title = req.body.title;\n    var lobby = Object.keys(req.body).filter(function (x) {\n      return x !== 'title';\n    });\n    var _Object$entries$filte = _slicedToArray(Object.entries(req.body).filter(function (_ref) {\n        var _ref2 = _slicedToArray(_ref, 2),\n          prop = _ref2[0],\n          val = _ref2[1];\n        return prop !== 'title' && typeof val === 'string';\n      })[0], 2),\n      author_id = _Object$entries$filte[0],\n      author = _Object$entries$filte[1];\n    var room = new _models_ChatRoom__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n      title: title,\n      lobby: lobby,\n      author: author,\n      author_id: author_id\n    });\n    lobby.map(function (id) {\n      return _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findById(id, function (err, doc) {\n        doc.chatRooms.push(room._id);\n        doc.save();\n      });\n    });\n    room.save(function (err, data) {\n      console.log(data, \"new chatroom data\");\n      if (err) console.log(err);\n      res.status(200).json(data);\n    });\n  },\n  addMsg: function addMsg(req, res) {\n    var _req$body = req.body,\n      roomID = _req$body.roomID,\n      author = _req$body.author,\n      body = _req$body.body;\n    var date = moment__WEBPACK_IMPORTED_MODULE_2___default()();\n    _models_ChatRoom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(roomID, function (err, doc) {\n      doc.messages.push({\n        author: author,\n        body: body,\n        date: date\n      });\n      doc.save(function (err, data) {\n        console.log(data, \"new msg data\");\n        if (err) console.log(err);\n        res.status(200).json({\n          messages: data.messages,\n          comment: {\n            author: author,\n            body: body,\n            date: date\n          }\n        });\n      });\n    });\n  }\n\n  // // Save new user profile\n  // register: (req, res, next) => {\n  //   const {name, username, ip} = req.body;\n  //   User.findOne({ ip: ip }, (err, doc) => {\n  //     if(!doc){\n  //       const user  = new User({name, username, ip})\n  //       user.save((err, data) => {\n  //         console.log(data, \"new user data\")\n  //         if(err) console.log(err)\n  //         res.status(200).json(data)\n  //       })\n  //     }else{\n  //       res.status(200).json({err: 'IP address is already registered'})\n  //     }\n  //   })\n  // },\n\n  // // Return user profile \n  // profile: (req, res) => {\n  //   const {address} = req;\n  //   User.findOne({ ip: address }, (err, doc) => {\n  //     if(err)  res.status(200).json({err: 'No user profile found'})\n  //     else res.status(200).json(doc)\n  //   })\n  // },\n\n  // // Return all user profiles\n  // users: (req, res) => {\n  //   User.find({}, (err, docs) => {\n  //     res.status(200).json(docs)\n  //   }).select('_id name username')\n  // },\n});\n\n//# sourceURL=webpack://reactapp/./server/controllers/chatCtrl.js?");

/***/ }),

/***/ "./server/controllers/fileCtrl.js":
/*!****************************************!*\
  !*** ./server/controllers/fileCtrl.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! formidable */ \"formidable\");\n/* harmony import */ var formidable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(formidable__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../io */ \"./server/io.js\");\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs-extra */ \"fs-extra\");\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var mime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mime */ \"mime\");\n/* harmony import */ var mime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mime__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  upload: function upload(req, res, next) {\n    //Formidable uploads to operating systems tmp dir by default\n    var form = new formidable__WEBPACK_IMPORTED_MODULE_0__.IncomingForm({\n      multiples: true,\n      uploadDir: \"./Uploads\",\n      keepExtensions: true\n    });\n    form.on('progress', function (bytesReceived, bytesExpected) {\n      // Progress as percentage\n      var progress = (bytesReceived / bytesExpected * 100).toFixed(2);\n      var mb = (bytesExpected / 1024 / 1024).toFixed(1);\n      console.log(\"Uploading \".concat(mb, \" MB  \").concat(progress, \"%\"));\n      // Emit upload progress to components via real time\n      _io__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sockets.emit('uploadProgress', bytesReceived * 100 / bytesExpected);\n    });\n    form.parse(req, function (err, fields, files) {\n      // Checks for multiple files\n      if (files.fileUploaded.length > 0) files.fileUploaded.map(function (x) {\n        //Rename the file to its original name\n        (0,fs_extra__WEBPACK_IMPORTED_MODULE_3__.rename)(x.path, './Uploads/' + x.name, function (err) {\n          if (err) throw err;\n        });\n      });else\n        // for single files\n        (0,fs_extra__WEBPACK_IMPORTED_MODULE_3__.rename)(files.fileUploaded.path, './Uploads/' + files.fileUploaded.name, function (err) {\n          if (err) throw err;\n        });\n      res.status(200);\n      res.end();\n    });\n  },\n  download: function download(req, res) {\n    (0,fs_extra__WEBPACK_IMPORTED_MODULE_3__.access)(\"./Uploads/\".concat(req.fileName), function (err) {\n      if (err) {\n        console.log(\"./Uploads/\".concat(req.fileName, \" is not existed on disk\"));\n        res.redirect('/404');\n        return;\n      }\n      console.log(\"begin to download file ./Uploads/\".concat(req.fileName, \" in browser\"));\n      res.download(\"./Uploads/\".concat(req.fileName), function (downloadErr) {\n        if (err) {\n          console.log(\"file downloading error, now go to 404\", downloadErr);\n          res.redirect(\"/404\");\n        }\n        console.log(\"file downloading done\");\n      });\n    });\n  },\n  preview: function preview(req, res) {\n    var filePath = \"Uploads/\".concat(req.fileName);\n    var type = mime__WEBPACK_IMPORTED_MODULE_5___default().lookup(filePath).split('/')[0];\n    var encoding = type === 'text' || type === 'application' ? 'UTF-8' : 'base64';\n    (0,fs__WEBPACK_IMPORTED_MODULE_4__.readFile)(filePath, encoding, function (err, data) {\n      if (err) throw err;\n      res.json({\n        type: type,\n        content: data\n      });\n    });\n  },\n  directory: function directory(req, res) {\n    var data = [];\n    (0,fs_extra__WEBPACK_IMPORTED_MODULE_3__.readdir)(\"./Uploads\", {\n      encoding: \"UTF-8\"\n    }, function (err, files) {\n      files.map(function (x) {\n        return data.push(\"./Uploads/\".concat(x));\n      });\n      res.status(200).json(data);\n    });\n  }\n});\n\n//# sourceURL=webpack://reactapp/./server/controllers/fileCtrl.js?");

/***/ }),

/***/ "./server/controllers/userCtrl.js":
/*!****************************************!*\
  !*** ./server/controllers/userCtrl.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/User */ \"./server/models/User.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  // Save new user profile\n  register: function register(req, res, next) {\n    var _req$body = req.body,\n      name = _req$body.name,\n      username = _req$body.username,\n      ip = _req$body.ip;\n    _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n      ip: ip\n    }, function (err, doc) {\n      if (!doc) {\n        var user = new _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n          name: name,\n          username: username,\n          ip: ip\n        });\n        user.save(function (err, data) {\n          console.log(data, \"new user data\");\n          if (err) console.log(err);\n          return res.status(200).json(data);\n        });\n      } else {\n        return res.status(200).json({\n          err: 'IP address is already registered'\n        });\n      }\n    });\n  },\n  profile: function profile(req, res) {\n    // password decryptions would happen here\n    return res.json(req.profile);\n  },\n  // Return user profile \n  address: function address(req, res) {\n    return res.json({\n      id: req.id._id\n    });\n  },\n  // Return all user profiles\n  users: function users(req, res) {\n    _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find({}, function (err, docs) {\n      res.status(200).json(docs);\n    }).select('_id name username');\n  },\n  //\n  userIP: function userIP(req, res, next, address) {\n    _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n      ip: address\n    }, function (err, doc) {\n      if (err || !doc) return res.status(200).json({\n        err: 'No user profile found by IP'\n      });\n      req.id = doc;\n      next();\n    });\n  },\n  //\n  userID: function userID(req, res, next, id) {\n    _models_User__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n      _id: id\n    }, function (err, doc) {\n      if (err || !doc) res.status(400).json({\n        err: 'No user profile found by ID'\n      });\n      req.profile = doc;\n      next();\n    });\n  }\n});\n\n//# sourceURL=webpack://reactapp/./server/controllers/userCtrl.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar compile = function compile(app) {\n  if (_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === 'development') {\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()((_webpack_config_client__WEBPACK_IMPORTED_MODULE_4___default()));\n    var middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: (_webpack_config_client__WEBPACK_IMPORTED_MODULE_4___default().output).publicPath,\n      serverSideRender: true\n    });\n    app.use(middleware);\n    // app.use(webpackDevMiddleWare(compiler))\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  compile: compile\n});\n\n//# sourceURL=webpack://reactapp/./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _routes_fileRouter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/fileRouter */ \"./server/routes/fileRouter.js\");\n/* harmony import */ var _routes_chatRouter__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./routes/chatRouter */ \"./server/routes/chatRouter.js\");\n/* harmony import */ var _routes_userRouter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./routes/userRouter */ \"./server/routes/userRouter.js\");\n/* harmony import */ var _routes_authRouter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./routes/authRouter */ \"./server/routes/authRouter.js\");\n\n\n\n\n\n\n\n\n// Router files\n\n\n\n\nvar CURRENT_WORKING_DIRECTORY = process.cwd();\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n_devBundle__WEBPACK_IMPORTED_MODULE_6__[\"default\"].compile(app);\n\n// MIDDLEWARES\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().json()).use(body_parser__WEBPACK_IMPORTED_MODULE_1___default().urlencoded({\n  extended: false\n})).use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()()).use(compression__WEBPACK_IMPORTED_MODULE_3___default()()).use(cors__WEBPACK_IMPORTED_MODULE_4___default()()).use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default()[\"static\"](path__WEBPACK_IMPORTED_MODULE_7___default().join(CURRENT_WORKING_DIRECTORY, 'dist')));\napp.use(function (req, res, next) {\n  res.setHeader('Access-Control-Allow-Origin', '*');\n  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');\n  res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PATCH, DELETE, OPTIONS');\n  next();\n});\n// ROUTES\napp.use('/file', _routes_fileRouter__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.use('/chat', _routes_chatRouter__WEBPACK_IMPORTED_MODULE_9__[\"default\"]);\napp.use(_routes_userRouter__WEBPACK_IMPORTED_MODULE_10__[\"default\"]);\napp.use(_routes_authRouter__WEBPACK_IMPORTED_MODULE_11__[\"default\"]);\n\n// Render template \napp.get('/', function (req, res) {\n  res.status(200).send((0,_template__WEBPACK_IMPORTED_MODULE_5__[\"default\"])());\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://reactapp/./server/express.js?");

/***/ }),

/***/ "./server/io.js":
/*!**********************!*\
  !*** ./server/io.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io */ \"socket.io\");\n/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fs-extra */ \"fs-extra\");\n/* harmony import */ var fs_extra__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fs_extra__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _server_models_Client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../server/models/Client */ \"./server/models/Client.js\");\n/* harmony import */ var _server_models_ChatRoom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../server/models/ChatRoom */ \"./server/models/ChatRoom.js\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ \"moment\");\n/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar socketIO = socket_io__WEBPACK_IMPORTED_MODULE_0___default()();\nvar sockets_by_id = {};\nvar rooms = [];\n\n// console.log(socketIO)\n\n// Main IO connection\nsocketIO.sockets.on('connection', function (socket) {\n  var ip = socket.handshake.address.split(':')[3];\n  sockets_by_id[socket.id] = socket;\n  ///////////////////////////////////\n  // Other Real-time functionality //\n  ///////////////////////////////////\n  socket.on('refresh-directory', function () {\n    var data = [];\n    (0,fs_extra__WEBPACK_IMPORTED_MODULE_1__.readdir)(\"./Uploads\", {\n      encoding: \"UTF-8\"\n    }, function (err, files) {\n      files.map(function (x) {\n        return data.push(\"./Uploads/\".concat(x));\n      });\n      socket.emit('new-directory', data);\n    });\n  });\n\n  ///////////////////////////////////\n  ///*********CHAT EVENTS ********///\n  ///////////////////////////////////\n\n  // Users is verified or created upon entering chat lobby\n  socket.on('auth', function () {\n    console.log(\"\".concat(ip, \" has entered the Lobby\"));\n    _server_models_Client__WEBPACK_IMPORTED_MODULE_2__[\"default\"].findOne({\n      ip: ip\n    }, function (err, doc) {\n      if (!err || doc) {\n        var client = new _server_models_Client__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({\n          ip: ip\n        });\n        client.save(function (err, doc) {\n          if (err) console.log(err);\n        });\n      }\n    });\n    // User connects to chat lobby\n    socketIO.emit('online', ip);\n  });\n\n  // User disconnects from chat lobby\n  socket.on('offline', function () {\n    console.log(\"\".concat(ip, \" has left the lobby\"));\n  });\n  socket.on('createRoom', function (room) {\n    // const{ title, id} = room\n    socket.join(room.id);\n    socketIO.sockets.emit('roomCreated', room.id);\n  });\n  socket.on('joinRoom', function (roomID) {\n    console.log(\"\".concat(ip, \" joined \").concat(roomID, \" \"));\n    socket.join(roomID);\n    getRoom(roomID);\n    // socket.emit('chat-messages', getRoom(roomID)\n    // console.log(getRoom(roomID))\n  });\n  function getRoom(roomID) {\n    _server_models_ChatRoom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(roomID, function (err, doc) {\n      socket.emit('chat-messages', doc.messages);\n    });\n  }\n\n  // Receive, modify, and send back msg\n  socket.on('sendMsg', function (data) {\n    var roomID = data.roomID,\n      author = data.author,\n      body = data.body;\n    var date = moment__WEBPACK_IMPORTED_MODULE_4___default()();\n    _server_models_ChatRoom__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findById(roomID, function (err, doc) {\n      doc.messages.push({\n        author: author,\n        body: body,\n        date: date\n      });\n      socketIO.to(roomID).emit(\"getMsg\", doc.messages[doc.messages.length - 1]);\n\n      // doc.save((err, data) => {\n      //   if(err) console.log(err)\n      //   socketIO.to(roomID).emit(\"getMsg\", doc.messages[doc.messages.length-1]);\n      // })\n    });\n    // msg.ip = socket.handshake.address.split(':')[3];\n    // msg.timestamp = moment();\n    // socketIO.to(msg.roomID).emit(\"getMsg\", doc.messages[doc.messages.length-1]);\n  });\n\n  // socket.join(\"sessionId\");\n\n  // socket.on('join', function(room){\n  //   console.log('Joined room'); \n  //   socket.join(room);  \n  //   io.to(room).emit('joined', socket.id);\n  //   // socket.emit('lobby', sockets_by_id)\n  // });\n\n  // socket.on('leave', function(room){\n  //   console.log(`${socket.id} left room`);\n  //   socket.leave(room);\n  //   io.to(room).emit('left', socket.id);\n  // })\n\n  // User disconnect\n  // socket.on('disconnect', function(){\n  //   console.log( \"Good bye\", socket.handshake.address.split(':')[3], \"disconnected\");\n  // });\n\n  //User diconnects from main IO connection that starts at Home component\n  socket.on('disconnect', function () {\n    console.log(ip, 'Got disconnect!');\n  });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socketIO);\n\n//# sourceURL=webpack://reactapp/./server/io.js?");

/***/ }),

/***/ "./server/models/ChatRoom.js":
/*!***********************************!*\
  !*** ./server/models/ChatRoom.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar chatRoomSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  title: String,\n  author: String,\n  author_id: String,\n  created: {\n    type: Date,\n    \"default\": Date.now\n  },\n  lobby: Array,\n  messages: [{\n    author: String,\n    body: String,\n    date: Date\n  }]\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('ChatRoom', chatRoomSchema));\n\n//# sourceURL=webpack://reactapp/./server/models/ChatRoom.js?");

/***/ }),

/***/ "./server/models/Client.js":
/*!*********************************!*\
  !*** ./server/models/Client.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar clientSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({\n  ip: String\n});\nvar Client = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('Client', clientSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Client);\n\n//# sourceURL=webpack://reactapp/./server/models/Client.js?");

/***/ }),

/***/ "./server/models/User.js":
/*!*******************************!*\
  !*** ./server/models/User.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nvar userSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n  ip: String,\n  username: String,\n  name: String,\n  created: {\n    type: Date,\n    \"default\": Date.now\n  },\n  chatRooms: Array\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', userSchema));\n\n//# sourceURL=webpack://reactapp/./server/models/User.js?");

/***/ }),

/***/ "./server/routes/authRouter.js":
/*!*************************************!*\
  !*** ./server/routes/authRouter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_authCtrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/authCtrl */ \"./server/controllers/authCtrl.js\");\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\n// Verify user\nrouter.post('/auth/signin', _controllers_authCtrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signin);\n\n// Clear user\nrouter.get('/auth/signout', _controllers_authCtrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signout);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://reactapp/./server/routes/authRouter.js?");

/***/ }),

/***/ "./server/routes/chatRouter.js":
/*!*************************************!*\
  !*** ./server/routes/chatRouter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_chatCtrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/chatCtrl */ \"./server/controllers/chatCtrl.js\");\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\n\n// Grab collection of chatrooms\nrouter.get('/rooms', _controllers_chatCtrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].chatRooms);\n\n// Add new room to Rooms collection\nrouter.post('/addRoom', _controllers_chatCtrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addRoom);\n\n// Grab users specific to chat room\nrouter.post('/lobby', _controllers_chatCtrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].lobby);\n\n// Add new msg to room\nrouter.post('/addMsg', _controllers_chatCtrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].addMsg);\n\n// // Add new user to User collection\n// router.post('/register', chatCtrl.register)\n\n// // Grab user profile based on IP address\n// router.get('/profile/:address', chatCtrl.profile)\n\n// // Grab collection of users\n// router.get('/users', chatCtrl.users)\n\n// // PARAMS\n// router.param('address', (req, res, next, address)=>{\n//   req.address = address;\n//   next();\n// })\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://reactapp/./server/routes/chatRouter.js?");

/***/ }),

/***/ "./server/routes/fileRouter.js":
/*!*************************************!*\
  !*** ./server/routes/fileRouter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_fileCtrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/fileCtrl */ \"./server/controllers/fileCtrl.js\");\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\n\n// Upload and save files\nrouter.post('/upload', _controllers_fileCtrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].upload);\n\n// Read list of files\nrouter.get('/directory', _controllers_fileCtrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].directory);\n\n// Download link routes\nrouter.get('/Uploads/:name', _controllers_fileCtrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].download);\n\n// Read file data\nrouter.get('/preview/Uploads/:name', _controllers_fileCtrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].preview);\n\n// PARAMS\nrouter.param('name', function (req, res, next, fileName) {\n  req.fileName = fileName;\n  next();\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://reactapp/./server/routes/fileRouter.js?");

/***/ }),

/***/ "./server/routes/userRouter.js":
/*!*************************************!*\
  !*** ./server/routes/userRouter.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_userCtrl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/userCtrl */ \"./server/controllers/userCtrl.js\");\n\n\nvar router = (0,express__WEBPACK_IMPORTED_MODULE_0__.Router)();\nrouter.post('/users', _controllers_userCtrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].register) // Add new user to User collection\n.get('/users', _controllers_userCtrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].users); // Grab collection of users\n\n// Grab client profile based on IP address\nrouter.get('/users/client/:userIP', _controllers_userCtrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].address);\n\n// Grab user profile based on ID\nrouter.get('/users/:userID', _controllers_userCtrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].profile);\n\n// PARAMS\nrouter.param('userIP', _controllers_userCtrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userIP).param('userID', _controllers_userCtrl__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userID);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://reactapp/./server/routes/userRouter.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./io */ \"./server/io.js\");\n\n\n\n\n\n// Mongo database connection\n(mongoose__WEBPACK_IMPORTED_MODULE_2___default().Promise) = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri);\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connection.on('error', function () {\n  throw new Error(\"Unable to connect to database: \".concat(mongoUri));\n});\n\n//Server connection\nvar server = _express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, function (err) {\n  if (err) console.log(err);\n  console.info('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n\n// Socket IO connection\n_io__WEBPACK_IMPORTED_MODULE_3__[\"default\"].attach(server);\n\n//# sourceURL=webpack://reactapp/./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function () {\n  return \"<!DOCTYPE html>\\n    <html lang=\\\"en\\\">\\n      <head>\\n        <meta charset=\\\"UTF-8\\\">\\n        <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\n        <!-- JQUERY -->\\n        <script src=\\\"https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js\\\" integrity=\\\"sha512-+NqPlbbtM1QqiK8ZAo4Yrj2c4lNQoGv8P79DPtKzj++l5jnN39rHA/xsqn8zE9l0uSoxaCdrOgFs6yjyfbBxSg==\\\" crossorigin=\\\"anonymous\\\" referrerpolicy=\\\"no-referrer\\\"></script>\\n        <!-- BOOTSTRAP -->\\n        <link rel=\\\"stylesheet\\\" href=\\\"https://cdnjs.cloudflare.com/ajax/libs/bootstrap/4.5.3/css/bootstrap.min.css\\\" integrity=\\\"sha512-oc9+XSs1H243/FRN9Rw62Fn8EtxjEYWHXRvjS43YtueEewbS6ObfXcJNyohjHqVKFPoXXUxwc+q1K7Dee6vv9g==\\\" crossorigin=\\\"anonymous\\\" referrerpolicy=\\\"no-referrer\\\" />\\n        <!-- SEMANTIC -->\\n        <script src=\\\"https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.js\\\" integrity=\\\"sha512-dqw6X88iGgZlTsONxZK9ePmJEFrmHwpuMrsUChjAw1mRUhUITE5QU9pkcSox+ynfLhL15Sv2al5A0LVyDCmtUw==\\\" crossorigin=\\\"anonymous\\\" referrerpolicy=\\\"no-referrer\\\"></script>\\n        <!-- FONTAWESOME -->\\n        <link rel=\\\"stylesheet\\\" href=\\\"https://cdn.tlm.cloud/fontawesome/5.15.2/css/all.css\\\"\\n              integrity=\\\"sha384-+2e4h68pmq1jygCMJInB7m4qQ8/KId/WkeL2Qcg3YjJqYqjtUV1hk6CZm3SM+I2V\\\" crossorigin=\\\"anonymous\\\">\\n\\n        <title>React App</title>\\n        <link type=\\\"text/css\\\" rel=\\\"stylesheet\\\" href=\\\"/client/Assets/CSS/main.css\\\">\\n      </head>\\n      <body>\\n        <div id=\\\"root\\\" class=\\\"d-flex flex-column p-5\\\"></div>\\n       \\n        <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n      </body>\\n    </html>\";\n});\n\n//# sourceURL=webpack://reactapp/./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var path = __webpack_require__(/*! path */ \"path\");\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\nvar CURRENT_WORKING_DIR = process.cwd();\nvar config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: [\n  // 'react-hot-loader/patch',\n  'webpack-hot-middleware/client?reload=true', path.join(CURRENT_WORKING_DIR, '/client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    publicPath: '/dist/',\n    filename: 'bundle.js'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: [/node_modules/, /Files/],\n      loader: 'babel-loader'\n    }, {\n      test: /\\.(ttf|eot|svg|gif|jpng|png|jpg) (\\?[\\s\\S+]?$)/,\n      use: ['file-loader']\n    }, {\n      test: /\\.css?$/,\n      use: ['style-loader', 'css-loader', 'sass-loader']\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()],\n  devServer: {\n    historyApiFallback: true\n  }\n};\nmodule.exports = config;\n\n//# sourceURL=webpack://reactapp/./webpack.config.client.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "formidable":
/*!*****************************!*\
  !*** external "formidable" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("formidable");

/***/ }),

/***/ "fs-extra":
/*!***************************!*\
  !*** external "fs-extra" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("fs-extra");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("jsonwebtoken");

/***/ }),

/***/ "mime":
/*!***********************!*\
  !*** external "mime" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("mime");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("socket.io");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;