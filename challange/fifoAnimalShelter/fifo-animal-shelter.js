'use strict';


class AnimalShelter {
  constructor(){
    this.shelter = [];
  }
  enqeue(animal){
    this.shelter.push(animal);
  }
  deqeue(pref){
    for(let i =0;i<this.shelter.length;i++){
      if(this.shelter[i].type === pref  ){
        return this.shelter[i];
      }
    }
    return null;
  }
}

const new_shelter = new AnimalShelter ();

new_shelter.enqeue({name:'john',type:'dog'});
new_shelter.deqeue('dog');

module.exports = AnimalShelter; 