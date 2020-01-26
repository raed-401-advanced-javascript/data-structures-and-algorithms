'use strict';

const linkList= require('../../link-list'); 

describe('check the node ',()=>{
  let ll = new linkList.Link();
  ll.insert(100);
  ll.insert(200); 
  it('check if nodeclass create node ',()=>{
    expect(ll !== null).toBeTruthy();
  });
  it('check if include method work ',()=>{
    expect(ll.include(100)).toBeTruthy();
  });
  it('check if the convert to string method work',()=>{
    expect(typeof(ll.convert_to_string())).toEqual('string');
  });
});