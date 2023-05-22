import { dataItem } from "../../ListItem/ListItem";

const Reducers = (state = dataItem, action) => {
  if (action.type == "addData") {
    // console.log(action.data);
    return [...state, action.data];
  } else if (action.type == "removeData") {
    return state.filter((data) => data.id != action.id);
  } else if (action.type == "CheckBoxTodo") {
    const todoArray = [];
    state.map((items) => {
      if (items.id == action.id) {
        items.completed = !items.completed;
      }
      todoArray.push(items);
    });
    return todoArray;
  } else if (action.type == "updateData") {
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
  } else if (action.type == "AllList") {
    console.log(state);
    return state;
  } else if (action.type == "ActiveList") {
    return state;
  } else if (action.type == "CompletedList") {
    return state;
  } else {
    return state;
  }
  // switch (action.type) {
  //   case "addData":
  //     return [...state, action.data];

  //   case "removeData":
  //     return state.filter((data) => data.id != action.id);
  //   case "CheckBoxTodo":
  //     const todoArray = [];
  //     state.map((items) => {
  //       if (items.id == action.id) {
  //         items.completed = !items.completed;
  //       }
  //       todoArray.push(items);
  //     });
  //     return todoArray;
  //   case "updateData":
  //     let data = action.payload;
  //     const arrayUpdateData = [];
  //     state.map((items) => {
  //       if (items.id == data.id) {
  //         items.id = data.id;
  //         items.itemName = data.itemName;
  //         items.completed = data.completed;
  //       }
  //       arrayUpdateData.push(items);
  //     });
  //     return arrayUpdateData;
  //   case "AllList":
  //     // const arrayAllList = [];
  //     // state.map((items) => {
  //     //   arrayAllList.push(items);
  //     // });
  //     console.log(state);
  //     break;

  //   case "ActiveList":
  //     const arrayActiveList = [];
  //     state.map((items) => {
  //       arrayActiveList.push(items);
  //     });
  //     return arrayActiveList;

  //   case "CompletedList":
  //     const arrayCompletedList = [];
  //     state.map((items) => {
  //       arrayCompletedList.push(items);
  //     });
  //     return arrayCompletedList.filter((item) => item.completed == true);

  //   default:
  //     return state;
  // }
};

export default Reducers;
