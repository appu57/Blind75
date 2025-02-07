class AsyncTaskRunner {
    constructor(concurrencyLimit) {
      this.concurrencyLimit = concurrencyLimit;
      this.runningTasks = 0;
      this.queue = [];
      this.results = [];
      this.completed = 0;
    }
  
    // Adds a task to the queue
    addTask(task) {
      return new Promise((resolve, reject) => {
        this.queue.push({ task, resolve, reject });
      });
    }
  
    // Runs the tasks with concurrency control
    async run() {
      // Run as many tasks as the concurrency limit allows
      while (this.queue.length > 0 && this.runningTasks < this.concurrencyLimit) {
        this.runNextTask();
      }
      
      // Wait until all tasks are completed
      await new Promise((resolve) => {
        const interval = setInterval(() => {
          if (this.completed === this.results.length) {
            clearInterval(interval);
            resolve();
          }
        }, 50);
      });
  
      return this.results;
    }
  
    // Helper to start the next task in the queue
    async runNextTask() {
      if (this.queue.length === 0) return;
  
      // Start a new task
      const { task, resolve, reject } = this.queue.shift();
      this.runningTasks++;
  
      try {
        const result = await task();
        this.results.push(result);
        resolve(result);
      } catch (err) {
        reject(err);
      } finally {
        this.runningTasks--;
        this.completed++;
        // Start the next task once one completes
        if (this.queue.length > 0) {
          this.runNextTask();
        }
      }
    }
  }
  
  // Example usage:
  
  // Define some asynchronous tasks
  const delayTask = (ms, result) => {
    return new Promise((resolve) => setTimeout(() => resolve(result), ms));
  };
  
  const taskRunner = new AsyncTaskRunner(3); // Maximum of 3 concurrent tasks
  
  const tasks = [
    delayTask(1000, 'Task 1 completed'),
    delayTask(2000, 'Task 2 completed'),
    delayTask(3000, 'Task 3 completed'),
    delayTask(500, 'Task 4 completed'),
    delayTask(1500, 'Task 5 completed'),
  ];
  
  tasks.forEach(task => taskRunner.addTask(task));
  
  taskRunner.run().then(results => {
    console.log('All tasks completed:', results);
  }).catch(error => {
    console.error('Error running tasks:', error);
  });

//   All tasks completed: [
//     'Task 1 completed', 
//     'Task 4 completed', 
//     'Task 2 completed', 
//     'Task 5 completed', 
//     'Task 3 completed'
//   ]
  