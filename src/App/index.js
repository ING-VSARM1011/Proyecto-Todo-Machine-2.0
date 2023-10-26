import React from "react";
import { TodoHeader } from "../TodoHeader/index.js";
import { TodoSearch } from "../TodoSearch/index.js";
import { TodoCounter } from "../TodoCounter/index.js";
import { TodoList } from "../TodoList/index.js";
import { TodoItem } from "../TodoItem/index.js";
import { Modal } from "../Modal/index.js";
import { CreateTodoButtom } from "../CreateTodoButtom/index.js";
import { TodoForm } from "../TodoForm/index.js";
import { useTodos } from "./useTodos.js";
import { TodosLoading } from "../TodosLoading/index.js";
import { EmptyTodos } from "../EmptyTodos";
import { TodosError } from "../TodosError";
import { ChangeAlertWithStorageListener } from "../ChangeAlert/index.js";

function App() {
  const {
    error,
    loading,
    searchedTodos,
    completeTodo,
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    searchValue,
    setSearchValue,
    addTodo,
    sincronizeTodos,
  } = useTodos();

  return (
    <React.Fragment>
      <TodoHeader loading={loading} >
        <TodoCounter 
          totalTodos={totalTodos} 
          completedTodos={completedTodos}
        />
        <TodoSearch 
          searchValue={searchValue} 
          setSearchValue={setSearchValue}
        />
      </TodoHeader>
      <TodoList
        error={error}
        loading={loading}
        searchedTodos={searchedTodos}
        totalTodos={totalTodos}
        searchText={searchValue}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText)=><p>No hay resultados para {searchText}</p>}
        render={todo => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}
      />

      {openModal && (
        <Modal>
          <TodoForm addTodo={addTodo} setOpenModal={setOpenModal} />
        </Modal>
      )}

      <CreateTodoButtom setOpenModal={setOpenModal} />

      <ChangeAlertWithStorageListener sincronize={sincronizeTodos} />  

    </React.Fragment>
  );
}

export default App;
