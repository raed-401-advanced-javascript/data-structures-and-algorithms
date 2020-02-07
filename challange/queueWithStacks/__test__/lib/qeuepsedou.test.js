'use strict';

const Model = require('../../queue-with-stacks');


describe('check for model',()=>{
  it('can added item to stack',()=>{
    let qeue = new Model.PseudoQueue();
    qeue.enqueue(5);
    expect(qeue.Stack_1.head.value).toEqual(5);
  });
  it('can added multiple item',()=>{
    let qeue = new Model.PseudoQueue();
    qeue.enqueue(5);
    qeue.enqueue(4);
    expect(qeue.Stack_1.head.value).toEqual(4);
    expect(qeue.Stack_1.head.next.value).toEqual(5);
  });
  it('can delete item',()=>{
    let qeue = new Model.PseudoQueue();
    qeue.enqueue(5);
    qeue.enqueue(4);
    qeue.dequeue();
    expect(qeue.Stack_2.head.value).toEqual(4);
  });
  it('can delete multiple item',()=>{
    let qeue = new Model.PseudoQueue();
    qeue.enqueue(5);
    qeue.enqueue(4);
    qeue.dequeue();
    qeue.dequeue();
    expect(qeue.Stack_2.head).toEqual(null);
  });
});