'use strict';

const linked_list = require('../../ll-merge');

describe('for the merge 2 link list',()=>{
  it('if it can merge',()=>{
    // let ll = new linked_list.Link();
    let new_1 = new linked_list.Link();
    let new_2 = new linked_list.Link();
    new_1.append(0);
    new_1.append(2);
    new_1.append(4);
    new_2.append(1);
    new_2.append(3);
    new_2.append(5);
    let new_link = new linked_list.Link();
    expect(new_link.print_output(new_link.merge(new_1,new_2))).toEqual([0,1,2,3,4,5]);
  });
  it('check the value in the order if the link dosent have same length',()=>{
    let new_1 = new linked_list.Link();
    let new_2 = new linked_list.Link();
    new_1.append(0);
    new_1.append(2);
    new_1.append(4);
    new_2.append(1);
    // new_2.append(3);
    // new_2.append(5);
    let new_link = new linked_list.Link();
    expect(new_link.print_output(new_link.merge(new_1,new_2))).toEqual([0,1,2,4]);

  });
});