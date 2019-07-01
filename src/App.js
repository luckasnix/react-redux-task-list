import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer/reducer';
import TodoApp from './components/TodoApp';

const store = createStore(reducer);

store.subscribe(
    () => {
        console.log(store.getState());
    }
);

function App() {
    return (
        <Provider store={store}>
            <TodoApp/>
        </Provider>
    );
}

export default App;