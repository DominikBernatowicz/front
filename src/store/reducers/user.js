import { createSlice } from '@reduxjs/toolkit'

const initialState = { isSessionActive: false, isLogin: false, sessionValid: '' }

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setSessionStatus(state, action) {
      state.isSessionActive = action.payload;
    },
    setLoginStatus(state, action) {
      state.isLogin = action.payload;
    },
    setSessionValid(state, action) {
      state.sessionValid = action.payload;
    },
  },
})


export const { setSessionStatus, setLoginStatus, setSessionValid } = userSlice.actions
export default userSlice.reducer
