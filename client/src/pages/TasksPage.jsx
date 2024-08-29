import { useEffect } from "react";
import TaskCard from "../components/TaskCard";
import { useTasks } from "../context/TasksContext";

function TasksPage() {
  const { getTasks, tasks } = useTasks();

  useEffect(() => {
    getTasks()
  }, []);

  if (tasks.length === 0 ) return (<h1>No hay tareas</h1>)

  return (<div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4"> {
      tasks.map((task) => (
        <TaskCard task={task} key={task._id}/>        
      ))
    }
  </div>
  );
}

export default TasksPage