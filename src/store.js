import { configureStore } from "@reduxjs/toolkit";
import { usersSlice } from "./redux/users/usersSlice";

const store = configureStore({
    reducer: {
      users: usersSlice.reducer,
    },
});

export default store;