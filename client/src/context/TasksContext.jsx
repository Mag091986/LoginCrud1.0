import { createContext, useContext, useState } from "react";

const TasksContext = createContext();

export const useTasks = () => {
    const context = useContext(TasksContext);
    
    if (!context) {
        throw new Error("useTasks must be used within a TaskProvider");
    }

    return context; // Devuelve el contexto para que los componentes puedan acceder a él
}

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    return (
        <TasksContext.Provider value={{ tasks, setTasks }}>
            {children}
        </TasksContext.Provider>
    );
}
