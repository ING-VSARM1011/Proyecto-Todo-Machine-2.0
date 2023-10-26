import React from "react";
import "./TodoCounter.css";

function TodoCounter({completedTodos, totalTodos, loading}) {
  return (
    <h2 className={`TodoCounter ${!!loading && "TodoCounter--loading"}`}>
      Has Completado {completedTodos} de {totalTodos} Todos
    </h2>
  );
}

export { TodoCounter };
