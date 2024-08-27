import { useForm } from "react-hook-form";
import { useTasks } from "../context/TasksContext";

function TaskFormPage() {
const {register, handleSubmit} = useForm();
const {createTask} = useTasks()


const onSubmit = handleSubmit((data) => {
  createTask(data)
})

  return (
    <div className="bg-orange-600 max-w-md w-full p-10 rounded-sm">
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Title"
        {...register('title')}
        className="w-full text-black px-4 py-2 rounded-sm my-2"
        autoFocus
        />
        <textarea rows="3" placeholder="Description"
        {...register("description")}
        className="w-full text-black px-4 py-2 rounded-sm"
        />
        <button>Save</button>
      </form>
    </div>
  )
}

export default TaskFormPage