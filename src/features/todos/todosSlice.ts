import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Todo {
    id: string;
    title: string;
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
        add: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        update: (state, action: PayloadAction<Todo>) => {
            const todoIndex = state.todos.findIndex(todo => todo.id === action.payload.id);
            if (todoIndex !== -1) {
                state.todos[todoIndex] = action.payload;
            }
        },
        toggle: (state, action: PayloadAction<string>) => {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        },
        remove: (state, action: PayloadAction<string>) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
    },
});

export const { add, update, toggle, remove } = todosSlice.actions;

export const selectTodos = (state: { todos: TodosState }) => state.todos.todos;

export default todosSlice.reducer;
