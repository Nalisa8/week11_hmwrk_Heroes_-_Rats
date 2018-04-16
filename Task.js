const Task = function (mission, difficulty_level, urgency_level, reward){
  this.mission = mission;
  this.difficulty_level = difficulty_level;
  this.urgency_level = urgency_level;
  this.reward = reward;
  this.task_completed = false;

};

Task.prototype.markCompleted = function () {
  this.task_completed = true;
};


module.exports = Task;
