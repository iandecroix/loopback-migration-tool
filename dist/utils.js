"use strict";
/**
 * Created by garusis on 01/02/17.
 */

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.defaults = undefined;
exports.appLoader = appLoader;

var _lodash = require("lodash");

var _lodash2 = _interopRequireDefault(_lodash);

var _fs = require("fs");

var _fs2 = _interopRequireDefault(_fs);

var _path = require("path");

var _path2 = _interopRequireDefault(_path);

var _debug = require("debug");

var _debug2 = _interopRequireDefault(_debug);

var _yargs = require("yargs");

var _yargs2 = _interopRequireDefault(_yargs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defs = {
    ds: [],
    model: [],
    method: "migrate",
    ignored_model: [],
    src: "./seeds/*.js",
    app: "./server/server.js"
};var defaults = exports.defaults = loadDefaults("./.lb-migrationrc.json");

function appLoader(appPath) {
    if (!_path2.default.isAbsolute(appPath)) {
        appPath = process.cwd() + "/" + appPath;
    }
    var app = require(appPath);
    if (!app.loopback && app.default && app.default.loopback) //exported as a ES6 module.
        app = app.default;
    return app;
}

function loadDefaults(rcPath) {
    var newDefaults = {};
    if (_fs2.default.existsSync(rcPath)) {
        newDefaults = JSON.parse(_fs2.default.readFileSync(rcPath, "utf-8"));
    }
    newDefaults = _lodash2.default.defaults(newDefaults, defs);
    return newDefaults;
}
//# sourceMappingURL=utils.js.map
