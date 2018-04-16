const assert = require('assert');
const Task = require('../task.js');


describe ('Task', function(){
  let task;

  beforeEach(function(){
    task = new Task( 'Close all the holes in the house', 'High', 1, 'crampons boots')
  });

  it('Task should have a mission', function(){ // 1st test
    const result = task.mission;
    assert.strictEqual(result, 'Close all the holes in the house');
  });

  it('Task should have a difficulty_level', function(){ // 2nd test
    const result = task.difficulty_level;
    assert.strictEqual(result, 'High');
  });

  it('Task should have an urgency_level', function(){ // 3rd test
    const result = task.urgency_level;
    assert.strictEqual(result, 1);
  });

  it('Task should have a reward', function(){ // 4th test
    const result = task.reward;
    assert.strictEqual(result, 'crampons boots');
  });

  it('Task should not be marked as completed to start', function() { //5th test
    assert.strictEqual(false, task.task_completed);
  });

  it('Task should be able to be marked  as completed', function() {
    task.markCompleted();
    assert.strictEqual(true, task.task_completed);
  })









}); // END OF THE TASK TEST
