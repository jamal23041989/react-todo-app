import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

const TodoForm = ({ addTodoHandle }) => {
    const [todo, setTodo] = useState('');

    const onSubmitHandle = (e) => {
        e.preventDefault();
        addTodoHandle(todo);
    };

    return (
        <div className={styles.todoFormContainer}>
            <form type="submit" onSubmit={onSubmitHandle}>
                <input
                    type="text"
                    value={todo}
                    onChange={(e) => setTodo(e.target.value)}
                    placeholder="enter new todo"
                />
                <Button type="submit" title="Submit">
                    Submit
                </Button>
            </form>
        </div>
    );
};

export default TodoForm;
