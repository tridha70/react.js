import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export type UserFormData = {
  name: string;
  email: string;
  phone: string;
  city: string;
  role: string;
};

const initialState: UserFormData = {
  name: "",
  email: "",
  phone: "",
  city: "",
  role: "",
};

const userSlice = createSlice({
  name: "userForm",
  initialState,
  reducers: {
    saveUser: (_state, action: PayloadAction<UserFormData>) => {
      return { ...action.payload };
    },
    clearUser: () => initialState,
  },
});

export const { saveUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
