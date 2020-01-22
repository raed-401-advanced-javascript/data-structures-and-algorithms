const insert_array = require('../../array-shift');

describe('module insert', ()=>{
    it('adding value to the array',()=>{
        let array_test = [3,4,5]
        insert_array(array_test,6)
        expect(array_test.length).toEqual(4)
    })
})
