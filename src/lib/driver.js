'use strict';
const events = require('../events');

events.on('pickupDriver',pickupDriver);
events.on('delivered',deliveredDriver);

function pickupDriver(payload){
    console.log('Driver : picked up' ,payload.vendorData.orderId);
}
function deliveredDriver(payload){
    console.log('Driver : delivered up' ,payload.vendorData.orderId);
    events.emit('deliveredVendor',{vendorData: payload.vendorData});
}

