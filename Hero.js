const Hero = function(name, health, favourite_food){
  this.name = name;
  this.health = health;
  this.favourite_food = favourite_food;
  this.collected_tasks = [];
};

Hero.prototype.cantalk = function(){
  return `Hello, My name is ${this.name}`;
};

Hero.prototype.canEatFood = function(food){
  let foodValue = food.repl_Value;
  if (food.name === this.favourite_food) {
    foodValue *= 1.5;
    this.health += foodValue;
  }
  else if (food.name === food.food_poisoned){
  this.health -= foodValue;
}
};



module.exports = Hero;
