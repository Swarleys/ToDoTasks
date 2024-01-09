import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import socket from '@/lib/socket';
export interface Todo {
    id: string;
    task: string;
    completed: boolean;
}

interface TodosState {
    todos: Todo[];
}

const initialState: TodosState = {
    todos: [],
};

const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        load: (state, action: PayloadAction<Todo[]>) => {
            state.todos = action.payload;
        },
        add: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
            socket.emit('addTodo', action.payload);
        },
        update: (state, action: PayloadAction<Todo>) => {
            const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
            if (todoIndex !== -1) {
                state.todos[todoIndex] = action.payload;
                localStorage.setItem('todos', JSON.stringify(state.todos));
                socket.emit('updateTodo', action.payload);
            }
        },
        toggle: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
                localStorage.setItem('todos', JSON.stringify(state.todos));
                socket.emit('toggleTodo', todo.id, todo.completed);
            }
        },
        remove: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
            localStorage.setItem('todos', JSON.stringify(state.todos));
            socket.emit('removeTodo', action.payload);
        },
    },
});

export const { load, add, update, toggle, remove } = todosSlice.actions;

export const selectTodos = (state: { todos: TodosState }) => state.todos.todos;

export default todosSlice.reducer;
