'use strict';
const events = require('../src/events')
let data = {
    store: 'zaman elkhear',
    orderId: 'e3669048-7313-427b-b6cc-74010ca1f8f0',
    customer: 'walid',
    address: 'irbid'
}
describe('Test events', () => {
    let consoleSpy;

    beforeAll(() => {
        consoleSpy = jest.spyOn(console, 'log').mockImplementation();
    });
    afterAll(() =>{
        consoleSpy.mockRestore();
    })
    
    it('pickup event ', async () => {
        events.emit('pickup', data);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });
    it('delieverd event ', async () => {
        events.emit('delieverd', data);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });
    it('in transit event ', async () => {
        events.emit('in-transit', data);
        await consoleSpy();
        expect(consoleSpy).toHaveBeenCalled();
    });
})