'use strict';
const Model = require('../../stacks-and-queues');
describe('test whole module',()=>{
  describe('test stack module',()=>{
    it('Can successfully push onto a stack',()=>{
      let stacks = new Model.Stack();
      stacks.push(5);
      expect(stacks.top).toEqual(5);
    });
    it('Can successfully push multiple values onto a stack',()=>{
      let stacks = new Model.Stack();
      stacks.push(5);
      stacks.push(4);
      expect(stacks.head.data).toEqual(4);
      expect(stacks.head.next.data).toEqual(5);
    });
    it('Can successfully pop off the stack',()=>{
      let stacks = new Model.Stack();
      stacks.push(5);
      stacks.push(4);
      stacks.pop();
      expect(stacks.head.data).toEqual(5);
    });
    it('Can successfully empty a stack after multiple pops',()=>{
      let stacks = new Model.Stack();
      stacks.push(5);
      stacks.push(4);
      stacks.pop();
      stacks.pop();
      expect(stacks).toEqual({head: null, top: null});
    });
    it('Can successfully peek the next item on the stack',()=>{
      let stacks = new Model.Stack();
      stacks.push(5);
      stacks.push(4);
      expect(stacks.top).toEqual(4);
    });
    it('Can successfully instantiate an empty stack',()=>{
      let stacks = new Model.Stack();
      expect(stacks).toEqual( { top: null, head: null });
    });
    it('Can successfully enqueue into a queue',()=>{
      let qeue = new Model.Qeue();
      qeue.enqueue(5);
      expect(qeue.head.data).toEqual(5); 
    });
    it('Can successfully enqueue multiple values into a queue',()=>{
      let qeue = new Model.Qeue();
      qeue.enqueue(5);
      qeue.enqueue(4);
      expect(qeue.head.data).toEqual(4);
      expect(qeue.head.next.data).toEqual(5);
    });
    it('Can successfully dequeue out of a queue the expected value',()=>{
      let qeue = new Model.Qeue();
      qeue.enqueue(5);
      qeue.enqueue(4);
      qeue.dequeue();
      expect(qeue.head.data).toEqual(4);
    });
    it('Can successfully peek into a queue, seeing the expected value',()=>{
      let qeue = new Model.Qeue();
      qeue.enqueue(5);
      qeue.enqueue(4);
      qeue.dequeue();
      expect(qeue.front).toEqual(4);
    });
    it('Can successfully empty a queue after multiple dequeues',()=>{
      let qeue = new Model.Qeue();
      qeue.enqueue(5);
      qeue.enqueue(4);
      qeue.dequeue();
      qeue.dequeue();
      expect(qeue.head).toEqual(null );
    });
    it('Can successfully instantiate an empty queue',()=>{
      let qeue = new Model.Qeue();
      expect(qeue).toEqual({ front: null, head: null, rare: null });
    });
  });
});