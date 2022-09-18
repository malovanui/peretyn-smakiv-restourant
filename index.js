import {CountUp} from 'countup.js'

const refs = {
    drinks: document.querySelector('[data-num="93"]'),
    food: document.querySelector('[data-num="206"]'),
    snacks: document.querySelector('[data-num="61"]'),
    numGroup: document.querySelector('[data-numbers-group]'),
}

const options = {
   
    duration: 3,
    useGrouping: false,
};
const optionsFood = {
   
    duration: 1,
    useGrouping: false,
};

let drinks = new CountUp(refs.drinks, 93, options);
let food = new CountUp(refs.food, 206, optionsFood);
let snacks = new CountUp(refs.snacks, 61, options);


const observer = new window.IntersectionObserver(([entry]) => {
  if (entry.isIntersecting) {
      drinks.start();
      food.start();
      snacks.start();
    return
  }
  
    if (!entry.isIntersecting) {
        refs.drinks.textContent = "0";
        refs.food.textContent = "0";
        refs.snacks.textContent = "0";
        return
    }
    
}, {
  root: null,
  threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
})

observer.observe(refs.numGroup);
