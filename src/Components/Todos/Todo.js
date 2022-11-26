import styles from './Todo.module.css';
import { RiTodoFill, RiDeleteBin2Line } from 'react-icons/ri';
import { FaCheck } from 'react-icons/fa';

const Todo = ({ todo, onRemoveTodoHanle, onIsCompletedHandle }) => {
    return (
        <div className={`${styles.todo} ${todo.isCompleted ? styles.completedTodo : ''}`}>
            <RiTodoFill className={styles.todoIcon} />
            <div className={styles.todoText}>{todo.text}</div>
            <RiDeleteBin2Line
                className={styles.deleteIcon}
                onClick={() => onRemoveTodoHanle(todo.id)}
            />
            <FaCheck className={styles.checkIcon} onClick={() => onIsCompletedHandle(todo.id)} />
        </div>
    );
};

export default Todo;
