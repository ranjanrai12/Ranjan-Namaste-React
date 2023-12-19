import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    profileName: "Ranjan",
  },
  reducers: {
    updateProfileName: (state, action) => {
      state.profileName = action.payload;
    },
  },
});

export default userSlice.reducer;
