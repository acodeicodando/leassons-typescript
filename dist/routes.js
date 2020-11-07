"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
function helloWorld(request, response) {
    response.json({ message: 'Hello World' });
}
exports.helloWorld = helloWorld;
