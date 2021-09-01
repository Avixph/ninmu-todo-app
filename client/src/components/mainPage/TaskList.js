import { useState, useEffect } from "react";
import { getTasks } from "../../services/api-helper";
import CreateTask from "../formActions/CreateTask";
import Task from "./Task";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTasks = async () => {
    const data = await getTasks();
    console.log(data.tasks);
    setTasks(data.tasks);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const showTasks = tasks.map((task) => {
    return <Task {...task} key={task._id} />;
  });

  return (
    <div>
      <div className="pt-8">
        <header>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:py-2">
            <CreateTask />
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div className="px-4 py-8 sm:px-0">
              <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {showTasks}
              </ul>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default TaskList;
