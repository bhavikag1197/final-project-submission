'use strict';
const Mongoose = require('mongoose');
const Schema = Mongoose.Schema
const ObjectId = Schema.ObjectId

module.exports = {
    name : 'city',
    schema: {
        name: {
            type: String
        },
        value: {
            type: String
        },
        country : {
          type: String
        }
    },
    statics: {},
    methods: {},
    onSchema: {
        pre: {},
        post: {}
    }
}
