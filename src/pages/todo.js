import { useState, useEffect } from "react";
import TodoList from "./todolist";

const Todo = () => {
  const [data, setData] = useState([]);
  const [newdata, setNewdata] = useState("");

  // handle for new data
  const handle = () => {
    var tempAddData = data;
    if (newdata === "") {
      alert("Noting to Add");
    } else {
      var tempdata = { todoData: newdata, done: "false" };
      tempAddData.push(tempdata);

      setData(tempAddData);

      localStorage.setItem("todos", JSON.stringify(data));
      setNewdata("");
    }
  };

  const handleDelete = (i) => {
    var currentData = JSON.parse(localStorage.getItem("todos"));

    var newdata = currentData.filter((val, index, arr) => {
      return index !== i;
    });

    localStorage.setItem("todos", JSON.stringify(newdata));
    setData(JSON.parse(localStorage.getItem("todos")));
  };

  const handleDone = (i) => {
    var currentData = JSON.parse(localStorage.getItem("todos"));
    currentData[i].done = true;
    localStorage.setItem("todos", JSON.stringify(currentData));
    setData(JSON.parse(localStorage.getItem("todos")));
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
