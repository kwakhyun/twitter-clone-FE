import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import { AccountAPI } from "../../api/api";
export const basic = createAsyncThunk(
  "name/GETname",
  async (payload, thunkAPI) => {
    try {
      const data = await api.get(
        `http://54.177.177.138:8080/api/post/${payload}`
      );

      return thunkAPI.fulfillWithValue(data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);
//or
export const otherbasic = createAsyncThunk(
  "name/GETname",
  async (payload, thunkAPI) => {
    try {
      const data = await AccountAPI.login(); //로그인 axios로 데이터 가져온것

      return thunkAPI.fulfillWithValue(data.data.data);
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const Basic = createSlice({
  name: "posts",
  initialState: { list: [] },
  reducers: {},
  extraReducers: {},
});

export const {} = Basic.actions;
export default Basic.reducer;
