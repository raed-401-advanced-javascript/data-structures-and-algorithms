'use strict';
const model = require('../repeated-word.js')

describe('test gor chacker',()=>{
    it('check if can show the duplicate ',()=>{
        expect(model.first_repeate('it will be it as same')).toEqual('it')
    })
    it('check if give you first element duplicate',()=>{
        expect(model.first_repeate('it will be it as same be')).toEqual('it')
    })
    it('check if there no duplicate will show meesage',()=>{
        expect(model.first_repeate('it will be as same ')).toEqual('sorry there is no duplicate')
    })
})