import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function LoginPage() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signin, errors: SigninErrors } = useAuth();

  const onSubmit = handleSubmit(data => {
    signin(data);
  })

  return (
    <div className="flex h-[calc(100vh-100px)] justify-center items-center">
      <div className=" bg-orange-500 max-w-md p-20 rounded-md">

        {
          SigninErrors.map((error, i) => (
            <div className="bg-white p-2 text-black text-center my-2" key={i} >
              {error}
            </div>
          ))
        }

        <h1 className="text-2xl font-bold">Login</h1>

        <form onSubmit={onSubmit}>
          <input
            type="email"
            {...register('email', { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="E-mail"
            autoComplete="username"
          />

          {
            errors.email && (<p className="text-white">Se requiere un correo</p>)
          }
          <input
            type="password"
            {...register('password', { required: true })}
            className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
            placeholder="Password"
            autoComplete="current-password"
          />


          {
            errors.password && (<p className="text-white">Se requiere una contraseña</p>)
          }
          <button type="submit" className="text-black">
            Acceder
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          ¿Todavía no estás registrado? <Link to="/register" className="text-blue-800">Regístrate</Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage