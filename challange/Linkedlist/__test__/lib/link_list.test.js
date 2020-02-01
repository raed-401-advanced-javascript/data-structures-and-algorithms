'use strict';

const link = require('../../link-list');

describe('check for the link list can give value with position',()=>{
  it('check if the position upper the length',()=>{
    let ll = new link.Link();
    ll.insert(5);
    ll.insert(4);
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    expect(ll.from_the_end(6)).toEqual('excpetion');
  });
  it('check if the length same position',()=>{
    let ll = new link.Link();
    ll.insert(5);
    ll.insert(4);
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    expect(ll.from_the_end(4)).toEqual(1);
  });
  it('check if the position negative number',()=>{
    let ll = new link.Link();
    ll.insert(5);
    ll.insert(4);
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    expect(ll.from_the_end(-4)).toEqual('excpetion');
  });
  it('if the link length 1',()=>{
    let special_case = new link.Link();
    special_case.insert(1);
    expect(special_case.from_the_end(0)).toEqual(1);
  });
  it('check in the middle',()=>{
    let ll = new link.Link();
    ll.insert(5);
    ll.insert(4);
    ll.insert(3);
    ll.insert(2);
    ll.insert(1);
    expect(ll.from_the_end(2)).toEqual(3);
  });
});