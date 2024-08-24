import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";

function LoginPage() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const {signin} = useAuth();

  const onSubmit = handleSubmit(data => {
    signin(data);
  })
 
  return (
    <div className="flex h-[calc(100vh-100px)] justify-center items-center">
      <div className=" bg-orange-500 max-w-md p-20 rounded-md">

<h1 className="text-2xl font-bold">Login</h1>

      <form onSubmit={onSubmit}>
        <input type="email"
          {...register('email', { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="E-mail"
        />
        {
          errors.email && (<p className="text-white">E-mail is required</p>)
        }
        <input type="password"
          {...register('password', { required: true })}
          className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
          placeholder="Password "
        />
        {
          errors.password && (<p className="text-white">Password is required</p>)
        }
        <button type="submit">
          Login
        </button>
      </form>
      </div>
    </div>
  )
}

export default LoginPage