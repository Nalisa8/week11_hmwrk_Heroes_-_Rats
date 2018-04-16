const Food = function(name, repl_value){
  this.name = name;
  this.repl_value = repl_value;
  this.food_poisoned = false;

};

Food.prototype.ispoisoned = function () {
  this.food_poisoned = true;

};

module.exports = Food;
