import React, { useState} from 'react'
import { useDispatch } from 'react-redux';
import { addNewTodo } from '../redux/actions';

const TodoForm = () => {

    const [text, setText] = useState("");

    // initialise dispatch
    const dispatch = useDispatch();

    const onFormSubmit = (e) => {
        // prevent default actions of browswer
        e.preventDefault();

        // we cannot directly call api function
        // because we are using redux we need to dispatch the functio
        // for that import useDispatch from react-redux
        dispatch(addNewTodo(text));
        setText("");
    }

    const onInputChange = (e) => {
        setText(e.target.value);
    }



  return (
      <form className='form' onSubmit={onFormSubmit}>
          <input 
              placeholder='Enter new to do item ...'
              className='input'
              onChange={onInputChange}
              value={text}
          />
      </form>
  )
}

export default TodoForm