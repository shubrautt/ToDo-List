const Card = ({ data, index, todoData, done, handleDelete, handleDone }) => {
    return (
        <div className="Card">
            {done === true ? <p className="lineThrough">{todoData}</p> : <p>{todoData}</p>}
            {done === "false" ?<button className="doneBtn" onClick={() => handleDone(index)}>Done</button> : <noscript></noscript>}
            <button className="delBtn" onClick={() => handleDelete(index)}>Delete</button>
        </div>
    );
}

export default Card;
