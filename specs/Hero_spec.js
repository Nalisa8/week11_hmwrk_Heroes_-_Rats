const assert = require('assert');
const Hero = require('../hero.js');
const Food = require('../food.js');
const Task = require('../task.js');

describe ('Hero', function(){
  let hero;
  let food;
  let task;

  beforeEach(function(){
    hero = new Hero('Lady Lisa', 10, 'Mushrooms')
    food = new Food('carrots', 3)
    task = new Task( 'Close all the holes in the house', 'High', 1, 'crampons boots')
  });

  it('Hero should have a name', function(){ //1st test
    const result = hero.name;
    assert.strictEqual(result, 'Lady Lisa');
  });

  it('Hero should have a health point', function(){ //2nd test
    const result = hero.health;
    assert.strictEqual(result, 10);
  });

  it('Hero should have a favourite_food', function(){ // 3rd test
    const result = hero.favourite_food;
    assert.strictEqual(result, 'Mushrooms');
  });

  it('Hero can talk saying his name', function(){
      const result = hero.cantalk();
      assert.strictEqual(result, 'Hello, My name is Lady Lisa'); // 4th test
  });

  it('Hero can have a collection of tasks to do',function(){
    const result = hero.collected_tasks;
    assert.deepStrictEqual(result, []);
  });
  it('Hero can eat Food', function(){
 const result = hero.canEatFood();
 assert.strictEqual(true, food.repl_Value);
  });








}); // END OF THE HERO TEST
