import React from 'react';
import { Link } from 'react-router-dom';


const Todo = ({ todo }) => (
  <tr>
   <td className={todo.done ? "done": ""}>{todo.description}</td>
   <td className={todo.done ? "done": ""}>{todo.responsible}</td>
   <td className={todo.done ? "done" : ""}>{todo.priority}</td>
   <td>
     { <Link to={`/edit/${todo._id}`}>Edit</Link>}
   </td>
  </tr>
);

export default Todo;
