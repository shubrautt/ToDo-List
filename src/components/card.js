const Card = ({ data, todoData, done, handleDelete, handleDone, id }) => {
    return (
        <div className="Card">
            {done === true ? <p className="lineThrough">{todoData}</p> : <p>{todoData}</p>}
            {done === "false" ?<button className="doneBtn" onClick={() => handleDone(id)}>Done</button> : <noscript></noscript>}
            <button className="delBtn" onClick={() => handleDelete(id)}>Delete</button>
        </div>
    );
}

export default Card;
