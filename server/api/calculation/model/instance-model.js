"use strict";
var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    template: {
        type: Object,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = schema;