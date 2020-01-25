'use strict';

let binnary = require('../../array-binary-search')
describe('Array binary',()=>{
    it('check  if the value exsist',()=>{
        let array_on_test = [1,2,3];
        expect(binnary(array_on_test,5)).toEqual(-1)
        
    })
    it('check the position',()=>{
        let array_on_test = [1,2,3,6,7];
        expect(binnary(array_on_test,6)).toEqual(3)
        
    })
    it('check value of the position if it it exsist',()=>{
        let array_on_test = [1,2,3,6,7];
        expect(array_on_test[binnary(array_on_test,6)]).toEqual(6)
    })
})