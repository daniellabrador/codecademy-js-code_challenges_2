const veggies = ['broccoli', 'spinach', 'cauliflower', 'broccoflower'];

const politelyDecline = (veg) => {
      console.log('No ' + veg + ' please. I will have pizza with extra cheese.');
}

// Write your code here:
const declineEverything = (ingredients) => ingredients.forEach(politelyDecline);

const acceptEverything = (ingredients) => {
  ingredients.forEach(ingredient => console.log(`Ok, I guess I will eat some ${ingredient}.`))
}