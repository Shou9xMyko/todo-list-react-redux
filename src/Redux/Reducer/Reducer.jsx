import { dataItem } from "../../ListItem/ListItem";

const Reducers = (state = dataItem, action) => {
  switch (action.type) {
    case "addData":
      return [...state, action.data];

    case "removeData":
      return state.filter((data) => data.id != action.id);
    case "CheckBoxTodo":
      const todoArray = state.map((items) => {
        if (items.id == action.id) {
          return { ...items, completed: !items.completed };
        }
        return items;
      });
      return todoArray;
    case "updateData":
      let data = action.payload;
      const arrayUpdateData = [];
      state.map((items) => {
        if (items.id == data.id) {
          items.id = data.id;
          items.itemName = data.itemName;
          items.completed = data.completed;
        }
        arrayUpdateData.push(items);
      });
      return arrayUpdateData;
    default:
      return state;
  }
};

export default Reducers;
