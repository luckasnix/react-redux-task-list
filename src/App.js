import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';
import TodoList from './components/TodoList';

const store = createStore(reducer);

function App() {
    return (
        <Provider store={store}>
            <TodoList/>
        </Provider>
    );
}

export default App;