import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';

const TodosActions = ({ resetTodosHandler, deleteCompletedTodosHandler, completedTodosCount }) => {
    return (
        <div>
            <Button onClick={resetTodosHandler} title="Reset Todos">
                <RiRefreshLine />
            </Button>
            <Button
                onClick={deleteCompletedTodosHandler}
                title="Clear Complete Todos"
                disabled={!completedTodosCount}
            >
                <RiDeleteBin2Line />
            </Button>
        </div>
    );
};

export default TodosActions;
