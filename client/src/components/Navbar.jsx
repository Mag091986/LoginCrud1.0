import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar() {

    const { isAuthenticated, logout, user } = useAuth();

    return (
        <nav className="bg-orange-600 my-2 flex justify-between py-5 px-10 rounded-lg">
            <Link to={
                isAuthenticated ? "/tasks" : "/"
            }>
                <h1 className="text-2xl font-bold">Bahaga</h1>
            </Link>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                        <li className="font-semibold" >
                            Bienvenido {user.username}
                        </li>
                        <li>
                            <Link to='/add-task' className="bg-slate-500 px-4 py-2 rounded-sm">Nueva Tarea</Link>
                        </li>
                        <li>
                            <Link to='/' onClick={() => {
                                logout();
                            }}>Salir</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login' className="bg-slate-500 px-4 py-2 rounded-sm">Iniciar sesión</Link>
                        </li>
                        <li>
                            <Link to='/register'className="bg-slate-500 px-4 py-2 rounded-sm">Registro</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    )
}

export default Navbar