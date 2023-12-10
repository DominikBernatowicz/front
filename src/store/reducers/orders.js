import { createSlice } from '@reduxjs/toolkit'

const initialQueryParams = {
  shop: { id: ".", name: "WSZYSTKIE SKLEPY" },
  page: 0,
  perPage: 15,
  activeSort: {key: '-created_at', value: 'Najnowsze'},
  activeFilter: { key: "status", searchValue: "new_order" }
}

const initialState = { filters: initialQueryParams }

const userSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    saveFilters(state, action) {
      state.filters = action.payload;
    },
  },
})


export const { saveFilters } = userSlice.actions
export default userSlice.reducer
