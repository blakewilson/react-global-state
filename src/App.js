import React, { useContext, useEffect, useState } from 'react';
import './App.css';

/**
 * Import our Context from our store, used to create our store and dispatch
 * variables.
 */
import { Context } from './store';

function App() {
  /**
   * useContext will create two new variables for you to use: state and dispatch.
   * The state variable let's you access the entire global state of your store,
   * while dispatch will allow you to call a reducer to set new state.
   */
  const [state, dispatch] = useContext(Context)

  /**
   * Here, we will use the SET_TODOS reducer to set the initial state of the todos.
   * A good example of this use case would be if you had a fetch() request to display
   * the initial todos from your API, etc.
   */
  useEffect(() => {
    let todos = ['Get groceries', 'Go to the gym', 'Cook Dinner']

    dispatch({
      type: 'SET_TODOS',
      payload: todos
    })
  }, [])

  /**
   * Upon submission of our form, we'll call two reducers. The first reducer, ADD_TODO
   * will get the todoInput state and add it as a todo item. Then, we'll dispatch the
   * SET_TODO_INPUT reducer to set its state back to default.
   */
  const onSubmit = e => {
    e.preventDefault()

    dispatch({
      type: 'ADD_TODO',
      payload: state.todoInput
    })

    dispatch({
      type: 'SET_TODO_INPUT',
      payload: ''
    })
  }

  /**
   * Upon change of our todo input, we will dispatch the SET_TODO_INPUT reducer to update the
   * inputs value.
   */
  const onChange = e => {
    dispatch({
      type: 'SET_TODO_INPUT',
      payload: e.target.value
    })
  }

  return (
    <div className="App">
      <h1>My Todos</h1>
      <ul>
        {state.todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <form
        onSubmit={e => onSubmit(e)}>
        <div className="form-control">
          <label
            for="todo">Add an Item</label>
          <input
            required
            autoFocus
            type="text"
            placeholder="Enter a todo item"
            id="todo"
            value={state.todoInput}
            onChange={e => onChange(e)} />
        </div>

        <button type="submit">Add a Todo</button>
      </form>
    </div>
  );
}

export default App;
