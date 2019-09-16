import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import TaskApp from './pages/TaskApp'

function App() {
  return (
    <Provider store={store}>
      <TaskApp/>
    </Provider>
  )
}

export default App