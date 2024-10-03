import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/store/features/rootPageApi";

interface UsersState {
  activeUsers: User[];
  archivedUsers: User[];
}

const initialState: UsersState = {
  activeUsers: [],
  archivedUsers: [],
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    setActiveUsers: (state, action: PayloadAction<User[]>) => {
      state.activeUsers = action.payload;
    },
    archiveUser: (state, action: PayloadAction<number>) => {
      const userToArchive = state.activeUsers.find(
        (user) => user.id === action.payload,
      );
      if (userToArchive) {
        state.activeUsers = state.activeUsers.filter(
          (user) => user.id !== action.payload,
        );
        state.archivedUsers.push(userToArchive);
      }
    },
    removeUser: (state, action: PayloadAction<number>) => {
      state.activeUsers = state.activeUsers.filter(
        (user) => user.id !== action.payload,
      );
    },
    restoreUser: (state, action: PayloadAction<number>) => {
      const userToRestore = state.archivedUsers.find(
        (user) => user.id === action.payload,
      );
      if (userToRestore) {
        state.archivedUsers = state.archivedUsers.filter(
          (user) => user.id !== action.payload,
        );
        state.activeUsers.push(userToRestore);
      }
    },
  },
});

export const { setActiveUsers, archiveUser, removeUser, restoreUser } =
  usersSlice.actions;
export const usersReducer = usersSlice.reducer;
