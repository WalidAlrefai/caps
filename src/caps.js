'use strict'

require('./lib/driver');
const events = require('./events')

events.on('pickup',pickupHandler);
events.on('in-transit',inTransitHandler);
events.on('delivered',deliverdHandler);

function pickupHandler(payload){
    const receipt ={
        event : 'pickup',
        time: new Date().toString(),
        payload: payload.vendorData
    }
    console.log('Event :' ,receipt);
    events.emit('pickupDriver',{vendorData: payload.vendorData});

}
function inTransitHandler(payload){
    const receipt ={
        event : 'in-transit',
        time: new Date().toString(),
        payload: payload.vendorData
    }
    console.log('picked up :',receipt);
    

}

function deliverdHandler(payload){
    const receipt ={
        event : 'delivered',
        time: new Date().toString(),
        payload: payload.vendorData
    }
    console.log('delivered :', receipt);
    console.log('Thank you',payload.vendorData.customer);
}