const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
const length = ingredients.length;
// Write a while loop that prints out the contents of ingredients:
let i = 0;
while(i<length){
  console.log(ingredients[i]);
  i++;
}
// Write a for loop that prints out the contents of ingredients:
for(let j = 0; j<length; j++){
  console.log(ingredients[j]);
}
// Write any loop (while or for) that prints out the contents of ingredients backwards:
for(let k = length-1; k>0; k--){
  console.log(ingredients[k]);
}