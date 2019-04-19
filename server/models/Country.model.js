'use strict';
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema
const ObjectId = Schema.ObjectId

module.exports = {
    name : 'country',
    schema: {
        name: {
            type: String
        },
        value: {
            type: String
        }
    },
    statics: {},
    methods: {},
    onSchema: {
        pre: {},
        post: {}
    },
    collection: 'country'
}
