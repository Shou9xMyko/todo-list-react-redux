import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addList, updateList } from "../../Redux/Action/Action";
import "./Form.css";

const Form = ({ FormVisibility, EditTodoList, cancelUpdateList }) => {
  const [inputVal, setInputVal] = useState("");

  const [updateValue, setUpdateValue] = useState("");

  const [id, setId] = useState(4);

  const dispatch = useDispatch();

  useEffect(() => {
    setUpdateValue(EditTodoList.itemName);
  }, [EditTodoList]);

  const sendData = () => {
    if (inputVal != "") {
      setId(id + 1);
      dispatch(addList(id, inputVal, false));
    }
  };

  const updateSubmit = (e) => {
    e.preventDefault();
    let updateData = {
      id: EditTodoList.id,
      itemName: updateValue,
      completed: false,
    };

    dispatch(updateList(updateData));
  };

  const handleChangeUpdate = (e) => {
    setUpdateValue(e.target.value);
  };

  return (
    <>
      {FormVisibility === false ? (
        <div className="row ">
          <div className="col-10 ps-0">
            <input
              className="form-control"
              type="text"
              required
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
            />
          </div>
          <div className="col-2 p-0">
            <button
              className="btn w-100"
              style={{ backgroundColor: "#6610f2", color: "white" }}
              onClick={sendData}
            >
              {" "}
              Add
            </button>
          </div>
        </div>
      ) : (
        <div className="row">
          <div className="col-10 ps-0">
            <input
              className="form-control"
              type="text"
              required
              value={updateValue || ""}
              onChange={handleChangeUpdate}
            />
          </div>
          <div className="col-2 p-0">
            <button
              className="btn w-100 ps-1 pe-0 ps-md-0 pe-md-0"
              style={{ backgroundColor: "#6610f2", color: "white" }}
              onClick={updateSubmit}
            >
              {" "}
              Update
            </button>
          </div>
          <div
            className="col-12 bg-dangers p-0 mt-4"
            onClick={cancelUpdateList}
          >
            <button className="btn btn-primary w-100">Back</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Form;
