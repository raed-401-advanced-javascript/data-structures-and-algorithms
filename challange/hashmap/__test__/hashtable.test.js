'use strict';

const model = require('../hashmap.js');

describe('check for the Hashtable model',()=>{
  it('can set data in hashtabble',()=>{
    let h_t = new model.Hashtable(1024);
    h_t.set('name','ahmad');
    expect(h_t[h_t.hash('name')]).toEqual(['name','ahmad']);
  });
  it('Retrieving based on a key returns the value stored',()=>{
    let h_t = new model.Hashtable(1024);
    h_t.set('name','ahmad');
    expect(h_t[h_t.hash('name')].head.val[1]).toEqual(['ahmad']);
  });
  it('Successfully returns null for a key that does not exist in the hashtable',()=>{
    let h_t = new model.Hashtable(1024);
    expect(h_t[96698]).toEqual(undefined);
  });
  it('Successfully handle a collision within the hashtable',()=>{
    let h_t = new model.Hashtable(1024);
    h_t.set('name','ahmad');
    h_t.set('name','khalid');
    expect(h_t[h_t.hash('name')].head.val[1]).toEqual(['khalid']);
  });
});