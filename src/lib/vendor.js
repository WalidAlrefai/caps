'use strict';
const events = require('../events');
let {faker} = require('@faker-js/faker');

let vendorData = {
    'store' : 'ASAC store',
    'orderId': faker.datatype.uuid(),
    'customer': faker.name.findName(),
    'address': faker.address.cityName()
}

events.on('deliveredVendor',deliveredVendor);

function deliveredVendor(payload){
    console.log('VENDOR: Thank you for delivering', payload.vendorData.orderId);
    events.emit('deliveredEvent',{vendorData: payload.vendorData});
}

setInterval(()=>{
        events.emit('Create Order' , {vendorData} )
},4001);