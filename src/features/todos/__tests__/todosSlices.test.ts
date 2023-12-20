import todosReducer, { load, add, update, toggle, remove } from '../todosSlice'

// global.localStorage = {
//     getItem: jest.fn(),
//     setItem: jest.fn(),
//     length: 0,
//     key: jest.fn(),
//     removeItem: jest.fn(),
//     clear: jest.fn(),
// }

describe('todosSlice', () => {
    const initialState = {
        todos: [],
    }

    it('should have initial state', () => {
        expect(todosReducer(undefined, { type: 'unknown' })).toEqual(initialState)
    })

    it('should load todos', () => {
        const todos = [
            { id: '1', task: 'Task 1', completed: false },
            { id: '2', task: 'Task 2', completed: true },
        ]
        expect(todosReducer(initialState, load(todos))).toEqual({ todos })
    })

    it('should add todo', () => {
        const todo = { id: '1', task: 'Task 1', completed: false }
        expect(todosReducer(initialState, add(todo))).toEqual({ todos: [todo] })
    })

    it('should update todo', () => {
        const todo = { id: '1', task: 'Task 1', completed: false }
        const updatedTodo = { id: '1', task: 'Pokemon', completed: false }
        const state = { todos: [todo] }
        expect(todosReducer(state, update(updatedTodo))).toEqual({ todos: [updatedTodo] })
    })

    it('should toggle todo', () => {
        const todo = { id: '1', task: 'Task 1', completed: false }
        const state = { todos: [todo] }
        expect(todosReducer(state, toggle(todo.id))).toEqual({ todos: [{ ...todo, completed: true }] })
    })

    it('should remove todo', () => {
        const todo = { id: '1', task: 'Task 1', completed: false }
        const state = { todos: [todo] }
        expect(todosReducer(state, remove(todo.id))).toEqual({ todos: [] })
    })
})