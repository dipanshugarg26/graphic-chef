import { createSlice } from '@reduxjs/toolkit'

export const appState = createSlice({
  name: 'app',
  initialState: {
    value: 0,
  },
  reducers: {
    setValue: (state, action) => {
      state.value = action.payload
    },
  },
})

export const selectValue = (state) => state.app.value

export const { setValue } = appState.actions

export default appState.reducer