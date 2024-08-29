import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { useTasks } from "../context/TasksContext";

import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc) //Formatear la fecha

function TaskFormPage() {
  const { register, handleSubmit, setValue } = useForm();
  const { createTask, getTask, updateTask } = useTasks()
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const task = await getTask(params.id);
        console.log(task)
        setValue('title', task.title)
        setValue('description', task.description)
        setValue("date", dayjs(task.date).utc().format('YYYY-MM-DD'));
      }
    }
    loadTask()
  }, []);

  const onSubmit = handleSubmit((data) => {
    const dataValid = {
      ...data,
      date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
    };

    

    if (params.id) {
      updateTask(params.id, dataValid);
    } else {
      createTask(dataValid);
    }
    navigate('/tasks');
  });

  return (<div className="flex h-[calc(100vh-100px)] justify-center items-center">
    <div className="bg-orange-600 max-w-md w-full p-10 rounded-sm">
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Título</label>
        <input
          type="text" placeholder="Title"
          {...register('title')}
          className="w-full text-black px-4 py-2 rounded-sm my-2"
          autoFocus
        />
        <label htmlFor="description">Descripción</label>
        <textarea rows="3" placeholder="Description"
          {...register("description")}

          className="w-full text-black px-4 py-2 rounded-sm my-2"
        ></textarea>
        <label htmlFor="date">Date</label>
        <input type="date" {...register('date')} className="w-full text-black px-3 py-2 rounded-sm my-2" />

        <button className="bg-indigo-800 text-white rounded-sm px-3 py-2">Save</button>
      </form>
    </div>
  </div>
  )
}

export default TaskFormPage