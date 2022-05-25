import Card from "../components/card";

const TodoList = ({ data, handleDelete, handleDone }) => {

    var cardData = data;

    return (
        <div className="todoList">
            {cardData.map((e, index) => {
                return <Card data={data} index={index} todoData={e.todoData} done={e.done} key={index} handleDelete={handleDelete} handleDone={handleDone} />
            })}
        </div>
    );
}

export default TodoList;
