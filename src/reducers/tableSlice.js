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
    value: 0,
    users: getData(200),
  },
  reducers: {
    increment: state => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    removeUser: (state, action) => {
      state.users = action.payload;
    },
    addUser : (state, action) => {
      state.users = action.payload;
    },
    
  }
})

export const { increment, decrement, incrementByAmount, removeUser,addUser } = tableSlice.actions;

export const selectCount = state => state.tableData.value
export const selectUsers = state => state.tableData.users
export default tableSlice.reducer;