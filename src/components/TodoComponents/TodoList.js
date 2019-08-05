import React from 'react'
import Todo from './Todo';

const TodoList = props => {
  return (
    <div>
      {props.tasks.map( item => (
        <Todo key={item.id} item={item} />
      ))}
    </div>
  )
}

export default TodoList;