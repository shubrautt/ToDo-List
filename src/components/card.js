const Card = ({ data, todoData, done, handleDelete, handleDone, id, category }) => {
    return (
        <article className="Card">
            <div className="cardDiv">
                {done === true ? <p className="lineThrough">{todoData}</p> : <p>{todoData}</p>}
                {<p className="categoryLabel">{category}</p>}
            </div>
            {done === "false" ?<button className="doneBtn" onClick={() => handleDone(id)}>Done</button> : <noscript></noscript>}
            <button className="delBtn" onClick={() => handleDelete(id)}>Delete</button>
        </article>
    );
}

export default Card;
