import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import TodoForm from './Components/Todos/TodoForm';
import TodosActions from './Components/Todos/TodosActions';
import TodoList from './Components/Todos/TodoList';

function App() {
    const [todos, setTodos] = useState([]);

    const addTodoHandle = (text) => {
        const newTodo = {
            text,
            isCompleted: false,
            id: uuidv4(),
        };

        setTodos([...todos, newTodo]);
    };

    const onRemoveTodoHanle = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const onIsCompletedHandle = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : { ...todo }
            )
        );
    };

    const resetTodosHandler = () => {
        setTodos([]);
    };

    const deleteCompletedTodosHandler = () => {
        setTodos(todos.filter((todo) => !todo.isCompleted));
    };

    const completedTodosCount = todos.filter((todo) => todo.isCompleted).length;

    return (
        <div className="app">
            <h1>Todo App</h1>
            <TodoForm addTodoHandle={addTodoHandle} />
            {!!todos.length && (
                <TodosActions
                    resetTodosHandler={resetTodosHandler}
                    deleteCompletedTodosHandler={deleteCompletedTodosHandler}
                    completedTodosCount={!!completedTodosCount}
                />
            )}
            <TodoList
                todos={todos}
                onRemoveTodoHanle={onRemoveTodoHanle}
                onIsCompletedHandle={onIsCompletedHandle}
            />

            {completedTodosCount > 0 && (
                <h2>{`You have complited ${completedTodosCount} ${
                    completedTodosCount > 1 ? 'todos' : 'todo'
                }!`}</h2>
            )}
        </div>
    );
}

export default App;
