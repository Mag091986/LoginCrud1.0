import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import image from "../assets/img/portada-1-2.jpg";
import { useAuth } from "../context/AuthContext";

function LoginPage() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { signin, errors: SigninErrors, isAuthenticated } = useAuth();
  const navigate = useNavigate()

  const onSubmit = handleSubmit(data => {
    signin(data);
  });

  useEffect(() => {
    if (isAuthenticated) navigate("/tasks");
  },[isAuthenticated]);

  return (
    <div className="flex h-[calc(100vh-100px)] justify-center items-center">
      <div className=" bg-white max-w-md p-20 rounded-md">

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
          <button type="submit" className="text-white bg-blue-600 rounded-sm px-4 py-2">
            Acceder
          </button>
        </form>
        <p className="flex gap-x-2 justify-between">
          ¿Todavía no estás registrado? <Link to="/register" className="text-blue-800">Regístrate</Link>
        </p>
      </div>
      <div className="h-full">
        <img src={image} alt="Vino" className="object-cover w-full h-full" />
      </div>
    </div>
  )
}

export default LoginPage