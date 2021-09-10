// Write your code here:
const convertToBaby = animalArray => {
  const babyAnimals = [];
  for(let i=0;i<animalArray.length;i++){
    babyAnimals.push(`baby ${animalArray[i]}`)
  }
  return babyAnimals;
}







// When you're ready to test your code, uncomment the below and run:

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals))