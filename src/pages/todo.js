import { useState, useEffect } from "react";
import TodoList from "./todolist";
const { v4: uuidv4 } = require('uuid');

const Todo = () => {
  const [data, setData] = useState([]);
  const [newdata, setNewdata] = useState("");

  // handle for new data
  const handle = () => {
    if (newdata === "") {
      alert("Nothing to Add");
    } else {
      var tempdata = { todoData: newdata, done: "false", id: uuidv4()};

      localStorage.setItem("todos", JSON.stringify([...data, tempdata]));
      setData(prevState => [...prevState, tempdata]);

      setNewdata("");
    }
  };

  //set change and submit
  const setOnEnter = () => {};

  const handleDelete = (id) => {
    var currentData = JSON.parse(localStorage.getItem("todos"));

    var newdata = currentData.filter((val) => {
      return val.id !== id;
    });


    localStorage.setItem("todos", JSON.stringify(newdata));
    setData(newdata);
  };

  const handleDone = (id) => {
    var currentData = JSON.parse(localStorage.getItem("todos"));

    const todo = currentData.find(todo => todo.id === id);
    todo.done = true;

    localStorage.setItem("todos", JSON.stringify(currentData));
    setData(currentData);
  };

  // load older data from localstorage
  useEffect(() => {
    if (localStorage.getItem("todos") !== null) {
      setData(JSON.parse(localStorage.getItem("todos")));
    }
  }, []);

  return (
    <div className="container">
      <h1>Todo App</h1>
      <div className="inputBox">
        <input
          type="text"
          value={newdata}
          onChange={(e) => {
            setNewdata(e.target.value);
          }}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handle();
            }
          }}
        />
        <button className="addBtn" onClick={handle}>
          Add
        </button>
      </div>
      <div className="todos">
        {data.length === 0 ? (
          <p style={{ textAlign: "center" }}>No Todo's To Show</p>
        ) : (
          <TodoList
            data={data}
            handleDelete={handleDelete}
            handleDone={handleDone}
          />
        )}
      </div>
    </div>
  );
};

export default Todo;
