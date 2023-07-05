import { useState } from 'react'
import Todos from './components/Todos'

const mockTodos = [
  {
    id: '1',
    title: 'terminar todos',
    completed: true
  },
  {
    id: '2',
    title: 'realizar evaluador de calidad de imagen',
    completed: false
  },
  {
    id: '3',
    title: 'terminar de leer IT',
    completed: false
  }
]

const App = (): JSX.Element => {
  const [todos, setTodos] = useState(mockTodos)

  const handleRemove = (id: string): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
      <Todos
        onRemoveTodo = {handleRemove}
        todos={todos}/>
    </div>
  )
}

export default App
