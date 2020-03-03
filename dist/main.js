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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/controller/OrdersController.js":
/*!********************************************!*\
  !*** ./src/controller/OrdersController.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\r\nclass Orders {\r\n\r\n\r\n    static forward(position, orientation, map) {\r\n\r\n        switch (orientation) {\r\n            case \"N\": {\r\n                position[1]++;\r\n                break;\r\n            }\r\n            case \"E\": {\r\n                position[0]++;\r\n                break;\r\n            }\r\n            case \"S\": {\r\n                position[1]--;\r\n                break;\r\n            }\r\n            case \"W\": {\r\n                position[0]--;\r\n                break;\r\n            }\r\n        }\r\n        const condition = Orders.checkObstacle(position, map)\r\n        return { condition, position };\r\n\r\n\r\n    }\r\n\r\n    static left(orientation) {\r\n\r\n        const compass = [\"N\", \"E\", \"S\", \"W\"];\r\n        let currentOrientation = compass.indexOf(orientation);\r\n        currentOrientation--;\r\n        if (currentOrientation < 0) { currentOrientation = 3 };\r\n        return compass[currentOrientation]\r\n\r\n    }\r\n\r\n    static right(orientation) {\r\n\r\n        const compass = [\"N\", \"E\", \"S\", \"W\"];\r\n        let currentOrientation = compass.indexOf(orientation);\r\n        currentOrientation++;\r\n        if (currentOrientation > 3) { currentOrientation = 0 };\r\n        return compass[currentOrientation]\r\n\r\n    }\r\n\r\n    static checkObstacle(position, map) {\r\n\r\n        const occupiedCoordinateX = map.obstacles.filter(element => element[0] == position[0]);\r\n        const occupiedCoordinateXY = occupiedCoordinateX.filter(element => element[1] == position[1]);\r\n        if (occupiedCoordinateXY.length > 0 ||\r\n            position[0] > map.size[0] ||\r\n            position[1] > map.size[0] ||\r\n            position[0] < 0 ||\r\n            position[1] < 0\r\n        ) {\r\n           return \"crash\";\r\n        }\r\n        return \"ok\"\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Orders);\n\n//# sourceURL=webpack:///./src/controller/OrdersController.js?");

/***/ }),

/***/ "./src/domain/AbsVehicle.js":
/*!**********************************!*\
  !*** ./src/domain/AbsVehicle.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass AbsVehicle{\r\n\r\nconstructor (type, position,orientation,orders){\r\n\r\n    if (this.constructor===AbsVehicle){\r\n        throw new TypeError(\"Abstract class cannot be instatiated\");\r\n    }\r\n    this.type=type\r\n    this.position=position;\r\n    this.orientation=orientation;\r\n    this.orders=orders;\r\n    this.status=\"OK\";\r\n    this.backupOrder=[];\r\n\r\n    \r\n\r\n}\r\n\r\n};\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (AbsVehicle);\n\n//# sourceURL=webpack:///./src/domain/AbsVehicle.js?");

/***/ }),

/***/ "./src/domain/Map.js":
/*!***************************!*\
  !*** ./src/domain/Map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Map {\r\n\r\n    constructor(size) {\r\n\r\n        this.size = size;\r\n        this.obstacles = [];\r\n    }\r\n\r\n    deploy(coordinatesArray) {\r\n      \r\n        const occupiedCoordinateX = this.obstacles.filter(element=>element[0]==coordinatesArray[0]);\r\n        const occupiedCoordinateXY= occupiedCoordinateX.filter(element=>element[1]==coordinatesArray[1]);\r\n        if (coordinatesArray[0] > this.size[0] ||\r\n            coordinatesArray[1] > this.size[1] ||\r\n            occupiedCoordinateXY!=-[]) {\r\n            \r\n            return false\r\n        }\r\n        else return true\r\n    }\r\n\r\n    addObstacle(newObstacle) {\r\n\r\n        this.obstacles.push(newObstacle);\r\n      \r\n     };\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\n\n//# sourceURL=webpack:///./src/domain/Map.js?");

/***/ }),

/***/ "./src/domain/Rover.js":
/*!*****************************!*\
  !*** ./src/domain/Rover.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _AbsVehicle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AbsVehicle.js */ \"./src/domain/AbsVehicle.js\");\n/* harmony import */ var _controller_OrdersController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controller/OrdersController.js */ \"./src/controller/OrdersController.js\");\n\r\n\r\n\r\nclass Rover extends _AbsVehicle_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\r\n\r\n    constructor(position, orientation, orders) {\r\n\r\n        super(\"Rover\", position, orientation, orders);\r\n    }\r\n\r\n    move(map) {\r\n\r\n        for (let i = 0; i < this.orders.length; i++) {\r\n            const order = this.orders[i];\r\n            let status = undefined;\r\n\r\n            switch (order) {\r\n\r\n                case \"M\": {\r\n                    this.backupOrder.push(this.position[0]);\r\n                    this.backupOrder.push(this.position[1]);\r\n                    status = _controller_OrdersController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].forward(this.position, this.orientation, map);\r\n                    if (status.condition == \"crash\") {\r\n                        i = this.orders.length;\r\n                        this.status=\"HAD TO STOP\";\r\n                        this.position=this.backupOrder;\r\n                        break;\r\n                    }\r\n                    else {\r\n                        this.position = status.position;\r\n                        this.backupOrder.splice(0);\r\n                        break;\r\n                    }\r\n                }\r\n                case \"L\": {\r\n                    this.orientation = _controller_OrdersController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].left(this.orientation); break;\r\n                }\r\n                case \"R\": {\r\n                    this.orientation = _controller_OrdersController_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].right(this.orientation); break;\r\n                }\r\n            }\r\n        }\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Rover);\n\n//# sourceURL=webpack:///./src/domain/Rover.js?");

/***/ }),

/***/ "./src/helpers/FileManager.js":
/*!************************************!*\
  !*** ./src/helpers/FileManager.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass FileManager {\r\n\r\n    static readFileAsync(file) {\r\n\r\n        return new Promise((resolve, reject) => {\r\n            let reader = new FileReader();\r\n\r\n            reader.onload = () => {\r\n                resolve(reader.result);\r\n            };\r\n\r\n            reader.onerror = reject;\r\n\r\n            reader.readAsText(file);\r\n        })\r\n    }\r\n\r\n    \r\n    static async  processFile(file) {\r\n        \r\n        try {\r\n            let text = await FileManager.readFileAsync(file);\r\n            let cleaningText=text.replace(/\\s/g, \"-\");\r\n            const orders=cleaningText.split(\"--\");\r\n            return orders;\r\n        } catch (err) {\r\n            console.log(err);\r\n        }\r\n\r\n\r\n    }\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (FileManager);\n\n//# sourceURL=webpack:///./src/helpers/FileManager.js?");

/***/ }),

/***/ "./src/helpers/InfoSorter.js":
/*!***********************************!*\
  !*** ./src/helpers/InfoSorter.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass InfoSorter {\r\n\r\n    static getCoordinates(value, useForCoords) {\r\n\r\n        const splitInput = value.split(\"-\")\r\n        splitInput.splice(2);\r\n        const stringyCoordinates = splitInput.filter(index => Number(index) >= 0);\r\n        let numberCoordinates = [];\r\n\r\n        if (stringyCoordinates.length == 2) {\r\n            for (let i = 0; i < 2; i++) {\r\n                numberCoordinates.push(Number(stringyCoordinates[i]));\r\n            }\r\n            console.log(numberCoordinates);\r\n        }\r\n        else if (useForCoords == \"for the Map\") {\r\n            numberCoordinates = [50, 50];\r\n        }\r\n        else {\r\n            numberCoordinates = [0, 0];\r\n        }\r\n\r\n        return numberCoordinates;\r\n    }\r\n\r\n\r\n    static getRoverList(ordersArray) {\r\n\r\n        ordersArray.splice(0, 1);\r\n        let rovers = []\r\n        let initialPosition = undefined;\r\n        let initialOrientation = undefined;\r\n\r\n        for (let i = 0; i < ordersArray.length; i++) {\r\n            if (i % 2 == 0) {\r\n                initialPosition = InfoSorter.getCoordinates(ordersArray[i], \"for deployment\");\r\n                initialOrientation = InfoSorter.getOrientation(ordersArray[i]);\r\n            }\r\n            else {\r\n\r\n                const orders = ordersArray[i].toUpperCase();\r\n                rovers.push({ initialPosition, initialOrientation, orders });\r\n            }\r\n        }\r\n\r\n        return (rovers);\r\n    }\r\n\r\n    static getOrientation(string) {\r\n\r\n        const splitInput = string.split(\"-\");\r\n        const orientation = splitInput[splitInput.length - 1];\r\n\r\n        if (orientation.toUpperCase() === \"N\" ||\r\n            orientation.toUpperCase() === \"E\" ||\r\n            orientation.toUpperCase() === \"S\" ||\r\n            orientation.toUpperCase() === \"W\"\r\n        ) {\r\n            return orientation.toUpperCase();\r\n        }\r\n        else return (\"N\");\r\n\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (InfoSorter);\n\n//# sourceURL=webpack:///./src/helpers/InfoSorter.js?");

/***/ }),

/***/ "./src/helpers/NodeGenerator.js":
/*!**************************************!*\
  !*** ./src/helpers/NodeGenerator.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass NodeGenerator {\r\n\r\n    static drawInitialInfo  (map,rovers)  {\r\n\r\n        NodeGenerator.clearNodes();\r\n        const node = document.getElementById(\"mapContainer\");\r\n        const html = `\r\n                     <div>X AXIS:${map[0]}</div>\r\n                     <div>Y AXIS:${map[1]}</div>\r\n                    `;\r\n        node.insertAdjacentHTML('beforeEnd', html);\r\n        const node2 = document.getElementById(\"input\");\r\n        for (let i = 0; i < rovers.length; i++) {\r\n            const html2 = `<h2>Rover Number ${i} INPUT</h2>\r\n            <div class=\"line\">X AXIS:${rovers[i].initialPosition[0]}</div>\r\n            <divclass=\"line\">Y AXIS:${rovers[i].initialPosition[1]}</div>\r\n            <div class=\"line\">ORIENTATION:${rovers[i].initialOrientation}</div>\r\n            <div class=\"line\">ORDERS:${rovers[i].orders}</div>\r\n           `;\r\n            node2.insertAdjacentHTML('beforeEnd', html2);\r\n        }\r\n    }\r\n    static clearNodes  ()  {\r\n        const node = document.getElementById(\"mapContainer\");\r\n        while (node.firstChild) {\r\n            node.removeChild(node.firstChild);\r\n        }\r\n       const  node2 = document.getElementById(\"input\");\r\n        while (node2.firstChild) {\r\n            node2.removeChild(node2.firstChild);\r\n        }\r\n        const node3 = document.getElementById(\"output\");\r\n        while (node3.firstChild) {\r\n            node3.removeChild(node3.firstChild);\r\n        }\r\n    }\r\n\r\n    static printFinalData  (data)  {\r\n\r\n        const node = document.getElementById(\"output\");\r\n        for ( let i = 0; i < data.length; i++) {\r\n            const html = `<h2>Rover Number ${i} OUTPUT</h2>\r\n            <div class=\"line\">X AXIS:${data[i].position[0]}</div>\r\n            <div class=\"line\">Y AXIS:${data[i].position[1]}</div>\r\n            <div class=\"line\">ORIENTATION:${data[i].orientation}</div>\r\n            <div class=\"line\">STATUS:${data[i].status}</div>\r\n           `;\r\n            node.insertAdjacentHTML('beforeEnd', html);\r\n        }\r\n\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (NodeGenerator);\n\n//# sourceURL=webpack:///./src/helpers/NodeGenerator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _domain_Rover_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domain/Rover.js */ \"./src/domain/Rover.js\");\n/* harmony import */ var _domain_Map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain/Map.js */ \"./src/domain/Map.js\");\n/* harmony import */ var _helpers_FileManager_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/FileManager.js */ \"./src/helpers/FileManager.js\");\n/* harmony import */ var _helpers_InfoSorter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers/InfoSorter.js */ \"./src/helpers/InfoSorter.js\");\n/* harmony import */ var _helpers_NodeGenerator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/NodeGenerator.js */ \"./src/helpers/NodeGenerator.js\");\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.onload = () => {\r\n    document.getElementById(\"fileInput\").addEventListener(\"change\", ()=>{loadInfo()})\r\n    document.getElementById(\"readBtn\").addEventListener('click', () => { runSystem() });\r\n\r\n};\r\n\r\nasync function loadInfo(){\r\n\r\n    let file = document.getElementById('fileInput');\r\n    let roverList = [];\r\n    if (file.files.length > 0) {\r\n\r\n        const fileData = await _helpers_FileManager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].processFile(file.files[0]);\r\n        const mapSize = _helpers_InfoSorter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getCoordinates(fileData[0], \"for the map\");\r\n        const rovers = _helpers_InfoSorter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getRoverList(fileData);\r\n        _helpers_NodeGenerator_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].drawInitialInfo(mapSize, rovers)\r\n    }\r\n    else alert(\"No file chosen!\");\r\n\r\n\r\n}\r\n\r\nasync function runSystem() {\r\n\r\n    let file = document.getElementById('fileInput');\r\n    let roverList = [];\r\n    if (file.files.length > 0) {\r\n\r\n        const fileData = await _helpers_FileManager_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].processFile(file.files[0]);\r\n        const mapSize = _helpers_InfoSorter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getCoordinates(fileData[0], \"for the map\");\r\n        const map = new _domain_Map_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](mapSize);\r\n        const rovers = _helpers_InfoSorter_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getRoverList(fileData);\r\n       \r\n        for (let i = 0; i < rovers.length; i++) {\r\n            roverList.push(new _domain_Rover_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](rovers[i].initialPosition, rovers[i].initialOrientation, rovers[i].orders));\r\n        }\r\n        for (let i = 0; i < roverList.length; i++) {\r\n            const validDeployment = map.deploy(roverList[i].position);\r\n            if (validDeployment) {\r\n                roverList[i].move(map);\r\n                map.addObstacle(roverList[i].position);\r\n               \r\n            }\r\n            else{\r\n                roverList[i].status=\"INVALID DEPLOYMENT\";\r\n            }     \r\n        }\r\n        _helpers_NodeGenerator_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"].printFinalData(roverList)\r\n        console.log(roverList);\r\n    }\r\n    else { alert(\"No file chosen!\") };\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });