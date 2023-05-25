export const addList = (id, itemName, completed) => {
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
