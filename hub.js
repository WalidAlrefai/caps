'use strict';
const events = require('./src/events');
require('./src/lib/driver');
require('./src/lib/vendor');
require('./src/caps');

events.on('Create Order',createOrder);

function createOrder(payload){
    setInterval(() =>{
        events.emit('pickup',{vendorData: payload.vendorData})
    },2000)
    setInterval(() =>{
        events.emit('in-transit',{vendorData: payload.vendorData})
    },3000)
    setInterval(() =>{
        events.emit('delivered',{vendorData: payload.vendorData})
    },4000)
}