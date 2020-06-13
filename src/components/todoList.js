import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Todo from './todo';

const TodoList = () => {
  const [todos, setTodos] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:4000/todos/')
      .then(res => {
        setTodos(res.data)
      })
      .catch((err)=> {
        console.log(err)
      })
  },[todos])

  const todoList = () => {
    return todos.map((t, i) => (
      <Todo todo={t} key={i} />
    ))
  }

  return (
    <div>
      <h3>Todo List</h3>
      <table className="table table-striped" style={{ marginTop: 20 }} >
        <thead>
          <tr>
            <th>Description</th>
            <th>Owner</th>
            <th>Priority</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          { todoList() }
        </tbody>
      </table>
    </div>
  )
}

export default TodoList;
