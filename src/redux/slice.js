import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  otherState: []
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost(state, action) {
      state.posts.push(action.payload);
    }
  }
});

export const { addPost } = postSlice.actions;

export const selectPosts = (state) => state.post.posts;

export default postSlice.reducer;
