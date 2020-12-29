import { createSlice } from '@reduxjs/toolkit'

function createData(id, randomSelection) {
  return { id, name: `Task 403 ${randomSelection}`, phone: '9000202161' + randomSelection, email: 'abcd@gamil.com', gender: 'male', locations: 'Delhi,Mumbai' };
}

function getData(num) {
  const rows = [];
  for (let i = 0; i < num; i += 1) {
    const randomSelection = Math.floor(Math.random() * 10);
    rows.push(createData(i, randomSelection));
  }
  return rows;
}

export const tableSlice = createSlice({
  name: 'tableData',
  initialState: {
    users: getData(200),
  },
  reducers: {
    removeUser: (state, action) => {
      state.users = action.payload;
    },
    addUser: (state, action) => {
      state.users = action.payload;
    },
    updateUser: (state, action) => {
      state.users = action.payload;
    },
  }
})

export const { removeUser, addUser, updateUser } = tableSlice.actions;

export const selectCount = state => state.tableData.value
export const selectUsers = state => state.tableData.users
export default tableSlice.reducer;