'use strict';

const AnimalSH = require('../../fifo-animal-shelter');


describe('check model shelter',()=>{
  let new_shelter;
  beforeEach(()=>{
    new_shelter = new AnimalSH();

  });
  it('check if i can added to the shelter',()=>{
    new_shelter.enqeue({name:'john',type:'dog'});
    expect(new_shelter.shelter).toEqual([{name:'john',type:'dog'}]);
  });
  it('check if i can added multi stuff',()=>{
    new_shelter.enqeue({name:'john',type:'dog'});
    new_shelter.enqeue({name:'soon',type:'cat'});
    expect(new_shelter.shelter).toEqual([{name:'john',type:'dog'},{name:'soon',type:'cat'}]);
  });
  it('check if i can deqeue cat',()=>{
    new_shelter.enqeue({name:'john',type:'dog'});
    new_shelter.enqeue({name:'soon',type:'cat'});
    expect(new_shelter.deqeue('cat')).toEqual({name:'soon',type:'cat'});
  });
  it('check if type not dog or cat',()=>{
    new_shelter.enqeue({name:'john',type:'dog'});
    new_shelter.enqeue({name:'soon',type:'cat'});
    expect(new_shelter.deqeue('turtle')).toEqual(null);
  });
});