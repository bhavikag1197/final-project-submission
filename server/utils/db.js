'use strict';
const Mongoose = require('mongoose');
const err = console.error;
const log = console.log;
const mongodbUri = "mongodb://weatherapp:weatherapp123@localhost/weatherappdb";

module.exports = {
    connect: () => {
        Mongoose.connect(mongodbUri, {
        });

        Mongoose.connection.on('error', (e) => {
            err('Mongoose can not open connection');
            err(e);
            process.exit();
        });

        Mongoose.connection.on('connected', () => {
            log('Connection DB ok');
        });

        Mongoose.connection.on('disconnected', () => {
            err('Connection DB lost');

            setTimeout(() => {
                Mongoose.connect(mongodbUri)
                err('DB reconnection');
            }, 15000);
        });
    }
};
