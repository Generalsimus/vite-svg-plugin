"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSvgPlugin = void 0;
const core_1 = require("@svgr/core");
const fs_1 = __importDefault(require("fs"));
const createSvgPlugin = (options) => {
    const name = (options === null || options === void 0 ? void 0 : options.name) || "svg-loader";
    const testRegexp = (options === null || options === void 0 ? void 0 : options.test) || /\.svg$/;
    const config = options === null || options === void 0 ? void 0 : options.config;
    const state = options === null || options === void 0 ? void 0 : options.state;
    return {
        name: name,
        enforce: 'pre',
        async load(id) {
            if (testRegexp.test(id)) {
                return await (0, core_1.transform)(fs_1.default.readFileSync(id, "utf8"), config, state);
            }
            return null;
        }
    };
};
exports.createSvgPlugin = createSvgPlugin;
exports.default = exports.createSvgPlugin;
