"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pubSubManager_js_1 = require("./pubSubManager.js");
setInterval(() => {
    pubSubManager_js_1.PubSubManager.getInstance().userSubscribe(Math.random().toString(), "APPL");
}, 5000);
