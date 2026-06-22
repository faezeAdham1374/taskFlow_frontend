import {
    createSlice,
    createAsyncThunk,
} from "@reduxjs/toolkit";
import { api } from "../services/api";
import type  { Task } from "../types/task";

interface TaskState {
    tasks: Task[];
    loading: boolean;
    error: string | null;
    search: string;
}

const initialState: TaskState = {
    tasks: [],
    loading: false,
    error: null,
    search: "",
};

export const fetchTasks = createAsyncThunk(
    "tasks/fetchTasks",
    async () => {
        const response = await api.get("/todos");
        return response.data;
    }
);

const taskSlice = createSlice({
    name: "tasks",
    initialState,
    reducers: {
        setSearch: (state, action) => {
            state.search = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchTasks.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchTasks.fulfilled, (state, action) => {
                state.loading = false;
                state.tasks = action.payload;
            })
            .addCase(fetchTasks.rejected, (state) => {
                state.loading = false;
                state.error = "Failed to fetch tasks";
            });
    },
});

export const { setSearch } = taskSlice.actions;
export default taskSlice.reducer;
