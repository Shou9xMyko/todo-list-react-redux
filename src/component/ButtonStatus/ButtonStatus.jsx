import "./ButtonStatus.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AllList,
  Activelist,
  CompletedList,
  addList,
} from "../../Redux/Action/Action";

const ButtonStatus = ({ handleFilterTodo, filterTodo }) => {
  const todos = useSelector((state) => state.Reducers);
  const [buttonColorAll, setButtonColorAll] = useState("#1aae9f");
  const [buttonColorActive, setButtonColorActive] = useState("#788896");
  const [buttonColorCompleted, setButtonColorCompleted] = useState("#788896");

  const dispatch = useDispatch();

  console.log(filterTodo);

  useEffect(() => {
    handleFilterTodo(todos);
  }, [todos]);

  const handleButtonAll = () => {
    setButtonColorAll("#1aae9f");
    setButtonColorActive("#788896");
    setButtonColorCompleted("#788896");
    handleFilterTodo(todos);
    dispatch(AllList());
  };
  const handleButtonActive = () => {
    // console.log(todos);
    // console.log(filterTodo);
    setButtonColorAll("#788896");
    setButtonColorActive("#1aae9f");
    setButtonColorCompleted("#788896");
    handleFilterTodo(todos.filter((item) => item.completed == false));
    dispatch(Activelist());
    // handleFilterTodo(todos);
  };
  const handleButtonCompleted = () => {
    setButtonColorAll("#788896");
    setButtonColorActive("#788896");
    setButtonColorCompleted("#1aae9f");
    handleFilterTodo(todos.filter((items) => items.completed));
    dispatch(CompletedList());
    // handleFilterTodo(todos);
  };

  return (
    <div className="row mt-5 p-0 mb-4 gx-5">
      <div className="col-2 bg-primarys pe-0">
        <button
          className="btn rounded-pill pt-0 pb-0 ps-3 pe-3"
          style={{ backgroundColor: buttonColorAll, color: "white" }}
          onClick={handleButtonAll}
        >
          All
        </button>
      </div>
      <div className="col-2 bg-warnings w-auto ">
        <button
          className="btn rounded-pill pt-0 pb-0 ps-2 pe-2 activeButton"
          style={{ backgroundColor: buttonColorActive, color: "white" }}
          onClick={handleButtonActive}
        >
          Active
        </button>
      </div>
      <div className="col-2 bg-dangers w-auto ps-1 ">
        <button
          className="btn rounded-pill pt-0 pb-0 ps-2 pe-2 completedButton"
          style={{ backgroundColor: buttonColorCompleted, color: "white" }}
          onClick={handleButtonCompleted}
        >
          Completed
        </button>
      </div>
    </div>
  );
};

export default ButtonStatus;
