"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const fs_1 = __importDefault(require("fs"));
const path_1 = require("path");
const makeImageSource = (path, embed) => {
    if (embed) {
        try {
            const buffer = fs_1.default.readFileSync(path);
            let base64data = buffer.toString('base64');
            return `data:image/jpeg;base64,${base64data}`;
        }
        catch (e) {
            //do nothing
        }
    }
    return `./${path_1.basename(path)}`;
};
const ImagesContainer = props => {
    const { test } = props;
    return (react_1.default.createElement("div", { className: `tile ${test.screenshots.length === 0 ? `no-screenshots` : `screenshots`}` },
        react_1.default.createElement("div", { className: "screenshots-scroll-container" }, test.screenshots.map((screenshot, index) => {
            return (react_1.default.createElement("img", { key: index, "data-count": index + 1, className: "screenshot-img", src: makeImageSource(screenshot, test.embedImages) }));
        }))));
};
exports.default = ImagesContainer;
