import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'; // Ajusta la ruta a tu logo
import { useAuth } from "../context/AuthContext";

function Navbar() {
    const { isAuthenticated, logout, user } = useAuth();

    return (
        <nav className="bg-orange-600 fixed top-0 left-0 w-full z-50 flex justify-between py-3 px-10">
            <div className="flex items-center">
                <img src={logo} alt="Logo" className="w-5 mr-2" />
                <Link to={isAuthenticated ? "/tasks" : "/"}>
                    <h1 className="text-2xl font-bold text-white">Bahaga</h1>
                </Link>
            </div>
            <ul className="flex gap-x-2">
                {isAuthenticated ? (
                    <>
                        <li className="font-semibold text-white">Bienvenido {user.username}</li>
                        <li>
                            <Link to='/add-task' className="text-white px-4 py-2 rounded-sm">Reservación</Link>
                        </li>
                        <li>
                            <Link to='/' onClick={() => { logout(); }} className="text-white">Salir</Link>
                        </li>
                    </>
                ) : (
                    <>
                        <li>
                            <Link to='/login' className="text-white px-4 py-2 rounded-sm">Iniciar sesión</Link>
                        </li>
                        <li>
                            <Link to='/register' className="text-white px-4 py-2 rounded-sm">Registro</Link>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}

export default Navbar;
