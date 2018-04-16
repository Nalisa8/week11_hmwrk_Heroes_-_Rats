const assert = require('assert');
const Food = require('../food.js');

describe('Food', function(){
  let food;
  let food2;
  let food3;
  let food4;



beforeEach(function(){
  food = new Food('carrots', 3)
  food2 = new Food('chicken Pie', 8)
  food3 = new Food('cheese', 5)
  food4 = new Food('Cake', 10)
});

it('Food should have a name', function(){  // 1st test
  const result = food.name;
  assert.strictEqual(result,'carrots');
});

it('Food should have a replenishment value', function(){ // 2nd test
  const result = food4.repl_value;
  assert.strictEqual(result,10);
});

it('Food should not be poisoned ', function() { //3th test
  assert.strictEqual(false, food.food_poisoned);
});

it('Food is poisoned', function() {
  food.ispoisoned();
  assert.strictEqual(true, food.food_poisoned);
});



}); // END OF THE FOOD TEST
