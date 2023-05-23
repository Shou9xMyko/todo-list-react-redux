import "./HasilTodoList.css";
import { useSelector, useDispatch } from "react-redux";
import { removeList, handleCheckBox } from "../../Redux/Action/Action";
import { FaPen, FaTrashAlt } from "react-icons/fa";

function TodoList({ handleEditList, FormVisibility, filterTodo }) {
  const todoData = useSelector((state) => state.Reducers);

  const dispatch = useDispatch();

  return (
    <>
      <ul className="p-0">
        {filterTodo.length == 0
          ? todoData?.map((item) => (
              <div
                id="wrapperTask "
                className="row p-2 border border-2 mb-4"
                key={item.id}
              >
                <div className="col-1 h-100 p-0 ">
                  <input
                    className="form-check-input rounded-0 checkBox"
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => dispatch(handleCheckBox(item.id))}
                  />
                </div>
                <div className="col-9 h-100 pt-1 ps-3 ps-md-2 ps-lg-0 bg-primarys">
                  <li
                    className="ItemName bg-successs"
                    style={
                      item.completed == true
                        ? { textDecoration: "line-through" }
                        : { textDecoration: "none" }
                    }
                  >
                    {item.itemName}
                  </li>
                </div>

                {FormVisibility == false && (
                  <>
                    <div
                      className="col-1 h-100 bg-primarys pt-1"
                      onClick={() => handleEditList(item)}
                    >
                      <FaPen />
                    </div>
                    <div
                      className="col-1 h-100 bg-warnings pt-1"
                      onClick={() => dispatch(removeList(item.id))}
                    >
                      <FaTrashAlt />
                    </div>
                  </>
                )}
              </div>
            ))
          : filterTodo?.map((item) => (
              <div
                id="wrapperTask "
                className="row p-2 border border-2 mb-4"
                key={item.id}
              >
                <div className="col-1 h-100 p-0 ">
                  <input
                    className="form-check-input rounded-0 checkBox"
                    type="checkbox"
                    checked={item.completed}
                    onChange={() => dispatch(handleCheckBox(item.id))}
                  />
                </div>
                <div className="col-9 h-100 pt-1 ps-3 ps-md-2 ps-lg-0 bg-primarys">
                  <li
                    className="ItemName bg-successs"
                    style={
                      item.completed == true
                        ? { textDecoration: "line-through" }
                        : { textDecoration: "none" }
                    }
                  >
                    {item.itemName}
                  </li>
                </div>

                {FormVisibility == false && (
                  <>
                    <div
                      className="col-1 h-100 bg-primarys pt-1"
                      onClick={() => handleEditList(item)}
                    >
                      <FaPen />
                    </div>
                    <div
                      className="col-1 h-100 bg-warnings pt-1"
                      onClick={() => dispatch(removeList(item.id))}
                    >
                      <FaTrashAlt />
                    </div>
                  </>
                )}
              </div>
            ))}
      </ul>
    </>
  );
}

export default TodoList;
