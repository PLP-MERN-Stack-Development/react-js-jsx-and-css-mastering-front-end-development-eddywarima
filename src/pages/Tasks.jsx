import React, { useState } from 'react';
import { useLocalStorage } from '../hooks';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';

const Tasks = () => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [newTask, setNewTask] = useState('');
  const [filter, setFilter] = useState('all');

  const addTask = (e) => {
    e.preventDefault();
    if (newTask.trim()) {
      const task = {
        id: Date.now(),
        text: newTask.trim(),
        completed: false,
        createdAt: new Date().toISOString()
      };
      setTasks([...tasks, task]);
      setNewTask('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
    return true;
  });

  const clearCompleted = () => {
    setTasks(tasks.filter(task => !task.completed));
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const activeCount = tasks.length - completedCount;

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Task Manager
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Stay organized and productive
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <Card className="text-center">
            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
              {tasks.length}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Total Tasks</div>
          </Card>
          <Card className="text-center">
            <div className="text-2xl font-bold text-green-600 dark:text-green-400">
              {activeCount}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Active</div>
          </Card>
          <Card className="text-center">
            <div className="text-2xl font-bold text-gray-600 dark:text-gray-400">
              {completedCount}
            </div>
            <div className="text-gray-600 dark:text-gray-400">Completed</div>
          </Card>
        </div>

        {/* Add Task Form */}
        <Card className="mb-6">
          <form onSubmit={addTask} className="flex gap-4">
            <input
              type="text"
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
              placeholder="Add a new task..."
              className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
            />
            <Button type="submit" variant="primary">
              Add Task
            </Button>
          </form>
        </Card>

        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6">
          <Button
            variant={filter === 'all' ? 'primary' : 'secondary'}
            onClick={() => setFilter('all')}
          >
            All ({tasks.length})
          </Button>
          <Button
            variant={filter === 'active' ? 'primary' : 'secondary'}
            onClick={() => setFilter('active')}
          >
            Active ({activeCount})
          </Button>
          <Button
            variant={filter === 'completed' ? 'primary' : 'secondary'}
            onClick={() => setFilter('completed')}
          >
            Completed ({completedCount})
          </Button>
          {completedCount > 0 && (
            <Button variant="danger" onClick={clearCompleted}>
              Clear Completed
            </Button>
          )}
        </div>

        {/* Task List */}
        <div className="space-y-4">
          {filteredTasks.length === 0 ? (
            <Card className="text-center py-12">
              <p className="text-gray-500 dark:text-gray-400 text-lg">
                {tasks.length === 0 ? 'No tasks yet. Add one above!' : 'No tasks match the current filter.'}
              </p>
            </Card>
          ) : (
            filteredTasks.map((task) => (
              <Card
                key={task.id}
                className={`flex items-center justify-between p-4 animate-fade-in ${
                  task.completed ? 'opacity-75' : ''
                }`}
                hover
              >
                <div className="flex items-center space-x-4">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTask(task.id)}
                    className="h-5 w-5 text-blue-600 rounded focus:ring-blue-500"
                  />
                  <span
                    className={`text-lg ${
                      task.completed
                        ? 'line-through text-gray-500 dark:text-gray-400'
                        : 'text-gray-900 dark:text-white'
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
                <Button
                  variant="danger"
                  size="small"
                  onClick={() => deleteTask(task.id)}
                >
                  Delete
                </Button>
              </Card>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Tasks;