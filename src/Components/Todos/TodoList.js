import Todo from './Todo';
import styles from './TodoList.module.css';

const TodoList = ({ onRemoveTodoHanle, todos, onIsCompletedHandle }) => {
    return (
        <div className={styles.todoListContainer}>
            {!todos.length && <h1>Todo List is empty</h1>}
            {todos.map((todo) => {
                return (
                    <Todo
                        key={todo.id}
                        todo={todo}
                        onRemoveTodoHanle={onRemoveTodoHanle}
                        onIsCompletedHandle={onIsCompletedHandle}
                    />
                );
            })}
        </div>
    );
};

export default TodoList;
