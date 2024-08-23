import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function RegisterPage() {
    const { register, handleSubmit } = useForm();
    const { signup, isAuthenticated } = useAuth ();
    const navigate = useNavigate();

    useEffect(() => {
      if (isAuthenticated) navigate ("/tasks");
    }, [isAuthenticated])
    

    const onSubmit = handleSubmit(async (values) => {
        signup(values);            
    })

    return (
        <div className=" bg-orange-500 max-w-md p-10 rounded-md ">
            <form onSubmit={onSubmit}>
                <input type="text"
                    {...register('username', { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="User Name"
                />
                <input type="email"
                    {...register('email', { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="E-mail"
                />
                <input type="password"
                    {...register('password', { required: true })}
                    className="w-full bg-zinc-700 text-white px-4 py-2 rounded-md my-2"
                    placeholder="Password "
                />
                <button type="submit">
                    Register
                </button>
            </form>
        </div>
    )
}

export default RegisterPage