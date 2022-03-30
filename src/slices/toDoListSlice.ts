import { createSlice, createAsyncThunk, nanoid, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";

export interface TaskType{
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

export interface ToDoState{
    toDoList: Array<TaskType>,
    status: string,
    error: null | string,
    user: string,
}


const initialState = {
    toDoList: [],
    status: "idle",
    error: null,
    user: '',
}

export const fetchList = createAsyncThunk('toDoList/fetchList', async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
    // const response = await axios.get('https://jsonplaceholder.typicode.com/todos1');
    return response.data
})

const toDoListSlice = createSlice({
    name: "toDoList",
    initialState,
    reducers:{
        userLogin: (state:RootState, action:PayloadAction<string>) => {
            state.user = action.payload;
        },
        userLogOut: (state:RootState) => {
            state.user = "";
        },
        taskCompletedClick:(state:RootState, action) =>{
            const taskId  = action.payload;
            const index = state.toDoList.findIndex((task:TaskType) => task.id.toString() === taskId);
            state.toDoList[index].completed = !state.toDoList[index].completed;
        },
        taskDragAndDrop: (state:RootState, action) => {
            const taskId = action.payload.id;
            const actionType = action.payload.actionType;
            const index = state.toDoList.findIndex((task:TaskType) => task.id.toString() === taskId);
            if(actionType === "dragUnCompleted"){
                state.toDoList[index].completed = false;
            }
            else if(actionType === "dragCompleted"){
                state.toDoList[index].completed = true;
            }
        },
        taskDelete: (state:RootState, action:PayloadAction<string>) => {
            const value  = action.payload;
            const newList = state.toDoList.filter((task:TaskType) => task.id.toString() !== value);
            state.toDoList = newList;
        },
        addTask: (state:RootState, action:PayloadAction<string>) =>{
            console.log(nanoid())
            state.toDoList.push({
                id:nanoid(),
                userId: state.user,
                completed: false,
                title: action.payload
            })
        }
    },
    extraReducers(builder){
        builder.addCase(fetchList.pending, (state:RootState, action) => {
            state.status = 'loading'
        })
        .addCase(fetchList.fulfilled, (state:RootState, action) => {
            state.status = 'succeeded'
            state.toDoList = action.payload
        })
        .addCase(fetchList.rejected, (state:RootState, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})

export const { userLogin, taskDragAndDrop, userLogOut, addTask, taskDelete, taskCompletedClick } = toDoListSlice.actions;

export default toDoListSlice.reducer;