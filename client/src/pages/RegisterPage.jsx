import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RegisterPage() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { signup, isAuthenticated, errors: registerErrors } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isAuthenticated) navigate("/tasks");
    }, [isAuthenticated])


    const onSubmit = handleSubmit(async (values) => {
        signup(values);
    })

    return (
        <div className="flex h-[calc(100vh-100px)] justify-center items-center">
            <div className=" bg-orange-500 max-w-md p-10 rounded-md">
                {
                    registerErrors.map((error, i) => (
                        <div className="bg-white p-2 text-black text-center my-2" key={i} >
                            {error}
                        </div>
                    ))
                }

                <h1 className="text-2xl font-bold">Registro</h1>
                <form onSubmit={onSubmit}>
                    <input
                        type="text"
                        {...register('username', { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="User Name"
                        autoComplete="username"
                    />
                    {
                        errors.username && (<p className="text-white">Se requiere un Usuario</p>)
                    }

                    <input
                        type="email"
                        {...register('email', { required: true })}
                        className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                        placeholder="E-mail"
                        autoComplete="email"
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
                        errors.password && (<p className="text-white">Se requiere una constraseña</p>)
                    }
                    <button type="submit" className="text-white bg-blue-600 rounded-sm px-4 py-2">
                        Registro
                    </button>
                </form>
                <p className="flex gap-x-2 justify-between">
                    ¿Ya tienes una cuenta? {" "} <Link to="/login" className="text-blue-800">Acceder</Link>
                </p>
            </div>
        </div>
    )
}

export default RegisterPage