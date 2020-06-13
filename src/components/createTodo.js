import React, { useState } from 'react';
import axios from 'axios';

import { useInput } from '../hooks/useInput';

const CreateTodo = ({}) => {
  const { value: description, bind: bindDescription, reset: resetDescription } = useInput('');
  const { value: responsible, bind: bindResponsible, reset: resetResponsible } = useInput('');
  const [done, setDone] = useState(false);
  const [priority, setPriority] = useState('Low');

  const onSubmit = e => {
    e.preventDefault();

    const newTodo = {
      description,
      responsible,
      priority,
      done
    }
    console.log(newTodo)

    axios.post('http://localhost:4000/todos/add', newTodo)
      .then(res => console.log(res.data));

    resetAllFields();
  }

  const resetAllFields = () => {
    resetDescription();
    resetResponsible();
    setDone(false);
    setPriority('Low');
  }

  const changePriority = (e) => {
    setPriority(e.target.value);
  }
  return (
    <div>
      <p>Welcome to CreateTodo Component!</p>
        <div style={{marginTop: 10}}>
          <h3>Create New Todo</h3>
          <form onSubmit={onSubmit}>
              <div className="form-group">
                  <label>Description: </label>
                  <input
                    type="text"
                    className="form-control"
                    {...bindDescription}
                  />
              </div>
              <div className="form-group">
                  <label>Responsible: </label>
                  <input
                    type="text"
                    className="form-control"
                    {...bindResponsible}
                  />
              </div>
              <div className="form-group">
                  <div className="form-check form-check-inline">
                      <input  className="form-check-input"
                              type="radio"
                              name="priorityOptions"
                              id="priorityLow"
                              value="Low"
                              checked={priority === 'Low'}
                              onChange={changePriority}
                              />
                      <label className="form-check-label">Low</label>
                  </div>
                  <div className="form-check form-check-inline">
                      <input  className="form-check-input"
                              type="radio"
                              name="priorityOptions"
                              id="priorityMedium"
                              value="Medium"
                              checked={priority === 'Medium'}
                              onChange={changePriority}
                              />
                      <label className="form-check-label">Medium</label>
                  </div>
                  <div className="form-check form-check-inline">
                      <input  className="form-check-input"
                              type="radio"
                              name="priorityOptions"
                              id="priorityHigh"
                              value="High"
                              checked={priority === 'High'}
                              onChange={changePriority}
                              />
                      <label className="form-check-label">High</label>
                  </div>
              </div>

              <div className="form-group">
                  <input type="submit" value="Create Todo" className="btn btn-primary" />
              </div>
          </form>
      </div>
    </div>
  )
}

export default CreateTodo;
