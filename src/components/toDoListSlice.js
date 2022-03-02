import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    toDoList: [],
    status: "idle",
    error: null,
    user: '',
    show: 'all'
}

export const fetchList = createAsyncThunk('toDoList/fetchList', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    return response.data
})

const toDoListSlice = createSlice({
    name: "toDoList",
    initialState,
    reducers:{
        userLogin: (state, action) => {
            state.user = action.payload;
        },
        userLogOut: (state, action) => {
            state.user = "";
        },
        taskCompleted: (state, action) => {
            const value  = action.payload;
            const index = state.toDoList.findIndex(task => task.id.toString() === value);
            // console.log(value, "value")
            state.toDoList[index].completed = !state.toDoList[index].completed;
        },
        taskDelete: (state, action) => {
            const value  = action.payload;
            const newList = state.toDoList.filter(task => task.id.toString() !== value);
            state.toDoList = newList;
        },
        showFilter:(state, action) => {
            state.show = action.payload;
        },
        addTask: {
            reducer(state, action){
                console.log(action.payload)
                state.toDoList.push({
                    ...action.payload,
                    userId: state.user
                });
            },
            prepare(title, user){
                return {
                    payload:{
                        id: nanoid(),
                        title: title,
                    }
                }
            }
        }
    },
    extraReducers(builder){
        builder.addCase(fetchList.pending, (state, action) => {
            state.status = 'loading'
        })
        .addCase(fetchList.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.toDoList = action.payload
        })
        .addCase(fetchList.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export const { userLogin, taskCompleted, userLogOut, showFilter, addTask, taskDelete } = toDoListSlice.actions;

export default toDoListSlice.reducer;