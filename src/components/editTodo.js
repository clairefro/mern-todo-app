import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { useInput } from '../hooks/useInput';

const EditTodo = (props) => {
  const { value: description, bind: bindDescription, setValue: setDescription, reset: resetDescription } = useInput('');
  const { value: responsible, bind: bindResponsible, setValue: setResponsible, reset: resetResponsible } = useInput('');
  const [priority, setPriority] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    console.log(props.match.params.id)
    axios.get('http://localhost:4000/todos/' + props.match.params.id)
      .then(res => {
        setDescription(res.data.description);
        setResponsible(res.data.responsible);
        setPriority(res.data.priority);
        setDone(res.data.done);
      })
      .catch(err => console.log(err));
  },[])

  const onSubmit = (e) => {
    e.preventDefault();
    const updatedTodo = {
      description,
      responsible,
      priority,
      done,
    }
    axios.post('http://localhost:4000/todos/update/' + props.match.params.id, updatedTodo)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
    props.history.push('/');
  }

  const changePriority = (e) => {
    setPriority(e.target.value);
  }

  return (
    <div>
      <h3 align="center">Update Todo</h3>
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
                          checked={priority==='Low'}
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
                          checked={priority==='Medium'}
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
                          checked={priority==='High'}
                          onChange={changePriority}
                          />
                  <label className="form-check-label">High</label>
              </div>
          </div>
          <div className="form-check">
              <input  className="form-check-input"
                      id="completedCheckbox"
                      type="checkbox"
                      name="completedCheckbox"
                      onChange={(e)=>setDone(!done)}
                      checked={done}
                      value={done}
                      />
              <label className="form-check-label" htmlFor="completedCheckbox">
                  Completed
              </label>
          </div>

          <br />

          <div className="form-group">
              <input type="submit" value="Update Todo" className="btn btn-primary" />
          </div>
      </form>
    </div>
  );
}

export default EditTodo;
