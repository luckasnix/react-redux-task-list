import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import ToDoPage from './pages/TodoPage'

function App() {
  return (
    <Provider store={store}>
      <ToDoPage/>
    </Provider>
  )
}

export default App