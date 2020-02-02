'use strict';

const linkedList = require('../../link-list');
describe('node link list', () => {
  it('check if i can added node to the end of the list', () => {
    let ll = new linkedList.Link();
    ll.insert(2);
    ll.insert(1);
    ll.append(3);
    expect(ll.head.next.next.data).toEqual(3);
  });
  it('check if i can added multiplie value in the end ', () => {
    let ll = new linkedList.Link();
    ll.insert(2);
    ll.insert(1);
    ll.append(3);
    ll.append(4);
    // console.log('value',ll.head.next.next.data)
    expect(ll.head.next.next.data).toEqual(3);
    expect(ll.head.next.next.next.data).toEqual(4);
  });
  it('check if i can added node before the node on the middle ', () => {
    let ll = new linkedList.Link();
    ll.insert(2);
    ll.insert(1);
    ll.insert(0);
    ll.added_before(0.5, 1);
    expect(ll.head.next.data).toEqual(0.5);
    expect(ll.head.next.next.data).toEqual(1);
  });
  it('check if i can added value before the first value in the list ', () => {
    let ll = new linkedList.Link();
    ll.insert(2);
    ll.insert(1);
    console.log(ll);
    ll.added_before(0, 1);
    expect(ll.head.data).toEqual(1);
  });
  it('check if i can added node after middle node', () => {
    let ll = new linkedList.Link();
    ll.insert(2);
    ll.insert(1);
    ll.insert(0);
    ll.added_after(1.5, 1);
    expect(ll.head.next.data).toEqual(1);
    expect(ll.head.next.next.data).toEqual(1.5);
  });
  it('check if i can added node after last node', () => {
    let ll = new linkedList.Link();
    ll.insert(2);
    ll.insert(1);
    ll.added_after(3, 2);
    // console.log(ll)
    expect(ll.head.next.next.data).toEqual(3);
  });
});