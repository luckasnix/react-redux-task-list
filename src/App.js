import React from 'react'
import { Provider } from 'react-redux'
import store from './store/store'
import TaskPage from './pages/TaskPage'

function App() {
  return (
    <Provider store={store}>
      <TaskPage/>
    </Provider>
  )
}

export default App