import "./ButtonStatus.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const ButtonStatus = ({ handleFilterTodo }) => {
  const todos = useSelector((state) => state.Reducers);
  const [buttonColorAll, setButtonColorAll] = useState("#1aae9f");
  const [buttonColorActive, setButtonColorActive] = useState("#788896");
  const [buttonColorCompleted, setButtonColorCompleted] = useState("#788896");

  const [conditionalFilter, setConditionalFilter] = useState("");

  useEffect(() => {
    if (conditionalFilter == "activeFilter") {
      handleFilterTodo(todos.filter((item) => item.completed == false));
    } else if (conditionalFilter == "completedFilter") {
      handleFilterTodo(todos.filter((items) => items.completed));
    } else {
      handleFilterTodo(todos);
    }
  }, [todos]);

  const handleButtonAll = () => {
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
    handleFilterTodo(todos.filter((item) => item.completed == false));
  };
  const handleButtonCompleted = () => {
    setConditionalFilter("completedFilter");
    setButtonColorAll("#788896");
    setButtonColorActive("#788896");
    setButtonColorCompleted("#1aae9f");

    const completed = todos.filter((items) => items.completed);

    if (completed.length == 0) {
      let NoData = [
        { id: 999, itemName: "No Completed Task", completed: false },
      ];

      handleFilterTodo(NoData);
    } else {
      handleFilterTodo(todos.filter((items) => items.completed));
    }
  };

  return (
    <div className="row mt-5 p-0 mb-4 gx-5">
      <div className="col-2 bg-primarys pe-0">
        <button
          id="btn-all"
          className="btn rounded-pill pt-0 pb-0 ps-3 pe-3"
          style={{ backgroundColor: buttonColorAll, color: "white" }}
          onClick={handleButtonAll}
        >
          ALL
        </button>
      </div>
      <div className="col-2 bg-warnings w-auto ">
        <button
          id="btn-active"
          className="btn rounded-pill pt-0 pb-0 ps-3 pe-3 ms-3 ms-sm-3 ms-md-2 ms-lg-0 activeButton"
          style={{ backgroundColor: buttonColorActive, color: "white" }}
          onClick={handleButtonActive}
        >
          ACTIVE
        </button>
      </div>
      <div className="col-2 bg-dangers w-auto ps-1 ">
        <button
          id="btn-completed"
          className="btn rounded-pill pt-0 pb-0 ps-3 pe-3"
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
