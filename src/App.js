import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { todoReducer } from './reducer/reducer';
import TodoList from './components/TodoList';

const store = createStore(todoReducer);

function App() {
    return (
        <Provider store={store}>
            <TodoList/>
        </Provider>
    );
}

export default App;