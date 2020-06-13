import React from 'react';
import { Link } from 'react-router-dom';

import axios from 'axios';

const Todo = ({ todo }) => {
  const handleDelete = (e) => {
    const r = window.confirm('Are you sure you want to delete this todo?')
    if (r == true) {
      axios.post('http://localhost:4000/todos/delete/'+ todo._id,{})
        .then(res => console.log(res))
        .catch(err => console.log(err));
    }
  }
  return (
    <tr>
     <td className={todo.done ? "done": ""}>{todo.description}</td>
     <td className={todo.done ? "done": ""}>{todo.responsible}</td>
     <td className={todo.done ? "done" : ""}>{todo.priority}</td>
     <td>
       { <Link to={`/edit/${todo._id}`}>Edit</Link>}
       {' '}
       <a style={{color: 'red', cursor: 'pointer'}}onClick={handleDelete}>X</a>
     </td>
    </tr>
  );
}

export default Todo;
