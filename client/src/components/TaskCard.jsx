import { Link } from "react-router-dom";
import { useTasks } from "../context/TasksContext";

function TaskCard({ task }) {

    const { deleteTask } = useTasks();
 
    return (
        <div className="bg-white max-w-md w-full p-10 rounded-md text-black my-2">
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{task.title}</h1>
                <div className="flex gap-x-2 items-center">
                    <button
                        onClick={() => {
                            deleteTask(task._id);
                        }}
                    > 
                        Borrar
                    </button>
                    <Link to={`/tasks/${task._id}`}>Editar</Link>
                </div></header>
            <p className="text-slate-700">{task.description}</p>
            <p>{new Date(task.date).toLocaleDateString()}</p>
        </div>
    )
}

export default TaskCard