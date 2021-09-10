// Write your code here:

const dogFactory = (name, breed, weight) => {
  return {
    _name:name,
    _breed:breed,
    _weight:weight,

    get name(){
      return this._name;
    },
    set name(name){
      return typeof name === 'string' ? this._name=name : console.log(`Please input a valid name.`)
    },

    get breed(){
      return this._breed;
    },
    set breed(breed){
      return typeof breed === 'string' ? this._breed=breed : console.log(`Please input a valid breed name.`)
    },

    get weight(){
      return this._weight;
    },
    set weight(weight){
      return typeof weight === 'number' ? this._weight=weight : console.log(`Enter a valid weight in kg minus the units.`)
    },
    bark() {
      return `ruff! ruff!`;
    },
    eatTooManyTreats(){
      this._weight++;
    }

  }
}

const sky = dogFactory('Sky','Dalmatian',15);
sky.name = 'William';
console.log(`The dog's name is ${sky.name}.`);