import "./ButtonStatus.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ButtonStatus = ({ handleFilterTodo }) => {
  const todos = useSelector((state) => state.Reducers);
  const [buttonColorAll, setButtonColorAll] = useState("#1aae9f");
  const [buttonColorActive, setButtonColorActive] = useState("#788896");
  const [buttonColorCompleted, setButtonColorCompleted] = useState("#788896");

  const [conditionalFilter, setConditionalFilter] = useState("");

  let notActiveTask = [
    {
      id: 404,
      itemName: "No active task!",
      completed: false,
    },
  ];

  useEffect(() => {
    if (conditionalFilter == "activeFilter") {
      const activeFilter = todos.filter((item) => item.completed == false);
      activeFilter.length == 0
        ? handleFilterTodo(notActiveTask)
        : handleFilterTodo(activeFilter);
    } else if (conditionalFilter == "completedFilter") {
      handleFilterTodo(todos.filter((items) => items.completed));
    } else {
      handleFilterTodo(todos);
    }
  }, [todos]);

  const handleButtonAll = () => {
    setConditionalFilter("");
    setButtonColorAll("#1aae9f");
    setButtonColorActive("#788896");
    setButtonColorCompleted("#788896");
    handleFilterTodo(todos);
  };
  const handleButtonActive = () => {
    setConditionalFilter("activeFilter");
    setButtonColorAll("#788896");
    setButtonColorActive("#1aae9f");
    setButtonColorCompleted("#788896");
    const activeFilter = todos.filter((item) => item.completed == false);
    activeFilter.length == 0
      ? handleFilterTodo(notActiveTask)
      : handleFilterTodo(todos.filter((item) => item.completed == false));

    // handleFilterTodo(todos.filter((item) => item.completed == false));
  };
  const handleButtonCompleted = () => {
    setConditionalFilter("completedFilter");
    setButtonColorAll("#788896");
    setButtonColorActive("#788896");
    setButtonColorCompleted("#1aae9f");
    handleFilterTodo(todos.filter((items) => items.completed));
  };

  return (
    <div className="row mt-5 p-0 mb-4 gx-5">
      <div className="col-2 pe-0">
        <button
          id="btn-all"
          className="btn rounded-pill "
          style={{ backgroundColor: buttonColorAll, color: "white" }}
          onClick={handleButtonAll}
        >
          ALL
        </button>
      </div>
      <div className="col-2 w-auto ">
        <button
          id="btn-active"
          className="btn rounded-pill ms-3 ms-sm-3 ms-md-2 ms-lg-0 activeButton"
          style={{ backgroundColor: buttonColorActive, color: "white" }}
          onClick={handleButtonActive}
        >
          ACTIVE
        </button>
      </div>
      <div className="col-2 w-auto ps-1 ">
        <button
          id="btn-completed"
          className="btn rounded-pill "
          style={{ backgroundColor: buttonColorCompleted, color: "white" }}
          onClick={handleButtonCompleted}
        >
          COMPLETED
        </button>
      </div>
    </div>
  );
};

export default ButtonStatus;
