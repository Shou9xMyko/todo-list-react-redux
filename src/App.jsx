import "./App.css";
import TodoList from "./component/TodoList/HasilTodoList";
import Form from "./component/Form/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonStatus from "./component/ButtonStatus/ButtonStatus";

function App() {
  const [formVisibility, setFormVisibility] = useState(false);

  const [editTodo, setEditTodo] = useState("");

  const [filterTodo, setFilterTodo] = useState([]);

  const handleFilterTodo = (filter) => {
    setFilterTodo(filter);
  };

  const handleEditList = (data) => {
    setFormVisibility(true);
    setEditTodo(data);
  };

  const cancelUpdateList = () => {
    setFormVisibility(false);
  };

  return (
    <div className="wrapperApp bg-dangers mt-5">
      <h1 className="fw-bold titlePlan text-center">
        What`s the plan for today ?
      </h1>
      <div className="wrapperComponent ">
        <Form
          FormVisibility={formVisibility}
          EditTodoList={editTodo}
          cancelUpdateList={cancelUpdateList}
        />
        <ButtonStatus
          handleFilterTodo={handleFilterTodo}
          filterTodo={filterTodo}
        />
        <TodoList
          handleEditList={handleEditList}
          FormVisibility={formVisibility}
          filterTodo={filterTodo}
        />
      </div>
    </div>
  );
}

export default App;
