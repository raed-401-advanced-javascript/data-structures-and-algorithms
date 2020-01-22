const insert_array = require('../../array-shift');

describe('module insert', ()=>{
    it('adding value to the array',()=>{
        let array_test = [3,4,5]
        expect(insert_array(array_test,6).length).toEqual(4)
    })
    it('test the position of the value',()=>{
        let array_test = [3,4,5]
        let output = insert_array(array_test,6)[2]
        expect(output).toEqual(6) 
    })
})
