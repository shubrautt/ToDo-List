import Card from "../components/card";

const TodoList = ({ data, handleDelete, handleDone }) => {

    var cardData = data;

    return (
        <div className="todoList">
            {cardData.map((todo) => {
                return <Card data={data} id={todo.id} todoData={todo.todoData} done={todo.done} key={todo.id} handleDelete={handleDelete} handleDone={handleDone} />
            })}
        </div>
    );
}

export default TodoList;
