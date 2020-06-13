import React, { useState } from 'react';

import { useInput } from '../hooks/useInput';

const CreateTodo = ({}) => {
  const { value: description, bind: bindDescription, reset: resetDescription } = useInput('');
  const { value: responsible, bind: bindResponsible, reset: resetResponsible } = useInput('');
  const { value: done, bind: bindDone, reset: resetDone } = useInput(false);
  const [priority, setPriority] = useState('Low');

  const onSubmit = e => {
    e.preventDefault();
    console.log({
      description,
      responsible,
      done,
      priority,
    });
    resetAllFields();
  }

  const resetAllFields = () => {
    resetDescription();
    resetResponsible();
    resetDone();
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
