'use strict';

const fib_sum = require('../../fib_sum')

describe('Fib_sum',()=>{
    describe('fib',()=>{
        it('test the output of the function',()=>{
            expect(fib_sum.fib(8)).toEqual(21)
        })
    })
    describe('sumation',()=>{
        it('test value of sumation of array',()=>{
            expect(fib_sum.sumation([[1,2,3],[4,5,6]])[0]).toEqual(6)
        })
        it('test the length of array output',()=>{
            expect(fib_sum.sumation([[1,2,3],[4,5,6]]).length).toEqual(2)
        })
    })
})
