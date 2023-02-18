const { createSlice } = require('@reduxjs/toolkit');

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        add(state, action) {
            const { id, name } = action.payload;
            const existingItem = state.find(item => item.id === id);
            if (existingItem) {
              existingItem.quantity += 1;
            } else {
              state.push({...action.payload,quantity: 1 });
            }
          },
          remove(state, action) {
            const existingItem = state.find(item => item.id === action.payload);
            if (existingItem) {
              if (existingItem.quantity > 1) {
                existingItem.quantity -= 1;
              } else {
                return state.filter(item => item.id !== action.payload);
              }
            }
          },
    },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
