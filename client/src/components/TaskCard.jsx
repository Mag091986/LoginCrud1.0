import { default as dayjs, default as days } from "dayjs";
import utc from "dayjs/plugin/utc";
import { Link } from "react-router-dom";
import { useTasks } from "../context/TasksContext";
dayjs.extend(utc)

function TaskCard({ task }) {

    const { deleteTask } = useTasks();
 
    return (
        <div className="bg-white max-w-md w-full p-10 rounded-md text-black my-2">
            <header className="flex justify-between">
                <h1 className="text-2xl font-bold">{task.title}</h1>
                <div className="flex gap-x-2 items-center">
                    <button className="bg-red-600 text-white rounded-sm px-4 py-2"
                        onClick={() => {
                            deleteTask(task._id);
                        }}
                    > 
                        Borrar
                    </button>
                    <Link to={`/tasks/${task._id}`} className="bg-blue-600 text-white rounded-sm px-4 py-2">Editar</Link>
                </div></header>
            <p className="text-slate-700">{task.description}</p>
            <p>{days(task.date).utc().format("DD/MM/YYYY")}</p>
        </div>
    )
}

export default TaskCard