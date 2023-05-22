export const addList = (id, itemName, completed) => {
  console.log("data udah kekirim");
  return {
    type: "addData",
    data: { id, itemName, completed },
  };
};

export const removeList = (id) => {
  return {
    type: "removeData",
    id: id,
  };
};

export const updateList = (payload) => {
  return {
    type: "updateData",
    payload,
  };
};

export const handleCheckBox = (id) => {
  return {
    type: "CheckBoxTodo",
    id: id,
  };
};

// Button Cathergory
export const AllList = () => {
  return {
    type: "AllList",
  };
};

export const Activelist = () => {
  return {
    type: "ActiveList",
  };
};
export const CompletedList = () => {
  return {
    type: "CompletedList",
  };
};
