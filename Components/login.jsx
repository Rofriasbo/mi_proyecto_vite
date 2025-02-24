import { useReducer, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css"; // Se importa Bootstrap para estilos predefinidos
export const Login = () => {
    // Estado inicial del reducer
    const initialState = {
        validando: true, // Indica si se está validando la autenticación
        token: null, // Almacena el token de autenticación
        nombre: '' // Nombre del usuario autenticado
    };
    // Función reductora para manejar los cambios de estado según las acciones
    const authReducer = (state, action) => {
        switch (action.type) {
            case 'login':
                return { ...state, token: 'ABC123', nombre: action.payload.nombre, validando: false };
            case 'logout':
                return { ...state, token: null, nombre: '', validando: false };
            default:
                return state;
        }
    };
    // Hook useReducer para manejar el estado de autenticación
    const [state, dispatch] = useReducer(authReducer, initialState);
    // Simulación de una validación inicial con useEffect
    useEffect(() => {
        setTimeout(() => {
            dispatch({ type: 'logout' }); // Finaliza la validación después de 2.5 segundos
        }, 2500);
    }, []);
    // Si la validación está en proceso, se muestra un mensaje de espera
    if (state.validando) {
        return (
            <div className="d-flex vh-100 vw-100 justify-content-center align-items-center">
                {/* Alerta de Bootstrap que indica que la información está siendo validada */}
                <div className="alert alert-info p-3">Validando Información... Espere</div>
            </div>
        );
    }
    // Funciones para iniciar y cerrar sesión
    const login = () => dispatch({ type: 'login', payload: { nombre: 'Rodolfo' } });
    const logout = () => dispatch({ type: 'logout' });
    return (
        <div className="d-flex vh-100 vw-100 justify-content-center align-items-center bg-light">
            {/* Contenedor con estilos de Bootstrap */}
            <div className="card p-4 shadow-lg text-center" style={{ width: "350px" }}>
                <h3 className="mb-3">Login</h3>
                {/* Alertas de Bootstrap según el estado de autenticación */}
                {state.token ? (
                    <div className="alert alert-success">
                        Autenticado como: <strong>{state.nombre}</strong>
                    </div>
                ) : (
                    <div className="alert alert-danger">No Autenticado</div>
                )}
                <div>
                    {/* Botón de Bootstrap para iniciar o cerrar sesión */}
                    {state.token ? (
                        <button className="btn btn-danger w-100 mt-2" onClick={logout}>Logout</button>
                    ) : (
                        <button className="btn btn-primary w-100 mt-2" onClick={login}>Login</button>
                    )}
                </div>
            </div>
        </div>
    );
};
